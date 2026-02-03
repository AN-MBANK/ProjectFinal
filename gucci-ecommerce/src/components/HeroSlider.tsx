export default function HeroSlider() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background image */}
      <img
        src="/hero-fashion.jpg"
        alt="Fashion Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end px-24">
        <div className="max-w-xl text-white">
          <h1 className="text-6xl font-luxury mb-6 tracking-widest">
            DENIM ISSUE
          </h1>

          <p className="text-sm text-gray-200 leading-relaxed mb-10">
            Discover the modern interpretation of denim fashion,
            where timeless elegance meets contemporary design.
          </p>

          <button className="border border-white px-10 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <span className="w-3 h-3 rounded-full bg-white" />
        <span className="w-3 h-3 rounded-full bg-white/50" />
        <span className="w-3 h-3 rounded-full bg-white/50" />
      </div>
    </section>
  );
}
