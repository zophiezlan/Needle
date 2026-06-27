# Stigma, Language & Historical Research

> Find the named language guides, the anti-stigma evidence, and the movement's own history — by the
> actual guide and founding event, not a generic `"stigma" "drug use"` search.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

**Language matters** — and the sector has named guides that say so, written _with_ people who use
drugs: the NADA + NUAA **"Language Matters"** guide, INPUD/ANPUD's **"Words Matter!"**, AIVL's
anti-discrimination work, ADF's **"the Power of Words"**, and **Mindframe** for media. This pack
also treats the movement's _history_ as searchable: Australia adopted **"harm minimisation"** at the
1985 **NCADA**; **Alex Wodak** ran the first (illegal) needle exchange in 1986; **NUAA** (1989) and
**VIVAIDS** → Harm Reduction Victoria (1987) are the drug-user orgs that built the response.

To find older documents you sometimes must search the _legacy_ stigmatising terms of that era — use
them as research keys, thoughtfully.

> **Entity reference:** every guide and historical anchor below is catalogued in
> [Source Intelligence → Stigma, Language & Movement History](../resources/source-intelligence.md#-stigma-language--movement-history).

---

## ⚡ Quick Start

Go to the peer-authored Australian language guide:

```txt
(site:nada.org.au OR site:nuaa.org.au) "Language Matters"
```

---

## 🟢 Basic Queries

### Named Language Guides (Peer & Sector)

```txt
("Language Matters" OR "Words Matter" OR "Power of Words") ("people who use drugs" OR "alcohol and other drugs" OR stigma)
```

**Why this works:**

- Names the actual guides — NADA/NUAA's **Language Matters**, INPUD/ANPUD's **Words Matter!**, ADF's
  **Power of Words** — instead of a generic `"language" "guide"` query

### People-First Language

```txt
("people-first language" OR "person-centred language" OR "people who use drugs") (why OR guide OR "non-stigmatising")
```

### Media Reporting (Mindframe)

```txt
site:mindframe.org.au ("Mindframe for Alcohol and Other Drugs" OR "communicating about alcohol and other drugs")
```

---

## 🟡 Intermediate Queries

### Historical / Legacy Terms (Research Only)

> ⚠️ Use the era's own language to locate older documents — not as endorsed terminology.

```txt
("drug addict" OR "drug abuser" OR "substance abuser" OR "IVDU") Australia 1985..2005 filetype:pdf
```

**Why this works:**

- The legacy terms are the _keys_ to pre-2010 documents; the number-range operator (`YYYY..YYYY`)
  catches the era they were written in

### Comparing Language Across Eras

```txt
("injecting drug user" OR IDU) Australia 1990..2010    →    ("people who inject drugs" OR PWID) 2010..2026
```

### AIVL Anti-Discrimination Evidence

```txt
site:aivl.org.au ("Why wouldn't I discriminate against all of them" OR stigma OR discrimination) filetype:pdf
```

### Media Portrayal Analysis

```txt
("junkie" OR "druggie" OR "ice epidemic") (media OR "news") (portrayal OR representation OR analysis) Australia
```

---

## 🔴 Advanced Queries

### Comprehensive Stigma Research

```txt
"stigma" ("people who use drugs" OR "drug use" OR "substance use") Australia (research OR study OR review) filetype:pdf after:2015
```

### Structural & Self-Stigma

```txt
("structural stigma" OR "self-stigma" OR "internalised stigma" OR "internalized stigma") (drug OR substance) (policy OR healthcare OR experience)
```

### Stigma-Reduction Interventions

```txt
"stigma reduction" (intervention OR campaign OR training) (drug OR "substance use") (effectiveness OR evaluation) filetype:pdf
```

### National Strategy (Mental Health — note the scope)

```txt
site:mentalhealthcommission.gov.au "National Stigma and Discrimination Reduction Strategy"
```

> Caveat: this NMHC strategy is mental-health-focused and does **not** treat AOD as a primary domain
> — read it as adjacent, not as the AOD stigma framework.

---

## 📜 History of Harm Reduction in Australia

The movement's milestones are searchable by name, person, and year.

### Policy Origin — "Harm Minimisation" (1985)

```txt
("National Campaign Against Drug Abuse" OR NCADA) 1985 "harm minimisation" (site:ndarc.med.unsw.edu.au OR site:health.gov.au)
```

**Why this works:**

- Australia's official "harm minimisation" framework dates to the 1985 NCADA — naming it (and the
  NDARC history "The National Drug Strategy: The First 10 Years and Beyond") beats a vague
  `"harm reduction" history` search

### First Needle Exchange (1986)

```txt
"Alex Wodak" ("St Vincent's" OR Darlinghurst OR "needle") 1986 (history OR first OR pilot)
```

### Methadone History (1969)

```txt
("Stella Dalton" OR "Opioid Agonist Therapy in Australia: A History") methadone (1969 OR Sydney OR history)
```

### Supervised Injecting & the 1999 Drug Summit

```txt
"Medically Supervised Injecting Centre" ("1999" OR "Drug Summit" OR "Kings Cross") (history OR campaign OR origins)
```

### NSP Value (Named Evaluation)

```txt
"Return on Investment in Needle and Syringe Programs in Australia" filetype:pdf
```

---

## ✊ History of Drug-User Organising

The peer movement is its own history — name the orgs and their founding.

### Drug-User Organisations (Founding)

```txt
("NSW Users and AIDS Association" OR NUAA OR VIVAIDS OR "Harm Reduction Victoria" OR AIVL) (history OR founded OR "early days")
```

**Why this works:**

- NUAA (1989), VIVAIDS → HRVic (1987), and AIVL ("formed in the late 1980s") are the named drug-user
  orgs that built Australia's HIV-era response — far richer than `"drug user" activism`

### Activism & the Peer Movement

```txt
("drug user activism" OR "drug user movement" OR "peer movement") Australia (1980s OR 1990s OR history)
```

### Organisational Timelines (via Archive)

```txt
site:web.archive.org/web/*/nuaa.org.au (about OR history OR mission)
```

> Pair with the [Temporal Intelligence pack](temporal-intelligence.md) to trace how orgs described
> themselves over time.

---

## 🔬 Stigma Research

### Healthcare & Service Stigma

```txt
("stigma" OR "discrimination") ("drug use" OR "people who use drugs") (hospital OR "emergency department" OR healthcare OR "health service") Australia
```

### Justice, Housing & Employment Stigma

```txt
("stigma" OR "discrimination") "drug use" ("criminal record" OR "justice system" OR housing OR employment) Australia filetype:pdf
```

### Australian Academic Stigma Research

```txt
site:*.edu.au "stigma" ("people who use drugs" OR "substance use") Australia filetype:pdf
```

---

## 💬 Challenging Stigma

Peer-led anti-stigma work leads here — the people most affected reframing the narrative.

### Peer-Led & Lived-Experience Anti-Stigma

```txt
("peer-led" OR "lived experience" OR "nothing about us without us") stigma (reduction OR challenge OR campaign) (drug OR "alcohol and other drugs") Australia
```

### Anti-Stigma Campaigns

```txt
("anti-stigma" OR "stigma") ("people who use drugs" OR "alcohol and other drugs") campaign Australia site:*.org.au
```

> Note: `#stigmakills` / "Make Stigma History" are not real AU AOD campaigns — search the broad form
> above rather than a named hashtag.

### Reframing the Narrative

```txt
("changing the narrative" OR reframing OR "person-first") ("drug policy" OR "drug use") (peer OR "lived experience")
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Stigma, Language & Movement History](../resources/source-intelligence.md#-stigma-language--movement-history)
  — the guides and historical anchors every dork above is built on
- **Synonym Blocks:**
  [Peer/Lived Experience Terms](../05-synonym-blocks.md#-peerlived-experience-terms),
  [Spelling Variations](../05-synonym-blocks.md#-spelling-variations-auuk-vs-us)
- **Related Packs:** [Peer Knowledge](peer-knowledge.md), [Policy & Advocacy](policy-advocacy.md),
  [Temporal Intelligence](temporal-intelligence.md)
- **Key Guides:** [Language Matters (NADA)](https://nada.org.au/resources/language-matters/),
  [Words Matter (INPUD)](https://inpud.net),
  [Power of Words (ADF)](https://adf.org.au/resources/power-words/)

---

[← Back to Dork Packs](README.md)
