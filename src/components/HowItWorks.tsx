import { Truck, MapPin, Mail } from "lucide-react";
import { tenant } from "@/core/tenant/tenant";

const HowItWorks = () => {
  const ordering = tenant.content.ordering;
  const shippingBullets = ordering.shippingBullets;
  const pickupBullets = ordering.pickupBullets(tenant.business.pickupLocation);

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-sage/40" />
            {ordering.sectionEyebrow}
            <span className="w-8 h-px bg-sage/40" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {ordering.sectionTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-background rounded-2xl p-8 border border-sage/15 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center">
                <Truck size={20} className="text-sage" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {ordering.shippingHeading}
              </h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {shippingBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>
                    {b.startsWith("Minimum order:") ? (
                      <>
                        Minimum order:{" "}
                        <strong className="text-foreground">
                          ${tenant.business.shippingMinimum}
                        </strong>
                      </>
                    ) : (
                      b
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-sage/15 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center">
                <MapPin size={20} className="text-sage" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {ordering.pickupHeading}
              </h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {pickupBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  {b === tenant.business.pickupLocation ? (
                    <strong className="text-foreground">{b}</strong>
                  ) : (
                    <span>{b}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <Mail size={16} />
            <span>{ordering.questionsLabel}</span>
            <a
              href={`mailto:${tenant.contact.email}`}
              className="text-sage hover:underline font-medium"
            >
              {tenant.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

