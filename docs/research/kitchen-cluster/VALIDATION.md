# Kitchen-cluster artifact validation

Validated: 2026-07-19

## Intake

The four supplied artifacts were copied into this directory without content changes.

| File | SHA-256 |
|---|---|
| `ETLH_Kitchen_Cluster_Decision_Memo.md` | `974BDFB94BF2D7A9442666BC2DBA48C2E18A4693AFAE943FCEF9F0DDA798EBD4` |
| `cluster1_deep_validation.md` | `6E688BD3E794E95551DF905A42DBC5EA880DEDF5261FF1596AF3DE812B735E5D` |
| `etlh_firsthand_evidence.csv` | `14CAD249A977ED3F5D1E78644CDD5A6FF9D965BB1E3E888BBB8F0616D535CB37` |
| `ETLH_Content_Cluster_Evidence_Packet.md` | `CBD82E211979070BFB7E8CAF88E2FF42BEE485732AC8ED3BB909FEEA702D51CE` |

## Record-level checks

- The CSV parses as a 19-column table with 44 populated records and no blank cells in the supplied schema.
- Its cluster counts match the evidence packet: 18 kitchen records (`C1-001`–`C1-018`), 13 budget-renter records, and 13 decor records.
- The 18 kitchen record IDs and source URLs are present and unique within the CSV.
- The deep-validation file contains all labeled records `N-001`–`N-030`, their URLs, source-handling notes, pattern synthesis, query evidence, SERP observations, claim flags, and all four requested existing-article assessments.
- The decision memo's recommendation, caveats, first-action choice, and publication exclusions are traceable to sections in the deep-validation file.

## Count qualification

The deep-validation artifact should not be summarized as 30 clean, independent net-new records without a qualification. Its own line 594 states that `N-022` is held as corroboration only because of dedup risk, leaving 29 records it calls net-new plus that bridging record. The four Trustpilot excerpts (`N-027`–`N-030`) are distinct excerpts but share one review-page URL. Accordingly:

- retain the source artifact's labels unchanged;
- cite specific record IDs instead of relying on the aggregate “48 records” count;
- do not present the count as a representative sample or measured prevalence;
- keep `N-022` out of any independent-record total unless its dedup status is resolved.

## Source-boundary checks

- CalRecycle's current primary page confirms that California multifamily complexes of five or more units must participate in organics curbside collection or self-haul, and it lists property-owner/manager duties to provide tenant collection access and education. This supports the memo's narrow California verification only: <https://calrecycle.ca.gov/organics/slcp/collection/>.
- Hennepin County's current guidance includes a no-dishwasher path, supporting the memo's conclusion that ETLH must not assume every reader has a dishwasher: <https://www.hennepincounty.gov/choose-to-reuse/tips/low-waste-dishwashing>.
- Reddit and Trustpilot records support lived problems, language, and user-reported failures. They do not establish manufacturer-confirmed product behavior, technical performance, legal duties, or prevalence.
- No measured search volume, ranking difficulty, traffic, PAA capture, or ranking feasibility is contained in these artifacts.

## Decision state

The artifacts support a recommendation to continue the narrow kitchen-cluster pilot around apartment-composting logistics with odor troubleshooting as the lead problem. They do not record owner approval of a final cluster decision. The companion brief therefore marks the cluster as a candidate and the existing article as a refresh candidate.
