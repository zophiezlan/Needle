# Document Discovery

> Finding spreadsheets, databases, presentations, and other document types beyond PDFs.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## ⚠️ Ethical Framework

These techniques can surface sensitive documents. Use responsibly:

- Only search for publicly accessible information
- Never attempt to access password-protected or private content
- Respect copyright and data protection laws
- Consider whether the information should be public before using it

---

## ⚡ Quick Start

Find spreadsheets with harm reduction data on government sites:

```txt
filetype:xlsx "harm reduction" OR "AOD" site:*.gov.au
```

---

## 📊 Spreadsheets & Data Files

### Excel Files (Modern)

```txt
filetype:xlsx "harm reduction" site:*.gov.au
filetype:xlsx "needle syringe" OR "NSP" statistics
filetype:xlsx "overdose" data OR statistics Australia
filetype:xlsx "opioid" OR "methadone" treatment
filetype:xlsx "service directory" drug alcohol
```

### Excel Files (Legacy)

```txt
filetype:xls "opioid treatment" OR "methadone" clinic
filetype:xls "drug" OR "alcohol" statistics Australia
filetype:xls "hepatitis" OR "HIV" surveillance
```

### CSV Data Files

```txt
filetype:csv "needle syringe" OR "NSP" OR "overdose"
filetype:csv "drug" OR "alcohol" site:*.gov.au
filetype:csv "treatment" episodes Australia
filetype:csv "hospitalisation" drug OR alcohol
```

---

## 🎬 Presentations

### PowerPoint (Modern)

```txt
filetype:pptx "harm reduction" Australia
filetype:pptx "drug checking" OR "pill testing"
filetype:pptx "naloxone" training OR program
filetype:pptx "overdose" prevention OR response
filetype:pptx conference "alcohol and other drugs"
```

### PowerPoint (Legacy)

```txt
filetype:ppt "needle exchange" OR "NSP" presentation
filetype:ppt "methadone" OR "buprenorphine" treatment
```

### PDF Presentations (Slide Decks)

```txt
filetype:pdf "slide" OR "presentation" "harm reduction" Australia
inurl:presentation filetype:pdf "drug policy"
```

---

## 📝 Word Documents

### Modern Word Files

```txt
filetype:docx "harm reduction" policy OR procedure
filetype:docx "needle syringe" guidelines
filetype:docx "overdose" protocol OR response
filetype:docx "drug checking" service design
```

### Legacy Word Files

```txt
filetype:doc "harm minimisation" Australia
filetype:doc "injecting drug use" guidelines
```

### RTF & ODT (Alternative Formats)

```txt
filetype:rtf "harm reduction" Australia
filetype:odt "drug checking" OR "pill testing"
```

---

## 🗃️ Database Files

> [!CAUTION] Database files may contain sensitive information. Only access files that are clearly
> intended for public distribution.

### SQL Dumps (Public Datasets)

```txt
filetype:sql "drug" OR "health" site:*.edu.au
filetype:sql "research" data export
```

### Access Databases

```txt
filetype:mdb "health" OR "drug" research
filetype:accdb "service" directory
```

### Structured Data

```txt
filetype:json "harm reduction" OR "drug" API
filetype:xml "health" data Australia
```

---

## 📁 Archive Files

### ZIP Archives

```txt
filetype:zip "harm reduction" resources
filetype:zip "training" materials drug alcohol
filetype:zip "toolkit" AOD OR "alcohol and other drugs"
```

---

## 📖 E-books & Publications

### EPUB Files

```txt
filetype:epub "harm reduction" guide
filetype:epub "drug policy" reform
filetype:epub "addiction" OR "recovery"
```

---

## 🔧 Configuration & Technical Files

### Sitemaps (Discover Hidden Pages)

```txt
filetype:xml sitemap "health" site:*.gov.au
filetype:xml sitemap "drug" site:*.org.au
```

### Log Files (Public Health Data)

```txt
filetype:log "drug" OR "health" site:*.gov.au
```

---

## ☁️ Cloud Storage & Collaboration

### Google Docs (Public)

```txt
site:docs.google.com/document "harm reduction"
site:docs.google.com/spreadsheets "drug" OR "alcohol" data
site:docs.google.com/presentation "AOD" OR "harm reduction"
```

### Cloud Storage (Public Files)

```txt
site:drive.google.com "harm reduction" resources
site:dropbox.com "drug policy" OR "harm reduction"
site:onedrive.live.com "AOD" training
```

---

## 🎓 Academic & Research Documents

### Theses & Dissertations

```txt
filetype:pdf "thesis" OR "dissertation" "harm reduction" Australia
filetype:pdf "PhD" "drug policy" OR "drug use"
```

### Working Papers

```txt
filetype:pdf "working paper" "harm reduction" OR "drug policy"
filetype:pdf "discussion paper" "alcohol and other drugs"
```

---

## 🏥 Health Service Documents

### Service Directories

```txt
filetype:xlsx "service directory" drug OR alcohol Australia
filetype:pdf "service directory" AOD OR "alcohol and other drugs"
filetype:csv "treatment services" drug alcohol
```

### Clinical Guidelines

```txt
filetype:pdf "clinical guideline" OR "practice guideline" opioid
filetype:pdf "protocol" "overdose" OR "withdrawal"
filetype:docx "procedure" naloxone OR "take-home"
```

---

## 📋 Government Documents

### Meeting Minutes & Agendas

```txt
filetype:pdf "meeting minutes" "harm reduction" OR "drug policy"
filetype:docx "agenda" "alcohol and other drugs" committee
filetype:pdf "steering committee" AOD minutes
```

### Budget & Funding

```txt
filetype:xlsx "budget" "harm reduction" OR "AOD" site:*.gov.au
filetype:pdf "funding" allocation drug OR alcohol
filetype:xls "expenditure" health drug services
```

---

## 🔍 Multi-Format Searches

### Combine Multiple File Types

```txt
(filetype:xlsx OR filetype:csv) "overdose" data Australia
(filetype:pptx OR filetype:pdf) "harm reduction" conference presentation
(filetype:docx OR filetype:pdf) "policy" "drug checking"
```

### All Data Files

```txt
(filetype:xlsx OR filetype:xls OR filetype:csv) "drug" statistics Australia
```

### All Presentation Types

```txt
(filetype:pptx OR filetype:ppt OR filetype:pdf) "harm reduction" slides conference
```

---

## 💡 Pro Tips

### Finding Hidden Directories

```txt
intitle:"index of" filetype:xlsx site:*.gov.au
intitle:"index of" filetype:pptx site:*.health.*.gov.au
```

### By Year Range

```txt
filetype:xlsx "harm reduction" 2020..2026
filetype:pptx "drug policy" after:2023
```

### Exclude Duplicates

```txt
filetype:xlsx "harm reduction" -"copy" -"backup" -"old"
```

---

## 🔗 Related Resources

- [Investigative Searching](investigative.md) - Advanced discovery techniques
- [Research Pack](research.md) - Academic research dorks
- [Data & Statistics](data-statistics.md) - Statistical sources
- [OSINT Tools](../tools/osint.md) - Automated discovery tools

---

[← Back to Dork Packs](README.md)
