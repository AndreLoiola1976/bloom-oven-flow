# Architecture

## Current State (Honest Assessment)

This project began as a visual-first Lovable app for **Bloom Oven** (a single-tenant cookie business) and is being incrementally migrated toward a **contract-first, tenant-driven Framixor template**.

The codebase is **partially migrated**, not yet compliant with the target architecture.

## Target Architecture

A multi-tenant React app where:

- **UI components** are presentation-only and tenant-agnostic.
- **Tenant contracts** (data + content + theme) are the single source of truth for tenant-specific values.
- **Feature modules** own business logic (calculations, message builders, validation).
- **Library helpers** are pure utilities that accept tenant data as arguments.

```
src/
  core/tenant/            # Tenant types and active tenant resolver
  tenants/<tenant-id>/    # Tenant contracts: business, catalog, contact, content, theme
  features/<feature>/     # Pure business logic modules
  components/             # Presentation-only React components
  pages/                  # Route compositions
  lib/                    # Pure helpers / builders
```

## Current Layers (as of this document)

| Layer | Status | Notes |
|---|---|---|
| `src/core/tenant/` | ✅ in place | `tenant.ts`, `tenant.types.ts` exist |
| `src/tenants/bloom-oven/` | ✅ in place | business, catalog, contact, content, theme |
| `src/features/order-intake/` | ✅ in place | calculations + message builders extracted |
| `src/lib/contact.ts`, `whatsapp.ts` | ✅ pure builders | accept `ContactInfo` as argument |
| `src/lib/tenantContact.ts` | ✅ tenant-bound convenience layer | |
| `src/components/*` | ⚠️ partial | most consume `tenant.content`, but residuals remain |
| `src/pages/Order.tsx` | ⚠️ partial | mostly contract-driven; residual literals possible |
| `src/components/HeroSection.tsx` | ⚠️ partial | hero badges still hardcoded |
| `index.html` | ❌ hardcoded | title/description not tokenized |

## Contract Layer

The active tenant is exported from `src/core/tenant/tenant.ts` and shaped by `tenant.types.ts`:

- `tenant.business` — business rules (shipping minimum, pickup location, name, reply time)
- `tenant.catalog` — products and prices
- `tenant.contact` — phone, email, social URLs, default messages
- `tenant.content` — all user-facing copy, grouped by surface (hero, ordering, footer, orderPage, etc.)
- `tenant.theme` — design tokens (currently CSS variables in `index.css` are still primary)

## Data Flow

```
tenant contracts → components (read-only)
tenant contracts → features/* → components (logic)
tenant.contact → lib builders → components (URLs)
```

UI components MUST NOT contain literal tenant strings, prices, phone numbers, or business rules.
