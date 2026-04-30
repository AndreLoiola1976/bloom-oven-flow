import type { Product } from "@/core/tenant/tenant.types";

export type LineItem = Product & { qty: number };

export const buildLineItems = (
  products: Product[],
  quantities: Record<string, number>
): LineItem[] =>
  products
    .map((p) => ({ ...p, qty: quantities[p.id] || 0 }))
    .filter((p) => p.qty > 0);

export const calculateSubtotal = (lineItems: LineItem[]): number =>
  lineItems.reduce((sum, p) => sum + p.qty * p.price, 0);

export const isShippingBelowMinimum = (
  fulfillment: "pickup" | "shipping",
  subtotal: number,
  hasItems: boolean,
  shippingMinimum: number
): boolean =>
  fulfillment === "shipping" && hasItems && subtotal < shippingMinimum;

export const isLargeOrder = (subtotal: number, threshold = 100): boolean =>
  subtotal >= threshold;
