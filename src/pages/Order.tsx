import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Phone, MessageCircle, Check, Minus, Plus, Mail, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWhatsAppUrl, getSmsUrl, getTelUrl, US_PHONE_DISPLAY } from "@/lib/tenantContact";
import heroCookies from "@/assets/hero-cookies.jpg";
import { tenant } from "@/core/tenant/tenant";
import {
  buildLineItems,
  calculateSubtotal,
  isShippingBelowMinimum,
  isLargeOrder as isLargeOrderFn,
} from "@/features/order-intake/orderCalculations";
import { buildOrderSmsMessage } from "@/features/order-intake/orderMessage";

type ContactMethod = "text" | "call";
type Fulfillment = "pickup" | "shipping";

const PRODUCTS = tenant.catalog.products;
const SHIPPING_MINIMUM = tenant.business.shippingMinimum;
const BAKERY_EMAIL = tenant.contact.email;
const PICKUP_LOCATION = tenant.business.pickupLocation;
const COPY = tenant.content.orderPage;

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
    () => buildLineItems(PRODUCTS, quantities),
    [quantities]
  );

  const subtotal = useMemo(() => calculateSubtotal(lineItems), [lineItems]);

  const hasItems = lineItems.length > 0;
  const shippingBelowMinimum = isShippingBelowMinimum(
    form.fulfillment,
    subtotal,
    hasItems,
    SHIPPING_MINIMUM
  );
  const largeOrder = isLargeOrderFn(subtotal);

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

  // Track latest summary snapshot (kept for parity with previous behavior)
  useEffect(() => {
    lastAutoRef.current = "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantities, form.fulfillment, form.contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone.trim() || !hasItems) return;

    const message = buildOrderSmsMessage({
      lineItems,
      subtotal,
      name: form.name,
      phone: form.phone,
      contact: form.contact,
      fulfillment: form.fulfillment,
      when: form.when,
      notes: form.notes,
    });

    window.open(getSmsUrl(message), "_blank");
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
            {COPY.backToHome}
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-4">
              <span className="w-8 h-px bg-sage/40" />
              {COPY.eyebrow}
              <span className="w-8 h-px bg-sage/40" />
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              {COPY.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto font-light">
              {COPY.subtitle}
            </p>
            <p className="text-xs text-muted-foreground/80 mt-3 max-w-md mx-auto">
              {COPY.windowNote}
            </p>
          </div>

          {submitted ? (
            <div className="bg-card rounded-3xl border border-border shadow-lg p-10 md:p-14 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/15 text-sage mb-6">
                <Check size={32} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                {COPY.successTitle}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                {COPY.successBody}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={getTelUrl()}
                  className="inline-flex items-center gap-2 bg-sage hover:bg-sage/90 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-sage/25 transition-all"
                >
                  <Phone size={16} /> {COPY.successCallCta(US_PHONE_DISPLAY)}
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 border border-border bg-background hover:bg-accent text-foreground px-6 py-3 rounded-full text-sm font-medium transition-all"
                >
                  {COPY.successBackCta}
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
                    alt={COPY.heroImageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 md:px-10 py-5 flex flex-wrap items-center justify-between gap-3 border-t border-border bg-background/40">
                  <p className="text-sm text-foreground/80">
                    {COPY.heroOverlayLead}{" "}
                    <span className="font-semibold text-foreground">{COPY.heroOverlayLeadEmphasis}</span>
                    {COPY.heroOverlayLeadSuffix(PICKUP_LOCATION)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {COPY.heroOverlayNote}
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
                        {COPY.chooseHeading}
                      </h2>
                      <p className="text-xs text-muted-foreground mt-1">
                        {COPY.chooseHelper}
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
                              <Star size={10} className="fill-white" /> {COPY.mostPopularBadge}
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
                                    {COPY.signatureBoxBadge}
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
                                  aria-label={tenant.content.order.decreaseAriaLabel(p.name)}
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
                                  aria-label={tenant.content.order.increaseAriaLabel(p.name)}
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
                    {COPY.customizationNote}
                  </p>
                </section>

                {/* Order summary */}
                <section className="rounded-2xl border border-border bg-background/60 p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                    {COPY.summaryHeading}
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
                          {COPY.subtotalLabel}
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
                      <div className="border-t border-border/60 pt-3 mt-3 text-sm text-muted-foreground">
                        {COPY.fulfillmentLabel}{" "}
                        <span className="text-foreground font-semibold">
                          {form.fulfillment === "pickup"
                            ? COPY.fulfillmentPickup(PICKUP_LOCATION)
                            : COPY.fulfillmentShipping}
                        </span>
                      </div>
                      {largeOrder && (
                        <p className="text-xs text-sage mt-3 font-medium bg-sage/5 border border-sage/20 rounded-lg px-3 py-2">
                          {COPY.largeOrderNote}
                        </p>
                      )}
                      {shippingBelowMinimum && (
                        <p className="text-xs text-toffee mt-3 font-semibold bg-toffee/5 border border-toffee/30 rounded-lg px-3 py-2">
                          {COPY.shippingMinimumWarning(SHIPPING_MINIMUM)}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      {COPY.summaryEmpty}
                    </p>
                  )}
                </section>

                {/* Customer info */}
                <section className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {COPY.fields.nameLabel}
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={COPY.fields.namePlaceholder}
                        className="w-full h-11 rounded-full border border-border bg-background px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:border-sage/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {COPY.fields.phoneLabel} <span className="text-sage">{COPY.fields.phoneRequiredMark}</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder={COPY.fields.phonePlaceholder}
                        className="w-full h-11 rounded-full border border-border bg-background px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:border-sage/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {COPY.fields.contactMethodLabel}
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
                          {opt === "text" ? COPY.fields.contactMethodText : COPY.fields.contactMethodCall}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {COPY.fields.fulfillmentToggleLabel}
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
                          {opt === "pickup"
                            ? COPY.fields.fulfillmentPickupOption
                            : COPY.fields.fulfillmentShippingOption}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {form.fulfillment === "pickup"
                        ? COPY.pickupHelper(PICKUP_LOCATION)
                        : COPY.shippingHelper(SHIPPING_MINIMUM)}
                    </p>
                    {shippingBelowMinimum && (
                      <p className="text-xs text-toffee mt-2 font-semibold">
                        {COPY.shippingMinimumInline(SHIPPING_MINIMUM)}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {COPY.fields.whenLabel} <span className="text-muted-foreground font-normal">{COPY.fields.whenOptional}</span>
                    </label>
                    <input
                      type="text"
                      value={form.when}
                      onChange={(e) => setForm({ ...form, when: e.target.value })}
                      placeholder={COPY.fields.whenPlaceholder}
                      className="w-full h-11 rounded-full border border-border bg-background px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:border-sage/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {COPY.fields.notesLabel} <span className="text-muted-foreground font-normal">{COPY.fields.notesOptional}</span>
                    </label>
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={(e) => {
                        setNotesTouched(true);
                        setForm({ ...form, notes: e.target.value });
                      }}
                      placeholder={COPY.fields.notesPlaceholder}
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
                    {COPY.submitCta}
                  </button>

                  {!hasItems && (
                    <p className="text-center text-xs text-toffee mt-3 font-medium">
                      {COPY.emptyWarning}
                    </p>
                  )}

                  <p className="text-center text-xs text-muted-foreground mt-3">
                    {COPY.noPaymentNote}
                  </p>
                  <p className="text-center text-xs text-muted-foreground/90 mt-1.5">
                    {COPY.bakedNote}
                  </p>
                </div>

                {/* Alternative CTAs */}
                <div className="pt-6 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    {COPY.altCtas.heading}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <a
                      href={getSmsUrl(tenant.contact.defaultOrderMessage)}
                      className="inline-flex items-center justify-center gap-2 border border-sage/30 bg-sage/5 hover:bg-sage/10 text-sage px-5 py-3 rounded-full text-sm font-semibold transition-colors"
                    >
                      <MessageSquare size={16} /> {COPY.altCtas.text}
                    </a>
                    <a
                      href={getTelUrl()}
                      className="inline-flex items-center justify-center gap-2 border border-sage/30 bg-sage/5 hover:bg-sage/10 text-sage px-5 py-3 rounded-full text-sm font-semibold transition-colors"
                    >
                      <Phone size={16} /> {COPY.altCtas.call}
                    </a>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-border bg-background hover:bg-accent text-foreground/70 px-5 py-3 rounded-full text-sm font-medium transition-colors"
                    >
                      <MessageCircle size={16} /> {COPY.altCtas.whatsapp}
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
