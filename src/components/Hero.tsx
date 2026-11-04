"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

interface HeroProps {
  onOpenCompanyProfile: () => void;
}

export default function Hero({ onOpenCompanyProfile }: HeroProps) {
  const heroAnim = useInView(0.1);

  return (
    <section
      ref={heroAnim.ref}
      className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f8f9fb] via-white to-white bg-tech-grid"
    >
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#0086c9]/[0.05] to-transparent rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#fe7a00]/[0.04] to-transparent rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className={`space-y-7 ${heroAnim.inView ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-[#fe7a00] text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe7a00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe7a00]" />
              </span>
              <span className="tech-badge">Startup Konsultan IT &amp; Rekayasa Data • Jember, Jawa Timur</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.12]">
              Mitra Rekayasa Teknologi &amp; Transformasi Digital{" "}
              <span className="text-[#fe7a00] relative inline-block">
                Terdepan
                <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-[#fe7a00]/25 rounded-full" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              SCI Tech menghadirkan solusi rekayasa hulu-ke-hilir—mulai dari perangkat lunak enterprise, kecerdasan
              buatan (AI), telemetri IoT edge, hingga analitik data terintegrasi bagi klien B2B, agrikultur modern, dan
              instansi pemerintahan.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                className="cta-primary animate-pulse-glow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#fe7a00] hover:bg-[#e56e00] text-white font-semibold text-sm shadow-md hover:shadow-glow-orange transition-all duration-300 transform hover:-translate-y-0.5"
                href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20konsultasikan%20proyek%20teknologi."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Konsultasikan Proyek Anda</span>
                <span className="text-base font-bold">↗</span>
              </a>
              <button
                type="button"
                onClick={onOpenCompanyProfile}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all bg-white hover:bg-slate-50 hover:shadow-sm cursor-pointer"
              >
                <span>📄 Unduh Company Profile</span>
              </button>
              <a
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-slate-600 hover:text-[#0086c9] font-medium text-sm transition-colors"
                href="#portofolio"
              >
                <span>Lihat Portofolio</span>
                <span>↓</span>
              </a>
            </div>

            {/* High-Tech Trust Metrics with JetBrains Mono */}
            <div className="pt-7 border-t border-slate-200/80 flex items-center gap-8">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center leading-none shadow-sm border border-slate-800">
                  <span className="text-xs font-bold font-mono text-[#fe7a00]">99.9%</span>
                  <span className="text-[8px] text-slate-400 font-mono uppercase tracking-tighter mt-0.5">Uptime</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Arsitektur Teruji</h4>
                  <p className="text-[11px] text-slate-500 font-mono">Fail-safe &amp; edge computing</p>
                </div>
              </div>

              <div className="h-10 w-px bg-slate-200" />

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0086c9] text-white flex items-center justify-center font-bold text-xs shadow-sm font-mono">
                  B2B
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">End-to-End Delivery</h4>
                  <p className="text-[11px] text-slate-500 font-mono">Agrikultur, Industri &amp; Publik</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className={`relative ${heroAnim.inView ? "animate-fade-in-right delay-200" : "opacity-0"}`}>
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-gradient-to-br from-[#fe7a00]/15 to-[#0086c9]/20 rounded-full blur-3xl pointer-events-none animate-float" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="/Tampilan HYDRA awal.png"
                  alt="HYDRA Edge Controller Unit SCI Tech"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 image-overlay-gradient pointer-events-none" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 text-slate-800 text-[11px] font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px]">Based in Jember, East Java</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl text-slate-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded bg-[#e6f3fa] text-[#0086c9] text-[9px] font-bold font-mono uppercase tracking-wider mb-1.5">
                      Hardware Flagship
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      HYDRA 01 Edge Industrial Controller
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Kontrol telemetri presisi untuk otomatisasi irigasi pertanian &amp; sensor industri jarak jauh.
                    </p>
                  </div>
                  <a
                    className="w-9 h-9 shrink-0 rounded-full bg-[#fe7a00] text-white flex items-center justify-center hover:bg-[#e56e00] shadow-md transition-all hover:scale-105"
                    href="#produk"
                    title="Lihat Produk"
                  >
                    <span className="text-sm font-bold">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Strip / Client Logo Bar */}
        <div className="mt-20 pt-10 border-t border-slate-200/70">
          <p className="text-center text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Dipercaya &amp; Telah Berkolaborasi Bersama Institusi Terkemuka
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xs font-bold text-slate-600 tracking-wider">THE SKILL INDONESIA</div>
            <div className="h-4 w-px bg-slate-300 hidden md:block" />
            <div className="text-xs font-bold text-slate-600 tracking-wider">CV. IMAJI SOCIOPRENEUR</div>
            <div className="h-4 w-px bg-slate-300 hidden md:block" />
            <div className="text-xs font-bold text-slate-600 tracking-wider">RADAR JEMBER (JAWA POS)</div>
            <div className="h-4 w-px bg-slate-300 hidden md:block" />
            <div className="text-xs font-bold text-slate-600 tracking-wider">PEMERINTAH KEC. PASIRIAN</div>
          </div>
        </div>
      </div>
    </section>
  );
}

