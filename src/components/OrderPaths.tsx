import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { tenant } from "@/core/tenant/tenant";

const OrderPaths = () => {
  const copy = tenant.content.orderPaths;

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-sage/40" />
            {copy.eyebrow}
            <span className="w-8 h-px bg-sage/40" />
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            {copy.title}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            {copy.subtitle}
          </p>
        </div>

        {/* Cookie cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {copy.cookies.map((cookie) => (
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
              <p className="text-xs text-sage font-medium mt-2">{copy.perCookieMultiplier}</p>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="text-center bg-card rounded-3xl p-10 md:p-14 border border-border shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sage/5 blur-[80px]" />
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-semibold mb-5 tracking-wide uppercase">
              {copy.badge}
            </div>
            <div className="mb-6">
              <span className="font-serif text-5xl md:text-6xl font-bold text-foreground">{copy.pricePrefix}</span>
              <span className="text-muted-foreground text-lg ml-2">{copy.priceSuffix}</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              {copy.description}
            </p>
            <Link
              to="/order"
              className="inline-flex items-center gap-3 bg-sage hover:bg-sage/90 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-sage/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              {copy.cta}
              <ArrowRight size={20} />
            </Link>
            <p className="mt-4 text-xs text-muted-foreground">
              {copy.replyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPaths;
