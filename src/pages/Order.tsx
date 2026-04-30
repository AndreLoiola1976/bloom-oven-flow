import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Phone, MessageCircle, Check, Minus, Plus, Mail, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { getSmsUrl, getTelUrl, US_PHONE_DISPLAY } from "@/lib/contact";
import heroCookies from "@/assets/hero-cookies.jpg";

type ContactMethod = "text" | "call";
type Fulfillment = "pickup" | "shipping";

const BAKERY_EMAIL = "thebloomoven@gmail.com";
const SHIPPING_MINIMUM = 20;

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  note?: string;
  highlight?: boolean;
};

const PRODUCTS: Product[] = [
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
];

const Order = () => {
  const [submitted, setSubmitted] = useState(false);
  const [quantities, setQuantities] = useState<Record<string, number>>(
    () => Object.fromEntries(PRODUCTS.map((p) => [p.id, 0]))
  );
  const [notesTouched, setNotesTouched] = useState(false);
  const lastAutoRef = useRef<string>("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    contact: "text" as ContactMethod,
    fulfillment: "pickup" as Fulfillment,
    when: "",
    notes: "",
  });

  const lineItems = useMemo(
    () =>
      PRODUCTS.map((p) => ({ ...p, qty: quantities[p.id] || 0 })).filter(
        (p) => p.qty > 0
      ),
    [quantities]
  );

  const subtotal = useMemo(
    () => lineItems.reduce((sum, p) => sum + p.qty * p.price, 0),
    [lineItems]
  );

  const hasItems = lineItems.length > 0;
  const shippingBelowMinimum =
    form.fulfillment === "shipping" && hasItems && subtotal < SHIPPING_MINIMUM;
  const isLargeOrder = subtotal >= 100;

  // subtle highlight pulse on subtotal change
  const [subtotalPulse, setSubtotalPulse] = useState(false);
  const firstRunRef = useRef(true);
  useEffect(() => {
    if (firstRunRef.current) {
      firstRunRef.current = false;
      return;
    }
    setSubtotalPulse(true);
    const t = setTimeout(() => setSubtotalPulse(false), 450);
    return () => clearTimeout(t);
  }, [subtotal]);

  const setQty = (id: string, next: number) => {
    setQuantities((q) => ({ ...q, [id]: Math.max(0, next) }));
  };

  const buildSummaryText = () => {
    if (!hasItems) return "";
    const lines = ["Order:"];
    for (const item of lineItems) {
      lines.push(`- ${item.qty} x ${item.name} ($${item.price} each)`);
    }
    lines.push(`Subtotal: $${subtotal}`);
    lines.push(
      `Fulfillment: ${form.fulfillment === "pickup" ? "Pickup" : "Shipping"}`
    );
    lines.push(
      `Preferred contact: ${form.contact === "text" ? "Text (SMS)" : "Call"}`
    );
    return lines.join("\n");
  };

  // Keep notes auto-prefilled with summary preview unless user edited it.
  // We keep the visible Order Summary box separate; this only fills the
  // free-text "Order Notes" if the user hasn't typed anything custom.
  useEffect(() => {
    // No auto-fill into notes — Order Summary lives in its own visible box.
    // Just track latest snapshot for any future use.
    lastAutoRef.current = buildSummaryText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantities, form.fulfillment, form.contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone.trim() || !hasItems) return;

    const lines = [
      `New Order Request — Subtotal $${subtotal}`,
      ...lineItems.map(
        (i) => `- ${i.qty} x ${i.name} ($${i.price} each)`
      ),
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone}`,
      `Preferred contact: ${form.contact === "text" ? "Text (SMS)" : "Call"}`,
      `Fulfillment: ${form.fulfillment === "pickup" ? "Pickup" : "Shipping"}`,
      form.when ? `When: ${form.when}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean);

    window.open(getSmsUrl(lines.join("\n")), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 md:pt-36 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-sage transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-4">
              <span className="w-8 h-px bg-sage/40" />
              Place Your Order
              <span className="w-8 h-px bg-sage/40" />
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Build your order — we'll bake it fresh.
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto font-light">
              Pick what you'd like and tell us how to reach you.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-3 max-w-md mx-auto">
              Orders accepted Friday–Sunday · Limited each week and may close once we sell out
            </p>
          </div>

          {submitted ? (
            <div className="bg-card rounded-3xl border border-border shadow-lg p-10 md:p-14 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/15 text-sage mb-6">
                <Check size={32} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Thank you! We'll text or call you shortly to confirm your order.
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                No payment online — we'll confirm availability, pickup/shipping, and final details directly.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={getTelUrl()}
                  className="inline-flex items-center gap-2 bg-sage hover:bg-sage/90 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-sage/25 transition-all"
                >
                  <Phone size={16} /> Call {US_PHONE_DISPLAY}
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 border border-border bg-background hover:bg-accent text-foreground px-6 py-3 rounded-full text-sm font-medium transition-all"
                >
                  Back to home
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Hero product image / context */}
              <div className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden mb-8">
                <div className="aspect-[16/7] overflow-hidden">
                  <img
                    src={heroCookies}
                    alt="Freshly baked gluten-free cookies from The Bloom Oven"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 md:px-10 py-5 flex flex-wrap items-center justify-between gap-3 border-t border-border bg-background/40">
                  <p className="text-sm text-foreground/80">
                    All cookies are <span className="font-semibold text-foreground">gluten-free</span>, baked fresh in small batches in Bethel, CT.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Dairy-free / sugar-free available on request
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-3xl border border-border shadow-lg p-6 md:p-10 space-y-8"
              >
                {/* Product picker */}
                <section className="space-y-4">
                  <div className="flex items-end justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                        Choose your cookies
                      </h2>
                      <p className="text-xs text-muted-foreground mt-1">
                        Tap + to add. Quantities update your order summary.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4 pt-3">
                    {PRODUCTS.map((p) => {
                      const qty = quantities[p.id] || 0;
                      return (
                        <li
                          key={p.id}
                          className={`rounded-2xl border p-4 md:p-5 transition-colors relative ${
                            p.highlight
                              ? "border-2 border-sage/60 bg-sage/[0.06] shadow-md shadow-sage/10"
                              : "border-border bg-background/60"
                          }`}
                        >
                          {p.highlight && (
                            <span className="absolute -top-3 left-5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sage text-white text-[10px] font-bold uppercase tracking-wider shadow-sm shadow-sage/30">
                              <Star size={10} className="fill-white" /> Most Popular
                            </span>
                          )}
                          <div className="flex items-start gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className={`font-serif font-bold text-foreground ${p.highlight ? "text-xl md:text-2xl" : "text-lg"}`}>
                                  {p.name}
                                </h3>
                                {p.highlight && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sage/15 text-sage text-[10px] font-bold uppercase tracking-wide">
                                    Signature Box
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                {p.description}
                              </p>
                              {p.note && (
                                <p className="text-xs text-sage/90 mt-2 font-medium italic">
                                  {p.note}
                                </p>
                              )}
                              <p className={`font-serif font-bold text-foreground mt-3 tabular-nums ${p.highlight ? "text-2xl md:text-3xl" : "text-xl"}`}>
                                ${p.price}
                              </p>
                            </div>

                            <div className="flex flex-col items-end gap-2 shrink-0">
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => setQty(p.id, qty - 1)}
                                  aria-label={`Decrease ${p.name}`}
                                  disabled={qty <= 0}
                                  className="w-9 h-9 rounded-full border border-border bg-background hover:border-sage/40 text-foreground flex items-center justify-center transition-colors disabled:opacity-40"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="min-w-[2ch] text-center font-serif text-lg font-bold text-foreground tabular-nums">
                                  {qty}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setQty(p.id, qty + 1)}
                                  aria-label={`Increase ${p.name}`}
                                  className="w-9 h-9 rounded-full border border-sage bg-sage text-white hover:bg-sage/90 flex items-center justify-center transition-colors"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                              {qty > 0 && (
                                <p className="text-xs text-muted-foreground tabular-nums">
                                  ${qty * p.price}
                                </p>
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <p className="text-xs text-muted-foreground italic">
                    Dairy-free or sugar-free? Add it to Order Notes — additional cost may apply.
                  </p>
                </section>

                {/* Order summary */}
                <section className="rounded-2xl border border-border bg-background/60 p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                    Your Order
                  </h3>
                  {hasItems ? (
                    <div className="space-y-1">
                      {lineItems.map((i) => (
                        <div
                          key={i.id}
                          className="flex items-baseline gap-2 text-sm py-1.5"
                        >
                          <span className="font-semibold text-foreground shrink-0">
                            {i.name} <span className="text-muted-foreground font-normal">× {i.qty}</span>
                          </span>
                          <span
                            aria-hidden="true"
                            className="flex-1 border-b border-dotted border-border/70 translate-y-[-3px]"
                          />
                          <span className="text-foreground tabular-nums font-semibold whitespace-nowrap">
                            ${i.qty * i.price}
                          </span>
                        </div>
                      ))}
                      <div className="border-t border-border pt-3 mt-3 flex items-baseline gap-2">
                        <span className="text-base font-bold text-foreground shrink-0">
                          Subtotal
                        </span>
                        <span
                          aria-hidden="true"
                          className="flex-1 border-b border-dotted border-border/70 translate-y-[-3px]"
                        />
                        <span
                          className={`font-serif text-2xl font-bold text-foreground tabular-nums whitespace-nowrap transition-all duration-300 ${
                            subtotalPulse ? "text-sage scale-105" : ""
                          }`}
                        >
                          ${subtotal}
                        </span>
                      </div>
                      {isLargeOrder && (
                        <p className="text-xs text-sage mt-3 font-medium bg-sage/5 border border-sage/20 rounded-lg px-3 py-2">
                          This is a large order — we'll confirm details with you before baking.
                        </p>
                      )}
                      {shippingBelowMinimum && (
                        <p className="text-xs text-toffee mt-3 font-semibold bg-toffee/5 border border-toffee/30 rounded-lg px-3 py-2">
                          Shipping requires a minimum of ${SHIPPING_MINIMUM} in products.
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      Select products above to build your order.
                    </p>
                  )}
                </section>

                {/* Customer info */}
                <section className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full h-11 rounded-full border border-border bg-background px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:border-sage/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number <span className="text-sage">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        className="w-full h-11 rounded-full border border-border bg-background px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:border-sage/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {(["text", "call"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, contact: opt })}
                          className={`h-11 rounded-full border text-sm font-medium transition-all ${
                            form.contact === opt
                              ? "bg-sage border-sage text-white shadow-sm shadow-sage/20"
                              : "bg-background border-border text-foreground/70 hover:border-sage/40"
                          }`}
                        >
                          {opt === "text" ? "Text (SMS)" : "Call"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Pickup or Shipping
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {(["pickup", "shipping"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, fulfillment: opt })}
                          className={`h-11 rounded-full border text-sm font-medium capitalize transition-all ${
                            form.fulfillment === opt
                              ? "bg-sage border-sage text-white shadow-sm shadow-sage/20"
                              : "bg-background border-border text-foreground/70 hover:border-sage/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {form.fulfillment === "pickup"
                        ? "Pickup in Bethel, CT. No minimum order. We'll contact you to coordinate pickup details."
                        : `Shipping is available. Minimum $${SHIPPING_MINIMUM} in products. Shipping cost is paid by the customer.`}
                    </p>
                    {shippingBelowMinimum && (
                      <p className="text-xs text-toffee mt-2 font-semibold">
                        Shipping requires a minimum of ${SHIPPING_MINIMUM} in products.
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Date / Time <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.when}
                      onChange={(e) => setForm({ ...form, when: e.target.value })}
                      placeholder="e.g. Saturday afternoon"
                      className="w-full h-11 rounded-full border border-border bg-background px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:border-sage/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Order Notes <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={(e) => {
                        setNotesTouched(true);
                        setForm({ ...form, notes: e.target.value });
                      }}
                      placeholder="Special requests, dairy-free/sugar-free request, delivery address if shipping, or other notes…"
                      className="w-full rounded-2xl border border-border bg-background px-5 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:border-sage/40 transition-colors resize-none"
                    />
                  </div>
                </section>

                <div>
                  <button
                    type="submit"
                    disabled={!hasItems || shippingBelowMinimum}
                    className="w-full inline-flex items-center justify-center gap-3 bg-sage hover:bg-sage/85 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-sage/30 hover:shadow-2xl hover:shadow-sage/40 transition-all duration-300 hover:-translate-y-0.5 ring-2 ring-sage/15 ring-offset-2 ring-offset-card disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-lg"
                  >
                    Send Order Request
                  </button>

                  {!hasItems && (
                    <p className="text-center text-xs text-toffee mt-3 font-medium">
                      Please add at least one item to your order.
                    </p>
                  )}

                  <p className="text-center text-xs text-muted-foreground mt-3">
                    No payments online — we confirm availability, pickup/shipping, and final details directly.
                  </p>
                  <p className="text-center text-xs text-muted-foreground/90 mt-1.5">
                    Freshly baked in small batches in Connecticut · We reply within 30 minutes
                  </p>
                </div>

                {/* Alternative CTAs */}
                <div className="pt-6 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    Prefer to reach out directly?
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <a
                      href={getSmsUrl("Hi, I would like to place an order with The Bloom Oven.")}
                      className="inline-flex items-center justify-center gap-2 border border-sage/30 bg-sage/5 hover:bg-sage/10 text-sage px-5 py-3 rounded-full text-sm font-semibold transition-colors"
                    >
                      <MessageSquare size={16} /> Text Us
                    </a>
                    <a
                      href={getTelUrl()}
                      className="inline-flex items-center justify-center gap-2 border border-sage/30 bg-sage/5 hover:bg-sage/10 text-sage px-5 py-3 rounded-full text-sm font-semibold transition-colors"
                    >
                      <Phone size={16} /> Call Us
                    </a>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-border bg-background hover:bg-accent text-foreground/70 px-5 py-3 rounded-full text-sm font-medium transition-colors"
                    >
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-4 inline-flex items-center gap-1.5 w-full justify-center">
                    <Mail size={12} />
                    <a
                      href={`mailto:${BAKERY_EMAIL}`}
                      className="hover:text-sage transition-colors"
                    >
                      {BAKERY_EMAIL}
                    </a>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Order;
