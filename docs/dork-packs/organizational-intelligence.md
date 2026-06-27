# Organizational Intelligence & Infrastructure

> The behind-the-scenes of how harm reduction is governed and funded — named by the actual register
> and document type (ACNC AIS, GrantConnect, AusTender), not `site:*.gov.au "annual report"`.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

How an organisation is governed and funded lives in named **registers**, and naming the register is
the whole game. Charities lodge an **Annual Information Statement** with the **ACNC** (even when
they publish no annual report); Commonwealth grants appear as **Grant Award** notices on
**GrantConnect**; contracts appear as **Contract Notices** on **AusTender**; Primary Health Networks
publish **Activity Work Plans**. Replace the generic `"annual report" filetype:pdf` template with
those exact terms and you find the structured record, not just the glossy PDF.

> **Entity reference:** every register and document type below is catalogued in
> [Source Intelligence → Organisational Intelligence & Registers](../resources/source-intelligence.md#-organisational-intelligence--registers).

---

## ⚡ Quick Start

Find a charity's mandatory annual statement on the ACNC register:

```txt
site:acnc.gov.au "Annual Information Statement" ("harm reduction" OR "alcohol and other drugs")
```

---

## 🟢 Basic Queries

### Charity Register (ACNC AIS)

```txt
site:acnc.gov.au ("Annual Information Statement" OR "Charity Register") ("harm reduction" OR AOD OR "drug")
```

**Why this works:**

- Charities _must_ lodge an **Annual Information Statement** with the ACNC even if they never
  publish a conventional annual report — the AIS is the reliable, structured record

### Annual Reports & Strategic Plans

```txt
("annual report" OR "strategic plan" OR "corporate plan") "harm reduction" filetype:pdf
```

### Business & DGR Register (ABN Lookup)

```txt
site:abr.business.gov.au ("Australian Business Number" OR "deductible gift recipient")
```

---

## 🟡 Intermediate Queries

### Commonwealth Grants Awarded (GrantConnect)

```txt
site:grants.gov.au ("Grant Award" OR "/ga/") ("alcohol and other drugs" OR "harm reduction" OR AOD)
```

**Why this works:**

- Awarded Commonwealth grants are published as **Grant Award (GA)** notices on GrantConnect
  (`grants.gov.au/ga/list`) — this is _who got funded_, not just who's pitching

### Government Contracts (AusTender)

```txt
site:tenders.gov.au ("Contract Notice" OR "/cn/") ("harm reduction" OR AOD OR "drug and alcohol")
```

### Tenders & Service Specifications

```txt
(tender OR "request for proposal" OR "service specification" OR "funding agreement") ("harm reduction" OR AOD) site:*.gov.au filetype:pdf
```

### Governance Documents

```txt
(constitution OR "governance framework" OR "terms of reference" OR "board") "harm reduction" site:*.org.au
```

### Partnerships & MOUs

```txt
("memorandum of understanding" OR MOU OR "partnership agreement") ("harm reduction" OR AOD)
```

---

## 🔴 Advanced Queries

### PHN Activity Work Plans (Commissioning)

```txt
("Activity Work Plan" OR "Drug and Alcohol Treatment Services Activity Work Plan" OR "Health Needs Assessment") (AOD OR "alcohol and other drugs") filetype:pdf
```

**Why this works:**

- There's no national register of PHN plans — each of the 31 PHNs publishes its own **Activity Work
  Plan** as a PDF, so the exact document-type string + `filetype:pdf` is how you sweep them all

### Reconciliation Action Plans

```txt
"Reconciliation Action Plan" (AOD OR "alcohol and other drugs" OR "harm reduction" OR health) filetype:pdf
```

### Comprehensive Governance Sweep

```txt
(site:*.org.au OR site:*.gov.au) "harm reduction" ("annual report" OR "strategic plan" OR "board" OR governance OR constitution) filetype:pdf
```

### Budget & Financial Documents

```txt
("financial statements" OR "audited accounts" OR "budget paper" OR "annual accounts") ("harm reduction" OR AOD) filetype:pdf
```

### Evaluations & Reviews

```txt
(evaluation OR "program review" OR "independent review") ("harm reduction" OR AOD) (recommendations OR findings) filetype:pdf
```

### FOI Releases

```txt
site:*.gov.au ("freedom of information" OR FOI OR "released under FOI") ("harm reduction" OR "drug and alcohol")
```

---

## 🏛️ Government Funding & Commissioning

The named Commonwealth registers, in one place.

### GrantConnect — Awarded & Open

```txt
site:grants.gov.au ("Grant Award" OR "forecast opportunity" OR "grant opportunity") (AOD OR "alcohol and other drugs" OR "harm reduction")
```

### AusTender — Contract Notices

```txt
site:tenders.gov.au "Contract Notice" ("harm reduction" OR AOD OR "needle" OR naloxone)
```

### Community Grants Hub

```txt
site:communitygrants.gov.au ("grant opportunity guidelines" OR program) (AOD OR "drug and alcohol")
```

### State Health Procurement

```txt
site:*.health.*.gov.au (tender OR procurement OR "expression of interest" OR EOI) ("harm reduction" OR AOD)
```

### Funding Recipients

```txt
("funding recipients" OR "successful applicants" OR "grants awarded") ("harm reduction" OR AOD) (site:*.gov.au OR site:grants.gov.au)
```

---

## 📋 Document-Type Patterns

Quick-copy patterns — combine with an org name or `site:`.

### Organisational

```txt
("Annual Information Statement" OR "annual report" OR "strategic plan" OR constitution OR "terms of reference")
```

### Funding

```txt
("Grant Award" OR "Contract Notice" OR "funding agreement" OR "expression of interest" OR EOI OR deliverables)
```

### Workforce

```txt
("position description" OR "workforce strategy" OR "competency framework" OR "FTE")
```

### Evaluation

```txt
(evaluation OR review OR audit OR "independent review")
```

---

## 🔍 Organization-Specific Deep Dives

### All Documents from One Org

```txt
site:aivl.org.au filetype:pdf
```

```txt
site:nuaa.org.au ("annual report" OR "Annual Information Statement" OR "strategic plan" OR policy)
```

### Comparing Organisations

```txt
("annual report" OR "Annual Information Statement") (AIVL OR NUAA OR "Harm Reduction Victoria" OR QuIHN) filetype:pdf
```

### Tracking Change Over Time

```txt
site:web.archive.org/web/*/aivl.org.au "strategic plan"
```

> Pair with the [Temporal Intelligence pack](temporal-intelligence.md) to recover superseded plans
> and removed reports.

---

## 🌏 State / Territory Sweeps

```txt
(site:*.nsw.gov.au OR site:*.vic.gov.au OR site:*.qld.gov.au) ("harm reduction" OR AOD) ("annual report" OR strategy OR tender)
```

```txt
site:*.health.*.gov.au ("harm reduction" OR AOD) ("annual report" OR strategy OR "Activity Work Plan")
```

---

## ⚠️ Considerations

- **Sensitivity & ethics:** some organisational documents are internal for good reason — don't
  misuse access; cross-reference with official public statements.
- **Currency:** strategies and work plans expire — check the period in the title.
- **Registers vs PDFs:** the registers (ACNC, GrantConnect, AusTender) carry the structured data;
  the org's own `site:` carries the narrative PDFs. Use both.

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Organisational Intelligence & Registers](../resources/source-intelligence.md#-organisational-intelligence--registers)
  — the registers and document types every dork above is built on
- **Related Packs:** [Policy & Advocacy](policy-advocacy.md), [Research](research.md),
  [Temporal Intelligence](temporal-intelligence.md)
- **Domain Map:** [Government Domains](../04-domain-map.md)
- **Key Registers:** [ACNC](https://acnc.gov.au), [GrantConnect](https://grants.gov.au),
  [AusTender](https://tenders.gov.au)

---

[← Back to Dork Packs](README.md)
