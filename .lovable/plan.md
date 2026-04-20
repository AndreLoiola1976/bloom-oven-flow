

# Header & Hero Visual Refinements

## Issues Identified

After analyzing the current `Header.tsx` and `HeroSection.tsx`, here are the 5 key improvements needed:

### 1. Logo overlapping hero text
The logo (`h-12 md:h-14`) sits in a fixed header at `top: 40px` (below the announcement bar). Because the hero has no top padding to compensate for the fixed header, the logo visually overlaps the headline "Freshly Baked Cookies" on certain viewport sizes.

### 2. Poor menu contrast against hero image
Menu links use `text-foreground/60` (warm charcoal at 60% opacity) — when the header is **transparent** over the bright cookie image, these dark links blend into the warm cream/cookie tones, creating poor readability. The Instagram icon (`text-foreground/40`) is even worse.

### 3. Logo lacks a contrast backdrop in transparent state
When scrolled to top, the logo sits directly on the cookie photo with no protection — it can blend into bright spots in the image.

### 4. Header has no backdrop until scroll
The `bg-transparent` initial state offers zero separation between navigation and hero content, hurting both legibility and visual hierarchy.

### 5. Hero section lacks top breathing room
The hero starts at the very top of the viewport with `min-h-[92vh]`, and content is vertically centered — meaning the headline can sit dangerously close to the header zone on shorter screens.

---

## Proposed Changes

### `src/components/Header.tsx`
- **Menu links — adaptive color:** When header is transparent (top of page), use a light/white tone with subtle text-shadow for readability over the image. When scrolled, revert to the current dark-on-cream style.
  - Transparent state: `text-white/90 hover:text-white drop-shadow-md`
  - Scrolled state: `text-foreground/70 hover:text-sage`
- **Instagram icon — same adaptive treatment:** `text-white/80` when transparent, `text-foreground/50` when scrolled.
- **Logo backdrop in transparent state:** Add a soft semi-transparent cream pill (`bg-cream/40 backdrop-blur-sm rounded-full px-3 py-1`) behind the logo only when not scrolled, so it always stays legible.
- **Slight header padding reduction:** Tighten vertical padding (`py-3 md:py-4`) to reduce footprint over the hero.

### `src/components/HeroSection.tsx`
- **Add top padding to hero content:** Add `pt-28 md:pt-24` to the inner grid container so the headline never sits underneath the fixed header + announcement bar (combined ~110px).
- **Strengthen left-side overlay slightly** (only on the text side) so the logo and headline area get a touch more contrast — adjust gradient to `from-cream/90 via-cream/65 to-transparent` (small bump from current `/85` and `/60`). This protects both the new lighter menu and the headline without washing out the cookies on the right.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/Header.tsx` | Adaptive nav/icon colors based on `scrolled` state, logo backdrop pill when transparent, tightened padding |
| `src/components/HeroSection.tsx` | Add top padding to hero content grid, slight gradient strength bump on text side |

## Visual Result

- Logo always legible — backdrop pill at top, clean cream bar after scroll
- Menu links readable in both states (light over image, dark over cream)
- Headline never collides with header — proper top spacing
- Cookies remain vivid (right side of gradient unchanged)
- Premium, intentional layering between header and hero

