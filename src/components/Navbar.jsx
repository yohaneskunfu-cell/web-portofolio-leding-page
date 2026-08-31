export default function Navbar({ onOpenContact }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-black/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-xs tracking-widest uppercase font-bold text-white">
            DEVELOPER<span className="text-neutral-500">.IO</span>
          </span>
        </div>
        <button
          onClick={onOpenContact}
          className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white transition-all duration-200"
        >
          Hubungi Saya
        </button>
      </div>
    </header>
  );
}