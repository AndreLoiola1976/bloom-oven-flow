import { tenant } from "@/core/tenant/tenant";

export const US_PHONE = tenant.contact.phoneE164;
export const US_PHONE_DISPLAY = tenant.contact.phoneDisplay;

export const getSmsUrl = (body: string) =>
  `sms:+${US_PHONE}?&body=${encodeURIComponent(body)}`;

export const getTelUrl = () => `tel:+${US_PHONE}`;
