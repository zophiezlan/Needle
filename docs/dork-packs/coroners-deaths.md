# Coroners, Inquests & Death Data

> Find coronial findings, recommendations, and overdose mortality data — named by court, by document
> genre, and by dataset, not just by keyword.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## ⚠️ Sensitivity Note

This pack deals with death data and coronial findings. These searches can surface distressing
content, including details of individual deaths.

**Take care of yourself**, consider your purpose, and handle results — especially anything naming an
individual — with respect for the people and families behind the data.

---

## 👥 About This Pack

The expert move in coronial searching is to know the **document genre** and the **system**. The
genre is `"findings"` — not "report" — with jurisdiction-specific variants: Victoria publishes a
`"finding without inquest"`, Queensland publishes `"non-inquest findings"`, and
`"inquest into the death of [name]"` is a high-precision title pattern across every state. The
systems are the **National Coronial Information System (NCIS)**, the Victorian **Coroners Prevention
Unit (CPU)**, and the death datasets from **AIHW**, the **ABS**, and **Penington Institute**.

For harm reduction, coronial **recommendations** matter most: naloxone access, drug checking, and
the injecting rooms all advanced on the back of them — and agencies must formally respond.

> **Entity reference:** every court, system, and dataset below is catalogued in
> [Source Intelligence → Coroners, Inquests & Death Data](../resources/source-intelligence.md#coroners-inquests-death-data).

---

## ⚡ Quick Start

Find drug-related coronial recommendations from the national system and courts:

```txt
("inquest into the death of" OR "coronial findings") (drug OR overdose) recommendation Australia
```

---

## 🟢 Basic Queries

### The National Coronial Information System (NCIS)

```txt
site:ncis.org.au ("NCIS Fact Sheet" OR "data report" OR drug OR overdose)
```

**Why this works:**

- NCIS is the national database of coronial deaths. Its full data is access-controlled, but the
  published `"NCIS Fact Sheet"` and `"data report"` series are public — naming them finds the
  figures

### Coronial Findings (the Document Genre)

```txt
("inquest into the death of" OR "finding without inquest" OR "non-inquest findings") (drug OR overdose OR substance)
```

**Why this works:**

- These are the actual coronial document types — far more precise than the generic word "report".
  Bare "findings" is too noisy; these phrases are not

### Coroners Court of Victoria

```txt
site:coronerscourt.vic.gov.au ("Coroners Prevention Unit" OR "finding without inquest" OR overdose)
```

---

## 🟡 Intermediate Queries

### Coroners Prevention Unit (Victoria)

```txt
"Coroners Prevention Unit" (overdose OR drug OR "drug-related") (finding OR recommendation OR data)
```

**Why this works:**

- Victoria's CPU is a specialist unit that analyses reportable deaths for prevention — it produces
  some of the most detailed overdose-death analysis in the country

### Recommendations & Government Responses

```txt
coroner (recommendation OR "recommend") ("harm reduction" OR naloxone OR "drug checking" OR "supervised injecting") (response OR implementation)
```

**Why this works:**

- Coroners make recommendations and agencies must respond in writing — pairing "recommendation" with
  "response" finds both the lever and whether it was acted on

### Cluster & Spike Investigations

```txt
(overdose OR "drug death") (cluster OR spike OR surge OR "enhanced surveillance") (investigation OR "public health response") Australia
```

---

## 🔴 Advanced Queries

### Comprehensive Coronial Sweep

```txt
(coroner OR coronial OR inquest) (drug OR overdose OR opioid OR substance) ("finding without inquest" OR "non-inquest findings" OR recommendation) Australia filetype:pdf after:2020
```

### Prevention-Focused Findings

```txt
coroner (prevention OR "preventable death" OR recommendation) (drug OR overdose) ("harm reduction" OR naloxone OR "drug checking") Australia
```

### Systemic Issues & Failures

```txt
coronial ("systemic issues" OR "systemic failures" OR "missed opportunities") (drug OR overdose) Australia
```

---

## 📍 State & Territory Coroners Courts

Each jurisdiction publishes findings on its own host — and several are easy to get wrong. These are
the current, correct domains.

### New South Wales

```txt
site:coroners.nsw.gov.au ("Coronial findings and recommendations" OR inquest) (drug OR overdose)
```

### Victoria

```txt
site:coronerscourt.vic.gov.au ("finding without inquest" OR inquest) (drug OR overdose)
```

### Queensland

```txt
site:coronerscourt.qld.gov.au ("Non-inquest findings" OR "inquest into the death of") (drug OR overdose)
```

> Note: use `coronerscourt.qld.gov.au`, not `courts.qld.gov.au` — the canonical findings host
> changed.

### Western Australia

```txt
site:coronerscourt.wa.gov.au ("Inquest Findings" OR "inquest into the death of") (drug OR overdose)
```

### South Australia

```txt
site:courts.sa.gov.au/court-decisions/coroners-findings (drug OR overdose OR substance)
```

### Australian Capital Territory

```txt
site:courts.act.gov.au coroner (drug OR overdose) (findings OR inquest)
```

### Northern Territory

```txt
(site:nt.gov.au OR site:agd.nt.gov.au) coroner ("coronial findings" OR inquest) (drug OR overdose)
```

> Note: the NT publishes coronial findings across several government hosts — query both `nt.gov.au`
> and the Attorney-General's Department `agd.nt.gov.au` rather than a single fixed path.

### Tasmania

```txt
site:magistratescourt.tas.gov.au/coronerscourt ("Coronial Findings" OR "findings, comments and recommendations") (drug OR overdose)
```

---

## 📊 Drug-Induced Death Data

`"drug-induced deaths"` is the precise, shared term used by the ABS and AIHW — quote it.

### AIHW Drug-Induced Deaths

```txt
site:aihw.gov.au ("Alcohol, tobacco & other drugs in Australia" OR "drug-induced deaths")
```

### ABS Causes of Death

```txt
site:abs.gov.au "Causes of Death, Australia" "drug-induced deaths"
```

### Penington Institute Annual Overdose Report

```txt
site:penington.org.au "Australia's Annual Overdose Report" (opioid OR data OR filetype:pdf)
```

**Why this works:**

- The ABS is the upstream source; AIHW and Penington both build on it. Penington's report aggregates
  ABS/coronial data into the most-cited national overdose picture — quoting the exact titles finds
  the numbers rather than commentary

---

## 💊 Specific Substances & Death

### Opioids & Pharmaceutical Opioids

```txt
("opioid" OR oxycodone OR fentanyl OR codeine OR heroin) (death OR overdose) Australia (coroner OR "drug-induced deaths")
```

### Stimulants

```txt
("methamphetamine" OR "ice" OR cocaine OR MDMA) (death OR overdose) Australia (coroner OR data)
```

### Emerging Substances

```txt
("nitazene" OR "isotonitazene" OR "protonitazene" OR "synthetic opioid") (death OR coronial OR toxicity) Australia
```

### Polydrug Toxicity

```txt
("polydrug" OR "polydrug toxicity" OR "multiple drug toxicity" OR "benzodiazepine" "opioid") (death OR overdose) Australia
```

---

## 📋 Recommendations as Harm-Reduction Levers

Coronial recommendations are how harm-reduction measures get onto the policy agenda. These searches
trace the lever and the follow-through.

### Naloxone & Overdose Prevention

```txt
coroner recommendation (naloxone OR "take-home naloxone" OR "overdose prevention") (drug OR opioid) Australia
```

### Drug Checking & Festival Deaths

```txt
coroner (recommendation OR inquest) ("drug checking" OR "pill testing") (festival OR "music festival" OR MDMA) Australia
```

### Post-Release & Custody Deaths

```txt
("post-release" OR "release from custody" OR "death in custody") (overdose OR drug OR withdrawal) (coroner OR recommendation OR prevention) Australia
```

**Why this works:**

- Post-release overdose is one of the most preventable death patterns and a recurring coronial theme
  — tying it to "recommendation" or "prevention" finds the documents that argue for
  naloxone-on-release and continuity of treatment

---

## 💬 Affected Communities & Lived Experience

Behind the data are families, friends, and peers. Their voices belong in prevention — and are easy
to miss in a statistics-only search.

### Families & Affected Others

```txt
(overdose OR "drug-related death") ("family" OR "affected family" OR "bereaved" OR "in memory") (story OR support OR Australia)
```

### Peer & Community Grief and Response

```txt
(overdose OR "drug death") ("peer" OR "community response" OR "remembrance" OR "International Overdose Awareness Day") Australia
```

**Why this works:**

- International Overdose Awareness Day and peer-org remembrance material carry the lived-experience
  and family voice that coronial data abstracts away — important context for advocacy, handled with
  care

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Coroners, Inquests & Death Data entities](../resources/source-intelligence.md#coroners-inquests-death-data)
  — the courts, systems, and datasets every dork above is built on
- **Related Packs:** [Naloxone](naloxone.md), [Novel Substances](novel-substances.md),
  [Data & Statistics](data-statistics.md), [Drug Alerts](drug-alerts.md)
- **Key Sources:** [NCIS](https://www.ncis.org.au), [AIHW](https://aihw.gov.au),
  [Penington Institute](https://penington.org.au)

---

[← Back to Dork Packs](README.md)
