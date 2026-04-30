const PHONE = "14752569577";

// Secondary contact only. Clean ASCII message — no emojis or invalid chars.
export function getWhatsAppUrl(
  message: string = "Hi, I would like to place an order with The Bloom Oven."
): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
