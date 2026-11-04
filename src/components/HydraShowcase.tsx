"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { HYDRA_HOTSPOTS } from "@/data/landingData";

interface HydraShowcaseProps {
  onOpenDatasheet: () => void;
}

export default function HydraShowcase({ onOpenDatasheet }: HydraShowcaseProps) {
  const produkAnim = useInView(0.15);
  const [activeHotspotId, setActiveHotspotId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"spec" | "protocol" | "field">("spec");

  const selectedHotspot =
    HYDRA_HOTSPOTS.find((h) => h.id === activeHotspotId) || HYDRA_HOTSPOTS[0];

  return (
    <section
      ref={produkAnim.ref}
      className="py-24 bg-slate-900 text-white relative overflow-hidden bg-tech-dots-dark"
      id="produk"
    >
      {/* Background ambient glows */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-[#0086c9]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-[#fe7a00]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 space-y-4 ${
            produkAnim.inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fe7a00]/15 border border-[#fe7a00]/30 text-[#fe7a00] text-[11px] font-bold font-mono tracking-wider uppercase">
            <span>Hardware Flagship • Produk Asli SCI Tech Jember</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            HYDRA 01 Edge Industrial Controller
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Unit kendali komputasi cerdas di tingkat lokal (*edge intelligence*) yang dirancang khusus untuk kondisi
            ekstrem iklim tropis, otomatisasi fertigasi presisi, dan telemetri jarak jauh.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Image Canvas with Interactive Hotspot Pins (Col 7) */}
          <div
            className={`lg:col-span-7 space-y-5 ${
              produkAnim.inView ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/70 shadow-2xl group">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/Tampilan Produk Hydra Ori.jpeg"
                  alt="HYDRA 01 Edge Industrial Controller - Fisik Hardware"
                  fill
                  className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Subtle vignette border */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

                {/* Interactive Hotspot Pins */}
                {HYDRA_HOTSPOTS.map((spot) => {
                  const isActive = activeHotspotId === spot.id;
                  const isOrange = spot.color === "orange";
                  return (
                    <div
                      key={spot.id}
                      style={{ top: spot.top, left: spot.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <button
                        type="button"
                        aria-label={spot.title}
                        onClick={() => setActiveHotspotId(spot.id)}
                        onMouseEnter={() => setActiveHotspotId(spot.id)}
                        className="relative flex items-center justify-center w-9 h-9 rounded-full cursor-pointer focus:outline-hidden group/btn"
                      >
                        {/* Ripple pulse ring */}
                        <span
                          className={`absolute inset-0 rounded-full ${
                            isActive
                              ? isOrange
                                ? "hotspot-pulse"
                                : "hotspot-pulse-blue"
                              : "opacity-40 animate-ping-slow"
                          } ${isOrange ? "bg-[#fe7a00]" : "bg-[#0086c9]"}`}
                        />
                        {/* Pin Center Circle */}
                        <span
                          className={`relative flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-bold font-mono text-white shadow-xl ${
                            isOrange ? "bg-[#fe7a00]" : "bg-[#0086c9]"
                          } border-2 ${
                            isActive ? "border-white scale-110 shadow-glow-orange" : "border-white/70 hover:scale-110"
                          } transition-all duration-300`}
                        >
                          {spot.pinNumber}
                        </span>
                      </button>

                      {/* Mini Floating Tooltip */}
                      {isActive && (
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 sm:w-56 p-2.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-600 shadow-2xl text-left pointer-events-auto z-30 animate-scale-in lg:hidden">
                          <span className="text-[9px] font-mono text-[#fe7a00] uppercase block">
                            {spot.subtitle}
                          </span>
                          <h5 className="text-xs font-bold text-white leading-tight mt-0.5">{spot.title}</h5>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Status Header Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>UNIT OPERASIONAL • SIAP IMPLEMENTASI</span>
              </div>

              {/* Guide hint */}
              <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/70 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                <span className="text-[#fe7a00]">✦</span> Klik Pin untuk Inspeksi Komponen
              </div>
            </div>

            {/* Quick Spec Pills */}
            <div className="grid grid-cols-3 gap-3">
              {[
                ["Proteksi Fisik", "IP67 Weatherproof", "text-white"],
                ["Antarmuka Lapangan", "Keypad 4×4 Matrix", "text-[#fe7a00]"],
                ["Layar On-Site", "LCD Telemetri 16×2", "text-[#0086c9]"],
              ].map(([label, val, color]) => (
                <div
                  key={label}
                  className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center transition-colors hover:border-slate-600"
                >
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">{label}</div>
                  <div className={`text-xs font-bold font-mono ${color} mt-1`}>{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Hardware Feature Inspector Console (Col 5) */}
          <div
            className={`lg:col-span-5 space-y-6 ${
              produkAnim.inView ? "animate-fade-in-right delay-200" : "opacity-0"
            }`}
          >
            {/* Inspector Console Box */}
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 sm:p-7 shadow-xl backdrop-blur-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/70">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fe7a00] inline-block" />
                  <span>INSPEKTOR KOMPONEN AKTIF</span>
                </div>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-[#0086c9] border border-slate-700">
                  PIN {selectedHotspot.pinNumber} / 04
                </span>
              </div>

              {/* Active Pin Details */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-[#fe7a00]">
                  {selectedHotspot.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {selectedHotspot.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedHotspot.desc}
                </p>

                <div className="pt-3 pb-1">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-700/60 font-mono text-xs text-slate-300 space-y-1">
                    <span className="text-[10px] uppercase text-slate-500 block font-semibold">
                      Spesifikasi Standar Industri:
                    </span>
                    <span className="text-[#0086c9] font-medium block">{selectedHotspot.techSpec}</span>
                  </div>
                </div>
              </div>

              {/* Pin Switcher Buttons */}
              <div className="pt-5 mt-5 border-t border-slate-700/70">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  Pilih Komponen Lainnya:
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {HYDRA_HOTSPOTS.map((spot) => {
                    const isCurrent = spot.id === activeHotspotId;
                    return (
                      <button
                        key={spot.id}
                        type="button"
                        onClick={() => setActiveHotspotId(spot.id)}
                        className={`py-2 px-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border ${
                          isCurrent
                            ? "bg-[#fe7a00] text-white border-[#fe7a00] shadow-md"
                            : "bg-slate-900/80 text-slate-400 border-slate-700 hover:text-white hover:border-slate-500"
                        }`}
                      >
                        Pin {spot.pinNumber}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Technical Capability Tabs */}
            <div className="rounded-2xl bg-slate-800/40 border border-slate-700/60 p-5 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-700/60 pb-3">
                {[
                  { id: "spec", label: "Edge RTOS" },
                  { id: "protocol", label: "Protokol SCADA" },
                  { id: "field", label: "Keandalan Lapangan" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-slate-700 text-white font-bold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-300 leading-relaxed font-mono">
                {activeTab === "spec" && (
                  <p>
                    Didukung ESP32 Dual-Core 240MHz dengan FreeRTOS. Memproses kalkulasi sensor fertigasi lokal secara
                    deterministik sehingga katup solenoid tetap bekerja tepat waktu meskipun koneksi internet terputus.
                  </p>
                )}
                {activeTab === "protocol" && (
                  <p>
                    Mendukung komunikasi Modbus RTU/TCP, MQTT, RS485, sinyal analog 4-20mA, dan LoRaWAN. Siap dijembatani
                    ke panel pompa eksisting, sensor soil moisture, dan server SCADA internal Anda.
                  </p>
                )}
                {activeTab === "field" && (
                  <p>
                    Dirancang dengan proteksi lonjakan tegangan (surge protection), optical isolation pada jalur relay, dan
                    casing bersertifikasi IP67 untuk mencegah korosi dari semprotan pupuk maupun air hujan lebat.
                  </p>
                )}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenDatasheet}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#fe7a00] hover:bg-[#e56e00] text-white font-semibold text-xs transition-all shadow-md hover:shadow-glow-orange cursor-pointer"
              >
                <span>📥 Unduh Datasheet PDF Lengkap</span>
              </button>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium text-xs transition-all bg-slate-800/50 hover:bg-slate-800"
              >
                <span>Konsultasi Instalasi Lapangan</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

