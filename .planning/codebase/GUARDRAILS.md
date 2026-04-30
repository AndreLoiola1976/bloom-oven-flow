# Guardrails

These rules are **strict**. They apply to every change made by humans or AI agents during the migration toward the Framixor template.

> ⚠️ This document does **not** claim the codebase currently complies. It defines the rules going forward. See `CONCERNS.md` for known violations.

---

## 1. No hardcoded tenant content

UI components, pages, and `lib/` helpers MUST NOT contain literal tenant-specific strings.

**Forbidden:**
- Business names ("Bloom Oven")
- Locations ("Bethel, CT")
- Marketing copy ("Allergen-friendly", "Made fresh weekly")
- Form labels, placeholders, helper text
- Aria-labels referencing the tenant
- Email subject lines, default SMS messages

**Required source**: `tenant.content`, `tenant.business`, `tenant.contact`.

## 2. No duplicated phone/email/product/price data

A tenant value MUST exist in exactly one place.

**Forbidden:**
- Phone numbers in components, in `lib/contact.ts`, AND in tenant contracts
- Prices in `OrderPaths.tsx` AND in `catalog.ts`
- Email in `Footer.tsx` AND in `HowItWorks.tsx` as literals

**Required**: All such values flow from `tenant.contact` or `tenant.catalog`.

## 3. No business logic inside UI components

Components MUST NOT compute subtotals, validate shipping minimums, format order messages, or apply tax/fee rules inline.

**Required source**: `src/features/<feature>/*` modules. UI calls them.

## 4. No tenant-specific conditionals

UI MUST NOT branch on tenant identity (`if (tenant.id === 'bloom-oven')`) or on tenant-specific feature flags expressed as literals.

**Required**: Express variation as contract data. If the contract is missing a field, extend the contract — do not add a conditional.

## 5. No broad architecture rewrites

Changes MUST be incremental and surgical:
- One concern per change.
- No restructuring folders without an explicit request.
- No renaming files without an explicit request.
- No swapping libraries (router, state, styling) without an explicit request.

## 6. Preserve visual output unless explicitly requested

A migration step MUST NOT alter:
- Tailwind classes
- Layout structure (DOM order, wrappers, spacing)
- Typography, color, or spacing tokens
- Animation timing or transitions

Visual changes require an **explicit user request** for that change.

## 7. No premature abstraction

- No i18n layer until explicitly requested.
- No JSON-ification of contracts until explicitly requested.
- No multi-tenant runtime resolver until a second tenant exists.
- No CMS integration in scope.

## 8. Pure helpers in `lib/`

Functions in `src/lib/*` (excluding `tenantContact.ts`) MUST be pure: accept inputs, return outputs, no `tenant` import. The active-tenant binding lives in `tenantContact.ts`.

## 9. Contracts are typed

Every field added to a tenant contract MUST be reflected in `src/core/tenant/tenant.types.ts`. No `any`, no untyped catch-alls.

## 10. Typecheck must pass

After every step: `tsc --noEmit` clean. Build clean. Order flow manually verified for parity.
