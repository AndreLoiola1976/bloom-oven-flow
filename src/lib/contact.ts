// US phone number for SMS / Call CTAs (E.164, digits only for tel/sms)
export const US_PHONE = "14752569577";
export const US_PHONE_DISPLAY = "+1 (475) 256-9577";

export const getSmsUrl = (body: string) =>
  `sms:+${US_PHONE}?&body=${encodeURIComponent(body)}`;

export const getTelUrl = () => `tel:+${US_PHONE}`;
