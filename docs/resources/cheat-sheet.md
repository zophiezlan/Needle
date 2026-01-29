# Quick Reference Cheat Sheet

> One-page reference for essential operators and searches.

[← Back to Main Guide](../../README.md)

---

## ⚡ Essential Operators

| Operator | What It Does | Example |
|:---------|:-------------|:--------|
| `site:` | Limit to domain | `site:*.gov.au` |
| `filetype:` | Document type | `filetype:pdf` |
| `"phrase"` | Exact match | `"harm reduction"` |
| `OR` | Either term | `naloxone OR narcan` |
| `-exclude` | Remove results | `-jobs -careers` |
| `intitle:` | In page title | `intitle:"drug alert"` |
| `inurl:` | In URL | `inurl:publications` |
| `after:` | After date | `after:2024-01-01` |
| `AROUND(n)` | Words nearby | `naloxone AROUND(5) program` |
| `*` | Wildcard | `"drug * service"` |

---

## 🎯 Top 10 Most Useful Dorks

### 1. Recent Government Harm Reduction Docs
```txt
site:*.gov.au filetype:pdf "harm reduction" after:2024
```

### 2. NSW Drug Alerts
```txt
site:health.nsw.gov.au intitle:"drug warning" OR intitle:"drug alert"
```

### 3. Drug Checking Research
```txt
site:*.edu.au "drug checking" OR "pill testing" filetype:pdf
```

### 4. Peer Worker Training (No Jobs)
```txt
"peer worker" training filetype:pdf -jobs -careers
```

### 5. Naloxone Guidelines
```txt
site:*.gov.au "take-home naloxone" guidelines filetype:pdf
```

### 6. Parliamentary Submissions
```txt
site:*.gov.au inurl:submissions "drug policy" filetype:pdf
```

### 7. Peer Organisation Resources
```txt
(site:nuaa.org.au OR site:aivl.org.au OR site:hrvic.org.au) filetype:pdf
```

### 8. Service Directories
```txt
site:*.gov.au filetype:xlsx "service directory" AOD
```

### 9. Novel Substance Surveillance
```txt
site:*.gov.au ("nitazene" OR "novel psychoactive") filetype:pdf after:2023
```

### 10. Lived Experience Frameworks
```txt
("lived experience" OR "peer worker") framework filetype:pdf Australia
```

---

## 📋 Query Building Formula

```
[DOMAIN] + [FORMAT] + [TOPIC] + [DATE] + [EXCLUSIONS]
```

**Example:**
```txt
site:*.gov.au + filetype:pdf + "harm reduction" + after:2024 + -jobs
```

---

## 🌐 Key Domains

| Type | Domain Pattern |
|------|----------------|
| All AU Government | `site:*.gov.au` |
| All State Health | `site:*.health.*.gov.au` |
| All AU Universities | `site:*.edu.au` |
| NDARC | `site:ndarc.med.unsw.edu.au` |
| AIHW | `site:aihw.gov.au` |
| Peer Orgs | `site:nuaa.org.au OR site:aivl.org.au` |

---

## 🔧 Quick Fixes

| Problem | Solution |
|---------|----------|
| Zero results | Remove `filetype:pdf` |
| Too many results | Add `filetype:pdf` |
| Wrong jurisdiction | Add `site:*.gov.au` |
| Old content | Add `after:2024` |
| Job listings | Add `-jobs -careers` |

---

## ✅ Before Using Any Document

- [ ] Check publication date
- [ ] Verify issuing authority
- [ ] Confirm jurisdiction
- [ ] Note if draft or final

---

[← Back to Main Guide](../../README.md)
