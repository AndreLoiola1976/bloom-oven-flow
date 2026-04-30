import type { Content } from "@/core/tenant/tenant.types";

export const content: Content = {
  announcementBar:
    "Freshly baked weekly — limited batches, order before we sell out",
  hero: {
    eyebrow: "Gluten-Free · Dairy-Free · Refined Sugar-Free",
    titleLine1: "Freshly Baked Cookies.",
    titleLine2: "Limited Batches Every Week.",
    description:
      "The 6-Cookie Box — Chocolate Chip, Red Velvet & Pistachio.\n2 of each, handcrafted in Connecticut.",
    pricePrefix: "$42",
    priceSuffix: "/ box",
    ctaPrimary: "Order Now",
    ctaSecondary: "We reply within 30 minutes · No apps, no accounts",
  },
  finalCta: {
    titleLine1: "Ready to Taste",
    titleLine2: "Something Special?",
    description:
      "Just say hi — we'll help you pick the perfect treat. No forms, no waiting. Just a quick chat.",
    primary: "Order Now",
  },
  orderPage: {
    eyebrow: "Place Your Order",
    title: "Build your order — we'll bake it fresh.",
    subtitle: "Pick what you'd like and tell us how to reach you.",
    windowNote:
      "Orders accepted Friday–Sunday · Limited each week and may close once we sell out",
    chooseHeading: "Choose your cookies",
    chooseHelper: "Tap + to add. Quantities update your order summary.",
    summaryHeading: "Your Order",
    summaryEmpty: "Select products above to build your order.",
    largeOrderNote:
      "This is a large order — we'll confirm details with you before baking.",
    pickupHelper:
      "Pickup in Bethel, CT. No minimum order. We'll contact you to coordinate pickup details.",
    shippingHelper: (min) =>
      `Shipping is available. Minimum $${min} in products. Shipping cost is paid by the customer.`,
    shippingMinimumWarning: (min) =>
      `Shipping minimum not met. Shipping requires a minimum of $${min} in products.`,
    submitCta: "Send Order Request",
    emptyWarning: "Please add at least one item to your order.",
    noPaymentNote:
      "No payments online — we confirm availability, pickup/shipping, and final details directly.",
    bakedNote:
      "Freshly baked in small batches in Connecticut · We reply within 30 minutes",
    successTitle:
      "Thank you! We'll text or call you shortly to confirm your order.",
    successBody:
      "No payment online — we'll confirm availability, pickup/shipping, and final details directly.",
  },
  ordering: {
    shippingBullets: [
      "Minimum order: $20",
      "Customer pays shipping",
      "Connecticut delivery area",
    ],
    pickupBullets: (pickup) => [
      "No minimum order",
      pickup,
      "Schedule via order form or text",
    ],
  },
  footer: {
    tagline: "Licensed Home Bakery",
  },
};
