import { Truck, MapPin, Mail } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-sage/40" />
            Good to Know
            <span className="w-8 h-px bg-sage/40" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Ordering & Delivery
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-background rounded-2xl p-8 border border-sage/15 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center">
                <Truck size={20} className="text-sage" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Shipping</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                Minimum order: <strong className="text-foreground">$20</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                Customer pays shipping
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                Connecticut delivery area
              </li>
            </ul>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-sage/15 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center">
                <MapPin size={20} className="text-sage" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Pickup</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                No minimum order
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                <strong className="text-foreground">5 Grand St, Connecticut</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                Schedule via WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <Mail size={16} />
            <span>Questions?</span>
            <a href="mailto:thebloomoven@gmail.com" className="text-sage hover:underline font-medium">
              thebloomoven@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
