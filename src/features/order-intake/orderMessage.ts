import type { LineItem } from "./orderCalculations";

export type OrderMessageInput = {
  lineItems: LineItem[];
  subtotal: number;
  name: string;
  phone: string;
  contact: "text" | "call";
  fulfillment: "pickup" | "shipping";
  when?: string;
  notes?: string;
};

export const buildOrderSmsMessage = (input: OrderMessageInput): string => {
  const { lineItems, subtotal, name, phone, contact, fulfillment, when, notes } =
    input;

  const lines = [
    `New Order Request — Subtotal $${subtotal}`,
    ...lineItems.map((i) => `- ${i.qty} x ${i.name} ($${i.price} each)`),
    `Name: ${name || "—"}`,
    `Phone: ${phone}`,
    `Preferred contact: ${contact === "text" ? "Text (SMS)" : "Call"}`,
    `Fulfillment: ${fulfillment === "pickup" ? "Pickup" : "Shipping"}`,
    when ? `When: ${when}` : null,
    notes ? `Notes: ${notes}` : null,
  ].filter(Boolean) as string[];

  return lines.join("\n");
};
