import { Instagram, Facebook, Phone, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="py-14 bg-dark border-t border-dark-foreground/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <img src={logo} alt="The Bloom Oven" className="h-10 mx-auto md:mx-0 mb-3 brightness-150" />
            <p className="text-sm text-dark-foreground/50">
              Licensed Home Bakery
            </p>
            <p className="text-sm text-dark-foreground/50">
              5 Grand St, Connecticut
            </p>
            <a href="mailto:thebloomoven@gmail.com" className="text-sm text-caramel hover:underline mt-1 inline-block">
              thebloomoven@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={getWhatsAppUrl("Hi! I'd like to place an order 🌸")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-foreground/30 hover:text-caramel transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </a>
            <a
              href="https://instagram.com/thebloomoven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-foreground/30 hover:text-caramel transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://facebook.com/thebloomoven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-foreground/30 hover:text-caramel transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href="tel:+14752569577"
              className="text-dark-foreground/30 hover:text-caramel transition-colors"
              aria-label="Call us"
            >
              <Phone size={22} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-foreground/10 text-center">
          <p className="text-xs text-dark-foreground/30">
            © {new Date().getFullYear()} The Bloom Oven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
