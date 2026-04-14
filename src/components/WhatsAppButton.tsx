import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl("Hi! I'd like to place an order 🌸")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-sage hover:bg-sage/90 text-white pl-5 pr-6 py-3.5 rounded-full shadow-xl shadow-sage/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="font-bold text-sm">Order Now</span>
    </a>
  );
};

export default WhatsAppButton;
