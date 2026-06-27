# Festivals & Event Harm Reduction

> Find the peer programs, pill-testing trials, coronial drivers, and event-health resources behind
> festival harm reduction — named by program, trial, and finding.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Festival harm reduction in Australia is led by peers — **DanceWize** (HRVic) in Victoria and
**DanceWize NSW** (NUAA) in NSW run the crowd-care model. Policy moves on named drivers: the 2019
NSW **Inquest into the death of six patrons of NSW music festivals**, the **Music Festivals Act
2019**, the ACT **Groovin the Moo pill-testing pilots** (2018/2019), and Victoria's 2024
**pill-testing Act** and trial. Quote those, and pair festival names with a harm-reduction term
(several festivals are defunct or renamed).

> **Entity reference:** every program, trial, and finding below is catalogued in
> [Source Intelligence → Festivals & Events](../resources/source-intelligence.md#-festivals--events).
>
> **Sensitivity:** this pack touches festival deaths and coronial findings. Handle results — and
> anything naming an individual — with care and respect.

---

## ⚡ Quick Start

Find the peer crowd-care program at the heart of Australian festival harm reduction:

```txt
("DanceWize" OR "DanceWize NSW") ("crowd care" OR "harm reduction" OR festival)
```

---

## 🟢 Basic Queries

### DanceWize & DanceWize NSW (Peer Programs)

```txt
(site:hrvic.org.au OR site:dancewizensw.org.au OR site:nuaa.org.au) ("DanceWize" OR "crowd care")
```

**Why this works:**

- DanceWize (HRVic, since 1999) and DanceWize NSW (NUAA) are the named peer crowd-care services —
  this is the by-and-with-peers core, not the lab side

### Drug Checking at Festivals

```txt
("drug checking" OR "pill testing") festival (Australia OR NSW OR VIC OR ACT) (evaluation OR report OR trial)
```

### General Festival Harm Reduction

```txt
("festival" OR "music event") ("harm reduction" OR "crowd care" OR "drug checking") filetype:pdf -news
```

---

## 🟡 Intermediate Queries

### ACT Pill-Testing Pilots (Groovin the Moo)

```txt
("Report on the ACT GTM Pill Testing Pilot" OR "Report on the 2nd ACT GTM Pill Testing Pilot") (site:harmreductionaustralia.org.au OR site:pilltestingaustralia.com.au OR site:apo.org.au)
```

**Why this works:**

- Australia's first sanctioned festival pill-testing trials (2018 STA-SAFE Consortium; 2019 Pill
  Testing Australia) — quoting the exact report titles finds the evaluations, not media recaps

### Victorian Pill-Testing Trial (2024–)

```txt
("Drugs, Poisons and Controlled Substances Amendment (Pill Testing) Act 2024" OR "Beyond the Valley" pill testing) ("YSAS" OR "The Loop Australia" OR "Harm Reduction Victoria")
```

### Coronial Drivers

```txt
"Inquest into the death of six patrons of NSW music festivals" site:coroners.nsw.gov.au
```

### Event Medical Planning

```txt
(festival OR "music event") ("safety management plan" OR "event health" OR "medical plan") filetype:pdf
```

---

## 🔴 Advanced Queries

### Comprehensive Festival Health Sweep

```txt
(festival OR "music event") ("harm reduction" OR "drug checking" OR "crowd care" OR "event health") (Australia OR NSW OR VIC OR QLD) (evaluation OR report OR guideline) filetype:pdf -news after:2020
```

### Crowd & Mass-Gathering Safety

```txt
("Safe and Healthy Crowded Places" OR "mass gathering" OR "crowd safety") (festival OR event) (guideline OR handbook OR protocol)
```

### Welfare & Chill-Out Models

```txt
(festival OR "music event") ("crowd care" OR "welfare tent" OR "chill-out" OR "roving") (protocol OR training OR evaluation)
```

---

## ⚖️ Coronial & Policy Drivers

The findings and laws that shaped Australian festival policy.

### NSW Music-Festival Deaths Inquest (2019)

```txt
"Inquest into the death of six patrons of NSW music festivals" ("Harriet Grahame" OR recommendation) site:coroners.nsw.gov.au
```

### NSW Music Festivals Act 2019

```txt
("Music Festivals Act 2019" OR "Review of the Music Festivals Act 2019") site:legislation.nsw.gov.au OR site:nsw.gov.au
```

### Victorian Pill-Testing Act 2024

```txt
"Drugs, Poisons and Controlled Substances Amendment (Pill Testing) Act 2024" site:legislation.vic.gov.au
```

---

## 💊 Pill Testing / Drug Checking at Festivals

### The ACT Trials (Named Reports)

```txt
("Report on the ACT GTM Pill Testing Pilot" OR "STA-SAFE") ("a Harm Reduction Service" OR "Groovin the Moo") filetype:pdf
```

### Pill Testing Australia

```txt
site:pilltestingaustralia.com.au ("Festival Drug Checking Services" OR "Groovin the Moo" OR report)
```

> See the [Drug Checking](drug-checking.md) pack for the fixed-site services (CanTEST, CheQpoint)
> and the analysis methods.

---

## 👥 Peer Programs

### DanceWize (Victoria)

```txt
site:hrvic.org.au "DanceWize" (training OR volunteer OR "crowd care" OR protocol)
```

### DanceWize NSW

```txt
(site:dancewizensw.org.au OR site:nuaa.org.au) "DanceWize NSW" (training OR "crowd care" OR roving)
```

### Volunteer Training & Reflection

```txt
(festival OR event) ("peer support" OR "crowd care" OR "harm reduction") (volunteer OR training OR reflection) filetype:pdf
```

---

## 🎪 Specific Festivals

Festival names are useful search terms even when an event is on hiatus — pair generic names with
`festival` or a harm-reduction term. (Status noted; all valid historically.)

### Active Events

```txt
("Beyond the Valley" OR "Strawberry Fields" OR "Subsonic Music Festival" OR "Lost Paradise") ("harm reduction" OR DanceWize OR "drug checking" OR overdose) site:.au
```

### Groovin the Moo (Pill-Testing History)

```txt
"Groovin the Moo" ("pill testing" OR "drug checking" OR "harm reduction")
```

### Renamed / Historical

```txt
("Rainbow Serpent Festival" OR "Rainbow Spirit Festival" OR "Splendour in the Grass" OR "Falls Festival") ("harm reduction" OR "drug checking" OR medical OR overdose)
```

> Note: Rainbow Serpent was renamed **Rainbow Spirit Festival** (2023); Splendour and Falls are on
> indefinite hiatus — useful as historical search terms only.

---

## 🏥 Event Medical & Crowd Safety

### Mass-Gathering Health Reference

```txt
"Safe and Healthy Crowded Places" (festival OR "medical services" OR "first aid" OR "harm reduction") site:aidr.org.au OR filetype:pdf
```

### Event Health Services

```txt
"St John Ambulance" "Event Health Services" (festival OR "mass gathering" OR concert) site:.au
```

### Drug-Related Presentations Data

```txt
(festival OR "music event") ("drug related" OR "substance related") (presentation OR emergency) (data OR report)
```

---

## 🌏 International

### The Loop (UK)

```txt
site:wearetheloop.org ("drug checking" OR "TEST & KNOW" OR festival)
```

### European Festival Models

```txt
(site:saferparty.ch OR site:euda.europa.eu) (festival OR "drug checking" OR "nightlife")
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Festivals & Events](../resources/source-intelligence.md#-festivals--events) — the programs,
  trials, and findings every dork above is built on
- **Synonym Block:** [Festival/Event Terms](../05-synonym-blocks.md#-festivalevent-terms)
- **Related Packs:** [Drug Checking](drug-checking.md), [Drug Alerts](drug-alerts.md),
  [Coroners & Deaths](coroners-deaths.md), [Peer Workforce](peer-workforce.md)
- **Organisations:** [DanceWize (HRVic)](https://hrvic.org.au),
  [DanceWize NSW](https://dancewizensw.org.au)

---

[← Back to Dork Packs](README.md)
