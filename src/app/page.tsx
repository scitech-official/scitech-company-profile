"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

/* ===================================================================
   INTERSECTION OBSERVER HOOK — Scroll-Reveal Animation
   =================================================================== */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ===================================================================
   MAIN PAGE COMPONENT
   =================================================================== */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [formNama, setFormNama] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formWa, setFormWa] = useState("");
  const [formLayanan, setFormLayanan] = useState("Pengembangan Software (Enterprise ERP & Cloud)");

  // Sections inView hooks
  const heroAnim = useInView(0.1);
  const smartAnim = useInView();
  const layananAnim = useInView();
  const produkAnim = useInView();
  const portofolioAnim = useInView();
  const timelineAnim = useInView();
  const kontakAnim = useInView();

  // Header shadow on scroll
  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pesan = `Halo SCI Tech, saya ${formNama} (${formEmail}) ingin konsultasi proyek: ${formLayanan}. Nomor kontak saya: ${formWa}.`;
    window.open(`https://wa.me/6289513259281?text=${encodeURIComponent(pesan)}`, "_blank");
  };

  /* ================= SMART VALUES DATA ================= */
  const smartValues = [
    { letter: "S", pillar: "01", title: "Smart & Scalable", desc: "Arsitektur komputasi adaptif yang dirancang fleksibel untuk tumbuh pesat tanpa terhalang batasan skala bisnis dan lonjakan data.", tag: "Modular & Expandable", color: "blue" as const },
    { letter: "M", pillar: "02", title: "Measurable Impact", desc: "Fokus utama pada dampak terukur berbasis indikator kunci (KPI), efisiensi biaya nyata, serta percepatan time-to-value operasional.", tag: "Data-Driven Results", color: "orange" as const },
    { letter: "A", pillar: "03", title: "Agility & Adaptability", desc: "Respon tangkas dan cepat terhadap dinamika kebutuhan industri serta iterasi rekayasa sistem yang selaras dengan tantangan riil lapangan.", tag: "Sprint-Driven Agility", color: "blue" as const },
    { letter: "R", pillar: "04", title: "Reliability & Integrity", desc: "Keandalan sistem fail-safe berstandar tinggi, jaminan ketahanan hardware cuaca ekstrem, serta tata kelola keamanan integritas data.", tag: "Fail-Safe Standards", color: "orange" as const },
    { letter: "T", pillar: "05", title: "Transformative Collaboration", desc: "Kemitraan strategis hulu-ke-hilir jangka panjang untuk mengakselerasi transformasi digital mitra secara berkelanjutan.", tag: "End-to-End Partnership", color: "blue" as const },
  ];

  /* ================= PORTFOLIO DATA ================= */
  const portfolioItems = [
    { num: "01", cat: "Software & Event", catColor: "text-[#0086c9]", hoverBorder: "hover:border-[#0086c9]", hoverText: "group-hover:text-[#0086c9]", hoverBg: "group-hover:bg-blue-50/60 group-hover:border-blue-200/50", img: "/Portofolio Ramadhan Camp.jpeg", alt: "Ramadhan Camp event platform", title: "Ramadhan Camp", desc: "Sistem manajemen & platform registrasi event terintegrasi dengan validasi barcode instan, sinkronisasi data peserta, dan pelaporan absensi real-time.", metric: "85%", metricLabel: "Efisiensi Registrasi", metricNote: "Tercapai Zero Downtime selama lonjakan 10.000+ akses simultan.", client: "Client: Organisasi Skala Besar" },
    { num: "02", cat: "Smart Farming IoT", catColor: "text-[#fe7a00]", hoverBorder: "hover:border-[#fe7a00]", hoverText: "group-hover:text-[#fe7a00]", hoverBg: "group-hover:bg-orange-50/60 group-hover:border-orange-200/50", img: "/Portofolio Hydra Greenhouse.jpeg", alt: "HYDRA Greenhouse smart farming", title: "HYDRA Greenhouse", desc: "Otomatisasi irigasi fertigasi dan pemupukan presisi berbasis sensor kelembapan tanah, EC sensor pupuk, dan kontrol solenoid otomatis via unit HYDRA 01.", metric: "-40%", metricLabel: "Penghematan Air & Nutrisi", metricNote: "Peningkatan hasil panen komoditas holtikultura mencapai +28%.", client: "Sektor: Agrikultur Modern" },
    { num: "03", cat: "Pemerintahan Publik", catColor: "text-[#0086c9]", hoverBorder: "hover:border-[#0086c9]", hoverText: "group-hover:text-[#0086c9]", hoverBg: "group-hover:bg-blue-50/60 group-hover:border-blue-200/50", img: "/Portofolio Web Rekomdendasi SMP Pasirian.png", alt: "SPK Pasirian decision support system", title: "SPK Pasirian", desc: "Sistem Pendukung Keputusan Digital untuk instansi publik guna mengevaluasi kelayakan penerima program berbasis algoritma multi-kriteria terbobot.", metric: "-70%", metricLabel: "Waktu Disposisi Berkas", metricNote: "Tingkat akurasi pemeringkatan penerima bantuan mencapai 96%.", client: "Client: Instansi Kecamatan Pasirian" },
    { num: "04", cat: "AI & Vision Analitik", catColor: "text-[#fe7a00]", hoverBorder: "hover:border-[#fe7a00]", hoverText: "group-hover:text-[#fe7a00]", hoverBg: "group-hover:bg-orange-50/60 group-hover:border-orange-200/50", img: "/radarjember_infografis.png", alt: "AI Radar Jember spatial monitoring", title: "AI Radar Jember", desc: "Engine Computer Vision untuk deteksi dan pemantauan dinamika citra spasial wilayah Kabupaten Jember guna pendeteksian kepadatan lalu lintas dan titik genangan.", metric: "94.8%", metricLabel: "Akurasi Deteksi Obyek", metricNote: "Waktu respons pemrosesan inferensi kamera < 2 detik per frame.", client: "Sektor: Smart City & Wilayah" },
  ];

  /* ================= TIMELINE DATA ================= */
  const timelineSteps = [
    { num: "01", phase: "Tahap Awal", title: "Konsultasi", desc: "Audit kebutuhan menyeluruh, perumusan akar masalah, asesmen kelayakan teknis, dan penetapan KPI proyek.", output: "Output: Dokumen Project Charter & BoQ", bg: "bg-slate-900" },
    { num: "02", phase: "Desain Sistem", title: "Perancangan", desc: "Penyusunan arsitektur sistem, wireframe UI/UX, skematik sirkuit hardware, serta skema basis data terintegrasi.", output: "Output: Blueprint Arsitektur & Mockup", bg: "bg-[#0086c9]" },
    { num: "03", phase: "Engineering", title: "Pengembangan", desc: "Rekayasa kode backend & frontend, fabrikasi PCB hardware, perakitan unit IoT, dan training model AI.", output: "Output: Prototipe Berfungsi & Test Suite", bg: "bg-[#fe7a00]" },
    { num: "04", phase: "Implementasi", title: "Deployment", desc: "Pemasangan unit fisik di lapangan, konfigurasi cloud, uji beban (load test), serta verifikasi keamanan SSL/TLS.", output: "Output: Factory Acceptance Test (FAT)", bg: "bg-[#0086c9]" },
    { num: "05", phase: "Alih Kelola", title: "Handover", desc: "Pelatihan tim operasional mitra, serah terima dokumentasi teknis lengkap, dan pengaktifan garansi SLA maintenance.", output: "Output: Berita Acara & Kontrak SLA", bg: "bg-slate-900" },
  ];

  return (
    <>
      {/* ================================================================ */}
      {/* HEADER & GLOBAL NAVIGATION (FR1) */}
      {/* ================================================================ */}
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-500 ${headerScrolled ? "border-slate-200 header-scrolled" : "border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Brand Logo */}
            <a aria-label="Beranda SCI Tech" className="flex items-center gap-3 group" href="#">
              <div className="relative flex items-center gap-2">
                <div className="relative h-9 w-9 shrink-0">
                  <Image src="/Group 6.png" alt="SCI Tech Emblem" fill className="object-contain transition-transform duration-300 group-hover:scale-110" priority />
                </div>
                <div className="relative h-6 w-32 shrink-0">
                  <Image src="/Group 14.png" alt="SCI Tech Logo" fill className="object-contain" priority />
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-7">
              {["Layanan", "Produk", "Portofolio", "Alur Kerja", "Kontak"].map((item) => (
                <a key={item} className="nav-link text-slate-600 hover:text-[#fe7a00] transition-colors text-[13px] font-medium tracking-wide" href={`#${item.toLowerCase().replace(" ", "-")}`}>
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Side CTA */}
            <div className="flex items-center gap-3">
              <a className="cta-primary hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-white bg-[#fe7a00] hover:bg-[#e56e00] shadow-md hover:shadow-glow-orange transition-all duration-300" href="#kontak">
                Konsultasikan Proyek <span className="text-sm">↗</span>
              </a>
              <button aria-label="Buka Menu" className="lg:hidden p-2 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {mobileMenuOpen
                    ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-slate-100 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
            {["Layanan", "Produk", "Portofolio", "Alur Kerja", "Kontak"].map((item) => (
              <a key={item} className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#fe7a00] transition-colors" href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={closeMobileMenu}>
                {item}
              </a>
            ))}
            <div className="pt-2">
              <a className="cta-primary w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full text-xs uppercase font-bold text-white bg-[#fe7a00] shadow-md" href="#kontak" onClick={closeMobileMenu}>
                Konsultasikan Proyek ↗
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ================================================================ */}
        {/* HERO SECTION (FR2) */}
        {/* ================================================================ */}
        <section ref={heroAnim.ref} className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-[#f8f9fb] via-white to-white">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#0086c9]/[0.04] to-transparent rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#fe7a00]/[0.03] to-transparent rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Text Content */}
              <div className={`space-y-7 ${heroAnim.inView ? "animate-fade-in-left" : "opacity-0"}`}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orange-50 border border-orange-200/60 text-[#fe7a00] text-xs font-semibold tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe7a00] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe7a00]" />
                  </span>
                  Startup Konsultan IT &amp; Rekayasa Data • Jember, East Java
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
                  Mitra Rekayasa Teknologi &amp; Transformasi Digital <span className="text-[#fe7a00] relative">Terdepan<span className="absolute -bottom-1 left-0 w-full h-1 bg-[#fe7a00]/20 rounded-full" /></span>
                </h1>

                <p className="text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed">
                  SCI Tech menghadirkan solusi rekayasa hulu-ke-hilir—mulai dari perangkat lunak enterprise, kecerdasan buatan (AI), telemetri IoT edge, hingga analitik data terintegrasi bagi klien B2B, agrikultur modern, dan instansi pemerintahan.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a className="cta-primary animate-pulse-glow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#fe7a00] hover:bg-[#e56e00] text-white font-semibold text-sm shadow-lg hover:shadow-glow-orange transition-all duration-300 transform hover:-translate-y-0.5" href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20konsultasikan%20proyek%20teknologi." rel="noopener noreferrer" target="_blank">
                    Konsultasikan Proyek Anda <span className="text-base font-bold">↗</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold text-sm transition-all bg-white hover:bg-slate-50 hover:shadow-sm" href="#portofolio">
                    Lihat Portofolio Proyek
                  </a>
                </div>

                {/* Trust Metrics */}
                <div className="pt-7 border-t border-slate-200/80 flex items-center gap-7">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center leading-none shadow-md">
                      <span className="text-xs font-bold text-[#fe7a00]">99.9%</span>
                      <span className="text-[7px] text-slate-400 uppercase tracking-tighter mt-0.5">Uptime</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Arsitektur Teruji</h4>
                      <p className="text-[11px] text-slate-500">Fail-safe &amp; edge computing</p>
                    </div>
                  </div>
                  <div className="h-10 w-px bg-slate-200" />
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0086c9] text-white flex items-center justify-center font-bold text-xs shadow-md">
                      B2B
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">End-to-End Delivery</h4>
                      <p className="text-[11px] text-slate-500">Agrikultur, Industri &amp; Publik</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className={`relative ${heroAnim.inView ? "animate-fade-in-right delay-200" : "opacity-0"}`}>
                <div className="absolute -top-12 -right-12 w-80 h-80 bg-gradient-to-br from-[#fe7a00]/15 to-[#0086c9]/20 rounded-full blur-3xl pointer-events-none animate-float" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4]">
                    <Image src="/Tampilan HYDRA awal.png" alt="HYDRA Edge Controller Unit SCI Tech" fill className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out" priority sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="absolute inset-0 image-overlay-gradient" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 text-slate-800 text-[11px] font-semibold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Based in Jember, East Java
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-xl text-slate-800">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded bg-[#e6f3fa] text-[#0086c9] text-[9px] font-bold uppercase tracking-wider mb-1.5">Hardware Flagship</span>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">HYDRA 01 Edge Industrial Controller</h4>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Kontrol telemetri presisi untuk otomatisasi irigasi pertanian &amp; sensor industri jarak jauh.</p>
                      </div>
                      <a className="w-9 h-9 shrink-0 rounded-full bg-[#fe7a00] text-white flex items-center justify-center hover:bg-[#e56e00] shadow-md transition-all hover:scale-110" href="#produk" title="Lihat Produk">
                        <span className="text-sm font-bold">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* TENTANG KAMI & NILAI SMART (FR3) */}
        {/* ================================================================ */}
        <section ref={smartAnim.ref} className="py-24 bg-[#f8f9fb] border-y border-slate-100" id="tentang">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-2xl mx-auto mb-16 space-y-4 ${smartAnim.inView ? "animate-fade-in-up" : "opacity-0"}`}>
              <span className="text-xs font-bold text-[#fe7a00] uppercase tracking-[0.2em]">Fondasi Filosofi Rekayasa</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Prinsip <span className="text-[#0086c9]">SMART</span> dalam Setiap Solusi
              </h2>
              <div className="section-divider mx-auto" />
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
                Kami memegang teguh 5 nilai fundamental untuk menjamin setiap proyek memberikan dampak strategis berkesinambungan bagi mitra kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {smartValues.map((val, i) => {
                const isBlue = val.color === "blue";
                return (
                  <div key={val.letter} className={`card-interactive p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover ${isBlue ? "hover:border-[#0086c9]/50" : "hover:border-[#fe7a00]/50"} flex flex-col justify-between group ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""} ${smartAnim.inView ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"}`}>
                    <div className="space-y-4">
                      <div className={`w-11 h-11 rounded-xl ${isBlue ? "bg-blue-50 text-[#0086c9] group-hover:bg-[#0086c9]" : "bg-orange-50 text-[#fe7a00] group-hover:bg-[#fe7a00]"} group-hover:text-white flex items-center justify-center font-display font-bold text-lg transition-all duration-300`}>
                        {val.letter}
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold ${isBlue ? "text-[#0086c9]" : "text-[#fe7a00]"} uppercase tracking-wider block`}>Pilar {val.pillar}</span>
                        <h3 className="text-base font-bold text-slate-900 mt-1 leading-tight">{val.title}</h3>
                        <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{val.desc}</p>
                      </div>
                    </div>
                    <div className={`mt-5 pt-3 border-t border-slate-100 text-[10px] font-semibold ${isBlue ? "text-[#0086c9]" : "text-[#fe7a00]"} flex items-center justify-between`}>
                      <span>{val.tag}</span><span>↗</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 4 PILAR LAYANAN (FR4) */}
        {/* ================================================================ */}
        <section ref={layananAnim.ref} className="py-24 bg-white" id="layanan">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 ${layananAnim.inView ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-bold text-[#fe7a00] uppercase tracking-[0.2em]">Keahlian &amp; Kapabilitas Inti</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">4 Pilar Layanan Solusi Rekayasa Terpadu</h2>
                <div className="section-divider" />
                <p className="text-sm text-slate-500">Dari coding aplikasi custom hingga penyebaran sensor hardware lapangan, kami menyatukan disiplin ilmu rekayasa secara menyeluruh.</p>
              </div>
              <a className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-[#0086c9] hover:bg-[#006699] shadow-md transition-all" href="#kontak">
                Diskusikan Kebutuhan Anda <span className="text-sm">↗</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Pilar 1: Software */}
              {[
                { icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />, label: "01", title: "Pengembangan Software", desc: "Pembangunan sistem perangkat lunak skala enterprise yang aman, berkinerja tinggi, dan terancang sesuai kebutuhan unik bisnis Anda.", items: [["Enterprise ERP & POS:", "Manajemen rantai pasok, multi-outlet, stok dan keuangan otomatis."], ["Cloud Infrastructure:", "Arsitektur microservices terdistribusi, Docker & Kubernetes."], ["Custom Web & Mobile App:", "Aplikasi operasional internal dan consumer-facing responsif."]], tech: "React, Next.js, Flutter, Go, NestJS, Postgres", accent: "blue" },
                { icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />, label: "02", title: "Artificial Intelligence (AI)", desc: "Penerapan kecerdasan buatan terapan untuk otomasi inspeksi, model analisis prediktif, serta perlindungan integritas informasi publik.", items: [["Model LLM & NLP:", "Chatbot enterprise berbasis knowledge base internal dan automasi dokumen."], ["Predictive Maintenance:", "Deteksi dini anomali getaran, suhu panas, dan keausan mesin."], ["Computer Vision QA & Filter:", "Inspeksi cacat produk konveyor dan filter cerdas konten anomali/spam."]], tech: "PyTorch, OpenCV, LangChain, ONNX Runtime", accent: "orange" },
                { icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />, label: "03", title: "Internet of Things (IoT)", desc: "Jembatan fisik ke digital dengan sensor presisi tinggi, kontroler edge tangguh, dan protokol telemetri nirkabel hemat energi.", items: [["IoT SCADA & Telemetri:", "Pemantauan pompa, debit air, suhu, tekanan, dan daya listrik."], ["Smart Farming Presisi:", "Otomatisasi irigasi fertigasi, greenhouse control, dan soil logging."], ["Edge Gateway Controller:", "Unit komputasi lokal offline-first yang tetap beroperasi tanpa internet."]], tech: "ESP32, FreeRTOS, Modbus, MQTT, LoRaWAN", accent: "blue" },
                { icon: <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />, label: "04", title: "Analisis Data", desc: "Transformasi tumpukan data mentah menjadi wawasan bisnis prediktif yang mendorong keputusan pimpinan secara presisi.", items: [["Dashboard BI:", "Panel visual interaktif metrik finansial, produksi, dan kepuasan layanan."], ["Data Lakehouse Enterprise:", "Arsitektur terpusat penyimpanan data struktural berkinerja tinggi."], ["Real-Time Data Pipeline:", "Streaming ingestion jutaan event data per detik tanpa jeda."]], tech: "ClickHouse, Apache Kafka, Spark, Superset", accent: "orange" },
              ].map((pilar, i) => {
                const isBlue = pilar.accent === "blue";
                return (
                  <div key={pilar.label} className={`card-interactive p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 ${isBlue ? "hover:border-[#0086c9]" : "hover:border-[#fe7a00]"} hover:shadow-card-hover flex flex-col justify-between ${layananAnim.inView ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"}`}>
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-xl ${isBlue ? "bg-blue-50 text-[#0086c9]" : "bg-orange-50 text-[#fe7a00]"} flex items-center justify-center`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{pilar.icon}</svg>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500">Pilar {pilar.label}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{pilar.title}</h3>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{pilar.desc}</p>
                      </div>
                      <div className="space-y-2 pt-1">
                        <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">Ruang Lingkup:</div>
                        <ul className="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
                          {pilar.items.map(([label, text]) => (
                            <li key={label}><strong className="text-slate-700">{label}</strong> {text}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-400">{pilar.tech}</span>
                      <a className={`w-8 h-8 rounded-full bg-slate-100 ${isBlue ? "hover:bg-[#0086c9]" : "hover:bg-[#fe7a00]"} text-slate-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110`} href="#kontak">
                        <span className="text-xs font-bold">↗</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SHOWCASE PRODUK UTAMA — HYDRA (FR5) */}
        {/* ================================================================ */}
        <section ref={produkAnim.ref} className="py-24 bg-slate-900 text-white relative overflow-hidden" id="produk">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#0086c9]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#fe7a00]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Left: Image */}
              <div className={`space-y-5 ${produkAnim.inView ? "animate-fade-in-left" : "opacity-0"}`}>
                <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/60 shadow-2xl group">
                  <div className="relative w-full aspect-[4/3]">
                    <Image src="/Tampilan Produk Hydra Ori.jpeg" alt="HYDRA 01 Edge Industrial Controller" fill className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold tracking-wide shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Ready &amp; Implemented
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 text-[10px] text-slate-400">
                    Dokumentasi Fisik Unit Asli
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[["Enclosure", "IP67 Weatherproof", "text-white"], ["Input", "Keypad 4×4 Matrix", "text-[#fe7a00]"], ["Display", "LCD Telemetri 16×2", "text-[#0086c9]"]].map(([label, val, color]) => (
                    <div key={label} className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                      <div className="text-[9px] text-slate-500 uppercase tracking-wider">{label}</div>
                      <div className={`text-[11px] font-bold ${color} mt-0.5`}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Specs */}
              <div className={`space-y-6 ${produkAnim.inView ? "animate-fade-in-right delay-200" : "opacity-0"}`}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fe7a00]/15 border border-[#fe7a00]/30 text-[#fe7a00] text-[11px] font-bold tracking-wider uppercase">
                  Produk Utama Terintegrasi
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">HYDRA Edge Industrial Controller</h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Perangkat keras kendali industri dan edge computing rancangan mandiri SCI Tech di Jember. Menggabungkan ketangguhan sistem otomasi lapangan dengan konektivitas cloud real-time tanpa ketergantungan konstan pada internet.
                </p>

                <div className="space-y-3 pt-1">
                  {[
                    { icon: "memory", title: "Processor & RTOS Arsitektur", desc: "ESP32 Dual-Core 240MHz dengan FreeRTOS untuk eksekusi multi-thread deterministik tanpa jeda.", color: "blue" },
                    { icon: "settings_remote", title: "Dual-Control System (Hybrid)", desc: "Manajemen manual offline via Keypad Matrix fisik & kontrol otomatis cloud/jarak jauh via WiFi, seluler, serta LoRa.", color: "orange" },
                    { icon: "monitor_heart", title: "Telemetry LCD Screen Real-Time", desc: "Layar diagnostik panel depan untuk pemantauan sensor analog/digital (debit air, kelembapan, suhu, voltase).", color: "blue" },
                    { icon: "shield", title: "Enclosure Proteksi Iklim Tropis (IP67)", desc: "Casing polimer weatherproof IP67 tahan air, debu pertanian, serta anti-korosi untuk operasi 24/7 outdoor.", color: "orange" },
                  ].map((spec, i) => (
                    <div key={spec.icon} className={`card-interactive p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-start gap-4 ${produkAnim.inView ? `animate-fade-in-up delay-${(i + 2) * 100}` : "opacity-0"}`}>
                      <div className={`w-9 h-9 rounded-lg ${spec.color === "blue" ? "bg-blue-500/15 text-[#0086c9]" : "bg-orange-500/15 text-[#fe7a00]"} flex items-center justify-center shrink-0`}>
                        <span className="material-symbols-outlined text-lg">{spec.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-white">{spec.title}</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{spec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a className="cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fe7a00] hover:bg-[#e56e00] text-white text-[11px] font-bold uppercase tracking-wider shadow-md hover:shadow-glow-orange transition-all" href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20tertarik%20dengan%20unit%20HYDRA%20Edge%20Controller." rel="noopener noreferrer" target="_blank">
                    Pesan Unit / Jadwalkan PoC <span className="text-sm">↗</span>
                  </a>
                  <span className="text-[11px] text-slate-500">Garansi 3 Tahun • Dukungan Teknisi Jember</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* ETALASE PORTOFOLIO (FR6) */}
        {/* ================================================================ */}
        <section ref={portofolioAnim.ref} className="py-24 bg-white" id="portofolio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-2xl mx-auto mb-16 space-y-4 ${portofolioAnim.inView ? "animate-fade-in-up" : "opacity-0"}`}>
              <span className="text-xs font-bold text-[#fe7a00] uppercase tracking-[0.2em]">Studi Kasus &amp; Rekam Jejak</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Etalase Portofolio: Dampak Nyata Berbasis Data</h2>
              <div className="section-divider mx-auto" />
              <p className="text-sm text-slate-500 leading-relaxed">Bukti nyata implementasi solusi SCI Tech pada berbagai sektor—mulai dari sistem event, pertanian cerdas, layanan publik, hingga perlindungan siber AI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {portfolioItems.map((p, i) => (
                <div key={p.num} className={`card-interactive group relative rounded-2xl bg-white border border-slate-200 ${p.hoverBorder} hover:shadow-card-hover flex flex-col justify-between overflow-hidden ${portofolioAnim.inView ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"}`}>
                  <div className="space-y-4">
                    <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                      <Image src={p.img} alt={p.alt} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 image-overlay-gradient opacity-50" />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md ${p.catColor} shadow-sm`}>{p.cat}</span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="w-7 h-7 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold flex items-center justify-center">{p.num}</span>
                      </div>
                    </div>
                    <div className="px-6 pb-2 space-y-3">
                      <h3 className={`text-lg font-bold text-slate-900 ${p.hoverText} transition-colors`}>{p.title}</h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{p.desc}</p>
                      <div className={`p-4 rounded-xl bg-slate-50 ${p.hoverBg} border border-slate-100 transition-colors space-y-1.5`}>
                        <div className={`text-[9px] uppercase font-bold text-slate-400 ${p.hoverText} tracking-wider`}>Dampak Terukur</div>
                        <div className="flex items-baseline justify-between">
                          <span className={`text-2xl font-bold font-display text-slate-900 ${p.hoverText}`}>{p.metric}</span>
                          <span className="text-[11px] font-semibold text-emerald-600">{p.metricLabel}</span>
                        </div>
                        <div className="text-[10px] text-slate-500">{p.metricNote}</div>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                    <span>{p.client}</span>
                    <span className="text-[#fe7a00] font-bold text-sm">↗</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Case 5: Filter Spam — Full Width */}
            <div className={`mt-7 card-interactive group relative rounded-2xl bg-white border border-slate-200 hover:border-[#0086c9] hover:shadow-card-hover flex flex-col md:flex-row overflow-hidden ${portofolioAnim.inView ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
              <div className="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden bg-slate-900">
                <Image src="/Porto Web Deteksi Promosi Judol.png" alt="Filter NLP Spam Judi Online" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 40vw" />
                <div className="absolute inset-0 image-overlay-gradient opacity-50" />
                <div className="absolute top-3 left-3"><span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0086c9] shadow-sm">AI Security &amp; NLP</span></div>
                <div className="absolute top-3 right-3"><span className="w-7 h-7 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold flex items-center justify-center">05</span></div>
              </div>
              <div className="flex-1 p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0086c9] transition-colors">Filter Spam Judi Online</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">Engine kecerdasan buatan berbasis Natural Language Processing (NLP) untuk menyaring secara proaktif injeksi tautan berbahaya, komentar spam, dan ancaman deface judi online pada portal digital instansi.</p>
                <div className="p-4 rounded-xl bg-slate-50 group-hover:bg-blue-50/60 border border-slate-100 group-hover:border-blue-200/50 transition-colors grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[9px] uppercase font-bold text-slate-400 group-hover:text-[#0086c9] tracking-wider">Efektivitas Eliminasi</div>
                    <div className="text-2xl font-bold font-display text-slate-900 group-hover:text-[#0086c9] mt-0.5">99.2%</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Spam &amp; konten terlarang diblokir sebelum tayang.</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-bold text-slate-400 group-hover:text-[#0086c9] tracking-wider">Integritas Publik</div>
                    <div className="text-2xl font-bold font-display text-emerald-600 mt-0.5">100% Aman</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Menjaga reputasi domain dari penalti mesin pencari.</div>
                  </div>
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-slate-400 border-t border-slate-100">
                  <span>Sektor: Perlindungan Siber Instansi</span>
                  <span className="text-[#fe7a00] font-bold text-sm">↗</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* ALUR KERJA / TIMELINE 5 TAHAP (FR7) */}
        {/* ================================================================ */}
        <section ref={timelineAnim.ref} className="py-24 bg-[#f8f9fb] border-y border-slate-100" id="alur-kerja">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-2xl mx-auto mb-16 space-y-4 ${timelineAnim.inView ? "animate-fade-in-up" : "opacity-0"}`}>
              <span className="text-xs font-bold text-[#fe7a00] uppercase tracking-[0.2em]">Metodologi Rekayasa Presisi</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Alur Kerja 5 Tahap: Dari Audit hingga Handover</h2>
              <div className="section-divider mx-auto" />
              <p className="text-sm text-slate-500 leading-relaxed">Struktur pengerjaan proyek yang transparan, terukur, dan disiplin untuk memastikan target waktu dan spesifikasi teknis terpenuhi.</p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[3px] timeline-connector -translate-y-8 z-0 rounded-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
                {timelineSteps.map((step, i) => (
                  <div key={step.num} className={`card-interactive bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md flex flex-col justify-between ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""} ${timelineAnim.inView ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"}`}>
                    <div className="space-y-3">
                      <div className={`w-11 h-11 rounded-xl ${step.bg} text-white flex items-center justify-center font-display font-bold text-sm shadow-md`}>{step.num}</div>
                      <div>
                        <span className={`text-[10px] font-bold ${step.num === "05" ? "text-emerald-600" : step.bg === "bg-[#0086c9]" ? "text-[#0086c9]" : step.bg === "bg-[#fe7a00]" ? "text-[#fe7a00]" : "text-[#fe7a00]"} uppercase tracking-wider`}>{step.phase}</span>
                        <h3 className="text-base font-bold text-slate-900 mt-1">{step.title}</h3>
                        <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-semibold text-slate-400">{step.output}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* LEAD CAPTURE & FORM KONSULTASI (FR8) */}
        {/* ================================================================ */}
        <section ref={kontakAnim.ref} className="py-24 bg-white" id="kontak">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`rounded-3xl bg-gradient-to-br from-[#0a1120] via-slate-900 to-[#070e1b] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl ${kontakAnim.inView ? "animate-scale-in" : "opacity-0"}`}>
              {/* Decorative glow */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#0086c9]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#fe7a00]/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-5">
                  <span className="text-xs font-bold text-[#fe7a00] uppercase tracking-[0.2em]">Konsultasi Rekayasa Hulu-ke-Hilir</span>
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Mulai Konsultasikan Proyek Teknologi Anda</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">Tim rekayasa SCI Tech siap membantu memetakan arsitektur terbaik untuk software enterprise, AI model, maupun otomasi hardware IoT. Dapatkan proposal teknis awal dalam 2×24 jam.</p>
                  <div className="space-y-3 pt-2 text-xs text-slate-400">
                    {[
                      ["Surel Resmi:", "solusicerdasinfratech@gmail.com"],
                      ["Hotline & WA:", "+62 895-1325-9281 (Respons Cepat)"],
                      ["Kantor & Lab:", "Jl. Raden Patah VI No. 90, Jember, Jawa Timur"],
                    ].map(([label, val]) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#fe7a00]/15 text-[#fe7a00] flex items-center justify-center text-[10px] font-bold shrink-0">✓</div>
                        <span><strong className="text-white">{label}</strong> {val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <form className="bg-white/[0.07] backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/10 space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">Nama Lengkap &amp; Instansi</label>
                    <input className="w-full text-xs px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 transition-all" placeholder="Contoh: Budi Santoso (PT Agro Makmur)" required type="text" value={formNama} onChange={(e) => setFormNama(e.target.value)} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">Email Perusahaan</label>
                      <input className="w-full text-xs px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 transition-all" placeholder="nama@perusahaan.co.id" required type="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">Nomor WhatsApp</label>
                      <input className="w-full text-xs px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 transition-all" placeholder="08123456789" required type="tel" value={formWa} onChange={(e) => setFormWa(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">Pilar Kebutuhan</label>
                    <select className="w-full text-xs px-4 py-3 rounded-xl bg-slate-800/80 border border-white/15 text-white transition-all cursor-pointer" value={formLayanan} onChange={(e) => setFormLayanan(e.target.value)}>
                      <option>Pengembangan Software (Enterprise ERP &amp; Cloud)</option>
                      <option>Hardware IoT &amp; HYDRA Edge Controller</option>
                      <option>Artificial Intelligence &amp; Computer Vision QA</option>
                      <option>Analisis Data &amp; Data Lakehouse Pipeline</option>
                      <option>Smart Farming &amp; Green House Otomasi</option>
                    </select>
                  </div>
                  <button className="cta-primary w-full py-3.5 px-6 rounded-xl bg-[#fe7a00] hover:bg-[#e56e00] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-glow-orange flex items-center justify-center gap-2 cursor-pointer" type="submit">
                    Konsultasikan Proyek Sekarang <span className="text-sm font-bold">↗</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-500">Kerahasiaan data industri dijamin oleh Non-Disclosure Agreement (NDA).</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================ */}
      {/* FOOTER (FR8) */}
      {/* ================================================================ */}
      <footer className="bg-[#060b14] text-slate-400 pt-16 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-slate-800/60">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 shrink-0"><Image src="/Group 6.png" alt="SCI Tech" fill className="object-contain" /></div>
                <div className="relative h-5 w-28 shrink-0"><Image src="/Group 14.png" alt="SCI Tech Logo" fill className="object-contain" /></div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-sm">
                PT Solusi Cerdas Infrastructure Technology (SCI Tech) — Startup konsultan IT dan rekayasa data dari Jember, Jawa Timur. Solusi hulu-ke-hilir untuk B2B, agrikultur modern, dan instansi pemerintahan.
              </p>
              <div className="text-[11px] text-slate-500 space-y-0.5">
                <div><strong className="text-slate-300">Alamat Kantor &amp; Lab:</strong></div>
                <div>Jl. Raden Patah VI No. 90, Jember, Jawa Timur</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">Pilar Layanan</h4>
              <ul className="space-y-2 text-[11px]">
                {["Pengembangan Software", "Artificial Intelligence", "Internet of Things", "Analisis Data", "HYDRA Edge Controller"].map((s) => (
                  <li key={s}><a className="hover:text-[#fe7a00] transition-colors" href={s.includes("HYDRA") ? "#produk" : "#layanan"}>{s}</a></li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">Portofolio</h4>
              <ul className="space-y-2 text-[11px]">
                {["Ramadhan Camp Platform", "HYDRA Greenhouse", "SPK Pasirian", "AI Radar Jember", "Filter Spam Judi Online"].map((s) => (
                  <li key={s}><a className="hover:text-[#fe7a00] transition-colors" href="#portofolio">{s}</a></li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">Kontak</h4>
              <div className="text-[11px] text-slate-400 space-y-1 font-mono bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
                <div>WA: +62 895-1325-9281</div>
                <div className="truncate">solusicerdasinfratech@gmail.com</div>
              </div>
              <div className="pt-2 text-[10px] text-slate-500 leading-snug border-t border-slate-800/60">
                <span className="text-slate-600 block">Lead Author:</span>
                <span className="text-slate-300 font-medium">Gilang Maulana Bilhaq, S.Kom.</span>
                <span className="text-[9px] text-slate-500 block">(Principal Consultant &amp; Lead Engineer)</span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-600">
            <div>© 2026 PT Solusi Cerdas Infrastructure Technology. Seluruh hak cipta dilindungi.</div>
            <div className="flex items-center gap-5">
              <a className="hover:text-slate-400 transition-colors" href="#tentang">Nilai SMART</a>
              <a className="hover:text-slate-400 transition-colors" href="#alur-kerja">Alur Kerja</a>
              <a className="hover:text-slate-400 transition-colors" href="#kontak">Konsultasi B2B</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ================================================================ */}
      {/* FLOATING WHATSAPP CTA */}
      {/* ================================================================ */}
      <div className="fixed bottom-5 right-5 z-50">
        <a aria-label="Konsultasi WhatsApp SCI Tech" className="relative flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-5 py-2.5 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105" href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20konsultasi%20proyek%20teknologi." rel="noopener noreferrer" target="_blank">
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-white" />
          </span>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="text-[11px] font-bold tracking-wide">Konsultasi WA</span>
        </a>
      </div>
    </>
  );
}
