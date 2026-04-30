import type { ContactInfo } from "@/core/tenant/tenant.types";

// Pure builder — accepts contact data as an argument.
// Clean ASCII messages only — no emojis or invalid chars.
export function buildWhatsAppUrl(
  contact: ContactInfo,
  message: string = contact.defaultOrderMessage
): string {
  return `https://wa.me/${contact.phoneE164}?text=${encodeURIComponent(message)}`;
}
