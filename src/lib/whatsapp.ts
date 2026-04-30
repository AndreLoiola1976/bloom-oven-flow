import { tenant } from "@/core/tenant/tenant";

// Secondary contact only. Clean ASCII message — no emojis or invalid chars.
export function getWhatsAppUrl(
  message: string = tenant.contact.defaultOrderMessage
): string {
  return `https://wa.me/${tenant.contact.phoneE164}?text=${encodeURIComponent(message)}`;
}
