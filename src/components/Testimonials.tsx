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
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-foreground mb-14">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card rounded-2xl border border-border/60 p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-secondary text-secondary"
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
