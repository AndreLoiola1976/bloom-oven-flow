import { Instagram } from "lucide-react";

const placeholders = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  bg: [
    "bg-biscuit/30",
    "bg-frosting/30",
    "bg-dough",
    "bg-sage/10",
    "bg-golden/15",
    "bg-card",
  ][i],
  emoji: ["🍪", "🎂", "🧁", "🌿", "🍰", "✨"][i],
}));

const InstagramSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Instagram size={28} className="mx-auto text-sage/50 mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
          Follow the Journey
        </h2>
        <p className="text-muted-foreground mb-10">
          Fresh bakes, behind-the-scenes, and daily inspiration
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
          {placeholders.map((p) => (
            <div
              key={p.id}
              className={`aspect-square rounded-xl ${p.bg} flex items-center justify-center text-3xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm`}
            >
              {p.emoji}
            </div>
          ))}
        </div>

        <a
          href="https://instagram.com/thebloomoven"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sage hover:text-sage/80 font-semibold transition-colors"
        >
          <Instagram size={18} />
          @thebloomoven
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
