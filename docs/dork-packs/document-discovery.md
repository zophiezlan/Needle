# Document Discovery

> Find spreadsheets, datasets, presentations, and document types beyond PDFs — anchored to the named
> data portals and collections, not just a bare `filetype:` guess.

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

`filetype:` is only half the move — the other half is naming _where the data lives_. Australia's
open data sits on **data.gov.au** (CKAN), **AIHW** (report data tables as `.xlsx`), and **ABS**
(Data Explorer). The high-value AOD collections have exact names: the **AODTS NMDS** and the
**NDSHS**. Pair the file-type with the portal and the dataset name and you land on the actual
numbers.

> **Entity reference:** every portal, dataset, and platform below is catalogued in
> [Source Intelligence → Discovery Platforms & File Types](../resources/source-intelligence.md#-discovery-platforms--file-types).
>
> **Ethics:** search only publicly accessible information; never attempt to access
> password-protected or private content; consider whether information should be public before using
> it.

---

## ⚡ Quick Start

Find harm-reduction spreadsheets on Australia's open-data portal:

```txt
site:data.gov.au filetype:csv ("drug" OR "alcohol" OR "needle syringe")
```

---

## 📂 Named Data Portals & Datasets

The specificity win — go to the portal and quote the dataset.

### data.gov.au (Open Data)

```txt
site:data.gov.au (filetype:csv OR filetype:xlsx) ("alcohol and other drug" OR "needle syringe" OR overdose)
```

### AIHW Data Tables (AODTS NMDS / NDSHS)

```txt
site:aihw.gov.au filetype:xlsx ("AODTS NMDS" OR "Alcohol and Other Drug Treatment Services" OR "National Drug Strategy Household Survey")
```

**Why this works:**

- AIHW attaches `"Data tables"` as `.xlsx` to its reports — naming the **AODTS NMDS** (treatment
  data) and **NDSHS** (household survey) lands on the spreadsheets behind the headline figures

### ABS & NSP Survey

```txt
(site:abs.gov.au filetype:xlsx "drug-induced") OR (site:kirby.unsw.edu.au ("Australian Needle and Syringe Program Survey" OR ANSPS) (filetype:pdf OR filetype:xlsx))
```

---

## 📊 Spreadsheets & Data Files

### Excel (Modern & Legacy)

```txt
(filetype:xlsx OR filetype:xls) ("needle syringe" OR "opioid treatment" OR overdose OR "harm reduction") site:*.gov.au
```

### CSV Data Files

```txt
filetype:csv ("needle syringe" OR "NSP" OR overdose OR "treatment episodes") (site:*.gov.au OR site:data.gov.au)
```

### Structured Data (JSON / XML)

```txt
(filetype:json OR filetype:xml) ("harm reduction" OR drug OR health) (data OR API) site:*.gov.au
```

---

## 🎬 Presentations

### PowerPoint (Modern & Legacy)

```txt
(filetype:pptx OR filetype:ppt) ("harm reduction" OR "drug checking" OR naloxone OR "needle exchange") Australia
```

### Slide Platforms

```txt
(site:slideshare.net OR site:speakerdeck.com) "harm reduction" (conference OR training OR APSAD)
```

---

## 📄 Document-Sharing Platforms

Republished reports, zines, and newsletters often live off the org's own site.

### Flipbook & Sharing Platforms

```txt
(site:issuu.com OR site:scribd.com OR site:calameo.com OR site:yumpu.com) ("harm reduction" OR "drug checking" OR "peer")
```

### DocumentCloud (FOI & Primary Sources)

```txt
site:documentcloud.org ("harm reduction" OR "drug policy" OR "coronial" OR FOI)
```

**Why this works:**

- DocumentCloud (run by MuckRock) is where journalists upload FOI releases and primary-source
  records — high value for accountability work that never reaches a polished PDF

---

## 📝 Word & Alternative Formats

```txt
(filetype:docx OR filetype:doc OR filetype:rtf OR filetype:odt) ("harm reduction" OR "harm minimisation" OR "drug checking") (policy OR guideline OR procedure)
```

---

## ☁️ Cloud Storage & Collaboration

> Caveat: Google indexes only docs explicitly **published to web** — link-shared Google Docs/Drive
> files are excluded, so these are low-yield. Canva design links aren't indexed at all (only
> published Canva Sites). Prefer the hosting org's own `site:`.

### Published Google Docs (Niche)

```txt
(site:docs.google.com OR site:drive.google.com) "harm reduction" (training OR resources OR directory)
```

---

## 🎓 Academic & Research Documents

### Theses & Working Papers

```txt
filetype:pdf ("thesis" OR "dissertation" OR "working paper" OR "discussion paper") ("harm reduction" OR "drug policy") Australia
```

### Research Repositories

```txt
(site:osf.io OR site:zenodo.org OR site:figshare.com) ("harm reduction" OR "drug checking") (dataset OR data OR report)
```

---

## 🏥 Service & Government Documents

### Service Directories

```txt
(filetype:xlsx OR filetype:csv OR filetype:pdf) "service directory" (drug OR alcohol OR AOD) Australia
```

### Budget & Funding (with Named Registers)

```txt
(filetype:xlsx OR filetype:pdf) (budget OR funding OR "Grant Award" OR "Contract Notice") ("harm reduction" OR AOD) (site:*.gov.au OR site:grants.gov.au OR site:tenders.gov.au)
```

> See the [Organizational Intelligence pack](organizational-intelligence.md) for the named registers
> (ACNC AIS, GrantConnect, AusTender) behind these.

---

## 🔍 Multi-Format & Pro Tips

### Combine File Types

```txt
(filetype:xlsx OR filetype:csv OR filetype:pdf) (overdose OR "needle syringe") data Australia
```

### Open Directories

```txt
intitle:"index of" (filetype:xlsx OR filetype:pptx) site:*.gov.au "drug"
```

### By Year Range

```txt
(filetype:xlsx OR filetype:pptx) ("harm reduction" OR "drug policy") 2020..2026
```

### Exclude Duplicates

```txt
filetype:xlsx "harm reduction" -"copy" -"backup" -"old"
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Discovery Platforms & File Types](../resources/source-intelligence.md#-discovery-platforms--file-types)
  — the portals, datasets, and platforms every dork above is built on
- **Related Packs:** [Data & Statistics](data-statistics.md), [Investigative](investigative.md),
  [Organizational Intelligence](organizational-intelligence.md)
- **Key Portals:** [data.gov.au](https://data.gov.au), [AIHW](https://aihw.gov.au),
  [DocumentCloud](https://documentcloud.org)

---

[← Back to Dork Packs](README.md)
