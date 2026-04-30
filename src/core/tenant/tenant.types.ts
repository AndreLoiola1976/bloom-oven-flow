// Tenant contract types — UI components should depend only on these shapes.

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  note?: string;
  highlight?: boolean;
};

export type Catalog = {
  products: Product[];
};

export type Business = {
  name: string;
  legalDescriptor: string; // e.g. "Licensed Home Bakery"
  shippingMinimum: number;
  pickupLocation: string; // e.g. "Bethel, CT"
  serviceArea: string; // e.g. "Connecticut delivery area"
  orderingWindow: string; // e.g. "Orders accepted Friday–Sunday"
  replyTime: string; // e.g. "We reply within 30 minutes"
  fulfillmentDays?: string;
};

export type ContactInfo = {
  email: string;
  phoneE164: string; // digits only, no +
  phoneDisplay: string;
  instagramUrl: string;
  instagramHandle: string; // e.g. "@thebloomoven"
  facebookUrl: string;
  defaultOrderMessage: string;
  whatsAppFloatingMessage: string; // floating WhatsApp button default
};

export type ThemeTokens = {
  // CSS-variable backed semantic tokens. Stored as references for now;
  // the actual HSL values live in src/index.css. Kept here so future
  // tenants can override without editing components.
  brand: {
    primary: string; // tailwind class color name, e.g. "sage"
    accent: string; // e.g. "toffee"
  };
};

export type Content = {
  announcementBar: string;
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    pricePrefix: string;
    priceSuffix: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  finalCta: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    primary: string;
  };
  orderPage: {
    backToHome: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    windowNote: string;
    heroOverlayLead: string;
    heroOverlayLeadEmphasis: string;
    heroOverlayLeadSuffix: (location: string) => string;
    heroOverlayNote: string;
    chooseHeading: string;
    chooseHelper: string;
    customizationNote: string;
    summaryHeading: string;
    summaryEmpty: string;
    fulfillmentLabel: string;
    fulfillmentPickup: (location: string) => string;
    fulfillmentShipping: string;
    largeOrderNote: string;
    pickupHelper: string;
    shippingHelper: (min: number) => string;
    shippingMinimumWarning: (min: number) => string;
    shippingMinimumInline: (min: number) => string;
    submitCta: string;
    emptyWarning: string;
    noPaymentNote: string;
    bakedNote: string;
    successTitle: string;
    successBody: string;
    successCallCta: (phoneDisplay: string) => string;
    successBackCta: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phoneRequiredMark: string;
      phonePlaceholder: string;
      contactMethodLabel: string;
      contactMethodText: string;
      contactMethodCall: string;
      fulfillmentToggleLabel: string;
      fulfillmentPickupOption: string;
      fulfillmentShippingOption: string;
      whenLabel: string;
      whenOptional: string;
      whenPlaceholder: string;
      notesLabel: string;
      notesOptional: string;
      notesPlaceholder: string;
    };
    altCtas: {
      heading: string;
      text: string;
      call: string;
      whatsapp: string;
    };
  };
  ordering: {
    sectionEyebrow: string;
    sectionTitle: string;
    shippingHeading: string;
    pickupHeading: string;
    questionsLabel: string;
    shippingBullets: string[];
    pickupBullets: (pickup: string) => string[];
  };
  header: {
    logoAlt: string;
    homeAriaLabel: string;
    navMenu: string;
    navAbout: string;
    instagramAriaLabel: string;
  };
  brandStory: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    paragraph1: string;
    paragraph2Lead: string;
    paragraph2Emphasis: string;
    paragraph2Tail: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    reviews: { name: string; text: string }[];
  };
  instagramSection: {
    title: string;
    subtitle: string;
    tiles: { bg: string; emoji: string }[];
  };
  orderPaths: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cookies: { name: string; emoji: string; note: string; accent: string }[];
    perCookieMultiplier: string;
    badge: string;
    pricePrefix: string;
    priceSuffix: string;
    description: string;
    cta: string;
    replyNote: string;
  };
  whatsAppButton: {
    label: string;
    ariaLabel: string;
  };
  footer: {
    tagline: string;
    whatsAppAriaLabel: string;
    instagramAriaLabel: string;
    facebookAriaLabel: string;
    callAriaLabel: string;
    copyright: (year: number, name: string) => string;
  };
  order: {
    decreaseAriaLabel: (productName: string) => string;
    increaseAriaLabel: (productName: string) => string;
  };
};

export type Tenant = {
  id: string;
  business: Business;
  contact: ContactInfo;
  catalog: Catalog;
  content: Content;
  theme: ThemeTokens;
};
