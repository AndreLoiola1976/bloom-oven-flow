const BrandStory = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <span className="text-sm font-semibold text-caramel uppercase tracking-[0.2em] mb-4 block">
          Our Story
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate mb-8">
          Born from Love,
          <br />
          <span className="italic">Baked Without Compromise</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
          The Bloom Oven started with a simple belief: everyone deserves to enjoy 
          beautiful bakes — even with dietary restrictions. We're a licensed home 
          bakery in Connecticut, creating gluten-free, dairy-free, and refined 
          sugar-free treats that taste like they have no compromises.
        </p>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Every cookie, cake, and cupcake is handcrafted in small batches with 
          wholesome ingredients and a whole lot of love. Because food should 
          nourish your body <em className="text-caramel">and</em> your soul.
        </p>
      </div>
    </section>
  );
};

export default BrandStory;
