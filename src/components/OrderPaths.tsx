import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const products = [
  {
    title: "Cookies & Treats",
    description: "Classic chocolate chip, snickerdoodle, oatmeal raisin, and seasonal specials — all gluten-free and dairy-free.",
    cta: "Order Cookies",
    message: "Hi! I'd like to order cookies 🍪\n\nType: \nQuantity: \nDate needed: ",
    emoji: "🍪",
  },
  {
    title: "Cakes",
    description: "Custom celebration cakes for birthdays, weddings, and special moments — beautifully decorated and allergen-friendly.",
    cta: "Order a Cake",
    message: "Hi! I'd like to order a cake 🎂\n\nOccasion: \nSize: \nFlavor: \nDate needed: ",
    emoji: "🎂",
  },
  {
    title: "Cupcakes & Minis",
    description: "Perfect for parties and gifts. Available in boxes of 6 or 12 with mix-and-match flavors.",
    cta: "Order Cupcakes",
    message: "Hi! I'd like to order cupcakes 🧁\n\nQuantity: \nFlavors: \nDate needed: ",
    emoji: "🧁",
  },
  {
    title: "Custom Orders",
    description: "Have something special in mind? Tell us your vision and we'll bring it to life — dietary needs always welcome.",
    cta: "Request Custom Order",
    message: "Hi! I have a custom order request ✨\n\nWhat I'm looking for: \nDate needed: \nAny dietary notes: ",
    emoji: "✨",
  },
];

const OrderPaths = () => {
  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-4">
          What Would You Like?
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-md mx-auto">
          Pick a category to start your order — we'll take it from there.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="group relative bg-card rounded-2xl border border-border/60 p-8 hover:shadow-lg hover:shadow-golden/10 hover:border-golden/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="font-serif text-2xl font-semibold mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {p.description}
              </p>
              <a
                href={getWhatsAppUrl(p.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-whatsapp/15 hover:shadow-lg hover:shadow-whatsapp/20 transition-all duration-300"
              >
                <MessageCircle size={16} />
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderPaths;
