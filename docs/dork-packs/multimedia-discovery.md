# Multimedia & Audiovisual Discovery

> Find video, audio, and visual harm-reduction content — named by the actual podcast and platform
> that still works, not a generic `site:youtube.com` guess (Google Podcasts and Stitcher are dead).

[← Back to Dork Packs](README.md) | [← Main Guide](../README.md)

---

## 👥 About This Pack

Audiovisual content is underused in harm-reduction research — and the specificity move is to name
the shows that actually exist. The strongest is **Crackdown** (Canada), made _by_ drug-user
activists; **Narcotica** and the **Drug Science Podcast** (UK) round out the named international
audio. Platform currency matters here as much as in temporal search: **Google Podcasts** (shut 2024)
and **Stitcher** (shut 2023) are dead — use Apple Podcasts and Spotify's `open.spotify.com`.

> **Entity reference:** every platform and named show below is catalogued in
> [Source Intelligence → Discovery Platforms & File Types](../resources/source-intelligence.md#-discovery-platforms--file-types).

---

## ⚡ Quick Start

Go to the drug-user-led harm-reduction podcast:

```txt
(site:crackdownpod.com OR site:podcasts.apple.com) "Crackdown" "harm reduction"
```

---

## 🟢 Basic Queries

### Named Harm-Reduction Podcasts

```txt
("Crackdown" OR "Narcotica" OR "Drug Science Podcast") ("harm reduction" OR "drug policy" OR overdose)
```

**Why this works:**

- Names the real shows — **Crackdown** (`crackdownpod.com`, drug-user-led), **Narcotica**
  (`narcocast.com`), **Drug Science Podcast** (`drugscience.org.uk`, David Nutt) — instead of hoping
  a generic podcast search surfaces something on-topic

### YouTube Training & Education

```txt
site:youtube.com "harm reduction" (training OR workshop OR tutorial OR "how to")
```

### Vimeo Organisational Content

```txt
site:vimeo.com ("harm reduction" OR "drug checking" OR naloxone)
```

---

## 🟡 Intermediate Queries

### Naloxone Training Videos

```txt
site:youtube.com (naloxone OR Nyxoid OR Narcan) (training OR "how to" OR administration OR "step by step")
```

**Why this works:**

- Visual overdose-response training is high-value and abundant — naming the AU product **Nyxoid**
  alongside naloxone catches Australian-specific clips

### Drug-Checking Explainers

```txt
(site:youtube.com OR site:vimeo.com) ("drug checking" OR "pill testing" OR "reagent testing") (guide OR explained OR "how it works")
```

### Conference & Webinar Recordings

```txt
(site:youtube.com OR site:vimeo.com) "harm reduction" (conference OR symposium OR keynote OR webinar OR APSAD)
```

### Podcast Platforms (Live Ones)

```txt
(site:podcasts.apple.com OR site:open.spotify.com OR site:soundcloud.com) ("harm reduction" OR "drug policy" OR naloxone)
```

> Note: drop `site:podcasts.google.com` (Google Podcasts shut 2024) and `site:stitcher.com`
> (shut 2023) — neither resolves. Use the three above.

---

## 🔴 Advanced Queries

### Comprehensive Video Sweep

```txt
(site:youtube.com OR site:vimeo.com OR site:dailymotion.com) "harm reduction" (Australia OR Australian)
```

### TED / TEDx Talks

```txt
(site:ted.com/talks OR site:youtube.com) (TED OR TEDx) ("harm reduction" OR "drug policy" OR decriminalisation OR addiction)
```

### Peer-Produced & Lived-Experience Video

```txt
site:youtube.com ("lived experience" OR "peer worker" OR "person who uses drugs" OR PWUD) ("harm reduction" OR naloxone OR "drug checking")
```

**Why this works:**

- Peer-produced content carries practical, in-their-own-words knowledge an official training video
  misses — leading with it keeps the corpus peer-first

### Documentary & Current Affairs

```txt
(site:abc.net.au OR site:sbs.com.au OR site:youtube.com) (documentary OR "Four Corners" OR investigation) ("harm reduction" OR "pill testing" OR "ice" OR "opioid")
```

---

## 🎧 Podcasts (Named + Platforms)

### The Named Shows

```txt
(site:crackdownpod.com OR site:narcocast.com OR site:drugscience.org.uk) (episode OR "harm reduction" OR "drug policy")
```

### Finding Episodes by Topic

```txt
(site:podcasts.apple.com OR site:open.spotify.com) (naloxone OR nitazene OR "safe supply" OR "drug checking")
```

### Audio Interviews & Oral Histories

```txt
(site:soundcloud.com OR site:archive.org) (interview OR "oral history") ("harm reduction" OR "drug use")
```

---

## 📊 Presentation & Slide Platforms

```txt
(site:slideshare.net OR site:speakerdeck.com OR site:prezi.com) "harm reduction" (conference OR training OR APSAD OR AIVL)
```

> SlideShare is now a Scribd property; both still index. Canva design links are **not**
> Google-indexed (only published Canva Sites are), so skip `site:canva.com` for flyers.

---

## 🖼️ Visual & Infographic Content

### Infographics & Posters

```txt
("harm reduction" OR naloxone OR "drug checking") (infographic OR poster OR "visual guide") (filetype:pdf OR filetype:png)
```

### Health-Promotion Materials

```txt
(site:*.health.*.gov.au OR site:*.org.au) "harm reduction" (poster OR flyer OR brochure OR "fact sheet") filetype:pdf
```

---

## 🌏 Australian Content

### Australian Orgs (Video)

```txt
site:youtube.com (AIVL OR NUAA OR "Harm Reduction Victoria" OR QuIHN OR "Penington Institute" OR DanceWize)
```

### Australian Broadcasters

```txt
(site:abc.net.au OR site:sbs.com.au) (video OR watch OR Hack) ("harm reduction" OR "pill testing" OR "drug checking")
```

**Why this works:**

- triple j **Hack** (not _The Hook Up_, which is a sex/relationships show) is the AU broadcast
  strand that actually covers pill testing and drug policy — pairing the broadcasters with it finds
  real coverage

### Australian Conferences

```txt
(site:youtube.com OR site:vimeo.com) (APSAD OR "Australasian" OR "Drug and Alcohol") (conference OR symposium OR keynote)
```

---

## 💡 Advanced Techniques

### Search Within a Channel

```txt
site:youtube.com/@[handle] ("harm reduction" OR naloxone)
```

### Videos Embedded on Org Sites

```txt
site:*.org.au ("youtube.com/watch" OR "youtube.com/embed" OR "player.vimeo.com") "harm reduction"
```

### Finding Transcripts

```txt
(transcript OR subtitles OR captions) ("harm reduction" OR "drug policy") (video OR webinar OR podcast) filetype:pdf
```

---

## ⚠️ Considerations

- **Dead platforms:** Google Podcasts (2024) and Stitcher (2023) are gone — don't dork them.
- **Platform skew:** Rumble skews toward anti-harm-reduction content — treat results critically.
- **Quality & currency:** video ranges from professional to amateur; check upload dates and
  cross-reference claims with official sources.

---

## 🔗 Related Resources

- **Source Intelligence:**
  [Discovery Platforms & File Types](../resources/source-intelligence.md#-discovery-platforms--file-types)
  — the live platforms and named shows every dork above is built on
- **Related Packs:** [Peer Knowledge](peer-knowledge.md),
  [Safer Use Education](safer-use-education.md), [User-Hosted Domains](user-hosted-domains.md)
- **Key Shows:** [Crackdown](https://crackdownpod.com), [Narcotica](https://narcocast.com),
  [Drug Science Podcast](https://drugscience.org.uk/podcast)

---

[← Back to Dork Packs](README.md)
