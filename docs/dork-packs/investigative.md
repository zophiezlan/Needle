# Creative & Investigative Searching

> Surface buried, unlinked, and historical documents through directory mining, FOI logs, and named
> registers — creative dorking with an ethical frame. Use responsibly.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## ⚠️ Ethical Framework

> These techniques can surface obscure or "hidden" information. Before using them:

1. **Ask:** Is there a legitimate harm-reduction purpose?
2. **Consider:** Could this information cause harm if misused?
3. **Check:** Does your organisation have policies on investigative research?
4. **Protect:** Never expose personal data or breach privacy.
5. **Document:** Keep records of what you searched and why.

**The purpose is always to help people who use drugs, support advocacy, or hold systems accountable
— never to harm individuals or organisations.**

---

## 👥 About This Pack

This pack is technique-driven, but the techniques sharpen when pointed at _named_ things: the FOI
**disclosure log**, the **AusTender** Contract Notice, the **Australian Web Archive** for a deleted
page. Directory mining (`inurl:/publications/`, `intitle:"index of"`) finds documents that exist but
were never linked; the registers and archives give you a known target to mine.

> **Entity reference:** the registers and archives these techniques target are catalogued in
> [Source Intelligence → Discovery Platforms & File Types](../resources/source-intelligence.md#-discovery-platforms--file-types),
> [→ Organisational Intelligence & Registers](../resources/source-intelligence.md#-organisational-intelligence--registers),
> and
> [→ Web Archives & Temporal Search](../resources/source-intelligence.md#-web-archives--temporal-search).

---

## ⚡ Quick Start

Find unlinked PDFs sitting in government publication directories:

```txt
site:*.gov.au inurl:"/publications/" filetype:pdf "harm reduction" -inurl:html
```

---

## 🟢 Basic Queries

### Directory & Index Mining

```txt
site:*.gov.au (inurl:"/publications/" OR inurl:"/uploads/" OR inurl:"/documents/") filetype:pdf ("harm reduction" OR drug OR overdose)
```

**Why this works:**

- Documents are often uploaded to asset directories but never linked from a navigable page — mining
  the directory path surfaces them

### Draft & Working Documents

```txt
site:*.gov.au filetype:pdf (draft OR "working paper" OR "discussion paper") "harm reduction" -"final"
```

### Conference Presentations

```txt
(filetype:pptx OR filetype:ppt) "harm reduction" Australia
```

---

## 🟡 Intermediate Queries

### Open Directories

```txt
site:*.gov.au intitle:"index of" ("harm reduction" OR drug OR AOD)
```

### Internal / Unpublished

```txt
site:*.gov.au filetype:pdf ("internal use only" OR "not for distribution" OR "for official use") ("drug" OR "alcohol and other drugs") -"de-identified"
```

### Embargoed / Pre-Release

```txt
site:*.gov.au filetype:pdf (embargoed OR "pre-release" OR "under embargo") ("drug policy" OR "harm reduction")
```

---

## 🔴 Advanced Queries

### Comprehensive Directory Mining

```txt
site:*.gov.au (inurl:"/publications/" OR inurl:"/uploads/" OR inurl:"/documents/" OR inurl:"/assets/" OR inurl:"/files/") filetype:pdf ("harm reduction" OR "drug policy" OR "alcohol and other drugs") -inurl:html
```

### Tenders & Funding (Named Registers)

```txt
(site:tenders.gov.au "Contract Notice") OR (site:grants.gov.au "Grant Award") OR (site:*.gov.au filetype:pdf ("funding agreement" OR "request for tender") AOD)
```

**Why this works:**

- Instead of a vague `tender "harm reduction"`, this hits the actual award genres — **AusTender**
  Contract Notices and **GrantConnect** Grant Awards (see the Organizational Intelligence pack)

### Meeting Minutes & Committees

```txt
site:*.gov.au filetype:pdf ("meeting minutes" OR agenda OR "steering committee" OR "working group") ("harm reduction" OR "alcohol and other drugs")
```

---

## 📋 FOI (Freedom of Information)

### Disclosure Logs

```txt
("disclosure log" OR "FOI disclosure log") site:*.gov.au ("drug" OR "harm reduction" OR "alcohol and other drugs")
```

**Why this works:**

- Agencies publish a **disclosure log** of released FOI documents — searching it by name finds
  material already cleared for release but never publicised

### FOI Releases

```txt
site:*.gov.au (inurl:foi OR "released under FOI" OR "freedom of information") ("overdose" OR "drug checking" OR "harm reduction") filetype:pdf
```

---

## 📜 Legacy & Archived Content

When a document is gone from the live site, go to the archive.

### Australian Web Archive & Wayback

```txt
(site:webarchive.nla.gov.au OR site:trove.nla.gov.au OR site:web.archive.org) ("harm reduction" OR "needle exchange") (Australia OR *.gov.au)
```

> See the [Temporal Intelligence pack](temporal-intelligence.md) for the full recovery workflow
> (Google's `cache:` operator is dead — use Wayback / archive.today instead).

### Historical Policy Documents

```txt
site:*.gov.au "harm reduction" 1990..2005 filetype:pdf
```

---

## 🔍 Buried Evaluations

### Hidden Evaluations & Reviews

```txt
site:*.gov.au filetype:pdf (evaluation OR review OR "process evaluation" OR "outcome evaluation") ("harm reduction" OR "needle syringe program") -news
```

### Cost-Effectiveness (Often Buried)

```txt
("cost-effectiveness" OR "cost-benefit" OR "economic evaluation" OR "return on investment") ("harm reduction" OR "needle syringe" OR naloxone) Australia filetype:pdf
```

---

## 🗣️ Minority Reports & Dissent

### Dissenting Views

```txt
("minority report" OR "dissenting opinion" OR "additional comments" OR "supplementary submission") ("drug policy" OR "drug law reform") Australia
```

### Alternative Perspectives

```txt
("alternative view" OR "contrary evidence" OR "additional comments") ("drug law reform" OR "harm reduction") (inquiry OR submission)
```

---

## 🔧 URL Pattern Tricks

### Common Directory Patterns

```txt
(inurl:publications OR inurl:submissions OR inurl:reports OR inurl:resources) (site:*.gov.au OR site:*.org.au) filetype:pdf ("harm reduction" OR AOD)
```

### Asset Directories

```txt
(inurl:/assets/ OR inurl:/uploads/ OR inurl:/files/) site:*.gov.au filetype:pdf ("drug" OR "harm reduction")
```

---

## ⚖️ When to Use These Techniques

**Appropriate uses:**

- Finding official documents that should be public but aren't linked
- Locating historical policy documents for research
- Finding evaluation reports that weren't publicised
- Accessing minutes from public committees
- Researching funding/tender processes for advocacy

**Inappropriate uses:**

- Finding personal information about individuals
- Accessing content that's clearly private/confidential
- Circumventing legitimate access controls
- Any purpose that could harm people who use drugs

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Discovery Platforms & File Types](../resources/source-intelligence.md#-discovery-platforms--file-types),
  [Organisational Intelligence & Registers](../resources/source-intelligence.md#-organisational-intelligence--registers)
- **Advanced Operators:** [Advanced Operators](../03-advanced-operators.md)
- **Related Packs:** [Document Discovery](document-discovery.md),
  [Organizational Intelligence](organizational-intelligence.md),
  [Temporal Intelligence](temporal-intelligence.md)

---

[← Back to Dork Packs](README.md)
