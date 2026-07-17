#!/usr/bin/env bash
set -euo pipefail

production_origin="https://ecotinylivinghub.thrwds.com"
http_origin="http://ecotinylivinghub.thrwds.com"
vercel_alias="https://eco-tiny-living-site.vercel.app"
user_agent="ETLH-production-smoke-check/1.0"

pass() { printf '✓ %s\n' "$1"; }
fail() { printf 'x %s\n' "$1" >&2; exit 1; }

fetch_body() {
  local url="$1"
  local output="$2"
  local status
  status=$(curl --silent --show-error --location --max-time 20 --user-agent "$user_agent" --output "$output" --write-out '%{http_code}' "$url")
  [[ "$status" == "200" ]] || fail "$url returned $status; expected 200."
}

check_html() {
  local path="$1"
  local marker="$2"
  local body
  body=$(mktemp)
  fetch_body "$production_origin$path" "$body"
  grep -Fq "$marker" "$body" || fail "$path did not include expected marker: $marker"
  rm -f "$body"
  pass "$path returned expected HTML"
}

check_status() {
  local path="$1"
  local expected="$2"
  local status
  status=$(curl --silent --show-error --max-time 20 --user-agent "$user_agent" --output /dev/null --write-out '%{http_code}' "$production_origin$path")
  [[ "$status" == "$expected" ]] || fail "$path returned $status; expected $expected."
  pass "$path returned $expected"
}

check_redirect() {
  local url="$1"
  local expected="$2"
  local result
  result=$(curl --silent --show-error --location --max-time 20 --user-agent "$user_agent" --output /dev/null --write-out '%{http_code} %{url_effective}' "$url")
  [[ "$result" == "200 $expected" ]] || fail "$url resolved as $result; expected 200 $expected."
  pass "$url resolves to the preferred host"
}

check_sitemap() {
  local body
  body=$(mktemp)
  fetch_body "$production_origin/sitemap.xml" "$body"

  grep -Fq "<loc>$production_origin/</loc>" "$body" || fail "Sitemap is missing the homepage."
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

  rm -f "$body"
  pass "sitemap.xml contains $total unique preferred-host URLs"
}

check_html "/" "Eco Tiny Living Hub"
check_html "/privacy" "Privacy Policy"
check_html "/terms" "Terms of Use"
check_html "/affiliate-disclosure" "Affiliate Disclosure"
check_status "/this-route-must-not-exist-etlh-smoke" "404"
check_redirect "$http_origin/privacy?source=smoke" "$production_origin/privacy?source=smoke"
check_redirect "$vercel_alias/terms?source=smoke" "$production_origin/terms?source=smoke"
check_sitemap

printf '\nProduction smoke checks PASSED.\n'
