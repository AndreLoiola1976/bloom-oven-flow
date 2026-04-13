import { MessageSquare, ClipboardCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Message Us",
    description: "Tell us what you'd like on WhatsApp — cookies, cake, or something custom.",
  },
  {
    icon: ClipboardCheck,
    title: "We Confirm Details",
    description: "We'll chat about flavors, size, date, and price. No surprises.",
  },
  {
    icon: Truck,
    title: "Fresh to Your Door",
    description: "We bake it fresh and deliver it right to you in Connecticut.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-biscuit/50 via-dough/60 to-latte/40">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-4">
          How Ordering Works
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-md mx-auto">
          Three simple steps — no apps, no accounts, just a conversation.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-caramel/25 text-espresso mb-5 group-hover:bg-caramel group-hover:text-white transition-colors duration-300 shadow-md shadow-caramel/20">
                <step.icon size={28} />
              </div>
              <div className="text-xs font-semibold text-caramel uppercase tracking-widest mb-2">
                Step {i + 1}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
