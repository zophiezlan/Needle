# User-Hosted Domains & Community Platforms

> Find grassroots harm-reduction content on user-published platforms — with the platform list
> currency-checked (Glitch is dead; Replit deployments are `.app`, not `.dev`).

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

This is where individuals, peers, students, and small collectives publish — blogs, link-in-bio hubs,
Notion directories, GitHub projects. The catch is platform churn: a 2026 sweep confirmed the live
set below and caught one dead host (**Glitch**, hosting ended July 2025) and a few quirks
(`telegra.ph` uses flat paths; Replit _deployments_ live at `*.replit.app`). Lead with the
peer/community platforms.

> **Entity reference:** every platform below is catalogued in
> [Source Intelligence → Discovery Platforms & File Types](../resources/source-intelligence.md#discovery-platforms-file-types).

---

## ⚡ Quick Start

Sweep the major user-hosted platforms for harm-reduction content:

```txt
(site:medium.com OR site:substack.com OR site:notion.site OR site:reddit.com) "harm reduction"
```

---

## 🟢 Basic Queries

### Blogs & Newsletters

```txt
(site:medium.com OR site:substack.com OR site:wordpress.com OR site:ghost.io OR site:bearblog.dev) ("harm reduction" OR "drug policy")
```

**Why this works:**

- Catches the major writing platforms where advocates publish — Substack for harm-reduction
  newsletters, Medium for drug-policy essays, Bear Blog for indie writers

### Community Documentation

```txt
(site:notion.site OR site:gitbook.io) ("harm reduction" OR "drug checking" OR "safer use") (guide OR directory OR resources)
```

### Reddit Discussions (Confirmed Communities)

```txt
(site:reddit.com/r/HarmReduction OR site:reddit.com/r/Drugs) ("naloxone" OR "drug checking" OR "test kit")
```

**Why this works:**

- Leads with the two confirmed-live communities (r/HarmReduction, r/Drugs); for narrower topics, the
  platform-level `site:reddit.com` + a named term is safer than guessing a niche subreddit

---

## 🟡 Intermediate Queries

### Link-in-Bio & Support Pages

```txt
(site:linktr.ee OR site:carrd.co OR site:ko-fi.com OR site:beacons.ai) ("harm reduction" OR "drug checking" OR "peer worker")
```

**Why this works:**

- Bio-link and support pages lead to advocates' resource collections, newsletters, and projects —
  good for discovering active community members

### Resource Boards

```txt
(site:padlet.com OR site:wakelet.com) ("harm reduction" OR AOD OR naloxone) (resources OR directory)
```

### Independent Newsletters

```txt
(site:substack.com OR site:ghost.io) ("harm reduction" OR "drug policy" OR decriminalisation OR "safe supply")
```

---

## 🔴 Advanced Queries

### Comprehensive User-Platform Sweep

```txt
(site:notion.site OR site:gitbook.io OR site:wordpress.com OR site:medium.com OR site:substack.com OR site:tumblr.com OR site:reddit.com) ("harm reduction" OR "drug checking" OR naloxone OR NSP) (guide OR resources OR directory OR community)
```

### Developer & Data Projects

```txt
(site:github.com OR site:github.io OR site:kaggle.com OR site:huggingface.co) ("harm reduction" OR "drug checking" OR overdose) (data OR dataset OR tool)
```

### Research Repositories

```txt
(site:zenodo.org OR site:osf.io OR site:figshare.com) ("harm reduction" OR "drug policy") (dataset OR data OR report OR preprint)
```

### Modern App Hosts (Community Tools)

```txt
(site:vercel.app OR site:netlify.app OR site:pages.dev OR site:replit.app OR site:streamlit.app) ("harm reduction" OR "drug checking" OR naloxone)
```

> Dropped: `*.glitch.me` (Glitch ended hosting July 2025 — mostly dead links). Use the hosts above.

### Self-Hosted Community Platforms

```txt
("Powered by Discourse" OR inurl:/t/) ("harm reduction" OR "drug user" OR "drug policy")
```

---

## 📋 Platform-Specific Searches

### Notion Directories & Guides

```txt
site:notion.site ("harm reduction" OR "drug checking" OR "safer use") (directory OR guide OR resources)
```

### Substack Newsletters

```txt
site:substack.com ("drug policy" OR "harm reduction" OR decriminalisation)
```

### GitHub Projects

```txt
site:github.com ("harm reduction" OR "drug checking" OR fentanyl) (README OR tool OR data)
```

### Documentation Hosts

```txt
(site:gitbook.io OR site:readthedocs.io OR site:readthedocs-hosted.com) ("harm reduction" OR "drug checking" OR "safer use")
```

### Archive.org Historical Content

```txt
site:archive.org ("harm reduction" OR "needle exchange" OR "syringe program")
```

---

## 📋 Quick-Copy Domain Buckets

### Blogs / Writing

```txt
site:medium.com OR site:substack.com OR site:wordpress.com OR site:tumblr.com OR site:ghost.io OR site:bearblog.dev OR site:telegra.ph
```

### Docs / Knowledge

```txt
site:notion.site OR site:gitbook.io OR site:readthedocs.io OR site:readme.io
```

### Bio-Link / Support

```txt
site:linktr.ee OR site:carrd.co OR site:ko-fi.com OR site:patreon.com OR site:beacons.ai
```

### Jamstack / App Hosts

```txt
site:vercel.app OR site:netlify.app OR site:pages.dev OR site:web.app OR site:replit.app OR site:streamlit.app
```

### Research / Data

```txt
site:zenodo.org OR site:osf.io OR site:figshare.com OR site:kaggle.com OR site:huggingface.co
```

### Community

```txt
site:reddit.com OR site:quora.com OR site:padlet.com OR site:wakelet.com
```

---

## 🌍 International User Content

```txt
(site:medium.com OR site:substack.com) "harm reduction" (Canada OR UK OR Europe OR "New Zealand")
```

---

## 💡 Tips for User-Hosted Searches

1. **Combine with topic terms** — add a harm-reduction keyword to any domain bucket.
2. **`site:` sweeps subdomains** — `site:substack.com` catches every `*.substack.com` publication.
3. **Exclude noise** — `-advertisement -"sponsored"` cleans results.
4. **Follow bio links** — `linktr.ee` / `beacons.ai` pages lead to the real resources.
5. **Check archives** — moved content: `site:archive.org` or the
   [Temporal pack](temporal-intelligence.md).

---

## ⚠️ Considerations

- **Currency:** platforms churn — Glitch died in 2025; verify a host resolves before relying on it.
- **Signal vs noise:** user content varies in quality — verify against official sources.
- **Privacy:** don't scrape or store personal information from community forums.
- **Indexing gaps:** many `notion.site` pages and link-shared docs are `noindex`, so coverage is
  partial.

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Discovery Platforms & File Types](../resources/source-intelligence.md#discovery-platforms-file-types)
  — the currency-checked platform list every dork above is built on
- **Synonym Block:** [Platform Patterns](../05-synonym-blocks.md#user-hosted-platform-patterns)
- **Related Packs:** [Forum & Community](forum-community.md), [Peer Knowledge](peer-knowledge.md),
  [Multimedia Discovery](multimedia-discovery.md)

---

[← Back to Dork Packs](README.md)
