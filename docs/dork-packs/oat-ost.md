# Opioid Agonist Treatment (OAT/OST)

> Find the guidelines, clinical tools, access policies, and products behind opioid pharmacotherapy —
> named by guideline, program, and brand, not just by keyword.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

OAT (methadone and buprenorphine treatment) is governed by named documents: the national **MATOD
guidelines** and a _different_ program in every state — NSW's **OTP**, Victoria's **maintenance
pharmacotherapy policy**, WA's **CPOP**, Queensland's **QOTP**, SA's **MATOD**. The medicines have
exact brands too — **Biodone Forte**, **Suboxone Film**, and the depot injectables **Buvidal** and
**Sublocade**.

Lead with the lived-experience view: OAT is one of the most-critiqued interventions by the people on
it — supervised dosing, **takeaway** access, and pharmacy **dispensing fees** are everyday issues
peers know better than any guideline.

> **Entity reference:** every guideline, program, and brand below is catalogued in
> [Source Intelligence → Opioid Agonist Treatment](../resources/source-intelligence.md#-opioid-agonist-treatment-oatost).

---

## ⚡ Quick Start

Find the national clinical guidelines:

```txt
"National Guidelines for Medication-Assisted Treatment of Opioid Dependence" site:health.gov.au
```

---

## 🟢 Basic Queries

### National MATOD Guidelines

```txt
("National Guidelines for Medication-Assisted Treatment of Opioid Dependence" OR MATOD) site:health.gov.au
```

**Why this works:**

- Goes to the exact national framework rather than guessing `*.gov.au` — note the hyphen in
  "Medication-Assisted" and that the document dates from 2014 (states issue the operational detail)

### Peer & Consumer Perspectives on OAT

```txt
(site:nuaa.org.au OR site:aivl.org.au OR site:hrvic.org.au) (methadone OR buprenorphine OR "opioid treatment" OR pharmacotherapy)
```

**Why this works:**

- Peer orgs document the access and dignity issues — supervised dosing, takeaways, dispensing fees —
  that clinical guidelines gloss over; this is the by-and-with-consumers side

### State Treatment Guidelines

```txt
(site:health.nsw.gov.au OR site:health.vic.gov.au OR site:mhc.wa.gov.au) ("opioid treatment" OR pharmacotherapy OR methadone OR buprenorphine) (guideline OR policy)
```

---

## 🟡 Intermediate Queries

### Depot (Long-Acting Injectable) Buprenorphine

```txt
("Buvidal Weekly" OR "Buvidal Monthly" OR "Sublocade" OR "depot buprenorphine" OR LAIB) (Australia OR PBS OR guideline)
```

**Why this works:**

- Naming the actual depot brands (Buvidal from Camurus; Sublocade from Indivior) finds the
  product-specific guidance and PBS detail, not generic "buprenorphine" pages

### Takeaway Doses & Supervised Dosing

```txt
("takeaway doses" OR "take-away doses" OR "unsupervised doses" OR "supervised dosing") (methadone OR buprenorphine OR OTP) Australia
```

### Prescriber Training & Authorisation

```txt
(site:racgp.org.au OR site:otep.org.au OR site:insight.qld.edu.au) ("Medication Assisted Treatment for Opioid Dependence" OR "Opioid Dependence Treatment Education Program" OR "authorised prescriber" OR prescriber)
```

**Why this works:**

- RACGP's MATOD training and NSW's OTEP are the named prescriber pathways; "authorised prescriber"
  is the exact regulatory status — these surface the real training, not job ads

### Dispensing Fees & Access Barriers

```txt
(methadone OR buprenorphine OR pharmacotherapy) ("dispensing fee" OR "daily dosing fee" OR "cost" OR "access barrier") Australia
```

---

## 🔴 Advanced Queries

### Comprehensive OAT Document Sweep

```txt
site:*.gov.au filetype:pdf (OAT OR OST OR "opioid agonist" OR "opioid dependence" OR methadone OR buprenorphine OR pharmacotherapy) (guideline OR policy OR framework OR "clinical policies") after:2018
```

### Pregnancy & Perinatal OAT

```txt
(pregnancy OR perinatal OR antenatal) (methadone OR buprenorphine OR "opioid dependence") (guideline OR management) Australia filetype:pdf
```

### Pain Management & OAT

```txt
("chronic pain" OR "pain management") (methadone OR buprenorphine OR "depot buprenorphine") (guideline OR interaction) Australia filetype:pdf
```

### Diversion, Safety & Governance

```txt
(methadone OR buprenorphine) (diversion OR "safe storage" OR supervision OR "clinical governance") (policy OR guideline) site:*.gov.au filetype:pdf
```

---

## 📍 State Programs & Guidelines

Each state's named program and current guideline — verified, because the titles differ.

### NSW — Opioid Treatment Program (OTP)

```txt
site:health.nsw.gov.au ("NSW Clinical Guidelines" "Treatment of Opioid Dependence" OR "Opioid Treatment Program" OR "depot buprenorphine")
```

### Victoria — Maintenance Pharmacotherapy Policy

```txt
site:health.vic.gov.au "Policy for maintenance pharmacotherapy for opioid dependence"
```

### WA — Community Program for Opioid Pharmacotherapy (CPOP)

```txt
site:mhc.wa.gov.au ("Community Program for Opioid Pharmacotherapy" OR CPOP OR "Clinical Policies and Procedures for the Use of Methadone and Buprenorphine")
```

### QLD — Queensland Opioid Treatment Program (QOTP)

```txt
site:health.qld.gov.au ("Queensland Opioid Dependence Treatment Guidelines" OR "Queensland Opioid Treatment Program" OR QOTP)
```

### SA — Medication Assisted Treatment for Opioid Dependence (MATOD)

```txt
site:sahealth.sa.gov.au "Medication Assisted Treatment for Opioid Dependence" OR MATOD
```

---

## 💊 Medications & Brands

The brand names are how supply, PBS listing, and shortages get described.

### Methadone (Biodone / Aspen)

```txt
("Biodone Forte" OR "Aspen Methadone Syrup" OR "Aspen Methadone Liquid") (methadone OR PBS) site:.au
```

### Buprenorphine-Naloxone (Suboxone)

```txt
("Suboxone Film" OR "buprenorphine-naloxone" OR Subutex) (PBS OR guideline OR "soluble film") site:.au
```

### Depot Buprenorphine (Buvidal / Sublocade)

```txt
("Buvidal" OR "Sublocade") (Camurus OR Indivior OR PBS OR "modified release") site:.au
```

**Why this works:**

- Buvidal (weekly/monthly, Camurus) and Sublocade (monthly, Indivior) are the only depot
  buprenorphines registered in Australia — quoting them finds the real product and access info

---

## 💬 Peer & Lived-Experience Perspectives

The everyday reality of OAT — and its strongest critiques — come from the people on it.

### Consumer Experience & Critique

```txt
(methadone OR buprenorphine OR "opioid treatment") ("in their own words" OR "client experience" OR "consumer" OR dignity OR "supervised dosing") Australia
```

### Peer Advocacy on Access

```txt
(site:nuaa.org.au OR site:aivl.org.au) (methadone OR pharmacotherapy OR OTP) (submission OR campaign OR "dispensing fee" OR takeaway)
```

### Community Discussion & Real-Time Reports

```txt
(site:reddit.com/r/AusDrugs OR site:bluelight.org) ("methadone" OR "subbies" OR "suboxone" OR "buvidal" OR "depot")
```

**Why this works:**

- Forums carry the practical, unfiltered experience — transferring between programs, depot side
  effects, takeaway negotiations — that an effectiveness study never captures

---

## 🌏 International OAT Guidance

The reference standards other guidelines build on.

### WHO Opioid Dependence Guidelines

```txt
"Guidelines for the psychosocially assisted pharmacological treatment of opioid dependence" (site:who.int OR site:iris.who.int)
```

### UK "Orange Book"

```txt
"Drug misuse and dependence: UK guidelines on clinical management" site:gov.uk
```

### Canada BCCSU

```txt
"A Guideline for the Clinical Management of Opioid Use Disorder" site:bccsu.ca
```

---

## 📊 Research & Evidence

### Australian Research

```txt
(site:unsw.edu.au OR site:ndarc.med.unsw.edu.au OR site:turningpoint.org.au) ("opioid agonist" OR methadone OR buprenorphine OR "depot buprenorphine") (outcomes OR retention OR evaluation) filetype:pdf
```

### Effectiveness & Retention

```txt
("opioid agonist treatment" OR OAT OR methadone OR buprenorphine) (retention OR mortality OR effectiveness) Australia filetype:pdf
```

### Systematic Reviews

```txt
site:cochranelibrary.com ("opioid agonist" OR methadone OR buprenorphine OR "opioid dependence")
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Opioid Agonist Treatment entities](../resources/source-intelligence.md#-opioid-agonist-treatment-oatost)
  — the guidelines, programs, and brands every dork above is built on
- **Synonym Block:** [Opioid Treatment Terms](../05-synonym-blocks.md#-opioid-treatment-terms)
- **Related Packs:** [Naloxone](naloxone.md), [Prisons & Justice](prisons-justice.md),
  [Research](research.md)
- **Key Sources:** [NDARC](https://ndarc.med.unsw.edu.au), [OTEP](https://otep.org.au)

---

[← Back to Dork Packs](README.md)
