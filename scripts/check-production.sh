#!/usr/bin/env bash
set -euo pipefail

production_origin="https://ecotinylivinghub.com"
production_host="ecotinylivinghub.com"
legacy_host="ecotinylivinghub.thrwds.com"
vercel_host="eco-tiny-living-site.vercel.app"
vercel_alias="https://$vercel_host"
user_agent="ETLH-production-smoke-check/1.4"

pass() { printf '✓ %s\n' "$1"; }
fail() { printf 'x %s\n' "$1" >&2; exit 1; }

edge_ip=$(getent ahostsv4 "$vercel_host" | awk 'NR==1 { print $1 }')
[[ -n "$edge_ip" ]] || fail "Could not resolve the Vercel production alias."
https_resolve_args=(--resolve "$production_host:443:$edge_ip")
http_resolve_args=(--resolve "$production_host:80:$edge_ip")
legacy_resolve_args=(--resolve "$legacy_host:443:$edge_ip")

fetch_body() {
  local path="$1"
  local output="$2"
  local status
  status=$(curl --silent --show-error --location --max-time 20 --user-agent "$user_agent" "${https_resolve_args[@]}" --output "$output" --write-out '%{http_code}' "$production_origin$path")
  [[ "$status" == "200" ]] || fail "$path returned $status; expected 200."
}

check_html() {
  local path="$1"
  local marker="$2"
  local body
  body=$(mktemp)
  fetch_body "$path" "$body"
  grep -Fq "$marker" "$body" || fail "$path did not include expected marker: $marker"
  rm -f "$body"
  pass "$path returned expected HTML"
}

check_canonical() {
  local path="$1"
  local expected="$production_origin$path"
  [[ "$path" == "/" ]] && expected="$production_origin/"
  local body
  body=$(mktemp)
  fetch_body "$path" "$body"
  grep -Fq "href=\"$expected\"" "$body" || fail "$path is missing canonical URL $expected."
  grep -Fq "content=\"$expected\"" "$body" || fail "$path is missing preferred-host Open Graph URL $expected."
  rm -f "$body"
  pass "$path exposes canonical and Open Graph preferred-host URLs"
}

check_status() {
  local path="$1"
  local expected="$2"
  local status
  status=$(curl --silent --show-error --max-time 20 --user-agent "$user_agent" "${https_resolve_args[@]}" --output /dev/null --write-out '%{http_code}' "$production_origin$path")
  [[ "$status" == "$expected" ]] || fail "$path returned $status; expected $expected."
  pass "$path returned $expected"
}

check_redirect() {
  local source="$1"
  local expected="$2"
  local result
  result=$(curl --silent --show-error --max-time 20 --user-agent "$user_agent" "${https_resolve_args[@]}" --output /dev/null --write-out '%{http_code} %{redirect_url}' "$production_origin$source")
  [[ "$result" == "308 $expected" || "$result" == "307 $expected" || "$result" == "301 $expected" || "$result" == "302 $expected" ]] || fail "$source returned $result; expected redirect to $expected."
  pass "$source redirects to $expected"
}

check_alias_redirect() {
  local path="$1"
  local expected="$production_origin$path"
  local result
  result=$(curl --silent --show-error --max-time 20 --user-agent "$user_agent" --output /dev/null --write-out '%{http_code} %{redirect_url}' "$vercel_alias$path")
  [[ "$result" == "308 $expected" || "$result" == "307 $expected" || "$result" == "301 $expected" || "$result" == "302 $expected" ]] || fail "$vercel_alias$path returned $result; expected a redirect to $expected."
  pass "Vercel alias redirects $path to the preferred host"
}

check_legacy_redirect() {
  local path="$1"
  local expected="$production_origin$path"
  local result
  result=$(curl --silent --show-error --max-time 20 --user-agent "$user_agent" "${legacy_resolve_args[@]}" --output /dev/null --write-out '%{http_code} %{redirect_url}' "https://$legacy_host$path")
  [[ "$result" == "308 $expected" || "$result" == "307 $expected" || "$result" == "301 $expected" || "$result" == "302 $expected" ]] || fail "Legacy host returned $result; expected a redirect to $expected."
  pass "Legacy thrwds.com host redirects $path to the preferred host"
}

check_http_to_https() {
  local path="$1"
  local expected="$production_origin$path"
  local result
  result=$(curl --silent --show-error --max-time 20 --user-agent "$user_agent" "${http_resolve_args[@]}" --output /dev/null --write-out '%{http_code} %{redirect_url}' "http://$production_host$path")
  [[ "$result" == "308 $expected" || "$result" == "307 $expected" || "$result" == "301 $expected" || "$result" == "302 $expected" ]] || fail "HTTP $path returned $result; expected redirect to $expected."
  pass "HTTP $path redirects to HTTPS"
}

check_asset() {
  local path="$1"
  local expected_type="$2"
  local headers body status
  headers=$(mktemp)
  body=$(mktemp)
  status=$(curl --silent --show-error --max-time 20 --user-agent "$user_agent" "${https_resolve_args[@]}" --dump-header "$headers" --output "$body" --write-out '%{http_code}' "$production_origin$path")
  [[ "$status" == "200" ]] || fail "$path returned $status; expected 200."
  grep -Eiq "^content-type:[[:space:]]*$expected_type" "$headers" || fail "$path did not return expected content type $expected_type."
  [[ -s "$body" ]] || fail "$path returned an empty body."
  rm -f "$headers" "$body"
  pass "$path returned a non-empty $expected_type asset"
}

check_security_headers() {
  local headers
  headers=$(mktemp)
  curl --silent --show-error --max-time 20 --user-agent "$user_agent" "${https_resolve_args[@]}" --dump-header "$headers" --output /dev/null "$production_origin/"
  grep -Eiq '^x-content-type-options:[[:space:]]*nosniff[[:space:]]*$' "$headers" || fail "Homepage is missing X-Content-Type-Options: nosniff."
  grep -Eiq '^referrer-policy:[[:space:]]*strict-origin-when-cross-origin[[:space:]]*$' "$headers" || fail "Homepage is missing Referrer-Policy: strict-origin-when-cross-origin."
  grep -Eiq '^permissions-policy:[[:space:]]*camera=\(\), microphone=\(\), geolocation=\(\)[[:space:]]*$' "$headers" || fail "Homepage is missing the expected Permissions-Policy."
  grep -Eiq '^x-frame-options:[[:space:]]*DENY[[:space:]]*$' "$headers" || fail "Homepage is missing X-Frame-Options: DENY."
  rm -f "$headers"
  pass "homepage exposes the baseline response security headers"
}

check_sitemap() {
  local body
  body=$(mktemp)
  fetch_body "/sitemap.xml" "$body"
  grep -Fq "<loc>$production_origin/</loc>" "$body" || fail "Sitemap is missing the homepage."
  grep -Fq "<loc>$production_origin/editorial-policy</loc>" "$body" || fail "Sitemap is missing /editorial-policy."
  grep -Fq "<loc>$production_origin/privacy</loc>" "$body" || fail "Sitemap is missing /privacy."
  grep -Fq "<loc>$production_origin/terms</loc>" "$body" || fail "Sitemap is missing /terms."
  grep -Fq "<loc>$production_origin/affiliate-disclosure</loc>" "$body" || fail "Sitemap is missing /affiliate-disclosure."
  local total unique
  total=$(grep -o '<loc>[^<]*</loc>' "$body" | wc -l | tr -d ' ')
  unique=$(grep -o '<loc>[^<]*</loc>' "$body" | sort -u | wc -l | tr -d ' ')
  [[ "$total" == "$unique" ]] || fail "Sitemap contains duplicate URLs."
  if grep -o '<loc>[^<]*</loc>' "$body" | grep -Fv "<loc>$production_origin/" >/dev/null; then
    fail "Sitemap contains a URL outside the preferred production origin."
  fi
  grep -Eiq '<loc>[^<]*(ecotinylivinghub\.thrwds\.com|vercel\.app|localhost|127\.0\.0\.1|preview)' "$body" && fail "Sitemap contains a legacy, preview, or local hostname."
  local robots
  robots=$(mktemp)
  fetch_body "/robots.txt" "$robots"
  grep -Fqx "Sitemap: $production_origin/sitemap.xml" "$robots" || fail "robots.txt does not point to the preferred production sitemap."
  if grep -Eiq '^Sitemap:' "$robots" && ! grep -Fqx "Sitemap: $production_origin/sitemap.xml" "$robots"; then
    fail "robots.txt declares a non-preferred sitemap host."
  fi
  rm -f "$robots"
  rm -f "$body"
  pass "sitemap.xml contains $total unique preferred-host URLs"
}

check_html "/" "Eco Tiny Living Hub"
check_html "/contact" "hello@ecotinylivinghub.com"
check_html "/editorial-policy" "Editorial Policy"
check_html "/privacy" "Privacy Policy"
check_html "/terms" "Terms of Use"
check_html "/affiliate-disclosure" "Affiliate Disclosure"
check_canonical "/"
check_canonical "/privacy"
check_status "/this-route-must-not-exist-etlh-smoke" "404"
check_status "/this-route-must-not-exist.json" "404"
check_status "/encoded-%6dissing-route" "404"
check_status "/this-route-must-not-exist-etlh-smoke?source=query" "404"
check_redirect "/Privacy" "$production_origin/privacy"
check_redirect "/About" "$production_origin/about"
check_redirect "/privacy/" "$production_origin/privacy"
check_alias_redirect "/editorial-policy?source=smoke"
check_legacy_redirect "/contact?source=legacy-smoke"
check_http_to_https "/privacy?source=http-smoke"
check_asset "/favicon.svg" "image/svg\+xml"
check_security_headers
check_sitemap

printf '\nProduction smoke checks PASSED.\n'
