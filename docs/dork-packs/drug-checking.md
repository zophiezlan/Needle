# Drug Checking & Pill Testing

> Find the evidence, evaluations, sample data, and operating models behind real drug checking
> services — named by service, not just by keyword.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Australia says **"pill testing"** in public and on the news; the services and their evaluations
increasingly say **"drug checking"**. Search both, but know the difference: the lay term surfaces
media and opinion, the sector term surfaces the documents written _by_ the field.

This pack names the actual services — **CanTEST** (ACT), **CheQpoint** (QLD), **Pill Testing
Australia**, **The Loop Australia** — and their real publications. If you only remember one query
from here, make it the one that finds the **CanTEST evaluation** (below): it's the single most-cited
piece of Australian drug-checking evidence.

> **Entity reference:** every named service, domain, and report title below is catalogued in
> [Source Intelligence → Drug Checking](../resources/source-intelligence.md#drug-checking-pill-testing).

---

## ⚡ Quick Start

Find the ANU-led evaluation of Australia's first fixed-site service:

```txt
"CanTEST Health and Drug Checking Service Program Evaluation" filetype:pdf
```

---

## 🟢 Basic Queries

### The Service Itself (CanTEST)

```txt
site:cantest.com.au (results OR alert OR "drug checking")
```

**Why this works:**

- Goes straight to the service rather than guessing at `.gov.au` wildcards
- CanTEST publishes its own results and substance alerts on-site

### CanTEST Evaluation Reports

```txt
(site:directionshealth.com OR site:anu.edu.au) "CanTEST" evaluation filetype:pdf
```

**Why this works:**

- CanTEST is operated by **Directions Health** (with Pill Testing Australia + CAHMA) and evaluated
  by the **ANU** — the Interim and Final Reports (2023) live on those two domains, not a generic
  government site

### CheQpoint (Queensland)

```txt
(site:quihn.org OR site:theloop.org.au) "CheQpoint"
```

> Note: CheQpoint closed in April 2025 under a change in Queensland policy. Its published material
> and media remain indexed — frame results as the record of QLD's fixed-site trial, not a current
> "go here".

### Pill Testing Australia

```txt
site:pilltestingaustralia.com.au ("Festival Drug Checking Services" OR "Groovin the Moo" OR report)
```

---

## 🟡 Intermediate Queries

### Government & Peak-Body Evidence

```txt
("drug checking" OR "pill testing") site:*.gov.au filetype:pdf (trial OR evaluation OR "operating model")
```

### State Trials & Announcements

```txt
("drug checking" OR "pill testing") ("New South Wales" OR Victoria OR Queensland OR ACT) (trial OR pilot OR announcement) -site:news.com.au
```

### Festival & Event Context

```txt
("drug checking" OR "pill testing") (festival OR "music event") ("Groovin the Moo" OR "Lost Paradise" OR "Beyond the Valley") (evaluation OR report)
```

### DanceWize & Peer Drug-Checking Programs

```txt
(DanceWize OR "DanceWize NSW") ("drug checking" OR "drug information" OR "peer support")
```

**Why this works:**

- DanceWize (HRVic) and DanceWize NSW (NUAA) are the peer programs that sit alongside checking —
  searching them finds the lived-experience and peer-education side, not just the lab side

---

## 🔴 Advanced Queries

### Comprehensive Australian Evidence Sweep

```txt
("CanTEST" OR "CheQpoint" OR "Pill Testing Australia" OR "drug checking") (evaluation OR pilot OR outcomes OR "substances detected") (Australia OR NSW OR VIC OR QLD OR ACT) filetype:pdf after:2018
```

### Implementation, Governance & Operating Models

```txt
"drug checking" (implementation OR governance OR "operating model" OR protocol OR "standard operating") (Australia OR ACT OR Queensland) filetype:pdf
```

### Parliamentary Submissions & Inquiries

```txt
site:*.gov.au inurl:submission ("drug checking" OR "pill testing") filetype:pdf
```

### Coronial & Inquiry Drivers

```txt
("drug checking" OR "pill testing") ("coronial" OR "inquest" OR "Festival" OR "music festival deaths") (recommendation OR finding) Australia
```

**Why this works:**

- Australian pill-testing policy moves in response to coronial findings and festival-death inquiries
  — tying the search to those drivers finds the documents that actually shifted policy

---

## 🔬 Technology & Analysis Methods

The method tells you how much to trust a result. These names are how analysts and evaluations
describe their kit.

### FTIR (Fourier-Transform Infrared)

```txt
FTIR ("drug checking" OR "pill testing") (accuracy OR limitation OR "false negative" OR comparison) filetype:pdf
```

### Reagent Testing

```txt
("reagent testing" OR Marquis OR Mecke OR Mandelin) ("drug checking" OR "harm reduction") (accuracy OR limitation)
```

### Spectrometry & Chromatography

```txt
("mass spectrometry" OR GC-MS OR HPLC) "drug checking" (method OR validation OR confirmation)
```

**Why this works:**

- Fixed sites (CanTEST, Saferparty, CheckIt!) run lab-grade GC-MS/HPLC; festival tents often run
  FTIR plus reagents — naming the technique filters to the appropriate evidence and its limits

---

## 🌏 International Services & Sample Data

Australia is small; the international services are where decades of method, data, and operating
knowledge live. These are real, named services — not generic "overseas examples".

### WEDINOS (Wales) — Sample Data & PHILTRE

```txt
(site:wedinos.wales OR site:wedinos.org) ("sample results" OR "WEDINOS") OR (site:publichealthwales.nhs.wales "PHILTRE")
```

### The Loop (UK)

```txt
site:wearetheloop.org (report OR "back of house" OR "drug checking")
```

### European Network (TEDI) & Founders

```txt
("Trans European Drug Information" OR TEDI OR "Energy Control") "drug checking" (data OR results OR network) filetype:pdf
```

### Continental Fixed Sites (Substance Warnings)

```txt
(site:saferparty.ch OR site:checkit.wien) (Substanzwarnung OR warning OR "drug checking")
```

### DrugsData & DanceSafe (US)

```txt
(site:drugsdata.org OR site:dancesafe.org) (results OR reagent OR "lab tested")
```

### EU Drugs Agency (EUDA/EMCDDA)

```txt
(site:euda.europa.eu OR site:emcdda.europa.eu) "drug checking" (Trendspotter OR report)
```

---

## 💬 Peer & Lived-Experience Perspectives

Checking is a health _and_ a peer intervention. This is the side that an evaluation spreadsheet
misses — and the side a peer-built resource should lead with.

### Client & Consumer Experience

```txt
"drug checking" ("client experience" OR "consumer feedback" OR "in their own words" OR "would not use") Australia
```

### Peer Worker & Volunteer Knowledge

```txt
("drug checking" OR "pill testing") ("peer worker" OR volunteer OR "harm reduction worker") (reflection OR experience OR training)
```

### Community Discussion & Real-Time Reports

```txt
(site:reddit.com/r/AusDrugs OR site:bluelight.org) ("pill testing" OR "drug checking" OR CanTEST)
```

**Why this works:**

- Forums carry the in-the-moment "I got it checked and…" knowledge that never reaches a PDF —
  cross-check against service data, but don't ignore it

---

## 📊 Data & Results

### Substances Detected & Alerts

```txt
("CanTEST" OR "drug checking") ("substances detected" OR "substance of concern" OR "not as expected" OR alert) Australia
```

### Published Result Sets

```txt
("drug checking" OR "pill testing") (results OR dataset OR "samples tested") (filetype:pdf OR filetype:csv OR filetype:xlsx)
```

### NDARC Service Profiles

```txt
site:ndarc.med.unsw.edu.au "drug checking" (profile OR review OR "international") filetype:pdf
```

---

## 🏛️ Policy & Advocacy

### Parliamentary Inquiries

```txt
site:aph.gov.au ("pill testing" OR "drug checking") (inquiry OR submission)
```

### Peak Body Positions

```txt
(site:atoda.org.au OR site:nada.org.au OR site:vaada.org.au OR site:qnada.org.au) ("drug checking" OR "pill testing") (position OR statement OR submission)
```

### Peer-Body Advocacy

```txt
(site:nuaa.org.au OR site:hrvic.org.au OR site:cahma.org.au OR site:quivaa.org.au) ("pill testing" OR "drug checking") (submission OR position OR campaign)
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Drug Checking entities](../resources/source-intelligence.md#drug-checking-pill-testing) — the
  named services, domains, and report titles every dork above is built on
- **Synonym Block:** [Drug Checking Terms](../05-synonym-blocks.md#drug-checking-terms)
- **Related Packs:** [Festivals](festivals.md), [Novel Substances](novel-substances.md),
  [Drug Alerts](drug-alerts.md)
- **Key Services:** [CanTEST](https://cantest.com.au), [WEDINOS](https://wedinos.org),
  [DanceSafe](https://dancesafe.org)

---

[← Back to Dork Packs](README.md)
