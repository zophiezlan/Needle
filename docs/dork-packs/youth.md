# Youth & Young People

> Find youth-specific AOD services, prevention programs, and evidence — named by the actual service
> and program, not just by "youth".

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Youth AOD work has named providers and programs worth knowing: **YSAS** (Australia's largest
youth-specific AOD service, and lead of the Victorian Pill Testing Service), **Dovetail** (the
Queensland youth-AOD workforce service), and **headspace** (where AOD is one of four core streams).
School prevention runs on named programs from the **Matilda Centre** — **Positive Choices**,
**OurFutures** (formerly Climate Schools), **Cracks in the Ice**, and the Aboriginal & Torres Strait
Islander program **Strong & Deadly Futures**.

> **Entity reference:** every service and program below is catalogued in
> [Source Intelligence → Populations & Intersections](../resources/source-intelligence.md#-populations--intersections).

---

## ⚡ Quick Start

Go to Australia's largest youth-specific AOD service:

```txt
site:ysas.org.au ("alcohol and other drugs" OR "Victorian Pill Testing Service" OR "youth")
```

---

## 🟢 Basic Queries

### Named Youth AOD Services

```txt
(site:ysas.org.au OR site:dovetail.org.au OR site:headspace.org.au) ("alcohol and other drugs" OR AOD OR "youth")
```

**Why this works:**

- YSAS (VIC), Dovetail (QLD youth-AOD workforce), and headspace are the named youth providers —
  searching them beats a generic `"young people" "drug"` query

### School & Community Prevention (Matilda Centre)

```txt
(site:positivechoices.org.au OR site:ourfuturesinstitute.org.au OR site:cracksintheice.org.au) (drug OR alcohol OR education)
```

### Youth Mental Health & AOD

```txt
(site:headspace.org.au OR site:orygen.org.au OR site:au.reachout.com) ("alcohol and other drugs" OR "substance use")
```

---

## 🟡 Intermediate Queries

### Drug Education Programs (Named)

```txt
("Positive Choices" OR "OurFutures" OR "Climate Schools" OR "Cracks in the Ice") (school OR education OR evaluation)
```

**Why this works:**

- These are the evidence-based programs an insider names — "Climate Schools" is OurFutures' former
  name, so searching both catches older evaluations

### Aboriginal & Torres Strait Islander Youth Programs

```txt
(site:strongdeadly.org.au OR "Strong & Deadly Futures" OR "Strong and Deadly Futures") (school OR "alcohol and other drugs" OR prevention)
```

> Handle with cultural-safety care: prioritise community-controlled framing and the program's own
> materials.

### Youth Outreach & Early Intervention

```txt
("youth outreach" OR "early intervention" OR "Embedded Youth Outreach Program") (drug OR alcohol OR "harm reduction") Australia
```

### Peer Education (Youth)

```txt
"peer education" (youth OR "young people") (drug OR alcohol OR "harm reduction") Australia filetype:pdf
```

---

## 🔴 Advanced Queries

### Comprehensive Youth AOD Sweep

```txt
("youth" OR "young people" OR "adolescent") ("alcohol and other drugs" OR AOD OR "drug use" OR "harm reduction") (service OR program OR prevention OR evaluation) Australia filetype:pdf after:2020
```

### Prevention Evidence

```txt
("Positive Choices" OR "OurFutures" OR "drug education") (effectiveness OR evaluation OR "randomised") (school OR "young people") filetype:pdf
```

### Youth-Specific Harm Reduction

```txt
("young people" OR youth) "harm reduction" (festival OR nightlife OR "drug checking" OR "safer partying") Australia
```

---

## 🏥 Youth AOD Services

### YSAS (Victoria)

```txt
site:ysas.org.au ("Embedded Youth Outreach Program" OR "Victorian Pill Testing Service" OR withdrawal OR outreach)
```

### Dovetail (Queensland Workforce)

```txt
(site:dovetail.org.au OR site:insight.qld.edu.au) ("Dovetail" OR "Dovetail Good Practice Guide" OR "youth alcohol and other drug")
```

### Youth Withdrawal & Residential

```txt
("youth" OR "adolescent") (withdrawal OR detox OR residential) (treatment OR service OR program) (drug OR alcohol) Australia
```

---

## ⚖️ Youth Justice

### Youth Justice & AOD

```txt
("youth justice" OR "youth detention" OR "young offenders") (drug OR alcohol OR diversion OR "Embedded Youth Outreach Program") Australia filetype:pdf
```

### Diversion Programs

```txt
("young people" OR youth) (diversion OR "Children's Court" OR "cautioning") (drug OR alcohol) Australia
```

---

## 🧠 Mental Health & Youth

### Youth Mental Health & Substance Use

```txt
(site:headspace.org.au OR site:orygen.org.au) ("substance use" OR "alcohol and other drugs" OR comorbid OR "dual diagnosis")
```

### Early Psychosis & Substance Use

```txt
("early psychosis" OR "drug-induced psychosis") ("young people" OR youth) "substance use" Australia
```

---

## 📊 Research & Data

### Youth Drug-Use Data

```txt
(site:aihw.gov.au OR site:unsw.edu.au) (youth OR "young people" OR "secondary students") ("alcohol and other drugs" OR "drug use") (survey OR statistics OR data)
```

> The NDSHS (see the Data & Statistics pack) carries the national youth prevalence numbers; pair it
> with `"secondary students"` for the school-survey data.

### Academic Research

```txt
(site:*.edu.au OR site:ourfuturesinstitute.org.au) (youth OR "young people" OR adolescent) (AOD OR "substance use") (prevention OR evaluation) filetype:pdf
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Populations & Intersections](../resources/source-intelligence.md#-populations--intersections) —
  the services and programs every dork above is built on
- **Synonym Block:** [Youth Terms](../05-synonym-blocks.md#-youth-terms)
- **Related Packs:** [Festivals](festivals.md), [Mental Health](mental-health.md),
  [Families & Carers](families-carers.md)
- **Key Orgs:** [YSAS](https://ysas.org.au), [headspace](https://headspace.org.au),
  [Positive Choices](https://positivechoices.org.au)

---

[← Back to Dork Packs](README.md)
