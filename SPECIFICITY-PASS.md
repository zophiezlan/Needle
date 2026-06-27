# Specificity Pass — Workflow & Handover

> A playbook for making Needle's dorks feel like they were written by a collective of harm reduction
> experts, professionals, and peers — not generated from a template. Hand this to a fresh chat or a
> new contributor and they can continue the work without losing the thread.

**Status:** in progress · **Tracking PR:** [#13](https://github.com/zophiezlan/Needle/pull/13) ·
**Branch:** `claude/harm-reduction-dorks-specificity-m4hdih`

---

## 1. The Goal

The packs are competent but most dorks follow one recognisable template:

```txt
site:*.gov.au filetype:pdf "keyword" (synonym OR synonym)
```

That's a _researcher's_ pattern — domain wildcard + keyword + filetype. Its uniformity is the tell
that it wasn't built by insiders. Real expert knowledge is lumpy and specific.

**The thesis: specificity = named entities + insider vocabulary.** The thing an expert or peer knows
and a non-expert can't guess is _the names_ — the report series, the service, the dataset, the
jargon. That single substitution is the whole game:

```txt
# Generic (anyone could write this):
site:nuaa.org.au filetype:pdf

# Written by someone who knows the source:
site:nuaa.org.au "User's News"
```

### Locked decisions (do not re-litigate)

These were chosen by the project owner. Keep to them unless told otherwise:

1. **Reference layer first.** Catalogue real entities before writing dorks. Dorks are written
   _against_ the reference, never from generic synonym templates.
2. **AU-deep with a strong international layer.** Australia is the spine; each pack gets a genuine
   expert international layer (named services/bodies), not token entries.
3. **Peer-first voice.** Lived-experience and drug-user-org sources lead every section. A corpus
   that only chases `.gov.au`/`.edu.au` PDFs reads as built by researchers _about_ people who use
   drugs rather than _by and with_ them.

---

## 2. What's Done So Far

| #   | Commit theme                                      | Artifact                                                                     |
| --- | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1   | Reference layer built                             | `docs/resources/source-intelligence.md`                                      |
| 2   | Flagged entries verified/corrected via web search | same file                                                                    |
| 3   | Drug-checking pack rewritten (proof-of-concept)   | `docs/dork-packs/drug-checking.md`                                           |
| 4   | Batch 2 rewritten + reference verified/extended   | `naloxone`, `supervised-consumption`, `novel-substances`, `coroners-deaths`  |
| 5   | Batch 3 rewritten + reference verified/extended   | `drug-alerts`, `nsp`, `research`, `data-statistics`                          |
| 6   | Batch 4 rewritten + reference verified/extended   | `oat-ost`, `international`, `peer-workforce`, `forum-community`              |
| 7   | Batch 5 rewritten + reference verified/extended   | `policy-advocacy`, `festivals`, `service-directories`, `safer-use-education` |
| 8   | Batch 6 rewritten + reference verified/extended   | `youth`, `families-carers`, `housing-homelessness`, `mental-health`          |
| 9   | Batch 7 rewritten + reference verified/extended   | `prisons-justice`, `rural-remote`                                            |
| 10  | Batch 8 rewritten + reference verified/extended   | `stigma-language`, `temporal-intelligence`, `organizational-intelligence`    |

- **`source-intelligence.md`** is the heart of this work: an entity → searchable-signal map. For
  each real org/service/dataset it records the `site:` target, the named publications to put in
  quotes, and the insider vocabulary. It is **excluded from `build-dorkbase.js`** (its tables aren't
  dorks). Sections currently covered: peer/PWUD core, drug checking, drug alerts/EWS, overdose &
  naloxone, supervised consumption & NSP, coroners, research & surveillance, community forums,
  international bodies.
- **drug-checking pack** is the reference implementation of the target voice. Read it before
  rewriting any other pack — match its structure, its "Why this works" notes, and its peer-first
  ordering.

---

## 3. The Per-Pack Rewrite Workflow

Repeat this loop for each pack:

1. **Read the reference section** for the pack's domain in `source-intelligence.md`. If the domain
   isn't covered yet, **build that reference section first** (see §4) — don't write dorks against
   entities you haven't catalogued.
2. **Verify every `⚠ verify` flag** you're about to rely on, using web search. Confirm the domain
   resolves and any quoted title actually returns results. Correct the reference, then de-flag.
   **Never ship a `"quoted title"` dork built on an unverified name** — fall back to the broader
   form until checked. (This step has already caught real errors: CanTEST was `.com.au` not
   `.org.au`; Penington's program is COPE not "CPOP".)
3. **Rewrite the pack markdown** (`docs/dork-packs/<pack>.md`):
   - Lead with peer/lived-experience sources.
   - Replace generic `site:*.gov.au` templates with named services, hosts, and report titles.
   - Keep a real international layer (named services, not "overseas examples").
   - Add concise **"Why this works"** notes that expose the insider reasoning (why that host, why
     that operator, why tie to a policy/coronial driver). The reasoning is what reads as expertise.
   - Preserve the difficulty structure — see §5 for how headers map to difficulty.
   - Link back to the reference section near the top and in Related Resources.
4. **Rebuild and verify** (see §5): `node scripts/build-dorkbase.js`, then confirm the pack's dork
   count, difficulty spread, and that the named domains appear in `targetDomains`.
5. **Lint:** `npm run format` + `npm run md:fix` (or check variants). Tables must stay aligned and
   sorted (`npm run sort-tables:check`).
6. **Commit** the markdown + regenerated `tools/dork-explorer/dork-data.json` +
   `dork-data-integrity.json`. Push to the branch — it updates PR #13.

### The quality bar — is this dork "expert"?

Ask: _could a non-specialist with good Google skills have written this?_ If yes, it's not done. A
finished dork names something only an insider knows exists — a service, a report series, a dataset,
a piece of jargon. Generic site+keyword+filetype dorks are fine as a _backstop_ tier, but they
should no longer be the bulk of a pack.

---

## 4. Building a New Reference Section

When a pack's domain isn't yet in `source-intelligence.md`:

1. Brainstorm the real entities for that domain — peer orgs first, then services, datasets,
   publications, international counterparts.
2. Web-search to confirm each: exact domain, exact publication/program names, current status.
3. Add a section to `source-intelligence.md` using the existing table shape: **Entity | `site:`
   target | Named signals (quote these) | Notes**. Flag anything unconfirmed `⚠ verify`.
4. Capture the **insider vocabulary** for the domain (terms practitioners/peers use that differ from
   lay language).

---

## 5. Pipeline & Technical Notes (read before editing data)

- **Markdown is the source of truth.** `scripts/build-dorkbase.js` scans `docs/**/*.md`, extracts
  dorks from ` ```txt ` code blocks _and from table cells_, infers metadata, and writes
  `tools/dork-explorer/dork-data.json` (+ `.js`, + `dork-data-integrity.json`). The Explorer reads
  the JSON.
- **Difficulty is inferred from section headers** via emoji/keywords: `⚡`/`🟢`/"Basic"/"Quick
  Start" → beginner, `🟡`/"Intermediate" → intermediate, `🔴`/"Advanced" → advanced. Use these
  headers deliberately so dorks land in the right tier.
- **Reference/index docs must be excluded from extraction.** `source-intelligence.md` is in the
  `ignore` list in `build-dorkbase.js` (around the `fg("**/*.md", …)` call). If you add another
  reference doc with illustrative code blocks/tables under `docs/`, add it to that ignore list too,
  or its examples will pollute the dataset. **This playbook lives at repo root precisely so it is
  never scanned** (the build only scans `docs/`).
- **Rebuild after every markdown change:** `node scripts/build-dorkbase.js` (or `npm run build`).
  Then sanity-check, e.g.:

  ```bash
  node -e 'const d=require("./tools/dork-explorer/dork-data.json");
    const p=d.packs.find(x=>x.id==="<pack-id>");
    console.log(p.dorks.length, [...new Set(p.dorks.map(x=>x.difficulty))]);'
  ```

- **CRLF note.** The committed `dork-data.json` was generated on Windows; multi-line query strings
  contain `\r\n`. Rebuilding on Linux normalises those to `\n`, so a rebuild touches a handful of
  unrelated lines in other packs. This is harmless — mention it in the commit message and move on.
- **`dork-data.json` is not prettier-clean on `main` either** — the repo commits raw build output.
  The CI Prettier step (`prettier --check .`) flags it regardless of your change, so don't chase it.
  (Optional cleanup, separate from this work: add `tools/dork-explorer/dork-data.json` to
  `.prettierignore`.)
- **CI** (`.github/workflows/lint.yml`): Prettier check + markdownlint (both gate) and typos
  (`continue-on-error: true`, informational). CI does **not** rebuild or verify the dataset. Add new
  proper nouns / non-English service names to `.typos.toml` if typos complains loudly.

---

## 6. Remaining Work

### Packs with reference coverage already in place (rewrite-ready)

`peer-knowledge.md` is already relatively strong (it was the model for the approach) — light touch
remaining.

**Done (batch 2):** `naloxone`, `supervised-consumption`, `novel-substances`, `coroners-deaths` —
rewritten peer-first against verified entities; reference layer corrected and extended (new § "Novel
Substances, NPS & Toxico-surveillance").

**Done (batch 3):** `drug-alerts`, `nsp`, `research`, `data-statistics` — rewritten against verified
entities; reference layer extended with the EWS rewrite (national **The Know** / Prompt Response
Network), an NSP sub-table, a research-centres sub-table, and a new § "Datasets, Surveillance Feeds
& Data Repositories".

**Done (batch 4):** `oat-ost`, `international`, `peer-workforce`, `forum-community` — rewritten
against verified entities; reference layer gained a new § "Opioid Agonist Treatment (OAT/OST)", a
fully country-organised International section (Canada/UK/Europe/NZ), and peer-workforce frameworks +
verified peer-org social handles. Fixed forum-community's corrupted Twitter handles.

**Done (batch 5):** `policy-advocacy`, `festivals`, `service-directories`, `safer-use-education` —
reference sections built from scratch (§4): four new source-intelligence sections — "Policy,
Inquiries & Advocacy", "Festivals & Events", "Service Finders & Directories", and "Safer-Use
Education & Plain-Language Resources". Resolved the Crew (`crew.scot`) flag.

**Done (batch 6):** `youth`, `families-carers`, `housing-homelessness`, `mental-health` — reference
section built from scratch (§4): new source-intelligence section "Populations & Intersections"
(youth services + Matilda Centre prevention programs; family/carer orgs; housing-first/homelessness
peaks & datasets; co-occurring guidelines & services).

**Done (batch 7):** `prisons-justice`, `rural-remote` — two reference sections built from scratch
(§4): "Justice, Custody & Diversion" (peer-in-custody → custodial health by jurisdiction → drug
courts/diversion by jurisdiction → prison data & post-release cohorts → throughcare → First Nations
& justice [flagged] → international prison harm reduction) and "Rural, Regional & Remote" (named
rural AOD producers → rurality classifications → telehealth/clinician advice → FIFO/drought/farming
→ international rural-opioid layer). 8-cluster verification fan-out (337k tokens, 115 web lookups).

**Done (batch 8):** `stigma-language`, `temporal-intelligence`, `organizational-intelligence` — the
"technique packs (1/2)" set. Three reference sections built from scratch (§4): "Stigma, Language &
Movement History" (named language guides + AU HR-history anchors), "Web Archives & Temporal Search"
(archives + the dead-`cache:` correction), "Organisational Intelligence & Registers"
(ACNC/GrantConnect/ AusTender/PHN etc.). 4-cluster verification fan-out (153k tokens, 50 web
lookups).

**Suggested next batch (technique packs 2/2):** `investigative`, `document-discovery`,
`multimedia-discovery`, `user-hosted-domains` — platform/format-driven, lighter touch (named
platforms, file-type operators, the existing "User-Hosted Platform Patterns" synonym block). Then
the community-controlled packs (`first-nations`, `sex-worker-health`, `lgbtq-health`) with extra
care — see note below. Note: batch 7 already catalogued a verified, cultural-safety-flagged **First
Nations & justice** sub-section in source-intelligence — a useful starting point for the
`first-nations` pack.

### Packs needing a reference section built first (§4 before §3)

`first-nations` · `lgbtq-health` · `sex-worker-health` · `investigative` · `document-discovery` ·
`multimedia-discovery` · `user-hosted-domains`

> For `first-nations`, `sex-worker-health`, and `lgbtq-health` especially: prioritise community-
> controlled and peer sources, and be careful with framing/terminology. When in doubt, flag for
> human/peer review rather than guessing.

### Outstanding `⚠ verify` flags (confirm before use)

Resolved in batch 2: Urban Survivors Union domain (→ `urban-survivors.org`); the national wastewater
program (→ ACIC `"National Wastewater Drug Monitoring Program"` / NWDMP); HITS cohort scope (→
`HITS-c` / `HITS-p`, Kirby Institute hepatitis C cohorts — safe to name). Also corrected: NDARC host
migrated to `unsw.edu.au/research/ndarc` (query both domains); EMCDDA → EUDA rename
(`euda.europa.eu`); MSIR review chairs (Hamilton 2020, Ryan 2023 — not John Ryan/Ken Lay as first
guessed); QLD/ACT/NT coroner domains; Narcan = injectable (not nasal) in AU; IOAD founded by Sally
J. Finn (Penington coordinates, did not found).

Resolved/corrected in batch 3: national alert aggregator = **The Know** (`theknow.org.au`) /
**Prompt Response Network** (NCCRED); per-state alert terms differ ("Public drug warnings" NSW,
"Drug alerts" VIC, "Public Health Alert" ACT, "Health alerts" NT, "Alerts and pop-up notifications"
TAS); Toronto's drug checking is `drugchecking.community` (**not** the dead `drugschecking.ca`);
`wedinos.org` → `wedinos.wales`; **Turning Point** has no hyphen (`turningpoint.org.au`); **CSRH**
is `unsw.edu.au` (`inurl:csrh`), not a subdomain; **Matilda Centre** is
`sydney.edu.au/matilda-centre`; **APO** reverted to "Australian Policy Online"; **ANDS** → **ARDC**
(`ardc.edu.au` / `researchdata.edu.au`). New named entities: NASS / AODstats (ambulance), NSP NMDC
vs ANSPS, Fitpack, "syringe dispensing machine".

Resolved/corrected in batch 4: VIC OAT =
`"Policy for maintenance pharmacotherapy for opioid dependence"` (not "Victorian pharmacotherapy");
QLD guideline = `"Queensland Opioid Dependence Treatment Guidelines"` (program is QOTP); Biodone
Forte sponsor is Biomed Aust (not Aspen); **Cranstoun** is `cranstoun.org` (not `.org.uk`); Portugal
**SICAD → ICAD** (`icad.pt`); NZ needle exchange is `nznep.org.nz` (old `nzneedle.org.nz` is dead);
NUAA handle `@nuaansw`, HRVic `@HRV_Aust` (replacing the corrupted `from:aaborginald` /
`from:NUABORGINALTAA`). WA's **CPOP** ≠ Penington's **COPE**. New named entities: depot bupe
(Buvidal/Sublocade), Suboxone Film, MATOD guidelines, BCCSU/Toward the Heart/CATIE/safer supply,
Release/The Loop/Transform, ICAD/CDT, Saferparty/HeGeBe, Trimbos/DIMS, akzept/JES, NZ Drug
Foundation/The Level/KnowYourStuffNZ, AIVL/SHARC peer frameworks.

Resolved/corrected in batch 5: national AOD peak = **AADC** (`aadc.org.au`) — not "AADA"; **Fair
Treatment** is `fairtreatment.org` and **Unharm** is `unharm.org` (both `.org`, not `.org.au`);
**SSDP Australia** is `ssdp.org.au` (global is `ssdp.org`); **Path2Help** lives on `adf.org.au` (the
standalone `path2help.org.au` is dead); SA **DASSA** is under `sahealth.sa.gov.au`
(`dassa.sa.gov.au` is dead); WA's Alcohol and Drug Support Line moved to **ADMHSS**
(`admhss.mhc.wa.gov.au`); **Rainbow Serpent** renamed **Rainbow Spirit Festival**
(`rainbowspirit.net`); **Crew** flag resolved (`crew.scot` = "Crew 2000 (Scotland)"). New named
entities: National Drug Strategy 2017-2026, NSW Ice Inquiry, 2024 NSW Drug Summit, ACT decrim Act,
NSW music-festival inquest + Music Festivals Act 2019, ACT GTM / VIC pill-testing trials,
DanceWize/DanceWize NSW, AIDR "Safe and Healthy Crowded Places", the state/national service finders,
and the safer-use education producers.

Resolved/corrected in batch 6: **YSAS** leads the "Victorian Pill Testing Service" (not just
co-leads); SHARC's family service is now **"Family Drug & Gambling Help"** on `sharc.org.au` (the
standalone `familydrughelp.org.au` does not resolve); **CEH** rebranded "Ethnicity" → **"Equity"**
(allow both); FDS course is **"Stepping Stones"** (not "...to Success"; "BEACON" unverified);
**Mission Australia** = `missionaustralia.com.au`; **Sacred Heart Mission** / **SANE** / **Phoenix
Australia** are `.org`. New named entities: YSAS/Dovetail/Orygen/ReachOut, Positive Choices /
OurFutures (ex-Climate Schools) / Cracks in the Ice / Strong & Deadly Futures, LDAT / Good Sports,
FDS / SHARC "BreakThrough" / Bouverie "Single Session Family Consultation" / Emerging Minds-COPMI,
AIHW SHS / AHURI / J2SI / Common Ground, the **Comorbidity Guidelines** / NSW comorbidity guideline
/ Turning Point "Hamilton Centre" / VDDI.

Resolved/corrected in batch 7: NSW custodial health = **Justice Health and Forensic Mental Health
Network** (`justicehealth.nsw.gov.au`, migrating to `nsw.gov.au`); flagship **"Network Patient
Health Survey"** (latest cycle unconfirmed — quote the title, not a year). QLD prison health =
**West Moreton** "Prison Health Services" (**not** "Offender Health Services"). WA is the national
exception — prison health sits inside **Corrective Services**
(`wa.gov.au`/`correctiveservices.wa.gov.au`), not the Health dept. SA = **SAPHS** (CALHN).
**"Network for Prisoner Health" does not exist** — dropped; use AIHW **NPHDC** / **"The health of
people in Australia's prisons"** (older edition: **"The health of Australia's prisoners"** — quote
both) / **NPHN** (`nphn.net.au`) / RACGP **"Standards for health services in Australian prisons"**.
Diversion renames: QLD **QMERIT → "Court Link"** (Dec 2019); SA Drug Court → **"Treatment
Intervention Court"**; VIC Magistrates' = **"Drug Court"** + **DATO** (County Court has a separate
"Drug and Alcohol Treatment Court"); NSW **YDAC** closed 2012. Post-release cohorts confirmed:
**MARC** (Kinner, QLD), **MARIC** (Borschmann/Kinner, `rch.org.au`), **PATH** (Burnet). Throughcare:
VIC program is Caraniche **"StepOut"** (**not** "Connections"); ACT **"Throughcare Program"** is
**Yeddung Mura / Good Pathways** (`goodpathways.org.au`), distinct from **Winnunga**'s clinical
"Model of Care". National umbrella = **"Guiding Principles for Corrections in Australia"** (no
standalone "Throughcare Framework"). Rural: RFDS primary domain is **`flyingdoctor.org.au`** (not
`rfds.org.au`); NRHA AOD fact sheet = **"Alcohol, smoking, vaping and other drug use in rural
Australia"** + magazine **"Partyline"**; **DACAS** (`dacas.org.au`) is VIC/TAS/NT only (NSW =
**DASAS**); WA FIFO program = **"MARS"** via `wa.gov.au` (DEMIRS; `dmirs.wa.gov.au` dead);
**ifarmwell** is UniSA (not NCFH). New named entities: Drug Court of NSW/MERIT/EDDI, QDAC, DASL,
IDDI, BOCSAR/AIC, NUAA **"Insider's News"**, CRC NSW (AOD Transition Program / Miranda Project /
Jailbreak Radio / Paper Chained), CDTCC; UNODC comprehensive package / Nelson Mandela Rules, WHO
"Prisons and health", HRI prisons chapter, PRI "Global Prison Trends", CSC **PNEP**; MMM / ABS
Remoteness Areas, ONRHC, RAMHP, NCFH / "The Ripple Effect", US **RCORP**.

Still flagged (batch 7): the entire **First Nations & justice** sub-section (Koori/Murri/Nunga/
Galambany courts, Circle Sentencing, RCIADIC, deaths-in-custody data, Closing the Gap targets, ALSs)
is verified-but-sensitive — keep flagged for community/peer + Indigenous-data-sovereignty review,
and restrict RCIADIC dorks to the National Report (**not** individual death reports). **NT custodial
health** has no stable branded service name (model under review) — multi-host keyword fallback only.
**ACT `winnunga.org.au`** referenced but not directly fetched this pass — verify before site-scoping
(use AMC / "Model of Care" terms as the safe quoted strings). **Canada** (northern/remote) and
**Scotland** (rural) have no rural-specific quotable titles — use SUAP / "National Mission on Drug
Deaths" + a rural qualifier. **Beyond Blue** has no confirmed rural-specific report title — use
RAMHP instead.

Resolved/corrected in batch 8: **Google `cache:` is DEAD** (cached links removed Jan 2024, operator
retired Sept 2024) — removed from temporal-intelligence; replacement is the Wayback `web/*/`
browse + `archive.org/wayback/available` API + `archive.ph/newest/`. Trove now surfaces the
**Australian Web Archive** (PANDORA + **AGWA** `webarchive.nla.gov.au` + `.au` harvests, unified
2019). Language guides pinned: NADA+NUAA **"Language Matters"** (`nada.org.au`; NSW Health promotes,
didn't author its own), INPUD/ANPUD **"Words Matter!"** (`inpud.net`), ADF **"the Power of Words"**
(`adf.org.au`, PDFs on `cdn.adf.org.au`), **Mindframe for Alcohol and Other Drugs**
(`mindframe.org.au`), AIVL **"Why wouldn't I discriminate against all of them"** (2024). History
anchors: **NCADA** 1985 ("harm minimisation"), **Alex Wodak** first NSP 1986, **Stella Dalton**
methadone 1969, MSIC 2001 / 1999 Drug Summit, NUAA 1989, VIVAIDS→HRVic 1987, **"Return on Investment
in Needle and Syringe Programs in Australia"** (2002). Registers: ACNC **"Annual Information
Statement"** (beats "annual report" for charities), GrantConnect **"Grant Award"**/GA
(`grants.gov.au/ga`), AusTender **"Contract Notice"**/CN (`tenders.gov.au/cn`), Community Grants
Hub, PHN **"Activity Work Plan"**, **"Reconciliation Action Plan"**, DGR.

Still flagged (batch 8): **`#stigmakills`** / **"Make Stigma History"** are NOT real AU AOD
campaigns — dropped (the verified ones, #StigmaPledge / StigmaWatch, are mental-health). **QNADA**
has no named language _guide_ (only the "addictionary" article) — don't quote one; point QLD users
to Language Matters / Power of Words. The NMHC **"National Stigma and Discrimination Reduction
Strategy"** is mental-health-focused — do **not** claim it covers AOD. **AIVL founding year**
unconfirmed — cite "formed in the late 1980s", don't assert a year. **archive.today** has governance
caveats (Wikipedia blacklisted it Feb 2026) — keep it secondary to Wayback.

Still flagged: **Strong & Deadly Futures** is an Aboriginal & Torres Strait Islander program — quote
it but keep cultural-safety framing. The **NHMRC CRE in Mental Health and Substance Use** ("CREMS")
acronym is ambiguous (collides with a Macquarie "Substance Abuse" CRE and with CREMSI) — search the
full name + Teesson/NDARC/Matilda, don't quote "CREMS".

Still flagged: **ACEM** has no verifiable festival/mass-gathering guideline title — use the AIDR
"Safe and Healthy Crowded Places" handbook instead. No titled **"Easy Read"** harm-reduction series
verified — use a broad `("easy read" OR "plain language")` fallback. **ATLAS** is an Aboriginal &
Torres Strait Islander STI/BBV surveillance network, not a PWID cohort — keep flagged for
Indigenous-data-sovereignty / cultural-safety review. **NT coroner host** is unstable (spread across
`nt.gov.au` and `agd.nt.gov.au`) — use the multi-site form. **EDND** ("European Database on New
Drugs") is access-restricted, not web-indexed — dropped as a quotable signal (use
`"EU Early Warning System"` + EUDA/EMCDDA filters). **WA** has no public drug-alert index — use a
keyword fallback. **National NSP policy** has no current standalone title (the 2010–2014 framework
is expired) — target the National Drug Strategy / BBV strategies instead. **ASHM** has no verifiable
named OAT prescriber course — use RACGP MATOD / OTEP / state programs. **Crew (Scotland)**
`crew.scot` still unverified. **Bluesky** handles for AU peer orgs unconfirmed — use org-name +
`site:bsky.app`, don't guess a handle.

---

## 7. Known-Good Voice Example (Before → After)

Same intent ("find AU drug-checking evidence"), two authors:

```txt
# Before — hopes a relevant PDF exists somewhere on .edu.au:
site:*.edu.au filetype:pdf "drug checking" OR "pill testing" evaluation

# After — knows the report exists, its exact title, who wrote it, and where it's hosted:
"CanTEST Health and Drug Checking Service Program Evaluation" filetype:pdf
(site:directionshealth.com OR site:anu.edu.au) "CanTEST" evaluation filetype:pdf
```

That difference — named, located, sourced — is the entire deliverable. Reproduce it pack by pack.

---

## 8. One Standing Caveat

Domain/title accuracy is the one thing that can't be fully self-verified from model knowledge. Web
search catches most of it; a peer/owner skim catches the rest (e.g. whether a service's domain is
current, or whether terminology is the community's preferred form). Keep the `⚠ verify` discipline,
and prefer flagging for human review over confidently asserting an unconfirmed specific.
