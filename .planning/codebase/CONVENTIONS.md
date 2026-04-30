# Conventions

## Imports

- Always use the `@/` path alias. Never relative paths past one level (`../../`).
- Tenant access: `import { tenant } from "@/core/tenant/tenant";`
- Tenant-bound URL helpers: `import { getWhatsAppUrl, getTelUrl, getSmsUrl } from "@/lib/tenantContact";`
- Pure builders: `import { buildSmsUrl } from "@/lib/contact";` — only inside `tenantContact.ts` or tests.

## Tenant contract files

Each file in `src/tenants/<tenant>/` owns one concern:

| File | Owns |
|---|---|
| `business.ts` | Pickup location, shipping minimum, reply time, business name |
| `catalog.ts` | Products, prices, SKUs |
| `contact.ts` | Phone (E.164 + display), email, socials, default messages |
| `content.ts` | All user-facing copy, grouped by surface |
| `theme.ts` | Design tokens (semantic) |
| `index.ts` | Composes the above into a single `tenant` object |

`content.ts` is grouped by surface (`hero`, `header`, `footer`, `ordering`, `orderPage`, `orderPaths`, `brandStory`, `testimonials`, `instagramSection`, `whatsAppButton`, `announcementBar`).

## Component rules

- Read tenant data at the top of the component: `const copy = tenant.content.<surface>;`
- Never inline `tenant.contact.email`-style chains repeatedly — destructure or alias.
- Aria-labels and alt text come from `tenant.content`.
- Dynamic strings use builder functions on the contract (e.g., `copy.copyright(year, name)`), not template literals in the component.

## Feature modules

- Located in `src/features/<feature>/`.
- Pure functions where possible.
- Accept tenant data (or sub-slices) as arguments. Avoid importing `tenant` directly inside features when the value can be passed in — keeps them testable.

## Styling

- Use semantic Tailwind tokens defined in `index.css` and `tailwind.config.ts`.
- All colors HSL.
- No hex/rgb literals in components.
- No inline `style={{ color: ... }}` for theme values.

## TypeScript

- Strict types on all contract fields.
- Prefer `readonly` on contract arrays.
- Use string-builder functions on the contract for parameterized copy instead of exposing raw templates.

## File naming

- Components: `PascalCase.tsx`.
- Hooks: `use-kebab.ts` or `useCamel.ts` (existing mix; do not rename in this migration).
- Modules in `features/` and `lib/`: `camelCase.ts`.

## Commits / change scope

- One concern per change.
- Update `AI_CHANGE_REPORT.md` for non-trivial migration steps.
