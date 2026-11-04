"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { FAQ_LIST } from "@/data/landingData";

export default function FaqSection() {
  const faqAnim = useInView(0.15);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section ref={faqAnim.ref} className="py-24 bg-[#f8f9fb] border-y border-slate-100" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-xl mx-auto mb-16 space-y-3 ${
            faqAnim.inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-xs font-bold font-mono text-[#fe7a00] uppercase tracking-[0.2em]">
            Transparansi &amp; Kejelasan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-sm text-slate-500">
            Segala hal yang perlu Anda ketahui mengenai skema kerja sama, legalitas NDA, serta jaminan purna-jual SCI Tech.
          </p>
        </div>

        <div className={`space-y-3.5 ${faqAnim.inView ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          {FAQ_LIST.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200 shadow-xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{faq.q}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#fe7a00] text-white rotate-180" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fade-in">
                    {faq.a}
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

