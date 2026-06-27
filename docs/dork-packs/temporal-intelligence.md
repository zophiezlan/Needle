# Temporal Intelligence & Archive Diving

> Search across time — archived snapshots, deleted pages, policy evolution. Named by the actual
> archive and the techniques that _still work_ (Google's `cache:` no longer does).

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Content moves, gets deleted, and gets quietly rewritten — temporal search is how you find it anyway.
The named archives are the toolkit: the **Wayback Machine**, Trove's **Australian Web Archive**
(which folds in **PANDORA** and the **Australian Government Web Archive**), and **archive.today** as
a fallback.

> **⚠ `cache:` is dead.** Google retired the `cache:` operator and cached links in 2024. Anywhere
> you remember using `cache:`, use the Wayback workflow in the **Recovering a Deleted Page** section
> below instead.
>
> **Entity reference:** every archive and endpoint below is catalogued in
> [Source Intelligence → Web Archives & Temporal Search](../resources/source-intelligence.md#-web-archives--temporal-search).

---

## ⚡ Quick Start

Find archived Australian harm reduction content on the Wayback Machine:

```txt
site:web.archive.org "harm reduction" (Australia OR Australian) filetype:pdf
```

---

## 🟢 Basic Queries

### Wayback Machine (Internet Archive)

```txt
site:web.archive.org "harm reduction" filetype:pdf
```

**Why this works:**

- The Internet Archive preserves snapshots over time; PDFs are often kept intact
- Catches resources that no longer exist on the original site

### Recent Content Only

```txt
site:*.gov.au "harm reduction" after:2024-01-01
```

### Historical Deep Dive

```txt
site:*.gov.au "harm reduction" before:2015
```

**Why this works:**

- `after:` / `before:` filter by Google's index date — good for current policy vs foundational
  documents (note: index date, not publication date)

---

## 🟡 Intermediate Queries

### Decade-Specific Research

```txt
"harm reduction" (Australia OR Australian) 2000..2010
```

**Why this works:**

- The number-range operator (`YYYY..YYYY`) matches documents _mentioning_ years in that range —
  useful for tracing policy eras

### Australian Web Archive (Trove) — for `.au` Pages Wayback Missed

```txt
(site:trove.nla.gov.au/search/category/websites OR site:pandora.nla.gov.au) "harm reduction"
```

**Why this works:**

- Trove's **Australian Web Archive** combines PANDORA + the Government Web Archive + `.au` harvests
  — it captures Australian sites the global Wayback Machine often doesn't

### All Snapshots of One Site

```txt
site:web.archive.org/web/*/aivl.org.au
```

### Policy Version Tracking

```txt
"National Drug Strategy" (2010 OR 2017 OR "2017-2026") filetype:pdf
```

### Finding Superseded Guidelines

```txt
site:*.gov.au "harm reduction" (superseded OR "replaced by" OR archived OR historical)
```

---

## 🔴 Advanced Queries

### Comprehensive Archive Sweep

```txt
site:web.archive.org ("harm reduction" OR "needle exchange" OR naloxone) (Australia OR *.gov.au OR *.org.au)
```

### Deleted Government Pages

```txt
(site:web.archive.org/web/*/health.gov.au OR site:webarchive.nla.gov.au) "harm reduction"
```

**Why this works:**

- The Wayback path-wildcard finds removed pages; the **Australian Government Web Archive**
  (`webarchive.nla.gov.au`) is a bulk harvest of Commonwealth sites — between them, deleted
  `.gov.au` content resurfaces

### Removed Reports & Annual Reports

```txt
site:web.archive.org filetype:pdf "harm reduction" "annual report"
```

### Historical News Coverage

```txt
site:web.archive.org (abc.net.au OR smh.com.au OR theage.com.au) ("safe injecting" OR "pill testing")
```

### Organisational History

```txt
site:web.archive.org/web/*/nuaa.org.au (about OR history OR mission)
```

---

## 🕰️ Recovering a Deleted Page

The `cache:` replacement workflow, in order of preference:

### 1. Wayback — Browse All Captures

```txt
https://web.archive.org/web/*/<the-broken-url>
```

### 2. Wayback Availability API (Closest Snapshot)

```txt
https://archive.org/wayback/available?url=<the-broken-url>
```

### 3. archive.today (Fallback)

```txt
https://archive.ph/newest/<the-broken-url>
```

### 4. Save a Live Page Before It Disappears

```txt
https://web.archive.org/save/<the-live-url>
```

> For `.au` government and org pages, also try Trove's Australian Web Archive — it often holds
> captures the global Wayback Machine doesn't.

---

## 🏛️ Archive Platform Reference

| Archive                               | Endpoint / `site:` target                        | Best for                                                           |
| ------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------ |
| **Wayback Machine**                   | `web.archive.org`                                | global snapshots; Save Page Now; availability API                  |
| **Trove — Australian Web Archive**    | `trove.nla.gov.au` (`/search/category/websites`) | `.au` sites (combines PANDORA + AGWA + `.au` harvests)             |
| **PANDORA**                           | `pandora.nla.gov.au`                             | NLA's selective archive (themes, events; since 1996)               |
| **Australian Government Web Archive** | `webarchive.nla.gov.au`                          | bulk harvest of Commonwealth `.gov.au` sites                       |
| **archive.today**                     | `archive.ph` / `archive.is`                      | on-demand snapshots; JS-heavy pages (fallback, governance caveats) |
| **Common Crawl**                      | `commoncrawl.org`                                | bulk URL/index discovery (not a viewer)                            |
| **LOC / UK Web Archive**              | `webarchive.loc.gov`, `webarchive.org.uk`        | US / UK thematic collections                                       |

---

## 📅 Time-Based Operator Reference

| Operator            | Example             | What it does                             |
| ------------------- | ------------------- | ---------------------------------------- |
| `after:YYYY-MM-DD`  | `after:2024-01-01`  | indexed after date (index date, not pub) |
| `before:YYYY-MM-DD` | `before:2020-12-31` | indexed before date                      |
| `YYYY..YYYY`        | `2015..2020`        | mentions a year in that range            |

**Specific year window:**

```txt
"harm reduction" after:2023-01-01 before:2023-12-31
```

---

## 🔬 Research Strategies

### Policy Evolution Tracking

1. Find the earliest reference, 2. pull intermediate versions from the archive, 3. compare with
   current.

```txt
"National Drug Strategy" site:web.archive.org    →    "National Drug Strategy" site:health.gov.au
```

### Before/After a Policy Change

```txt
"pill testing" Australia before:2019    →    "pill testing" Australia after:2019
```

---

## ⚠️ Considerations

- **`cache:` is gone** (2024) — use the Wayback/archive.today workflow above.
- **Date accuracy:** `after:`/`before:` reflect Google's index date, not publication date.
- **Coverage varies:** not everything is archived; for `.au` content, cross-check Trove's AWA.
- **robots.txt / access:** some archived content is excluded or replay-blocked.
- **Context:** read historical content in its original context.

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Web Archives & Temporal Search](../resources/source-intelligence.md#-web-archives--temporal-search)
  — the archives and endpoints every dork above is built on
- **Operator Guide:** [Core Operators](../02-core-operators.md) — date-operator syntax
- **Related Packs:** [Research](research.md),
  [Organizational Intelligence](organizational-intelligence.md),
  [Stigma & Language](stigma-language.md)
- **External:** [Wayback Machine](https://web.archive.org), [Trove](https://trove.nla.gov.au)

---

[← Back to Dork Packs](README.md)
