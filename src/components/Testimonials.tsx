import { Star } from "lucide-react";
import { tenant } from "@/core/tenant/tenant";

const Testimonials = () => {
  const copy = tenant.content.testimonials;

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-sage/40" />
            {copy.eyebrow}
            <span className="w-8 h-px bg-sage/40" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {copy.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {copy.reviews.map((r) => (
            <div
              key={r.name}
              className="bg-background rounded-2xl border border-border p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-golden text-golden"
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">
                "{r.text}"
              </p>
              <p className="text-sm font-semibold text-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
