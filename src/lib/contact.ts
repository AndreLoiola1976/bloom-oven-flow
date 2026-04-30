import type { ContactInfo } from "@/core/tenant/tenant.types";

// Pure builders — no tenant import. Pass contact data in explicitly,
// or use the bound helpers from src/lib/tenantContact.ts.
export const buildSmsUrl = (contact: ContactInfo, body: string) =>
  `sms:+${contact.phoneE164}?&body=${encodeURIComponent(body)}`;

export const buildTelUrl = (contact: ContactInfo) =>
  `tel:+${contact.phoneE164}`;
