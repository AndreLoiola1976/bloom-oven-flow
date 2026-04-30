import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cookies = [
  { name: "Chocolate Chip", emoji: "🍪", note: "Rich & gooey", accent: "bg-golden/10 border-golden/20" },
  { name: "Red Velvet", emoji: "🔴", note: "Velvety & indulgent", accent: "bg-frosting/30 border-frosting/40" },
  { name: "Pistachio", emoji: "💚", note: "Nutty & fragrant", accent: "bg-sage/10 border-sage/20" },
];

const OrderPaths = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-sage/40" />
            Our Signature Box
            <span className="w-8 h-px bg-sage/40" />
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
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
              className={`group rounded-2xl p-8 text-center border transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 ${cookie.accent}`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cookie.emoji}
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                {cookie.name}
              </h3>
              <p className="text-sm text-muted-foreground">{cookie.note}</p>
              <p className="text-xs text-sage font-medium mt-2">× 2</p>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="text-center bg-card rounded-3xl p-10 md:p-14 border border-border shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sage/5 blur-[80px]" />
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-semibold mb-5 tracking-wide uppercase">
              Limited Batches
            </div>
            <div className="mb-6">
              <span className="font-serif text-5xl md:text-6xl font-bold text-foreground">$42</span>
              <span className="text-muted-foreground text-lg ml-2">/ box</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              6 cookies of pure happiness. Perfect for gifting or treating yourself.
            </p>
            <Link
              to="/order"
              className="inline-flex items-center gap-3 bg-sage hover:bg-sage/90 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-sage/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Order This Box
              <ArrowRight size={20} />
            </Link>
            <p className="mt-4 text-xs text-muted-foreground">
              We reply within 30 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPaths;
