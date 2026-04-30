import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { getWhatsAppUrl, getTelUrl } from "@/lib/tenantContact";
import { tenant } from "@/core/tenant/tenant";

const Footer = () => {
  const copy = tenant.content.footer;

  return (
    <footer className="py-14 bg-foreground border-t border-foreground/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <img src={logo} alt={tenant.business.name} className="h-10 mx-auto md:mx-0 mb-3 brightness-150" />
            <p className="text-sm text-background/50">
              {copy.tagline}
            </p>
            <p className="text-sm text-background/50">
              {tenant.business.pickupLocation}
            </p>
            <a href={`mailto:${tenant.contact.email}`} className="text-sm text-sage hover:underline mt-1 inline-block">
              {tenant.contact.email}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={getWhatsAppUrl(tenant.contact.defaultOrderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/30 hover:text-sage transition-colors"
              aria-label={copy.whatsAppAriaLabel}
            >
              <MessageCircle size={22} />
            </a>
            <a
              href={tenant.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/30 hover:text-sage transition-colors"
              aria-label={copy.instagramAriaLabel}
            >
              <Instagram size={22} />
            </a>
            <a
              href={tenant.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/30 hover:text-sage transition-colors"
              aria-label={copy.facebookAriaLabel}
            >
              <Facebook size={22} />
            </a>
            <a
              href={getTelUrl()}
              className="text-background/30 hover:text-sage transition-colors"
              aria-label={copy.callAriaLabel}
            >
              <Phone size={22} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 text-center">
          <p className="text-xs text-background/30">
            {copy.copyright(new Date().getFullYear(), tenant.business.name)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

