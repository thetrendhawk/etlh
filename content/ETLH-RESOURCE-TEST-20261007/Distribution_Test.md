# Useful resources distribution test

Prepared: October 7, 2026. Status: copy and links prepared; no social publication performed.

## Question and scope

Can a practical shared-laundry checklist or free apartment planner bring external readers to ETLH and lead to a useful resource action? Run one organic test on Pinterest and Instagram. No paid spend. Start the 14-day observation window when the first post is actually published; record its timestamp, URL, creative, and destination below. Do not claim the test has started from this preparation date.

## Destination links

Use these links only on external social surfaces. Preserve lowercase values. Do not add UTMs to internal site links, and never distribute an owner QA URL.

| Channel / creative | Destination |
|---|---|
| Pinterest / laundry | https://ecotinylivinghub.com/blog/shared-apartment-laundry-room-check?utm_source=pinterest&utm_medium=social&utm_campaign=etlh_resource_test_20261007&utm_content=laundry_checklist_v1 |
| Pinterest / planner | https://ecotinylivinghub.com/resources?utm_source=pinterest&utm_medium=social&utm_campaign=etlh_resource_test_20261007&utm_content=apartment_planner_v1 |
| Instagram / laundry | https://ecotinylivinghub.com/blog/shared-apartment-laundry-room-check?utm_source=instagram&utm_medium=social&utm_campaign=etlh_resource_test_20261007&utm_content=laundry_checklist_v1 |
| Instagram / planner | https://ecotinylivinghub.com/resources?utm_source=instagram&utm_medium=social&utm_campaign=etlh_resource_test_20261007&utm_content=apartment_planner_v1 |

The planner destination is the Resources page, where readers can open the planner or download the kit. This preserves a measurable, consent-controlled landing-page-to-resource journey. Linking directly to the standalone planner would bypass the tracked site landing page.

## Ready-to-use copy

**Laundry Pinterest title:** Shared Apartment Laundry Room Checklist

**Laundry Pinterest description:** Before carrying a load downstairs, check the machine instructions, payment setup, carrying route, and drying plan. This small-apartment guide helps you plan around the laundry room you actually use. Read the checklist at Eco Tiny Living Hub.

**Planner Pinterest title:** First Apartment, Less Waste: Free Move-In Planner

**Planner Pinterest description:** A first apartment does not need a giant shopping haul. Sort what you need now, what can wait, and what you already have, share, or borrow. Open the free apartment planner or download the four-page kit. No signup required.

**Laundry Instagram caption:** Shared laundry can mean more decisions before a load even starts. Check the machine instructions, payment setup, carrying route, and drying space first. Choose one step that makes your next trip easier. Read the shared-laundry checklist through the labeled link in our profile. #ApartmentLiving #SmallSpaceLiving #LaundryRoutine

**Planner Instagram caption:** A home, not a shopping haul. Before buying for your first apartment, sort what you need now, what can wait, and what you already have, share, or borrow. Our free planner includes budget totals, measurement checks, and a flexible move-in checklist. Open “Free apartment planner” through the link in our profile. No signup required. #FirstApartment #SmallSpaceLiving #LessWaste

**Creative briefs:** Laundry: a simple four-check graphic with “Instructions / Payment / Carrying route / Drying space” and a clear checklist CTA. Planner: a three-column graphic reading “Need now / Can wait / Already have, share, or borrow” and a free-planner CTA. Use readable text and the existing ETLH visual system; do not imply these are firsthand product tests. Visual assets are not yet produced.

Pinterest: place the matching URL in the Pin destination field. Instagram: place the matching URL in a labeled profile link or Story link sticker; caption URLs are not the click destination. Record the actual placement so results remain interpretable.

## Measurement and decision

Before publication, record the prior 14 completed days of GA4 sessions and useful events for these destinations, plus current platform reach and outbound clicks where available. No new baseline has been verified on October 7. The October 4 account audit is historical context in `docs/research/search-analytics-2026-10-04.md`.

After 14 completed days, filter GA4 Traffic acquisition by session campaign `etlh_resource_test_20261007`, then compare session source/medium and session manual ad content. Report sessions, engaged sessions, and the separate `resource_open` and `resource_download` key events. Use resource name, format, page path, and placement when inspecting event details; custom fields may require GA4 custom definitions and are not assumed to be registered. Record platform reach, saves, and outbound clicks separately.

Consent refusal means some visits are absent from GA4. Platform clicks and GA4 sessions will not necessarily match. Resource events measure link actions, not completed use. Do not add Google's automatic `file_download` to the custom `resource_download` count. Exclude synthetic and owner visits; test the site with `?etlh_qa=1` before publishing, never by clicking audience UTMs with normal collection enabled.

Decision rules:

- No platform outbound clicks: revise creative/CTA or placement before expanding output.
- Outbound clicks but no observed GA4 sessions: check the destination, consent effects, and attribution before interpreting demand.
- External campaign sessions but no useful actions: inspect the landing-page journey and revise its CTA; do not infer failure from a tiny sample.
- Useful actions in at least two verified external sessions: continue the stronger destination at the same scope and collect more evidence before scaling.

This experiment does not alter the frozen November 30 goals in `GOALS.md`. Social visits do not count as Google Search clicks; ambiguous sessions do not establish verified external usefulness.

## Publication and result log

| Creative | Published at | Post URL | Link placement | Observation end | Result |
|---|---|---|---|---|---|
| Pinterest laundry | Not published | — | — | — | Pending |
| Pinterest planner | Not published | — | — | — | Pending |
| Instagram laundry | Not published | — | — | — | Pending |
| Instagram planner | Not published | — | — | — | Pending |
