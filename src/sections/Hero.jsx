export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle decorative accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-5 sm:gap-6 md:items-stretch">
          {/* Left column: text + before/after image — this column defines the height */}
          <div className="flex flex-col gap-5 sm:gap-6 md:w-[47%] md:shrink-0 ">
            {/* Text content */}
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-foreground block mb-2">
                Backstep Shoe Care
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-4xl font-extrabold leading-tight text-foreground mb-3 sm:mb-4">
                LET US REVIVE YOUR SHOES!
              </h1>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Lebih dari sekadar cuci sepatu – kami merawat, melindungi, dan
                mengembalikan tampilan sepatu kesayanganmu agar awet, bersih,
                dan nyaman dipakai.
              </p>
            </div>

            {/* Before / After photo */}
            <div className="group overflow-hidden rounded-2xl sm:rounded-3xl border-[5px] sm:border-[7px] border-primary">
              <img
                src="/backstep-photo-2.png"
                alt="Before and after shoe cleaning comparison"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
            </div>
          </div>

          {/* Right column: product image — relative wrapper, absolute image to match left column height exactly */}
          <div className="relative flex-1 min-w-0 md:min-h-0 ">
            {/* On mobile: normal flow. On desktop: absolute to fill parent height */}
            <div className="md:absolute md:inset-0 group overflow-hidden rounded-2xl sm:rounded-3xl border-[5px] sm:border-[7px] border-primary">
              <img
                src="/backstep-photo-3.png"
                alt="Backstep shoe care products — Quick Wipes, Foam, and Repel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
            </div>
            {/* Spacer for mobile to maintain aspect ratio */}
            <div className="aspect-video md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};
