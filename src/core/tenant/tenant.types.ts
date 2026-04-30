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
  facebookUrl: string;
  defaultOrderMessage: string;
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
    eyebrow: string;
    title: string;
    subtitle: string;
    windowNote: string;
    chooseHeading: string;
    chooseHelper: string;
    summaryHeading: string;
    summaryEmpty: string;
    largeOrderNote: string;
    pickupHelper: string;
    shippingHelper: (min: number) => string;
    shippingMinimumWarning: (min: number) => string;
    submitCta: string;
    emptyWarning: string;
    noPaymentNote: string;
    bakedNote: string;
    successTitle: string;
    successBody: string;
  };
  ordering: {
    shippingBullets: string[];
    pickupBullets: (pickup: string) => string[];
  };
  footer: {
    tagline: string;
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
