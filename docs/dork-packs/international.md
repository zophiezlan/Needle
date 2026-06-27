# International Best Practice

> Comparators from key jurisdictions — named by the country's actual agency, service, and law, not
> by "overseas examples".

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

The specificity move for international work is to name the real body. Canada has **BCCSU**, **Toward
the Heart**, and **safer supply**; the UK has **Release**, **The Loop**, and the **"Orange Book"**;
Portugal has **ICAD** and the **Dissuasion Commissions**; Switzerland has **Saferparty** and
**heroin-assisted treatment**; the Netherlands has **Trimbos/DIMS**; New Zealand has the **NZ Drug
Foundation**, **KnowYourStuffNZ**, and the world-first **Drug and Substance Checking Legislation Act
2021**.

Several domains recently moved — Portugal's agency is now **ICAD** (was SICAD), Cranstoun is `.org`
(not `.org.uk`), and NZ's needle exchange is `nznep.org.nz` (the old `nzneedle.org.nz` is dead).
Quote the current names below.

> **Entity reference:** every agency, service, and law below is catalogued in
> [Source Intelligence → International Reference Bodies](../resources/source-intelligence.md#international-reference-bodies-for-the-strong-international-layer).

---

## ⚡ Quick Start

Find the flagship global harm-reduction status report:

```txt
site:hri.global "Global State of Harm Reduction"
```

---

## 🟢 Basic Queries

### Global Bodies (EUDA / UNODC / WHO)

```txt
(site:euda.europa.eu OR site:unodc.org OR site:who.int) ("European Drug Report" OR "World Drug Report" OR "harm reduction")
```

**Why this works:**

- Three authoritative global sources in one query; EUDA (ex-EMCDDA) for Europe, UNODC for the World
  Drug Report, WHO for clinical guidance

### Canada Safe/Safer Supply

```txt
(site:canada.ca OR site:bccsu.ca OR site:catie.ca) ("safer supply" OR "safe supply" OR "supervised consumption sites")
```

### New Zealand Drug Checking

```txt
(site:drugfoundation.org.nz OR site:knowyourstuff.nz) ("drug checking" OR "The Level" OR "Testing Report")
```

---

## 🟡 Intermediate Queries

### Drug Consumption Rooms (European Evidence)

```txt
site:euda.europa.eu "drug consumption rooms"
```

### Portugal Decriminalisation

```txt
("Comissões para a Dissuasão da Toxicodependência" OR "Dissuasion Commission" OR "Lei 30/2000") (Portugal OR descriminalização OR decriminalisation)
```

**Why this works:**

- Portugal's 2001 model routes personal-use cases to the "Dissuasion Commissions" (CDT) under Lei
  30/2000 — naming them finds the actual mechanism, not op-eds about "the Portugal model"

### Swiss Heroin-Assisted Treatment

```txt
("heroingestützte Behandlung" OR HeGeBe OR "diacetylmorphine-assisted treatment" OR "Vier-Säulen-Politik") site:bag.admin.ch
```

### UK Clinical Guidance ("Orange Book")

```txt
"Drug misuse and dependence: UK guidelines on clinical management" site:gov.uk
```

---

## 🔴 Advanced Queries

### Comprehensive Service-Model Comparison

```txt
("drug consumption room" OR "supervised consumption" OR "heroin-assisted treatment" OR "safer supply" OR "drug checking") (evaluation OR effectiveness OR outcomes) (Canada OR UK OR Switzerland OR Portugal OR "New Zealand") filetype:pdf after:2018
```

### Decriminalisation & Regulation Models

```txt
(decriminalisation OR "legal regulation" OR "policy reform") (Portugal OR "British Columbia" OR "drug policy") (evaluation OR lessons OR outcomes) filetype:pdf
```

### Drug Checking Internationally

```txt
("drug checking" OR "drug-checking service") (site:wearetheloop.org OR site:knowyourstuff.nz OR site:saferparty.ch OR site:trimbos.nl OR site:drugchecking.community)
```

---

## 🍁 Canada

The strongest comparator for supervised consumption, safer supply, and drug checking.

### BC Centre on Substance Use (BCCSU)

```txt
site:bccsu.ca ("clinical guidance" OR "provincial guideline" OR "Opioid Use Disorder" OR "supervised consumption") filetype:pdf
```

### Toward the Heart (BC Naloxone)

```txt
site:towardtheheart.com ("Take Home Naloxone" OR "Facility Overdose Response Box" OR "overdose prevention")
```

### Safer Opioid Supply

```txt
("safer supply" OR "Safer Opioid Supply") ("London InterCommunity Health Centre" OR "Substance Use and Addictions Program" OR SUAP OR "prescribed alternatives")
```

### Health Canada Supervised Consumption Sites

```txt
site:canada.ca "supervised consumption sites" ("status of applications" OR "list of")
```

### CATIE & Toronto Drug Checking

```txt
(site:catie.ca OR site:drugchecking.community OR site:tripproject.ca) ("harm reduction" OR "drug checking" OR "Prevention in Focus")
```

---

## 🇬🇧 United Kingdom

### Release (Drugs & The Law)

```txt
site:release.org.uk ("Drugs & The Law" OR helpline OR "legal advice")
```

### The Loop (Drug Checking)

```txt
site:wearetheloop.org ("TEST & KNOW" OR "drug checking" OR alert)
```

### Transform Drug Policy Foundation

```txt
site:transformdrugs.org ("Anyone's Child" OR "legal regulation" OR publications)
```

### Service Providers (With You / Cranstoun)

```txt
(site:wearewithyou.org.uk OR site:cranstoun.org) ("harm reduction" OR "needle" OR "naloxone" OR services)
```

---

## 🇪🇺 Europe

### Portugal (ICAD)

```txt
(site:icad.pt OR site:sicad.pt OR "Instituto para os Comportamentos Aditivos e as Dependências") ("redução de riscos" OR dissuasão OR "harm reduction")
```

> Note: Portugal's agency became **ICAD** in 2024 (was SICAD). Use `icad.pt` first; `sicad.pt` is
> the legacy host where older material and the Dissuasion-Commission pages still live.

### Switzerland (Saferparty / Zurich DIZ)

```txt
site:saferparty.ch ("Substanzwarnung" OR "Drogeninformationszentrum" OR "drug checking")
```

### Netherlands (Trimbos / DIMS)

```txt
site:trimbos.nl (DIMS OR "Drugs Information and Monitoring System" OR "Red Alert" OR "drug checking")
```

### Germany (akzept / JES / DCRs)

```txt
("Drogenkonsumraum" OR "Alternativer Drogen- und Suchtbericht") (site:akzept.eu OR site:jes-bundesverband.de)
```

---

## 🇳🇿 Aotearoa New Zealand

A close-context comparator with a world-first drug-checking law.

### NZ Drug Foundation & The Level

```txt
(site:drugfoundation.org.nz OR site:thelevel.org.nz) ("harm reduction" OR "drug checking" OR "The Level")
```

### KnowYourStuffNZ (Drug Checking Data)

```txt
site:knowyourstuff.nz ("Testing Report" OR "drug checking" OR results)
```

### NZ Needle Exchange & Drug-Checking Law

```txt
(site:nznep.org.nz OR "New Zealand Needle Exchange Programme" OR "Drug and Substance Checking Legislation Act 2021")
```

---

## 👥 International Peer Networks

Lead with the networks run by and for people who use drugs.

### INPUD & EuroNPUD

```txt
(site:inpud.net OR site:euronpud.net) ("Words Matter" OR "European Diaries" OR "people who use drugs")
```

### Regional Drug-User Unions

```txt
(site:capud.ca OR site:vandu.org OR site:urban-survivors.org) ("harm reduction" OR naloxone OR "drug user union")
```

---

## 🏛️ Global Bodies & Data

### UN World Drug Report

```txt
site:unodc.org "World Drug Report" filetype:pdf
```

### EUDA European Drug Report

```txt
(site:euda.europa.eu OR site:emcdda.europa.eu) "European Drug Report"
```

### WHO Guidelines

```txt
(site:who.int OR site:iris.who.int) ("harm reduction" OR "opioid dependence" OR "key populations") guidelines
```

### Harm Reduction International

```txt
site:hri.global "Global State of Harm Reduction" filetype:pdf
```

---

## 🌏 Lessons for Australia

### Policy Transfer & Learning

```txt
("policy transfer" OR "lessons from" OR "what works") (Portugal OR Canada OR Switzerland OR "New Zealand") ("drug policy" OR "harm reduction") Australia filetype:pdf
```

### International Comparison (Australian Context)

```txt
Australia ("international comparison" OR "compared to" OR "lessons from") ("harm reduction" OR "drug checking" OR "supervised injecting") filetype:pdf
```

---

## 🔗 Related Resources

- **Source Intelligence:**
  [International Reference Bodies](../resources/source-intelligence.md#international-reference-bodies-for-the-strong-international-layer)
  — the agencies, services, and laws every dork above is built on
- **Related Packs:** [Policy & Advocacy](policy-advocacy.md), [Drug Checking](drug-checking.md),
  [Supervised Consumption](supervised-consumption.md), [Research](research.md)
- **Key Sites:** [EUDA](https://euda.europa.eu), [HRI](https://hri.global),
  [BCCSU](https://bccsu.ca), [NZ Drug Foundation](https://drugfoundation.org.nz)

---

[← Back to Dork Packs](README.md)
