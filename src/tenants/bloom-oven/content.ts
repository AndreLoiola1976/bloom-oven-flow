import type { Content } from "@/core/tenant/tenant.types";

export const content: Content = {
  announcementBar:
    "Freshly baked weekly — limited batches, order before we sell out",
  logoAlt: "The Bloom Oven",
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
    backgroundImageAlt:
      "Freshly baked chocolate chip, red velvet, and pistachio cookies",
    productImageAlt: (businessName) =>
      `${businessName} 6-Cookie Box: Chocolate Chip, Red Velvet, Pistachio`,
    badges: ["Allergen-Friendly", "Made Fresh Weekly"],
  },
  finalCta: {
    titleLine1: "Ready to Taste",
    titleLine2: "Something Special?",
    description:
      "Just say hi — we'll help you pick the perfect treat. No forms, no waiting. Just a quick chat.",
    primary: "Order Now",
    whatsAppLabel: "WhatsApp",
  },
  orderPage: {
    backToHome: "Back to home",
    eyebrow: "Place Your Order",
    title: "Build your order — we'll bake it fresh.",
    subtitle: "Pick what you'd like and tell us how to reach you.",
    windowNote:
      "Orders accepted Friday–Sunday · Limited each week and may close once we sell out",
    heroImageAlt: "Freshly baked gluten-free cookies from The Bloom Oven",
    mostPopularBadge: "Most Popular",
    signatureBoxBadge: "Signature Box",
    subtotalLabel: "Subtotal",
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
    pickupHelper: (pickupLocation) =>
      `Pickup in ${pickupLocation}. No minimum order. We'll contact you to coordinate pickup details.`,
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
  header: {
    logoAlt: "The Bloom Oven",
    homeAriaLabel: "The Bloom Oven — Home",
    navMenu: "Menu",
    navAbout: "About",
    instagramAriaLabel: "Follow us on Instagram",
  },
  brandStory: {
    eyebrow: "Our Story",
    titleLine1: "Born from Love,",
    titleLine2: "Baked Without Compromise",
    paragraph1:
      "The Bloom Oven started with a simple belief: everyone deserves to enjoy beautiful bakes — even with dietary restrictions. We're a licensed home bakery in Connecticut, creating gluten-free, dairy-free, and refined sugar-free treats that taste like they have no compromises.",
    paragraph2Lead:
      "Every cookie, cake, and cupcake is handcrafted in small batches with wholesome ingredients and a whole lot of love. Because food should nourish your body ",
    paragraph2Emphasis: "and",
    paragraph2Tail: " your soul.",
  },
  testimonials: {
    eyebrow: "Real Reviews",
    title: "What Our Customers Say",
    reviews: [
      {
        name: "Sarah M.",
        text: "I can't believe these are gluten-free! The chocolate chip cookies are absolutely incredible. My kids couldn't tell the difference.",
      },
      {
        name: "Jessica R.",
        text: "Ordered a birthday cake for my daughter and it was stunning. The ordering process was so easy — just a quick WhatsApp chat!",
      },
      {
        name: "Amanda L.",
        text: "Finally, a bakery that understands dietary needs without sacrificing flavor. The cupcakes were gone in minutes at our party.",
      },
    ],
  },
  instagramSection: {
    title: "Follow the Journey",
    subtitle: "Fresh bakes, behind-the-scenes, and daily inspiration",
    tiles: [
      { bg: "bg-biscuit/30", emoji: "🍪" },
      { bg: "bg-frosting/30", emoji: "🎂" },
      { bg: "bg-dough", emoji: "🧁" },
      { bg: "bg-sage/10", emoji: "🌿" },
      { bg: "bg-golden/15", emoji: "🍰" },
      { bg: "bg-card", emoji: "✨" },
    ],
  },
  orderPaths: {
    eyebrow: "Our Signature Box",
    title: "The 6-Cookie Box",
    subtitle:
      "2 of each flavor — handcrafted, allergen-friendly, and impossible to resist.",
    cookies: [
      { name: "Chocolate Chip", emoji: "🍪", note: "Rich & gooey", accent: "bg-golden/10 border-golden/20" },
      { name: "Red Velvet", emoji: "🔴", note: "Velvety & indulgent", accent: "bg-frosting/30 border-frosting/40" },
      { name: "Pistachio", emoji: "💚", note: "Nutty & fragrant", accent: "bg-sage/10 border-sage/20" },
    ],
    perCookieMultiplier: "× 2",
    badge: "Limited Batches",
    pricePrefix: "$42",
    priceSuffix: "/ box",
    description:
      "6 cookies of pure happiness. Perfect for gifting or treating yourself.",
    cta: "Order This Box",
    replyNote: "We reply within 30 minutes",
  },
  whatsAppButton: {
    label: "Order Now",
    ariaLabel: "Order on WhatsApp",
  },
  footer: {
    tagline: "Licensed Home Bakery",
    whatsAppAriaLabel: "WhatsApp",
    instagramAriaLabel: "Instagram",
    facebookAriaLabel: "Facebook",
    callAriaLabel: "Call us",
    copyright: (year, name) => `© ${year} ${name}. All rights reserved.`,
  },
  order: {
    decreaseAriaLabel: (productName) => `Decrease ${productName}`,
    increaseAriaLabel: (productName) => `Increase ${productName}`,
  },
  notFound: {
    code: "404",
    title: "Oops! Page not found",
    backCta: "Return to Home",
  },
};
