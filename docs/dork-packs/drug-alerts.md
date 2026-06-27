# Drug Alerts & Early Warning

> Real-time monitoring for high-strength, contaminated, or unexpected substances — named by the
> system that issues the alert, not just by keyword.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

There is now one national place to look first: **The Know** (`theknow.org.au`) — "Australian drug
alerts, all in one place", the public face of the **Prompt Response Network**. After that, every
state issues alerts under its _own_ term, and quoting the right one is the whole game: NSW publishes
**"Public drug warnings"**, Victoria **"Drug alerts"**, the ACT a **"Public Health Alert"**, the NT
**"Health alerts"**, Tasmania **"Alerts and pop-up notifications"**. Queensland and WA have no clean
public street-drug alert index — route those through The Know.

Peers are often first: **NUAA** and community forums relay batch warnings before a department page
updates. Lead with them, then cross-check against the official systems.

> **Entity reference:** every alert system, term, and domain below is catalogued in
> [Source Intelligence → Drug Alerts & EWS](../resources/source-intelligence.md#drug-alerts-early-warning-systems-ews).

---

## ⚡ Quick Start

Check the national aggregator first:

```txt
site:theknow.org.au ("drug alert" OR "drug warning")
```

---

## 🟢 Basic Queries

### The Know (National Aggregator)

```txt
site:theknow.org.au ("drug alert" OR "Prompt Response Network" OR nitazene)
```

**Why this works:**

- The Know aggregates alerts from every state/territory into one place — it's the single best
  national starting point, and the "Prompt Response Network" is the institutional name behind it

### NSW Public Drug Warnings

```txt
site:health.nsw.gov.au/aod ("Public drug warnings" OR "public drug alert")
```

**Why this works:**

- NSW Health's consumer term is "Public drug warnings" (the `/aod/public-drug-alerts/` path); the
  clinician-facing equivalent is "Clinical safety alerts" — naming the exact term skips the noise

### Victorian Drug Alerts

```txt
site:health.vic.gov.au ("drug alert" OR "drug advisory")
```

### Peer-Relayed Alerts (NUAA)

```txt
site:nuaa.org.au ("drug alert" OR "drug warning" OR batch)
```

---

## 🟡 Intermediate Queries

### Specific Substance Alerts

```txt
("drug alert" OR "drug warning" OR "public health alert") ("nitazene" OR "xylazine" OR "high-dose MDMA" OR "fentanyl") (site:theknow.org.au OR site:*.gov.au)
```

### Alerts as Official PDFs

```txt
site:*.gov.au filetype:pdf ("drug warning" OR "health alert" OR "drug alert") (nitazene OR "synthetic opioid" OR contamina*)
```

### NT & TAS (PDF-Heavy Systems)

```txt
(site:health.nt.gov.au OR site:health.tas.gov.au) ("health alert" OR "drug warning" OR "alerts and pop-up notifications") (drug OR nitazene)
```

**Why this works:**

- The NT issues drug warnings as PDFs under "Health alerts"; Tasmania files them under "Alerts and
  pop-up notifications" — neither uses a tidy "drug alerts" label, so name their actual terms

### TGA Safety Alerts & Shortages

```txt
site:tga.gov.au ("safety alert" OR "medicine shortage" OR recall) (opioid OR naloxone OR benzodiazepine)
```

---

## 🔴 Advanced Queries

### Comprehensive Multi-System Sweep

```txt
(site:theknow.org.au OR site:health.nsw.gov.au OR site:health.vic.gov.au OR site:health.act.gov.au) ("drug warning" OR "drug alert" OR "public health alert") after:2025-01-01
```

### Directory Mining for Alert Pages

```txt
site:*.gov.au (inurl:drug-alerts OR inurl:public-drug-warnings OR inurl:health-alerts) (nitazene OR "synthetic opioid" OR overdose)
```

### High-Priority Emerging Substances

```txt
(site:*.gov.au OR site:theknow.org.au) ("nitazene" OR "benzimidazole opioid" OR "protonitazene" OR "medetomidine" OR "xylazine") (warning OR alert OR detected)
```

---

## 📍 State & Territory Alert Systems

Each jurisdiction's quotable term — verified, because several are easy to get wrong.

### NSW — "Public drug warnings"

```txt
site:health.nsw.gov.au/aod ("Public drug warnings" OR "Clinical safety alerts")
```

### Victoria — "Drug alerts"

```txt
site:health.vic.gov.au/alcohol-and-drugs/drug-alerts (drug OR nitazene OR advisory)
```

### ACT — "Public Health Alert" + CanTEST

```txt
(site:health.act.gov.au OR site:act.gov.au) ("Public Health Alert" OR CanTEST) (drug OR warning)
```

### Queensland — via The Know

```txt
("drug alert" OR "drug warning") Queensland (site:theknow.org.au OR site:health.qld.gov.au) -inurl:medicines-poisons
```

> Note: `health.qld.gov.au`'s "Updates and alerts" page is a _regulatory_ (medicines/poisons) page,
> not a consumer street-drug index — route QLD alerts through The Know. CheQpoint (drug checking)
> closed April 2025.

### SA — "Medication alerts" / media warnings

```txt
site:sahealth.sa.gov.au ("Medication alerts" OR "Health alerts" OR "drug warning" OR "synthetic opioid")
```

### NT — "Health alerts" (PDFs)

```txt
site:health.nt.gov.au ("health alert" OR "drug warning") filetype:pdf
```

### Tasmania — "Alerts and pop-up notifications"

```txt
site:health.tas.gov.au ("alerts and pop-up notifications" OR "health alert") (drug OR nitazene OR "party drugs")
```

### WA — keyword fallback (no public index)

```txt
(site:health.wa.gov.au OR site:healthywa.health.wa.gov.au) (nitazene OR "synthetic opioid" OR "drug warning")
```

---

## 🌏 International Alert & Drug-Checking Data

For comparison and early warning from jurisdictions with mature systems.

### WEDINOS (Wales)

```txt
site:wedinos.wales ("substance alert" OR "sample results" OR WEDINOS)
```

> Note: `wedinos.org` 301-redirects to `wedinos.wales`. The "PHILTRE" bulletin is published on
> Public Health Wales (`publichealthwales.nhs.wales`), not the WEDINOS domain.

### EUDA — EDAS & Early Warning System

```txt
site:euda.europa.eu ("European Drug Alert System" OR "EU Early Warning System" OR "new psychoactive substances")
```

### Canada — Toronto's Drug Checking & TRIP

```txt
(site:drugchecking.community OR site:tripproject.ca) ("drug checking" OR alert OR medetomidine OR fentanyl)
```

### DanceSafe (US) — #TestIt! Alerts

```txt
site:dancesafe.org ("TestIt" OR "Test It" OR alert OR adulterated)
```

---

## 💬 Peer & Community Alerts

Government alerts can lag. Peers and forums often carry the "bad batch" warning first — treat as a
lead, then cross-check against The Know and official systems.

### Peer-Org Alert Channels

```txt
(site:nuaa.org.au OR site:hrvic.org.au OR site:cahma.org.au) ("drug alert" OR "drug warning" OR batch)
```

### Real-Time Community Reports

```txt
(site:reddit.com/r/AusDrugs OR site:bluelight.org) ("bad batch" OR "drug alert" OR "tested positive" OR nitazene)
```

**Why this works:**

- Forums carry the in-the-moment "this batch is dodgy" knowledge that never reaches a PDF — useful
  for early warning, but verify against lab-backed sources before relaying

---

## 🔔 Setting Up Monitoring

Turn any dork above into a [Google Alert](https://www.google.com/alerts) for automatic notifications
(set frequency to "As-it-happens", email delivery):

```txt
site:theknow.org.au ("drug alert" OR "drug warning")
```

```txt
("nitazene" OR "synthetic opioid") (site:*.gov.au OR site:theknow.org.au)
```

Victoria also offers a direct Chief Health Officer alert subscription at
`health.vic.gov.au/subscribe`. See the [Google Alerts Guide](../tools/google-alerts.md) for setup.

---

## 🏘️ Local News Monitoring

Local news often reports "bad batch" incidents or overdose spikes before official alerts.

### The Location Operator (Google News)

```txt
location:Sydney ("drug alert" OR overdose OR "bad batch")
```

### Local Source Pattern

```txt
site:.com.au (news OR herald OR times OR daily) ("bad batch" OR "drug warning" OR "overdose cluster")
```

> **💡 Pro Tip:** See [Search Tweaks](../tools/search-tweaks.md#local-alert-monitoring) for more
> local monitoring recipes.

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Drug Alerts & EWS entities](../resources/source-intelligence.md#drug-alerts-early-warning-systems-ews)
  — the systems, terms, and domains every dork above is built on
- **Synonym Block:** [Alert Terms](../05-synonym-blocks.md#alert-terms)
- **Related Packs:** [Novel Substances](novel-substances.md), [Drug Checking](drug-checking.md),
  [Coroners & Deaths](coroners-deaths.md)
- **Tool:** [Google Alerts](../tools/google-alerts.md)

---

[← Back to Dork Packs](README.md)
