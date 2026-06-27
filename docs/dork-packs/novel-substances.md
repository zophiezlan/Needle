# Novel Substances, Pharmacology & Toxicology

> Surveillance of the substances actually in Australia's supply — nitazenes, designer benzos,
> adulterants and emerging stimulants — named by compound and by monitoring program.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

"Novel psychoactive substance" is what an outsider types. An insider names the **compound** and the
**program that detects it**. In the current Australian supply that means nitazenes
(**isotonitazene**, **protonitazene**, **metonitazene**, and the pyrrolidino analogue
**etonitazepyne** / **isotonitazepyne** that CanTEST flagged in fake oxycodone), the dominant
designer benzodiazepine **bromazolam**, and the rising sedative adulterant **medetomidine**.

The named programs are the other half: the ACIC **National Wastewater Drug Monitoring Program**,
NDARC's **IDRS / EDRS / Drug Trends**, and the emergency-department **Emerging Drugs Network of
Australia (EDNA / EDNAV)**. Quote the compound, pair it with a program or an Australian site, and
you skip the generic noise.

> **Entity reference:** every compound, program, and surveillance body below is catalogued in
> [Source Intelligence → Novel Substances, NPS & Toxico-surveillance](../resources/source-intelligence.md#-novel-substances-nps--toxico-surveillance).

---

## 🌐 Essential Substance Databases

> Before dorking, these named databases carry the pharmacology and lab-tested results:

| Resource              | URL                                               | Focus                                                |
| --------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| **⭐ Erowid**         | [erowid.org](https://www.erowid.org/)             | Substance vaults & Experience Vaults since 1995      |
| **⭐ PsychonautWiki** | [psychonautwiki.org](https://psychonautwiki.org/) | Dose, duration & pharmacology, interaction charts    |
| **DrugsData**         | [drugsdata.org](https://drugsdata.org/)           | Erowid's lab-tested sample database (ex-EcstasyData) |
| **TripSit**           | [tripsit.me](https://tripsit.me/)                 | Factsheets & combination charts                      |

---

## ⚡ Quick Start

Find the current Australian nitazene picture from named sources:

```txt
(site:adf.org.au OR site:unsw.edu.au) ("nitazene" OR "nitazenes")
```

---

## 🟢 Basic Queries

### National Wastewater Monitoring (ACIC)

```txt
site:acic.gov.au "National Wastewater Drug Monitoring Program" filetype:pdf
```

**Why this works:**

- Goes to the program itself rather than guessing `*.gov.au` — the ACIC's NWDMP (analysed by the
  University of Queensland's QAEHS and the University of South Australia) is the authoritative
  national consumption signal, reported in numbered editions

### NDARC Drug Trends (IDRS / EDRS)

```txt
(site:unsw.edu.au OR site:ndarc.med.unsw.edu.au) ("Illicit Drug Reporting System" OR "Ecstasy and Related Drugs Reporting System" OR "Drug Trends")
```

**Why this works:**

- IDRS and EDRS are NDARC's two sentinel surveillance arms under the Drug Trends program — they're
  how emerging substances first show up in the data. (NDARC moved onto the main UNSW site, so search
  both domains.)

### Plain-Language Substance Facts (ADF)

```txt
site:adf.org.au ("nitazenes" OR "Drug Facts" OR "novel psychoactive")
```

---

## 🟡 Intermediate Queries

### Nitazenes (Benzimidazole Opioids)

```txt
("isotonitazene" OR "protonitazene" OR "metonitazene" OR "etonitazepyne" OR "butonitazene") (Australia OR detection OR toxicology) filetype:pdf
```

**Why this matters:** nitazenes are high-potency synthetic opioids; isotonitazene, protonitazene and
metonitazene are the three most frequently identified in Australian forensic and cryptomarket data.

### Designer Benzodiazepines

```txt
("bromazolam" OR "flualprazolam" OR "etizolam" OR "flubromazolam") (detection OR Australia OR "drug checking")
```

**Why this matters:** bromazolam is now the dominant designer benzo by positivity — search the
compound, not "novel benzodiazepine".

### Adulterant Sedatives (Xylazine / Medetomidine)

```txt
("xylazine" OR "tranq" OR "medetomidine" OR "dexmedetomidine") (site:adf.org.au OR site:unsw.edu.au OR site:health.gov.au OR "drug supply")
```

**Why this works:**

- Xylazine and medetomidine are mostly a North-American supply problem so far — pairing them with
  Australian sites filters to local detections and alerts rather than US-dominated results

### Emerging Stimulants & Cathinones

```txt
("eutylone" OR "pentylone" OR "N-ethylpentylone" OR "ephylone") (Australia OR detection OR "mis-sold as MDMA")
```

---

## 🔴 Advanced Queries

### Comprehensive NPS Surveillance Sweep

```txt
(site:acic.gov.au OR site:unsw.edu.au OR site:health.gov.au) ("nitazene" OR "novel psychoactive" OR NPS OR "emerging drug") (surveillance OR detection OR monitoring) filetype:pdf after:2022
```

### Forensic Detection & Confirmation Methods

```txt
("nitazene" OR "novel psychoactive" OR NPS) (GC-MS OR LC-MS OR "mass spectrometry" OR qTOF OR "confirmed by") (method OR detection OR identification) filetype:pdf
```

### Coronial & Toxicology Case Findings

```txt
("nitazene" OR "isotonitazene" OR "protonitazene" OR "metonitazene") (death OR coronial OR toxicity OR "case series") Australia
```

**Why this works:**

- Nitazene harms surface first in emergency-department and coronial toxicology — tying named
  compounds to "case series" or "coronial" finds the clinical evidence (cross-links Coroners &
  Deaths)

---

## 🧪 Substance-Specific Searches

### Nitazenes (High Priority)

```txt
("nitazene" OR "benzimidazole opioid") (Australia OR "drug alert" OR "drug checking") after:2023
```

```txt
("etonitazepyne" OR "N-pyrrolidino etonitazene" OR "isotonitazepyne") (CanTEST OR detection OR oxycodone OR Australia)
```

### Bromazolam & Metabolites

```txt
("bromazolam" OR "alpha-hydroxybromazolam") (detection OR positivity OR "drug checking" OR Australia)
```

### Ketamine & Dissociative Analogues

```txt
("ketamine analogue" OR "deschloroketamine" OR "2-FDCK" OR "fluorexetamine") (Australia OR detection OR emergence)
```

### GHB / GBL

```txt
(GHB OR GBL OR "gamma-hydroxybutyrate" OR "1,4-butanediol") Australia ("harm reduction" OR overdose OR detection)
```

---

## 🔬 Detection & Toxico-surveillance

The named monitoring networks are how unexpected substances get confirmed analytically before they
reach a coroner.

### Emerging Drugs Network of Australia (EDNA / EDNAV)

```txt
("Emerging Drugs Network of Australia" OR EDNAV) (toxicosurveillance OR "emergency department" OR "novel psychoactive")
```

**Why this works:**

- EDNA is the national ED toxico-surveillance network (led from Royal Perth Hospital with
  ChemCentre); EDNAV is its Victorian clinical registry (Austin Health / Victorian Poisons
  Information Centre). The literature is journal-heavy, so quote the network name rather than
  relying on a single site

### Wastewater Epidemiology

```txt
("National Wastewater Drug Monitoring Program" OR "wastewater-based epidemiology") (Australia OR ACIC OR QAEHS) filetype:pdf
```

### Drug-Checking Detections

```txt
(site:cantest.com.au OR site:health.act.gov.au OR site:wedinos.org) ("nitazene" OR "unexpected" OR "not as expected" OR alert)
```

---

## 🌏 International Surveillance

### UNODC Early Warning Advisory

```txt
site:unodc.org ("Early Warning Advisory" OR "Current NPS Threats" OR "new psychoactive substances")
```

### UNODC World Drug Report

```txt
site:unodc.org "World Drug Report" (synthetic OR opioid OR NPS) filetype:pdf
```

### EUDA / EMCDDA (Europe)

```txt
(site:euda.europa.eu OR site:emcdda.europa.eu) ("European Drug Report" OR "EU Early Warning System" OR "European Drug Alert System")
```

**Why this works:**

- EMCDDA became the European Union Drugs Agency (EUDA) in 2024 but older reports still live under
  `emcdda.europa.eu` — querying both domains catches the full archive of early-warning material

---

## 💬 Peer & Community Knowledge

Drug checking and peer forums often detect a new substance — and describe its effects — before any
official surveillance report is published.

### Forum Detection & Trip Reports

```txt
(site:bluelight.org OR site:reddit.com/r/researchchemicals OR site:reddit.com/r/AusDrugs) ("nitazene" OR "bromazolam" OR "RC" OR "tested positive")
```

### Pharmacology & Interaction References

```txt
(site:psychonautwiki.org OR site:tripsit.me) (dose OR duration OR "combination" OR interaction) ("research chemical" OR NPS)
```

### Lab-Tested Sample Data

```txt
site:drugsdata.org (results OR "lab tested") ("unexpected" OR nitazene OR cathinone OR "no MDMA")
```

**Why this works:**

- DrugsData (Erowid's lab database) and forum reports are real-world detection signals — cross-check
  them against EDNA/wastewater data, but don't ignore them: peers often see the supply shift first

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Novel Substances, NPS & Toxico-surveillance entities](../resources/source-intelligence.md#-novel-substances-nps--toxico-surveillance)
  — the compounds, programs, and bodies every dork above is built on
- **Synonym Block:** [Novel/Emerging Substances](../05-synonym-blocks.md#-novelemerging-substances)
- **Related Packs:** [Drug Alerts](drug-alerts.md), [Drug Checking](drug-checking.md),
  [Coroners & Deaths](coroners-deaths.md)
- **Databases:** [Erowid](https://erowid.org), [PsychonautWiki](https://psychonautwiki.org),
  [DrugsData](https://drugsdata.org)

---

[← Back to Dork Packs](README.md)
