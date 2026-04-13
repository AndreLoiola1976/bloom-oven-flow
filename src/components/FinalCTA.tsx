import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-golden/15 via-dough to-frosting/15">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
          Not Sure What to Order?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          No worries — just say hi and we'll help you pick the perfect treat.
          We love chatting about bakes!
        </p>
        <a
          href={getWhatsAppUrl(
            "Hi! I'd love to learn more about your bakes 🌸"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-whatsapp/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <MessageCircle size={22} />
          Message Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
