# Prisons, Justice & Corrections Health

> Harm reduction in closed settings and across the justice system — named by the actual service,
> court, data collection, and peer publication, not just by "prison".

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

People who use drugs are massively over-represented in custody, and "first contact" with treatment
is often through the courts. The system has named anchors worth knowing. The peer signal leads:
NUAA's **Insider's News** is a harm-reduction magazine _solely_ distributed inside NSW prisons. Care
in custody is delivered by named bodies — the **Justice Health and Forensic Mental Health Network**
(NSW), state **Prison Health Services** (QLD), **SAPHS** (SA) — and WA is the national exception
where prison health sits inside **Corrective Services**, not the health department. Diversion runs
on named courts and schemes (**Drug Court of NSW**, **MERIT**, **QDAC**, **DASL**), and the evidence
lives in named collections (AIHW's **National Prisoner Health Data Collection**, the **MARC**
post-release mortality study).

> **Entity reference:** every service, court, dataset, and report below is catalogued in
> [Source Intelligence → Justice, Custody & Diversion](../resources/source-intelligence.md#-justice-custody--diversion).

---

## ⚡ Quick Start

Go to the peer magazine written for and distributed inside NSW prisons:

```txt
site:nuaa.org.au "Insider's News"
```

---

## 🟢 Basic Queries

### Peer & Lived-Experience in Custody

```txt
(site:nuaa.org.au OR site:crcnsw.org.au) ("Insider's News" OR "Paper Chained" OR "Jailbreak Radio")
```

**Why this works:**

- Leads with the lived-experience record — NUAA's in-prison magazine and CRC's prisoner-writing and
  radio — instead of a generic `"prison" "drug"` query

### Custodial Health Services (Named)

```txt
(site:justicehealth.nsw.gov.au OR site:westmoreton.health.qld.gov.au OR site:sahealth.sa.gov.au) ("prison health" OR "prisoner health" OR "alcohol and other drugs")
```

### National Prisoner-Health Evidence

```txt
site:aihw.gov.au ("The health of people in Australia's prisons" OR "The health of Australia's prisoners")
```

**Why this works:**

- The AIHW report title _changed_ between editions — quoting both forms catches the 2022 and the
  2018 (and earlier) editions in one search

---

## 🟡 Intermediate Queries

### Justice Health NSW (the named network + survey)

```txt
(site:justicehealth.nsw.gov.au OR site:nsw.gov.au) ("Justice Health and Forensic Mental Health Network" OR "Network Patient Health Survey")
```

**Why this works:**

- The flagship is the **Network Patient Health Survey** (the prison-population health survey) —
  content is migrating from `justicehealth.nsw.gov.au` to `nsw.gov.au`, so OR both hosts

### Opioid Treatment & Naloxone in Custody

```txt
("opioid treatment" OR "OAT" OR methadone OR buprenorphine OR "take-home naloxone" OR "naloxone on release") (prison OR custody OR "post-release") Australia
```

### Throughcare & Re-entry (Named Programs)

```txt
(site:crcnsw.org.au OR site:caraniche.com.au OR site:goodpathways.org.au) ("AOD Transition Program" OR "Extended Reintegration Service" OR "StepOut" OR "Throughcare Program")
```

### Compulsory Drug Treatment (NSW)

```txt
"Compulsory Drug Treatment Correctional Centre" (Parklea OR CDTCC OR "Drug Court")
```

---

## 🔴 Advanced Queries

### Comprehensive Prison AOD Sweep

```txt
(prison OR custody OR correctional OR incarceration) ("alcohol and other drugs" OR AOD OR "harm reduction" OR "opioid treatment" OR "take-home naloxone") (policy OR guideline OR program OR evaluation) Australia filetype:pdf after:2020
```

### Post-Release Overdose & Mortality

```txt
("Mortality After Release from Custody" OR "Prison and Transition Health" OR "post-release") (overdose OR mortality OR "drug-induced death") (Kinner OR Borschmann OR Australia)
```

**Why this works:**

- Names the actual cohorts — the **MARC** study (Kinner, QLD) and the Burnet **PATH** cohort (people
  who inject drugs leaving prison) — rather than hoping a generic mortality search surfaces them

### RACGP Prison Health Standards

```txt
site:racgp.org.au "Standards for health services in Australian prisons"
```

### Withdrawal Management in Custody

```txt
(prison OR custody OR reception) (withdrawal OR detox) (management OR protocol OR guideline) Australia filetype:pdf
```

---

## 🏥 Custodial Health Services (by Jurisdiction)

Who actually delivers care inside prison differs by state — and WA is the exception.

### NSW — Justice Health & Forensic Mental Health Network

```txt
(site:justicehealth.nsw.gov.au OR site:nsw.gov.au) ("Network Patient Health Survey" OR "Young People in Custody Health Survey") filetype:pdf
```

### Victoria — Justice Health (DJCS)

```txt
(site:justice.vic.gov.au OR site:corrections.vic.gov.au) "Justice Health" (prison OR custodial OR "alcohol and other drugs")
```

### Queensland — Prison Health Services (West Moreton)

```txt
(site:westmoreton.health.qld.gov.au OR site:health.qld.gov.au) ("Prison Health Services" OR "Prisoner Health Services")
```

### WA — Corrective Services Health (the exception)

```txt
(site:wa.gov.au OR site:correctiveservices.wa.gov.au) "Corrective Services" "health care" prison
```

### SA — SA Prison Health Service (SAPHS)

```txt
(site:sahealth.sa.gov.au OR site:calhn.sa.gov.au) ("SA Prison Health Service" OR "South Australian Prison Health Service" OR SAPHS)
```

### ACT, TAS & NT

```txt
(site:canberrahealthservices.act.gov.au "Custodial Health") OR (site:health.tas.gov.au "Correctional Primary Health") OR ((site:nt.gov.au OR site:corrections.nt.gov.au) prisoner health)
```

---

## ⚖️ Drug Courts & Diversion

Each jurisdiction names its program — and several have been renamed or replaced, so the exact title
matters.

### NSW — Drug Court, MERIT & EDDI

```txt
(site:drugcourt.nsw.gov.au OR site:dcj.nsw.gov.au OR site:bocsar.nsw.gov.au) ("Drug Court of New South Wales" OR "Magistrates Early Referral Into Treatment" OR MERIT OR "Early Drug Diversion Initiative")
```

**Why this works:**

- Pairs the courts/justice hosts with **BOCSAR** (`bocsar.nsw.gov.au`), which actually authors the
  NSW Drug Court and MERIT evaluations — the evaluator's domain is where the evidence lives

### Victoria — Drug Court (DATO) & CISP

```txt
(site:mcv.vic.gov.au OR site:countycourt.vic.gov.au) ("Drug Court" OR "Drug and Alcohol Treatment Order" OR "Court Integrated Services Program" OR CISP)
```

### Queensland — QDAC & Court Link

```txt
(site:courts.qld.gov.au OR site:police.qld.gov.au) ("Queensland Drug and Alcohol Court" OR QDAC OR "Police Drug Diversion Program" OR "Court Link")
```

### SA & WA — Treatment Intervention Court, PDDI, Drug Court, CIR

```txt
(site:courts.sa.gov.au "Treatment Intervention Court") OR (site:sahealth.sa.gov.au "Police Drug Diversion Initiative") OR (site:magistratescourt.wa.gov.au "Drug Court") OR (site:mhc.wa.gov.au "Cannabis Intervention Requirement")
```

### ACT — Drug & Alcohol Sentencing List

```txt
(site:courts.act.gov.au OR site:anu.edu.au) ("Drug and Alcohol Sentencing List" OR DASL OR "Drug and Alcohol Treatment Order")
```

### National — Illicit Drug Diversion Initiative

```txt
(site:aihw.gov.au OR site:aic.gov.au) ("Illicit Drug Diversion Initiative" OR IDDI) (evaluation OR effectiveness)
```

---

## 🔄 Throughcare & Re-entry

"Throughcare" is the Australian sector term for continuity from custody to community.

### Community Restorative Centre (NSW)

```txt
site:crcnsw.org.au ("Alcohol and Other Drugs (AOD) Transition Program" OR "Extended Reintegration Service" OR "The Miranda Project")
```

### Post-Release AOD & Naloxone on Release

```txt
("take-home naloxone" OR "naloxone on release" OR "post-release") (AOD OR "alcohol and other drugs" OR overdose) prison (release OR transition) Australia
```

### National Corrections Policy

```txt
"Guiding Principles for Corrections in Australia" (throughcare OR "post-release" OR reintegration) filetype:pdf
```

---

## 📊 Data & Post-Release Research

### National Prisoner Health Data

```txt
site:aihw.gov.au ("National Prisoner Health Data Collection" OR NPHDC OR "The health of people in Australia's prisons")
```

### Prisoner & Corrections Counts (ABS)

```txt
site:abs.gov.au ("Prisoners in Australia" OR "Corrective Services, Australia")
```

### Report on Government Services (Justice)

```txt
site:pc.gov.au "Report on Government Services" ("corrective services" OR justice)
```

### Post-Release Mortality Cohorts

```txt
("Mortality After Release from Custody" OR "Mortality After Release from Incarceration Consortium" OR "Prison and Transition Health") (Kinner OR Borschmann OR Burnet)
```

---

## 🖤💛❤️ First Nations & Justice

> **Handle with cultural-safety care.** Aboriginal and Torres Strait Islander people are
> catastrophically over-represented in custody, and death-in-custody data is culturally sensitive.
> The institutions below are real and current, but this material should be steered by
> community-controlled and peer sources and reviewed for Indigenous data sovereignty — see the
> [First Nations pack](first-nations.md). Restrict RCIADIC searches to the National Report and
> recommendations; **individual death reports are not appropriate for dorking.**

### Aboriginal Sentencing Courts (Named)

```txt
("Koori Court" OR "Murri Court" OR "Nunga Court" OR "Circle Sentencing" OR "Galambany Court") (drug OR alcohol OR "alcohol and other drugs")
```

### Royal Commission & Deaths in Custody

```txt
(site:austlii.edu.au "Royal Commission into Aboriginal Deaths in Custody" "National Report") OR (site:aic.gov.au ("Deaths in custody in Australia" OR "National Deaths in Custody Program"))
```

### Closing the Gap — Justice Targets

```txt
site:closingthegap.gov.au ("Target 10" OR "Target 11" OR incarceration OR "youth detention")
```

### Aboriginal Legal Services

```txt
(site:alsnswact.org.au OR site:naaja.org.au OR site:als.org.au OR site:vals.org.au) (drug OR alcohol OR diversion OR bail)
```

---

## 🌏 International Prison Harm Reduction

The decades of method and evidence on harm reduction in closed settings live overseas — name the
actual guidance.

### UN Comprehensive Package & Standards

```txt
site:unodc.org ("a comprehensive package of interventions" OR "Nelson Mandela Rules") prisons
```

### WHO & Harm Reduction International

```txt
(site:who.int "Prisons and health") OR (site:hri.global "Global State of Harm Reduction" prison)
```

### Prison Needle & Syringe Programs

```txt
("Prison Needle Exchange Program" OR "needle and syringe programmes in prisons" OR "Prison Needle Exchange: Lessons") (site:canada.ca OR site:csc-scc.gc.ca OR site:opensocietyfoundations.org OR filetype:pdf)
```

**Why this works:**

- Canada's **PNEP** is the live, named federal prison needle exchange; the UNODC handbook and the
  OSF review are the canonical evidence titles — far stronger than a generic `"prison" "needle"`
  search

### Global Prison Trends

```txt
(site:penalreform.org OR site:cdn.penalreform.org) "Global Prison Trends"
```

---

## 💬 Peer & Lived-Experience

The expertise of people who've been inside is its own evidence base — and is usually missing from
the official record.

### Peer Publications & Media

```txt
(site:nuaa.org.au OR site:crcnsw.org.au) ("Insider's News" OR "Paper Chained" OR "Jailbreak Radio")
```

### Peer & Drug-User-Org Submissions

```txt
(site:nuaa.org.au OR site:aivl.org.au) (prison OR custody OR "throughcare" OR "post-release") (submission OR "lived experience" OR peer)
```

### International Peer Networks

```txt
(site:euronpud.net OR site:inpud.net) prison (naloxone OR "harm reduction" OR peer)
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Justice, Custody & Diversion](../resources/source-intelligence.md#-justice-custody--diversion) —
  the services, courts, datasets, and peer publications every dork above is built on
- **Synonym Block:** [Justice Terms](../05-synonym-blocks.md#-justice-terms)
- **Related Packs:** [First Nations](first-nations.md), [OAT/OST](oat-ost.md),
  [Naloxone](naloxone.md), [Coroners & Deaths](coroners-deaths.md)
- **Key Sources:** [Justice Health NSW](https://justicehealth.nsw.gov.au),
  [Community Restorative Centre](https://crcnsw.org.au), [AIC](https://aic.gov.au)

---

[← Back to Dork Packs](README.md)
