# Australia-First Domain Map

> Know where information lives. Use this to choose `site:` targets quickly.

[← Back to Main Guide](../README.md) | [← Advanced Operators](03-advanced-operators.md) | [Next: Synonym Blocks →](05-synonym-blocks.md)

---

## 🏛️ National Government

### Primary Health & Drug Policy

| Domain | Organisation | Focus |
|--------|--------------|-------|
| `site:health.gov.au` | Department of Health | National policies, strategies |
| `site:aihw.gov.au` | Australian Institute of Health & Welfare | National statistics, data |
| `site:abs.gov.au` | Australian Bureau of Statistics | Census, surveys |
| `site:tga.gov.au` | Therapeutic Goods Administration | Medicine scheduling, approvals |

### Policy & Parliamentary

| Domain | Organisation | Focus |
|--------|--------------|-------|
| `site:aph.gov.au` | Parliament | Inquiries, submissions, Hansard |
| `site:pmc.gov.au` | Prime Minister & Cabinet | National coordination |
| `site:ag.gov.au` | Attorney-General's Department | Drug law, legal frameworks |
| `site:alrc.gov.au` | Australian Law Reform Commission | Law reform reports |

### Quick Pattern: All Federal Government
```txt
site:*.gov.au -site:*.nsw.gov.au -site:*.vic.gov.au -site:*.qld.gov.au -site:*.wa.gov.au -site:*.sa.gov.au -site:*.tas.gov.au -site:*.act.gov.au -site:*.nt.gov.au
```

---

## 🏥 State & Territory Health Departments

Use these for **drug alerts, guidelines, NSP policies, and local health information**.

| State/Territory | Health Department | Broader Government |
|-----------------|-------------------|-------------------|
| **ACT** | `site:health.act.gov.au` | `site:*.act.gov.au` |
| **NSW** | `site:health.nsw.gov.au` | `site:*.nsw.gov.au` |
| **NT** | `site:health.nt.gov.au` | `site:*.nt.gov.au` |
| **QLD** | `site:health.qld.gov.au` | `site:*.qld.gov.au` |
| **SA** | `site:sahealth.sa.gov.au` | `site:*.sa.gov.au` |
| **TAS** | `site:health.tas.gov.au` | `site:*.tas.gov.au` |
| **VIC** | `site:health.vic.gov.au` | `site:*.vic.gov.au` |
| **WA** | `site:health.wa.gov.au` | `site:*.wa.gov.au` |

### All State Health at Once

```txt
site:*.health.*.gov.au "harm reduction"
```

This pattern catches all state/territory health department subdomains.

---

## 🔬 Research Centres & Universities

### Premier AOD Research Institutions

| Domain | Institution | Focus |
|--------|-------------|-------|
| `site:ndarc.med.unsw.edu.au` | National Drug & Alcohol Research Centre | Premier AOD research |
| `site:ndri.curtin.edu.au` | National Drug Research Institute | National policy research |
| `site:kirby.unsw.edu.au` | Kirby Institute | BBV, hepatitis, HIV |
| `site:csrh.arts.unsw.edu.au` | Centre for Social Research in Health | Social research, stigma |
| `site:burnet.edu.au` | Burnet Institute | Infectious disease, HR |
| `site:turning-point.org.au` | Turning Point | Treatment research |
| `site:nceta.flinders.edu.au` | NCETA | Workforce development |
| `site:matildacentre.com.au` | Matilda Centre | Substance use |
| `site:lowitja.org.au` | Lowitja Institute | Aboriginal health research |

### Generic University Research

```txt
site:*.edu.au filetype:pdf "harm reduction"
```

### Multi-Institution Search

```txt
site:ndarc.med.unsw.edu.au OR site:burnet.edu.au OR site:turning-point.org.au filetype:pdf
```

---

## 👥 Peer-Led & Drug User Organisations

> **Peer knowledge is expert knowledge.** Start here for lived experience perspectives.

| Organisation | Domain | State | Focus |
|--------------|--------|-------|-------|
| **AIVL** | `site:aivl.org.au` | National | Peak body for user organisations |
| **NUAA** | `site:nuaa.org.au` | NSW | User's News, peer programs |
| **HRVic** | `site:hrvic.org.au` | VIC | DanceWize, peer programs |
| **QuIHN** | `site:quihn.org` | QLD | Peer services, NSP |
| **WASUA** | `site:wasua.com.au` | WA | Peer support, advocacy |
| **CAHMA** | (search by name) | ACT | ACT peer advocacy |
| **SAVIVE** | (search by name) | SA | SA peer voice |
| **TUHSL** | `site:tuhsl.org.au` | TAS | Tasmania peer voice |
| **NTAHC** | `site:ntahc.org.au` | NT | NT peer programs |

### Multi-Peer-Org Search

```txt
(site:nuaa.org.au OR site:aivl.org.au OR site:hrvic.org.au OR site:quihn.org) filetype:pdf
```

### Finding Peer-Led Content Across Orgs

```txt
site:*.org.au ("peer-led" OR "user-led" OR "lived experience") filetype:pdf -jobs
site:*.org.au "nothing about us without us" harm reduction
site:*.org.au "peer worker" ("by peers" OR "for peers") filetype:pdf
```

---

## 🏢 Harm Reduction & Policy Organisations

| Organisation | Domain | Focus |
|--------------|--------|-------|
| **Penington Institute** | `site:penington.org.au` | Overdose data, policy |
| **Uniting (ReGen, MSIR)** | `site:uniting.org` | Services, MSIR reports |
| **ACON** | `site:acon.org.au` | LGBTQ+ health, chemsex |
| **Hepatitis Australia** | `site:hepatitisaustralia.com` | BBV, hep C elimination |

---

## 🏛️ State Peak Bodies

AOD sector peak bodies coordinate services and advocacy in each state.

| State | Organisation | Domain |
|-------|--------------|--------|
| NSW | NADA | `site:nada.org.au` |
| VIC | VAADA | `site:vaada.org.au` |
| QLD | QNADA | `site:qnada.org.au` |
| ACT | ATODA | `site:atoda.org.au` |
| WA | WANADA | `site:wanada.org.au` |
| SA | SANDAS | `site:sandas.org.au` |
| TAS | ATDC | `site:atdc.org.au` |
| NT | AADANT | `site:aadant.org.au` |

### Multi-Peak Search

```txt
(site:nada.org.au OR site:vaada.org.au OR site:qnada.org.au OR site:atoda.org.au) filetype:pdf
```

---

## 🖤💛❤️ Aboriginal Community Controlled Health

| Organisation | Domain | Focus |
|--------------|--------|-------|
| **NACCHO** | `site:naccho.org.au` | National Aboriginal health peak |
| **AHMRC** | `site:ahmrc.org.au` | NSW Aboriginal health |
| **VACCHO** | `site:vaccho.org.au` | VIC Aboriginal health |
| **QAIHC** | `site:qaihc.com.au` | QLD Aboriginal health |

### Finding ACCHO Content

```txt
(ACCHO OR "community controlled") "harm reduction" OR "alcohol drug"
"Aboriginal Community Controlled Health" AOD
```

---

## ⚖️ Coronial & Legal

### Coroners Courts (by State)

| State | Domain |
|-------|--------|
| NSW | `site:coroners.nsw.gov.au` |
| VIC | `site:coronerscourt.vic.gov.au` |
| QLD | `site:courts.qld.gov.au/courts/coroners-court` |
| WA | `site:coronerscourt.wa.gov.au` |
| SA | `site:courts.sa.gov.au/courts/coroners-court` |
| ACT | `site:coronialservices.act.gov.au` |
| NT | `site:courts.nt.gov.au/coroner` |
| TAS | `site:magistratescourt.tas.gov.au/divisions/coronial` |

### Legal Resources

| Domain | Focus |
|--------|-------|
| `site:alrc.gov.au` | Law Reform Commission |
| `site:legalaid.nsw.gov.au` | Legal Aid (NSW example) |

---

## 🎓 Professional Bodies & Conferences

| Organisation | Domain | Focus |
|--------------|--------|-------|
| **APSAD** | `site:apsad.org.au` | Professional society |
| **RACGP** | `site:racgp.org.au` | GP guidelines on AOD |
| **ATODA (NDC)** | `site:atoda.org.au/ndc` | National Drug Conference |

### Conference Proceedings

```txt
"APSAD conference" proceedings filetype:pdf
"National Drug Conference" OR "NDC" presentation filetype:pdf
```

---

## 🌏 International Comparators

| Country/Org | Domain | Focus |
|-------------|--------|-------|
| **Canada** | `site:*.gc.ca` | Safe supply, SCS |
| **EMCDDA** | `site:emcdda.europa.eu` | European data |
| **INPUD** | `site:inpud.net` | International peer network |
| **New Zealand** | `site:*.govt.nz` | Similar context |
| **Portugal** | `site:*.pt` | Decriminalisation |
| **UK** | `site:*.gov.uk` | DCRs, policy |
| **WHO** | `site:who.int` | Global guidance |
| **Switzerland** | `site:*.ch` | Heroin-assisted treatment |
| **Netherlands** | `site:*.nl` | Drug policy, coffeeshops |

### International Best Practice Pattern

```txt
("drug consumption room" OR "supervised consumption") evaluation (Canada OR Europe)
```

---

## 🔍 Domain Patterns Cheat Sheet

### Wildcard Patterns

| Pattern | Catches |
|---------|---------|
| `site:*.gov.au` | All Australian government |
| `site:*.health.*.gov.au` | All state health depts |
| `site:*.edu.au` | All Australian universities |
| `site:*.org.au` | All Australian organisations |
| `site:*.org` | All .org domains globally |

### Exclusion Patterns

```txt
# Government without news sites
site:*.gov.au -site:news.* -site:media.*

# Research without aggregators
site:*.edu.au -site:researchgate.net -site:academia.edu
```

### Multi-Domain OR

```txt
(site:health.nsw.gov.au OR site:health.vic.gov.au OR site:health.qld.gov.au) "drug alert"
```

---

## 📋 Quick Reference: What to Search Where

| I'm looking for... | Search here |
|--------------------|-------------|
| Drug alerts | `site:*.health.*.gov.au` |
| National policy | `site:health.gov.au` |
| State policy | `site:health.[state].gov.au` |
| Research evidence | `site:*.edu.au` or specific institution |
| Peer resources | Peer org domains (NUAA, AIVL, etc.) |
| Service directories | `site:*.gov.au` + state |
| Statistics | `site:aihw.gov.au` or `site:abs.gov.au` |
| Coronial findings | State coroner domain |
| Parliamentary submissions | `site:aph.gov.au` |
| International comparison | `site:*.gc.ca` / `site:*.gov.uk` / etc. |

---

[← Advanced Operators](03-advanced-operators.md) | [Synonym Blocks →](05-synonym-blocks.md)
