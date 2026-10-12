<!DOCTYPE html>

<html class="scroll-smooth" lang="id" style=""><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>SCI Tech — Mitra Rekayasa Teknologi &amp; Transformasi Digital Terdepan</title>
<!-- Google Fonts: Space Grotesk & Inter -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;family=Space+Grotesk:wght@500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols Outlined -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS v3 CDN with forms & container queries -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Custom Configuration -->
<script data-purpose="tailwind-config">
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              blue: '#0086c9',
              'blue-dark': '#006699',
              'blue-light': '#e6f3fa',
              orange: '#fe7a00',
              'orange-hover': '#e56e00',
              'orange-light': '#fff3e6',
              dark: '#0a1120',
              navy: '#060b14',
              surface: '#f8f9fb',
              muted: '#64748b'
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Space Grotesk', 'sans-serif']
          },
          boxShadow: {
            'glow-orange': '0 0 25px -4px rgba(254, 122, 0, 0.45)',
            'glow-blue': '0 0 25px -4px rgba(0, 134, 201, 0.45)',
            'card-hover': '0 20px 35px -5px rgba(0, 134, 201, 0.12), 0 10px 10px -5px rgba(254, 122, 0, 0.08)'
          }
        }
      }
    }
  </script>
<style data-purpose="typography">
    body {
      font-family: 'Inter', sans-serif;
      color: #334155;
      background-color: #ffffff;
      -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3, h4, .font-display {
      font-family: 'Space Grotesk', sans-serif;
      letter-spacing: -0.025em;
    }
  </style>
</head>
<body class="bg-white text-slate-800 antialiased selection:bg-brand-orange selection:text-white">
<!-- BEGIN: Header & Global Navigation (FR1) -->
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-20">
<!-- Brand Logo: Horizontal Logo & Integrated Chip Symbol -->
<a aria-label="Beranda SCI Tech" class="flex items-center gap-3.5 group" href="#">
<div class="relative flex items-center gap-2.5"><animated-svg class="w-8 h-8 mr-2.5 inline-block shrink-0" src="{{DATA:ANIMATION:ANIMATION_38}}"></animated-svg>
<img alt="SCI Tech Microchip Icon" class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAKg82Kfyc7ioY2PKNCI5L0xpPiDk89jgxPg-mvlzJ2UzFeGq5h4ZacXXtfMXm44cBMsiMyguaZdsgVEBQgg2w6oJhcROJcUJXpTrOIO7YQd1FzeF8z060bInfboONjKzZkxNXxKRad6ri59Y3RRsiz548SFET8tPgMFtr3pREBHArcGzwuAEK3jSZu7IxWxzv5hLo29HQ2xrxWWbJt-UwL2P2Tgo6o4SUbnYBA53nBXZ_NCQSRMQWgyj6X2pz3GoxBv0"/>
<img alt="SCI Tech Horizontal Logo" class="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc3ayNDvI9x2b9BBP73QtaXEn3vLOHOPLw519tGQFtvNlseiRt3JmUe4ifs5M9BgRHGvH6cFWuT-mMbhQAx3NCYvdbqJwDQLaSEdbL8AMumRrpaikUqxyqp1Utkm23LnNehNd3jRzGDvcwaeSZIhxfQ6oXojrY2FP2G8B1y5YT5X6wYgiSh4LTWaMUKBa64t4Lk1HAY3kQjrAi5rjTtFOFfZ0FhDlb3WeVbx4tuMujyW2daYy1CZQk1zhkESPq22Hn5EY"/>
</div>
</a>
<!-- Desktop Navigation Bar -->
<nav aria-label="Navigasi Utama" class="hidden lg:flex items-center gap-8 font-medium text-sm">
<a class="text-slate-600 hover:text-brand-orange transition-colors" href="#layanan">Layanan</a>
<a class="text-slate-600 hover:text-brand-orange transition-colors" href="#produk">Produk</a>
<a class="text-slate-600 hover:text-brand-orange transition-colors" href="#portofolio">Portofolio</a>
<a class="text-slate-600 hover:text-brand-orange transition-colors" href="#kontak">Kontak</a>
</nav>
<!-- Right Side CTA: Konsultasikan Proyek ↗ with hover glow -->
<div class="flex items-center gap-4">
<a class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase text-white bg-brand-orange hover:bg-brand-orange-hover shadow-md hover:shadow-glow-orange transition-all duration-300" href="#kontak">
<span class="">Konsultasikan Proyek</span>
<span class="text-sm font-bold">↗</span>
</a>
<!-- Mobile Hamburger Toggle -->
<button aria-label="Buka Menu" class="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg" id="mobile-menu-btn" type="button">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</button>
</div>
</div>
</div>
<!-- Mobile Drawer Navigation -->
<div class="hidden lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg" id="mobile-menu">
<a class="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50" href="#layanan">Layanan</a>
<a class="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50" href="#produk">Produk</a>
<a class="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50" href="#portofolio">Portofolio</a>
<a class="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50" href="#kontak">Kontak</a>
<div class="pt-2">
<a class="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full text-xs uppercase font-semibold text-white bg-brand-orange shadow-md hover:shadow-glow-orange" href="#kontak">
<span class="">Konsultasikan Proyek</span> ↗
      </a>
</div>
</div>
</header>
<!-- END: Header & Global Navigation -->
<main>
<!-- BEGIN: Hero Section (FR2) -->
<section class="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-surface via-white to-white" data-purpose="hero-editorial">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<!-- Left Column: High-Impact Typography & B2B Positioning -->
<div class="lg:col-span-7 space-y-6">
<!-- Location & Identity Kicker Badge -->
<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-brand-orange text-xs font-semibold tracking-wide"><span class="w-5 h-5 inline-flex items-center justify-center shrink-0"><animated-svg class="w-5 h-5" src="{{DATA:ANIMATION:ANIMATION_38}}"></animated-svg></span>
<span class="w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
            Startup Konsultan IT &amp; Rekayasa Data • Based in Jember, East Java
          </div>
<!-- Main Slogan / Headline -->
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.14]">
            Mitra Rekayasa Teknologi &amp; Transformasi Digital <span class="text-brand-orange">Terdepan</span></h1>
<!-- PRD Brief Positioning Description -->
<p class="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            SCI Tech menghadirkan solusi rekayasa hulu-ke-hilir—mulai dari perangkat lunak enterprise, kecerdasan buatan (AI), telemetri IoT edge, hingga analitik data terintegrasi bagi klien B2B, agrikultur modern, dan instansi pemerintahan.
          </p>
<!-- Action Button Row -->
<div class="pt-2 flex flex-wrap items-center gap-4">
<a class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm shadow-md hover:shadow-glow-orange transition-all duration-300 transform hover:-translate-y-0.5" href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20konsultasikan%20proyek%20teknologi." rel="noopener noreferrer" target="_blank">
<span class="">Konsultasikan Proyek Anda</span>
<span class="text-base font-bold">↗</span>
</a>
<a class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all bg-white hover:bg-slate-50" href="#portofolio">
<span class="">Lihat Portofolio Proyek</span>
</a>
</div>
<!-- Trust Badges & Metrics Row -->
<div class="pt-6 border-t border-slate-200/80 flex items-center gap-6">
<div class="flex items-center gap-3">
<div class="w-11 h-11 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center leading-none">
<span class="text-xs font-bold text-brand-orange">99.9%</span>
<span class="text-[7px] text-slate-300 uppercase tracking-tighter">Uptime</span>
</div>
<div>
<h4 class="text-xs font-bold text-slate-900">Arsitektur Teruji</h4>
<p class="text-[11px] text-slate-500">Fail-safe &amp; edge computing tangguh</p>
</div>
</div>
<div class="h-8 w-px bg-slate-200"></div>
<div class="flex items-center gap-3">
<div class="w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs">
                B2B
              </div>
<div>
<h4 class="text-xs font-bold text-slate-900">End-to-End Delivery</h4>
<p class="text-[11px] text-slate-500">Agrikultur, Industri &amp; Publik</p>
</div>
</div>
</div>
</div>
<!-- Right Column: Visual Showcase with Hardware Photo & Badge -->
<div class="lg:col-span-5 relative">
<div class="relative mx-auto max-w-md lg:max-w-none">
<!-- Glow background -->
<div class="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-brand-orange/20 to-brand-blue/25 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
<img alt="HYDRA Edge Controller Unit SCI Tech" class="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="eager" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiCOPB2f0UOkQ3hlFC9NXJ4VQbtyUYG2EUqw4zhsZe6iGl1K9dATDG5V8_liDA8tA9xE7PesSWTu9Il-jAyfJQ77IUJyjWaJNKK9lUI1cEGvPjHhEjxMKjvbBCeI4suc2QI_qA-rglhIlhlgqm7hCtZffyQH_jvLluIMF0OPvtjX9Ze6-mwoDZ1a--8kKpwoQfWKIN0z1EYm1lrQEgoDTCJ0SlMdXS60kNZLn1UlkC4kcjMfY67qTSLvSqYbz0KH6ae4VkLFte-SGP2HA"/>
<div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
<!-- Floating Pill Badge: Based in Jember, East Java -->
<div class="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-semibold shadow-md">
<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span class="">Based in Jember, East Java</span>
</div>
<!-- Floating Bottom Info Box -->
<div class="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-800">
<div class="flex items-start justify-between gap-4">
<div>
<span class="inline-block px-2.5 py-0.5 rounded bg-brand-blue-light text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-1">Hardware Flagship</span>
<h4 class="text-sm font-bold text-slate-900">HYDRA 01 Edge Industrial Controller</h4>
<p class="text-xs text-slate-600 mt-0.5">Kontrol telemetri presisi untuk otomatisasi irigasi pertanian &amp; sensor industri jarak jauh.</p>
</div>
<a class="w-9 h-9 shrink-0 rounded-full bg-brand-orange text-white flex items-center justify-center hover:bg-brand-orange-hover shadow-md transition-colors" href="#produk" title="Lihat Produk">
<span class="text-sm font-bold">↗</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- END: Hero Section -->
<!-- BEGIN: Tentang Kami & Nilai SMART (FR3) -->
<section class="py-20 bg-brand-surface border-y border-slate-100" data-purpose="about-smart-values" id="tentang">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
<span class="text-xs font-bold text-brand-orange uppercase tracking-widest">Fondasi Filosofi Rekayasa</span>
<h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Prinsip <span class="text-brand-blue">SMART</span> dalam Setiap Solusi Rekayasa
        </h2>
<p class="text-sm text-slate-600 leading-relaxed">
          Sebagai konsultan teknologi dan rekayasa data yang berakar di Jember, kami memegang teguh 5 nilai fundamental untuk menjamin setiap proyek memberikan dampak strategis berkesinambungan bagi mitra kami.
        </p>
</div>
<!-- Grid 5 Nilai SMART -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
<!-- Nilai 1: S - Smart & Scalable -->
<div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between group">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-display font-bold text-xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
              S
            </div>
<div>
<span class="text-[10px] font-bold text-brand-blue uppercase tracking-wider block">Pilar 01</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Smart &amp; Scalable</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Arsitektur komputasi adaptif yang dirancang fleksibel untuk tumbuh pesat tanpa terhalang batasan skala bisnis dan lonjakan data.
              </p>
</div>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-brand-blue flex items-center justify-between">
<span class="">Modular &amp; Expandable</span>
<span class="">↗</span>
</div>
</div>
<!-- Nilai 2: M - Measurable Impact -->
<div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-orange/50 transition-all duration-300 flex flex-col justify-between group">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center font-display font-bold text-xl group-hover:bg-brand-orange group-hover:text-white transition-colors">
              M
            </div>
<div>
<span class="text-[10px] font-bold text-brand-orange uppercase tracking-wider block">Pilar 02</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Measurable Impact</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Fokus utama pada dampak terukur berbasis indikator kunci (KPI), efisiensi biaya nyata, serta percepatan time-to-value operasional.
              </p>
</div>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-brand-orange flex items-center justify-between">
<span class="">Data-Driven Results</span>
<span class="">↗</span>
</div>
</div>
<!-- Nilai 3: A - Agility & Adaptability -->
<div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between group">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-display font-bold text-xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
              A
            </div>
<div>
<span class="text-[10px] font-bold text-brand-blue uppercase tracking-wider block">Pilar 03</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Agility &amp; Adaptability</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Respon tangkas dan cepat terhadap dinamika kebutuhan industri serta iterasi rekayasa sistem yang selaras dengan tantangan riil lapangan.
              </p>
</div>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-brand-blue flex items-center justify-between">
<span class="">Sprint-Driven Agility</span>
<span class="">↗</span>
</div>
</div>
<!-- Nilai 4: R - Reliability & Integrity -->
<div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-orange/50 transition-all duration-300 flex flex-col justify-between group">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center font-display font-bold text-xl group-hover:bg-brand-orange group-hover:text-white transition-colors">
              R
            </div>
<div>
<span class="text-[10px] font-bold text-brand-orange uppercase tracking-wider block">Pilar 04</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Reliability &amp; Integrity</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Keandalan sistem fail-safe berstandar tinggi, jaminan ketahanan hardware cuaca ekstrem, serta tata kelola keamanan integritas data.
              </p>
</div>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-brand-orange flex items-center justify-between">
<span class="">Fail-Safe Standards</span>
<span class="">↗</span>
</div>
</div>
<!-- Nilai 5: T - Transformative Collaboration -->
<div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between group md:col-span-2 lg:col-span-1">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-display font-bold text-xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
              T
            </div>
<div>
<span class="text-[10px] font-bold text-brand-blue uppercase tracking-wider block">Pilar 05</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Transformative Collaboration</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Kemitraan strategis hulu-ke-hilir jangka panjang untuk mengakselerasi transformasi digital mitra secara berkelanjutan.
              </p>
</div>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-brand-blue flex items-center justify-between">
<span class="">End-to-End Partnership</span>
<span class="">↗</span>
</div>
</div>
</div>
</div>
</section>
<!-- END: Tentang Kami & Nilai SMART -->
<!-- BEGIN: Pilar Layanan (FR4) -->
<section class="py-24 bg-white" data-purpose="four-services-pillars" id="layanan">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<!-- Section Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div class="max-w-2xl space-y-3">
<span class="text-xs font-bold text-brand-orange uppercase tracking-wider">Keahlian &amp; Kapabilitas Inti</span>
<h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            4 Pilar Layanan Solusi Rekayasa Terpadu
          </h2>
<p class="text-sm text-slate-600">
            Dari coding aplikasi custom hingga penyebaran sensor hardware lapangan, kami menyatukan disiplin ilmu rekayasa secara menyeluruh.
          </p>
</div>
<a class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-orange transition-colors" href="#kontak">
<span class="">Diskusikan Kebutuhan Anda</span>
<span class="text-sm font-bold">↗</span>
</a>
</div>
<!-- 4 Pilar Layanan Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Pilar 1: Pengembangan Software -->
<div class="p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-blue hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
<div class="space-y-5">
<div class="flex items-center justify-between">
<div class="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center">
<svg class="w-7 h-7" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</div>
<span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">Pilar 01</span>
</div>
<div>
<h3 class="text-2xl font-bold text-slate-900">Pengembangan Software</h3>
<p class="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                Pembangunan sistem perangkat lunak skala enterprise yang aman, berkinerja tinggi, dan terancang sesuai kebutuhan unik bisnis Anda.
              </p>
</div>
<div class="space-y-2 pt-2">
<div class="text-xs font-semibold text-slate-700">Ruang Lingkup Solusi:</div>
<ul class="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
<li class=""><strong class="text-slate-700">Enterprise ERP &amp; POS:</strong> Manajemen rantai pasok, multi-outlet, modul stok dan keuangan otomatis.</li>
<li class=""><strong class="text-slate-700">Cloud Infrastructure:</strong> Arsitektur microservices terdistribusi, kontainerisasi Docker &amp; Kubernetes.</li>
<li class=""><strong class="text-slate-700">Custom Web &amp; Mobile App:</strong> Aplikasi internal operasional dan consumer-facing yang responsif.</li>
</ul>
</div>
</div>
<div class="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
<span class="text-xs font-semibold text-slate-500">Framework: React, Flutter, Go, NestJS, Postgres</span>
<a class="w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-blue text-slate-700 hover:text-white flex items-center justify-center transition-colors" href="#kontak">
<span class="text-sm font-bold">↗</span>
</a>
</div>
</div>
<!-- Pilar 2: Artificial Intelligence (AI) -->
<div class="p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-orange hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
<div class="space-y-5">
<div class="flex items-center justify-between">
<div class="w-14 h-14 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center">
<svg class="w-7 h-7" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</div>
<span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">Pilar 02</span>
</div>
<div>
<h3 class="text-2xl font-bold text-slate-900">Artificial Intelligence (AI)</h3>
<p class="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                Penerapan kecerdasan buatan terapan untuk otomasi inspeksi, model analisis prediktif, serta perlindungan integritas informasi publik.
              </p>
</div>
<div class="space-y-2 pt-2">
<div class="text-xs font-semibold text-slate-700">Ruang Lingkup Solusi:</div>
<ul class="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
<li class=""><strong class="text-slate-700">Integrasi Model LLM &amp; NLP:</strong> Chatbot enterprise berbasis knowledge base internal dan automasi dokumen.</li>
<li class=""><strong class="text-slate-700">Predictive Maintenance:</strong> Deteksi dini anomali getaran, panas, dan pola keausan komponen mesin.</li>
<li class=""><strong class="text-slate-700">Computer Vision QA &amp; Filter:</strong> Inspeksi cacat produk konveyor dan filter cerdas konten anomali/spam.</li>
</ul>
</div>
</div>
<div class="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
<span class="text-xs font-semibold text-slate-500">Tech: PyTorch, OpenCV, LangChain, ONNX Runtime</span>
<a class="w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-orange text-slate-700 hover:text-white flex items-center justify-center transition-colors" href="#kontak">
<span class="text-sm font-bold">↗</span>
</a>
</div>
</div>
<!-- Pilar 3: Internet of Things (IoT) -->
<div class="p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-blue hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
<div class="space-y-5">
<div class="flex items-center justify-between">
<div class="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center">
<svg class="w-7 h-7" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</div>
<span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">Pilar 03</span>
</div>
<div>
<h3 class="text-2xl font-bold text-slate-900">Internet of Things (IoT)</h3>
<p class="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                Jembatan fisik ke digital dengan sensor presisi tinggi, kontroler edge tangguh, dan protokol telemetri nirkabel hemat energi.
              </p>
</div>
<div class="space-y-2 pt-2">
<div class="text-xs font-semibold text-slate-700">Ruang Lingkup Solusi:</div>
<ul class="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
<li class=""><strong class="text-slate-700">IoT SCADA &amp; Telemetri:</strong> Pemantauan status pompa, debit air, suhu, tekanan, dan konsumsi daya real-time.</li>
<li class=""><strong class="text-slate-700">Smart Farming Presisi:</strong> Otomatisasi irigasi fertigasi, greenhouse climate control, dan soil nutrient logging.</li>
<li class=""><strong class="text-slate-700">Edge Gateway Controller:</strong> Unit komputasi lokal offline-first yang tetap beroperasi tanpa sinyal internet.</li>
</ul>
</div>
</div>
<div class="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
<span class="text-xs font-semibold text-slate-500">Hardware &amp; Net: ESP32, FreeRTOS, Modbus, MQTT, LoRaWAN</span>
<a class="w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-blue text-slate-700 hover:text-white flex items-center justify-center transition-colors" href="#kontak">
<span class="text-sm font-bold">↗</span>
</a>
</div>
</div>
<!-- Pilar 4: Analisis Data -->
<div class="p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-orange hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
<div class="space-y-5">
<div class="flex items-center justify-between">
<div class="w-14 h-14 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center">
<svg class="w-7 h-7" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</div>
<span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">Pilar 04</span>
</div>
<div>
<h3 class="text-2xl font-bold text-slate-900">Analisis Data</h3>
<p class="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                Transformasi tumpukan data mentah menjadi wawasan bisnis prediktif yang mendorong keputusan pimpinan secara presisi.
              </p>
</div>
<div class="space-y-2 pt-2">
<div class="text-xs font-semibold text-slate-700">Ruang Lingkup Solusi:</div>
<ul class="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
<li class=""><strong class="text-slate-700">Dashboard Business Intelligence (BI):</strong> Panel visual interaktif metrik finansial, produksi, dan kepuasan layanan.</li>
<li class=""><strong class="text-slate-700">Data Lakehouse Enterprise:</strong> Arsitektur terpusat penyimpanan data struktural &amp; semi-struktural berkinerja tinggi.</li>
<li class=""><strong class="text-slate-700">Real-Time Data Pipeline:</strong> Streaming ingestion jutaan event data per detik tanpa jeda pelaporan.</li>
</ul>
</div>
</div>
<div class="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
<span class="text-xs font-semibold text-slate-500">Pipeline: ClickHouse, Apache Kafka, Apache Spark, Superset</span>
<a class="w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-orange text-slate-700 hover:text-white flex items-center justify-center transition-colors" href="#kontak">
<span class="text-sm font-bold">↗</span>
</a>
</div>
</div>
</div>
</div>
</section>
<!-- END: Pilar Layanan -->
<!-- BEGIN: Showcase Produk Utama - HYDRA Main Device (FR5) -->
<section class="py-24 bg-slate-900 text-white relative overflow-hidden" data-purpose="product-showcase-hydra" id="produk">
<!-- Glow background accents -->
<div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
<div class="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none"></div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<!-- Left: Unit Image Showcase -->
<div class="lg:col-span-6 space-y-4">
<div class="relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700/80 shadow-2xl group">
<img alt="HYDRA 01 Edge Industrial Controller Real Greenhouse Installation" class="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS0x18HRJUSJ810OGyM041OeQdbdPAwTjZRnTIw_wTdUVX9RPvuLJxNddxLN1G50vwVMwctLPbGQTiwjlYPfai8nGVQdUSUrM0brjKSvN0DhHLNjLiy985_MUtIGtoFjAWmXveP4R-TatRM5I-RECB_CjYfISpHqV0Eon5pixUHD2sN76zGJeiBXG5TtiIwjLgyXau2Is0YpywGA-2F93Pd_sY0tRyUPpkYwt2qGzi6nQiGlbU-U8s-sC-vJ3a_MRDBABOgotGkj6y1qw"/>
<!-- Real Status Badge -->
<div class="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-400 text-xs font-bold tracking-wide shadow-lg">
<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span class="">Ready &amp; Implemented</span>
</div>
<div class="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-[11px] text-slate-300">
              Dokumentasi Unit Fisik Asli
            </div>
</div>
<!-- Micro specs strip below image -->
<div class="grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-center">
<div class="text-[10px] text-slate-400 uppercase">Enclosure</div>
<div class="text-xs font-bold text-white mt-0.5">IP67 Weatherproof</div>
</div>
<div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-center">
<div class="text-[10px] text-slate-400 uppercase">Input</div>
<div class="text-xs font-bold text-brand-orange mt-0.5">Keypad 4x4 Matrix</div>
</div>
<div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-center">
<div class="text-[10px] text-slate-400 uppercase">Display</div>
<div class="text-xs font-bold text-brand-blue mt-0.5">LCD Telemetri 16x2</div>
</div>
</div>
</div>
<!-- Right: Technical Specifications & Features -->
<div class="lg:col-span-6 space-y-6">
<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold tracking-wider uppercase">
            Produk Utama Terintegrasi
          </div>
<h2 class="text-3xl sm:text-4xl font-bold text-white leading-tight">
            HYDRA Edge Industrial Controller
          </h2>
<p class="text-sm text-slate-300 leading-relaxed">
            Perangkat keras kendali industri dan edge computing rancangan mandiri SCI Tech di Jember. Menggabungkan ketangguhan sistem otomasi lapangan dengan konektivitas cloud real-time tanpa ketergantungan konstan pada koneksi internet.
          </p>
<!-- 4 Spesifikasi Teknis Lengkap Sesuai PRD -->
<div class="space-y-4 pt-2">
<!-- 1. Processor -->
<div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4">
<div class="w-10 h-10 rounded-xl bg-blue-500/20 text-brand-blue flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-xl">memory</span>
</div>
<div>
<h4 class="text-sm font-bold text-white">Processor &amp; RTOS Arsitektur</h4>
<p class="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Ditenagai mikroprosesor ESP32 Dual-Core berkecepatan 240MHz dengan sistem operasi waktu-nyata FreeRTOS untuk eksekusi multi-thread deterministik tanpa jeda.
                </p>
</div>
</div>
<!-- 2. Dual-Control System -->
<div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4">
<div class="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-xl">settings_remote</span>
</div>
<div>
<h4 class="text-sm font-bold text-white">Dual-Control System (Hybrid Operation)</h4>
<p class="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Fleksibilitas kendali penuh: manajemen manual offline di lapangan via Keypad Matrix fisik &amp; kontrol otomatis cloud/jarak jauh via WiFi, seluler, serta jaringan LoRa jarak jauh.
                </p>
</div>
</div>
<!-- 3. Telemetry LCD Display -->
<div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4">
<div class="w-10 h-10 rounded-xl bg-blue-500/20 text-brand-blue flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-xl">monitor_heart</span>
</div>
<div>
<h4 class="text-sm font-bold text-white">Telemetry LCD Screen Real-Time</h4>
<p class="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Layar diagnostik langsung di panel depan untuk pemantauan nilai sensor analog/digital (debit air, kelembapan, suhu, dan voltase) tanpa harus membuka laptop atau smartphone.
                </p>
</div>
</div>
<!-- 4. Enclosure & Weatherproof -->
<div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4">
<div class="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-xl">shield</span>
</div>
<div>
<h4 class="text-sm font-bold text-white">Enclosure &amp; Proteksi Iklim Tropis (IP67)</h4>
<p class="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Casing polimer weatherproof berstandar proteksi IP67 tahan percikan air, debu pertanian, serta anti-korosi kelembapan tinggi untuk operasi 24/7 di luar ruangan.
                </p>
</div>
</div>
</div>
<div class="pt-4 flex flex-wrap items-center gap-4">
<a class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-glow-orange transition-all" href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20tertarik%20dengan%20unit%20HYDRA%20Edge%20Controller." rel="noopener noreferrer" target="_blank">
<span class="">Pesan Unit / Jadwalkan PoC</span>
<span class="text-sm">↗</span>
</a>
<span class="text-xs text-slate-400">Garansi Pabrikan 3 Tahun • Dukungan Teknisi Jember</span>
</div>
</div>
</div>
</div>
</section>
<!-- END: Showcase Produk Utama -->
<!-- BEGIN: Etalase Portofolio & Case Studies (FR6) -->
<section class="py-24 bg-white" data-purpose="portfolio-case-studies" id="portofolio">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
<span class="text-xs font-bold text-brand-orange uppercase tracking-widest">Studi Kasus &amp; Rekam Jejak</span>
<h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Etalase Portofolio: Dampak Nyata Berbasis Data
        </h2>
<p class="text-sm text-slate-600 leading-relaxed">
          Bukti nyata implementasi solusi SCI Tech pada berbagai sektor—mulai dari sistem event terintegrasi, pertanian cerdas, layanan publik pemerintahan, hingga perlindungan siber AI.
        </p>
</div>
<!-- 5 Real Case Studies Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Case 1: Ramadhan Camp -->
<div class="group relative rounded-3xl bg-white border border-slate-200 hover:border-brand-blue hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"><div class="space-y-4"><div class="relative w-full h-48 overflow-hidden bg-slate-100"><img alt="Modern software registration platform Ramadhan Camp" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPqMCxgtSKIH-p8gZFy6F2k_hxHNN8SstYTw18x1GliAxpOaZPOtcbNhjzfjZJY6dvp42ZaYSARIbb12xb5znb7yU17bzPRdURo-aIGHnWBvqVNqTWiOJQX5VuglslPt_Ws_d-B4IwK3IU38cm_Aqwf_5W0wWwoFUlIa0IC6XaFdkqe8XZGtsjRvZaABWpYz-S_UtZk782VvPBQb0Epa9GZ2OyXWLoROAwCyE25nh1WnBJmESIOk0JTu7YNa_Y6ZaXeMbZQpROXksZiKY"/><div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div><div class="absolute top-3 left-3"><span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-brand-blue shadow-sm">Software &amp; Event</span></div><div class="absolute top-3 right-3"><span class="w-7 h-7 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold flex items-center justify-center">01</span></div></div><div class="p-7 pt-2 space-y-4"><h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">Ramadhan Camp</h3><p class="text-xs text-slate-500 leading-relaxed">Sistem manajemen &amp; platform registrasi event terintegrasi dengan validasi barcode instan, sinkronisasi data peserta, dan pelaporan absensi real-time.</p><div class="p-4 rounded-2xl bg-slate-50 group-hover:bg-blue-50/60 border border-slate-100 group-hover:border-blue-200/50 transition-colors space-y-2"><div class="text-[10px] uppercase font-bold text-slate-400 group-hover:text-brand-blue">Dampak Terukur (Impact)</div><div class="flex items-baseline justify-between"><span class="text-2xl font-bold font-display text-slate-900 group-hover:text-brand-blue">85%</span><span class="text-xs font-semibold text-emerald-600">Efisiensi Registrasi</span></div><div class="text-[11px] text-slate-500 font-medium">Tercapai Zero Downtime selama lonjakan 10.000+ akses simultan.</div></div></div></div><div class="px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500"><span class="">Client: Organisasi Skala Besar</span><span class="text-brand-orange font-bold">↗</span></div></div>
<!-- Case 2: HYDRA Greenhouse -->
<div class="group relative rounded-3xl bg-white border border-slate-200 hover:border-brand-orange hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"><div class="space-y-4"><div class="relative w-full h-48 overflow-hidden bg-slate-100"><img alt="Smart greenhouse automated precision drip irrigation HYDRA 01" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOyuRYUp9SrL9R5lw1hgPADpGLJeKXHX5CpTnMkPgcl3-hcsuDPfIv4Eb48LTuNZ2VfN8EdubykHfExmC_TK4T_b-bLNI8gBswuhrK2awhLedIVY4vwWZXjWML_sjB4I8N79Zn5j6LvvUw25KAPZqcKCuhlEDryZXxuQ-i-L9qPjmQpS5Yb8gCH68vyqu16lnMa4Zq9Ybllkq8DCTgzYNJB1o95NAgPAwan8jI9kce-V9FlahRBRicl3WsO_zglurJ6Kjsw3UbD9oK8gQ"/><div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div><div class="absolute top-3 left-3"><span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-brand-orange shadow-sm">Smart Farming IoT</span></div><div class="absolute top-3 right-3"><span class="w-7 h-7 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold flex items-center justify-center">02</span></div></div><div class="p-7 pt-2 space-y-4"><h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-orange transition-colors">HYDRA Greenhouse</h3><p class="text-xs text-slate-500 leading-relaxed">Otomatisasi irigasi fertigasi dan pemupukan presisi berbasis sensor kelembapan tanah, EC sensor pupuk, dan kontrol solenoid otomatis via unit HYDRA 01.</p><div class="p-4 rounded-2xl bg-slate-50 group-hover:bg-orange-50/60 border border-slate-100 group-hover:border-orange-200/50 transition-colors space-y-2"><div class="text-[10px] uppercase font-bold text-slate-400 group-hover:text-brand-orange">Dampak Terukur (Impact)</div><div class="flex items-baseline justify-between"><span class="text-2xl font-bold font-display text-slate-900 group-hover:text-brand-orange">-40%</span><span class="text-xs font-semibold text-emerald-600">Penghematan Air &amp; Nutrisi</span></div><div class="text-[11px] text-slate-500 font-medium">Peningkatan hasil panen komoditas holtikultura mencapai +28%.</div></div></div></div><div class="px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500"><span class="">Sektor: Agrikultur Modern</span><span class="text-brand-orange font-bold">↗</span></div></div>
<!-- Case 3: SPK Pasirian -->
<div class="group relative rounded-3xl bg-white border border-slate-200 hover:border-brand-blue hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"><div class="space-y-4"><div class="relative w-full h-48 overflow-hidden bg-slate-100"><img alt="Smart governance digital decision support system dashboard SPK Pasirian" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUEw0KQu3eIqW1t9K9UIGASr9drpE8RzOxGNhhAY7vwe6YYIVMoFFwZt4XjLU1HKdW2A4D_b-NToYB0BaSnu2GQ_N5kIfgwSBufrjAE0MKeJt81AU90q5Bru9pwOU2OrFTfFLN2bpjwQjjmK1kFJEd_yifQpPxCKg7v9ZiXF9jbpC7AoHvjKcBtTJQn0gFBI3rWlkB2wGZjWoMP7NMqade6OtjqiuLPydbHZ6PBTDSTQ4FHb972fD4yIO6vUpM57eOwE-dUs2I66Tms1g"/><div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div><div class="absolute top-3 left-3"><span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-brand-blue shadow-sm">Pemerintahan Publik</span></div><div class="absolute top-3 right-3"><span class="w-7 h-7 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold flex items-center justify-center">03</span></div></div><div class="p-7 pt-2 space-y-4"><h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">SPK Pasirian</h3><p class="text-xs text-slate-500 leading-relaxed">Sistem Pendukung Keputusan Digital untuk Kecamatan Pasirian guna mengevaluasi kelayakan bantuan sosial dan perizinan berbasis algoritma multi-kriteria terbobot.</p><div class="p-4 rounded-2xl bg-slate-50 group-hover:bg-blue-50/60 border border-slate-100 group-hover:border-blue-200/50 transition-colors space-y-2"><div class="text-[10px] uppercase font-bold text-slate-400 group-hover:text-brand-blue">Dampak Terukur (Impact)</div><div class="flex items-baseline justify-between"><span class="text-2xl font-bold font-display text-slate-900 group-hover:text-brand-blue">-70%</span><span class="text-xs font-semibold text-emerald-600">Waktu Disposisi Berkas</span></div><div class="text-[11px] text-slate-500 font-medium">Tingkat akurasi pemeringkatan penerima bantuan mencapai 96%.</div></div></div></div><div class="px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500"><span class="">Client: Instansi Kecamatan Pasirian</span><span class="text-brand-orange font-bold">↗</span></div></div>
<!-- Case 4: AI Radar Jember -->
<div class="group relative rounded-3xl bg-white border border-slate-200 hover:border-brand-orange hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"><div class="space-y-4"><div class="relative w-full h-48 overflow-hidden bg-slate-100"><img alt="Computer vision AI traffic surveillance and spatial monitoring AI Radar Jember" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsw3A1nmuJgt1-EHDWMGWR31uRNySy98CvToDhsFrSYeY_1kDaXTZAbRXA4HNftK8sZoTUskqfzImx4wPJKORJQjxMkoWMnJLXPvQx0V13wW3JLRXX8NC-JtuLYmBjPKh6MFTdFmQ9rwLfXP7NXJ-N1ONiJh9ug3qhpzw8FBj7dT5eDkPV5LYV33ouVGE3HVixkIlOhnJkxo5MfE5GYNUBL-XXcizRYh2QmfGiqqkrbEkocYWyHTkpJZnm4FlmU4WVt30y1ejgzh0e-OU"/><div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div><div class="absolute top-3 left-3"><span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-brand-orange shadow-sm">AI &amp; Vision Analitik</span></div><div class="absolute top-3 right-3"><span class="w-7 h-7 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold flex items-center justify-center">04</span></div></div><div class="p-7 pt-2 space-y-4"><h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-orange transition-colors">AI Radar Jember</h3><p class="text-xs text-slate-500 leading-relaxed">Engine Computer Vision untuk deteksi dan pemantauan dinamika citra spasial wilayah Kabupaten Jember guna pendeteksian kepadatan lalu lintas dan titik genangan.</p><div class="p-4 rounded-2xl bg-slate-50 group-hover:bg-orange-50/60 border border-slate-100 group-hover:border-orange-200/50 transition-colors space-y-2"><div class="text-[10px] uppercase font-bold text-slate-400 group-hover:text-brand-orange">Dampak Terukur (Impact)</div><div class="flex items-baseline justify-between"><span class="text-2xl font-bold font-display text-slate-900 group-hover:text-brand-orange">94.8%</span><span class="text-xs font-semibold text-emerald-600">Akurasi Deteksi Obyek</span></div><div class="text-[11px] text-slate-500 font-medium">Waktu respons pemrosesan inferensi kamera &lt; 2 detik per frame.</div></div></div></div><div class="px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500"><span class="">Sektor: Smart City &amp; Wilayah</span><span class="text-brand-orange font-bold">↗</span></div></div>
<!-- Case 5: Filter Spam Judi Online -->
<div class="group relative rounded-3xl bg-white border border-slate-200 hover:border-brand-blue hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-2 overflow-hidden"><div class="space-y-4"><div class="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-900 flex items-center justify-center"><img alt="Cybersecurity and NLP spam filter security operations dashboard" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY6QfIdYm5TtYzqI0JxHq1hb_tBUcoSEpSqGx1Kxr4TiK266kUBejDFIVBy--ir7zFdFNnKDomwCyfj8yBjgQ4VsIpzQ6dBuXp1LOt0HD_z4FRDLSsBaRxSYT8BqFMymcz-2M5C9SqFbpBKFfqu2MMkdRCUpRevSRlUP40VEGWVcrVO3bwnQaJ5hd1JYptbV93iJ2VN7mm8Tle662QucN5_1jZ-CBRzQEiFQhycJRRqoZ7-KDj-1v8YEKQN-4XdPtdzwWnrkN71_YKBMo"/><div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div><div class="absolute top-3 left-3"><span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-brand-blue shadow-sm">AI Security &amp; NLP</span></div><div class="absolute top-3 right-3"><span class="w-7 h-7 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold flex items-center justify-center">05</span></div></div><div class="p-7 pt-2 space-y-4"><h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">Filter Spam Judi Online</h3><p class="text-xs text-slate-500 leading-relaxed">Engine kecerdasan buatan berbasis Natural Language Processing (NLP) untuk menyaring secara proaktif injeksi tautan berbahaya, komentar spam, dan ancaman deface judi online pada portal digital instansi.</p><div class="p-4 rounded-2xl bg-slate-50 group-hover:bg-blue-50/60 border border-slate-100 group-hover:border-blue-200/50 transition-colors grid grid-cols-1 sm:grid-cols-2 gap-4"><div><div class="text-[10px] uppercase font-bold text-slate-400 group-hover:text-brand-blue">Efektivitas Eliminasi</div><div class="text-2xl font-bold font-display text-slate-900 group-hover:text-brand-blue mt-0.5">99.2%</div><div class="text-[11px] text-slate-500 mt-0.5">Spam &amp; konten terlarang berhasil diblokir sebelum tayang.</div></div><div><div class="text-[10px] uppercase font-bold text-slate-400 group-hover:text-brand-blue">Integritas Publik</div><div class="text-2xl font-bold font-display text-emerald-600 mt-0.5">100% Aman</div><div class="text-[11px] text-slate-500 mt-0.5">Menjaga reputasi domain resmi dari penalti search engine.</div></div></div></div></div><div class="px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500"><span class="">Sektor: Perlindungan Siber Instansi</span><span class="text-brand-orange font-bold">↗</span></div></div>
</div>
</div>
</section>
<!-- END: Etalase Portofolio -->
<!-- BEGIN: Alur Kerja / Timeline 5 Tahap (FR7) -->
<section class="py-24 bg-brand-surface border-y border-slate-100" data-purpose="five-stage-workflow" id="alur-kerja">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
<span class="text-xs font-bold text-brand-orange uppercase tracking-widest">Metodologi Rekayasa Presisi</span>
<h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Alur Kerja 5 Tahap: Dari Audit hingga Handover
        </h2>
<p class="text-sm text-slate-600 leading-relaxed">
          Struktur pengerjaan proyek yang transparan, terukur, dan disiplin untuk memastikan target waktu dan spesifikasi teknis terpenuhi tanpa risiko deviasi.
        </p>
</div>
<!-- 5-Stage Stepper Component -->
<div class="relative">
<!-- Connecting Line for Desktop -->
<div class="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue -translate-y-6 z-0"></div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
<!-- Tahap 01: Konsultasi -->
<div class="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-display font-bold text-base shadow-md">
                01
              </div>
<div>
<span class="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Tahap Awal</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Konsultasi</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                  Audit kebutuhan menyeluruh, perumusan akar masalah, asesmen kelayakan teknis, dan penetapan KPI proyek.
                </p>
</div>
</div>
<div class="mt-6 pt-3 border-t border-slate-100 text-[10px] font-semibold text-slate-400">
              Output: Dokumen Project Charter &amp; BoQ
            </div>
</div>
<!-- Tahap 02: Perancangan -->
<div class="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-display font-bold text-base shadow-md">
                02
              </div>
<div>
<span class="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Desain Sistem</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Perancangan</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                  Penyusunan arsitektur sistem, wireframe UI/UX, skematik sirkuit hardware, serta skema basis data terintegrasi.
                </p>
</div>
</div>
<div class="mt-6 pt-3 border-t border-slate-100 text-[10px] font-semibold text-slate-400">
              Output: Blueprint Arsitektur &amp; Mockup
            </div>
</div>
<!-- Tahap 03: Pengembangan -->
<div class="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center font-display font-bold text-base shadow-md">
                03
              </div>
<div>
<span class="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Engineering</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Pengembangan</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                  Rekayasa kode backend &amp; frontend, fabrikasi PCB hardware, perakitan unit IoT, dan training model AI.
                </p>
</div>
</div>
<div class="mt-6 pt-3 border-t border-slate-100 text-[10px] font-semibold text-slate-400">
              Output: Prototipe Berfungsi &amp; Test Suite
            </div>
</div>
<!-- Tahap 04: Deployment -->
<div class="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-display font-bold text-base shadow-md">
                04
              </div>
<div>
<span class="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Implementasi</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Deployment</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                  Pemasangan unit fisik di lapangan, konfigurasi cloud, uji beban (load test), serta verifikasi keamanan SSL/TLS.
                </p>
</div>
</div>
<div class="mt-6 pt-3 border-t border-slate-100 text-[10px] font-semibold text-slate-400">
              Output: Factory Acceptance Test (FAT)
            </div>
</div>
<!-- Tahap 05: Handover -->
<div class="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-display font-bold text-base shadow-md">
                05
              </div>
<div>
<span class="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Alih Kelola</span>
<h3 class="text-lg font-bold text-slate-900 mt-1">Handover</h3>
<p class="text-xs text-slate-600 mt-2 leading-relaxed">
                  Pelatihan tim operasional mitra, serah terima dokumentasi teknis lengkap, dan pengaktifan garansi SLA maintenance.
                </p>
</div>
</div>
<div class="mt-6 pt-3 border-t border-slate-100 text-[10px] font-semibold text-slate-400">
              Output: Berita Acara &amp; Kontrak SLA
            </div>
</div>
</div>
</div>
</div>
</section>
<!-- END: Alur Kerja / Timeline 5 Tahap -->
<!-- BEGIN: Lead Capture & Fast Consultation (FR8 Link) -->
<section class="py-20 bg-white" data-purpose="lead-capture" id="kontak">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="rounded-3xl bg-gradient-to-br from-brand-dark via-slate-900 to-[#070e1b] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
<div class="lg:col-span-6 space-y-5">
<span class="text-xs font-bold text-brand-orange uppercase tracking-wider">Konsultasi Rekayasa Hulu-ke-Hilir</span>
<h2 class="text-3xl sm:text-4xl font-bold leading-tight">
              Mulai Konsultasikan Proyek Teknologi Anda Bersama Insinyur Kami
            </h2>
<p class="text-sm text-slate-300 leading-relaxed">
              Tim rekayasa SCI Tech siap membantu memetakan arsitektur terbaik untuk software enterprise, AI model, maupun otomasi hardware IoT. Dapatkan proposal teknis awal dalam 2x24 jam.
            </p>
<div class="space-y-3.5 pt-3 text-xs text-slate-300">
<div class="flex items-center gap-3">
<div class="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold">✓</div>
<span class=""><strong>Surel Resmi:</strong> solusicerdasinfratech@gmail.com</span>
</div>
<div class="flex items-center gap-3">
<div class="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold">✓</div>
<span class=""><strong>Hotline &amp; WA:</strong> +62 895-1325-9281 (Respons Cepat)</span>
</div>
<div class="flex items-center gap-3">
<div class="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold">✓</div>
<span class=""><strong>Kantor &amp; Lab:</strong> Jl. Raden Patah VI No. 90, Jember, Jawa Timur</span>
</div>
</div>
</div>
<!-- Direct Form -->
<div class="lg:col-span-6">
<form class="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 space-y-4" onsubmit="event.preventDefault(); window.open('https://wa.me/6289513259281?text=' + encodeURIComponent('Halo SCI Tech, saya ' + this.nama.value + ' ingin konsultasi proyek: ' + this.layanan.value), '_blank');">
<div>
<label class="block text-xs font-semibold text-slate-200 mb-1">Nama Lengkap &amp; Instansi</label>
<input class="w-full text-xs px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange transition-colors" name="nama" placeholder="Contoh: Budi Santoso (PT Agro Makmur / Pemkab)" required="" type="text"/>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label class="block text-xs font-semibold text-slate-200 mb-1">Email Perusahaan</label>
<input class="w-full text-xs px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange transition-colors" name="email" placeholder="nama@perusahaan.co.id" required="" type="email"/>
</div>
<div>
<label class="block text-xs font-semibold text-slate-200 mb-1">Nomor WhatsApp Aktif</label>
<input class="w-full text-xs px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange transition-colors" name="wa" placeholder="08123456789" required="" type="tel"/>
</div>
</div>
<div>
<label class="block text-xs font-semibold text-slate-200 mb-1">Pilar Kebutuhan</label>
<select class="w-full text-xs px-4 py-3 rounded-xl bg-slate-900 border border-white/20 text-white focus:outline-none focus:border-brand-orange transition-colors" name="layanan">
<option>Pengembangan Software (Enterprise ERP &amp; Cloud)</option>
<option>Hardware IoT &amp; HYDRA Edge Controller</option>
<option>Artificial Intelligence &amp; Computer Vision QA</option>
<option>Analisis Data &amp; Data Lakehouse Pipeline</option>
<option>Smart Farming &amp; Green House Otomasi</option>
</select>
</div>
<button class="w-full py-3.5 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-glow-orange flex items-center justify-center gap-2" type="submit">
<span class="">Konsultasikan Proyek Sekarang</span>
<span class="text-sm font-bold">↗</span>
</button>
<p class="text-[10px] text-center text-slate-400">Kerahasiaan data industri dijamin oleh Non-Disclosure Agreement (NDA).</p>
</form>
</div>
</div>
</div>
</div>
</section>
<!-- END: Lead Capture -->
</main>
<!-- BEGIN: Footer & Penutup (FR8) -->
<footer class="bg-brand-navy text-slate-400 pt-16 pb-12 border-t border-slate-800" data-purpose="site-footer">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
<!-- Brand & Location Column -->
<div class="lg:col-span-2 space-y-4">
<div class="flex items-center gap-3"><animated-svg class="w-8 h-8 mr-1 inline-block shrink-0" src="{{DATA:ANIMATION:ANIMATION_38}}"></animated-svg>
<img alt="SCI Tech Microchip" class="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAKg82Kfyc7ioY2PKNCI5L0xpPiDk89jgxPg-mvlzJ2UzFeGq5h4ZacXXtfMXm44cBMsiMyguaZdsgVEBQgg2w6oJhcROJcUJXpTrOIO7YQd1FzeF8z060bInfboONjKzZkxNXxKRad6ri59Y3RRsiz548SFET8tPgMFtr3pREBHArcGzwuAEK3jSZu7IxWxzv5hLo29HQ2xrxWWbJt-UwL2P2Tgo6o4SUbnYBA53nBXZ_NCQSRMQWgyj6X2pz3GoxBv0"/>
<img alt="SCI Tech Logo" class="h-6 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc3ayNDvI9x2b9BBP73QtaXEn3vLOHOPLw519tGQFtvNlseiRt3JmUe4ifs5M9BgRHGvH6cFWuT-mMbhQAx3NCYvdbqJwDQLaSEdbL8AMumRrpaikUqxyqp1Utkm23LnNehNd3jRzGDvcwaeSZIhxfQ6oXojrY2FP2G8B1y5YT5X6wYgiSh4LTWaMUKBa64t4Lk1HAY3kQjrAi5rjTtFOFfZ0FhDlb3WeVbx4tuMujyW2daYy1CZQk1zhkESPq22Hn5EY"/>
</div>
<p class="text-xs text-slate-400 leading-relaxed max-w-sm">
          PT Solusi Cerdas Infrastructure Technology (SCI Tech) — Startup konsultan IT dan rekayasa data dari Jember, Jawa Timur. Menyediakan solusi hulu-ke-hilir untuk B2B, agrikultur modern, dan instansi pemerintahan.
        </p>
<div class="text-xs text-slate-300 space-y-1">
<div><strong class="text-white">Alamat Kantor &amp; Lab:</strong></div>
<div class="text-slate-400">Jl. Raden Patah VI No. 90, Jember, Jawa Timur, Indonesia</div>
</div>
</div>
<!-- Quick Links: Layanan -->
<div class="space-y-3">
<h4 class="text-xs font-bold text-white uppercase tracking-wider">Pilar Layanan</h4>
<ul class="space-y-2 text-xs">
<li class=""><a class="hover:text-brand-orange transition-colors" href="#layanan">Pengembangan Software</a></li>
<li class=""><a class="hover:text-brand-orange transition-colors" href="#layanan">Artificial Intelligence (AI)</a></li>
<li class=""><a class="hover:text-brand-orange transition-colors" href="#layanan">Internet of Things (IoT)</a></li>
<li class=""><a class="hover:text-brand-orange transition-colors" href="#layanan">Analisis Data Lakehouse</a></li>
<li class=""><a class="hover:text-brand-orange transition-colors" href="#produk">HYDRA Edge Controller</a></li>
</ul>
</div>
<!-- Quick Links: Portofolio & Tentang -->
<div class="space-y-3">
<h4 class="text-xs font-bold text-white uppercase tracking-wider">Portofolio Kunci</h4>
<ul class="space-y-2 text-xs">
<li class=""><a class="hover:text-brand-orange transition-colors" href="#portofolio">Ramadhan Camp Platform</a></li>
<li class=""><a class="hover:text-brand-orange transition-colors" href="#portofolio">HYDRA Greenhouse Farming</a></li>
<li class=""><a class="hover:text-brand-orange transition-colors" href="#portofolio">SPK Pasirian Gov System</a></li>
<li class=""><a class="hover:text-brand-orange transition-colors" href="#portofolio">AI Radar Spasial Jember</a></li>
<li class=""><a class="hover:text-brand-orange transition-colors" href="#portofolio">Filter Spam Judi Online</a></li>
</ul>
</div>
<!-- Kontak & Author PRD Attribution -->
<div class="space-y-3">
<h4 class="text-xs font-bold text-white uppercase tracking-wider">Kontak Langsung</h4>
<div class="text-xs text-slate-300 space-y-1.5 font-mono bg-slate-900/80 p-3 rounded-xl border border-slate-800">
<div class="">WA: +62 895-1325-9281</div>
<div class="">Surel: solusicerdasinfratech@gmail.com</div>
</div>
<div class="pt-2 text-[11px] text-slate-400 leading-snug border-t border-slate-800/80">
<span class="text-slate-500 block">Lead Author:</span>
<span class="text-white font-medium">Gilang Maulana Bilhaq, S.Kom.</span>
<span class="text-[10px] text-slate-400 block">(Principal Consultant &amp; Lead Engineer)</span>
</div>
</div>
</div>
<!-- Bottom Bar: Copyright & Terms -->
<div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<div class="">
        Copyright © 2026 PT Solusi Cerdas Infrastructure Technology (SCI Tech). Seluruh hak cipta dilindungi undang-undang.
      </div>
<div class="flex items-center gap-6">
<a class="hover:text-slate-400 transition-colors" href="#tentang">Nilai SMART</a>
<a class="hover:text-slate-400 transition-colors" href="#alur-kerja">Alur Kerja 5 Tahap</a>
<a class="hover:text-slate-400 transition-colors" href="#kontak">Konsultasi B2B</a>
</div>
</div>
</div>
</footer>
<!-- END: Footer & Penutup -->
<!-- BEGIN: Floating WhatsApp Button (FR8) -->
<div class="fixed bottom-6 right-6 z-50 group" data-purpose="floating-hotline">
<a aria-label="Konsultasi WhatsApp SCI Tech" class="relative flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1" href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20konsultasi%20proyek%20teknologi." rel="noopener noreferrer" target="_blank">
<!-- Green pulse indicator -->
<span class="absolute -top-1 -right-1 flex h-3.5 w-3.5">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
</span>
<!-- WhatsApp Icon -->
<svg class="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
</svg>
<span class="text-xs font-bold tracking-wide">Konsultasi WA</span>
</a>
</div>
<!-- END: Floating WhatsApp Button -->
<!-- Mobile Navigation Toggle Script -->
<script data-purpose="mobile-menu-toggle">
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
</script>
</body></html>