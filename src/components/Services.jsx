import { useState } from "react";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const servicesData = [
    {
      id: "01",
      title: "WEB DEVELOPMENT",
      description: "Pengembangan antarmuka website modern yang responsif, cepat, dan terstruktur menggunakan React dan Tailwind CSS.",
      features: ["Single Page Application (SPA)", "Komponen Modular & Clean Code", "Integrasi REST API"]
    },
    {
      id: "02",
      title: "UI/UX IMPLEMENTATION",
      description: "Menerjemahkan rancangan desain antarmuka menjadi kode nyata dengan presisi tinggi dan animasi yang mulus.",
      features: ["Desain Responsif (Mobile-First)", "Aksesibilitas & Semantik HTML", "Modern Layout Grid & Flexbox"]
    },
    {
      id: "03",
      title: "OPTIMASI PERFORMA WEB",
      description: "Memastikan website memiliki kecepatan muat tinggi, bebas lag, serta ramah untuk mesin pencari (SEO friendly).",
      features: ["Code Splitting & Lazy Loading", "Optimasi Aset & Gambar", "Standardisasi Kode ES6+"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-black text-white px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
            /// LAYANAN & KEAHLIAN
          </span>
          <h2 className="text-3xl md:text-4xl font-mono font-bold">
            Services
          </h2>
          <p className="text-neutral-400 text-sm mt-2 font-mono">
            Solusi teknis yang dapat saya hadirkan untuk proyek web Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((item) => {
            const isActive = activeService === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveService(isActive ? null : item.id)}
                className={`p-6 bg-neutral-950 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive ? "border-white bg-neutral-900" : "border-neutral-800 hover:border-neutral-600"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-neutral-500">{item.id}</span>
                    <span className="text-xs font-mono text-neutral-400">
                      {isActive ? "[ TERPILIH ]" : "[ KLIK DETAIL ]"}
                    </span>
                  </div>

                  <h3 className="text-lg font-mono font-bold mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Detail ekstra dimunculkan saat State Active */}
                {isActive && (
                  <div className="pt-4 border-t border-neutral-800 mt-2">
                    <span className="text-[10px] font-mono text-neutral-400 block mb-2">FITUR UTAMA:</span>
                    <ul className="space-y-1">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-neutral-300 font-mono flex items-center gap-2">
                          <span className="text-neutral-500">•</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}