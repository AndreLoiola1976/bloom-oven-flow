import { Instagram } from "lucide-react";
import { tenant } from "@/core/tenant/tenant";

const InstagramSection = () => {
  const copy = tenant.content.instagramSection;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Instagram size={28} className="mx-auto text-sage/50 mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
          {copy.title}
        </h2>
        <p className="text-muted-foreground mb-10">
          {copy.subtitle}
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
          {copy.tiles.map((p, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl ${p.bg} flex items-center justify-center text-3xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm`}
            >
              {p.emoji}
            </div>
          ))}
        </div>

        <a
          href={tenant.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sage hover:text-sage/80 font-semibold transition-colors"
        >
          <Instagram size={18} />
          {tenant.contact.instagramHandle}
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
