# Mental Health & Dual Diagnosis

> Co-occurring mental health and substance use — named by the actual guideline, service, and centre,
> not just by "dual diagnosis".

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Co-occurring (dual diagnosis) work has named anchors. The single most useful is the Matilda Centre's
**Comorbidity Guidelines**; for acute care, the NSW comorbidity guideline; for services, Turning
Point's **Hamilton Centre** and Victoria's **VDDI** (with NEXUS at St Vincent's). Trauma sits with
**Phoenix Australia**, and the major MH orgs (**Black Dog Institute**, **SANE Australia**, **Beyond
Blue**, **Orygen**) all carry AOD-relevant material.

> **Entity reference:** every guideline and service below is catalogued in
> [Source Intelligence → Populations & Intersections](../resources/source-intelligence.md#populations-intersections).

---

## ⚡ Quick Start

Go to the national co-occurring treatment guidelines:

```txt
site:comorbidityguidelines.org.au "co-occurring alcohol and other drug and mental health conditions"
```

---

## 🟢 Basic Queries

### The Comorbidity Guidelines (Matilda Centre)

```txt
(site:comorbidityguidelines.org.au OR "Guidelines on the management of co-occurring alcohol and other drug and mental health conditions")
```

**Why this works:**

- This is _the_ national guideline for managing co-occurring conditions in AOD settings (Matilda
  Centre, 3rd ed 2022) — quoting it goes straight to the evidence base, not generic "dual diagnosis"

### Named Dual-Diagnosis Services

```txt
(site:turningpoint.org.au OR site:dualdiagnosis.org.au OR site:health.vic.gov.au) ("Hamilton Centre" OR "Victorian Dual Diagnosis Initiative" OR "dual diagnosis")
```

### Dual Diagnosis / Co-occurring (General)

```txt
("dual diagnosis" OR "co-occurring" OR comorbid OR "co-existing") ("mental health" AND ("substance use" OR AOD)) Australia filetype:pdf
```

---

## 🟡 Intermediate Queries

### Clinical Guidelines (Named)

```txt
("Guidelines on the management of co-occurring alcohol and other drug and mental health conditions" OR "For the Care of Persons with Comorbid Mental Illness and Substance Use Disorders in Acute Care Settings")
```

**Why this works:**

- The Matilda Centre guideline (AOD settings) and the NSW Health 2009 guideline (acute care) are the
  two named Australian comorbidity guidelines — exact titles cut straight to them

### Trauma & PTSD (Phoenix Australia)

```txt
(site:phoenixaustralia.org OR "Australian Guidelines for the Prevention and Treatment of Acute Stress Disorder, Posttraumatic Stress Disorder and Complex PTSD") ("substance use" OR "trauma-informed")
```

### Integrated Treatment Models

```txt
("integrated treatment" OR "no wrong door" OR "stepped care") ("mental health" AND ("substance use" OR AOD)) Australia filetype:pdf
```

---

## 🔴 Advanced Queries

### Comprehensive Dual-Diagnosis Sweep

```txt
("dual diagnosis" OR "co-occurring" OR comorbid OR "co-existing") ("mental health" AND ("substance use" OR "drug use" OR AOD)) (treatment OR guideline OR service OR research) Australia filetype:pdf after:2020
```

### Trauma-Informed Care

```txt
("trauma-informed" OR PTSD OR "complex trauma") (AOD OR "alcohol and other drugs" OR "substance use") (framework OR practice OR guideline) Australia filetype:pdf
```

### Service Integration

```txt
("service integration" OR "integrated care" OR "no wrong door" OR "system navigation") ("dual diagnosis" OR "co-occurring") Australia
```

---

## 🧠 Specific Conditions

### Psychosis & Substance Use

```txt
("psychosis" OR "schizophrenia" OR "drug-induced psychosis") ("substance use" OR "drug use" OR methamphetamine) (treatment OR management) Australia filetype:pdf
```

### Anxiety, Depression & ADHD

```txt
("anxiety" OR "depression" OR ADHD OR "borderline personality") "substance use" (co-occurring OR comorbid OR treatment) Australia
```

### Trauma & PTSD

```txt
site:phoenixaustralia.org ("Posttraumatic Stress Disorder" OR "Complex PTSD" OR "substance use")
```

---

## 🏥 Named Guidelines & Services

### Comorbidity Guidelines (Matilda Centre)

```txt
site:comorbidityguidelines.org.au ("co-occurring" OR comorbid OR "alcohol and other drug")
```

### NSW Acute-Care Comorbidity Guideline

```txt
site:health.nsw.gov.au "For the Care of Persons with Comorbid Mental Illness and Substance Use Disorders in Acute Care Settings"
```

### Turning Point — Hamilton Centre

```txt
site:turningpoint.org.au ("Hamilton Centre" OR "co-occurring")
```

### Victorian Dual Diagnosis Initiative (VDDI)

```txt
(site:dualdiagnosis.org.au OR site:health.vic.gov.au) ("Victorian Dual Diagnosis Initiative" OR VDDI OR NEXUS OR "dual diagnosis")
```

---

## ⚠️ Suicide & Self-Harm

> Sensitive content. If you or someone you know needs help, contact **Lifeline (13 11 14)**.

### Suicide, Self-Harm & Substance Use

```txt
("suicide" OR "self-harm" OR "suicidal ideation") ("substance use" OR "drug use" OR overdose) (risk OR prevention OR Australia) filetype:pdf
```

### Crisis Support Orgs

```txt
(site:lifeline.org.au OR site:beyondblue.org.au OR site:sane.org) ("alcohol" OR "substance use" OR "co-occurring")
```

---

## 👥 Peer & Lived-Experience (Mental Health + AOD)

The lived-experience of co-occurring conditions is its own expertise.

### Lived-Experience & Peer Support

```txt
("lived experience" OR "peer support" OR "peer worker") ("dual diagnosis" OR "co-occurring" OR "mental health" AOD) Australia filetype:pdf
```

### Consumer Perspectives

```txt
(site:sane.org OR site:*.org.au) ("consumer" OR "lived experience") ("dual diagnosis" OR "co-occurring") (story OR perspective)
```

---

## 👷 Workforce & Training

### Dual-Diagnosis Capability

```txt
("dual diagnosis capability" OR "co-occurring capability") (training OR framework OR competencies) Australia filetype:pdf
```

### Workforce Resources (VDDI / Turning Point)

```txt
(site:dualdiagnosis.org.au OR site:turningpoint.org.au) ("dual diagnosis" OR "co-occurring") (training OR workforce OR resource)
```

---

## 📊 Research

### Comorbidity Research

```txt
(site:*.edu.au OR site:comorbidityguidelines.org.au) ("comorbidity" OR "dual diagnosis" OR "co-occurring") (prevalence OR treatment OR outcomes) filetype:pdf
```

> The NHMRC Centre of Research Excellence in Mental Health and Substance Use is best searched by
> full name + `"Maree Teesson"` / NDARC / Matilda Centre (the acronym "CREMS" is ambiguous).

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Populations & Intersections](../resources/source-intelligence.md#populations-intersections) — the
  guidelines and services every dork above is built on
- **Synonym Block:** [Mental Health Terms](../05-synonym-blocks.md#mental-health-terms)
- **Related Packs:** [Housing & Homelessness](housing-homelessness.md), [Youth](youth.md),
  [Research](research.md)
- **Key Sources:** [Comorbidity Guidelines](https://comorbidityguidelines.org.au),
  [Turning Point](https://turningpoint.org.au), [Phoenix Australia](https://phoenixaustralia.org)

---

[← Back to Dork Packs](README.md)
