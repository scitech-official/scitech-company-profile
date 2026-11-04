"use client";

import { useInView } from "@/hooks/useInView";
import { SMART_VALUES } from "@/data/landingData";

export default function SmartValues() {
  const smartAnim = useInView(0.15);

  return (
    <section ref={smartAnim.ref} className="py-24 bg-[#f8f9fb] border-y border-slate-100" id="tentang">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 space-y-4 ${
            smartAnim.inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-xs font-bold font-mono text-[#fe7a00] uppercase tracking-[0.2em]">
            Fondasi Filosofi Rekayasa
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Prinsip <span className="text-[#0086c9]">SMART</span> dalam Setiap Solusi
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
            Kami memegang teguh 5 nilai fundamental untuk menjamin setiap proyek memberikan dampak strategis
            berkesinambungan bagi mitra kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {SMART_VALUES.map((val, i) => {
            const isBlue = val.color === "blue";
            return (
              <div
                key={val.letter}
                className={`card-interactive p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-card-hover ${
                  isBlue ? "hover:border-[#0086c9]/50" : "hover:border-[#fe7a00]/50"
                } flex flex-col justify-between group ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""} ${
                  smartAnim.inView ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${
                      isBlue
                        ? "bg-blue-50 text-[#0086c9] group-hover:bg-[#0086c9]"
                        : "bg-orange-50 text-[#fe7a00] group-hover:bg-[#fe7a00]"
                    } group-hover:text-white flex items-center justify-center font-display font-bold text-lg transition-all duration-300`}
                  >
                    {val.letter}
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-bold font-mono ${
                        isBlue ? "text-[#0086c9]" : "text-[#fe7a00]"
                      } uppercase tracking-wider block`}
                    >
                      Pilar {val.pillar}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 leading-tight">{val.title}</h3>
                    <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
                <div
                  className={`mt-5 pt-3 border-t border-slate-100 text-[10px] font-semibold font-mono ${
                    isBlue ? "text-[#0086c9]" : "text-[#fe7a00]"
                  } flex items-center justify-between`}
                >
                  <span>{val.tag}</span>
                  <span className="font-sans text-xs">↗</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

