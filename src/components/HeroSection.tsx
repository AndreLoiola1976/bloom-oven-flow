import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const AnnouncementBar = () => {
  return (
    <div className="bg-caramel text-espresso text-center py-2.5 px-4">
      <p className="text-sm font-semibold tracking-wide">
        🔥 Freshly baked weekly — limited batches, order before we sell out
      </p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <AnnouncementBar />
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-dark">
        {/* Subtle warm ambient glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-caramel/8 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-toffee/6 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-block mb-8 px-5 py-2 rounded-full border border-caramel/30 bg-caramel/10">
            <span className="text-sm font-medium text-caramel">
              Gluten-Free · Dairy-Free · Refined Sugar-Free
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-dark-foreground">
            Bakes That Make
            <br />
            <span className="text-caramel italic">You Close Your Eyes.</span>
          </h1>

          <p className="text-lg md:text-xl text-dark-foreground/60 max-w-xl mx-auto mb-12 leading-relaxed font-light">
            Small-batch, handcrafted treats from our licensed home kitchen in Connecticut.
            <br className="hidden md:block" />
            Made fresh weekly. Gone fast.
          </p>

          <a
            href={getWhatsAppUrl("Hi! I'd like to place an order 🌸")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-caramel hover:bg-caramel/90 text-espresso px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-caramel/25 hover:shadow-xl hover:shadow-caramel/35 transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={22} />
            Order via WhatsApp
          </a>

          <p className="mt-5 text-sm text-dark-foreground/40 font-light">
            We reply within 30 minutes · No apps, no accounts
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
