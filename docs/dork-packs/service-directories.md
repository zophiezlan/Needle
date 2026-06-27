# Service Finding & Directories

> Locate AOD, NSP, and harm-reduction services — named by the actual finder tool and intake line,
> not just by "service directory".

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

The hard part is knowing the named tool. Nationally that's the ADF's **Path2Help**, **Counselling
Online** (Turning Point), the **National Alcohol and Other Drug Hotline** (1800 250 015),
**Healthdirect**, and **Ask Izzy**. Each state has its own intake line and finder — NSW's **Your
Room** / **ADIS**, Victoria's **DirectLine** and **SupportConnect** (with a Needle and Syringe
Program Finder), Queensland's **Adis**, SA's **DASSA**, and WA's **Alcohol and Drug Support Line**.

A couple of commonly-cited domains are dead — `path2help.org.au` and `dassa.sa.gov.au` don't
resolve; the verified hosts are below.

> **Entity reference:** every finder, hotline, and domain below is catalogued in
> [Source Intelligence → Service Finders & Directories](../resources/source-intelligence.md#-service-finders--directories).

---

## ⚡ Quick Start

Go to the national AOD service-finder tool:

```txt
site:adf.org.au "Path2Help"
```

---

## 🟢 Basic Queries

### National Service Finders

```txt
(site:adf.org.au "Path2Help") OR (site:counsellingonline.org.au "Counselling Online") OR (site:askizzy.org.au "Ask Izzy")
```

**Why this works:**

- Three named national tools in one query — Path2Help (ADF), Counselling Online (Turning Point), Ask
  Izzy (Infoxchange). Note Path2Help lives on `adf.org.au`, not the dead `path2help.org.au`

### Government Service Directories

```txt
(filetype:pdf OR filetype:xlsx) ("service directory" OR "service finder" OR "service list") (AOD OR "alcohol and other drugs") site:*.gov.au
```

### Peer NSP & Equipment

```txt
(site:nuaa.org.au OR site:health.nsw.gov.au) ("Needle and Syringe Program" OR "NSP equipment" OR "NSP outlets")
```

---

## 🟡 Intermediate Queries

### State Intake Lines (ADIS)

```txt
(site:yourroom.health.nsw.gov.au OR site:adis.health.qld.gov.au OR site:sahealth.sa.gov.au) "Alcohol and Drug Information Service"
```

**Why this works:**

- "ADIS" (Alcohol and Drug Information Service) exists in several states — pinning by domain returns
  the right state's intake line rather than cross-state noise

### Spreadsheet Directories (Data-Rich)

```txt
filetype:xlsx ("service directory" OR "contact list" OR "service list") (AOD OR "drug and alcohol" OR "harm reduction") site:*.gov.au
```

### Sexual Health & BBV Services

```txt
("hepatitis" OR HCV OR "sexual health" OR BBV) (clinic OR service OR directory) site:*.health.*.gov.au
```

---

## 🔴 Advanced Queries

### Comprehensive Service-Directory Sweep

```txt
(filetype:pdf OR filetype:xlsx OR filetype:csv) ("service directory" OR "service finder" OR "service list" OR "treatment locator") (AOD OR "alcohol and other drugs" OR "drug and alcohol" OR "harm reduction") (site:*.gov.au OR site:*.org.au) after:2022
```

### Finding Hidden Directories (inurl)

```txt
site:*.gov.au (inurl:services OR inurl:directory OR inurl:providers) (filetype:pdf OR filetype:xlsx) (AOD OR "drug and alcohol")
```

### Outreach & After-Hours Services

```txt
(outreach OR mobile OR "after hours" OR "24 hour" OR crisis) service (AOD OR "drug and alcohol" OR "harm reduction") (directory OR list OR finder)
```

---

## 🇦🇺 National Service Finders

The named national tools — verified hosts.

### ADF Path2Help

```txt
site:adf.org.au "Path2Help"
```

### Counselling Online (Turning Point)

```txt
site:counsellingonline.org.au "Counselling Online"
```

### National AOD Hotline

```txt
"National Alcohol and Other Drug Hotline" "1800 250 015"
```

### Healthdirect & Ask Izzy

```txt
(site:healthdirect.gov.au ("Service Finder" OR "Find a health service")) OR (site:askizzy.org.au "Ask Izzy")
```

---

## 📍 State Intake Lines & Finders

Verified — several states' domains are easy to get wrong.

### NSW — Your Room / ADIS / NSP Outlets

```txt
site:yourroom.health.nsw.gov.au ("Alcohol and Drug Information Service" OR ADIS) OR site:health.nsw.gov.au "NSP outlets"
```

### VIC — DirectLine & SupportConnect

```txt
(site:directline.org.au "DirectLine") OR (site:supportconnect.org.au ("Needle and Syringe Program Finder" OR "Naloxone Service Finder"))
```

### QLD — Adis Queensland

```txt
site:adis.health.qld.gov.au ("Adis" OR "Alcohol and Drug Information Service")
```

### SA — DASSA

```txt
site:sahealth.sa.gov.au ("Drug and Alcohol Services South Australia" OR DASSA OR "Alcohol and Drug Information Service")
```

> Note: SA's DASSA content lives under `sahealth.sa.gov.au` — `dassa.sa.gov.au` does not resolve.

### WA — Alcohol and Drug Support Line

```txt
(site:admhss.mhc.wa.gov.au OR site:mhc.wa.gov.au) "Alcohol and Drug Support Line"
```

> Note: the WA line is now delivered by the Alcohol, Drug and Mental Health Support Service (ADMHSS)
> at `admhss.mhc.wa.gov.au` — query both that and `mhc.wa.gov.au`.

---

## 🏥 Service-Type Directories

### Opioid Treatment (OAT/OST) Prescribers

```txt
("opioid treatment" OR methadone OR buprenorphine) (clinic OR prescriber OR "dosing point") (directory OR list OR finder) Australia
```

### Residential Rehab & Withdrawal

```txt
("residential rehabilitation" OR detox OR withdrawal OR "therapeutic community") (directory OR list OR finder) AOD [YOUR STATE]
```

### Youth & Family Services

```txt
(site:headspace.org.au OR "youth" OR "family drug support") (AOD OR "alcohol and other drugs") (service OR directory OR finder)
```

---

## 🖤💛❤️ First Nations Services

> Prefer community-controlled sources; ACCHOs are the community-controlled health services.

### Aboriginal Community Controlled Services

```txt
(ACCHO OR "Aboriginal Community Controlled" OR NACCHO) ("alcohol and other drugs" OR AOD OR "harm reduction") (service OR directory) [YOUR STATE]
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Service Finders & Directories](../resources/source-intelligence.md#-service-finders--directories)
  — the finders, hotlines, and domains every dork above is built on
- **Synonym Block:** [Treatment & Service Terms](../05-synonym-blocks.md#-treatment--service-terms)
- **Related Packs:** [NSP](nsp.md), [OAT/OST](oat-ost.md), [Rural & Remote](rural-remote.md)
- **Key Tools:** [Path2Help](https://adf.org.au/help-support/path2help/),
  [Counselling Online](https://counsellingonline.org.au), [Ask Izzy](https://askizzy.org.au)

---

[← Back to Dork Packs](README.md)
