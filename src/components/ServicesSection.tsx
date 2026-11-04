"use client";

import { useInView } from "@/hooks/useInView";
import { SERVICES_DATA } from "@/data/landingData";

export default function ServicesSection() {
  const layananAnim = useInView(0.15);

  return (
    <section ref={layananAnim.ref} className="py-24 bg-white" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 ${
            layananAnim.inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold font-mono text-[#fe7a00] uppercase tracking-[0.2em]">
              Keahlian &amp; Kapabilitas Inti
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              4 Pilar Layanan Solusi Rekayasa Terpadu
            </h2>
            <div className="section-divider" />
            <p className="text-sm text-slate-500">
              Dari coding aplikasi custom hingga deployment sensor hardware lapangan, kami menyatukan disiplin ilmu
              rekayasa secara menyeluruh.
            </p>
          </div>
          <a
            className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold font-mono uppercase tracking-wider text-white bg-[#0086c9] hover:bg-[#006699] shadow-md transition-all self-start md:self-auto"
            href="#kontak"
          >
            Diskusikan Kebutuhan Anda <span className="text-sm font-sans">↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {SERVICES_DATA.map((pilar, i) => {
            const isBlue = pilar.accent === "blue";
            return (
              <div
                key={pilar.label}
                className={`card-interactive p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 ${
                  isBlue ? "hover:border-[#0086c9]" : "hover:border-[#fe7a00]"
                } hover:shadow-card-hover flex flex-col justify-between ${
                  layananAnim.inView ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl ${
                        isBlue ? "bg-blue-50 text-[#0086c9]" : "bg-orange-50 text-[#fe7a00]"
                      } flex items-center justify-center font-bold text-sm font-mono`}
                    >
                      P.{pilar.label}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider bg-slate-100 text-slate-500">
                      Modul {pilar.label}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{pilar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">{pilar.desc}</p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-1">
                    {pilar.items.map(([sub, text]) => (
                      <div key={sub} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isBlue ? "bg-[#0086c9]" : "bg-[#fe7a00]"}`} />
                        <div>
                          <strong className="text-slate-800">{sub}</strong> {text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chip */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
                    <span className="font-semibold text-slate-400">Stack:</span>
                    <span className="text-slate-700">{pilar.tech}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

