import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Deep warm layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-biscuit/50 via-dough to-golden/30" />
      
      {/* Rich decorative orbs */}
      <div className="absolute top-16 right-8 w-80 h-80 rounded-full bg-golden/35 blur-3xl" />
      <div className="absolute bottom-16 left-8 w-96 h-96 rounded-full bg-frosting/40 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-caramel/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-toffee/15 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <div className="inline-block mb-6 px-5 py-2 rounded-full bg-frosting/60 border border-rose/30 shadow-md shadow-rose/10">
          <span className="text-sm font-medium text-chocolate">
            Gluten-Free · Dairy-Free · Refined Sugar-Free
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
          Baked with Heart.
          <br />
          <span className="text-caramel italic">Made to Bloom.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Weekly fresh bakes from our licensed home kitchen in Connecticut 🍪
          <br className="hidden md:block" />
          Handcrafted with love, delivered to your door.
        </p>

        <a
          href={getWhatsAppUrl("Hi! I'd like to place an order 🌸")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-chocolate/20 hover:shadow-xl hover:shadow-chocolate/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          <MessageCircle size={22} />
          Order on WhatsApp
        </a>

        <p className="mt-4 text-sm text-muted-foreground">
          We usually reply within 30 minutes
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
