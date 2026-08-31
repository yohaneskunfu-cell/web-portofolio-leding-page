export default function ContactModal({ isOpen, onClose, selectedProject }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-8 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white font-mono text-sm"
        >
          ✕ [ESC]
        </button>

        <h3 className="text-xl font-bold font-mono tracking-wide text-white uppercase mb-2">
          {selectedProject ? `Detail: ${selectedProject.title}` : "Hubungi Saya"}
        </h3>
        <p className="text-neutral-400 text-sm mb-6 font-light">
          {selectedProject
            ? selectedProject.description
            : "Kirimkan pesan atau diskusi proyek baru melalui formulir di bawah ini."}
        </p>

        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">Nama</label>
            <input
              type="text"
              required
              className="w-full bg-black border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
              placeholder="Nama Anda"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full bg-black border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
              placeholder="email@domain.com"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">Pesan</label>
            <textarea
              rows="3"
              required
              className="w-full bg-black border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
              placeholder="Tuliskan pesan kamu..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-white text-black font-mono text-xs font-bold tracking-wider uppercase hover:bg-neutral-200 transition-all"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}