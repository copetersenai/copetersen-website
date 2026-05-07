# copetersen.ai — Design System

**Brand:** Christian O. Petersen / copetersen.ai  
**Tagline:** Helping CEOs and business owners make better decisions.  
**Role:** Vistage Chair · Executive Coach · AI Advisor · Mid Peninsula, CA

---

## Sources

| Asset | Path |
|---|---|
| Design guide (PDF, 1 slide) | `uploads/copetersen design guide.pdf` |
| Logo SVG | `uploads/copetersen logo.svg` → `assets/copetersen-logo.svg` |
| Portrait — thoughtful, seated | `assets/photo-portrait.jpg` |
| Portrait — coffee/conversation | `assets/photo-coffee.jpg` |
| Portrait — hotel lobby, on phone | `assets/photo-hotel-call.jpg` |
| Portrait — hotel lobby, standing | `assets/photo-hotel-lobby.jpg` |
| Portrait — boat, outdoors | `assets/photo-boat.jpg` |

No Figma link provided. No codebase provided. Design system is built from the PDF guide and photo assets.

---

## Product Overview

copetersen.ai is a **personal brand / professional services website** for Christian O. Petersen. There is one primary product surface: a **single-page scrolling website** (copetersen.ai).

**Page sections:** Nav → Hero → Proof Strip → About → Peer Group → The Call → Thinking → Footer

**SEO title:** "Christian O. Petersen | Vistage Chair, Executive Coach and AI Advisor | copetersen.ai"  
**Meta description:** "Vistage Chair Christian O. Petersen helps CEOs and business owners in the mid peninsula make better decisions through peer advisory groups, 1:1 coaching, and AI strategy."

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Direct, confident, warm.** Christian speaks peer-to-peer with senior leaders — never condescending or salesy.
- **First-person singular ("I")** where Christian speaks; **second-person ("you")** when addressing the reader/CEO.
- **Short sentences.** Clarity over cleverness. No jargon unless it's industry-standard (Vistage, peer group, etc.).
- **No emoji.** Professional context; emoji would undermine gravitas.
- **No exclamation points** (or extremely rare). Confidence doesn't need emphasis.
- **Sentence case** for headings and body copy. Title case only for proper nouns / official names.

### Casing
- Headings: **Sentence case** (e.g., "Make better decisions")
- Navigation: **Title case** (e.g., "Peer Groups", "About", "The Call")
- Eyebrows / labels: **ALL CAPS** with wide tracking (e.g., "VISTAGE CHAIR")

### Copy Vibe
- Outcomes-focused: "better decisions," "grow your business," "trusted peers"
- Credential-led but not boastful: mentions Vistage, mid-peninsula location, 1:1 coaching naturally
- Conversational in CTAs: "Let's talk" vs "Schedule a consultation"
- Anchored in peer wisdom and lived experience

### Examples
- Hero headline: "Make better decisions."
- Sub-headline: "I help CEOs and business owners on the mid peninsula think more clearly, lead more confidently, and grow with trusted peers."
- CTA: "Schedule a call" / "Let's talk"
- Section eyebrow: "PEER ADVISORY"

---

## VISUAL FOUNDATIONS

### Colors
- **Ink / Navy** `#1A1A2E` — primary text, dark sections, logo body
- **Brand Red** `#c80815` — CTA, links, logo inner mark, accent elements (confirmed from logo SVG)
  - Dark variant: `#a8060f` (hover states)
  - Light variant: `#e8192a` (on dark backgrounds)
- **Slate Blue** `#3B5068` — secondary UI, supporting text on dark
- **Off-white** `#F7F5F2` — alt backgrounds, section tints
- **Warm grays** `#EAE7E2` → `#3D3935` — borders, muted text, dividers
- Logo uses two colors: primary paths in ink/dark, accent inner arcs in crimson

### Typography
- **Single typeface system: Open Sans** (variable font, weights 100–900)
- **Display / Headings:** weight 200 (ultralight), tight letter-spacing (`-0.02em`) — refined, editorial, executive
- **Body / UI:** weight 300 (light) — clean, humanist, excellent readability
- **Labels / UI chrome:** weight 600 (semibold), wide tracking for eyebrows
- **Italic:** variable italic included (used sparingly for pull quotes)
- **Mono:** Courier New (fallback only, rarely used)
- Matches the logo wordmark exactly — full brand coherence across all surfaces
- Font files: `fonts/OpenSans-VariableFont_wdth_wght.ttf` and `fonts/OpenSans-Italic-VariableFont_wdth_wght.ttf`

### Backgrounds
- **White** (#FFFFFF) — default section background
- **Off-white** (#F7F5F2) — alternate sections (About, Thinking)
- **Dark ink** (#1A1A2E) — hero, key CTA sections
- **Full-bleed photography** — used in hero and lifestyle sections; always dark-overlaid for text legibility
- No gradients. No patterns or textures. No hand-drawn illustration.
- Protection: dark overlay gradient (`linear-gradient(to bottom, rgba(26,26,46,0.5) 0%, rgba(26,26,46,0.85) 100%)`) over hero image

### Photography
- **Warm, natural color** — not desaturated or B&W
- **Natural light** — interiors (hotel lobbies, cafes) and outdoors
- **Lifestyle + professional** mix: seated conversations, on the phone, sailing — active, accessible, not stiff boardroom shots
- **Subject:** Always Christian; approachable, direct eye contact OR candid action
- **Color signature:** burgundy/red accent in wardrobe (red glasses are iconic; red/maroon shirts recur)

### Logo
- SVG only (vector-first). Two-color: dark body paths + crimson inner arcs.
- Monochrome version: all-dark (ink) for light backgrounds
- On dark backgrounds: all-white
- Minimum size: 40px height
- No tagline lockup in the SVG provided
- viewBox: `0 0 1920 1080` — wide format; crop to the mark only for most uses

### Cards & Components
- Cards: **no border**, subtle shadow (`0 4px 12px rgba(26,26,46,0.10)`), white background, `4px` radius (minimal rounding)
- No colored left-border accent style
- No rounded pill cards
- Hover: slight shadow increase + `translateY(-2px)`; no color change

### Borders & Dividers
- 1px solid `#D4CFC9` (warm-gray-2) for subtle separators
- No heavy borders; prefers whitespace for separation

### Corner Radii
- Buttons: `4px` (almost square — executive, not playful)
- Cards: `4px`
- Images: `0` (full bleed or sharp crop)
- Pill/tags: `9999px` (rare)

### Shadows
- Light and warm-toned (uses ink color at low opacity, not cold gray)
- `sm`: `0 1px 3px rgba(26,26,46,0.08)` — default card
- `lg`: `0 12px 32px rgba(26,26,46,0.12)` — elevated modals / hero cards

### Animation
- **Subtle fade-in on scroll** — opacity 0→1, translateY 16px→0, ~400ms ease-out
- No bounces, springs, or playful easing
- No looping animations
- Hover transitions: 150–250ms ease
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for enter; `ease` for hover

### Hover & Press States
- Links: color shifts to accent-mid (`#A62240`)
- Buttons: background darkens slightly, `translateY(-1px)`, shadow grows
- No opacity fade on hover (full opacity maintained)
- Press/active: `translateY(0)` returns to baseline

### Layout
- **Max content width:** 1280px (wide), 960px (standard), 680px (text-only)
- **Section padding:** 80px vertical, 32px horizontal
- Fixed nav on scroll
- Full-width hero (100vw)
- Grid: 12-column conceptually; often 1-col (text) or 2-col (text + photo)

### Use of Blur / Transparency
- Frosted glass nav on scroll: `backdrop-filter: blur(12px)` + white at 80% opacity
- No other blur usage
- Transparency used on overlay text protection over photos

---

## ICONOGRAPHY

- **No custom icon library** identified in assets
- **No icon font** provided
- The logo SVG is the primary brand mark
- Icons (if used on site): recommend **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest`) — thin stroke, 1.5px, geometric, matches the Open Sans Light aesthetic
- **No emoji** in UI or copy
- **No unicode chars** used as icons
- Navigation uses text links (no icons)
- Social links may use minimal SVG icons (LinkedIn)
- See `assets/copetersen-logo.svg` for the only confirmed brand mark

---

## FILE INDEX

```
README.md                    ← This file
SKILL.md                     ← Agent skill definition
colors_and_type.css          ← CSS variables: colors, type, spacing, shadows

assets/
  copetersen-logo.svg        ← Brand logo (SVG vector)
  photo-portrait.jpg         ← Professional portrait, seated outdoors
  photo-coffee.jpg           ← Coffee/conversation lifestyle
  photo-hotel-call.jpg       ← Hotel lobby, on phone
  photo-hotel-lobby.jpg      ← Hotel lobby, standing
  photo-boat.jpg             ← Outdoor / boat lifestyle

preview/
  colors-primary.html        ← Primary color palette card
  colors-neutrals.html       ← Neutral / warm gray scale
  colors-semantic.html       ← Semantic color assignments
  type-display.html          ← Display / heading type specimens
  type-body.html             ← Body / UI type specimens
  type-scale.html            ← Full type scale
  spacing-tokens.html        ← Spacing tokens
  spacing-shadows.html       ← Shadow & radius system
  components-buttons.html    ← Button states
  components-nav.html        ← Navigation component
  components-cards.html      ← Card variants
  brand-logo.html            ← Logo usage
  brand-photography.html     ← Photography style guide

ui_kits/website/
  README.md                  ← Website UI kit notes
  index.html                 ← Full single-page website prototype
  Nav.jsx                    ← Navigation component
  Hero.jsx                   ← Hero section
  Sections.jsx               ← About, Peer Group, The Call, Thinking sections
  Footer.jsx                 ← Footer component
```
