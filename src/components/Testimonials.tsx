import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "I can't believe these are gluten-free! The chocolate chip cookies are absolutely incredible. My kids couldn't tell the difference.",
  },
  {
    name: "Jessica R.",
    text: "Ordered a birthday cake for my daughter and it was stunning. The ordering process was so easy — just a quick WhatsApp chat!",
  },
  {
    name: "Amanda L.",
    text: "Finally, a bakery that understands dietary needs without sacrificing flavor. The cupcakes were gone in minutes at our party.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-sage/40" />
            Real Reviews
            <span className="w-8 h-px bg-sage/40" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
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
