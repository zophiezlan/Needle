# Source Intelligence: Named Entities & Searchable Signals

> The insider knowledge layer. For each real organisation, service, publication, and dataset, this
> file records **what to actually search for** — the named report series, program names, and
> in-group vocabulary that turn a generic dork into one written like a harm reduction worker, peer,
> or researcher would write it.

[← Back to Resources](../tools/README.md) | [← Organisations Directory](organizations.md) |
[← Main Guide](../README.md)

---

## 🎯 Why This File Exists

`organizations.md` tells you an organisation **exists** and gives its URL. This file tells you what
that organisation **produces** — the specific things you can put in quotes.

The difference in practice:

```txt
# Generic (anyone could write this):
site:nuaa.org.au filetype:pdf

# Written by someone who knows the source:
site:nuaa.org.au "User's News"
```

The named series, program, dataset, or piece of jargon is the part Google can't guess and a
non-expert wouldn't know to type. **Specificity is the whole point.** Dork packs should be written
_against the entries in this file_, not from generic synonym templates.

### How to read each entry

- **`site:` targets** — domains confirmed to host relevant material.
- **Named signals** — exact publication series, report titles, program names, dataset codes. Put
  these in `"quotes"`.
- **Insider vocabulary** — terms practitioners and peers use that differ from public/lay language.
  Searching the insider term finds documents written _by_ the field; the lay term finds documents
  written _about_ it.
- **⚠ verify** — entity is real and worth a dork, but the exact domain/title should be confirmed by
  spot-checking before relying on it. Don't ship a `"quoted title"` dork built on an unverified
  name; fall back to the broader form until checked.

> **Voice note (peer-first):** This resource leads with peer and lived-experience sources in every
> section. Clinical and academic sources are real and useful, but a corpus that _only_ chases
> `.gov.au` and `.edu.au` PDFs reads as though it was built by researchers about people who use
> drugs, rather than by and with them. Weight accordingly.

---

## 👥 Cross-Cutting: Peer & Drug-User Organisations (AU)

These are the spine of a peer-first resource. Each is a peer-led / drug-user organisation with its
own publications, programs, and submissions.

| Org                     | `site:` target         | Named signals (search in quotes)                                                        | Notes                                                                                    |
| ----------------------- | ---------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **NUAA**                | `nuaa.org.au`          | `"User's News"`, `"DanceWize NSW"`, `"NSP"`, `"peer line"`                              | NSW peak; magazine is the flagship named series                                          |
| **AIVL**                | `aivl.org.au`          | `"AIVL News"` (newsletter), `"submission"`, `"position statement"`, `"NSP Directory"`   | National peak body for drug-user orgs                                                    |
| **HRVic**               | `hrvic.org.au`         | `"DanceWize"`, `"peer education"`                                                       | Runs DanceWize (VIC festival peer program)                                               |
| **CAHMA**               | `cahma.org.au`         | `"CanTEST"`, `"peer"`                                                                   | Canberra; co-delivers the CanTEST service                                                |
| **QuIHN**               | `quihn.org`            | `"CheQpoint"`, `"NSP"`, `"peer"`                                                        | Queensland Injectors Health Network; hosts the CheQpoint service                         |
| **QuIVAA**              | `quivaa.org.au`        | `"QuIVAA"`, `"advocacy"`, `"peer"`                                                      | Queensland's drug-user peer advocacy body (distinct from QuIHN)                          |
| **WASUA**               | `wasua.com.au`         | `"peer"`, `"NSP"`                                                                       | WA Substance Users Association                                                           |
| **Directions Health**   | `directionshealth.com` | `"CanTEST"`                                                                             | Operates CanTEST (with Pill Testing Australia + CAHMA)                                   |
| **Penington Institute** | `penington.org.au`     | `"Annual Overdose Report"`, `"International Overdose Awareness Day"`, `"COPE"` training | Overdose data + advocacy (COPE = Community Overdose Prevention Education); peer-adjacent |

**International peer / drug-user networks:**

| Org                       | `site:` target        | Named signals                                                                                                                                                |
| ------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **INPUD**                 | `inpud.net`           | `"Words Matter"`, `"drug user peace"`, position papers                                                                                                       |
| **EuroNPUD**              | `euronpud.net`        | peer-produced harm reduction guides, `"European Diaries"` blog                                                                                               |
| **VANDU**                 | `vandu.org`           | peer overdose response, Vancouver                                                                                                                            |
| **CAPUD**                 | `capud.ca`            | Canadian drug-user union submissions                                                                                                                         |
| **Urban Survivors Union** | `urban-survivors.org` | US national drug-user union; `"National Urban Survivors Union"`, `"Urban Survivors Union"` (note hyphenated domain; `urbansurvivorsunion.org` is email-only) |

**Peer / lived-experience workforce frameworks (named documents):**

| Framework                    | `site:` target                  | Named signals                                                                                                                                                      |
| ---------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **National (mental health)** | `mentalhealthcommission.gov.au` | `"National Lived Experience (Peer) Workforce Development Guidelines"` (NMHC; mental-health sector, not AOD-specific)                                               |
| **AIVL — AOD frameworks**    | `aivl.org.au`                   | `"Practical National Framework"` + `"Lived-Living Experience of Using Drugs"`; `"Peer Workforce Capacity Building Training Framework"`                             |
| **SHARC (VIC)**              | `sharc.org.au`                  | `"Alcohol and Other Drug (AOD) Lived Experience Workforce Discipline Framework"`; `"The Strategy for the Alcohol and Other Drug (AOD) Peer Workforce in Victoria"` |

**Peer-org social handles (volatile — verify before relying):** NUAA = `@nuaansw`
(X/Instagram/Facebook); Harm Reduction Victoria = `@HRV_Aust` (X), `@HRVAust` (Facebook). Prefer
`from:nuaansw` / `from:HRV_Aust` on `x.com`; fall back to the org name + `site:x.com` if a handle is
stale. No confirmed Bluesky accounts yet — don't guess a `bsky` handle.

**Insider vocabulary (cross-cutting):** `"people who use drugs"` / `PWUD` / `PWID` (not "addicts"),
`"lived and living experience"` / `"LLE"` / `"LLEW"` (workforce), `"nothing about us without us"`,
`"peer-led"` / `"user-led"`, `"experts by experience"`, `"consumer representative"`.

---

## 🔬 Drug Checking & Pill Testing

The single biggest specificity gap in the current pack: it never names the actual Australian
services. Fix that first.

| Entity                          | `site:` target                       | Named signals                                                                                              |
| ------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **CanTEST** (ACT, fixed-site)   | `cantest.com.au`                     | `"CanTEST"`, `"Health and Drug Checking Service"`, `"Results"`, `"six-month report"`                       |
| CanTEST evaluation (ANU)        | `anu.edu.au`, `directionshealth.com` | `"CanTEST Health and Drug Checking Service Program Evaluation"` (Interim / Final Report 2023)              |
| **Pill Testing Australia**      | `pilltestingaustralia.com.au`        | `"Pill Testing Australia"`, `"Festival Drug Checking Services"`, `"Groovin the Moo"`                       |
| **CheQpoint** (QLD, fixed-site) | `quihn.org`                          | `"CheQpoint"`, `"drug checking service"`, Bowen Hills (paused under policy change — content still indexed) |
| **The Loop Australia**          | `theloop.org.au`                     | `"The Loop Australia"` — AU drug-checking org (partner in CheQpoint)                                       |
| **The Loop** (UK)               | `wearetheloop.org`                   | `"The Loop"`, `"back of house"`, `"front of house"` testing model                                          |
| **WEDINOS** (Wales)             | `wedinos.org`, `wedinos.wales`       | `"WEDINOS"`, `"Philtre"` (quarterly bulletin), `"sample results"`, downloadable data                       |
| **DanceSafe** (US)              | `dancesafe.org`                      | `"DanceSafe"`, reagent kits, `"lab testing"`                                                               |
| **DrugsData.org** (US, Erowid)  | `drugsdata.org`                      | lab-tested sample database (formerly `"EcstasyData"`), `"DrugsData"`                                       |
| **TEDI network**                | `euda.europa.eu`                     | `"Trans European Drug Information"`, `"TEDI"`, six-monthly drug-checking data                              |
| **Energy Control** (ES)         | `energycontrol-international.org`    | `"Energy Control"`, TEDI coordinator, international mail-in analysis                                       |
| **Saferparty / DIZ** (Zurich)   | `saferparty.ch`                      | `"Saferparty"`, `"Drug Information Center"` / DIZ, `"Substanzwarnung"` (substance warning)                 |
| **CheckIt!** (Vienna)           | `checkit.wien`                       | `"checkit"`, `"Substanzwarnung"`, HPLC event testing                                                       |
| **DIMS / Trimbos** (NL)         | `trimbos.nl`                         | `"Drugs Information and Monitoring System"`, `"DIMS"`                                                      |
| **EUDA / EMCDDA**               | `euda.europa.eu`, `emcdda.europa.eu` | `"drug checking"`, `"Trendspotter"`                                                                        |

**Insider vocabulary:** `FTIR` (Fourier-transform infrared), `"reagent testing"`, `"mass spec"` /
`GC-MS`, `"fixed-site"` vs `"festival"` / `"event-based"`, `"front of house"` / `"back of house"`,
`"the result service"`, `"substance of concern"`, `"expected vs actual"`. Note the term shift:
Australia says **"pill testing"** publicly but services and evaluations increasingly use **"drug
checking"** — search both.

---

## 🚨 Drug Alerts & Early Warning Systems (EWS)

Experts know alerts come from specific state systems plus one national aggregator — not generic web
pages. Each jurisdiction uses its own term, and quoting the right one is the whole game.

| Source                     | `site:` target                                   | Named signals                                                                                                                   |
| -------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **The Know** (national)    | `theknow.org.au`                                 | `"Australian drug alerts, all in one place"`, `"Prompt Response Network"` (PRN; co-designed via NCCRED) — national aggregator   |
| **NUAA alerts** (NSW peer) | `nuaa.org.au`                                    | `"drug alert"` (peer-org channel; path `/drug-alerts`)                                                                          |
| **NSW Health**             | `health.nsw.gov.au`                              | `"Public drug warnings"`, `"public drug alert"`, `"Clinical safety alerts"` (path `/aod/public-drug-alerts`)                    |
| **VIC Health**             | `health.vic.gov.au`                              | `"drug alert"`, `"drug advisory"` (path `/alcohol-and-drugs/drug-alerts`; subscribe via `/subscribe`)                           |
| **ACT**                    | `health.act.gov.au`, `act.gov.au`                | `"Public Health Alert"` (dangerous drug warning), CanTEST community notices                                                     |
| **QLD**                    | `theknow.org.au`, `health.qld.gov.au`            | consumer alerts via The Know; `health.qld.gov.au` has only a regulatory `"Updates and alerts"` page (CheQpoint closed Apr 2025) |
| **SA Health**              | `sahealth.sa.gov.au`                             | `"Medication alerts"`, `"Health alerts"`, media-release `"drug warning"` (SADEWS = backend network, not a public page)          |
| **NT Health**              | `health.nt.gov.au`                               | `"Health alerts"` (drug warnings often PDFs; path `/health-alerts`)                                                             |
| **TAS Health**             | `health.tas.gov.au`                              | `"Alerts and pop-up notifications"` (path `/publications/alerts-and-pop-notifications`)                                         |
| **WA** ⚠ no public index   | `health.wa.gov.au`, `healthywa.health.wa.gov.au` | no dedicated public drug-alert index found; `"Drug Aware"` is education — use a keyword fallback                                |
| **TGA**                    | `tga.gov.au`                                     | `"safety alert"`, `"medicine shortage"`, `"recall"`                                                                             |

**International alert / drug-checking-data sources:**

| Source                 | `site:` target           | Named signals                                                                                                                              |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **WEDINOS** (Wales)    | `wedinos.wales`          | `"WEDINOS"`, `"substance alert"`, sample results (`wedinos.org` 301-redirects here); `"PHILTRE"` bulletin on `publichealthwales.nhs.wales` |
| **EUDA**               | `euda.europa.eu`         | `"European Drug Alert System"` / `EDAS`, `"EU Early Warning System"` on NPS                                                                |
| **Toronto DCS** (CA)   | `drugchecking.community` | `"Toronto's Drug Checking Service"`, biweekly results (eval org = CDPE, `cdpe.org`) — **not** `drugschecking.ca` (dead)                    |
| **TRIP! Project** (CA) | `tripproject.ca`         | `"TRIP! Project"`, youth/nightlife drug checking + supply observations                                                                     |
| **DanceSafe** (US)     | `dancesafe.org`          | `"#TestIt! Alerts"` / `"Test It! Alerts"`, adulterated-drug alerts                                                                         |

**Insider vocabulary:** `EWS` / `"early warning"`, `"unexpected substance"`, `"high-dose"` /
`"high-potency"`, `"contaminated supply"`, `"adulterant"`, `"batch"`, `"red alert"`, `nitazene`,
`"no naloxone-responsive"` framing for non-opioids. Note: `"Prompt"` = the national **Prompt
Response Network** (its public face is **The Know**), not a state system; `"SafeScript"` is
Victoria's real-time prescription monitoring (RTPM), a separate thing from drug alerts.

---

## 💉 Overdose, Naloxone & Take-Home Naloxone (THN)

| Entity                                    | `site:` target                     | Named signals                                                                                                                                                            |
| ----------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Take Home Naloxone Program** (national) | `health.gov.au`                    | `"Take Home Naloxone Program"`, `"THN"` — free, no prescription since 1 Jul 2022 (program path `/our-work/take-home-naloxone-program`)                                   |
| **THN Pilot evaluation** (NSW/SA/WA)      | `health.gov.au`                    | `"Evaluation of the Pharmaceutical Benefits Scheme subsidised take home naloxone pilot"` — by the Institute for Social Science Research, University of Queensland (2022) |
| **Naloxone scheduling**                   | `tga.gov.au`, `legislation.gov.au` | `"Schedule 3"` `"Pharmacist Only"` (down-scheduled S4→S3, eff. 1 Feb 2016); history: MJA `"Australia reschedules naloxone for opioid overdose"`                          |
| **Penington Institute**                   | `penington.org.au`                 | `"Australia's Annual Overdose Report"` (latest 2025), `"COPE"` (Community Overdose Prevention Education) training                                                        |
| **Int'l Overdose Awareness Day**          | `overdoseday.com`                  | `"International Overdose Awareness Day"`, `"IOAD"`, `"a world without overdose"` — 31 Aug; founded 2001 by Sally J. Finn, **coordinated** by Penington since 2012        |
| **NUAA / state peer orgs**                | `nuaa.org.au`                      | peer naloxone training, peer THN distribution, `"overdose response"`                                                                                                     |
| **EuroNPUD peer naloxone** (intl)         | `euronpud.net`                     | `"European Diaries"`, `"Peer Power: Stories of Naloxone in Action"` — peer-distribution stories                                                                          |
| **Products (AU)**                         | —                                  | `Nyxoid` (nasal spray; Mundipharma; ARTG 309381) · `Prenoxad` (pre-filled injectable; Phebra; Section 19A import) · `Narcan` (in AU = injectable ampoule, **not** nasal) |

**Insider vocabulary:** `THN`, `"opioid agonist"` vs `"antagonist"`, `"overdose reversal"`,
`"witnessed overdose"`, `"bystander"`, `"recovery position"`, `"call don't run"` / Good Samaritan,
`"poly-drug"`, `"breakthrough overdose"` (re: nitazenes needing repeat doses), `"standing order"` /
`"standing authority"`. **Product caveat:** in Australia the nasal spray is **Nyxoid** (not "Narcan
nasal spray", which is a US product) — don't pair `Narcan` with `"nasal spray"` in an AU-scoped
dork. Use `"take-home naloxone"` / `"Take Home Naloxone"` / `THN`, **not** "community naloxone" (not
the AU program label).

---

## 🏥 Supervised Consumption & NSP

Name the two Australian services — there are only two, and an expert knows both.

| Service                                | `site:` target      | Named signals                                                                                                                                                        |
| -------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Uniting MSIC** (Sydney, Kings Cross) | `uniting.org`       | `"Uniting Medically Supervised Injecting Centre"`, `"Medically Supervised Injecting Centre"`, `"MSIC"`, `"Kings Cross"` — opened 2001, AU's first                    |
| **North Richmond MSIR** (VIC)          | `nrch.com.au`       | `"Medically Supervised Injecting Room"`, `"MSIR"`, `"North Richmond"` — operated by North Richmond Community Health with St Vincent's Hospital Melbourne             |
| MSIR first review (2020)               | `health.vic.gov.au` | `"Review of the Medically Supervised Injecting Room 2020"` — the **Hamilton Review** (chaired by Prof. Margaret Hamilton AO)                                         |
| MSIR second review (2023)              | `health.vic.gov.au` | `"Review of the Medically Supervised Injecting Room 2023"` — the **Ryan Review** (chaired by John Ryan; 10 recommendations)                                          |
| **NSP surveillance** (Kirby)           | `kirby.unsw.edu.au` | `"Australian Needle and Syringe Program Survey"` (note "and"), `"Australian NSP Survey National Data Report"`, `"ANSPS"`                                             |
| **Insite** (Vancouver, intl ref)       | `phs.ca`, `vch.ca`  | `"Insite"`, `"Onsite"` (detox above Insite — one word), `"supervised injection facility"`, `"PHS Community Services Society"` (prefer `phs.ca`; `vch.ca` bot-blocks) |
| **EUDA drug consumption rooms** (intl) | `euda.europa.eu`    | `"Drug consumption rooms: an overview of provision and evidence"`, `"drug consumption rooms"`                                                                        |

**Needle & Syringe Programs (AU):**

| Entity                         | `site:` target                             | Named signals                                                                                                                                                                           |
| ------------------------------ | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NSP service data** (Kirby)   | `kirby.unsw.edu.au`                        | `"Needle Syringe Program National Minimum Data Collection"` / `"NSP NMDC"` (annual `"National Data Report"`: syringes distributed, service counts) — distinct from the ANSPS serosurvey |
| **Peer / state NSP orgs**      | `nuaa.org.au`, `quihn.org`, `wasua.com.au` | NUAA `"NSP equipment"` mail-out, `"peer distribution"` / `"secondary distribution"`                                                                                                     |
| **NSW NSP outlets**            | `health.nsw.gov.au`                        | `"NSP outlets"` interactive map (path `/hepatitis/Pages/nsp-outlets.aspx`)                                                                                                              |
| **Fitpack** (sharps container) | —                                          | `"Fitpack"` (ASP Healthcare / ASP Plastics; `"FITPACK MK2"`, `"Disposa-Safe"`) — the iconic AU personal sharps container                                                                |
| **National NSP policy**        | `health.gov.au`                            | `"National Needle and Syringe Programs Strategic Framework 2010-2014"` (expired; current NSP policy now sits inside the National Drug Strategy + BBV strategies)                        |

**Insider vocabulary:** `DCR` (drug consumption room — European/EUDA term), `SCS` (supervised
consumption service — Canada, federally sanctioned), `OPS` (overdose prevention site — Canada,
provincial/lower-barrier), `SIF` / `SIS` (supervised injecting facility/site — generic), `MSIC` /
`MSIR` (the Australian terms — prefer `"medically supervised injecting"` for AU targeting). NSP
delivery models: `"primary NSP"`, `"secondary NSP"`, `"pharmacy NSP"`,
`"syringe dispensing machine"` / `"automatic dispensing machine"` (ADM — the formal term;
`"vending machine"` is colloquial), `"mobile outreach"`, `"peer distribution"` /
`"secondary distribution"`. Plus `"injecting-related injuries"`, `"sharps"`, `"safe disposal"`,
`"low-threshold"`. **Don't** attribute the North Richmond MSIR reviews to Ken Lay — his review was
the separate Melbourne CBD injecting consultation.

---

## 💊 Opioid Agonist Treatment (OAT/OST)

Every state runs its own program under its own title, and the depot products have exact brand names
— that specificity is what separates an insider dork from a generic "methadone guideline" search.

**Australian guidelines & programs:**

| Source                  | `site:` target                                      | Named signals                                                                                                                                                                                       |
| ----------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **National guideline**  | `health.gov.au`                                     | `"National Guidelines for Medication-Assisted Treatment of Opioid Dependence"` (MATOD; 2014 — note the hyphen)                                                                                      |
| **NSW**                 | `health.nsw.gov.au`                                 | `"NSW Opioid Treatment Program"` / OTP; `"NSW Clinical Guidelines: Treatment of Opioid Dependence"` (2018); depot-buprenorphine guidelines                                                          |
| **VIC**                 | `health.vic.gov.au`                                 | `"Policy for maintenance pharmacotherapy for opioid dependence"` (**not** the generic "Victorian pharmacotherapy")                                                                                  |
| **WA**                  | `mhc.wa.gov.au`                                     | `"Community Program for Opioid Pharmacotherapy"` / CPOP; `"Clinical Policies and Procedures for the Use of Methadone and Buprenorphine"`                                                            |
| **QLD**                 | `health.qld.gov.au`                                 | program `"Queensland Opioid Treatment Program"` / QOTP; guideline `"Queensland Opioid Dependence Treatment Guidelines"` (2023)                                                                      |
| **SA**                  | `sahealth.sa.gov.au`                                | `"Medication Assisted Treatment for Opioid Dependence"` / MATOD (state program; SA drops the hyphen)                                                                                                |
| **Prescriber training** | `racgp.org.au`, `otep.org.au`, `insight.qld.edu.au` | RACGP `"Medication Assisted Treatment for Opioid Dependence"` (MATOD Modules 1–2); `"Opioid Dependence Treatment Education Program"` (OTEP, NSW); QOTP Prescriber Course; `"authorised prescriber"` |

**Medications & brands (AU — quote the brand):**

| Class                          | Quote-these                                                                                                | Note                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Methadone**                  | `"Biodone Forte"` (sponsor Biomed Aust), `"Aspen Methadone Syrup"` / `"Aspen Methadone Liquid"` (Aspen)    | both 5 mg/mL oral liquid                      |
| **Buprenorphine (SL)**         | `"Suboxone Film"` (buprenorphine-naloxone soluble film; Indivior), `"Subutex"` (mono; low AU availability) | dose convention bup/naloxone, e.g. 8/2        |
| **Depot buprenorphine (LAIB)** | `"Buvidal Weekly"` / `"Buvidal Monthly"` (Camurus), `"Sublocade"` (monthly; Indivior)                      | long-acting injectable; first LAIB in AU 2018 |

**International OAT guidance:**

| Body                 | `site:` target            | Named signals                                                                                              |
| -------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **WHO**              | `who.int`, `iris.who.int` | `"Guidelines for the psychosocially assisted pharmacological treatment of opioid dependence"` (2009)       |
| **UK "Orange Book"** | `gov.uk`                  | `"Drug misuse and dependence: UK guidelines on clinical management"` (2017; "Orange Book" is the nickname) |
| **Canada BCCSU**     | `bccsu.ca`                | `"A Guideline for the Clinical Management of Opioid Use Disorder"` (2023 Update)                           |

**Insider vocabulary:** `OAT` / `OST` / `ORT` / `MATOD` / `pharmacotherapy` /
`"opioid replacement therapy"`; `"authorised prescriber"`, `"dosing point"`, `"supervised dosing"`,
`"takeaway doses"` / `"unsupervised doses"`, `"depot buprenorphine"` / `LAIB` (long-acting
injectable buprenorphine), `"induction"`, `"transfer"`, `"diversion"`, pharmacy `"dispensing fee"`
(a key access barrier). Note: WA's **CPOP** (Community Program for Opioid Pharmacotherapy) is
distinct from Penington's **COPE** overdose-training (see Naloxone) — don't confuse the two
acronyms.

---

## ⚖️ Coroners, Inquests & Death Data

| Source                  | `site:` target                             | Named signals                                                                                                           |
| ----------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **NCIS**                | `ncis.org.au`                              | `"National Coronial Information System"`, `"NCIS Fact Sheet"`, `"data report"` (full database access is by application) |
| **Coroners Court VIC**  | `coronerscourt.vic.gov.au`                 | `"Coroners Prevention Unit"`, `"finding without inquest"`, `"recommendation"`                                           |
| **Coroners Court NSW**  | `coroners.nsw.gov.au`                      | `"Coronial findings and recommendations"`, `"inquest"` (some content mirrored under `dcj.nsw.gov.au`)                   |
| **Coroners Court QLD**  | `coronerscourt.qld.gov.au`                 | `"Non-inquest findings"`, `"Inquest into the death of"` (**not** `courts.qld.gov.au`)                                   |
| **Coroners Court WA**   | `coronerscourt.wa.gov.au`                  | `"Inquest Findings"`, `"inquest into the death of"` (year-indexed `.aspx`)                                              |
| **Coroners Court SA**   | `courts.sa.gov.au`                         | `"Coroners findings"` at `/court-decisions/coroners-findings/` (no dedicated coroners domain)                           |
| **Coroners Court ACT**  | `courts.act.gov.au`                        | `coroner` (a section of the ACT Magistrates Court — `/magistrates/.../coroners-court`)                                  |
| **Coroners Court NT**   | `nt.gov.au`, `agd.nt.gov.au` ⚠ verify host | `coroner` `"coronial findings"` (multi-host; `localcourt.nt.gov.au` carries process info only — least stable)           |
| **Coroners Court TAS**  | `magistratescourt.tas.gov.au`              | `"Coronial Findings"`, `"findings, comments and recommendations"` (Coronial Division of the Magistrates Court)          |
| **AIHW**                | `aihw.gov.au`                              | `"Alcohol, tobacco & other drugs in Australia"`, `"drug-induced deaths"` (rolling web release — no year in title)       |
| **ABS**                 | `abs.gov.au`                               | `"Causes of Death, Australia"`, `"drug-induced deaths"` (upstream source; ~97% coroner-certified)                       |
| **Penington Institute** | `penington.org.au`                         | `"Australia's Annual Overdose Report"` (aggregates ABS/coronial data)                                                   |

**Insider vocabulary:** `"findings"` (the actual document genre — not "report"), with the
jurisdiction-specific variants `"finding without inquest"` (VIC), `"non-inquest findings"` (QLD),
`"chambers finding"` / `"on the papers"` (generic). `"inquest into the death of [name]"` is a
high-precision title pattern across every state. `"prevention"` / `"Coroners Prevention Unit"`,
`"recommendation"` + `"response"` (agencies must respond), `"manner of death"`, `"toxicology"`,
`"polydrug toxicity"`, `"drug-induced deaths"` (the shared ABS/AIHW term). Avoid bare `"findings"` —
always pair it with coroner / inquest / a jurisdiction or you drown in noise.

---

## 📊 Research, Data & Surveillance (AU)

The named datasets and cohort studies are the highest-value signals in the whole file — they're how
you find the actual numbers, and almost no non-specialist knows them.

| Producer             | `site:` target                                 | Named datasets / series (quote these)                                                                                                                                                                        |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **NDARC**            | `unsw.edu.au`, `ndarc.med.unsw.edu.au`         | `"Illicit Drug Reporting System"` / `IDRS`, `"Ecstasy and Related Drugs Reporting System"` / `EDRS`, `"Drug Trends"`, `"Australian Drug Trends"` (annual reports)                                            |
| **AIHW**             | `aihw.gov.au`                                  | `"NDSHS"` / `"National Drug Strategy Household Survey"`, `"AODTS NMDS"`, `"Alcohol and other drug treatment services in Australia"`                                                                          |
| **Kirby Institute**  | `kirby.unsw.edu.au`                            | `"Australian Needle and Syringe Program Survey"` / `ANSPS`, `"HIV, viral hepatitis and STIs in Australia"` annual surveillance                                                                               |
| **ACIC wastewater**  | `acic.gov.au`                                  | `"National Wastewater Drug Monitoring Program"` / `NWDMP` (analysis by UQ `QAEHS` + Univ. of South Australia; reports numbered, e.g. "Report 24")                                                            |
| **Burnet Institute** | `burnet.edu.au`                                | `"SuperMIX"` (Melbourne injecting cohort), `"EC Australia"`, hep C elimination                                                                                                                               |
| **NDRI** (Curtin)    | `ndri.curtin.edu.au`                           | `"National Drug Research Institute"`, trends bulletins                                                                                                                                                       |
| **APO**              | `apo.org.au`                                   | grey-literature repository — `"harm reduction"` reports, submissions (org reverted to `"Australian Policy Online"` in 2025; filter by `site:apo.org.au`, the name string is in flux)                         |
| **Named cohorts**    | (cross-site; mostly Kirby `kirby.unsw.edu.au`) | `"SuperMIX"` (Burnet; PWID cohort, called `"MIX"` pre-2008), `"ETHOS Engage"` (Kirby; hep C among PWID), `"HITS-c"` / `"HITS-p"` (Kirby; Hepatitis C Incidence and Transmission Study — community / prisons) |

> **⚠ ATLAS — handle separately:** "ATLAS" here is the Aboriginal & Torres Strait Islander STI/BBV
> surveillance network (drawing on ~65 ACCHS sites), **not** a generic PWID cohort. Keep it flagged
> for cultural-safety / Indigenous-data-sovereignty review; if used at all, pair with
> `"Aboriginal Community Controlled"` / `ACCHS` + `BBV`, never the bare word "ATLAS".

**Research centres & evidence sources (quote the exact name; mind the domains):**

| Centre / source        | `site:` target                      | Named signals                                                                                                                                 |
| ---------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Turning Point**      | `turningpoint.org.au`               | `"Turning Point"`, `"AODstats"`, `"DirectLine"` — addiction treatment + research (Eastern Health / Monash); **note: no hyphen in the domain** |
| **NCETA**              | `nceta.flinders.edu.au`             | `"National Centre for Education and Training on Addiction"`, `"workforce development"` (Flinders)                                             |
| **CSRH** (UNSW)        | `unsw.edu.au` (`inurl:csrh`)        | `"Centre for Social Research in Health"` — qualitative / social research (no `csrh.arts.unsw.edu.au` subdomain)                               |
| **The Matilda Centre** | `sydney.edu.au` (`/matilda-centre`) | `"The Matilda Centre for Research in Mental Health and Substance Use"`, `"OurFutures"`                                                        |
| **APSAD**              | `apsad.org.au`                      | `"Australasian Professional Society on Alcohol and other Drugs"`; journal `"Drug and Alcohol Review"` (Wiley, `onlinelibrary.wiley.com`)      |
| **Cochrane** (global)  | `cochranelibrary.com`               | `"Cochrane Database of Systematic Reviews"` / `CDSR` (`inurl:cdsr` for reviews)                                                               |

**Insider vocabulary:** `"sentinel"` sample, `"point prevalence"`, `"NMDS"` (national minimum
dataset), `"closed treatment episode"`, `"seroprevalence"`, `"incidence"` vs `"prevalence"`,
`"cascade"` (of care), `"reach"` / `"coverage"` (NSP), `"wastewater analysis"` /
`"wastewater-based epidemiology"`. **Host note:** NDARC migrated into the main UNSW site — current
pages live under `unsw.edu.au/research/ndarc` (old `ndarc.med.unsw.edu.au` project URLs
301-redirect; PDFs persist there and at `archive-ndarc.med.unsw.edu.au`) — query **both** domains.

---

## 📈 Datasets, Surveillance Feeds & Data Repositories

For finding the **numbers** (as opposed to studies): the exact dataset title is the signal. These
are the named collections, their codes, and where the raw data lives.

| Dataset / feed                      | `site:` target                                                  | Named signals (exact titles / codes)                                                                                                                                                  |
| ----------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Household survey** (AIHW)         | `aihw.gov.au`                                                   | `"National Drug Strategy Household Survey"` / `NDSHS` (latest `"2022–2023"`, en-dash; 2025 wave not yet released)                                                                     |
| **AOD treatment data** (AIHW)       | `aihw.gov.au`, `meteor.aihw.gov.au`                             | `"Alcohol and other drug treatment services in Australia"`, `"Alcohol and Other Drug Treatment Services National Minimum Data Set"` / `"AODTS NMDS"` (spaced form; METEOR defines it) |
| **Drug Trends** (NDARC)             | `unsw.edu.au`, `ndarc.med.unsw.edu.au`                          | `"IDRS"`, `"EDRS"`, `"Australian Drug Trends"`                                                                                                                                        |
| **NSP service data** (Kirby)        | `kirby.unsw.edu.au`                                             | `"Needle Syringe Program National Minimum Data Collection"` / `"NSP NMDC"`                                                                                                            |
| **Wastewater** (ACIC)               | `acic.gov.au`                                                   | `"National Wastewater Drug Monitoring Program"` — numbered (e.g. `"Report 25"`); UQ + Univ. of Adelaide                                                                               |
| **Ambulance harms** (Turning Point) | `aodstats.org.au`, `turningpoint.org.au`, `research.monash.edu` | `"National Ambulance Surveillance System"` / `"NASS"` (no public domain — surfaced via `"AODstats"`, the Victorian portal)                                                            |
| **Mortality** (ABS)                 | `abs.gov.au`                                                    | `"Causes of Death, Australia"`, `"drug-induced deaths"`, `"National Health Survey"` (`"Alcohol consumption"`)                                                                         |
| **Overdose aggregate** (Penington)  | `penington.org.au`                                              | `"Australia's Annual Overdose Report"`                                                                                                                                                |
| **Open data portal**                | `data.gov.au`                                                   | `/data/dataset` — agency CSV/XLSX; pair with `filetype:csv`                                                                                                                           |
| **Research microdata**              | `ada.edu.au`, `researchdata.edu.au`                             | Australian Data Archive (ANU; NDSHS Dataverse); `"Research Data Australia"` (ARDC, `ardc.edu.au` — replaces the defunct ANDS / `ands.org.au`)                                         |

**Insider vocabulary:** `"NMDS"` / `"NMDC"` (national minimum data set / collection), `"CURF"`
(con­fidentialised unit record file), `"Dataverse"`, `"point-in-time"` count,
`"closed treatment episode"`, `"separations"` (hospital), `"age-standardised rate"`, `"ICD-10"`
drug-induced classification. Use the **exact dataset title**
(`"National Drug Strategy Household Survey"`, not "drug survey") and prefer the **spaced**
`"AODTS NMDS"` over the hyphenated form.

---

## 🧪 Novel Substances, NPS & Toxico-surveillance

The specificity move here is to name the **substance** and the **surveillance program** rather than
searching generic "novel psychoactive substance". Two things only an insider knows: which compounds
are actually in the current Australian supply, and which named programs detect them.

**Australian detection & toxico-surveillance:**

| Program / source                       | `site:` target                         | Named signals                                                                                                                           |
| -------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **EDNA** (national ED toxicosurveill.) | (journal-heavy; quote the name)        | `"Emerging Drugs Network of Australia"`, `"toxicosurveillance"` — led from Royal Perth Hospital (Prof. Daniel Fatovich) with ChemCentre |
| **EDNAV** (Victorian arm)              | `austin.org.au`, `ahro.austin.org.au`  | `"Emerging Drugs Network of Australia - Victoria"`, `"EDNAV"`, `"Victorian Poisons Information Centre"` (Austin Health)                 |
| **ACIC wastewater**                    | `acic.gov.au`                          | `"National Wastewater Drug Monitoring Program"` / `NWDMP` (see Research section)                                                        |
| **NDARC**                              | `unsw.edu.au`, `ndarc.med.unsw.edu.au` | `"nitazenes fact sheet"`, `"Drug Trends"`, cryptomarket reports                                                                         |
| **ADF**                                | `adf.org.au`                           | `"Alcohol and Drug Foundation"`, `"Drug Facts"` (plain-language substance pages incl. nitazenes)                                        |
| **CanTEST** (drug-checking detections) | `cantest.com.au`, `health.act.gov.au`  | `"isotonitazepyne"` / `"N-pyrrolidino isotonitazene"` (flagged in fake oxycodone, Sep 2024) — see Drug Checking section                 |

**Named substances confirmed in current Australian / international supply (quote these exactly):**

| Class                                 | Quote-these names                                                                                                                                          | Note                                                                             |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Nitazenes** (benzimidazole opioids) | `"isotonitazene"`, `"protonitazene"`, `"metonitazene"` (top-3 AU), `"etonitazepyne"` / `"N-pyrrolidino etonitazene"`, `"butonitazene"`, `"etodesnitazene"` | `"nitazene"` / `"nitazenes"` as a class; `"etonitazene"` is the low-yield parent |
| **Designer benzodiazepines**          | `"bromazolam"` (dominant; + `"alpha-hydroxybromazolam"`), `"flualprazolam"`, `"etizolam"`, `"flubromazolam"`                                               | search the compound, not "novel benzodiazepine"                                  |
| **Adulterant sedatives**              | `"xylazine"` / `"tranq"`, `"medetomidine"` / `"dexmedetomidine"`                                                                                           | predominantly North-American supply — pair with AU sites to avoid US-only noise  |
| **Synthetic cathinones**              | `"eutylone"` (declining), `"pentylone"` (rising), `"N-ethylpentylone"` / `"ephylone"`                                                                      | mis-sold as MDMA; pair eutylone with pentylone to stay current                   |

**International NPS surveillance bodies:**

| Body                 | `site:` target                       | Named signals                                                                                                                                                                |
| -------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UNODC**            | `unodc.org` (NPS content at `/LSS/`) | `"Early Warning Advisory"` / `EWA` on NPS, `"World Drug Report"`, `"Current NPS Threats"`                                                                                    |
| **EUDA** (ex-EMCDDA) | `euda.europa.eu`, `emcdda.europa.eu` | `"European Drug Report"` (`"Trends and Developments"`), `"EU Early Warning System"`, `"European Drug Alert System"` / `EDAS`, `"European Threat Assessment System"` / `ETAS` |

> **⚠ Dropped signal:** `"EDND"` / `"European Database on New Drugs"` is an access-restricted
> partner system, not a public web resource — it does not surface in a Google dork. Use the
> confirmed `"EU Early Warning System"` + EUDA/EMCDDA site filters instead.

**Insider vocabulary:** `NPS` / `"new psychoactive substance"`, `"emerging drug"`, `"adulterant"` /
`"cutting agent"`, `"benzimidazole opioid"` (the chemical class name for nitazenes),
`"high-potency synthetic opioid"`, `"sedative adulterant"`, `"designer benzodiazepine"` / `DBZD`,
`"sentinel"` detection, `"toxicosurveillance"`, `"confirmed by"` GC-MS / LC-MS / `"qToF"`. **Keep
both EUDA and EMCDDA domains** (older PDFs still live at `emcdda.europa.eu`).

---

## 💬 Community Forums & Lived-Experience Knowledge

Essential to a peer-first resource and currently under-weighted relative to academic sources. These
hold the practical, real-time knowledge that doesn't make it into PDFs.

| Platform           | `site:` target            | Named signals / how to use                                                                                         |
| ------------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Bluelight**      | `bluelight.org`           | `"drug combinations"`, trip reports, `"BLUA"` archives                                                             |
| **Erowid**         | `erowid.org`              | `"Experience Vaults"`, `"PIHKAL"` / `"TIHKAL"`, substance vaults                                                   |
| **TripSit**        | `tripsit.me`              | `"factsheet"`, `"combination chart"`, `"drug combinations"`, dosing                                                |
| **PsychonautWiki** | `psychonautwiki.org`      | `"dose"`, `"duration"`, `"subjective effects"`, interaction charts                                                 |
| **DanceSafe**      | `dancesafe.org`           | `"reagent"`, `"drug checking"`, fact cards                                                                         |
| **drugs-forum**    | `drugsforum.com` ⚠ verify | experience + chemistry threads                                                                                     |
| **Reddit**         | `reddit.com`              | `r/AusDrugs`, `r/Drugs`, `r/researchchemicals`, `r/ReagentTesting`, `r/opiates` — use `site:reddit.com/r/AusDrugs` |
| **Bunk Police**    | `bunkpolice.com` ⚠ verify | reagent kit instructions / colour charts                                                                           |

**Insider vocabulary:** `"trip report"`, `"come up"` / `"comedown"`, `"redose"`, `"rolling"`,
`"set and setting"`, `"test kit"` / `"reagent"`, `"RC"` (research chemical), `"vendor"`,
`"harm reduction"` framing vs abstinence, `"marquis"` / `"mecke"` / `"mandelin"` (reagent names).

> **Handle with care:** forum content is lived knowledge, not vetted clinical advice. The value here
> is _finding_ peer knowledge and real-world reports — cross-check dosing/combination claims against
> TripSit/PsychonautWiki interaction data and clinical sources before treating as guidance.

---

## 🏛️ Policy, Inquiries & Advocacy

The specificity here is the named strategy, the named inquiry, and the named peak body — not generic
"drug policy".

**Strategy & landmark inquiries:**

| Entity                     | `site:` target           | Named signals                                                                                              |
| -------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **National Drug Strategy** | `health.gov.au`          | `"National Drug Strategy 2017-2026"` (en-dash in title, hyphen in URL); `"reduce demand, supply and harm"` |
| **NSW Ice Inquiry**        | `nsw.gov.au`             | `"Special Commission of Inquiry into the Drug 'Ice'"` (Dan Howard SC, 2020, 109 recommendations)           |
| **2024 NSW Drug Summit**   | `health.nsw.gov.au`      | `"Report on the 2024 New South Wales Drug Summit"` (Apr 2025, 56 recs; path `/aod/summit`)                 |
| **ACT decriminalisation**  | `legislation.act.gov.au` | `"Drugs of Dependence (Personal Use) Amendment Act 2022"` (A2022-20; commenced 28 Oct 2023)                |
| **Federal ice inquiry**    | `aph.gov.au`             | `"Inquiry into crystal methamphetamine (ice)"` (Parliamentary Joint Committee on Law Enforcement, 2018)    |

**AOD peak bodies (quote the exact name or acronym):**

| Body                | `site:` target  | Name                                                                  |
| ------------------- | --------------- | --------------------------------------------------------------------- |
| **AADC** (national) | `aadc.org.au`   | `"Australian Alcohol and other Drugs Council"` — national sector peak |
| **ATODA** (ACT)     | `atoda.org.au`  | `"Alcohol Tobacco and Other Drug Association ACT"`                    |
| **NADA** (NSW)      | `nada.org.au`   | `"Network of Alcohol and other Drugs Agencies"`                       |
| **VAADA** (VIC)     | `vaada.org.au`  | `"Victorian Alcohol and Drug Association"`                            |
| **QNADA** (QLD)     | `qnada.org.au`  | `"Queensland Network of Alcohol and Other Drug Agencies"`             |
| **WANADA** (WA)     | `wanada.org.au` | `"Western Australian Network of Alcohol and other Drug Agencies"`     |
| **SANDAS** (SA)     | `sandas.org.au` | `"South Australian Network of Drug and Alcohol Services"`             |
| **ATDC** (TAS)      | `atdc.org.au`   | `"Alcohol, Tobacco and other Drugs Council Tasmania"`                 |
| **AADANT** (NT)     | `aadant.org.au` | `"Association of Alcohol and other Drug Agencies NT"`                 |

**Reform & advocacy orgs:**

| Org                          | `site:` target                                   | Named signals                                                                                           |
| ---------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| **Uniting "Fair Treatment"** | `fairtreatment.org`, `uniting.org`               | `"Fair Treatment"` campaign (NSW.ACT; note `.org`, not `.org.au`)                                       |
| **Australia21**              | `australia21.org.au`                             | `"Australia21"`, `"Drug Policy Reform"` roundtables/reports                                             |
| **Harm Reduction Australia** | `harmreductionaustralia.org.au`                  | `"Harm Reduction Australia"` (HRA)                                                                      |
| **Unharm**                   | `unharm.org`                                     | `"Unharm"` (note `.org`)                                                                                |
| **SSDP Australia**           | `ssdp.org.au`                                    | `"Students for Sensible Drug Policy Australia"` / `"SSDP Australia"` (AU chapter; global is `ssdp.org`) |
| **ADLRF**                    | `adlrf.org.au`                                   | `"Australian Drug Law Reform Foundation"`, `"Alex Wodak"`                                               |
| **Penington / peer orgs**    | `penington.org.au`, `aivl.org.au`, `nuaa.org.au` | advocacy + drug-user-org submissions and position statements                                            |

**Insider vocabulary:** `"National Drug Strategy"`, the three pillars `"demand reduction"` /
`"supply reduction"` / `"harm reduction"`, `"decriminalisation"` / `"depenalisation"` /
`"diversion"`, `"special commission of inquiry"`, `"drug summit"`, `"submission"` + `"inquiry"`,
`"government response"`, `"Hansard"`, `"legal regulation"`.

---

## 🎪 Festivals & Events

Australian festival drug-checking policy moves on coronial findings and named trials — quote those,
plus the peer programs and the (changing) festival names.

**Coronial & policy drivers:**

| Entity                          | `site:` target                                                 | Named signals                                                                                                                                                     |
| ------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NSW festival-deaths inquest** | `coroners.nsw.gov.au`                                          | `"Inquest into the death of six patrons of NSW music festivals"` (Dep. State Coroner Harriet Grahame, 2019)                                                       |
| **NSW Music Festivals Act**     | `legislation.nsw.gov.au`                                       | `"Music Festivals Act 2019"` (No 17); `"Review of the Music Festivals Act 2019"`                                                                                  |
| **ACT GTM pill-test pilots**    | `harmreductionaustralia.org.au`, `pilltestingaustralia.com.au` | `"Report on the ACT GTM Pill Testing Pilot"` (2018, STA-SAFE Consortium); `"Report on the 2nd ACT GTM Pill Testing Pilot"` (2019, Pill Testing Australia)         |
| **VIC pill-testing trial**      | `legislation.vic.gov.au`, `premier.vic.gov.au`                 | `"Drugs, Poisons and Controlled Substances Amendment (Pill Testing) Act 2024"`; YSAS + The Loop Australia + Harm Reduction Victoria; Beyond the Valley (Dec 2024) |

**Peer programs & event health:**

| Entity                        | `site:` target                       | Named signals                                                                             |
| ----------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| **DanceWize** (VIC)           | `hrvic.org.au`                       | `"DanceWize"`, `"crowd care"` — peer harm reduction (HRVic; since 1999, ex-RaveSafe)      |
| **DanceWize NSW**             | `dancewizensw.org.au`, `nuaa.org.au` | `"DanceWize NSW"` (NUAA), `"crowd care"`                                                  |
| **Red Frogs**                 | `redfrogs.com.au`                    | `"Red Frogs"` chaplaincy/welfare (abstinence-leaning — not peer drug-checking)            |
| **St John event health**      | `stjohnvic.com.au` (state-federated) | `"Event Health Services"`                                                                 |
| **AIDR crowded-places guide** | `aidr.org.au`                        | `"Safe and Healthy Crowded Places"` (Handbook 15; ex- "Safe and Healthy Mass Gatherings") |

**Australian festivals (all valid as historical search terms; pair generic names with `festival` / a
harm-reduction term):** Beyond the Valley (`beyondthevalley.com.au`, active), Strawberry Fields
(`strawberry-fields.com.au`, active), Subsonic Music Festival (active), Lost Paradise (active),
Groovin the Moo (returning 2026; site of the ACT pill-testing trials), Rainbow Serpent → renamed
**Rainbow Spirit Festival** (`rainbowspirit.net`, 2023), Splendour in the Grass + Falls Festival
(defunct/hiatus — historical only).

**Insider vocabulary:** `"crowd care"`, `"welfare tent"` / `"chill-out space"`, `"roving"`,
`"drug checking"` / `"pill testing"`, `"adverse event"` / `"presentation"`, `"mass gathering"`,
`"event health"`, `"safety management plan"`.

---

## 📒 Service Finders & Directories

The hard part is the named tool. Lead with the national finders, then the state intake lines.

**National:**

| Tool                     | `site:` target             | Named signals                                                                                              |
| ------------------------ | -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **ADF Path2Help**        | `adf.org.au`               | `"Path2Help"` (service finder; path `/help-support/path2help` — **not** `path2help.org.au`, which is dead) |
| **Counselling Online**   | `counsellingonline.org.au` | `"Counselling Online"` (Turning Point; 24/7 national AOD)                                                  |
| **National AOD Hotline** | `health.gov.au`            | `"National Alcohol and Other Drug Hotline"`, `"1800 250 015"`                                              |
| **Healthdirect**         | `healthdirect.gov.au`      | `"Service Finder"` / `"Find a health service"` (National Health Services Directory / NHSD)                 |
| **Ask Izzy**             | `askizzy.org.au`           | `"Ask Izzy"` (Infoxchange; broad services directory)                                                       |
| **headspace** (youth)    | `headspace.org.au`         | `"headspace"`, `"eheadspace"` (12–25; incl. AOD)                                                           |

**State intake lines & finders:**

| State      | `site:` target                                    | Named signals                                                                                                                       |
| ---------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| NSW        | `yourroom.health.nsw.gov.au`, `health.nsw.gov.au` | `"Your Room"`, `"Alcohol and Drug Information Service"` (ADIS); `"NSP outlets"` finder                                              |
| VIC        | `directline.org.au`, `supportconnect.org.au`      | `"DirectLine"` (Turning Point); `"SupportConnect"` — `"Needle and Syringe Program Finder"`, `"Naloxone Service Finder"`             |
| QLD        | `adis.health.qld.gov.au`                          | `"Adis"` (Alcohol and Drug Information Service, QLD)                                                                                |
| SA         | `sahealth.sa.gov.au`                              | `"Drug and Alcohol Services South Australia"` (DASSA) + `"Alcohol and Drug Information Service"` (**not** `dassa.sa.gov.au` — dead) |
| WA         | `admhss.mhc.wa.gov.au`, `mhc.wa.gov.au`           | `"Alcohol and Drug Support Line"` (now via `"Alcohol, Drug and Mental Health Support Service"` / ADMHSS)                            |
| NSW (peer) | `nuaa.org.au`                                     | NUAA `"Needle and Syringe Program"` mail-out / `"NSP equipment"`                                                                    |

**Insider vocabulary:** `"service directory"` / `"service finder"` / `"treatment locator"`,
`"intake"` / `"referral"`, `"ADIS"` (Alcohol and Drug Information Service — exists in several
states, so pin by domain), `filetype:xlsx` / `filetype:csv` for data-rich directories.

---

## 📚 Safer-Use Education & Plain-Language Resources

Lead with peer-produced and plain-language material; clinical resources are real but secondary.

| Source                        | `site:` target                                | Named signals                                                                      |
| ----------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- |
| **NUAA** (peer pubs)          | `nuaa.org.au`, `usersnews.com.au`             | `"User's News"`, `"Insider's News"` (prisons), `"PeerLink"`, `"ConnectED"`         |
| **ADF**                       | `adf.org.au`                                  | `"Drug Facts"`, `"Path2Help"`, `"Power of Words"` (language guide)                 |
| **DanceWize**                 | `hrvic.org.au`, `dancewizensw.org.au`         | `"DanceWize"` festival crowd-care cards/resources                                  |
| **Health Translations** (VIC) | `healthtranslations.vic.gov.au`, `ceh.org.au` | multilingual translated health resources (Centre for Culture Ethnicity and Health) |
| **Hepatitis Australia**       | `hepatitisaustralia.com`                      | `"Hepatitis Australia"`, `"HepLink"` (note `.com`)                                 |
| **Hepatitis NSW**             | `hep.org.au`                                  | `"Hepatitis NSW"`, `"Hepatitis Infoline"`, free factsheets                         |
| **ASHM** (clinical)           | `ashm.org.au`, `hepatitisb.org.au`            | `"B Positive"` guide, `"Hepatitis B Toolkit"`                                      |

**International plain-language education:** DanceSafe `"Drug Information"` + test-strip sheets
(`dancesafe.org`); TripSit `"Combo Chart"` / factsheets (`combo.tripsit.me`, `drugs.tripsit.me`,
`wiki.tripsit.me` — note subdomains); Erowid `"Experience Vaults"` (`erowid.org`); The Loop
`"Harm reduction information"` (`wearetheloop.org`); Crew `"Drugs A-Z"` (`crew.scot`); The Level
`"Straight up drug info"` (`thelevel.org.nz`, NZ Drug Foundation); Toward the Heart
`"Substance Information Sheets"` (`towardtheheart.com`).

**Note:** no single titled "Easy Read" harm-reduction series was verifiable — for accessible
material use `("easy read" OR "plain language") (naloxone OR "harm reduction") filetype:pdf` across
`.org.au` / `.gov.au`.

---

## 🧩 Populations & Intersections

Youth, families & carers, housing & homelessness, and mental health — who is affected and where AOD
intersects other systems. The specificity move is the same: name the service, the program, the
guideline.

**Youth (AOD + youth mental health):**

| Entity                        | `site:` target                             | Named signals                                                                                                                        |
| ----------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **YSAS**                      | `ysas.org.au`                              | `"Youth Support and Advocacy Service"`, `"Victorian Pill Testing Service"`, `"Embedded Youth Outreach Program"`                      |
| **Dovetail** (QLD)            | `dovetail.org.au`, `insight.qld.edu.au`    | `"Dovetail"` `"alcohol and other drug"`, `"Dovetail Good Practice Guide"` (youth-AOD workforce; QLD Health/Insight)                  |
| **headspace**                 | `headspace.org.au`                         | `"headspace"` + `"alcohol and other drugs"` (AOD is one of four core streams)                                                        |
| **Orygen**                    | `orygen.org.au`                            | `"Orygen"`, `"National Centre of Excellence in Youth Mental Health"`                                                                 |
| **ReachOut**                  | `au.reachout.com`, `about.au.reachout.com` | `"ReachOut"`, `"PeerChat"` (research on the `about.` subdomain)                                                                      |
| **Positive Choices**          | `positivechoices.org.au`                   | `"Positive Choices"` — school/community drug-education portal (Matilda Centre)                                                       |
| **OurFutures**                | `ourfuturesinstitute.org.au`               | `"OurFutures"`, `"Climate Schools"` (former name) — school prevention program                                                        |
| **Cracks in the Ice**         | `cracksintheice.org.au`                    | `"Cracks in the Ice"` — national methamphetamine toolkit (Matilda Centre)                                                            |
| **Strong & Deadly Futures** ⚠ | `strongdeadly.org.au`                      | `"Strong & Deadly Futures"` / `"Strong and Deadly Futures"` — Aboriginal & TSI school AOD program (handle with cultural-safety care) |
| **ADF prevention**            | `adf.org.au`, `goodsports.com.au`          | `"Local Drug Action Team"` (LDAT), `"Good Sports"`                                                                                   |

**Families, carers & affected others:**

| Entity                          | `site:` target                         | Named signals                                                                                                                       |
| ------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Family Drug Support**         | `fds.org.au`                           | `"Family Drug Support"`, `"Stepping Stones"` / `"Stepping Forward"`, `"Tony Trimingham"` (not "...to Success"; "BEACON" unverified) |
| **Family Drug & Gambling Help** | `sharc.org.au`                         | `"Family Drug & Gambling Help"` / `"Family Drug Help"` (SHARC; not the unresolving `familydrughelp.org.au`)                         |
| **SHARC**                       | `sharc.org.au`                         | `"Self Help Addiction Resource Centre"`, `"BreakThrough"` (family workshops, with Turning Point)                                    |
| **The Bouverie Centre**         | `bouverie.org.au`                      | `"The Bouverie Centre"`, `"Single Session Family Consultation"` (La Trobe; family therapy)                                          |
| **Emerging Minds / COPMI**      | `emergingminds.com.au`, `copmi.net.au` | `"Children of Parents with a Mental Illness"`, `"COPMI"` (now a legacy program of Emerging Minds)                                   |
| **CEH** (CALD)                  | `ceh.org.au`                           | `"Centre for Culture, Equity & Health"` / `"...Ethnicity..."` (legacy), `"Multicultural Drug & Alcohol Partnership"`                |

**Housing & homelessness:**

| Entity                          | `site:` target                 | Named signals                                                                                                                 |
| ------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| **AIHW SHS**                    | `aihw.gov.au`                  | `"Specialist homelessness services annual report"` / `"Specialist Homelessness Services"` (SHS)                               |
| **AHURI**                       | `ahuri.edu.au`                 | `"Australian Housing and Urban Research Institute"`, `"Final Report"` series, `"Common Ground Housing Model Practice Manual"` |
| **Homelessness Australia**      | `homelessnessaustralia.org.au` | `"Homelessness Australia"` — national peak                                                                                    |
| **Council to Homeless Persons** | `chp.org.au`                   | `"Council to Homeless Persons"` — VIC peak                                                                                    |
| **J2SI** (Sacred Heart Mission) | `sacredheartmission.org`       | `"Journey to Social Inclusion"` / `"J2SI"`, `"Sustaining exits from long-term homelessness"` (Housing First RCT)              |
| **Launch Housing**              | `launchhousing.org.au`         | `"Launch Housing"`, `"Elizabeth Street Common Ground"` (legacy: Hanover / HomeGround)                                         |
| **Mission Australia**           | `missionaustralia.com.au`      | `"Mission Australia"`, `"Missionbeat"`                                                                                        |

> **"Common Ground"** is a supportive-housing _model_, not one org — pair with a named building
> (`"Elizabeth Street Common Ground"`) or the AHURI practice manual; the bare term is noisy.

**Mental health & co-occurring (dual diagnosis):**

| Entity                              | `site:` target                                                                 | Named signals                                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Comorbidity Guidelines**          | `comorbidityguidelines.org.au`                                                 | `"Guidelines on the management of co-occurring alcohol and other drug and mental health conditions in alcohol and other drug treatment settings"` (Matilda Centre, 3rd ed 2022) |
| **NSW comorbidity guideline**       | `health.nsw.gov.au`                                                            | `"For the Care of Persons with Comorbid Mental Illness and Substance Use Disorders in Acute Care Settings"` (NSW Health, 2009)                                                  |
| **Turning Point — Hamilton Centre** | `turningpoint.org.au`                                                          | `"Hamilton Centre"`, `"co-occurring"` (co-occurring mental illness + addiction hub)                                                                                             |
| **VDDI** (VIC)                      | `dualdiagnosis.org.au`, `health.vic.gov.au`                                    | `"Victorian Dual Diagnosis Initiative"`, `"NEXUS"` (St Vincent's)                                                                                                               |
| **Phoenix Australia** (trauma)      | `phoenixaustralia.org`                                                         | `"Australian Guidelines for the Prevention and Treatment of Acute Stress Disorder, Posttraumatic Stress Disorder and Complex PTSD"` (note `.org`)                               |
| **MH orgs**                         | `blackdoginstitute.org.au`, `sane.org`, `beyondblue.org.au`, `lifeline.org.au` | `"Black Dog Institute"`, `"SANE Australia"` (`.org`), `"Beyond Blue"`, `"Lifeline Australia"` (13 11 14)                                                                        |

**Insider vocabulary:** `"dual diagnosis"` / `"co-occurring"` / `"comorbid"` / `"co-existing"`,
`"no wrong door"`, `"Housing First"`, `"specialist homelessness services"` / `SHS`,
`"assertive outreach"`, `"family inclusive practice"`, `"affected family member"` /
`"affected other"`, `"children of parents"` / `COPMI`, `"early intervention"`,
`"social determinants"`. The research-side comorbidity body (NHMRC CRE in Mental Health and
Substance Use) is best searched by full name + `"Maree Teesson"` / NDARC / Matilda Centre — the
acronym "CREMS" is ambiguous, so don't quote it.

---

## ⚖️ Justice, Custody & Diversion

People who use drugs are massively over-represented in custody, and the system has its own named
services, courts, data collections and (limited) harm-reduction footprint. Lead with the peer voice,
then name the actual bodies — not generic "prison health" / "drug court" strings.

**Peer & lived-experience in custody (lead here):**

| Source                           | `site:` target              | Named signals                                                                                                                                                 |
| -------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NUAA "Insider's News"**        | `nuaa.org.au`               | `"Insider's News"` — peer harm-reduction magazine **solely distributed through NSW correctional centres** (path `/insiders-news`); sibling to `"User's News"` |
| **Community Restorative Centre** | `crcnsw.org.au`             | `"Jailbreak Radio"`, `"Paper Chained"` (prisoner-writing zine), `"The Miranda Project"` — lived-experience-led throughcare/media (NSW)                        |
| **EuroNPUD / INPUD** (intl)      | `euronpud.net`, `inpud.net` | peer-led prison harm reduction, peer naloxone (domains are `.net`, **not** `.org`; roots 403 bots but resolve)                                                |

**Custodial health services (by jurisdiction — who actually delivers care in prison):**

| Jurisdiction | `site:` target                                                                             | Named signals                                                                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NSW**      | `justicehealth.nsw.gov.au`, `nsw.gov.au` (`/health-and-wellbeing/justicehealth`)           | `"Justice Health and Forensic Mental Health Network"` / `"Justice Health NSW"`; `"Network Patient Health Survey"`, `"Young People in Custody Health Survey"` (content migrating to nsw.gov.au — OR both) |
| **VIC**      | `justice.vic.gov.au`, `corrections.vic.gov.au`                                             | `"Justice Health"` (within DJCS); providers `"Correct Care Australasia"` (former) / `"GEO Group"` (current) / `"Forensicare"` (Ravenhall MH)                                                             |
| **QLD**      | `westmoreton.health.qld.gov.au`, `health.qld.gov.au`                                       | `"Prison Health Services"` / `"Prisoner Health Services"` (West Moreton Health is lead HHS) — **not** "Offender Health Services" (not current)                                                           |
| **WA**       | `wa.gov.au` (`/department-of-justice/corrective-services`), `correctiveservices.wa.gov.au` | `"Corrective Services"` `"health care"` — WA is the national exception: prison health sits inside **Justice/Corrective Services**, not the Health dept                                                   |
| **SA**       | `sahealth.sa.gov.au`, `calhn.sa.gov.au`                                                    | `"SA Prison Health Service"` / `"South Australian Prison Health Service"` / `"SAPHS"` (CALHN); `"Model of care for Aboriginal prisoner health and wellbeing"`                                            |
| **ACT**      | `canberrahealthservices.act.gov.au`, `winnunga.org.au` ⚠                                   | `"Justice Health"`, `"Custodial Health"`, `"Alexander Maconochie Centre"`; `"Winnunga Model of Care"` (ACCHO model at the AMC; verify winnunga.org.au before site-scoping)                               |
| **TAS**      | `health.tas.gov.au`                                                                        | `"Correctional Primary Health Service"` / `"...Services"` / `"CPHS"`, `"Risdon Prison"` (delivered by Dept of Health, not the Prison Service)                                                            |
| **NT** ⚠     | `nt.gov.au`, `corrections.nt.gov.au`, `health.nt.gov.au`                                   | no stable branded service name confirmed (model under review) — use the broad multi-host fallback, no quoted program title                                                                               |

**National prisoner-health anchors (use these — there is no "Network for Prisoner Health"):**

| Source                           | `site:` target | Named signals                                                                                                                                                                                                                                 |
| -------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AIHW prisoner health**         | `aihw.gov.au`  | `"The health of people in Australia's prisons"` (2022) / `"The health of Australia's prisoners"` (2018) — **quote both** titles; `"National Prisoner Health Data Collection"` / `"NPHDC"`; `"National Prisoner Health Information Committee"` |
| **National Prisons Hep Network** | `nphn.net.au`  | `"National Prisons Hepatitis Network"` — hep C in custody                                                                                                                                                                                     |
| **RACGP standards**              | `racgp.org.au` | `"Standards for health services in Australian prisons"`                                                                                                                                                                                       |

**Drug courts & diversion programs (by jurisdiction — quote the exact program name):**

| Jurisdiction | `site:` target                                                                     | Named signals                                                                                                                                                                                                                                                                       |
| ------------ | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NSW**      | `drugcourt.nsw.gov.au`, `dcj.nsw.gov.au`, `police.nsw.gov.au`, `bocsar.nsw.gov.au` | `"Drug Court of New South Wales"`; `"Magistrates Early Referral Into Treatment"` / `"MERIT"`; `"Early Drug Diversion Initiative"` / `"EDDI"` (Feb 2024); `"Cannabis Cautioning Scheme"`; `"Youth Drug and Alcohol Court"` (closed 2012 — historical)                                |
| **VIC**      | `mcv.vic.gov.au`, `countycourt.vic.gov.au`                                         | `"Drug Court"` + `"Drug and Alcohol Treatment Order"` / `"DATO"` (Magistrates'); `"Drug and Alcohol Treatment Court"` (County Court); `"Court Integrated Services Program"` / `"CISP"`; `"Court Referral and Evaluation for Drug Intervention and Treatment"` / CREDIT (historical) |
| **QLD**      | `courts.qld.gov.au`, `police.qld.gov.au`                                           | `"Queensland Drug and Alcohol Court"` / `"QDAC"`; `"Police Drug Diversion Program"`; `"Court Link"` (replaced `"QMERIT"` Dec 2019 — quote QMERIT only for historical)                                                                                                               |
| **SA**       | `courts.sa.gov.au`, `sahealth.sa.gov.au`                                           | `"Treatment Intervention Court"` (formerly `"Drug Court Program"`); `"Police Drug Diversion Initiative"` / `"PDDI"` (DASSA)                                                                                                                                                         |
| **WA**       | `magistratescourt.wa.gov.au`, `mhc.wa.gov.au`                                      | `"Drug Court"` + `"Perth Drug Court Guidelines"`; `"Cannabis Intervention Requirement"` / `"CIR"` + `"Cannabis Intervention Session"`                                                                                                                                               |
| **ACT**      | `courts.act.gov.au`, `anu.edu.au`                                                  | `"Drug and Alcohol Sentencing List"` / `"DASL"` + `"Drug and Alcohol Treatment Order"`; eval: `"ACT Drug and Alcohol Sentencing List: Process and Outcome Evaluation"`                                                                                                              |
| **National** | `aihw.gov.au`, `aic.gov.au`                                                        | `"Illicit Drug Diversion Initiative"` / `"IDDI"` (COAG, 1999); AIHW `"The effectiveness of the Illicit Drug Diversion Initiative in rural and remote Australia"`                                                                                                                    |

> **Evaluators, not just courts:** NSW Drug Court / MERIT evaluations are authored by **BOCSAR**
> (`bocsar.nsw.gov.au`); national crime/justice evaluation is the **Australian Institute of
> Criminology** (`aic.gov.au`). Dork the evaluator's domain, not only the court's.

**Prison AOD data & post-release research (named collections & cohorts):**

| Source                        | `site:` target   | Named signals                                                                                                                                   |
| ----------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **AIHW** (prisoner health)    | `aihw.gov.au`    | `"The health of people in Australia's prisons"` / `"The health of Australia's prisoners"` (older); `"National Prisoner Health Data Collection"` |
| **ABS** (corrections counts)  | `abs.gov.au`     | `"Prisoners in Australia"` (annual; legacy cat `"4517.0"`), `"Corrective Services, Australia"` (quarterly — quote the comma)                    |
| **Productivity Commission**   | `pc.gov.au`      | `"Report on Government Services"` / `"RoGS"` → Part C Justice, `"Corrective services"` chapter                                                  |
| **MARC study** (Kinner, QLD)  | (journal-hosted) | `"Mortality After Release from Custody"` — pair with `Kinner` / `Queensland` / `"released from prison"` (acronym MARC is ambiguous)             |
| **MARIC** (Borschmann/Kinner) | `rch.org.au`     | `"Mortality After Release from Incarceration Consortium"` / `"MARIC"` — international post-release mortality consortium                         |
| **PATH cohort** (Burnet, VIC) | `burnet.edu.au`  | `"Prison and Transition Health"` / `"PATH cohort"` — people who inject drugs leaving prison (anchor PATH with `"Prison and Transition Health"`) |

**Throughcare, re-entry & in-custody AOD programs (named providers):**

| Program / provider               | `site:` target                               | Named signals                                                                                                                                                                          |
| -------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Community Restorative Centre** | `crcnsw.org.au`                              | `"Alcohol and Other Drugs (AOD) Transition Program"`, `"Extended Reintegration Service"`, `"The Miranda Project"` (NSW lead throughcare)                                               |
| **CDTCC** (NSW)                  | `dcj.nsw.gov.au`, `drugcourt.nsw.gov.au`     | `"Compulsory Drug Treatment Correctional Centre"` (Parklea; `"Compulsory Drug Treatment Correctional Centre Act 2004"`)                                                                |
| **Caraniche StepOut** (VIC)      | `caraniche.com.au`, `corrections.vic.gov.au` | `"StepOut"` post-release AOD (**not** "Connections"); Corrections Victoria `"transitional"` programs                                                                                   |
| **Yeddung Mura "Good Pathways"** | `goodpathways.org.au`                        | `"Throughcare Program"` (ACT Corrective Services; Aboriginal-led) — distinct from Winnunga's clinical care                                                                             |
| **QLD in-custody AOD**           | `qld.gov.au`                                 | `"Reclaim Wellness"` (AOD-offending program); `"Transitions"` (pre-release)                                                                                                            |
| **National corrections policy**  | `corrections.vic.gov.au`                     | `"Guiding Principles for Corrections in Australia"` (umbrella; throughcare is embedded — there is no single "Throughcare Framework")                                                   |
| **Naloxone on release**          | `health.gov.au`                              | `"Take Home Naloxone Program"` + `"naloxone on release"` / `"post-release"` overdose (national program from 1 Jul 2022; NSW/WA active, VIC pilot) — no discrete brand, use the phrases |

**First Nations & justice ⚠ (verified institutions — but flag the whole sub-section for
community/peer and Indigenous-data-sovereignty review before use):**

| Entity                           | `site:` target                                                  | Named signals                                                                                                                                                                                                                                     |
| -------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Aboriginal sentencing courts** | state court domains                                             | `"Koori Court"` (VIC), `"Murri Court"` (QLD), `"Nunga Court"` / `"Aboriginal Court Day"` (SA), `"Circle Sentencing"` (NSW), `"Community Court"` (NT, reintroduced 2023), `"Galambany Court"` (ACT); WA `"Aboriginal Community Court"` closed 2015 |
| **RCIADIC**                      | `austlii.edu.au`, `niaa.gov.au`                                 | `"Royal Commission into Aboriginal Deaths in Custody"` → `"National Report"`, `"339 recommendations"` (restrict to the National Report — **individual death reports are not appropriate for dorking**)                                            |
| **AIC deaths in custody**        | `aic.gov.au`                                                    | `"Deaths in custody in Australia"`, `"National Deaths in Custody Program"` / `"NDICP"`                                                                                                                                                            |
| **Closing the Gap (justice)**    | `closingthegap.gov.au`                                          | `"Target 10"` (adult incarceration, 15% by 2031), `"Target 11"` (youth detention, 30% by 2031)                                                                                                                                                    |
| **Aboriginal Legal Services**    | `alsnswact.org.au`, `naaja.org.au`, `als.org.au`, `vals.org.au` | ALS (NSW/ACT), NAAJA (NT), ALSWA (WA — bare `als.org.au`), VALS (VIC)                                                                                                                                                                             |
| **NACCHO** (health, not justice) | `naccho.org.au`                                                 | `"Aboriginal Community Controlled"` / `"ACCHO"` + `"alcohol and other drugs"` (a HEALTH peak — don't imply it runs justice programs)                                                                                                              |

**International prison harm reduction:**

| Body / source                     | `site:` target                           | Named signals                                                                                                                                                                                                                          |
| --------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UNODC** (comprehensive package) | `unodc.org`                              | `"HIV prevention, treatment and care in prisons and other closed settings: a comprehensive package of interventions"` (the 15 interventions); `"A handbook for starting and managing needle and syringe programmes in prisons"` (2014) |
| **UNODC** (standards)             | `unodc.org`                              | `"Nelson Mandela Rules"` / `"United Nations Standard Minimum Rules for the Treatment of Prisoners"`                                                                                                                                    |
| **WHO Europe**                    | `who.int`, `iris.who.int`                | `"Prisons and health"` (2014; ISBN `9789289050593`) — **not** the deprecated `euro.who.int`                                                                                                                                            |
| **Harm Reduction International**  | `hri.global`                             | `"The Global State of Harm Reduction"` (2024 added a `"people in prison"` / Prisons chapter)                                                                                                                                           |
| **Penal Reform International**    | `penalreform.org`, `cdn.penalreform.org` | `"Global Prison Trends"` (annual; PDFs served from the `cdn.` host)                                                                                                                                                                    |
| **Open Society Foundations**      | `opensocietyfoundations.org`             | `"Prison Needle Exchange: Lessons from a Comprehensive Review of International Evidence and Experience"`                                                                                                                               |
| **Correctional Service Canada**   | `canada.ca`, `csc-scc.gc.ca`             | `"Prison Needle Exchange Program"` / `"PNEP"` (rolling out since 2018)                                                                                                                                                                 |

**Insider vocabulary:** `"throughcare"` (the AU sector term — not "reentry"),
`"continuity of care"`, `"post-release"` / `"naloxone on release"`, `"custodial health"` /
`"correctional health"`, `"closed settings"` (the UN term covering prisons + detention),
`"diversion"` (police vs court vs pre-plea vs pre-sentence), `"DATO"` (drug & alcohol treatment
order), `"specialist"` / `"problem-solving court"`, `"post-release mortality"` / `"SMR"`
(standardised mortality ratio), `"prison NSP"` / `"prison needle exchange"`, `"people in prison"` /
`"people who are incarcerated"` (not "inmates"/"offenders"). Note: prison health sits under the
**Health** department everywhere except **WA** (Justice/Corrective Services) — pick the site filter
accordingly.

---

## 🌏 Rural, Regional & Remote

The "tyranny of distance" has its own named services, datasets, and rurality classifications. The
specificity move is to name the **AOD-relevant** producer (many rural-health orgs are mental-health-
only) and to use the formal **rurality codes** that filter to non-metro evidence.

**Rural AOD & health orgs (which actually carry AOD content):**

| Org                                | `site:` target        | Named signals                                                                                                                                                         |
| ---------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **National Rural Health Alliance** | `ruralhealth.org.au`  | `"Partyline"` (flagship magazine); fact sheet `"Alcohol, smoking, vaping and other drug use in rural Australia"` (Apr 2025) — the rare rural-AOD-specific named title |
| **Royal Flying Doctor Service**    | `flyingdoctor.org.au` | `"Best for the Bush"` / `"Rural and Remote Health Base Line"` (research series with AOD + MH data) — primary domain is `flyingdoctor.org.au`, not `rfds.org.au`       |
| **CRRMH** (rural MH)               | `crrmh.com.au`        | `"Glove Box Guide to Mental Health"`; runs `"Rural Adversity Mental Health Program"` (mental-health, not AOD-specific; **not** `rrmh.com.au`, a different org)        |
| **NACCHO / ACCHOs** (remote)       | `naccho.org.au`       | `"Aboriginal Community Controlled"` / `"ACCHO"` + remote AOD (community-controlled framing — see the First Nations pack)                                              |
| **SARRAH** (allied health)         | `sarrah.org.au`       | `"Services for Australian Rural and Remote Allied Health"` — rural workforce context (not an AOD content producer)                                                    |

**Rurality classifications & datasets (the codes that filter to non-metro evidence):**

| Classification / data                  | `site:` target              | Named signals                                                                                                                         |
| -------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Modified Monash Model**              | `health.gov.au`             | `"Modified Monash Model"` / `"Modified Monash Model 2023"`, `"MM 1"`…`"MM 7"` — the rural-health-workforce classification             |
| **ABS Remoteness Areas**               | `abs.gov.au`, `aihw.gov.au` | `"Remoteness Areas"` / `"Remoteness Structure"` (ASGS); `"Inner Regional"`, `"Outer Regional"`, `"Remote"`, `"Very Remote"` Australia |
| **National Rural Health Commissioner** | `health.gov.au`             | `"Office of the National Rural Health Commissioner"` / `"ONRHC"`                                                                      |

**Rural telehealth & clinician AOD advice (state-specific names — DACAS is not national):**

| Service                 | `site:` target                          | Named signals                                                                                                                             |
| ----------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **DACAS** (VIC/TAS/NT)  | `dacas.org.au`                          | `"Drug and Alcohol Clinical Advisory Service"` / `"DACAS"`, `"secondary consultation"` (Turning Point; phone-delivered specialist advice) |
| **DASAS** (NSW)         | `health.nsw.gov.au`                     | `"Drug and Alcohol Specialist Advisory Service"` / `"DASAS"` (St Vincent's Sydney)                                                        |
| **WA clinician advice** | `admhss.mhc.wa.gov.au`, `mhc.wa.gov.au` | `"Alcohol and Drug Support Line"` / clinician advice (via ADMHSS)                                                                         |

**Special rural contexts (FIFO/mining, drought/disaster, farming):**

| Context                  | `site:` target                                                      | Named signals                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FIFO / mining MH**     | `wa.gov.au`, `mhc.wa.gov.au`, `transformativeworkdesign.com`        | `"Mental Awareness, Respect and Safety"` / `"MARS Program"` (WA, via DEMIRS — not `dmirs.wa.gov.au`); `"Impact of FIFO work arrangements on the mental health and wellbeing of FIFO workers"` (Curtin CTWD; full report on `mhc.wa.gov.au`) |
| **Drought / adversity**  | `ramhp.com.au`, `health.nsw.gov.au`                                 | `"Rural Adversity Mental Health Program"` / `"RAMHP"` (NSW; began 2007 as the Drought Mental Health Assistance Program)                                                                                                                     |
| **Farming men's health** | `farmerhealth.org.au`, `therippleeffect.com.au`, `ifarmwell.com.au` | `"National Centre for Farmer Health"`, `"Sustainable Farm Families"`, `"AgriSafe"`; `"The Ripple Effect"` (farmer suicide stigma); `"ifarmwell"` (UniSA, Kate Gunn)                                                                         |

**International rural-opioid layer:**

| Source                | `site:` target                          | Named signals                                                                                                                          |
| --------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **US — RCORP** (HRSA) | `hrsa.gov`                              | `"Rural Communities Opioid Response Program"` / `"RCORP"` (Federal Office of Rural Health Policy)                                      |
| **Canada** ⚠          | `canada.ca`                             | no rural-specific quotable title confirmed — use `"Substance Use and Addictions Program"` / `"SUAP"` + `(northern OR remote)` fallback |
| **Scotland** ⚠        | `gov.scot`, `publichealthscotland.scot` | no rural-specific title confirmed — use `"National Mission on Drug Deaths"` + `(rural OR remote OR island)` fallback                   |

**Insider vocabulary:** `"rural, regional and remote"` / `RRR`, `"tyranny of distance"`,
`"non-metropolitan"`, the formal `"Modified Monash"` / `"MM 1–7"` and `"Remoteness Areas"` / `"RA"`
codes (use these to filter, not just the word "rural"), `"fly-in fly-out"` / `"FIFO"` /
`"drive-in drive-out"` / `"DIDO"`, `"secondary consultation"` (clinician phone advice),
`"professional isolation"` / `"generalist"` (rural workforce), `"drought"` / `"natural disaster"`
adversity, `"seasonal"` / `"harvest"` workers. Pair generic region names (`"Kimberley"`,
`"Riverina"`) with an AOD term or you drown in tourism results.

---

## 🌏 International Reference Bodies (for the "strong international" layer)

For the "strong international layer", name the country's actual agency or service — not "overseas
examples". Each pack should pull the relevant rows.

**Global bodies:**

| Body                             | `site:` target                       | Named signals                                                                                                                                             |
| -------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **EUDA** (ex-EMCDDA)             | `euda.europa.eu`, `emcdda.europa.eu` | `"European Drug Report"`, `"EU Early Warning System"`, `"Trendspotter"`, `"European Drug Alert System"` (EMCDDA renamed EUDA Jul 2024; keep both domains) |
| **UNODC**                        | `unodc.org`                          | `"World Drug Report"`, `"Early Warning Advisory"` (NPS)                                                                                                   |
| **WHO**                          | `who.int`, `iris.who.int`            | `"consolidated guidelines"`, `"key populations"`, opioid-dependence + overdose guidelines                                                                 |
| **Harm Reduction International** | `hri.global`                         | `"Global State of Harm Reduction"` (flagship biennial report)                                                                                             |
| **INPUD**                        | `inpud.net`                          | `"Words Matter"`, `"International Network of People Who Use Drugs"`                                                                                       |
| **NSWP** (sex work)              | `nswp.org`                           | `"Global Network of Sex Work Projects"`, briefing papers                                                                                                  |

**Canada:**

| Source                 | `site:` target                             | Named signals                                                                                                                                                                           |
| ---------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **BCCSU**              | `bccsu.ca`                                 | `"British Columbia Centre on Substance Use"`, clinical guidelines (OUD, iOAT, supervised consumption)                                                                                   |
| **Toward the Heart**   | `towardtheheart.com`                       | `"Take Home Naloxone"`, `"Facility Overdose Response Box"` (BCCDC harm reduction)                                                                                                       |
| **Health Canada SCS**  | `canada.ca`, `health-infobase.canada.ca`   | `"supervised consumption sites"`, `"Status of applications"`                                                                                                                            |
| **CATIE**              | `catie.ca`                                 | `"CATIE"`, `"Prevention in Focus"` — HIV / hep C / harm-reduction knowledge                                                                                                             |
| **Safer supply**       | `substanceusehealth.ca`                    | `"safer supply"` / `"safe supply"`, `"Safer Opioid Supply"`, `"London InterCommunity Health Centre"`, `"Substance Use and Addictions Program"` (SUAP; federal pilot funding ended 2025) |
| **Toronto checking**   | `drugchecking.community`, `tripproject.ca` | `"Toronto's Drug Checking Service"`, `"TRIP! Project"`                                                                                                                                  |
| **Peer (CAPUD/VANDU)** | `capud.ca`, `vandu.org`                    | drug-user union submissions; Vancouver peer overdose response                                                                                                                           |

**United Kingdom:**

| Source                | `site:` target        | Named signals                                                                        |
| --------------------- | --------------------- | ------------------------------------------------------------------------------------ |
| **Release**           | `release.org.uk`      | `"Drugs & The Law"`, legal helpline (`ask@release.org.uk`)                           |
| **Transform**         | `transformdrugs.org`  | `"Transform Drug Policy Foundation"`, `"Anyone's Child"`                             |
| **The Loop**          | `wearetheloop.org`    | `"The Loop"`, `"TEST & KNOW"` — UK drug checking                                     |
| **We Are With You**   | `wearewithyou.org.uk` | `"We Are With You"` (formerly Addaction) — service provider                          |
| **Cranstoun**         | `cranstoun.org`       | service provider (note `.org`, **not** `.org.uk`)                                    |
| **UK clinical guide** | `gov.uk`              | `"Drug misuse and dependence: UK guidelines on clinical management"` ("Orange Book") |
| **WEDINOS** (Wales)   | `wedinos.wales`       | `"WEDINOS"`, `"PHILTRE"`, substance alerts                                           |

**Europe:**

| Source              | `site:` target                      | Named signals                                                                                                                                                              |
| ------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Portugal (ICAD)** | `icad.pt`, `sicad.pt` (legacy)      | `"Instituto para os Comportamentos Aditivos e as Dependências"` (ICAD — succeeded SICAD in 2024); CDT `"Comissões para a Dissuasão da Toxicodependência"`, `"Lei 30/2000"` |
| **Switzerland**     | `saferparty.ch`, `bag.admin.ch`     | `"Saferparty"` / `"Drogeninformationszentrum"` (DIZ), `"Substanzwarnung"`; `"heroingestützte Behandlung"` / HeGeBe; `"Vier-Säulen-Politik"`                                |
| **Netherlands**     | `trimbos.nl`                        | `"Trimbos-instituut"`, `"DIMS"` / `"Drugs Information and Monitoring System"`, `"Red Alert"`                                                                               |
| **Germany**         | `akzept.eu`, `jes-bundesverband.de` | `"Drogenkonsumraum"`, `"akzept e.V."` + `"Alternativer Drogen- und Suchtbericht"`, `"JES Bundesverband"`                                                                   |
| **Scotland**        | `crew.scot`                         | `"Crew 2000 (Scotland)"` (brand: Crew) — `"Drugs A-Z"`, `"The Scottish Drug Checking Project"`                                                                             |

**New Zealand:**

| Source                   | `site:` target                             | Named signals                                                                                |
| ------------------------ | ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **NZ Drug Foundation**   | `drugfoundation.org.nz`, `thelevel.org.nz` | `"NZ Drug Foundation"`, `"The Level"` (`"Straight up drug info"`)                            |
| **KnowYourStuffNZ**      | `knowyourstuff.nz`                         | `"KnowYourStuffNZ"`, `"Testing Report"` (e.g. `"2024-25 Testing Report"`) — drug checking    |
| **NZ Needle Exchange**   | `nznep.org.nz`                             | `"New Zealand Needle Exchange Programme"` / NZNEP (**not** `nzneedle.org.nz`, which is dead) |
| **NZ drug-checking law** | `legislation.govt.nz`                      | `"Drug and Substance Checking Legislation Act 2021"`                                         |

---

## 🗣️ Stigma, Language & Movement History

The specificity move for the stigma/history domain is to name the actual **language guide** and the
actual **historical event/person** — peer-authored guides and the founding facts of the drug-user
movement, not a generic `"stigma" "drug use"` search.

**Named language & anti-stigma guides (peer- and sector-authored):**

| Guide                              | `site:` target                  | Named signals                                                                                                                                |
| ---------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **NADA + NUAA "Language Matters"** | `nada.org.au`                   | `"Language Matters"` (peer/sector guide; PDF `language_matters_-_online_-_final.pdf`) — NSW Health promotes it but didn't author its own     |
| **INPUD/ANPUD "Words Matter!"**    | `inpud.net`                     | `"Words Matter"` / `"Language Statement"` (2022; PDF `Words-Matter-Language-Guide-1.pdf`) — global peer guide                                |
| **AIVL** (anti-discrimination)     | `aivl.org.au`                   | `"Why wouldn't I discriminate against all of them"` (2024 stigma & discrimination report), `"language matters"` resource                     |
| **ADF "the Power of Words"**       | `adf.org.au`, `cdn.adf.org.au`  | `"Power of Words"` (`"Having alcohol and other drug conversations"`; co-produced w/ SHARC/APSU, HRVic, Penington; PDFs on the `cdn.` host)   |
| **Mindframe (AOD)**                | `mindframe.org.au`              | `"Mindframe for Alcohol and Other Drugs"` (Everymind; media-reporting guidelines; PDF on `mindframemedia.imgix.net`)                         |
| **NMHC stigma strategy** ⚠         | `mentalhealthcommission.gov.au` | `"National Stigma and Discrimination Reduction Strategy"` — **mental-health-focused** (draft 2023); does _not_ cover AOD as a primary domain |

> **Don't quote these:** `#stigmakills` / `"Make Stigma History"` are **not** real AU AOD campaigns
> (the verified ones — `#StigmaPledge`, `StigmaWatch` — are mental-health). QNADA has no named
> language _guide_ (only the `"addictionary"` commentary article) — point QLD users to Language
> Matters / Power of Words instead.

**AU harm-reduction & drug-user-movement history (quote the named event/person/report):**

| Anchor                        | `site:` target                                | Named signals                                                                                                                                                         |
| ----------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Policy origin (1985)**      | `health.gov.au`, `ndarc.med.unsw.edu.au`      | `"National Campaign Against Drug Abuse"` / `"NCADA"` (origin of `"harm minimisation"`); NDARC `"The National Drug Strategy: The First 10 Years and Beyond"` (Mono.27) |
| **First NSP (1986)**          | `adf.org.au`, `harmreductionaustralia.org.au` | `"Alex Wodak"` + `"St Vincent's"` Darlinghurst (illegal pilot Nov 1986; NSW adopted 1987)                                                                             |
| **Methadone (1969)**          | `nceta.flinders.edu.au`                       | `"Stella Dalton"` (first documented AU methadone, Sydney 1969); NCETA `"Opioid Agonist Therapy in Australia: A History"`                                              |
| **MSIC (2001)**               | `uniting.org`                                 | `"Medically Supervised Injecting Centre"` + `"1999"` `"Drug Summit"` (opened 6 May 2001, Kings Cross — see Supervised Consumption)                                    |
| **Drug-user orgs (founding)** | `nuaa.org.au`, `hrvic.org.au`                 | NUAA `"NSW Users and AIDS Association"` (1989); `"VIVAIDS"` → Harm Reduction Victoria (1987); AIVL `"formed in the late 1980s"` (no precise year — don't assert)      |
| **NSP value (named eval)**    | `health.gov.au`                               | `"Return on Investment in Needle and Syringe Programs in Australia"` (Health Outcomes International / NCHECR, 2002)                                                   |

**Insider vocabulary:** the term shift itself is the history — `"addict"` / `"drug abuser"` /
`"IVDU"` / `"substance abuser"` (legacy; use date ranges to find old docs) →
`"people who use drugs"` / `"PWUD"` / `"PWID"` / `"person with lived experience"` (current).
`"harm minimisation"` (the official AU policy term — note the AU spelling, vs international
`"harm reduction"`), `"people-first language"`, `"structural stigma"` / `"self-stigma"` /
`"internalised stigma"`, `"nothing about us without us"`. Searching the legacy term surfaces the
era's documents; searching the current term surfaces who's reframing them.

---

## 🕰️ Web Archives & Temporal Search

Finding moved, deleted, or historical content is a _platform_ skill — name the archive, and know
which techniques still work.

> **⚠ Dead technique:** Google's **`cache:`** operator is gone (cached links removed Jan 2024;
> operator fully retired Sept 2024). **Do not recommend `cache:`.** To recover a deleted/cached page
> now: (1) Wayback `https://web.archive.org/web/*/<URL>`; (2) the Availability API
> `https://archive.org/wayback/available?url=<URL>`; (3) `https://archive.ph/newest/<URL>`; (4) for
> `.au` sites, Trove's Australian Web Archive.

| Archive / tool                        | `site:` target / endpoint                   | How to use                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Wayback Machine**                   | `web.archive.org`                           | `site:web.archive.org/web/*/example.com` lists captures; `web.archive.org/save/<URL>` = Save Page Now; `archive.org/wayback/available?url=` = JSON API       |
| **Trove — Australian Web Archive**    | `trove.nla.gov.au`                          | `trove.nla.gov.au/search/category/websites` — the **AWA** combines PANDORA + AGWA + `.au` harvests (unified March 2019); best for `.au` pages Wayback missed |
| **PANDORA**                           | `pandora.nla.gov.au`                        | NLA's _selective_ archive (since 1996; themes/events) — a component of the AWA                                                                               |
| **Australian Government Web Archive** | `webarchive.nla.gov.au`                     | bulk harvest of Commonwealth Government sites (AGWA) — finds removed `.gov.au` pages                                                                         |
| **archive.today**                     | `archive.today`, `archive.ph`, `archive.is` | `archive.ph/newest/<URL>` (latest), `archive.ph/<URL>` (all snapshots) — secondary to Wayback (governance caveats; Wikipedia blacklisted it Feb 2026)        |
| **Common Crawl**                      | `commoncrawl.org`                           | bulk URL/index discovery (WARC, CDXJ) — pair with Wayback for actual replay                                                                                  |
| **LOC / UK Web Archive**              | `webarchive.loc.gov`, `webarchive.org.uk`   | US / UK thematic collections (low AU relevance)                                                                                                              |

**Insider vocabulary:** `after:` / `before:` (Google index date, **not** publication date),
`YYYY..YYYY` (number-range, matches years _mentioned_), `"snapshot"` / `"capture"`,
`"Save Page Now"`, `"link rot"`, `"superseded"` / `"archived"` / `"historical"` (gov pages
self-label this). For policy-evolution work, pair an exact document title with the year iterations
(`"National Drug Strategy" (2010 OR 2017 OR 2017-2026)`).

---

## 🏢 Organisational Intelligence & Registers

The behind-the-scenes layer (governance, funding, structure). The specificity win is to name the
actual **register** and the actual **document type** instead of `site:*.gov.au "annual report"`.

| Register / source              | `site:` target                      | Named signals                                                                                                                                                              |
| ------------------------------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ACNC Charity Register**      | `acnc.gov.au`                       | `"Annual Information Statement"` / `"AIS"` (charities must lodge this even when they publish no "annual report"); `"Charity Register"`                                     |
| **ABN Lookup**                 | `abr.business.gov.au`               | `"Australian Business Number"` / `"ABN"`; DGR check at `abr.business.gov.au/Tools/DgrListing`                                                                              |
| **GrantConnect**               | `grants.gov.au`                     | `"Grant Award"` / `"GA"` notices (`grants.gov.au/ga/list`) — Commonwealth grants since Dec 2017                                                                            |
| **AusTender**                  | `tenders.gov.au`                    | `"Contract Notice"` / `"CN"` (`tenders.gov.au/cn/search`; IDs like `CN4138154`) — awarded contracts ≥ $10k                                                                 |
| **Community Grants Hub**       | `communitygrants.gov.au`            | `"Community Grants Hub"`, `"grant opportunity guidelines"` (program admin; award data is on GrantConnect)                                                                  |
| **Reconciliation Action Plan** | `reconciliation.org.au`             | `"Reconciliation Action Plan"` / `"RAP"` (`"Reflect"` / `"Innovate"` / `"Stretch"` / `"Elevate"`) — orgs also publish RAP PDFs on their own sites                          |
| **DGR status** (ATO)           | `ato.gov.au`, `abr.business.gov.au` | `"deductible gift recipient"` / `"DGR"` — funding-eligibility signal                                                                                                       |
| **PHN Activity Work Plans**    | (per-PHN domains)                   | `"Activity Work Plan"` / `"Drug and Alcohol Treatment Services Activity Work Plan"` + `"Health Needs Assessment"` (no national register — `filetype:pdf` across PHN sites) |
| **Report on Gov Services**     | `pc.gov.au`                         | `"Report on Government Services"` / `"RoGS"` (cross-sector; for AOD-specific data prefer AIHW)                                                                             |

**Insider vocabulary:** `"Annual Information Statement"` (the load-bearing term — beats "annual
report" for charities), `"Grant Award"` / `"GA"` and `"Contract Notice"` / `"CN"` (the published
award genres), `"funding agreement"` / `"deliverables"` / `"KPI"`, `"commissioning"` /
`"needs assessment"` (PHN model), `"strategic plan"` / `"corporate plan"` / `"constitution"` /
`"terms of reference"`, `"memorandum of understanding"` / `"MOU"`, `"expression of interest"` /
`"EOI"`. The registers carry the structured data; the org's own `site:` carries the PDFs.

---

## 📡 Discovery Platforms & File Types

The technique packs depend on _which platforms and operators actually work_. Lead with what's
**dead** so you stop wasting dorks on it, then the live platforms, the named media, and the named
datasets.

**⚠ Dead or changed — stop dorking these:**

| Thing                                       | Status                                                      | Use instead                                                                          |
| ------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Google `cache:` operator                    | retired 2024                                                | Wayback `web/*/` + `archive.org/wayback/available` + `archive.ph` (see Web Archives) |
| Google Podcasts (`podcasts.google.com`)     | shut 2024                                                   | `music.youtube.com` / `podcasts.apple.com` / `open.spotify.com`                      |
| Stitcher (`stitcher.com`)                   | shut Aug 2023                                               | `podcasts.apple.com` / `open.spotify.com`                                            |
| Glitch (`*.glitch.me`)                      | hosting ended Jul 2025                                      | `*.vercel.app` / `*.netlify.app` / `*.pages.dev` / `*.github.io`                     |
| `site:docs.google.com` / `drive.google.com` | only _Publish-to-web_ docs indexed (link-shared excluded)   | low-yield niche dork — prefer the org's own `site:`                                  |
| `site:canva.com`                            | design share-links not indexed (only published Canva Sites) | image search / the hosting org's site                                                |

**Multimedia platforms + named harm-reduction podcasts:**

| Platform / show                 | `site:` target                      | Note                                                                               |
| ------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| **YouTube**                     | `youtube.com`                       | video; `music.youtube.com` for podcast audio; `youtube.com/@handle` for a channel  |
| **Vimeo**                       | `vimeo.com`                         | org training / documentary content                                                 |
| **Apple Podcasts**              | `podcasts.apple.com`                | not legacy `itunes.apple.com`; country code in the path (`/au/`, `/ca/`)           |
| **Spotify**                     | `open.spotify.com/show`, `/episode` | not the `spotify.com` root                                                         |
| **SoundCloud / Pocket Casts**   | `soundcloud.com`, `pca.st`          | peer/grassroots audio; `pca.st` share links index better than `pocketcasts.com`    |
| **TED / TEDx**                  | `ted.com/talks`                     | + `site:youtube.com "TEDx"` for talks not on ted.com                               |
| **Crackdown** (CA) ✓            | `crackdownpod.com`                  | drug-user-led (Garth Mullins / VANDU) — the strongest named harm-reduction podcast |
| **Narcotica** (US) ✓            | `narcocast.com`                     | drug-policy/HR podcast (Moraff/Siegel/Farah) — **not** `narcotica.com`             |
| **Drug Science Podcast** (UK) ✓ | `drugscience.org.uk/podcast`        | Prof. David Nutt; evidence-based                                                   |

> **No confirmed AU drug-user-org podcast.** NUAA, HRVic, Penington and NDARC publish magazines/
> reports/webinars, not podcasts — don't quote a "NUAA podcast". For AU broadcast audio on drugs,
> triple j **Hack** (not _The Hook Up_, which is sex/relationships) is the better target; **Filter**
> (`filtermag.org`) is a magazine, not a podcast.

**Document & data platforms + Australian open-data:**

| Platform / portal           | `site:` target                          | Note                                                                                 |
| --------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| **data.gov.au**             | `data.gov.au`                           | CKAN portal — `filetype:csv` / `filetype:xlsx` (bot-blocks scrapers, but dorks work) |
| **AIHW data**               | `aihw.gov.au`                           | report `"Data tables"` as `filetype:xlsx` (AODTS NMDS, NDSHS)                        |
| **ABS**                     | `abs.gov.au`                            | Data Explorer exports `filetype:xlsx` / `filetype:csv`                               |
| **Scribd / SlideShare**     | `scribd.com`, `slideshare.net`          | conference decks / shared docs (SlideShare now a Scribd property; often gated)       |
| **ISSUU / Calameo / Yumpu** | `issuu.com`, `calameo.com`, `yumpu.com` | flipbook republishing — zines, newsletters, org reports                              |
| **DocumentCloud**           | `documentcloud.org`                     | FOI / primary-source documents (MuckRock) — high value for accountability work       |
| **Speaker Deck / Prezi**    | `speakerdeck.com`, `prezi.com`          | slide decks                                                                          |

**Named datasets for `filetype:` dorks:** `"AODTS NMDS"` /
`"Alcohol and Other Drug Treatment Services National Minimum Data Set"` and `"NDSHS"` /
`"National Drug Strategy Household Survey"` (AIHW data tables, `filetype:xlsx`);
`"Australian Needle and Syringe Program Survey"` / `ANSPS` (Kirby Institute, `kirby.unsw.edu.au`).
`filetype:` (and `ext:`) work for `xlsx`/`csv`/`pptx`/`docx` /`pdf` — always pair with `site:` for
precision.

**User-hosted / community / Jamstack platforms (currency-checked 2026):**

| Type                  | `site:` targets                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blogs / newsletters   | `medium.com`, `*.substack.com`, `*.wordpress.com`, `*.tumblr.com`, `*.ghost.io`, `bearblog.dev`, `telegra.ph` (flat path, not a subdomain)                  |
| Docs / knowledge      | `*.notion.site`, `*.gitbook.io`, `*.readthedocs.io` (+ `*.readthedocs-hosted.com` for the Business tier)                                                    |
| Bio-link / support    | `linktr.ee`, `carrd.co`, `ko-fi.com`, `patreon.com`, `beacons.ai`                                                                                           |
| Resource boards       | `padlet.com`, `wakelet.com`                                                                                                                                 |
| Jamstack / app hosts  | `*.vercel.app`, `*.netlify.app`, `*.pages.dev`, `*.web.app` (+ `*.firebaseapp.com`), `*.replit.app` (deployments — **not** `replit.dev`), `*.streamlit.app` |
| Dev / data / research | `github.com`, `*.github.io`, `kaggle.com`, `huggingface.co` (+ `*.hf.space`), `zenodo.org`, `osf.io`, `figshare.com`                                        |
| Forums                | `reddit.com` (`r/HarmReduction`, `r/Drugs` confirmed live), `quora.com`, Discourse footprint (`"Powered by Discourse"` + `inurl:/t/`)                       |

**Insider vocabulary:** `filetype:` / `ext:` (file-type filter), `inurl:` directory mining
(`/publications/`, `/uploads/`, `/assets/`, `/documents/`), `intitle:"index of"` (open directories),
`site:` subdomain sweep (catches all `*.substack.com` etc.), `"link rot"`, generator footprints
(`"Powered by Discourse"`, `inurl:/wp-content/`). For Reddit, prefer the confirmed subs + a
platform-level `site:reddit.com` + named-AU-service terms (CanTEST, DanceWize) over asserting an
unverified subreddit name.

---

## 🛠️ Maintaining This File

- Add an entity here **before** writing a dork that depends on it.
- When you confirm a `⚠ verify` item (domain resolves, title returns results), remove the flag and,
  ideally, note the date checked.
- Prefer **named series over generic keywords**: `"Drug Trends"` beats `report`; `"User's News"`
  beats `newsletter`; `"findings"` beats `document`.
- Keep the peer-first ordering: lived-experience and drug-user-org sources lead each section.

---

## 🔗 Related Resources

- [Organisations Directory](organizations.md) — URLs and focus areas
- [Synonym Blocks](../05-synonym-blocks.md) — reusable OR term groups
- [Domain Map](../04-domain-map.md) — which domains host which content
- [Australian OSINT Resources](australian-osint.md) — registers and investigative sources

---

[← Back to Resources](../tools/README.md) | [← Main Guide](../README.md)
