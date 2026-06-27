# Take-Home Naloxone (THN)

> Find the programs, training, evaluations, and access pathways behind Australia's take-home
> naloxone rollout — named by program and product, not just by keyword.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Naloxone is the opioid-overdose reversal drug, and in Australia it has been **free, with no
prescription, since 1 July 2022** under the national **Take Home Naloxone Program**. But the most
durable knowledge lives with peers: drug-user organisations were distributing naloxone and running
overdose-response training long before the program existed, and they still reach people the pharmacy
model misses.

This pack names the real things — the **Take Home Naloxone Program** (health.gov.au), its
independent **pilot evaluation**, the products actually supplied here (**Nyxoid**, **Prenoxad**,
**Narcan**), and the peer programs (**COPE**, NUAA/AIVL training). If you remember one query, make
it the one that finds the program itself — or **Penington Institute's _Australia's Annual Overdose
Report_**, the single most-cited overdose dataset in the country.

> **Entity reference:** every program, product, and report below is catalogued in
> [Source Intelligence → Overdose, Naloxone & THN](../resources/source-intelligence.md#overdose-naloxone-take-home-naloxone-thn).

---

## ⚡ Quick Start

Go straight to the national program that made naloxone free and prescription-free:

```txt
site:health.gov.au "Take Home Naloxone Program"
```

---

## 🟢 Basic Queries

### The National Program

```txt
site:health.gov.au ("Take Home Naloxone Program" OR THN) (eligibility OR pharmacy OR "no prescription")
```

**Why this works:**

- Goes to the program source rather than guessing at `*.gov.au` wildcards
- The program made naloxone free and prescription-free nationally from 1 July 2022 — its own pages
  carry eligibility and supply detail

### Peer-Led Distribution & Training

```txt
(site:nuaa.org.au OR site:aivl.org.au OR site:penington.org.au) naloxone (peer OR training OR "overdose response")
```

**Why this works:**

- Peer and drug-user organisations ran naloxone training and distribution before the national
  program existed and still reach people pharmacies don't — this is the lived-experience side of THN

### State Health Department Programs

```txt
(site:health.nsw.gov.au OR site:health.vic.gov.au OR site:sahealth.sa.gov.au) ("take home naloxone" OR "take-home naloxone")
```

> Note: hyphenation varies — federal and NSW write "Take Home Naloxone", Victoria writes "Take-Home
> Naloxone". Search both, and avoid "community naloxone" (not the Australian program term).

---

## 🟡 Intermediate Queries

### The Independent Pilot Evaluation

```txt
"Evaluation of the Pharmaceutical Benefits Scheme subsidised take home naloxone pilot"
```

**Why this works:**

- Before the national rollout, a THN pilot ran in NSW, SA and WA (2019–2021). The University of
  Queensland (ISSR) evaluation, published 2022, is the evidence base that justified going national —
  quoting its exact title finds it directly

### Penington Institute Overdose Data

```txt
site:penington.org.au "Australia's Annual Overdose Report"
```

### Naloxone Scheduling (S3 / Pharmacist Only)

```txt
naloxone ("Schedule 3" OR "Pharmacist Only" OR "down-scheduling") (Australia OR TGA OR "Poisons Standard")
```

**Why this works:**

- Naloxone was down-scheduled S4 → S3 (Pharmacist Only) in 2016, which is what made over-the-counter
  pharmacy supply possible — the schedule terms find the regulatory paper trail

### COPE Overdose-Response Training

```txt
("COPE" "Community Overdose Prevention") (Penington OR naloxone OR training)
```

**Why this works:**

- COPE (Community Overdose Prevention Education) is Penington Institute's overdose-response and
  naloxone training program — naming it finds the actual curriculum, not generic "training" pages

---

## 🔴 Advanced Queries

### Comprehensive Program & Guidance Sweep

```txt
site:*.gov.au filetype:pdf ("Take Home Naloxone" OR THN) (guideline OR framework OR "standing order" OR implementation) after:2022
```

### Standing Orders & Supply Authority

```txt
naloxone ("standing order" OR "standing authority") (pharmacy OR nurse OR "authorised supply") Australia filetype:pdf
```

### Program Evaluations & Effectiveness

```txt
("take-home naloxone" OR THN) (evaluation OR effectiveness OR outcomes OR "lives saved") Australia filetype:pdf after:2020
```

### Coronial & Overdose Drivers

```txt
naloxone (coronial OR coroner OR preventable) (recommendation OR access OR "expanded supply") Australia
```

**Why this works:**

- Expanded naloxone access has repeatedly been a coronial recommendation — tying the search to those
  drivers finds the documents that actually shifted policy (see the Coroners & Deaths pack)

---

## 💉 Formulations & Products (Australia)

Product names are how supply, training, and shortages get described. In Australia the nasal spray is
**Nyxoid** — "Narcan nasal spray" is a US product and isn't the one supplied here.

### Nyxoid (Nasal Spray)

```txt
("Nyxoid" OR "naloxone nasal spray") ("Take Home Naloxone" OR THN OR "how to use") site:.au
```

### Prenoxad (Pre-Filled Injectable)

```txt
"Prenoxad" (naloxone OR "pre-filled" OR "Take Home Naloxone") site:.au
```

### Narcan (Injectable in AU, not Nasal)

```txt
"Narcan" naloxone (injection OR ampoule) site:.au
```

**Why this works:**

- In Australia "Narcan" is the injectable ampoule, not a nasal spray — scoping to `.au` and pairing
  with "injection" avoids pulling in US Narcan-nasal-spray material by mistake

---

## 🌏 International & Peer Naloxone

Australia's program is young; peer naloxone networks overseas hold decades of distribution know-how.

### EuroNPUD Peer Naloxone Stories

```txt
site:euronpud.net ("European Diaries" OR "Peer Power" OR naloxone)
```

### INPUD & Global Peer Networks

```txt
(site:inpud.net OR site:euronpud.net) naloxone ("peer distribution" OR "take-home" OR overdose)
```

### International Overdose Awareness Day

```txt
(site:overdoseday.com OR "International Overdose Awareness Day") (naloxone OR "a world without overdose" OR campaign)
```

**Why this works:**

- IOAD (31 August) is the global overdose-awareness campaign coordinated by Penington Institute —
  its materials are a reliable source of naloxone messaging, remembrance, and event resources

---

## 💬 Peer & Lived-Experience Perspectives

The people most likely to witness and reverse an overdose are peers. This is the knowledge an
implementation report misses.

### Peer Overdose-Response Experience

```txt
naloxone ("in their own words" OR "I used naloxone" OR "reversed an overdose" OR "peer") (story OR experience OR Australia)
```

### Peer Worker Training & Reflection

```txt
("take-home naloxone" OR naloxone) ("peer worker" OR "peer educator" OR volunteer) (training OR reflection OR experience) filetype:pdf
```

### Community Discussion & Real-Time Knowledge

```txt
(site:reddit.com/r/AusDrugs OR site:bluelight.org) (naloxone OR Narcan OR Nyxoid OR overdose)
```

**Why this works:**

- Forums carry the practical "how it actually went" knowledge — what naloxone felt like to use,
  redosing for nitazenes, managing precipitated withdrawal — that rarely reaches a PDF

---

## 📊 Data, Evaluation & Evidence

### Penington Overdose Report (Datasets)

```txt
site:penington.org.au "Australia's Annual Overdose Report" (filetype:pdf OR data OR opioid)
```

### NDARC & Academic Evaluation

```txt
(site:unsw.edu.au OR site:ndarc.med.unsw.edu.au) naloxone (evaluation OR "take-home" OR distribution) filetype:pdf
```

### Systematic Reviews

```txt
(intitle:"systematic review" OR intitle:"meta-analysis") ("take-home naloxone" OR "community naloxone")
```

---

## 🏛️ Policy, Scheduling & Access

### The Rescheduling Record

```txt
"Australia reschedules naloxone for opioid overdose" OR (naloxone "Schedule 3" "Pharmacist Only")
```

### Peak-Body & Pharmacy Positions

```txt
(site:psa.org.au OR site:guild.org.au) ("take home naloxone" OR THN) (position OR supply OR guideline)
```

### Peer-Body Advocacy

```txt
(site:nuaa.org.au OR site:aivl.org.au OR site:penington.org.au) naloxone (submission OR campaign OR "expanded access")
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Overdose, Naloxone & THN entities](../resources/source-intelligence.md#overdose-naloxone-take-home-naloxone-thn)
  — the programs, products, and reports every dork above is built on
- **Synonym Block:** [Naloxone Terms](../05-synonym-blocks.md#naloxone-terms)
- **Related Packs:** [Coroners & Deaths](coroners-deaths.md),
  [Novel Substances](novel-substances.md), [Peer Workforce](peer-workforce.md)
- **Key Sources:**
  [Take Home Naloxone Program](https://www.health.gov.au/our-work/take-home-naloxone-program),
  [Penington Institute](https://penington.org.au), [Nyxoid](https://nyxoid.com.au)

---

[← Back to Dork Packs](README.md)
