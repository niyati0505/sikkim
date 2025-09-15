export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/monastery-fullpage-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-4xl md:text-5xl font-bold mb-8 text-pretty max-w-2xl mx-auto text-yellow-400 drop-shadow-lg text-shadow-lg">
          A Nature's Gift
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 text-shadow-sm">200+</div>
            <div className="text-sm opacity-80">Sacred Sites</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 text-shadow-sm">50+</div>
            <div className="text-sm opacity-80">360° Views</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 text-shadow-sm">1000+</div>
            <div className="text-sm opacity-80">Digital Archives</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 text-shadow-sm">5</div>
            <div className="text-sm opacity-80">Languages</div>
          </div>
        </div>
      </div>
    </section>
  )
}
