# Needle & Syringe Programs (NSP)

> Find the data, delivery models, equipment, and evidence behind Australia's NSPs — named by data
> series and delivery model, not just by keyword.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

NSPs are one of the most cost-effective public-health interventions ever run in Australia — and much
of the reach comes from **peers**: secondary and peer-to-peer distribution gets equipment to people
the fixed sites never see. Lead there, then layer on the official picture.

The named things to know: the Kirby Institute runs **two distinct annual series** — the **Australian
NSP Survey (ANSPS)** (a bio-behavioural serosurvey) and the **NSP National Minimum Data Collection
(NSP NMDC)** (syringes distributed and service counts). The delivery models have precise terms
(**primary / secondary / pharmacy NSP**, **syringe dispensing machine**), and the iconic disposal
kit is the **Fitpack**. Quote those and you skip the generic results.

> **Entity reference:** every data series, model, and domain below is catalogued in
> [Source Intelligence → Supervised Consumption & NSP](../resources/source-intelligence.md#supervised-consumption-nsp).

---

## ⚡ Quick Start

Go straight to the national NSP service/distribution data:

```txt
site:kirby.unsw.edu.au "Needle Syringe Program National Minimum Data Collection"
```

---

## 🟢 Basic Queries

### Kirby NSP Data Reports

```txt
site:kirby.unsw.edu.au ("Needle Syringe Program National Minimum Data Collection" OR "Australian NSP Survey National Data Report")
```

**Why this works:**

- These are Kirby's two exact report-series titles — the NMDC for service/distribution counts, the
  ANSPS for HCV/HIV and risk-behaviour data. Naming them finds the actual data, not commentary

### Peer & State NSP Organisations

```txt
(site:nuaa.org.au OR site:quihn.org OR site:wasua.com.au) ("NSP" OR "needle syringe" OR "NSP equipment")
```

**Why this works:**

- Peer and drug-user organisations deliver a large share of NSP — NUAA's "NSP equipment" mail-out is
  a named example. This is the by-and-with-peers side, not the policy side

### NSW NSP Outlets Map

```txt
site:health.nsw.gov.au/hepatitis "NSP outlets"
```

---

## 🟡 Intermediate Queries

### NSP Delivery Models

```txt
("primary NSP" OR "secondary NSP" OR "pharmacy NSP" OR "syringe dispensing machine") ("needle syringe" OR "injecting equipment") Australia
```

**Why this works:**

- These are the sector's formal model terms (the Kirby NMDC counts each). "Syringe dispensing
  machine" / "automatic dispensing machine" is the expert term — "vending machine" is colloquial and
  misses the official documents

### Secondary & Peer Distribution

```txt
("secondary distribution" OR "peer distribution" OR "peer-to-peer") ("needle syringe" OR "injecting equipment" OR NSP) Australia filetype:pdf
```

### Pharmacy NSP

```txt
("pharmacy NSP" OR "pharmacy" "needle syringe") (guideline OR policy OR "fitpack" OR supply) Australia
```

### State NSP Guidelines

```txt
(site:health.nsw.gov.au OR site:health.vic.gov.au OR site:sahealth.sa.gov.au) ("needle syringe program" OR NSP) (guideline OR policy OR GL2023) filetype:pdf
```

---

## 🔴 Advanced Queries

### Comprehensive NSP Document Sweep

```txt
site:*.gov.au filetype:pdf ("needle syringe program" OR "needle and syringe program" OR NSP) (guideline OR policy OR framework OR manual) after:2020
```

### Syringe Dispensing Machines

```txt
("syringe dispensing machine" OR "automatic dispensing machine" OR ADM) ("needle" OR "injecting equipment") Australia (evaluation OR placement OR access)
```

### Mobile & Outreach NSP

```txt
("mobile NSP" OR "mobile outreach" OR "outreach NSP") ("needle syringe" OR "injecting equipment") Australia
```

### Coverage & Reach Evidence

```txt
("needle syringe program" OR NSP) ("coverage" OR "reach" OR "cost-effectiveness" OR "return on investment") Australia filetype:pdf
```

**Why this works:**

- "Coverage" and "reach" are the epidemiological terms for whether an NSP is meeting need — pairing
  them with cost-effectiveness finds the economic case that has repeatedly justified NSP funding

---

## 📊 NSP Data & Coverage

Two Kirby series, two different jobs — don't conflate them.

### NSP NMDC (Service & Distribution Data)

```txt
site:kirby.unsw.edu.au "Needle Syringe Program National Minimum Data Collection" "National Data Report"
```

### ANSPS (Serosurvey & Risk Behaviour)

```txt
site:kirby.unsw.edu.au ("Australian NSP Survey National Data Report" OR ANSPS)
```

### AIHW & BBV Context

```txt
(site:aihw.gov.au OR site:kirby.unsw.edu.au) ("needle syringe" OR "injecting drug use") ("hepatitis C" OR HCV OR "blood borne virus") data
```

---

## 🧰 Equipment & Consumables

### Fitpack & Sharps Disposal

```txt
("Fitpack" OR "ASP Healthcare" OR "personal sharps container") ("needle syringe" OR NSP OR disposal) site:.au
```

### Safe Disposal Guidance

```txt
("safe disposal" OR "sharps disposal") ("needle" OR "syringe" OR "injecting equipment") (guideline OR information) Australia
```

### Specialised Injecting Equipment

```txt
("low dead space" OR "detachable needle" OR "winged infusion" OR "filter") ("needle syringe" OR NSP) Australia
```

---

## 💬 Peer & Lived-Experience NSP

NSP is, at its core, peer health work. This is the knowledge a distribution spreadsheet misses.

### Peer-Based NSP Models

```txt
(site:*.org.au OR site:nuaa.org.au) ("peer-based" OR "peer-led" OR "peer distribution") ("needle syringe" OR NSP) filetype:pdf
```

### Peer Worker Experience & Training

```txt
("needle syringe" OR NSP) ("peer worker" OR "peer educator") (training OR reflection OR experience) filetype:pdf -jobs
```

### Community Discussion

```txt
(site:reddit.com/r/AusDrugs OR site:bluelight.org) ("NSP" OR "needle exchange" OR "fitpack" OR "safer injecting")
```

---

## 🏛️ Policy & Evidence

### National Policy Context

```txt
site:health.gov.au ("needle and syringe program" OR NSP) (policy OR strategy OR "blood borne virus" OR "National Drug Strategy")
```

> Note: the named "National Needle and Syringe Programs Strategic Framework 2010-2014" is expired;
> current NSP policy now sits inside the National Drug Strategy and the BBV/HIV/hepatitis
> strategies.

### Academic & Systematic Evidence

```txt
(site:unsw.edu.au OR site:ndri.curtin.edu.au OR site:burnet.edu.au) ("needle syringe program" OR "needle exchange") (effectiveness OR "cost-effectiveness" OR coverage) filetype:pdf
```

### Cochrane / Systematic Reviews

```txt
site:cochranelibrary.com ("needle syringe" OR "needle exchange" OR "harm reduction")
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Supervised Consumption & NSP entities](../resources/source-intelligence.md#supervised-consumption-nsp)
  — the data series, models, and domains every dork above is built on
- **Synonym Block:** [NSP Terms](../05-synonym-blocks.md#nsp-terms-needle-syringe-program)
- **Related Packs:** [Supervised Consumption](supervised-consumption.md),
  [Peer Workforce](peer-workforce.md), [Data & Statistics](data-statistics.md)
- **Key Sources:** [Kirby Institute](https://kirby.unsw.edu.au), [NUAA](https://nuaa.org.au)

---

[← Back to Dork Packs](README.md)
