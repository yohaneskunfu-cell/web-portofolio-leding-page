export default function Hero({ setIsContactOpen }) {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 px-6 bg-black border-b border-neutral-900 overflow-hidden">
      {/* Background Radial Dots Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-50 -z-10" />

      {/* Glow Blur Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-80 bg-neutral-800/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/80 font-mono text-xs tracking-wider text-neutral-400 uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          AVAILABLE FOR PROJECTS
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white mb-6">
          Membangun <em className="font-serif italic font-normal text-neutral-400">Pengalaman Web</em> <br className="hidden sm:inline" />
          yang Modern & Responsif.
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm md:text-base max-w-xl font-light leading-relaxed mb-10">
          Fokus pada pengembangan antarmuka yang bersih, intuitif, dan performa tinggi menggunakan ekosistem React modern.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-bold hover:bg-neutral-200 transition-colors uppercase"
          >
            Lihat Portofolio ↓
          </a>
          <button
            onClick={() => setIsContactOpen && setIsContactOpen(true)}
            className="px-6 py-3 border border-neutral-700 bg-black text-white hover:border-white transition-colors uppercase"
          >
            Hubungi Saya
          </button>
        </div>
      </div>
    </section>
  );
}