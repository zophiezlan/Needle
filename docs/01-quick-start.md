# Quick Start: The 90-Second Workflow

> Get useful search results in under 2 minutes. No prior knowledge required.

[← Back to Main Guide](../README.md)

---

## 🚀 The Formula

When you need _anything_ fast, follow this pattern:

```
[DOMAIN] + [FORMAT] + [TOPIC] + [DATE] + [EXCLUSIONS]
```

### Step-by-Step

1. **Define what you need** (alert / policy / service / evidence / training)
2. **Choose the authority domain** first: `site:*.gov.au` or a known org/university
3. **Force document formats**: `filetype:pdf` (or `docx`, `pptx`, `xlsx`)
4. **Use exact phrases** for program names: `"take-home naloxone"` `"needle syringe program"`
5. **Add a date constraint**: `after:2024-01-01` (or a range `2020..2025`)
6. **Exclude junk**: `-jobs -careers -news`
7. **Open 2-3 candidates**, cross-check dates, and capture citations

---

## ⚡ Your First Dork

Copy and paste this into Google right now:

```txt
site:*.gov.au filetype:pdf "harm reduction" after:2024
```

**What this does:**

- `site:*.gov.au` → Only Australian government domains
- `filetype:pdf` → Only PDF documents (not web pages)
- `"harm reduction"` → Exact phrase match
- `after:2024` → Published in 2024 or later

---

## 📋 5 Essential Starter Dorks

### 1. Recent Government Documents

```txt
site:*.gov.au filetype:pdf "harm reduction" after:2024
```

### 2. Drug Alerts from NSW Health

```txt
site:health.nsw.gov.au intitle:"drug warning" OR intitle:"drug alert"
```

### 3. Peer Worker Training Resources

```txt
"peer worker" training filetype:pdf site:*.org.au -jobs -careers
```

### 4. Research from Australian Universities

```txt
site:*.edu.au filetype:pdf "drug checking" OR "pill testing"
```

### 5. Naloxone Guidelines

```txt
site:*.gov.au "take-home naloxone" guidelines filetype:pdf
```

---

## 🔧 Quick Customization

### Change the Topic

Replace `"harm reduction"` with:

- `"needle syringe program"`
- `"drug checking"`
- `"opioid treatment"`
- `"overdose prevention"`

### Change the Jurisdiction

Replace `site:*.gov.au` with:

| Jurisdiction            | Domain                   |
| ----------------------- | ------------------------ |
| All AU Government       | `site:*.gov.au`          |
| Australian Universities | `site:*.edu.au`          |
| NSW Health              | `site:health.nsw.gov.au` |
| QLD Health              | `site:health.qld.gov.au` |
| Sector Orgs             | `site:*.org.au`          |
| VIC Health              | `site:health.vic.gov.au` |

### Change the Document Type

Replace `filetype:pdf` with:

| Type            | Use For                        |
| --------------- | ------------------------------ |
| `filetype:docx` | Templates, drafts              |
| `filetype:pdf`  | Reports, guidelines, policies  |
| `filetype:pptx` | Presentations, training slides |
| `filetype:xlsx` | Data, service directories      |

---

## ❌ Common Mistakes to Avoid

| Mistake                     | Fix                                       |
| --------------------------- | ----------------------------------------- |
| `or` (lowercase)            | Use `OR` (must be uppercase)              |
| `site:gov.au` (missing `*`) | Use `site:*.gov.au` to catch subdomains   |
| Forgetting exclusions       | Add `-jobs -careers` to remove noise      |
| No quotes around phrases    | Use `"exact phrase"` for multi-word terms |
| Too many operators at once  | Start simple, add operators one at a time |

---

## ✅ Quick Verification Checklist

Before using any document you find:

- [ ] **Publication date** - Is it current enough?
- [ ] **Issuing authority** - Who published it?
- [ ] **Jurisdiction** - Does it apply to your state/territory?
- [ ] **Document type** - Is it a guideline, draft, or discussion paper?

---

## 🎯 Next Steps

Now that you have the basics:

1. **Learn the operators** → [Core Operators](02-core-operators.md)
2. **Find topic-specific dorks** → [Dork Packs](dork-packs/)
3. **Set up monitoring** → [Google Alerts](tools/google-alerts.md)

---

## 💡 Pro Tips

### Tip 1: Start Broad, Then Narrow

```txt
# Start here (broad)
"drug checking" Australia

# Then narrow by domain
"drug checking" site:*.gov.au

# Then narrow by document type
"drug checking" site:*.gov.au filetype:pdf

# Then narrow by date
"drug checking" site:*.gov.au filetype:pdf after:2024
```

### Tip 2: Save Your Best Dorks

Create browser bookmarks for searches you use regularly. See [Bookmarklets](tools/bookmarklets.md)
for one-click searching.

### Tip 3: Use Date Ranges for Research

```txt
"harm reduction" Australia 2020..2025
```

This finds documents mentioning dates in that range.

---

[→ Next: Core Operators](02-core-operators.md)
