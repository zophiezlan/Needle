# Rural, Regional & Remote Australia

> Harm reduction services, evidence, and the "tyranny of distance" outside the metros — named by the
> actual producer, dataset, and rurality code, not just by "rural".

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Two specificity moves win here. First, name the **AOD-relevant** producer — most rural-health orgs
are mental-health-only, so the rare named exceptions matter: the National Rural Health Alliance's
fact sheet **"Alcohol, smoking, vaping and other drug use in rural Australia"**, the RFDS **"Best
for the Bush"** research series, and the clinician advice line **DACAS**. Second, use the formal
**rurality codes** — the **Modified Monash Model** (MM 1–7) and the ABS **Remoteness Areas** — to
actually filter to non-metro evidence instead of hoping the word "rural" appears.

> **Entity reference:** every org, dataset, and rurality code below is catalogued in
> [Source Intelligence → Rural, Regional & Remote](../resources/source-intelligence.md#rural-regional-remote).

---

## ⚡ Quick Start

Go to the rare rural-AOD-specific named publication:

```txt
site:ruralhealth.org.au "Alcohol, smoking, vaping and other drug use in rural Australia"
```

---

## 🟢 Basic Queries

### Named Rural Producers (AOD content)

```txt
(site:ruralhealth.org.au OR site:flyingdoctor.org.au) ("alcohol and other drugs" OR "Partyline" OR "Best for the Bush")
```

**Why this works:**

- Goes straight to the two named rural producers that actually carry AOD material — the NRHA
  (magazine **Partyline**, plus the AOD fact sheet) and the RFDS (**Best for the Bush**) — instead
  of a generic `"rural" "drug"` query

### Rural Clinician AOD Advice (DACAS)

```txt
site:dacas.org.au ("Drug and Alcohol Clinical Advisory Service" OR "secondary consultation")
```

### General Rural/Regional AOD

```txt
("rural" OR "regional" OR "remote") ("harm reduction" OR "alcohol and other drugs") (service OR access) site:*.gov.au filetype:pdf
```

---

## 🟡 Intermediate Queries

### Filter by Rurality Code (the insider move)

```txt
("Modified Monash" OR "MM 5" OR "MM 6" OR "MM 7" OR "Outer Regional" OR "Remote" OR "Very Remote") ("alcohol and other drugs" OR AOD OR "harm reduction") Australia filetype:pdf
```

**Why this works:**

- The **Modified Monash Model** and ABS **Remoteness Areas** are how rural health is actually
  classified — searching the code filters to genuine non-metro evidence, where the bare word "rural"
  pulls in tourism and real-estate noise

### Telehealth & Clinician Advice (by state)

```txt
("Drug and Alcohol Clinical Advisory Service" OR DACAS OR "Drug and Alcohol Specialist Advisory Service" OR DASAS) (rural OR remote OR telehealth OR "secondary consultation")
```

### RFDS Research

```txt
site:flyingdoctor.org.au ("Best for the Bush" OR "Rural and Remote Health Base Line" OR "mental health" OR alcohol OR drug)
```

### Remote Aboriginal Community-Controlled (ACCHO)

```txt
("Aboriginal Community Controlled" OR ACCHO) (remote OR "very remote") ("alcohol and other drugs" OR AOD)
```

> Handle with cultural-safety care and prioritise community-controlled framing — see the
> [First Nations pack](first-nations.md).

---

## 🔴 Advanced Queries

### Comprehensive Rural Sweep

```txt
("rural" OR "regional" OR "remote" OR "non-metropolitan" OR "Modified Monash" OR "Remoteness Areas") ("harm reduction" OR "alcohol and other drugs" OR AOD) (service OR access OR workforce OR research) Australia filetype:pdf -USA -UK after:2020
```

### Diversion in Rural & Remote Australia

```txt
site:aihw.gov.au "The effectiveness of the Illicit Drug Diversion Initiative in rural and remote Australia"
```

**Why this works:**

- A named AIHW report that sits exactly at the rural × justice intersection — quoting its title is
  far stronger than guessing at a generic diversion-in-the-bush search

### Rural Workforce & Professional Isolation

```txt
("rural" OR "remote") (AOD OR "alcohol and other drug" OR "drug and alcohol") (workforce OR "professional isolation" OR generalist OR retention) Australia filetype:pdf
```

---

## 📍 Rurality Codes & Classifications

The formal codes are the highest-precision rural filter.

### Modified Monash Model

```txt
site:health.gov.au ("Modified Monash Model" OR "Modified Monash Model 2023")
```

### ABS Remoteness Areas

```txt
(site:abs.gov.au OR site:aihw.gov.au) ("Remoteness Areas" OR "Remoteness Structure" OR "Very Remote Australia")
```

### National Rural Health Commissioner

```txt
site:health.gov.au ("Office of the National Rural Health Commissioner" OR "National Rural Health Commissioner")
```

---

## 🚜 Special Contexts

### FIFO & Mining Mental Health

```txt
(site:wa.gov.au OR site:mhc.wa.gov.au OR site:transformativeworkdesign.com) ("Mental Awareness, Respect and Safety" OR "MARS Program" OR "Impact of FIFO work arrangements")
```

**Why this works:**

- Names WA's **MARS** program and the Curtin **"Impact of FIFO work arrangements on the mental
  health and wellbeing of FIFO workers"** report — the actual titles, hosted on `wa.gov.au` /
  `mhc.wa.gov.au` (the old `dmirs.wa.gov.au` is dead)

### Drought & Rural Adversity

```txt
(site:ramhp.com.au OR site:health.nsw.gov.au) ("Rural Adversity Mental Health Program" OR RAMHP OR drought) ("alcohol" OR "substance use" OR "mental health")
```

### Farming Communities & Men's Help-Seeking

```txt
(site:farmerhealth.org.au OR site:therippleeffect.com.au OR site:ifarmwell.com.au) ("National Centre for Farmer Health" OR "Sustainable Farm Families" OR "The Ripple Effect" OR ifarmwell)
```

---

## 📍 Specific Regional Areas

Pair a region name with an AOD term, or you drown in tourism results.

### NSW Regions

```txt
("Far West" OR "Northern Rivers" OR "New England" OR "Riverina") NSW ("alcohol and other drugs" OR AOD OR "needle syringe" OR "harm reduction")
```

### Queensland & Northern Territory

```txt
("Far North Queensland" OR "Outback Queensland" OR "Top End" OR "Central Australia" OR "Alice Springs") ("alcohol and other drugs" OR AOD OR "harm reduction")
```

### WA, SA, VIC & TAS

```txt
("Kimberley" OR "Pilbara" OR "Eyre Peninsula" OR "Riverland" OR "Gippsland" OR "Mallee" OR Tasmania) (rural OR remote) ("alcohol and other drugs" OR AOD OR "harm reduction")
```

---

## 🌏 International Rural Opioid Response

### US — Rural Communities Opioid Response Program

```txt
site:hrsa.gov ("Rural Communities Opioid Response Program" OR RCORP) (opioid OR "substance use disorder" OR rural)
```

### Canada & Scotland (broad fallbacks)

```txt
(site:canada.ca ("Substance Use and Addictions Program" OR SUAP) (northern OR remote)) OR ((site:gov.scot OR site:publichealthscotland.scot) "National Mission on Drug Deaths" (rural OR remote OR island))
```

> No rural-specific quotable titles were confirmed for Canada or Scotland — these use the verified
> national umbrella programs plus a rural qualifier rather than a fabricated title.

---

## 💬 Peer & Community

Rural peer knowledge is thin online and worth surfacing wherever it exists.

### Peer & Drug-User-Org Rural Material

```txt
(site:nuaa.org.au OR site:aivl.org.au OR site:wasua.com.au) (rural OR regional OR remote OR "outreach") (peer OR "harm reduction" OR NSP)
```

### Community Forums & Lived Experience

```txt
(site:reddit.com/r/AusDrugs OR site:bluelight.org) (rural OR regional OR remote OR "country town" OR FIFO) ("harm reduction" OR "drug checking" OR access)
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Rural, Regional & Remote](../resources/source-intelligence.md#rural-regional-remote) — the orgs,
  datasets, and rurality codes every dork above is built on
- **Synonym Block:** [Social Determinants Terms](../05-synonym-blocks.md#social-determinants-terms)
- **Related Packs:** [Service Directories](service-directories.md),
  [First Nations](first-nations.md), [Mental Health](mental-health.md)
- **Key Orgs:** [NRHA](https://ruralhealth.org.au), [RFDS](https://flyingdoctor.org.au),
  [DACAS](https://dacas.org.au)

---

[← Back to Dork Packs](README.md)
