export interface SmartValue {
  letter: string;
  pillar: string;
  title: string;
  desc: string;
  tag: string;
  color: "blue" | "orange";
}

export interface ServicePilar {
  label: string;
  title: string;
  desc: string;
  items: [string, string][];
  tech: string;
  accent: "blue" | "orange";
}

export interface PortfolioItem {
  id: string;
  num: string;
  cat: string;
  filterGroup: "iot" | "ai" | "software" | "gov";
  catColor: string;
  hoverBorder: string;
  hoverText: string;
  hoverBg: string;
  img: string;
  alt: string;
  title: string;
  desc: string;
  metric?: string;
  metricLabel?: string;
  metricNote?: string;
  client: string;
  tags: string[];
}

export interface HydraHotspot {
  id: number;
  pinNumber: string;
  title: string;
  subtitle: string;
  desc: string;
  top: string;
  left: string;
  color: "orange" | "blue";
  techSpec: string;
  highlightCategory: string;
}

export interface TimelineStep {
  num: string;
  phase: string;
  title: string;
  desc: string;
  output: string;
  bg: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ComplianceBadge {
  icon: string;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

/* ================================================================
   DATA DEFINITIONS
   ================================================================ */

export const SMART_VALUES: SmartValue[] = [
  {
    letter: "S",
    pillar: "01",
    title: "Smart & Scalable",
    desc: "Arsitektur komputasi adaptif yang dirancang fleksibel untuk tumbuh pesat tanpa terhalang batasan skala bisnis dan lonjakan data.",
    tag: "Modular & Expandable",
    color: "blue",
  },
  {
    letter: "M",
    pillar: "02",
    title: "Measurable Impact",
    desc: "Fokus utama pada dampak terukur berbasis indikator kunci (KPI), efisiensi biaya nyata, serta percepatan time-to-value operasional.",
    tag: "Data-Driven Results",
    color: "orange",
  },
  {
    letter: "A",
    pillar: "03",
    title: "Agility & Adaptability",
    desc: "Respon tangkas dan cepat terhadap dinamika kebutuhan industri serta iterasi rekayasa sistem yang selaras dengan tantangan riil lapangan.",
    tag: "Sprint-Driven Agility",
    color: "blue",
  },
  {
    letter: "R",
    pillar: "04",
    title: "Reliability & Integrity",
    desc: "Keandalan sistem fail-safe berstandar tinggi, jaminan ketahanan hardware cuaca ekstrem, serta tata kelola keamanan integritas data.",
    tag: "Fail-Safe Standards",
    color: "orange",
  },
  {
    letter: "T",
    pillar: "05",
    title: "Transformative Collaboration",
    desc: "Kemitraan strategis hulu-ke-hilir jangka panjang untuk mengakselerasi transformasi digital mitra secara berkelanjutan.",
    tag: "End-to-End Partnership",
    color: "blue",
  },
];

export const SERVICES_DATA: ServicePilar[] = [
  {
    label: "01",
    title: "Pengembangan Software Enterprise",
    desc: "Pembangunan sistem perangkat lunak skala enterprise yang aman, berkinerja tinggi, dan terancang khusus sesuai kebutuhan operasional unik bisnis Anda.",
    items: [
      ["Enterprise ERP & POS:", "Manajemen rantai pasok, multi-outlet, sinkronisasi stok, dan pembukuan finansial otomatis."],
      ["Cloud Infrastructure:", "Arsitektur microservices terdistribusi, kontainerisasi Docker & orkestrasi Kubernetes."],
      ["Custom Web & Mobile App:", "Aplikasi operasional internal dan consumer-facing yang responsif, cepat, dan intuitif."],
    ],
    tech: "React, Next.js, Flutter, Go, NestJS, PostgreSQL",
    accent: "blue",
  },
  {
    label: "02",
    title: "Artificial Intelligence (AI) Terapan",
    desc: "Penerapan kecerdasan buatan terapan untuk otomasi inspeksi industri, model analisis prediktif, serta perlindungan integritas informasi publik.",
    items: [
      ["Model LLM & NLP:", "Chatbot enterprise berbasis knowledge base internal dan automasi ekstraksi dokumen."],
      ["Predictive Maintenance:", "Deteksi dini anomali getaran, suhu berlebih, dan keausan mesin pabrik."],
      ["Computer Vision QA & Filter:", "Inspeksi visual cacat produk konveyor dan filter proaktif konten berbahaya/spam."],
    ],
    tech: "PyTorch, OpenCV, LangChain, ONNX Runtime",
    accent: "orange",
  },
  {
    label: "03",
    title: "Internet of Things (IoT) & Edge Computing",
    desc: "Jembatan fisik ke digital dengan sensor presisi tinggi, kontroler edge tangguh, dan protokol telemetri nirkabel hemat daya.",
    items: [
      ["IoT SCADA & Telemetri:", "Pemantauan pompa air, debit, tekanan pipa, suhu, dan parameter daya listrik."],
      ["Smart Farming Presisi:", "Otomatisasi irigasi fertigasi, kontrol mikroklimat greenhouse, dan soil logging."],
      ["Edge Gateway Controller:", "Unit komputasi lokal offline-first yang tetap beroperasi normal tanpa internet."],
    ],
    tech: "ESP32, FreeRTOS, Modbus, MQTT, LoRaWAN",
    accent: "blue",
  },
  {
    label: "04",
    title: "Rekayasa & Analitik Data Lanjutan",
    desc: "Transformasi tumpukan data mentah menjadi wawasan bisnis prediktif yang mendorong keputusan pimpinan secara presisi dan terukur.",
    items: [
      ["Dashboard BI Interaktif:", "Panel visual eksekutif untuk metrik finansial, produksi, dan SLA layanan."],
      ["Data Lakehouse Enterprise:", "Arsitektur terpusat penyimpanan data struktural berkinerja tinggi."],
      ["Real-Time Data Pipeline:", "Streaming ingestion jutaan event data per detik tanpa latensi."],
    ],
    tech: "ClickHouse, Apache Kafka, Apache Spark, Apache Superset",
    accent: "orange",
  },
];

export const HYDRA_HOTSPOTS: HydraHotspot[] = [
  {
    id: 1,
    pinNumber: "01",
    title: "Enclosure IP67 Weatherproof",
    subtitle: "Proteksi Fisik Iklim Tropis",
    desc: "Casing polimer industri tahan air hujan, kelembapan tinggi, dan partikel debu pertanian untuk operasional 24/7 di luar ruangan tanpa ruang kontrol khusus.",
    top: "16%",
    left: "72%",
    color: "orange",
    techSpec: "Material Polimer IP67 • UV-Resistant • Seal Gasket Silikon",
    highlightCategory: "Hardware Durability",
  },
  {
    id: 2,
    pinNumber: "02",
    title: "LCD Telemetri 16×2 Real-Time",
    subtitle: "Diagnostik Sensor On-Site",
    desc: "Menampilkan status debit air, voltase operasional, dan parameter kelembapan langsung di lapangan tanpa ketergantungan pada layar HP atau sinyal seluler.",
    top: "37%",
    left: "48%",
    color: "blue",
    techSpec: "High-Contrast Backlight • I2C Bus Driver • Low-Power 5V",
    highlightCategory: "Field Diagnostics",
  },
  {
    id: 3,
    pinNumber: "03",
    title: "Keypad Matrix 4×4 Fisik",
    subtitle: "Kendali Manual Fail-Safe",
    desc: "Tombol kontrol fisik taktil untuk mengatur durasi pengairan dan mode darurat onsite secara mandiri saat terjadi gangguan jaringan internet.",
    top: "66%",
    left: "47%",
    color: "orange",
    techSpec: "Membrane Tactile Switch • Debounce Filter • Fail-Safe Override",
    highlightCategory: "Manual Override",
  },
  {
    id: 4,
    pinNumber: "04",
    title: "Processor ESP32 & RTOS Engine",
    subtitle: "Komputasi Edge Lokal",
    desc: "Dual-Core 240MHz dengan FreeRTOS multi-thread untuk eksekusi logika otomasi secara deterministik di tingkat lokal tanpa jeda latensi server cloud.",
    top: "76%",
    left: "76%",
    color: "blue",
    techSpec: "240MHz Dual-Core • 520KB SRAM • Flash Memory SPI • OTA Update",
    highlightCategory: "Edge Intelligence",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    num: "01",
    cat: "Software & Edukasi",
    filterGroup: "software",
    catColor: "text-[#0086c9]",
    hoverBorder: "hover:border-[#0086c9]",
    hoverText: "group-hover:text-[#0086c9]",
    hoverBg: "group-hover:bg-blue-50/60 group-hover:border-blue-200/50",
    img: "/Portofolio Ramadhan Camp.jpeg",
    alt: "Ramadhan Camp Event",
    title: "Ramadhan Camp — Anatomi Komputasi",
    desc: "Program edukasi teknologi hands-on learning melalui kurikulum Anatomi Komputasi Humanis, yang dipadukan dengan praktik langsung merakit 4 modul otomasi ke dalam maket Miniatur Smart City.",
    metric: "90%",
    metricLabel: "Demistifikasi Teknologi",
    metricNote: "Menjadikan teknologi tinggi lebih sederhana, inklusif, dan menyenangkan untuk generasi muda.",
    client: "Client: The Skill Indonesia",
    tags: ["Hands-on IoT", "Kurikulum STEM", "Smart City Model"],
  },
  {
    id: "p2",
    num: "02",
    cat: "Smart Farming & IoT",
    filterGroup: "iot",
    catColor: "text-[#fe7a00]",
    hoverBorder: "hover:border-[#fe7a00]",
    hoverText: "group-hover:text-[#fe7a00]",
    hoverBg: "group-hover:bg-orange-50/60 group-hover:border-orange-200/50",
    img: "/Portofolio Hydra Greenhouse.jpeg",
    alt: "HYDRA Greenhouse smart irrigation",
    title: "HYDRA Greenhouse Smart Irrigation",
    desc: "Deployment 11 Unit HYDRA Main Device berfitur kendali ganda (manual & mobile), otomatisasi penjadwalan fertigasi, serta dasbor pengawasan telemetri kelembapan tanah jarak jauh.",
    metric: "70%",
    metricLabel: "Efisiensi Penggunaan Air & SDM",
    metricNote: "Peningkatan hasil panen komoditas hortikultura mencapai +28% secara konsisten.",
    client: "Client: CV. Imaji Sociopreneur",
    tags: ["ESP32 FreeRTOS", "Irrigation Automation", "Mobile Telemetry"],
  },
  {
    id: "p3",
    num: "03",
    cat: "Sektor Publik & Gov-Tech",
    filterGroup: "gov",
    catColor: "text-[#0086c9]",
    hoverBorder: "hover:border-[#0086c9]",
    hoverText: "group-hover:text-[#0086c9]",
    hoverBg: "group-hover:bg-blue-50/60 group-hover:border-blue-200/50",
    img: "/Portofolio Web Rekomdendasi SMP Pasirian.png",
    alt: "Web Rekomendasi SMP Pasirian",
    title: "Web Dasbor Rekomendasi SMP Pasirian",
    desc: "Sistem pendukung keputusan publik berbasis web untuk membantu wali murid menentukan sekolah terbaik bagi calon siswa menggunakan integrasi algoritma AHP dan SMART Matrix.",
    metric: "85%",
    metricLabel: "Efisiensi Waktu Pemilihan",
    metricNote: "Tingkat akurasi pemeringkatan sekolah mencapai 92% berdasarkan indeks fasilitas.",
    client: "Sector: Instansi Pemerintah",
    tags: ["Algoritma AHP", "SMART Decision Matrix", "Gov-Tech Portal"],
  },
  {
    id: "p4",
    num: "04",
    cat: "Audit Data & AI Analitik",
    filterGroup: "ai",
    catColor: "text-[#fe7a00]",
    hoverBorder: "hover:border-[#fe7a00]",
    hoverText: "group-hover:text-[#fe7a00]",
    hoverBg: "group-hover:bg-orange-50/60 group-hover:border-orange-200/50",
    img: "/radarjember_infografis.png",
    alt: "Evaluasi dan Klasifikasi Pengguna Aplikasi radarjember.net",
    title: "Audit Software & UX Radar Jember",
    desc: "Evaluasi komprehensif portal berita radarjember.net (Jawa Pos Group) dengan Machine Learning dan Technology Readiness Index 2.0 guna memetakan profil pembaca dan 15 rekomendasi arsitektur software.",
    metric: "90%",
    metricLabel: "Efisiensi Riset Pembaca",
    metricNote: "Menghasilkan 15 rekomendasi perbaikan aplikasi yang langsung diadopsi dewan redaksi.",
    client: "Sektor: Media Berita",
    tags: ["Machine Learning", "Technology Readiness Index", "UX Data Audit"],
  },
  {
    id: "p5",
    num: "05",
    cat: "AI Security & NLP Defense",
    filterGroup: "ai",
    catColor: "text-[#fe7a00]",
    hoverBorder: "hover:border-[#fe7a00]",
    hoverText: "group-hover:text-[#fe7a00]",
    hoverBg: "group-hover:bg-orange-50/60 group-hover:border-orange-200/50",
    img: "/Porto Web Deteksi Promosi Judol.png",
    alt: "Filter NLP Spam Judi Online",
    title: "Dasbor AI Filter Spam Judi Online",
    desc: "Engine kecerdasan buatan berbasis Natural Language Processing (NLP) untuk menyaring secara otomatis injeksi tautan berbahaya, komentar spam, dan potensi deface pada portal web instansi publik.",
    metric: "99.4%",
    metricLabel: "Akurasi Deteksi Anomali",
    metricNote: "Melindungi reputasi domain institusi dari sanksi pemblokiran mesin pencari.",
    client: "Sektor: Perlindungan Siber Instansi",
    tags: ["NLP Engine", "Real-Time Defense", "Content Classifier"],
  },
  {
    id: "p6",
    num: "06",
    cat: "Sektor Instansi Pendidikan",
    filterGroup: "gov",
    catColor: "text-[#0086c9]",
    hoverBorder: "hover:border-[#0086c9]",
    hoverText: "group-hover:text-[#0086c9]",
    hoverBg: "group-hover:bg-blue-50/60 group-hover:border-blue-200/50",
    img: "/Porto_SSAS.jpg",
    alt: "Smart School Attendance System (SSAS) - Presensi Gerbang Pintar Berbasis Barcode",
    title: "Smart School Attendance System (SSAS)",
    desc: "Sistem presensi gerbang pintar berbasis barcode yang dilengkapi pencegahan scan ganda, konfirmasi suara, dan notifikasi WhatsApp otomatis ke orang tua. Sistem ini mempermudah manajemen sekolah dengan pencatatan \"Alpa\" otomatis, grafik kehadiran live, pengaturan kalender kustom, mode WFA, serta ekspor laporan PDF/Excel yang instan dan akurat.",
    metric: "100%",
    metricLabel: "Efisiensi Pencatatan Absensi Siswa",
    metricNote: "Mempermudah dan mendigitalisasi absensi sekolah serta meningkatkan kepercayaan orangtua / wali murid.",
    client: "Sektor: Instansi Pendidikan",
    tags: ["Web Dev", "Real-Time Attendance", "School Tech"],
  },
  {
    id: "p7",
    num: "07",
    cat: "Sektor UMKM Pendidikan",
    filterGroup: "software",
    catColor: "text-[#0086c9]",
    hoverBorder: "hover:border-[#0086c9]",
    hoverText: "group-hover:text-[#0086c9]",
    hoverBg: "group-hover:bg-blue-50/60 group-hover:border-blue-200/50",
    img: "/Porto_Sistem Manajemen Bimbel.jpg",
    alt: "Sistem Manajemen Bimbel - Dashboard dan Otomasi Pembukuan UMKM",
    title: "Sistem Manajemen Bimbel",
    desc: "Sistem manajemen bimbel dengan fitur absensi tutor, kelola data siswa, jadwal, keuangan, tutor, dan verifikasi absensi. Dilengkapi penagihan biaya bimbel serta laporan per sesi via WhatsApp, notifikasi honor tutor via WhatsApp, dan dasbor analitik grafik kehadiran, keuangan, dan data operasional secara terpusat.",
    metric: "90%",
    metricLabel: "Efisiensi Pembukuan & Manajemen Bimbel",
    metricNote: "Mempermudah manajemen dan pembukuan UMKM bimbingan belajar secara menyeluruh.",
    client: "Sektor: UMKM Pendidikan",
    tags: ["Web GAS", "Management System", "UMKM Tech"],
  },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    num: "01",
    phase: "Tahap Awal",
    title: "Konsultasi & Discovery",
    desc: "Audit kebutuhan menyeluruh, perumusan akar masalah, asesmen kelayakan teknis, dan penetapan KPI proyek terukur.",
    output: "Output: Dokumen Project Charter & BoQ",
    bg: "bg-slate-900",
  },
  {
    num: "02",
    phase: "Desain Sistem",
    title: "Perancangan & Blueprint",
    desc: "Penyusunan arsitektur sistem, wireframe UI/UX, skematik sirkuit hardware, serta skema basis data terintegrasi.",
    output: "Output: Blueprint Arsitektur & Mockup",
    bg: "bg-[#0086c9]",
  },
  {
    num: "03",
    phase: "Engineering",
    title: "Pengembangan & Perakitan",
    desc: "Rekayasa kode backend & frontend, fabrikasi PCB hardware, perakitan unit IoT, dan training model AI spesifik.",
    output: "Output: Prototipe Berfungsi & Test Suite",
    bg: "bg-[#fe7a00]",
  },
  {
    num: "04",
    phase: "Implementasi",
    title: "Deployment & Pengujian Lapangan",
    desc: "Pemasangan unit fisik di lapangan, konfigurasi cloud, uji beban (load test), serta verifikasi keamanan SSL/TLS.",
    output: "Output: Factory Acceptance Test (FAT)",
    bg: "bg-[#0086c9]",
  },
  {
    num: "05",
    phase: "Alih Kelola",
    title: "Handover & Dukungan SLA",
    desc: "Pelatihan tim operasional mitra, serah terima dokumentasi teknis lengkap, dan pengaktifan garansi SLA maintenance.",
    output: "Output: Berita Acara & Kontrak SLA",
    bg: "bg-slate-900",
  },
];

export const COMPLIANCE_BADGES: ComplianceBadge[] = [
  {
    icon: "verified_user",
    title: "NDA Prioritas Hukum",
    desc: "Penandatanganan Non-Disclosure Agreement resmi sebelum data internal diakses. Kepemilikan kode sumber & IP 100% milik klien.",
    color: "text-[#fe7a00]",
    bg: "bg-orange-50",
  },
  {
    icon: "health_and_safety",
    title: "Garansi SLA 99.9% Maintenance",
    desc: "Garansi purna-jual 6–12 bulan pasca-deployment, mencakup perbaikan bug, pemeliharaan hardware, dan kalibrasi sensor.",
    color: "text-[#0086c9]",
    bg: "bg-blue-50",
  },
  {
    icon: "security",
    title: "Keamanan OWASP Top 10",
    desc: "Standar rekayasa software aman terhadap celah injeksi SQL, deface situs, dan enkripsi transport SSL/TLS end-to-end.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: "ac_unit",
    title: "Weatherproof IP67 Iklim Tropis",
    desc: "Uji ketahanan perangkat keras outdoor terhadap siraman air, kelembapan tanah, serta sengatan panas matahari konstan.",
    color: "text-[#0086c9]",
    bg: "bg-blue-50",
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    q: "Bagaimana alur awal konsultasi dan perumusan proyek di SCI Tech?",
    a: "Kami memulai dengan sesi Technical Discovery gratis selama 1-2 hari kerja untuk memetakan akar masalah, audit infrastruktur eksisting, serta menentukan target KPI. Berdasarkan sesi tersebut, kami menerbitkan Dokumen Project Charter dan BoQ (Bill of Quantities) awal yang transparan sebelum penandatanganan kontrak kerja sama.",
  },
  {
    q: "Apakah SCI Tech melayani pengerjaan proyek kustom di luar wilayah Jember / Jawa Timur?",
    a: "Tentu. Seluruh pengembangan sistem software enterprise, model machine learning AI, dan data lakehouse dibangun secara cloud-native sehingga pengujian serta deployment dapat dilakukan dari jarak jauh ke seluruh Indonesia. Untuk unit perangkat keras IoT fisik seperti HYDRA, tim rekayasa kami siap melakukan pengiriman dan instalasi lapangan (on-site deployment) secara nasional.",
  },
  {
    q: "Bagaimana jaminan keamanan data perusahaan dan klausul kerahasiaan (NDA)?",
    a: "Kerahasiaan data industri dan reputasi mitra adalah prioritas mutlak. Sebelum pertukaran data operasional atau dokumen teknis dilakukan, kami menandatangani Non-Disclosure Agreement (NDA) berkekuatan hukum. Seluruh kode sumber, skematik, dan hak kekayaan intelektual (IP) yang dikembangkan akan diserahkan sebagai kepemilikan penuh mitra pada fase handover.",
  },
  {
    q: "Bisakah unit HYDRA diintegrasikan dengan sensor atau sistem SCADA yang sudah kami miliki?",
    a: "Sangat bisa. HYDRA Edge Controller dibangun dengan arsitektur terbuka yang mendukung protokol komunikasi industri universal seperti Modbus RTU/TCP, MQTT, RS485, I2C, serta sinyal analog 4-20mA dan digital relay. Perangkat ini dapat langsung dijembatani ke panel pompa eksisting, sensor soil moisture, solenoid valve, maupun database SCADA internal Anda.",
  },
  {
    q: "Berapa lama rata-rata estimasi durasi pengerjaan dari perancangan hingga deployment?",
    a: "Durasi proyek disesuaikan dengan skala kebutuhan. Untuk instalasi paket hardware HYDRA di lapangan rata-rata membutuhkan 2 hingga 4 minggu. Untuk pengembangan software custom enterprise atau pipeline AI analitik berkisar antara 1 hingga 3 bulan yang dibagi ke dalam siklus sprint agile 2 mingguan dengan demo berkala.",
  },
  {
    q: "Bagaimana skema pembayaran dan jaminan garansi purna-jual (SLA)?",
    a: "Kami menerapkan skema termin pembayaran transparan berbasis pencapaian milestone (Down Payment, Factory Acceptance Test, hingga Final Handover). Setiap produk dan sistem yang kami serahkan dilengkapi garansi purna-jual resmi (SLA) selama 6 hingga 12 bulan, mencakup perbaikan bug, kalibrasi sensor, serta pelatihan berkala bagi staf operasional mitra.",
  },
];

