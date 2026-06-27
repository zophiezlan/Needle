# Data, Statistics & Surveillance

> Find the actual numbers — named by dataset, collection code, and repository, not by generic "drug
> statistics".

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

For data, the exact title _is_ the dork. The named national collections are the **National Drug
Strategy Household Survey (NDSHS)**, the **AODTS NMDS** (treatment data), NDARC's **Drug Trends**
(IDRS/EDRS), Kirby's **NSP NMDC**, the ACIC **National Wastewater Drug Monitoring Program**, and —
for non-fatal harms — the **National Ambulance Surveillance System (NASS)** surfaced via
**AODstats**. Mortality comes from the **ABS** ("Causes of Death, Australia", "drug-induced
deaths"), aggregated by **Penington Institute**. Raw data lives on **data.gov.au**, the **Australian
Data Archive**, and **ARDC/Research Data Australia**.

> **Entity reference:** every dataset, code, and repository below is catalogued in
> [Source Intelligence → Datasets & Data Repositories](../resources/source-intelligence.md#-datasets-surveillance-feeds--data-repositories).

---

## ⚡ Quick Start

Go straight to the flagship national survey:

```txt
site:aihw.gov.au "National Drug Strategy Household Survey"
```

---

## 🟢 Basic Queries

### AIHW — Household Survey (NDSHS)

```txt
site:aihw.gov.au "National Drug Strategy Household Survey" ("2022–2023" OR NDSHS)
```

**Why this works:**

- NDSHS is _the_ national prevalence survey. The latest released edition is 2022–2023 (use the
  en-dash form for exact-title matching; a 2025 wave is collected but not yet released)

### ABS — Causes of Death

```txt
site:abs.gov.au "Causes of Death, Australia" "drug-induced deaths"
```

### Penington — Annual Overdose Report

```txt
site:penington.org.au "Australia's Annual Overdose Report"
```

---

## 🟡 Intermediate Queries

### AODTS NMDS (Treatment Data)

```txt
site:aihw.gov.au ("Alcohol and other drug treatment services in Australia" OR "AODTS NMDS" OR "Alcohol and Other Drug Treatment Services National Minimum Data Set")
```

**Why this works:**

- The report is "Alcohol and other drug treatment services in Australia"; its dataset code is the
  _spaced_ "AODTS NMDS" (the hyphenated form is rarer). METEOR (`meteor.aihw.gov.au`) defines it

### NDARC Drug Trends (IDRS / EDRS)

```txt
(site:unsw.edu.au OR site:ndarc.med.unsw.edu.au) ("Illicit Drug Reporting System" OR "Ecstasy and Related Drugs Reporting System" OR "Australian Drug Trends")
```

### ACIC Wastewater Monitoring

```txt
site:acic.gov.au "National Wastewater Drug Monitoring Program" ("Report 25" OR "Report 24")
```

**Why this works:**

- The NWDMP is published as numbered reports — target the highest number for the freshest data, or
  broaden across recent numbers to catch the latest as new editions drop

### Ambulance Attendance Data (AODstats)

```txt
site:aodstats.org.au ("ambulance attendances" OR GHB OR heroin OR methamphetamine)
```

---

## 🔴 Advanced Queries

### Comprehensive Data Sweep

```txt
(site:aihw.gov.au OR site:abs.gov.au OR site:unsw.edu.au OR site:acic.gov.au) ("National Drug Strategy Household Survey" OR "AODTS NMDS" OR "Drug Trends" OR "drug-induced deaths" OR "National Wastewater Drug Monitoring Program") (data OR report OR statistics) after:2022
```

### Raw Datasets (CSV / XLSX)

```txt
(site:data.gov.au OR site:*.gov.au) (filetype:csv OR filetype:xlsx) (drug OR alcohol OR AOD OR overdose OR "needle syringe")
```

### Research Microdata

```txt
(site:ada.edu.au OR site:researchdata.edu.au OR site:ardc.edu.au) ("National Drug Strategy Household Survey" OR drug OR alcohol OR AOD) (microdata OR dataverse OR CURF)
```

> Note: the old ANDS (`ands.org.au`) merged into **ARDC** (`ardc.edu.au`) in 2018; dataset metadata
> is discoverable via **Research Data Australia** (`researchdata.edu.au`).

---

## 📊 Named National Datasets

### Household Survey (Prevalence)

```txt
site:aihw.gov.au "National Drug Strategy Household Survey" (illicit OR prevalence OR "data tables")
```

### Treatment Services

```txt
site:aihw.gov.au "Alcohol and other drug treatment services in Australia" (filetype:pdf OR "data tables")
```

### NSP Distribution (Kirby)

```txt
site:kirby.unsw.edu.au "Needle Syringe Program National Minimum Data Collection"
```

---

## 🚑 Non-Fatal Harm Surveillance

The named systems for harms that don't reach a death certificate.

### National Ambulance Surveillance System (NASS)

```txt
"National Ambulance Surveillance System" (alcohol OR drug) (site:turningpoint.org.au OR site:research.monash.edu)
```

**Why this works:**

- NASS (Turning Point @ Monash) codes drug/alcohol-related ambulance attendances; it has no public
  portal of its own — its Victorian outputs are surfaced through AODstats, so name the program and
  pair it with its host

### Emergency-Department Toxico-surveillance (EDNA)

```txt
("Emerging Drugs Network of Australia" OR EDNAV) ("emergency department" OR toxicosurveillance OR "novel psychoactive")
```

### Hospital Separations

```txt
site:aihw.gov.au ("drug-related" OR "alcohol-related") (hospitalisation OR separations OR "emergency department") data
```

---

## ☠️ Mortality Data

### Drug-Induced Deaths (ABS / AIHW)

```txt
(site:abs.gov.au OR site:aihw.gov.au) "drug-induced deaths" (filetype:pdf OR "data tables" OR time series)
```

### Opioid-Specific Mortality

```txt
("opioid deaths" OR "opioid-induced deaths" OR "opioid overdose deaths") Australia (site:aihw.gov.au OR site:penington.org.au)
```

### ABS National Health Survey (Alcohol)

```txt
site:abs.gov.au "National Health Survey" "Alcohol consumption"
```

---

## 🗂️ Raw Data & Repositories

### National Open Data Portal

```txt
site:data.gov.au (drug OR alcohol OR AOD OR overdose OR "needle syringe") filetype:csv
```

### Australian Data Archive (Microdata)

```txt
site:ada.edu.au ("National Drug Strategy Household Survey" OR drug OR alcohol) (dataverse OR microdata OR CURF)
```

### Research Data Australia (ARDC)

```txt
(site:researchdata.edu.au OR site:ardc.edu.au) (drug OR alcohol OR AOD OR "harm reduction") dataset
```

---

## 🖤💛❤️ First Nations Data

> Handle with care: Aboriginal and Torres Strait Islander data is subject to Indigenous Data
> Sovereignty principles. Prefer community-controlled sources and correct framing.

### AIHW Aboriginal & Torres Strait Islander Data

```txt
site:aihw.gov.au ("Aboriginal and Torres Strait Islander" OR Indigenous) (alcohol OR drug OR "substance use") statistics
```

### Closing the Gap

```txt
"Closing the Gap" (alcohol OR drug OR "substance use") (target OR data OR dashboard)
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Datasets & Data Repositories entities](../resources/source-intelligence.md#-datasets-surveillance-feeds--data-repositories)
  — the collections, codes, and repositories every dork above is built on
- **Related Packs:** [Research](research.md), [Coroners & Deaths](coroners-deaths.md),
  [Novel Substances](novel-substances.md)
- **Key Sources:** [AIHW](https://aihw.gov.au), [ABS](https://abs.gov.au),
  [data.gov.au](https://data.gov.au)

---

[← Back to Dork Packs](README.md)
