"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/landingData";

export default function PortfolioSection() {
  const portofolioAnim = useInView(0.1);
  const [activeFilter, setActiveFilter] = useState<"all" | "iot" | "ai" | "software" | "gov">("all");

  const filterTabs = [
    { id: "all", label: "Semua Proyek", count: PORTFOLIO_ITEMS.length },
    { id: "iot", label: "Smart Farming & IoT", count: PORTFOLIO_ITEMS.filter((i) => i.filterGroup === "iot").length },
    { id: "ai", label: "Artificial Intelligence", count: PORTFOLIO_ITEMS.filter((i) => i.filterGroup === "ai").length },
    { id: "software", label: "Software Enterprise", count: PORTFOLIO_ITEMS.filter((i) => i.filterGroup === "software").length },
    { id: "gov", label: "Sektor Publik & Edukasi", count: PORTFOLIO_ITEMS.filter((i) => i.filterGroup === "gov").length },
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    return item.filterGroup === activeFilter;
  });

  return (
    <section ref={portofolioAnim.ref} className="py-24 bg-white" id="portofolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 ${
            portofolioAnim.inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold font-mono text-[#fe7a00] uppercase tracking-[0.2em]">
              Rekam Jejak &amp; Studi Kasus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Portofolio Rekayasa &amp; Implementasi Nyata
            </h2>
            <div className="section-divider" />
            <p className="text-sm text-slate-500">
              Setiap karya kami diukur dari dampak strategis dan efisiensi nyata yang dirasakan oleh mitra, bukan sekadar
              baris kode yang terselesaikan.
            </p>
          </div>

          <a
            className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#fe7a00] hover:bg-[#e56e00] shadow-sm transition-all self-start md:self-auto"
            href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20melihat%20studi%20kasus%20lengkap."
            rel="noopener noreferrer"
            target="_blank"
          >
            Konsultasikan Kebutuhan Serupa <span className="text-sm font-sans">↗</span>
          </a>
        </div>

        {/* Interactive Filter Tabs */}
        <div
          className={`flex flex-wrap items-center gap-2 mb-10 pb-2 ${
            portofolioAnim.inView ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all cursor-pointer border ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200/90 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-[#fe7a00] text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className={`rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-xs hover:shadow-card-hover ${item.hoverBorder} transition-all duration-300 flex flex-col justify-between group ${
                portofolioAnim.inView ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"
              }`}
            >
              {/* Browser Window Mockup Frame */}
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between select-none">
                {/* 3 Window Control Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* Minimalist URL Bar */}
                <div className="px-3 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-400 max-w-[200px] sm:max-w-xs truncate">
                  scitech.id/{item.filterGroup}/{item.id}
                </div>

                {/* Project Number */}
                <span className="text-[10px] font-mono font-bold text-[#fe7a00]">
                  #{item.num}
                </span>
              </div>

              {/* Image Preview Canvas (object-contain, full view without cropping) */}
              <div className="relative w-full aspect-[16/10] bg-slate-950 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.01]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Floating Category Tag */}
                <div className="absolute bottom-3 right-3 inline-flex items-center px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono font-medium text-slate-300 shadow-md">
                  <span>{item.cat}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="font-semibold text-slate-500">{item.client}</span>
                  </div>

                  <h3 className={`text-xl font-bold text-slate-900 leading-snug ${item.hoverText} transition-colors`}>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                {/* Measurable Metric Box */}
                {item.metric && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-[#fe7a00] shrink-0">
                      {item.metric}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 leading-tight">{item.metricLabel}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{item.metricNote}</div>
                    </div>
                  </div>
                )}

                {/* Tech Chips */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

