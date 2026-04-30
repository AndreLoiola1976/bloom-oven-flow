import { tenant } from "@/core/tenant/tenant";

const BrandStory = () => {
  const copy = tenant.content.brandStory;

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage uppercase tracking-[0.2em] mb-4">
          <span className="w-8 h-px bg-sage/40" />
          {copy.eyebrow}
          <span className="w-8 h-px bg-sage/40" />
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          {copy.titleLine1}
          <br />
          <span className="italic">{copy.titleLine2}</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
          {copy.paragraph1}
        </p>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {copy.paragraph2Lead}
          <em className="text-sage font-medium">{copy.paragraph2Emphasis}</em>
          {copy.paragraph2Tail}
        </p>
      </div>
    </section>
  );
};

export default BrandStory;
