# Specificity Pass — Workflow & Handover

> A playbook for making Needle's dorks feel like they were written by a collective of harm reduction
> experts, professionals, and peers — not generated from a template. Hand this to a fresh chat or a
> new contributor and they can continue the work without losing the thread.

**Status:** in progress · **Tracking PR:** [#13](https://github.com/zophiezlan/Needle/pull/13) ·
**Branch:** `claude/harm-reduction-dorks-specificity-m4hdih`

---

## 1. The Goal

The packs are competent but most dorks follow one recognisable template:

```txt
site:*.gov.au filetype:pdf "keyword" (synonym OR synonym)
```

That's a _researcher's_ pattern — domain wildcard + keyword + filetype. Its uniformity is the tell
that it wasn't built by insiders. Real expert knowledge is lumpy and specific.

**The thesis: specificity = named entities + insider vocabulary.** The thing an expert or peer knows
and a non-expert can't guess is _the names_ — the report series, the service, the dataset, the
jargon. That single substitution is the whole game:

```txt
# Generic (anyone could write this):
site:nuaa.org.au filetype:pdf

# Written by someone who knows the source:
site:nuaa.org.au "User's News"
```

### Locked decisions (do not re-litigate)

These were chosen by the project owner. Keep to them unless told otherwise:

1. **Reference layer first.** Catalogue real entities before writing dorks. Dorks are written
   _against_ the reference, never from generic synonym templates.
2. **AU-deep with a strong international layer.** Australia is the spine; each pack gets a genuine
   expert international layer (named services/bodies), not token entries.
3. **Peer-first voice.** Lived-experience and drug-user-org sources lead every section. A corpus
   that only chases `.gov.au`/`.edu.au` PDFs reads as built by researchers _about_ people who use
   drugs rather than _by and with_ them.

---

## 2. What's Done So Far

| #   | Commit theme                                      | Artifact                                                                    |
| --- | ------------------------------------------------- | --------------------------------------------------------------------------- |
| 1   | Reference layer built                             | `docs/resources/source-intelligence.md`                                     |
| 2   | Flagged entries verified/corrected via web search | same file                                                                   |
| 3   | Drug-checking pack rewritten (proof-of-concept)   | `docs/dork-packs/drug-checking.md`                                          |
| 4   | Batch 2 rewritten + reference verified/extended   | `naloxone`, `supervised-consumption`, `novel-substances`, `coroners-deaths` |

- **`source-intelligence.md`** is the heart of this work: an entity → searchable-signal map. For
  each real org/service/dataset it records the `site:` target, the named publications to put in
  quotes, and the insider vocabulary. It is **excluded from `build-dorkbase.js`** (its tables aren't
  dorks). Sections currently covered: peer/PWUD core, drug checking, drug alerts/EWS, overdose &
  naloxone, supervised consumption & NSP, coroners, research & surveillance, community forums,
  international bodies.
- **drug-checking pack** is the reference implementation of the target voice. Read it before
  rewriting any other pack — match its structure, its "Why this works" notes, and its peer-first
  ordering.

---

## 3. The Per-Pack Rewrite Workflow

Repeat this loop for each pack:

1. **Read the reference section** for the pack's domain in `source-intelligence.md`. If the domain
   isn't covered yet, **build that reference section first** (see §4) — don't write dorks against
   entities you haven't catalogued.
2. **Verify every `⚠ verify` flag** you're about to rely on, using web search. Confirm the domain
   resolves and any quoted title actually returns results. Correct the reference, then de-flag.
   **Never ship a `"quoted title"` dork built on an unverified name** — fall back to the broader
   form until checked. (This step has already caught real errors: CanTEST was `.com.au` not
   `.org.au`; Penington's program is COPE not "CPOP".)
3. **Rewrite the pack markdown** (`docs/dork-packs/<pack>.md`):
   - Lead with peer/lived-experience sources.
   - Replace generic `site:*.gov.au` templates with named services, hosts, and report titles.
   - Keep a real international layer (named services, not "overseas examples").
   - Add concise **"Why this works"** notes that expose the insider reasoning (why that host, why
     that operator, why tie to a policy/coronial driver). The reasoning is what reads as expertise.
   - Preserve the difficulty structure — see §5 for how headers map to difficulty.
   - Link back to the reference section near the top and in Related Resources.
4. **Rebuild and verify** (see §5): `node scripts/build-dorkbase.js`, then confirm the pack's dork
   count, difficulty spread, and that the named domains appear in `targetDomains`.
5. **Lint:** `npm run format` + `npm run md:fix` (or check variants). Tables must stay aligned and
   sorted (`npm run sort-tables:check`).
6. **Commit** the markdown + regenerated `tools/dork-explorer/dork-data.json` +
   `dork-data-integrity.json`. Push to the branch — it updates PR #13.

### The quality bar — is this dork "expert"?

Ask: _could a non-specialist with good Google skills have written this?_ If yes, it's not done. A
finished dork names something only an insider knows exists — a service, a report series, a dataset,
a piece of jargon. Generic site+keyword+filetype dorks are fine as a _backstop_ tier, but they
should no longer be the bulk of a pack.

---

## 4. Building a New Reference Section

When a pack's domain isn't yet in `source-intelligence.md`:

1. Brainstorm the real entities for that domain — peer orgs first, then services, datasets,
   publications, international counterparts.
2. Web-search to confirm each: exact domain, exact publication/program names, current status.
3. Add a section to `source-intelligence.md` using the existing table shape: **Entity | `site:`
   target | Named signals (quote these) | Notes**. Flag anything unconfirmed `⚠ verify`.
4. Capture the **insider vocabulary** for the domain (terms practitioners/peers use that differ from
   lay language).

---

## 5. Pipeline & Technical Notes (read before editing data)

- **Markdown is the source of truth.** `scripts/build-dorkbase.js` scans `docs/**/*.md`, extracts
  dorks from ` ```txt ` code blocks _and from table cells_, infers metadata, and writes
  `tools/dork-explorer/dork-data.json` (+ `.js`, + `dork-data-integrity.json`). The Explorer reads
  the JSON.
- **Difficulty is inferred from section headers** via emoji/keywords: `⚡`/`🟢`/"Basic"/"Quick
  Start" → beginner, `🟡`/"Intermediate" → intermediate, `🔴`/"Advanced" → advanced. Use these
  headers deliberately so dorks land in the right tier.
- **Reference/index docs must be excluded from extraction.** `source-intelligence.md` is in the
  `ignore` list in `build-dorkbase.js` (around the `fg("**/*.md", …)` call). If you add another
  reference doc with illustrative code blocks/tables under `docs/`, add it to that ignore list too,
  or its examples will pollute the dataset. **This playbook lives at repo root precisely so it is
  never scanned** (the build only scans `docs/`).
- **Rebuild after every markdown change:** `node scripts/build-dorkbase.js` (or `npm run build`).
  Then sanity-check, e.g.:

  ```bash
  node -e 'const d=require("./tools/dork-explorer/dork-data.json");
    const p=d.packs.find(x=>x.id==="<pack-id>");
    console.log(p.dorks.length, [...new Set(p.dorks.map(x=>x.difficulty))]);'
  ```

- **CRLF note.** The committed `dork-data.json` was generated on Windows; multi-line query strings
  contain `\r\n`. Rebuilding on Linux normalises those to `\n`, so a rebuild touches a handful of
  unrelated lines in other packs. This is harmless — mention it in the commit message and move on.
- **`dork-data.json` is not prettier-clean on `main` either** — the repo commits raw build output.
  The CI Prettier step (`prettier --check .`) flags it regardless of your change, so don't chase it.
  (Optional cleanup, separate from this work: add `tools/dork-explorer/dork-data.json` to
  `.prettierignore`.)
- **CI** (`.github/workflows/lint.yml`): Prettier check + markdownlint (both gate) and typos
  (`continue-on-error: true`, informational). CI does **not** rebuild or verify the dataset. Add new
  proper nouns / non-English service names to `.typos.toml` if typos complains loudly.

---

## 6. Remaining Work

### Packs with reference coverage already in place (rewrite-ready)

Next-batch candidates — their `source-intelligence.md` sections exist (verify flags as you go):

- `drug-alerts.md` · `nsp.md` · `research.md` · `data-statistics.md` · `forum-community.md` ·
  `peer-workforce.md` · `international.md`
- `peer-knowledge.md` is already relatively strong (it was the model for the approach) — light
  touch.

**Done (batch 2):** `naloxone`, `supervised-consumption`, `novel-substances`, `coroners-deaths` —
rewritten peer-first against verified entities; reference layer corrected and extended (new § "Novel
Substances, NPS & Toxico-surveillance").

**Suggested next batch:** `drug-alerts`, `nsp`, `research`, `data-statistics` — adjacent to the work
just done and their reference sections are largely verified.

### Packs needing a reference section built first (§4 before §3)

`festivals` · `first-nations` · `lgbtq-health` · `prisons-justice` · `rural-remote` ·
`sex-worker-health` · `youth` · `families-carers` · `housing-homelessness` · `mental-health` ·
`oat-ost` · `policy-advocacy` · `service-directories` · `stigma-language` · `temporal-intelligence`
· `organizational-intelligence` · `investigative` · `document-discovery` · `multimedia-discovery` ·
`safer-use-education` · `user-hosted-domains`

> For `first-nations`, `sex-worker-health`, and `lgbtq-health` especially: prioritise community-
> controlled and peer sources, and be careful with framing/terminology. When in doubt, flag for
> human/peer review rather than guessing.

### Outstanding `⚠ verify` flags (confirm before use)

Resolved in batch 2: Urban Survivors Union domain (→ `urban-survivors.org`); the national wastewater
program (→ ACIC `"National Wastewater Drug Monitoring Program"` / NWDMP); HITS cohort scope (→
`HITS-c` / `HITS-p`, Kirby Institute hepatitis C cohorts — safe to name). Also corrected: NDARC host
migrated to `unsw.edu.au/research/ndarc` (query both domains); EMCDDA → EUDA rename
(`euda.europa.eu`); MSIR review chairs (Hamilton 2020, Ryan 2023 — not John Ryan/Ken Lay as first
guessed); QLD/ACT/NT coroner domains; Narcan = injectable (not nasal) in AU; IOAD founded by Sally
J. Finn (Penington coordinates, did not found).

Still flagged: **ATLAS** is an Aboriginal & Torres Strait Islander STI/BBV surveillance network, not
a PWID cohort — keep flagged for Indigenous-data-sovereignty / cultural-safety review. **NT coroner
host** is unstable (spread across `nt.gov.au` and `agd.nt.gov.au`) — use the multi-site form.
**EDND** ("European Database on New Drugs") is access-restricted, not web-indexed — dropped as a
quotable signal (use `"EU Early Warning System"` + EUDA/EMCDDA filters).

---

## 7. Known-Good Voice Example (Before → After)

Same intent ("find AU drug-checking evidence"), two authors:

```txt
# Before — hopes a relevant PDF exists somewhere on .edu.au:
site:*.edu.au filetype:pdf "drug checking" OR "pill testing" evaluation

# After — knows the report exists, its exact title, who wrote it, and where it's hosted:
"CanTEST Health and Drug Checking Service Program Evaluation" filetype:pdf
(site:directionshealth.com OR site:anu.edu.au) "CanTEST" evaluation filetype:pdf
```

That difference — named, located, sourced — is the entire deliverable. Reproduce it pack by pack.

---

## 8. One Standing Caveat

Domain/title accuracy is the one thing that can't be fully self-verified from model knowledge. Web
search catches most of it; a peer/owner skim catches the rest (e.g. whether a service's domain is
current, or whether terminology is the community's preferred form). Keep the `⚠ verify` discipline,
and prefer flagging for human review over confidently asserting an unconfirmed specific.
