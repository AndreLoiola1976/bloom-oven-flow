import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCookies from "@/assets/hero-cookies.jpg";

const AnnouncementBar = () => {
  return (
    <div className="bg-sage text-white text-center py-2.5 px-4">
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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Product image background — brighter, natural lighting */}
        <div className="absolute inset-0">
          <img
            src={heroCookies}
            alt="Freshly baked chocolate chip, red velvet, and pistachio cookies"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/65 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-sage/30 bg-sage/10">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse-soft" />
              <span className="text-xs font-medium text-sage tracking-wide uppercase">
                Gluten-Free · Dairy-Free · Refined Sugar-Free
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground drop-shadow-sm">
              Freshly Baked Cookies.
              <br />
              <span className="text-toffee">Limited Batches Every Week.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-4 leading-relaxed font-light">
              The 6-Cookie Box — Chocolate Chip, Red Velvet & Pistachio.
              <br />
              2 of each, handcrafted in Connecticut.
            </p>

            <p className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
              $42 <span className="text-base font-sans font-normal text-muted-foreground">/ box</span>
            </p>

            <Link
              to="/order"
              className="inline-flex items-center gap-3 bg-sage hover:bg-sage/85 text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl shadow-sage/30 hover:shadow-2xl hover:shadow-sage/40 transition-all duration-300 hover:-translate-y-1 ring-2 ring-sage/20 ring-offset-2 ring-offset-cream"
            >
              Order Now
              <ArrowRight size={22} />
            </Link>

            <p className="mt-4 text-sm text-muted-foreground font-light">
              We reply within 30 minutes · No apps, no accounts
            </p>
          </div>

          {/* Right — product image */}
          <div className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-foreground/10 border border-border">
              <img
                src={heroCookies}
                alt="The Bloom Oven 6-Cookie Box: Chocolate Chip, Red Velvet, Pistachio"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/60 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-sage/30 text-white text-xs font-semibold backdrop-blur-sm">
                    Allergen-Friendly
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">
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
