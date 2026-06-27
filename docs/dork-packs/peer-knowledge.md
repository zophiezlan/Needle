# Peer Knowledge, Publications & Storytelling

> Find peer voices and lived-experience knowledge — named by the actual peer publication and
> drug-user organisation, not generic "peer" keywords.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

**Peer knowledge is expert knowledge.** The drug-user organisations publish named series worth
knowing: NUAA's **User's News** (and **Insider's News**, distributed inside NSW prisons), **AIVL
News**, and the **DanceWize** peer programs (HRVic and NUAA). Internationally, INPUD's **Words
Matter** and EuroNPUD's **European Diaries** carry the peer voice. The specificity move is the same
as every pack — name the publication, not just "peer newsletter".

> **Entity reference:** every peer org, publication, and handle below is catalogued in
> [Source Intelligence → Cross-Cutting: Peer & Drug-User Organisations](../resources/source-intelligence.md#cross-cutting-peer-drug-user-organisations-au).

---

## ⚡ Quick Start

Go to Australia's flagship peer magazine:

```txt
site:nuaa.org.au "User's News"
```

---

## 🟢 Basic Queries

### Named Peer Publications

```txt
("User's News" OR "Insider's News" OR "AIVL News") (site:nuaa.org.au OR site:aivl.org.au)
```

**Why this works:**

- Names the actual peer mastheads — NUAA's **User's News** and prison-distributed **Insider's
  News**, and **AIVL News** — instead of a generic `"peer newsletter"` query that mostly misses them

### Australian Drug-User Organisations

```txt
(site:nuaa.org.au OR site:aivl.org.au OR site:hrvic.org.au OR site:quihn.org OR site:wasua.com.au OR site:cahma.org.au) ("peer" OR "lived experience" OR "harm reduction")
```

### Peer-Produced Knowledge

```txt
("by peers, for peers" OR "peer-produced" OR "peer-developed" OR "in their own words") ("people who use drugs" OR "harm reduction") Australia
```

---

## 🟡 Intermediate Queries

### Lived & Living Experience Narratives

```txt
("lived experience" OR "lived and living experience" OR "in their own words") (story OR narrative OR testimony) ("people who use drugs" OR "drug use") Australia filetype:pdf
```

**Why this works:**

- "Lived and living experience" (LLE) is the sector's current term — searching it alongside the
  older "lived experience" catches both eras of peer-authored material

### Digital Storytelling & Creative Work

```txt
("photovoice" OR "digital storytelling" OR poetry OR zine) ("people who use drugs" OR "lived experience" OR "harm reduction")
```

### Peer Voice in Submissions

```txt
(site:nuaa.org.au OR site:aivl.org.au OR site:hrvic.org.au) (submission OR "position statement") (inquiry OR consultation OR "drug policy")
```

---

## 🔴 Advanced Queries

### Comprehensive Peer-Knowledge Sweep

```txt
(site:nuaa.org.au OR site:aivl.org.au OR site:hrvic.org.au OR site:quihn.org OR site:quivaa.org.au OR site:wasua.com.au) ("peer" OR "lived experience" OR "User's News" OR "harm reduction") filetype:pdf after:2020
```

### Peer-Led Research & Co-Design

```txt
("peer-led research" OR "peer researcher" OR "co-design" OR "participatory action research") ("people who use drugs" OR "harm reduction") Australia filetype:pdf
```

**Why this works:**

- The peer-research vocabulary (peer-led, co-design, PAR) finds the work done _with_ rather than
  _about_ people who use drugs — the methodological side of "nothing about us without us"

### Meaningful Participation (not Tokenism)

```txt
("meaningful participation" OR "authentic engagement" OR "nothing about us without us") ("people who use drugs" OR "consumer representative") (policy OR research OR advisory)
```

---

## 📰 Named Peer Publications

### User's News & Insider's News (NUAA)

```txt
site:nuaa.org.au ("User's News" OR "Insider's News")
```

### AIVL News & Position Statements

```txt
site:aivl.org.au ("AIVL News" OR "position statement" OR submission OR "NSP Directory")
```

### DanceWize (Peer Festival Programs)

```txt
(site:hrvic.org.au OR site:dancewizensw.org.au OR site:nuaa.org.au) ("DanceWize" OR "crowd care" OR "peer education")
```

---

## 🗣️ Peer Voice in Policy

### Peer Submissions & Advisory

```txt
(site:nuaa.org.au OR site:aivl.org.au) (submission OR "reference group" OR advisory) (drug OR "harm reduction")
```

### "Nothing About Us Without Us"

```txt
"nothing about us without us" ("drug policy" OR "harm reduction" OR "people who use drugs") filetype:pdf
```

---

## 🌏 International Peer Networks

These are real, named drug-user networks — the global peer movement.

### INPUD & EuroNPUD

```txt
(site:inpud.net OR site:euronpud.net) ("Words Matter" OR "European Diaries" OR "people who use drugs" OR peer)
```

### Canadian & US Peer Unions

```txt
(site:vandu.org OR site:capud.ca OR site:urban-survivors.org) (peer OR "drug user union" OR "overdose response")
```

**Why this works:**

- VANDU (Vancouver), CAPUD (Canada), and the Urban Survivors Union (US) are the named drug-user
  unions — far richer than a generic `"people who use drugs" organisation` search

---

## 🕰️ Historical & Archived Peer Content

The drug-user movement is its own history — and old peer publications are often only in archives.

### Movement History

```txt
("NSW Users and AIDS Association" OR NUAA OR VIVAIDS OR "Harm Reduction Victoria" OR AIVL) (history OR founded OR "early days")
```

### Archived Peer Publications

```txt
site:web.archive.org/web/*/nuaa.org.au ("User's News" OR about OR history)
```

> Pair with the [Temporal Intelligence pack](temporal-intelligence.md) to recover old issues and the
> [Stigma & Language pack](stigma-language.md) for the movement's history.

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Cross-Cutting: Peer & Drug-User Organisations](../resources/source-intelligence.md#cross-cutting-peer-drug-user-organisations-au)
  — the peer orgs, publications, and handles every dork above is built on
- **Synonym Block:**
  [Peer/Lived Experience Terms](../05-synonym-blocks.md#peerlived-experience-terms)
- **Related Packs:** [Peer Workforce](peer-workforce.md), [Forum & Community](forum-community.md),
  [Stigma & Language](stigma-language.md)
- **Key Orgs:** [NUAA](https://nuaa.org.au), [AIVL](https://aivl.org.au), [INPUD](https://inpud.net)

---

[← Back to Dork Packs](README.md)
