import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Phone, MessageCircle, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { getSmsUrl, getTelUrl, US_PHONE_DISPLAY } from "@/lib/contact";
import heroCookies from "@/assets/hero-cookies.jpg";

type ContactMethod = "text" | "call";
type Fulfillment = "pickup" | "delivery";

const Order = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    contact: "text" as ContactMethod,
    fulfillment: "pickup" as Fulfillment,
    details: "",
    when: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone.trim()) return;

    // Build a structured message and hand off via SMS so the bakery
    // gets a complete order on their phone — no backend required.
    const lines = [
      "New Order — 6 Cookie Box ($42)",
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone}`,
      `Preferred contact: ${form.contact === "text" ? "Text (SMS)" : "Call"}`,
      `Fulfillment: ${form.fulfillment === "pickup" ? "Pickup" : "Delivery"}`,
      form.when ? `When: ${form.when}` : null,
      form.details ? `Details: ${form.details}` : null,
    ].filter(Boolean);

    const message = lines.join("\n");
    // Open the customer's SMS composer pre-filled to the bakery
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
              A few details and we'll bake.
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto font-light">
              Tell us how to reach you — we'll confirm your order shortly.
            </p>
          </div>

          {/* Product context */}
          <div className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden mb-10">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={heroCookies}
                  alt="The Bloom Oven 6-Cookie Box"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-semibold mb-4 tracking-wide uppercase w-fit">
                  Our Signature Box
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  6 Cookie Box
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A handcrafted mix of Chocolate Chip, Red Velvet, and Pistachio —
                  2 of each, baked fresh in Connecticut.
                </p>
                <div>
                  <span className="font-serif text-4xl font-bold text-foreground">$42</span>
                  <span className="text-muted-foreground ml-2">/ box</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form / Confirmation */}
          {submitted ? (
            <div className="bg-card rounded-3xl border border-border shadow-lg p-10 md:p-14 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/15 text-sage mb-6">
                <Check size={32} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Thanks! We'll reach out shortly to confirm your order.
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                If your messages app didn't open automatically, you can also reach us directly:
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
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl border border-border shadow-lg p-6 md:p-10 space-y-6"
            >
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
                  Pickup or Delivery
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(["pickup", "delivery"] as const).map((opt) => (
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
                  Order Details <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <textarea
                  rows={4}
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  placeholder="Number of boxes, special requests, address if delivery…"
                  className="w-full rounded-2xl border border-border bg-background px-5 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:border-sage/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-sage hover:bg-sage/85 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-sage/30 hover:shadow-2xl hover:shadow-sage/40 transition-all duration-300 hover:-translate-y-0.5 ring-2 ring-sage/15 ring-offset-2 ring-offset-card"
              >
                Place Order
              </button>

              <p className="text-center text-xs text-muted-foreground">
                We reply within 30 minutes · No accounts, no payments online
              </p>

              {/* Alternative CTAs */}
              <div className="pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Prefer to reach out directly?
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <a
                    href={getSmsUrl("Hi! I'd like to order the 6-Cookie Box ($42).")}
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
                    href={getWhatsAppUrl("Hi, I would like to order the 6-Cookie Box ($42) from The Bloom Oven.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-border bg-background hover:bg-accent text-foreground/70 px-5 py-3 rounded-full text-sm font-medium transition-colors"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Order;
