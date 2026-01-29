# Troubleshooting: When Google Fails

> Solutions for common search problems.

[← Back to Main Guide](../README.md)

---

## 🔴 Zero Results?

### Fix 1: Remove `filetype:` First

The information might be on a webpage, not a PDF.

```txt
# Instead of:
site:*.gov.au "harm reduction" filetype:pdf

# Try:
site:*.gov.au "harm reduction"
```

### Fix 2: Loosen `site:` Restrictions

```txt
# Instead of:
site:health.nsw.gov.au "drug checking"

# Try:
site:*.nsw.gov.au "drug checking"

# Or:
site:*.gov.au "drug checking"
```

### Fix 3: Swap Terminology

Different documents use different terms:

| Try this | Instead of |
|----------|------------|
| `"harm minimisation"` | `"harm reduction"` |
| `"opioid pharmacotherapy"` | `"OAT"` or `"OST"` |
| `"public health warning"` | `"drug alert"` |
| `"needle exchange"` | `"needle syringe program"` |

### Fix 4: Use `AROUND(n)` for Looser Phrasing

```txt
# Instead of exact phrase:
"naloxone program"

# Try proximity:
naloxone AROUND(5) program
```

### Fix 5: Remove Date Filter

Date filtering can be imprecise.

```txt
# Instead of:
"drug checking" after:2024

# Try:
"drug checking" 2024
```

---

## 🟡 Too Many Results?

### Step 1: Add Exact Phrases

```txt
"exact phrase" instead of just words
```

### Step 2: Add `filetype:pdf`

```txt
"harm reduction" filetype:pdf
```

### Step 3: Add `site:*.gov.au`

```txt
"harm reduction" site:*.gov.au filetype:pdf
```

### Step 4: Add Date Filter

```txt
"harm reduction" site:*.gov.au filetype:pdf after:2023
```

### Step 5: Add Exclusions

```txt
"harm reduction" -news -opinion -jobs
```

---

## 🚫 Filtering Out Stigmatising Content

### Exclude Stigmatising Terms

```txt
[your search] -"drug addict" -"drug abuse" -"substance abuse" -junkie
```

### Prioritise People-First Language

```txt
"people who use drugs" OR "people who inject drugs" [your topic]
```

### Find Peer-Led Content (Not Just Peer-Reviewed)

```txt
# Peer-reviewed (academic)
site:*.edu.au [topic] filetype:pdf

# Peer-led (lived experience)
site:*.org.au "peer-led" [topic] filetype:pdf
```

**Note:** Sometimes you need stigmatising terms to find older documents. That's okay—just be aware of context.

---

## 🔗 Broken Link or Deleted Page?

### Option 1: Google Cache

```txt
cache:http://example.com/old-policy.pdf
```

**Note:** Google is phasing this out, but it sometimes still works.

### Option 2: Wayback Machine

1. Go to [web.archive.org](https://web.archive.org)
2. Paste the broken URL
3. Browse archived versions

### Option 3: CachedView

**URL:** [cachedview.com](https://cachedview.com/)

Searches multiple archive services at once.

### Option 4: Archive.today

**URL:** [archive.today](https://archive.today/)

Alternative archive that sometimes has content Wayback doesn't.

---

## ⚠️ Google Blocking Your Searches?

### CAPTCHA Appearing?

- Slow down your searching
- Use a different network
- Try again later

### Results Seem Filtered?

- Try different search engines (DuckDuckGo, Brave)
- Use a VPN
- Try in private/incognito mode

---

## 📋 Query Too Complex?

Google may ignore operators if the query is too complex.

### Simplify Your Query

```txt
# Too complex:
site:*.health.*.gov.au (intitle:"drug alert" OR intitle:"drug warning" OR intitle:"drug notification") (opioid OR stimulant OR "novel substance") after:2024 filetype:pdf -news

# Simpler:
site:*.health.*.gov.au intitle:"drug alert" opioid after:2024 filetype:pdf
```

### Run Multiple Simpler Searches

Instead of one complex query, run 2-3 focused queries.

---

## 🔍 Can't Find What You Know Exists?

### Try Title Search

```txt
intitle:"[document title]" filetype:pdf
```

### Try Exact Document Name

```txt
"[exact document name]" site:*.gov.au
```

### Try Author/Organisation

```txt
"[author name]" OR "[organisation]" [topic] filetype:pdf
```

### Check Web Archive

The document may have been removed. Try Wayback Machine.

---

## 📊 Wrong File Type Results?

### PDF Viewer Pollution

Add exclusions for PDF viewer sites:

```txt
-pdfviewer -flipbook -issuu -docplayer -scribd
```

### Wrong Format

Verify you're using correct filetype syntax:

```txt
filetype:pdf   ✓
filetype:.pdf  ✗
file:pdf       ✗
```

---

## 🌐 International Results When You Want Australian?

### Add Australia Explicitly

```txt
[topic] Australia
```

### Exclude Other Countries

```txt
[topic] -USA -UK -Canada
```

### Use Australian Domains

```txt
site:*.au [topic]
```

---

## 💡 General Tips

### Start Simple

Begin with basic search, add operators one at a time.

### Test Incrementally

Add one operator at a time to find what's causing issues.

### Check Operator Syntax

- `OR` must be uppercase
- Exact phrases need quotes
- No space after `site:` or `filetype:`

### Try Alternative Operators

| If this doesn't work | Try this |
|---------------------|----------|
| `filetype:pdf` | `ext:pdf` |
| `"exact phrase"` | `AROUND(1)` for words |
| `intitle:` | Just search the title |

---

## 🔗 Related Resources

- [Core Operators](02-core-operators.md)
- [Advanced Operators](03-advanced-operators.md)
- [Browser Extensions](tools/browser-extensions.md) - Archiving tools

---

[← Back to Main Guide](../README.md)
