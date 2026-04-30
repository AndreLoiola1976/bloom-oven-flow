# Project Structure

Snapshot of the current `src/` tree relevant to the migration. UI primitives in `src/components/ui/*` (shadcn) are intentionally omitted — they are tenant-agnostic and out of scope.

```
src/
├── core/
│   └── tenant/
│       ├── tenant.ts              # Active tenant export
│       └── tenant.types.ts        # Tenant contract shape
│
├── tenants/
│   └── bloom-oven/
│       ├── index.ts               # Composed tenant export
│       ├── business.ts            # Business rules (shipping min, pickup, reply time)
│       ├── catalog.ts             # Products and prices
│       ├── contact.ts             # Phone, email, socials, default messages
│       ├── content.ts             # All user-facing copy
│       └── theme.ts               # Theme tokens
│
├── features/
│   └── order-intake/
│       ├── orderCalculations.ts   # Subtotal, shipping eligibility
│       └── orderMessage.ts        # SMS/order request body builder
│
├── lib/
│   ├── contact.ts                 # Pure builders: buildSmsUrl, buildTelUrl
│   ├── whatsapp.ts                # Pure builder: buildWhatsAppUrl
│   ├── tenantContact.ts           # Tenant-bound convenience wrappers
│   └── utils.ts                   # cn() and misc
│
├── components/
│   ├── Header.tsx                 # Consumes tenant.content.header
│   ├── HeroSection.tsx            # ⚠️ hero badges still hardcoded
│   ├── BrandStory.tsx             # Consumes tenant.content.brandStory
│   ├── OrderPaths.tsx             # Consumes tenant.content.orderPaths
│   ├── HowItWorks.tsx             # Consumes tenant.content.ordering
│   ├── Testimonials.tsx           # Consumes tenant.content.testimonials
│   ├── InstagramSection.tsx       # Consumes tenant.content.instagramSection
│   ├── FinalCTA.tsx               # Consumes tenant.content
│   ├── Footer.tsx                 # Consumes tenant.content.footer
│   ├── WhatsAppButton.tsx         # Consumes tenant.content.whatsAppButton
│   └── NavLink.tsx                # Tenant-agnostic
│
├── pages/
│   ├── Index.tsx                  # Landing composition
│   ├── Order.tsx                  # ⚠️ mostly contract-driven; possible residuals
│   └── NotFound.tsx               # ⚠️ likely hardcoded copy
│
├── index.css                      # Theme CSS variables (primary theme source)
└── main.tsx
```

## Key Entry Points

- **Active tenant**: `src/core/tenant/tenant.ts` → re-exports `src/tenants/bloom-oven/index.ts`
- **Landing route**: `src/pages/Index.tsx`
- **Order route**: `src/pages/Order.tsx`

## Files Out of Scope for Migration

- `src/components/ui/*` — shadcn primitives, tenant-agnostic
- `src/hooks/*` — generic hooks
- `src/test/*` — test scaffolding
