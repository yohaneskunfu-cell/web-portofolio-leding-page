import { useState } from "react";
import { projectsData } from "./data/projects";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-neutral-900 px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-mono text-xs tracking-widest uppercase hover:opacity-80">
          • PORTFOLIO.BAWON
        </a>
        <div className="flex items-center gap-6 font-mono text-xs">
          <a href="#about" className="text-neutral-400 hover:text-white transition-colors">ABOUT</a>
          <a href="#services" className="text-neutral-400 hover:text-white transition-colors">SERVICES</a>
          <a href="#projects" className="text-neutral-400 hover:text-white transition-colors">WORK</a>
          <button onClick={() => setIsContactOpen(true)} className="text-neutral-400 hover:text-white uppercase">
            CONTACT
          </button>
          <button onClick={() => alert("Mengunduh CV...")} className="border border-neutral-700 px-3 py-1.5 hover:bg-white hover:text-black transition-all">
            YSB KATUK
          </button>
        </div>
      </nav>

      {/* Hero Component */}
      <Hero setIsContactOpen={setIsContactOpen} />

    
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-900">
        <div className="mb-10">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">/// TENTANG SAYA</span>
          <h2 className="text-2xl md:text-3xl font-mono font-bold">Latar Belakang & Tech Stack</h2>
        </div>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-3xl mb-12">
          Saya adalah seorang Pelajar SMK yang sedang mendalami dunia IT untuk membangun aplikasi web modern berkinerja tinggi.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "REACT & VITE", desc: "Pengembangan SPA modern dengan arsitektur komponen bersih." },
            { title: "TAILWIND CSS", desc: "Styling kustom, UI responsif, dan desain sistem modern." },
            { title: "JAVASCRIPT (ES6+)", desc: "Logika antarmuka, integrasi API, dan manajemen state." },
            { title: "GIT & GITHUB", desc: "Kontrol versi, kolaborasi tim, dan manajemen repositori." }
          ].map((skill, i) => (
            <div key={i} className="p-5 border border-neutral-800 bg-neutral-950">
              <h4 className="font-mono text-xs font-bold text-white mb-2">{skill.title}</h4>
              <p className="text-xs text-neutral-400">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Projects Section */}
      <main id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-900">
        <div className="mb-12">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">/// PORTOFOLIO</span>
          <h2 className="text-2xl md:text-3xl font-mono font-bold">Proyek Pilihan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((item) => (
            <div key={item.id} className="p-6 bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
              <div>
                <h3 className="font-mono text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-xs text-neutral-400 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-1">#{tag}</span>
                  ))}
                </div>
              </div>
              <button onClick={() => setSelectedProject(item)} className="w-full border border-neutral-800 py-2 text-xs font-mono hover:bg-white hover:text-black transition-all uppercase">
                Lihat Detail →
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-neutral-800 p-6 max-w-md w-full relative">
            <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-xs font-mono text-neutral-500 hover:text-white">
              [TUTUP]
            </button>
            <h3 className="font-mono text-base font-bold mb-1">HUBUNGI SAYA</h3>
            <p className="text-xs text-neutral-400 mb-6">Kirim pesan langsung ke email saya.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Pesan terkirim!'); setIsContactOpen(false); }} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Nama</label>
                <input type="text" required className="w-full bg-black border border-neutral-800 p-2 text-white focus:outline-none focus:border-white" />
              </div>
              <div>
                <label className="block text-neutral-400 mb-1">Email</label>
                <input type="email" required className="w-full bg-black border border-neutral-800 p-2 text-white focus:outline-none focus:border-white" />
              </div>
              <div>
                <label className="block text-neutral-400 mb-1">Pesan</label>
                <textarea rows="4" required className="w-full bg-black border border-neutral-800 p-2 text-white focus:outline-none focus:border-white"></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black font-bold py-2 hover:bg-neutral-200 uppercase">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-neutral-800 p-6 max-w-md w-full relative">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-xs font-mono text-neutral-500 hover:text-white">
              [TUTUP]
            </button>
            <h3 className="font-mono text-lg font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">{selectedProject.description}</p>
            <button onClick={() => setSelectedProject(null)} className="w-full bg-white text-black font-mono text-xs font-bold py-2 uppercase">
              Tutup Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}