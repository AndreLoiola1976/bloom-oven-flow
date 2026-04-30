import type { Catalog } from "@/core/tenant/tenant.types";

export const catalog: Catalog = {
  products: [
    {
      id: "box-6",
      name: "6 Cookie Box",
      price: 42,
      description: "Includes 2 Chocolate Chip, 2 Red Velvet, and 2 Pistachio.",
      note: "Perfect mix of our best flavors.",
      highlight: true,
    },
    {
      id: "chocolate-chip",
      name: "Chocolate Chip Cookies",
      price: 7,
      description:
        "A classic done right. Soft, rich, and packed with chocolate. Made gluten-free with a perfect balance of texture and flavor.",
    },
    {
      id: "pistachio",
      name: "Pistachio Stuffed Cookies",
      price: 9,
      description:
        "Our signature pistachio stuffed cookie, filled with a rich and creamy pistachio center. Soft on the inside, made fresh in small batches.",
    },
    {
      id: "red-velvet",
      name: "Red Velvet Cookies",
      price: 7,
      description:
        "Soft, rich, and perfectly balanced with a hint of cocoa. A gluten-free take on a classic favorite.",
    },
    {
      id: "mini-jar",
      name: "Mini Cookie Jars (16oz)",
      price: 22,
      description:
        "Bite-sized versions of our signature cookies, perfect for sharing or enjoying throughout the week. Packed in a 16oz jar.",
    },
  ],
};
