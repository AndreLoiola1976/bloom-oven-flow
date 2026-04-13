import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-secondary/20" />
      
      {/* Subtle decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-sm font-medium text-primary">
            Gluten-Free · Dairy-Free · Refined Sugar-Free
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-foreground mb-6">
          Baked with Heart.
          <br />
          <span className="text-primary italic">Made to Bloom.</span>
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
          className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
