"use client";

import { useInView } from "@/hooks/useInView";
import { TIMELINE_STEPS } from "@/data/landingData";

export default function WorkflowSection() {
  const timelineAnim = useInView(0.15);

  return (
    <section ref={timelineAnim.ref} className="py-24 bg-[#f8f9fb] border-y border-slate-100" id="alur-kerja">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 space-y-4 ${
            timelineAnim.inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-xs font-bold font-mono text-[#0086c9] uppercase tracking-[0.2em]">
            Metodologi Terstruktur
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            5 Tahap Rekayasa Presisi Hulu-ke-Hilir
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-sm text-slate-500 leading-relaxed">
            Dari diskusi perumusan awal hingga serah terima lisensi dan SLA maintenance, setiap fase memiliki output
            konkret yang terukur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {TIMELINE_STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-card-hover hover:border-[#0086c9]/50 transition-all duration-300 flex flex-col justify-between group ${
                timelineAnim.inView ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`w-9 h-9 rounded-xl ${step.bg} text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs`}>
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {step.phase}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">{step.title}</h3>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-600 font-medium block">
                  {step.output}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

