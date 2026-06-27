# Housing, Homelessness & Social Determinants

> The intersection of AOD, housing, and social factors — named by the actual program, peak body, and
> dataset, not just by "homelessness".

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Housing-and-AOD work has named anchors: the AIHW **Specialist Homelessness Services** collection for
the data, **AHURI** for the research, **Homelessness Australia** and the **Council to Homeless
Persons** for advocacy, and named **Housing First** programs like **Journey to Social Inclusion
(J2SI)** (Sacred Heart Mission) and the **Common Ground** supportive-housing model (Launch Housing's
Elizabeth Street Common Ground). For people who use drugs, the street-based and assertive-outreach
end is where housing and harm reduction meet.

> **Entity reference:** every program, peak body, and dataset below is catalogued in
> [Source Intelligence → Populations & Intersections](../resources/source-intelligence.md#populations-intersections).

---

## ⚡ Quick Start

Find the Housing First evidence with the flagship RCT report:

```txt
("Journey to Social Inclusion" OR J2SI OR "Sustaining exits from long-term homelessness")
```

---

## 🟢 Basic Queries

### The Data (AIHW SHS)

```txt
site:aihw.gov.au ("Specialist homelessness services annual report" OR "Specialist Homelessness Services") ("alcohol and other drugs" OR "substance use")
```

**Why this works:**

- The SHS collection is the national homelessness dataset — its AOD breakdowns are the authoritative
  numbers on the housing/AOD overlap

### Housing First Programs

```txt
("Housing First" OR "Journey to Social Inclusion" OR J2SI OR "Common Ground") (alcohol OR drug OR AOD OR "substance use") Australia
```

### Research (AHURI)

```txt
site:ahuri.edu.au ("alcohol and other drugs" OR "substance use" OR "drug use" OR "Housing First")
```

---

## 🟡 Intermediate Queries

### Supportive & Transitional Housing

```txt
("supportive housing" OR "supported accommodation" OR "transitional housing") (AOD OR "alcohol and other drugs" OR "substance use") Australia filetype:pdf
```

### Named Peaks & Providers

```txt
(site:homelessnessaustralia.org.au OR site:chp.org.au OR site:launchhousing.org.au OR site:missionaustralia.com.au) ("alcohol and other drugs" OR "substance use" OR "harm reduction")
```

### Housing Instability & Tenancy

```txt
("housing instability" OR eviction OR tenancy OR "rough sleeping") ("drug use" OR "substance use" OR AOD) Australia
```

---

## 🔴 Advanced Queries

### Comprehensive Housing/AOD Sweep

```txt
("housing" OR "homelessness" OR "accommodation" OR "rough sleeping") ("alcohol and other drugs" OR AOD OR "drug use" OR "substance use") (service OR program OR research OR policy) Australia filetype:pdf after:2020
```

### Housing First Evidence

```txt
("Housing First" OR "Journey to Social Inclusion") (evaluation OR RCT OR outcomes OR "Sustaining exits from long-term homelessness") filetype:pdf
```

### Social Determinants Research

```txt
("social determinants" OR "social exclusion" OR poverty OR unemployment) ("drug use" OR "substance use" OR "people who use drugs") Australia filetype:pdf
```

---

## 🏠 Housing First & Supportive Housing

### Journey to Social Inclusion (J2SI)

```txt
site:sacredheartmission.org ("Journey to Social Inclusion" OR J2SI OR "Sustaining exits from long-term homelessness")
```

### Common Ground (Supportive Housing Model)

```txt
("Elizabeth Street Common Ground" OR "Common Ground Housing Model Practice Manual" OR ("Common Ground" "supportive housing")) Australia
```

> Note: "Common Ground" is a model, not one org — pair it with a named building or the AHURI
> practice manual; the bare term is noisy.

### AHURI Housing Research

```txt
site:ahuri.edu.au ("Final Report" OR "Research Paper") ("substance use" OR "drug use" OR "Housing First")
```

---

## 🏕️ Homelessness Services & Peaks

### Specialist Homelessness Services

```txt
("specialist homelessness services" OR SHS) ("alcohol and other drugs" OR "substance use") (Australia OR data OR report)
```

### Peak Bodies

```txt
(site:homelessnessaustralia.org.au OR site:chp.org.au) (position OR submission OR "alcohol and other drugs" OR policy)
```

### Crisis & Youth Homelessness

```txt
("crisis accommodation" OR "youth homelessness") (drug OR alcohol OR AOD) (service OR policy) Australia
```

---

## 🚶 Outreach & Street-Based

### Assertive & Street Outreach

```txt
("assertive outreach" OR "street-based" OR "street to home" OR "Missionbeat") (drug OR alcohol OR "harm reduction") Australia
```

### Low-Threshold & Drop-In

```txt
("low threshold" OR "drop-in" OR "mobile service") (AOD OR "harm reduction" OR "needle syringe") Australia
```

> For mobile NSP and peer outreach, see the [NSP](nsp.md) pack.

---

## 🔄 Intersections

### Mental Health & Homelessness

```txt
("mental health" OR "dual diagnosis") "homelessness" ("substance use" OR AOD) Australia filetype:pdf
```

### Post-Release & Homelessness

```txt
("post-release" OR "prison release" OR "exiting custody") (homelessness OR housing) (drug OR alcohol) Australia
```

### Family Violence & AOD

```txt
("family violence" OR "domestic violence") (AOD OR "alcohol and other drugs") (housing OR homelessness) Australia
```

---

## 📋 Policy & Programs

### Housing First Policy

```txt
"Housing First" (policy OR program OR implementation OR evaluation) Australia (site:ahuri.edu.au OR filetype:pdf)
```

### No Wrong Door / Integrated Services

```txt
("no wrong door" OR "integrated service") (housing OR homelessness) (AOD OR "mental health") Australia
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Populations & Intersections](../resources/source-intelligence.md#populations-intersections) — the
  programs, peaks, and datasets every dork above is built on
- **Synonym Block:** [Social Determinants Terms](../05-synonym-blocks.md#social-determinants-terms)
- **Related Packs:** [Mental Health](mental-health.md), [NSP](nsp.md),
  [Service Directories](service-directories.md)
- **Key Sources:** [AHURI](https://ahuri.edu.au),
  [Homelessness Australia](https://homelessnessaustralia.org.au),
  [Launch Housing](https://launchhousing.org.au)

---

[← Back to Dork Packs](README.md)
