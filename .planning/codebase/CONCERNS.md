# Concerns — Migration Debt

This is the running list of known gaps between the current codebase and the Framixor target architecture. It is **not** a TODO for this turn — it is the inventory that future migration steps will draw from.

> Status legend: 🔴 confirmed, 🟡 likely, ⚪ to verify

---

## Components still potentially visual-first

- 🟡 **`HeroSection.tsx`** — hero badges ("Allergen-Friendly", "Made Fresh Weekly") and image `alt` text are hardcoded.
- ⚪ **`BrandStory.tsx`** — confirmed migrated in earlier passes; verify no residual literals.
- ⚪ **`Testimonials.tsx`** — confirmed migrated; verify avatar alt text and section labels.
- ⚪ **`InstagramSection.tsx`** — confirmed migrated; verify image alt text.
- ⚪ **`FinalCTA.tsx`** — verify all copy is sourced from `tenant.content`.
- ⚪ **`NotFound.tsx`** — likely contains hardcoded "404" messaging.

## Hardcoded content in components

- 🔴 **`HeroSection.tsx`**: badge labels.
- 🟡 **`Order.tsx`**: residual aria-labels or microcopy may still exist; needs a literal-string scan.
- 🔴 **`index.html`**: `<title>` and `<meta description>` are static and tenant-specific.

## Brand-named classes / tokens

- 🟡 Color tokens like `sage`, `cream`, `toffee`, `foreground` are tenant-flavored names embedded in Tailwind classes across many components. Migrating to fully semantic names (e.g., `accent`, `surface`) would touch every file. **Out of scope until requested.**

## Contact data duplication

- ⚪ Verify no component imports raw contact literals alongside `tenant.contact`.
- ⚪ `US_PHONE` / `US_PHONE_DISPLAY` re-exports in `tenantContact.ts` are convenience aliases — confirm no component imports phone numbers from anywhere else.

## Order page residuals

- ⚪ **`Order.tsx`**: scan for any remaining literal labels, error text, success-state strings, or button copy not yet routed through `tenant.content.orderPage`.

## Business logic placement

- ✅ Subtotal + shipping eligibility live in `features/order-intake/orderCalculations.ts`.
- ✅ Order message builder lives in `features/order-intake/orderMessage.ts`.
- ⚪ Verify no component re-implements these inline (e.g., a component computing `items.reduce(...)`).

## Theme

- 🟡 `tenant.theme` exists but `index.css` CSS variables remain the de-facto source of truth. Bridge or single-source decision pending.

## Test coverage

- 🔴 No tests exercise the contract layer, calculation module, or message builder beyond the example test.

## Multi-tenant readiness

- 🔴 Only `bloom-oven` exists. No runtime tenant resolver. No second tenant to validate the contract shape.

## Out of scope (explicit non-goals right now)

- i18n
- JSON-ifying contracts
- CMS / remote contract loading
- Renaming brand-flavored color tokens
- Restructuring folder layout
