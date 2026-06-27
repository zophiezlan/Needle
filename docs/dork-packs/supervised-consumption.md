# Supervised Consumption & Overdose Prevention Sites

> Find the evidence, evaluations, and operating models behind Australia's supervised injecting
> services — named by service and by review, not just by keyword.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Australia has exactly **two** supervised injecting services, and an insider knows both by name: the
**Uniting Medically Supervised Injecting Centre (MSIC)** in Kings Cross, Sydney (opened 2001 —
Australia's first), and the **Medically Supervised Injecting Room (MSIR)** in North Richmond,
Melbourne (opened 2018). The single richest evidence trail is their **independent reviews** — the
2020 **Hamilton Review** and the 2023 **Ryan Review** of the North Richmond MSIR.

Terminology is the tell here. Australia says **"medically supervised injecting"** (MSIC / MSIR);
Europe says **"drug consumption room"** (DCR); Canada distinguishes federally sanctioned
**"supervised consumption service"** (SCS) from provincial **"overdose prevention site"** (OPS).
Search the local term for local documents.

> **Entity reference:** every service, review, and domain below is catalogued in
> [Source Intelligence → Supervised Consumption & NSP](../resources/source-intelligence.md#-supervised-consumption--nsp).

---

## ⚡ Quick Start

Find the most recent independent review of the North Richmond service:

```txt
"Review of the Medically Supervised Injecting Room 2023" site:health.vic.gov.au
```

---

## 🟢 Basic Queries

### Uniting MSIC (Sydney, Kings Cross)

```txt
site:uniting.org ("Medically Supervised Injecting Centre" OR MSIC)
```

**Why this works:**

- Goes straight to the operator (Uniting) rather than guessing `.gov.au` wildcards
- The MSIC has run since 2001 and publishes its own data, annual reports, and client material

### North Richmond MSIR (Melbourne)

```txt
site:nrch.com.au ("Medically Supervised Injecting Room" OR MSIR)
```

**Why this works:**

- The MSIR is operated by North Richmond Community Health (with St Vincent's Hospital Melbourne) —
  its own domain carries the service detail, not a generic department page

### NGO & Peer Evidence

```txt
site:*.org.au ("supervised injecting" OR "drug consumption room" OR "supervised consumption") (evaluation OR submission OR review)
```

---

## 📑 The Named Reviews

The North Richmond MSIR has had two independent reviews. Getting the chairs right is the difference
between an expert search and a wrong one.

### Hamilton Review (2020, first review)

```txt
"Review of the Medically Supervised Injecting Room 2020" (Hamilton OR "Margaret Hamilton") site:health.vic.gov.au
```

### Ryan Review (2023, second review)

```txt
"Review of the Medically Supervised Injecting Room 2023" ("John Ryan" OR recommendation) site:health.vic.gov.au
```

**Why this works:**

- The 2020 review was chaired by Professor Margaret Hamilton AO; the 2023 review by John Ryan (10
  recommendations). Pairing the exact report title with the right chair filters precisely — and
  avoids conflating these with Ken Lay's separate Melbourne CBD injecting consultation

---

## 🟡 Intermediate Queries

### Evidence & Outcomes (Australia)

```txt
("Medically Supervised Injecting" OR "supervised injecting") (evaluation OR outcomes OR "cost-benefit" OR "lives saved") (Sydney OR Melbourne OR Australia) filetype:pdf
```

### Business Cases & Community Consultation

```txt
("supervised injecting" OR "drug consumption room") (consultation OR "community engagement" OR "business case") site:*.gov.au
```

### Operating Model & Clinical Governance

```txt
("Medically Supervised Injecting" OR "supervised injecting") ("model of care" OR "clinical governance" OR "operating model" OR staffing) filetype:pdf
```

**Why this works:**

- "Model of care" and "clinical governance" are the sector's own terms for how a service runs —
  searching them surfaces the operational documents, not the opinion pieces

---

## 🔴 Advanced Queries

### Legislation & Regulatory Frameworks

```txt
("Medically Supervised Injecting" OR "supervised injecting") (Act OR legislation OR regulation OR trial OR "regulatory framework") site:*.gov.au filetype:pdf
```

### Parliamentary Inquiries & Submissions

```txt
(site:parliament.nsw.gov.au OR site:parliament.vic.gov.au OR site:aph.gov.au) ("supervised injecting" OR "injecting room" OR MSIC OR MSIR) (inquiry OR submission)
```

### Comprehensive Australian Evidence Sweep

```txt
(MSIC OR MSIR OR "Medically Supervised Injecting" OR "supervised injecting facility") (evaluation OR review OR outcomes OR findings) Australia filetype:pdf after:2018
```

---

## 🌏 International Services & Evidence

Australia has two services; overseas there are decades of operating data and the best comparative
evidence.

### Insite (Vancouver) — North America's First

```txt
site:phs.ca ("Insite" OR "Onsite" OR "supervised injection")
```

> Note: Insite is operated by PHS Community Services Society with Vancouver Coastal Health. Prefer
> `phs.ca` (the operator); `vch.ca` is also valid but blocks automated access. "Onsite" (one word)
> is the detox facility directly above Insite.

### EUDA: Drug Consumption Rooms (European Evidence)

```txt
site:euda.europa.eu "drug consumption rooms"
```

**Why this works:**

- The European Union Drugs Agency (formerly EMCDDA) maintains the standard international evidence
  review — its report _"Drug consumption rooms: an overview of provision and evidence"_ is the
  reference most submissions cite

### International Comparison Sweep

```txt
("drug consumption room" OR "supervised consumption service" OR "overdose prevention site" OR "supervised injection facility") (evaluation OR evidence OR outcomes) filetype:pdf
```

---

## 💬 Peer & Lived-Experience Perspectives

Supervised injecting is a health service, but the case for it was built by — and the day-to-day
reality is best described by — the people who use it and the peers who work in it.

### Client & Peer Experience

```txt
("injecting room" OR "injecting centre" OR MSIC OR MSIR) ("client experience" OR "in their own words" OR "peer worker" OR dignity)
```

### Peer & Drug-User Organisation Positions

```txt
(site:nuaa.org.au OR site:hrvic.org.au OR site:aivl.org.au) ("supervised injecting" OR "injecting room" OR "drug consumption") (position OR submission OR campaign)
```

### Community Discussion & Real-Time Reports

```txt
(site:reddit.com/r/AusDrugs OR site:bluelight.org) (MSIC OR "injecting room" OR "injecting centre" OR "supervised injecting")
```

**Why this works:**

- Forums and peer-org material carry the access-and-dignity side — why people do or don't use a
  service — that an evaluation's outcome tables flatten out

---

## 🏛️ Policy & Advocacy

### Peak-Body Positions

```txt
(site:atoda.org.au OR site:vaada.org.au OR site:nada.org.au) ("supervised injecting" OR "drug consumption" OR "injecting room") (position OR statement OR submission)
```

### Coronial & Overdose Drivers

```txt
("supervised injecting" OR "injecting room" OR "drug consumption room") (coronial OR coroner OR "preventable death" OR recommendation) Australia
```

**Why this works:**

- Both Australian services were established and defended in response to overdose deaths and coronial
  pressure — tying the search to those drivers finds the documents that moved policy

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Supervised Consumption & NSP entities](../resources/source-intelligence.md#-supervised-consumption--nsp)
  — the services, reviews, and domains every dork above is built on
- **Synonym Block:** [Treatment & Service Terms](../05-synonym-blocks.md#-treatment--service-terms)
- **Related Packs:** [NSP](nsp.md), [Coroners & Deaths](coroners-deaths.md),
  [International](international.md), [Policy & Advocacy](policy-advocacy.md)
- **Key Services:** [Uniting MSIC](https://uniting.org), [North Richmond MSIR](https://nrch.com.au),
  [Insite](https://www.phs.ca/program/insite/)

---

[← Back to Dork Packs](README.md)
