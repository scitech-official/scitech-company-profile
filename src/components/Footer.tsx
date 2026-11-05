"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#060b14] text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-slate-800/60">
            {/* Brand & Address (Col 2) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 shrink-0">
                  <Image src="/Group 6.png" alt="SCI Tech Emblem" fill className="object-contain" />
                </div>
                <div className="relative h-5 w-28 shrink-0">
                  <Image src="/Group 14.png" alt="SCI Tech Logo" fill className="object-contain" />
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm">
                PT Solusi Cerdas Infrastructure Technology (SCI Tech) — Startup konsultan IT dan rekayasa data dari
                Jember, Jawa Timur. Solusi hulu-ke-hilir untuk B2B, agrikultur modern, dan instansi pemerintahan.
              </p>
              <div className="text-[11px] text-slate-400 space-y-1 font-mono">
                <div>
                  <strong className="text-slate-200">Alamat Kantor &amp; Lab:</strong>
                </div>
                <div>Jl. Raden Patah VI No. 90, Jember, Jawa Timur</div>
              </div>
            </div>

            {/* Service Pillars */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold font-mono text-white uppercase tracking-wider">Pilar Layanan</h4>
              <ul className="space-y-2 text-[11px]">
                {[
                  "Pengembangan Software",
                  "Artificial Intelligence",
                  "Internet of Things",
                  "Analisis Data",
                  "HYDRA Edge Controller",
                ].map((s) => (
                  <li key={s}>
                    <a className="hover:text-[#fe7a00] transition-colors" href={s.includes("HYDRA") ? "#produk" : "#layanan"}>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio Cases */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold font-mono text-white uppercase tracking-wider">Portofolio</h4>
              <ul className="space-y-2 text-[11px]">
                {[
                  "Ramadhan Camp Platform",
                  "HYDRA Greenhouse",
                  "Smart School Attendance (SSAS)",
                  "SPK Pasirian",
                  "AI Radar Jember",
                  "Filter Spam Judi Online",
                ].map((s) => (
                  <li key={s}>
                    <a className="hover:text-[#fe7a00] transition-colors" href="#portofolio">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Leadership */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold font-mono text-white uppercase tracking-wider">Kontak &amp; Legalitas</h4>
              <div className="text-[11px] text-slate-300 space-y-1.5 font-mono bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <div className="text-white font-semibold">WA: +62 895-1325-9281</div>
                <div className="truncate text-slate-400">solusicerdasinfratech@gmail.com</div>
              </div>
              <div className="pt-2 text-[10px] text-slate-400 leading-snug border-t border-slate-800/60">
                <span className="text-slate-500 block font-mono">Lead Author &amp; Consultant:</span>
                <span className="text-slate-200 font-semibold">Gilang Maulana Bilhaq, S.Kom.</span>
                <span className="text-[9px] text-slate-400 block font-mono">(Principal Consultant &amp; Lead Engineer)</span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-500 font-mono">
            <div>© 2026 PT Solusi Cerdas Infrastructure Technology. Seluruh hak cipta dilindungi.</div>
            <div className="flex items-center gap-5">
              <a className="hover:text-slate-300 transition-colors" href="#tentang">
                Nilai SMART
              </a>
              <a className="hover:text-slate-300 transition-colors" href="#alur-kerja">
                Alur Kerja
              </a>
              <a className="hover:text-slate-300 transition-colors" href="#faq">
                FAQ
              </a>
              <a className="hover:text-slate-300 transition-colors" href="#kontak">
                Konsultasi B2B
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          aria-label="Konsultasi WhatsApp SCI Tech"
          className="relative flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-5 py-2.5 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20konsultasi%20proyek%20teknologi."
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-white" />
          </span>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="text-[11px] font-bold font-mono tracking-wide">Konsultasi WA</span>
        </a>
      </div>
    </>
  );
}

