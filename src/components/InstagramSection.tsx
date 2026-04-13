import { Instagram } from "lucide-react";

const placeholders = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  bg: [
    "bg-golden/30",
    "bg-frosting/50",
    "bg-biscuit/45",
    "bg-caramel/20",
    "bg-rose/25",
    "bg-toffee/25",
  ][i],
  emoji: ["🍪", "🎂", "🧁", "🌿", "🍰", "✨"][i],
}));

const InstagramSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-dough/70 to-biscuit/40">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Instagram size={32} className="mx-auto text-chocolate/40 mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">
          Follow the Journey
        </h2>
        <p className="text-muted-foreground mb-10">
          Fresh bakes, behind-the-scenes, and daily inspiration
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
          {placeholders.map((p) => (
            <div
              key={p.id}
              className={`aspect-square rounded-xl ${p.bg} flex items-center justify-center text-3xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md shadow-chocolate/8`}
            >
              {p.emoji}
            </div>
          ))}
        </div>

        <a
          href="https://instagram.com/thebloomoven"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-chocolate/60 hover:text-chocolate font-medium transition-colors"
        >
          <Instagram size={18} />
          @thebloomoven
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
