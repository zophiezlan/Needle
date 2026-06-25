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

| Org                     | `site:` target                  | Named signals (search in quotes)                                                        | Notes                                                    |
| ----------------------- | ------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **NUAA**                | `nuaa.org.au`                   | `"User's News"`, `"DanceWize NSW"`, `"NSP"`, `"peer line"`                              | NSW peak; magazine is the flagship named series          |
| **AIVL**                | `aivl.org.au`                   | `"submission"`, `"position statement"`, newsletter ⚠ verify name                        | National peak body for drug-user orgs                    |
| **HRVic**               | `hrvic.org.au`                  | `"DanceWize"`, `"peer education"`                                                       | Runs DanceWize (VIC festival peer program)               |
| **CAHMA**               | `cahma.org.au`                  | `"CanTEST"`, `"peer"`                                                                   | Canberra; partner in the CanTEST service                 |
| **QuIHN**               | `quihn.org`                     | `"QuIVAA"` ⚠ verify, `"NSP"`, `"peer"`                                                  | Queensland Injectors Health Network                      |
| **WASUA**               | `wasua.com.au`                  | `"peer"`, `"NSP"`                                                                       | WA Substance Users Association                           |
| **CAHMA / Directions**  | `directionshealth.com` ⚠ verify | `"CanTEST"`                                                                             | Co-operates the ACT fixed-site checking service          |
| **Penington Institute** | `penington.org.au`              | `"Annual Overdose Report"`, `"International Overdose Awareness Day"`, `"CPOP"` ⚠ verify | Overdose data + advocacy; not peer-led but peer-adjacent |

**International peer / drug-user networks:**

| Org                       | `site:` target                     | Named signals                                          |
| ------------------------- | ---------------------------------- | ------------------------------------------------------ |
| **INPUD**                 | `inpud.net`                        | `"Words Matter"`, `"drug user peace"`, position papers |
| **EuroNPUD**              | `euronpud.net` ⚠ verify            | peer-produced harm reduction guides                    |
| **VANDU**                 | `vandu.org`                        | peer overdose response, Vancouver                      |
| **CAPUD**                 | `capud.ca`                         | Canadian drug-user union submissions                   |
| **Urban Survivors Union** | `urbansurvivorsunion.org` ⚠ verify | US drug-user union; `"Urban Survivors Union"`          |

**Insider vocabulary (cross-cutting):** `"people who use drugs"` / `PWUD` / `PWID` (not "addicts"),
`"lived and living experience"` / `"LLE"`, `"nothing about us without us"`, `"peer-led"` /
`"user-led"`, `"experts by experience"`, `"consumer representative"`.

---

## 🔬 Drug Checking & Pill Testing

The single biggest specificity gap in the current pack: it never names the actual Australian
services. Fix that first.

| Entity                         | `site:` target                         | Named signals                                                                |
| ------------------------------ | -------------------------------------- | ---------------------------------------------------------------------------- |
| **CanTEST**                    | `cantest.org.au` ⚠ verify              | `"CanTEST"`, `"Health and Drug Checking Service"`, `"six-month report"`      |
| **Pill Testing Australia**     | `pilltestingaustralia.com.au` ⚠ verify | `"Pill Testing Australia"`, `"Groovin the Moo"`                              |
| **CheQpoint / QuIHN** ⚠ verify | `quihn.org`                            | QLD fixed-site checking — confirm current service name                       |
| **The Loop** (UK)              | `wearetheloop.org`                     | `"The Loop"`, `"back of house"`, `"front of house"` testing model            |
| **WEDINOS** (Wales)            | `wedinos.org`                          | `"WEDINOS"`, `"Philtre"` (newsletter), `"sample results"`, downloadable data |
| **DanceSafe** (US)             | `dancesafe.org`                        | `"DanceSafe"`, reagent kits, `"lab testing"`                                 |
| **EUDA / EMCDDA**              | `euda.europa.eu`, `emcdda.europa.eu`   | `"drug checking"`, `"Trendspotter"`                                          |

**Insider vocabulary:** `FTIR` (Fourier-transform infrared), `"reagent testing"`, `"mass spec"` /
`GC-MS`, `"fixed-site"` vs `"festival"` / `"event-based"`, `"front of house"` / `"back of house"`,
`"the result service"`, `"substance of concern"`, `"expected vs actual"`. Note the term shift:
Australia says **"pill testing"** publicly but services and evaluations increasingly use **"drug
checking"** — search both.

---

## 🚨 Drug Alerts & Early Warning Systems (EWS)

Experts know alerts come from specific state systems, not generic web pages.

| Source                                       | `site:` target      | Named signals                                                        |
| -------------------------------------------- | ------------------- | -------------------------------------------------------------------- |
| **NSW Health alerts**                        | `health.nsw.gov.au` | `"Drug Warning"`, `"NSW Health"` + `inurl:drug-alerts` ⚠ verify path |
| **VIC EWS / DH**                             | `health.vic.gov.au` | `"drug alert"`, `"drug advisory"`, `"SafeScript"` (separate RTPM)    |
| **ACT Health**                               | `health.act.gov.au` | `"drug alert"`, `"CanTEST"` alerts                                   |
| **QLD Health**                               | `health.qld.gov.au` | `"drug alert"`, `"public health alert"`                              |
| **TGA**                                      | `tga.gov.au`        | `"safety alert"`, `"medicine shortage"`, `"recall"`                  |
| **WEDINOS** (Wales)                          | `wedinos.org`       | `"Philtre"`, batch sample alerts                                     |
| **EUDA EWS**                                 | `euda.europa.eu`    | `"Early Warning System"`, `"EU-EWS"`, `"risk communication"`         |
| **Drug Checking subreddits / harm-red orgs** | `reddit.com`        | `"drug alert"` `"batch"` — community-relayed alerts (cross-check)    |

**Insider vocabulary:** `EWS` / `"early warning"`, `"unexpected substance"`, `"high-dose"` /
`"high-potency"`, `"contaminated supply"`, `"adulterant"`, `"batch"`, `"red alert"`, `nitazene`,
`"no naloxone-responsive"` framing for non-opioids.

---

## 💉 Overdose, Naloxone & Take-Home Naloxone (THN)

| Entity                                    | `site:` target     | Named signals                                                                  |
| ----------------------------------------- | ------------------ | ------------------------------------------------------------------------------ |
| **Take Home Naloxone Program** (national) | `health.gov.au`    | `"Take Home Naloxone"`, `"THN program"`, `"pharmacy"` supply                   |
| **Penington Institute**                   | `penington.org.au` | `"Annual Overdose Report"`, `"CPOP"` ⚠ verify                                  |
| **Int'l Overdose Awareness Day**          | `overdoseday.com`  | `"International Overdose Awareness Day"`, `"IOAD"`, `"Remember. Take Action."` |
| **NUAA / state peer orgs**                | `nuaa.org.au`      | peer naloxone training, `"overdose response"`                                  |
| **Product names**                         | —                  | `Nyxoid` (nasal), `Prenoxad` (injectable), `Narcan` (US/intl)                  |
| **Prevent. Overdose (US ref)**            | `cdc.gov`          | `"naloxone saturation"`, `"opioid overdose"`                                   |

**Insider vocabulary:** `THN`, `"opioid agonist"` vs `"antagonist"`, `"overdose reversal"`,
`"witnessed overdose"`, `"bystander"`, `"recovery position"`, `"call don't run"` / Good Samaritan,
`"poly-drug"`, `"breakthrough overdose"` (re: nitazenes needing repeat doses).

---

## 🏥 Supervised Consumption & NSP

Name the two Australian services — there are only two, and an expert knows both.

| Service                                | `site:` target         | Named signals                                                                      |
| -------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------- |
| **Uniting MSIC** (Sydney, Kings Cross) | `uniting.org`          | `"Medically Supervised Injecting Centre"`, `"MSIC"`, `"Kings Cross"`               |
| **North Richmond MSIR** (VIC)          | `nrch.com.au` ⚠ verify | `"Medically Supervised Injecting Room"`, `"MSIR"`, `"North Richmond"`, Ryan review |
| **NSP surveillance**                   | `kirby.unsw.edu.au`    | `"Australian Needle Syringe Program Survey"`, `"ANSPS"`                            |
| **Insite** (Vancouver, intl ref)       | `vch.ca` ⚠ verify      | `"Insite"`, `"supervised injection"`, `"OPS"`                                      |

**Insider vocabulary:** `DCR` (drug consumption room), `SIF` / `SIS` (supervised injecting
facility/site), `OPS` (overdose prevention site), `MSIC` / `MSIR`, `"injecting-related injuries"`,
`"sharps"`, `"safe disposal"`, `"low-threshold"`, `"primary NSP"` vs `"secondary NSP"` vs
`"vending machine"` / `"dispensing machine"`.

---

## ⚖️ Coroners, Inquests & Death Data

| Source                    | `site:` target                                                   | Named signals                                                   |
| ------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------- |
| **NCIS**                  | `ncis.org.au`                                                    | `"National Coronial Information System"`, `"NCIS"`, fact sheets |
| **Coroners Court VIC**    | `coronerscourt.vic.gov.au`                                       | `"Coroners Prevention Unit"`, `"finding"`, `"recommendation"`   |
| **Coroners Court NSW**    | `coroners.nsw.gov.au`                                            | `"findings"`, `"inquest"`, `"recommendation"`                   |
| **State coroners (each)** | `courts.qld.gov.au`, `courts.sa.gov.au`, etc. ⚠ verify per state | `"coronial findings"`                                           |
| **Penington Institute**   | `penington.org.au`                                               | `"Annual Overdose Report"` (aggregates coronial/ABS data)       |

**Insider vocabulary:** `"findings"` (the actual document genre — not "report"),
`"findings without inquest"`, `"prevention"` / `"prevention of future deaths"`, `"recommendation"` +
`"response"` (agencies must respond), `"manner of death"`, `"toxicology"`, `"polydrug toxicity"`.
The phrase `"coronial recommendation"` is good; pairing it with a named coroner or `"prevention"` is
better.

---

## 📊 Research, Data & Surveillance (AU)

The named datasets and cohort studies are the highest-value signals in the whole file — they're how
you find the actual numbers, and almost no non-specialist knows them.

| Producer             | `site:` target          | Named datasets / series (quote these)                                                                                               |
| -------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **NDARC**            | `ndarc.med.unsw.edu.au` | `"IDRS"` (Illicit Drug Reporting System), `"EDRS"` (Ecstasy & related Drugs Reporting System), `"Drug Trends"`, `"NSW Drug Trends"` |
| **AIHW**             | `aihw.gov.au`           | `"NDSHS"` / `"National Drug Strategy Household Survey"`, `"AODTS NMDS"`, `"Alcohol and other drug treatment services in Australia"` |
| **Kirby Institute**  | `kirby.unsw.edu.au`     | `"ANSPS"`, `"HIV, viral hepatitis and STIs in Australia"` annual surveillance                                                       |
| **Burnet Institute** | `burnet.edu.au`         | `"SuperMIX"` (Melbourne injecting cohort), `"EC Australia"`, hep C elimination                                                      |
| **NDRI** (Curtin)    | `ndri.curtin.edu.au`    | `"National Drug Research Institute"`, trends bulletins                                                                              |
| **APO**              | `apo.org.au`            | grey-literature repository — `"harm reduction"` reports, submissions                                                                |
| **Named cohorts**    | (cross-site)            | `"SuperMIX"`, `"MIX"`, `"HITS"`, `"ETHOS"`, `"ATLAS"` ⚠ verify each scope                                                           |

**Insider vocabulary:** `"sentinel"` sample, `"point prevalence"`, `"NMDS"` (national minimum
dataset), `"closed treatment episode"`, `"seroprevalence"`, `"incidence"` vs `"prevalence"`,
`"cascade"` (of care), `"reach"` / `"coverage"` (NSP), `"wastewater analysis"` (ACWA program ⚠
verify name).

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

## 🌏 International Reference Bodies (for the "strong international" layer)

| Body                             | `site:` target                       | Named signals                                                                  |
| -------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------ |
| **EUDA** (ex-EMCDDA)             | `euda.europa.eu`, `emcdda.europa.eu` | `"European Drug Report"`, `"Early Warning System"`, `"Trendspotter"`, `"EDND"` |
| **Harm Reduction International** | `hri.global`                         | `"Global State of Harm Reduction"` (flagship biennial report)                  |
| **UNODC**                        | `unodc.org`                          | `"World Drug Report"`, `"Early Warning Advisory"` (NPS)                        |
| **WHO**                          | `who.int`                            | `"consolidated guidelines"`, `"key populations"`, harm reduction               |
| **Crew / Scotland**              | `crew.scot` ⚠ verify                 | peer drug info, Scottish drug-checking                                         |
| **Release** (UK)                 | `release.org.uk`                     | `"drugs and the law"`, legal helpline resources                                |
| **NSWP** (sex work)              | `nswp.org`                           | `"Global Network of Sex Work Projects"`, briefing papers                       |

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
