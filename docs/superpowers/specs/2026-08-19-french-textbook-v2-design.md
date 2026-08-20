# French Textbook v2 — Design

Date: 2026-08-19
Status: Approved

## Problem

The v1 app (33 sections, ~557 KB) stores every lesson as hand-written HTML inside JS
template literals. Three consequences:

- **No Japanese.** Zero kana anywhere; the course is English-only.
- **Audio in 5 of 33 sections.** Sections 1, 3, 31, 32, 33 have `speak()` buttons.
  The other 28 have none.
- **No pronunciation guidance and no situational context** on any item.

Adding "audio + katakana + IPA + English-style reading + when-to-use" to every phrase
means editing ~1000 hand-written HTML fragments. That is the reason for a rebuild:
structured data makes all of it derived rather than authored.

## Decisions (from brainstorming)

| Question | Decision |
|---|---|
| Display language | English primary; Japanese for pronunciation + key points |
| Audio | Enhanced browser TTS (Web Speech API), no audio files |
| Scope of "modernization" | All four: visual/UX, learning features, content quality, code structure |
| Location | New `v2/` folder; v1 left untouched for comparison |

## Architecture

No build step. Classic `<script>` tags so `index.html` still opens by double-click
from `file://` (ES modules would break that). No CDN dependencies — fonts fall back to
system stacks and icons are inline SVG, so the app works fully offline.

```
v2/
├── index.html
├── css/
│   ├── tokens.css        design tokens, light + dark
│   ├── base.css          reset, typography, layout
│   └── components.css    cards, nav, quiz, flashcards
├── js/
│   ├── phonetics.js      French G2P: text → IPA → kana / EN-approx
│   ├── phonemes.js       ~35-entry phoneme table (JP anchor, EN anchor, tip)
│   ├── lexicon.js        exception dictionary of irregular high-frequency words
│   ├── audio.js          TTS wrapper: rate control, word-level, voice detection
│   ├── store.js          progress, settings, SRS state (localStorage)
│   ├── render.js         block type → DOM
│   ├── srs.js            Leitner-box flashcard scheduling
│   ├── quiz.js           section quizzes + listening drills
│   └── app.js            routing, nav, search, init
└── data/
    ├── curriculum.js     section index
    └── sections/s01.js … s33.js
```

## Pronunciation pipeline

Three layers, consulted in order. Later layers only run if earlier ones miss:

1. **Per-item override** — `ipa:` / `kana:` on the data item. Always wins.
2. **Exception lexicon** — ~200 high-frequency irregular words (`est`, `femme`,
   `monsieur`, `souvent`, `comment`, `beaucoup`, 3rd-person-plural `-ent` verb forms).
   French `-ent` is silent in verbs but pronounced in `souvent`/`comment`; no rule
   distinguishes them reliably, so they are listed.
3. **Rule engine** — longest-match grapheme→phoneme scan.

French orthography maps to sound far more regularly than English, so layer 3 is
expected to carry the large majority of items.

Rule coverage: nasal vowels (`ain/ein/in/im` → ɛ̃, `an/am/en/em` → ɑ̃, `on/om` → ɔ̃,
`un/um` → œ̃, `oin` → wɛ̃, `ien` → jɛ̃); vowel digraphs (`eau`/`au` → o, `ou` → u,
`oi` → wa, `ai`/`ei` → ɛ, `eu`/`œu` → ø~œ); consonant rules (`ch` → ʃ, `gn` → ɲ,
`qu` → k, `ç` → s, soft/hard `c` and `g`, intervocalic `s` → z, `ill` → j,
`tion` → sjɔ̃, `r` → ʁ); silent final `e`/`es`; final consonants silent except
c/r/f/l, with `-er`/`-ez` → e and `-et` → ɛ.

IPA is then rendered two ways:

- **Katakana** via a consonant × vowel table (`/bɔ̃/` → ボン, `/ʒu/` → ジュ).
- **English-style** syllables (`/bɔ̃.ʒuʁ/` → `bawn-ZHOOR`), final syllable
  capitalized to mark French end-stress.

Accuracy is expected around 85–90%; the UI labels these as guides, not authority.

## Phoneme table

~35 entries authored once. Each records the Japanese anchor, the English anchor, and
which of the two is actually closer — because it differs per sound:

- `ʒ` — English `measure` is exact; Japanese has no match.
- `y` (*tu*) — Japanese ユ-shaped lips are closer than English `oo`.
- `ʁ`, `ɑ̃` — neither language has it; both get explicit warnings.

Because every phrase is decomposed into phonemes by the engine, each phrase links to
the relevant entries automatically. This is what satisfies "日本語と英語の観点で"
without per-item authoring.

## Data model

```js
window.S01 = {
  id: 1,
  title: { en: "Introducing Yourself", fr: "Se présenter" },
  level: "A0",
  unit: "foundation",
  goals: [...],
  blocks: [
    { type: "phrases", title: "Greetings", items: [{
        fr: "Bonjour",
        en: "Hello / Good morning",
        ja: "こんにちは",
        when:    "Any time before evening. Works for anyone...",
        ja_when: "夕方までならいつでも。店員でも初対面でも使える万能の挨拶。",
        register: "neutral",          // formal | neutral | casual
        ipa: "bɔ̃.ʒuʁ",               // optional override
        tip: "R は喉の奥で。"          // optional
    }]},
    { type: "conjugation", verb: "être", ... },
    { type: "grammar",  ... },
    { type: "dialogue", ... },
    { type: "quiz",     ... },
    { type: "note",     ... }
  ]
}
```

Only `fr` and `en` are required. Everything phonetic is derived.

## Features

- **Audio** on every French item: normal + slow rate, tap-a-word for that word alone,
  and an explicit warning when the device has no French voice installed (otherwise
  the browser reads French with an English voice, producing nonsense).
- **Situation** on every expression: when, to whom, where, plus a register indicator.
- **Learning**: Leitner-box flashcards, section quizzes, listening drills
  (hear French → choose meaning), progress tracking.
- **Search** across every phrase in all 33 sections.
- **Dark mode**, mobile-first layout, full offline operation.

## Sequencing

1. Engine + UI shell + section 1 → review.
2. Remaining 32 sections converted after the shape is confirmed.

## Non-goals

- No pre-recorded audio files (revisit only if TTS quality proves inadequate).
- No build tooling, no framework, no npm.
- v1 files are not modified.
