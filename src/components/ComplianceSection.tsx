"use client";

import { useInView } from "@/hooks/useInView";
import { COMPLIANCE_BADGES } from "@/data/landingData";

export default function ComplianceSection() {
  const complianceAnim = useInView(0.15);

  return (
    <section ref={complianceAnim.ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 space-y-3 ${
            complianceAnim.inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-xs font-bold font-mono text-[#0086c9] uppercase tracking-[0.2em]">
            Jaminan Kualitas &amp; Legalitas
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Standar Kepatuhan Rekayasa Berstandar Enterprise
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Setiap kesepakatan proyek dilindungi oleh payung hukum legal, jaminan kerahasiaan data, serta protokol
            rekayasa berstandar industri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPLIANCE_BADGES.map((c, i) => (
            <div
              key={c.title}
              className={`p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                complianceAnim.inView ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-xl">{c.icon}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono font-semibold text-slate-400">
                <span>Enterprise Guaranteed</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

