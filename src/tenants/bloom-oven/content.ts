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
    backToHome: "Back to home",
    eyebrow: "Place Your Order",
    title: "Build your order — we'll bake it fresh.",
    subtitle: "Pick what you'd like and tell us how to reach you.",
    windowNote:
      "Orders accepted Friday–Sunday · Limited each week and may close once we sell out",
    heroOverlayLead: "All cookies are",
    heroOverlayLeadEmphasis: "gluten-free",
    heroOverlayLeadSuffix: (location) =>
      `, baked fresh in small batches in ${location}.`,
    heroOverlayNote: "Dairy-free / sugar-free available on request",
    chooseHeading: "Choose your cookies",
    chooseHelper: "Tap + to add. Quantities update your order summary.",
    customizationNote:
      "Dairy-free or sugar-free? Add it to Order Notes — additional cost may apply.",
    summaryHeading: "Your Order",
    summaryEmpty: "Select products above to build your order.",
    fulfillmentLabel: "Fulfillment:",
    fulfillmentPickup: (location) => `Pickup in ${location}`,
    fulfillmentShipping: "Shipping",
    largeOrderNote:
      "This is a large order — we'll confirm details with you before baking.",
    pickupHelper:
      "Pickup in Bethel, CT. No minimum order. We'll contact you to coordinate pickup details.",
    shippingHelper: (min) =>
      `Shipping is available. Minimum $${min} in products. Shipping cost is paid by the customer.`,
    shippingMinimumWarning: (min) =>
      `Shipping minimum not met. Shipping requires a minimum of $${min} in products.`,
    shippingMinimumInline: (min) =>
      `Shipping requires a minimum of $${min} in products.`,
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
    successCallCta: (phoneDisplay) => `Call ${phoneDisplay}`,
    successBackCta: "Back to home",
    fields: {
      nameLabel: "Full Name",
      namePlaceholder: "Jane Doe",
      phoneLabel: "Phone Number",
      phoneRequiredMark: "*",
      phonePlaceholder: "(555) 123-4567",
      contactMethodLabel: "Preferred Contact Method",
      contactMethodText: "Text (SMS)",
      contactMethodCall: "Call",
      fulfillmentToggleLabel: "Pickup or Shipping",
      fulfillmentPickupOption: "pickup",
      fulfillmentShippingOption: "shipping",
      whenLabel: "Preferred Date / Time",
      whenOptional: "(optional)",
      whenPlaceholder: "e.g. Saturday afternoon",
      notesLabel: "Order Notes",
      notesOptional: "(optional)",
      notesPlaceholder:
        "Special requests, dairy-free/sugar-free request, delivery address if shipping, or other notes…",
    },
    altCtas: {
      heading: "Prefer to reach out directly?",
      text: "Text Us",
      call: "Call Us",
      whatsapp: "WhatsApp",
    },
  },
  ordering: {
    sectionEyebrow: "Good to Know",
    sectionTitle: "Ordering & Delivery",
    shippingHeading: "Shipping",
    pickupHeading: "Pickup",
    questionsLabel: "Questions?",
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
