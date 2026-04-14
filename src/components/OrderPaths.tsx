import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const cookies = [
  { name: "Chocolate Chip", emoji: "🍪", note: "Rich & gooey" },
  { name: "Red Velvet", emoji: "🔴", note: "Velvety & indulgent" },
  { name: "Pistachio", emoji: "💚", note: "Nutty & fragrant" },
];

const OrderPaths = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-caramel uppercase tracking-[0.2em] mb-4 block">
            Our Signature Box
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-chocolate mb-4">
            The 6-Cookie Box
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            2 of each flavor — handcrafted, allergen-friendly, and impossible to resist.
          </p>
        </div>

        {/* Cookie cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cookies.map((cookie) => (
            <div
              key={cookie.name}
              className="group bg-card rounded-2xl p-8 text-center border border-border hover:border-caramel/40 transition-all duration-300 shadow-md shadow-chocolate/5 hover:shadow-xl hover:shadow-caramel/10"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cookie.emoji}
              </div>
              <h3 className="font-serif text-xl font-semibold text-chocolate mb-1">
                {cookie.name}
              </h3>
              <p className="text-sm text-muted-foreground">{cookie.note}</p>
              <p className="text-xs text-caramel font-medium mt-2">× 2</p>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="text-center bg-dark rounded-3xl p-10 md:p-14 shadow-2xl shadow-black/20">
          <div className="mb-6">
            <span className="font-serif text-5xl md:text-6xl font-bold text-caramel">$42</span>
            <span className="text-dark-foreground/50 text-lg ml-2">/ box</span>
          </div>
          <p className="text-dark-foreground/60 mb-8 max-w-sm mx-auto">
            6 cookies of pure happiness. Perfect for gifting or treating yourself.
          </p>
          <a
            href={getWhatsAppUrl("Hi! I'd like to order the 6-Cookie Box ($42) 🍪\n\nDelivery or Pickup?\nDate needed: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-caramel hover:bg-caramel/90 text-espresso px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-caramel/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            Order This Box
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderPaths;
