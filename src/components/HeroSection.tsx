import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import heroCookies from "@/assets/hero-cookies.jpg";

const AnnouncementBar = () => {
  return (
    <div className="bg-caramel text-espresso text-center py-2.5 px-4">
      <p className="text-sm font-semibold tracking-wide">
        🔥 Limited batches every week — order before we sell out
      </p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <AnnouncementBar />
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-dark">
        {/* Product image background */}
        <div className="absolute inset-0">
          <img
            src={heroCookies}
            alt="Freshly baked chocolate chip, red velvet, and pistachio cookies"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/50" />
        </div>

        {/* Warm ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-caramel/10 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-sage/30 bg-sage/10">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse-soft" />
              <span className="text-xs font-medium text-sage tracking-wide uppercase">
                Gluten-Free · Dairy-Free · Refined Sugar-Free
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-dark-foreground">
              Freshly Baked Cookies.
              <br />
              <span className="text-caramel">Limited Batches Every Week.</span>
            </h1>

            <p className="text-lg text-dark-foreground/60 max-w-md mb-4 leading-relaxed font-light">
              The 6-Cookie Box — Chocolate Chip, Red Velvet & Pistachio.
              <br />
              2 of each, handcrafted in Connecticut.
            </p>

            <p className="text-2xl md:text-3xl font-serif font-bold text-caramel mb-8">
              $42 <span className="text-base font-sans font-normal text-dark-foreground/40">/ box</span>
            </p>

            <a
              href={getWhatsAppUrl("Hi! I'd like to order the 6-Cookie Box ($42) 🍪")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-caramel hover:bg-caramel/90 text-espresso px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-caramel/25 hover:shadow-xl hover:shadow-caramel/35 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={22} />
              Order via WhatsApp
            </a>

            <p className="mt-4 text-sm text-dark-foreground/40 font-light">
              We reply within 30 minutes · No apps, no accounts
            </p>
          </div>

          {/* Right — product image */}
          <div className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-dark-foreground/10">
              <img
                src={heroCookies}
                alt="The Bloom Oven 6-Cookie Box: Chocolate Chip, Red Velvet, Pistachio"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/80 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-sage/20 text-sage text-xs font-semibold">
                    Allergen-Friendly
                  </span>
                  <span className="px-3 py-1 rounded-full bg-caramel/20 text-caramel text-xs font-semibold">
                    Made Fresh Weekly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
