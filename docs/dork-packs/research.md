# Research & Academic Evidence

> Find high-quality research, systematic reviews, and grey literature — named by research centre,
> journal, and cohort, not just by keyword.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Australian AOD research is concentrated in a handful of named centres, and knowing them (and their
current domains) is most of the skill. **NDARC** runs Drug Trends; the **Kirby** and **Burnet**
institutes run the BBV cohorts; **NDRI** (Curtin) is a WHO Collaborating Centre; **Turning Point**
runs AODstats; **NCETA** does workforce; the **Centre for Social Research in Health (CSRH)** and the
**Matilda Centre** lead the social and mental-health-and-substance-use research. The flagship
journal is **_Drug and Alcohol Review_** (APSAD); systematic reviews live in **Cochrane**.

Peer knowledge is expert knowledge here too: weight **peer-led**, **participatory** and
**co-designed** research, not only the `.edu.au` PDF.

> **Entity reference:** every centre, cohort, and journal below is catalogued in
> [Source Intelligence → Research, Data & Surveillance](../resources/source-intelligence.md#research-data-surveillance-au).

---

## 📚 Academic Access Tools

> Research should be accessible. These tools help you reach scholarly content:

| Tool                 | URL                                                       | Description                                |
| -------------------- | --------------------------------------------------------- | ------------------------------------------ |
| **CORE**             | [core.ac.uk](https://core.ac.uk/)                         | 270M+ open access papers                   |
| **PubMed Central**   | [ncbi.nlm.nih.gov/pmc](https://www.ncbi.nlm.nih.gov/pmc/) | Free biomedical literature                 |
| **Semantic Scholar** | [semanticscholar.org](https://www.semanticscholar.org/)   | AI-powered academic search                 |
| **Unpaywall**        | [unpaywall.org](https://unpaywall.org)                    | Browser extension, finds free legal papers |

See [Academic Access](../resources/academic-access.md) for the full list.

---

## ⚡ Quick Start

Find recent Australian harm-reduction evidence from the main research centre:

```txt
(site:unsw.edu.au OR site:ndarc.med.unsw.edu.au) "harm reduction" (evaluation OR effectiveness) filetype:pdf after:2022
```

---

## 🟢 Basic Queries

### NDARC (Drug Trends & Harm Reduction)

```txt
(site:unsw.edu.au OR site:ndarc.med.unsw.edu.au) ("harm reduction" OR "Drug Trends" OR "drug checking" OR overdose) filetype:pdf
```

**Why this works:**

- NDARC migrated onto the main UNSW domain, so search both `unsw.edu.au` and the legacy
  `ndarc.med.unsw.edu.au` (old project URLs 301-redirect; PDFs persist on both)

### Kirby & Burnet (BBV / Injecting Cohorts)

```txt
(site:kirby.unsw.edu.au OR site:burnet.edu.au) ("injecting drug use" OR "hepatitis C" OR "needle syringe" OR SuperMIX)
```

### Quality Filter (Systematic Reviews)

```txt
(intitle:"systematic review" OR intitle:"meta-analysis") ("harm reduction" OR "needle syringe" OR naloxone OR "opioid agonist")
```

---

## 🟡 Intermediate Queries

### All Major Centres (Comprehensive)

```txt
(site:unsw.edu.au OR site:burnet.edu.au OR site:turningpoint.org.au OR site:nceta.flinders.edu.au OR site:ndri.curtin.edu.au) "harm reduction" filetype:pdf
```

**Why this works:**

- One query across the real centre domains (note Turning Point has _no hyphen_:
  `turningpoint.org.au`) beats a generic `*.edu.au` sweep

### Drug and Alcohol Review (the Journal)

```txt
site:onlinelibrary.wiley.com "Drug and Alcohol Review" ("harm reduction" OR "drug checking" OR naloxone)
```

### Recent High-Quality Evidence

```txt
(intitle:"systematic review" OR intitle:"meta-analysis") "harm reduction" after:2020 filetype:pdf -site:researchgate.net -site:academia.edu
```

### Grey Literature (APO)

```txt
site:apo.org.au ("harm reduction" OR "drug policy" OR "needle syringe" OR overdose)
```

---

## 🔴 Advanced Queries

### Comprehensive Evidence Sweep

```txt
(site:*.edu.au OR site:cochranelibrary.com) ("harm reduction" OR "drug checking" OR "needle syringe" OR naloxone) (evaluation OR effectiveness OR "systematic review" OR "meta-analysis") after:2020 -site:researchgate.net -site:academia.edu
```

### Named Cohort Studies

```txt
("SuperMIX" OR "ETHOS Engage" OR "HITS-c" OR "HITS-p") ("people who inject drugs" OR PWID OR "hepatitis C") filetype:pdf
```

### Conference Evidence (APSAD)

```txt
(site:apsad.org.au OR "APSAD") (conference OR abstract OR proceedings) ("harm reduction" OR "drug checking")
```

---

## 🏛️ Key Research Centres

The named centres and their _current_ domains (several recently changed).

### NDARC — National Drug & Alcohol Research Centre

```txt
(site:unsw.edu.au inurl:ndarc OR site:ndarc.med.unsw.edu.au) [YOUR TOPIC]
```

### NDRI — National Drug Research Institute (Curtin)

```txt
site:ndri.curtin.edu.au "National Drug Research Institute" [YOUR TOPIC]
```

### Turning Point

```txt
site:turningpoint.org.au ("harm reduction" OR research OR AODstats)
```

### NCETA — Workforce Development (Flinders)

```txt
site:nceta.flinders.edu.au "workforce development"
```

### CSRH — Centre for Social Research in Health (UNSW)

```txt
site:unsw.edu.au inurl:csrh "Centre for Social Research in Health"
```

### The Matilda Centre (University of Sydney)

```txt
site:sydney.edu.au/matilda-centre ("substance use" OR "mental health" OR comorbidity)
```

---

## 📈 Named Cohorts & Data Series

The named series are the highest-value signals — almost no non-specialist knows them.

### Drug Trends (IDRS / EDRS)

```txt
(site:unsw.edu.au OR site:ndarc.med.unsw.edu.au) ("Illicit Drug Reporting System" OR "Ecstasy and Related Drugs Reporting System" OR "Drug Trends")
```

### Injecting & Hepatitis C Cohorts

```txt
("SuperMIX" OR "ETHOS Engage" OR "HITS-c" OR "HITS-p") (cohort OR incidence OR "hepatitis C") filetype:pdf
```

> See [Data & Statistics](data-statistics.md) for the dataset-and-numbers side of these series.

---

## 📝 Study Types & Quality Filters

### Systematic Reviews & Meta-Analyses

```txt
(intitle:"systematic review" OR intitle:"meta-analysis") ("harm reduction" OR naloxone OR "needle syringe" OR "drug checking") filetype:pdf
```

### Randomised & Cohort Studies

```txt
(intitle:"randomised controlled trial" OR intitle:"cohort study") ("harm reduction" OR "substance use") Australia filetype:pdf
```

### Qualitative & Lived-Experience Research

```txt
intitle:"qualitative" ("harm reduction" OR "drug use" OR "lived experience") Australia filetype:pdf
```

### Theses & Working Papers

```txt
(thesis OR dissertation OR "working paper") ("harm reduction" OR "drug checking" OR "needle syringe") Australia filetype:pdf
```

---

## 💬 Peer-Led & Lived-Experience Research

Research _with_ people who use drugs, not only about them — often the most useful and most
overlooked.

### Peer-Led & Participatory Research

```txt
("peer-led research" OR "peer researcher" OR "participatory action research" OR "community-based participatory research") (drug use OR "harm reduction") Australia filetype:pdf
```

### Co-Design & Co-Production

```txt
("co-design" OR "co-production") ("people who use drugs" OR peer OR "lived experience") (harm reduction OR service) filetype:pdf
```

### Social Research (CSRH)

```txt
site:unsw.edu.au inurl:csrh ("stigma" OR "lived experience" OR "people who use drugs" OR qualitative)
```

---

## 🌏 International Research

### UK & Canada

```txt
(site:*.ac.uk OR site:*.ca) ("harm reduction" OR "supervised consumption" OR "safe supply") (evaluation OR evidence) filetype:pdf
```

### EUDA (Europe)

```txt
(site:euda.europa.eu OR site:emcdda.europa.eu) ("harm reduction" OR "drug checking" OR "European Drug Report")
```

### Cochrane Reviews

```txt
site:cochranelibrary.com inurl:cdsr ("harm reduction" OR naloxone OR "needle syringe" OR "opioid agonist")
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Research, Data & Surveillance entities](../resources/source-intelligence.md#research-data-surveillance-au)
  — the centres, cohorts, and journals every dork above is built on
- **Synonym Block:** [Research Terms](../05-synonym-blocks.md#research-terms)
- **Related Packs:** [Data & Statistics](data-statistics.md),
  [Policy & Advocacy](policy-advocacy.md)
- **Resource:** [Academic Access](../resources/academic-access.md)

---

[← Back to Dork Packs](README.md)
