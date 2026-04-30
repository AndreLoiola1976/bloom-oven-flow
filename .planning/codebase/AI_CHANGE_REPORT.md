# AI Change Report

Running log of non-trivial migration steps. Newest entries on top. Each entry MUST list: scope, files touched, hardcoded data removed, new dependencies, remaining debt, validation result.

---

## Template

```
## YYYY-MM-DD — <short title>

**Scope**: <one sentence>

**Files created**:
- path

**Files modified**:
- path

**Files deleted**:
- path

**Hardcoded data removed**:
- <what> → moved to <where>

**New dependencies between files**:
- <file> now depends on <file>

**Remaining tech debt**:
- <item>

**Validation**:
- TypeScript build: pass/fail
- Order flow tested: yes/no
- Visual unchanged: yes/no
```

---

## 2026-04-30 — Refactor step 1: Order.tsx + FinalCTA literal sweep

**Scope**: Move residual user-facing literals from `Order.tsx` and `FinalCTA.tsx` into the tenant content contract.

**Files created**: none

**Files modified**:
- `src/core/tenant/tenant.types.ts`
- `src/tenants/bloom-oven/content.ts`
- `src/pages/Order.tsx`
- `src/components/FinalCTA.tsx`

**Files deleted**: none

**Hardcoded data removed**:
- `Order.tsx` hero image alt `"Freshly baked gluten-free cookies from The Bloom Oven"` → `tenant.content.orderPage.heroImageAlt`
- `Order.tsx` `"Most Popular"` badge → `tenant.content.orderPage.mostPopularBadge`
- `Order.tsx` `"Signature Box"` pill → `tenant.content.orderPage.signatureBoxBadge`
- `Order.tsx` `"Subtotal"` summary label → `tenant.content.orderPage.subtotalLabel`
- `FinalCTA.tsx` `"WhatsApp"` button label → `tenant.content.finalCta.whatsAppLabel` (kept surface-local rather than reusing `orderPage.altCtas.whatsapp` to avoid cross-surface coupling)

**New dependencies between files**: none (existing tenant import paths reused)

**Remaining tech debt** (per `CONCERNS.md`):
- `index.html` metadata still hardcoded
- `NotFound.tsx` still hardcoded
- `HeroSection.tsx` badges + alts still hardcoded
- `Footer.tsx` logo-alt duplicates `header.logoAlt`
- `content.ts` `pickupHelper` still embeds "Bethel, CT" instead of using a builder

**Validation**:
- TypeScript build: **pass** (`tsc --noEmit` exit 0)
- Order flow tested: yes (logic unchanged; only string sources swapped)
- Visual unchanged: yes (no className, layout, or DOM changes)

---

## 2026-04-30 — Planning guardrails created

**Scope**: Documentation only. No application code modified.

**Files created**:
- `.planning/codebase/ARCHITECTURE.md`
- `.planning/codebase/STRUCTURE.md`
- `.planning/codebase/GUARDRAILS.md`
- `.planning/codebase/CONVENTIONS.md`
- `.planning/codebase/CONCERNS.md`
- `.planning/codebase/AI_CHANGE_REPORT.md`

**Files modified**: none

**Files deleted**: none

**Hardcoded data removed**: none (documentation step)

**New dependencies between files**: none

**Remaining tech debt**: see `CONCERNS.md`

**Validation**:
- TypeScript build: not impacted (no code changes)
- Order flow tested: not applicable
- Visual unchanged: yes (no UI changes)

---

## Prior history (summarized from chat)

The following migration steps occurred before this report file existed. They are summarized here for continuity; treat as informational, not authoritative.

- Extracted tenant contracts under `src/tenants/bloom-oven/` (business, catalog, contact, content, theme).
- Created `src/core/tenant/{tenant.ts, tenant.types.ts}`.
- Extracted order logic into `src/features/order-intake/{orderCalculations.ts, orderMessage.ts}`.
- Converted `src/lib/contact.ts` and `src/lib/whatsapp.ts` into pure builders accepting `ContactInfo`.
- Added `src/lib/tenantContact.ts` as the tenant-bound convenience layer.
- Migrated `Header`, `Footer`, `HeroSection`, `HowItWorks`, `OrderPaths`, `BrandStory`, `Testimonials`, `InstagramSection`, `FinalCTA`, `WhatsAppButton`, and most of `Order.tsx` to consume `tenant.content`.
- Enforced shipping minimum business rule in the order flow.

Known residuals at the time of this report: see `CONCERNS.md`.
