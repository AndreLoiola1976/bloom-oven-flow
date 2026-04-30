import { tenant } from "@/core/tenant/tenant";
import { buildSmsUrl, buildTelUrl } from "./contact";
import { buildWhatsAppUrl } from "./whatsapp";

// Convenience helpers bound to the active tenant. UI components should
// prefer these over importing tenant + builders separately.
export const getSmsUrl = (body: string) => buildSmsUrl(tenant.contact, body);
export const getTelUrl = () => buildTelUrl(tenant.contact);
export const getWhatsAppUrl = (message?: string) =>
  buildWhatsAppUrl(tenant.contact, message);

export const US_PHONE = tenant.contact.phoneE164;
export const US_PHONE_DISPLAY = tenant.contact.phoneDisplay;
