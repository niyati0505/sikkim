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

      </div>
    </section>
  )
}
