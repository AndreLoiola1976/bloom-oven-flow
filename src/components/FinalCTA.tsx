import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-sage/10">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Taste
          <br />
          <span className="text-sage italic">Something Special?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
          Just say hi — we'll help you pick the perfect treat.
          No forms, no waiting. Just a quick chat.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/order"
            className="inline-flex items-center gap-3 bg-sage hover:bg-sage/85 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-sage/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Order Now
            <ArrowRight size={20} />
          </Link>
          <a
            href={getWhatsAppUrl("Hi! I'd love to order from The Bloom Oven 🌸")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-sage/30 bg-background hover:bg-sage/5 text-sage px-6 py-4 rounded-full text-sm font-semibold transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
