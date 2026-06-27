# Policy, Inquiries & Advocacy

> Find the strategy, the inquiry, and the peak-body position — named by the actual document and
> organisation, not just by keyword.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Drug policy in Australia turns on named documents: the **National Drug Strategy 2017-2026**, the NSW
**Special Commission of Inquiry into the Drug 'Ice'**, the **2024 NSW Drug Summit**, and the ACT's
**Drugs of Dependence (Personal Use) Amendment Act 2022** (decriminalisation). The sector speaks
through named peak bodies — the national **AADC** and the state networks (**NADA**, **VAADA**,
**QNADA**, **WANADA**, **SANDAS**, **ATODA**, **ATDC**, **AADANT**) — and reform is driven by named
campaigns like Uniting's **Fair Treatment**.

Lead with the people most affected: drug-user organisations (**AIVL**, **NUAA**) and reform groups
(**Unharm**, **SSDP**, **Harm Reduction Australia**) put the lived-experience case that government
documents leave out.

> **Entity reference:** every strategy, inquiry, and organisation below is catalogued in
> [Source Intelligence → Policy, Inquiries & Advocacy](../resources/source-intelligence.md#-policy-inquiries--advocacy).

---

## ⚡ Quick Start

Find the landmark NSW inquiry and its 109 recommendations:

```txt
"Special Commission of Inquiry into the Drug 'Ice'" site:nsw.gov.au
```

---

## 🟢 Basic Queries

### The National Drug Strategy

```txt
site:health.gov.au "National Drug Strategy 2017-2026"
```

**Why this works:**

- Goes to the exact framework (note the en-dash in the cover title, hyphen in the URL) — the spine
  every state strategy maps back to

### Peak-Body Positions

```txt
(site:aadc.org.au OR site:nada.org.au OR site:vaada.org.au OR site:qnada.org.au) (position OR submission OR statement)
```

**Why this works:**

- The state AOD peak bodies (and the national AADC) publish the sector's formal positions — naming
  their domains beats a generic `.org.au` sweep

### Drug-User Organisation Advocacy

```txt
(site:aivl.org.au OR site:nuaa.org.au) (submission OR position OR campaign OR "drug law reform")
```

---

## 🟡 Intermediate Queries

### Named Inquiries & Summits

```txt
("Special Commission of Inquiry into the Drug 'Ice'" OR "2024 New South Wales Drug Summit" OR "Inquiry into crystal methamphetamine (ice)")
```

**Why this works:**

- These are the three most-cited recent inquiries; quoting their exact titles finds the reports and
  the government responses, not commentary

### Parliamentary Submissions

```txt
site:aph.gov.au inurl:submissions ("drug policy" OR "harm reduction" OR "drug law reform") filetype:pdf
```

### Current Consultations

```txt
site:*.gov.au ("call for submissions" OR "public consultation") ("harm reduction" OR "alcohol and other drugs") ("closing date" OR open) after:2025
```

### ACT Decriminalisation

```txt
"Drugs of Dependence (Personal Use) Amendment Act 2022" site:legislation.act.gov.au
```

---

## 🔴 Advanced Queries

### Comprehensive Policy Sweep

```txt
site:*.gov.au filetype:pdf ("National Drug Strategy" OR "drug strategy" OR "harm reduction" OR "alcohol and other drugs") (strategy OR framework OR "action plan" OR review) after:2022
```

### Decriminalisation & Reform Documents

```txt
(decriminalisation OR "decriminalization" OR "depenalisation" OR "drug law reform" OR "legal regulation") Australia (analysis OR evaluation OR model OR submission) filetype:pdf
```

### Government Responses to Inquiries

```txt
("government response" OR "implementation") ("Drug Summit" OR "Special Commission of Inquiry" OR "drug policy") (NSW OR Australia) filetype:pdf
```

**Why this works:**

- Recommendations only matter if acted on — pairing an inquiry with "government response" finds the
  follow-through (or the lack of it)

---

## 🏛️ Landmark Inquiries & Strategy

The named documents — verified titles and hosts.

### NSW Ice Inquiry (2020)

```txt
"Special Commission of Inquiry into the Drug 'Ice'" ("Dan Howard" OR recommendations) site:nsw.gov.au
```

### 2024 NSW Drug Summit

```txt
site:health.nsw.gov.au "Report on the 2024 New South Wales Drug Summit"
```

### Federal Ice Inquiry

```txt
site:aph.gov.au "Inquiry into crystal methamphetamine (ice)"
```

### National Drug Strategy

```txt
site:health.gov.au "National Drug Strategy 2017-2026" filetype:pdf
```

---

## ✊ Peak Bodies & Reform Organisations

### State & National Peak Bodies

```txt
(site:aadc.org.au OR site:atoda.org.au OR site:nada.org.au OR site:vaada.org.au OR site:qnada.org.au OR site:wanada.org.au OR site:sandas.org.au OR site:atdc.org.au OR site:aadant.org.au) (submission OR position OR "pre-budget")
```

### Drug-Law-Reform Campaigns

```txt
(site:fairtreatment.org OR site:unharm.org OR site:ssdp.org.au OR site:harmreductionaustralia.org.au OR site:adlrf.org.au) ("drug law reform" OR campaign OR submission)
```

**Why this works:**

- Uniting's "Fair Treatment", Unharm, SSDP Australia, HRA and the ADLRF are the named reform
  vehicles — note `fairtreatment.org` and `unharm.org` are `.org`, not `.org.au`

### Think-Tank & Evidence Reform

```txt
(site:australia21.org.au OR site:penington.org.au) ("drug policy" OR "drug law reform" OR "Drug Policy Reform")
```

---

## 💬 Peer & Lived-Experience Advocacy

Policy made without people who use drugs is the problem these voices name.

### Peer-Body Submissions

```txt
(site:aivl.org.au OR site:nuaa.org.au) (submission OR "position statement") (inquiry OR consultation OR "drug summit")
```

### "Nothing About Us Without Us"

```txt
"nothing about us without us" ("drug policy" OR "drug law reform" OR "harm reduction") Australia filetype:pdf
```

### Human-Rights Approaches

```txt
("drug policy" OR "harm reduction") "human rights" (framework OR approach OR Australia) filetype:pdf
```

---

## 🌏 International Policy

### Decriminalisation Models

```txt
(decriminalisation OR "legal regulation") (Portugal OR "British Columbia" OR Switzerland) ("drug policy" OR lessons OR evaluation) filetype:pdf
```

### UN & WHO Policy

```txt
(site:unodc.org OR site:who.int) ("drug policy" OR "harm reduction") (guidelines OR standards)
```

> See the [International](international.md) pack for the named overseas agencies and laws.

---

## 📅 Tracking Current Consultations

### Open Consultations

```txt
site:*.gov.au inurl:consultation ("harm reduction" OR "drug policy" OR "alcohol and other drugs") ("closing date" OR open) after:2025
```

### Recent Submissions

```txt
site:*.gov.au inurl:submissions ("harm reduction" OR "drug policy") after:2025
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Policy, Inquiries & Advocacy](../resources/source-intelligence.md#-policy-inquiries--advocacy) —
  the strategy, inquiries, and organisations every dork above is built on
- **Synonym Block:** [Policy Terms](../05-synonym-blocks.md#-policy-terms)
- **Related Packs:** [Research](research.md), [International](international.md),
  [Coroners & Deaths](coroners-deaths.md)
- **Key Orgs:** [AADC](https://aadc.org.au), [AIVL](https://aivl.org.au),
  [Fair Treatment](https://fairtreatment.org)

---

[← Back to Dork Packs](README.md)
