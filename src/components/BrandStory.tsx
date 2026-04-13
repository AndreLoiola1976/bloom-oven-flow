const BrandStory = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="text-4xl mb-6">🌿</div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Our Story
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
          nourish your body <em>and</em> your soul.
        </p>
      </div>
    </section>
  );
};

export default BrandStory;
