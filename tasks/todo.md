# 📋 Rencana Peningkatan UI & Refaktorisasi Modular SCI Tech

## Ringkasan Proyek
- **Tujuan**: Transformasi tampilan landing page SCI Tech menjadi gaya *Modern High-Tech Engineering*, peningkatan tipografi estetik (Inter + Space Grotesk + JetBrains Mono), perombakan interaktif Showcase Fisik HYDRA (Hotspot Pins) & Filter Portofolio, serta restrukturisasi kode monolitik menjadi komponen modular yang bersih.
- **Standar Eksekusi**: Sesuai skill `planning-and-task-breakdown`, `frontend-ui-engineering`, dan `incremental-implementation`.

---

## Daftar Tugas (Todo List)

### Fase 1: Tipografi Estetik & Desain Dasar (High-Tech Foundation)
- [x] **1.1** Tambahkan font `JetBrains_Mono` di `src/app/layout.tsx` untuk spesifikasi teknis, badge, dan metrik telemetri.
- [x] **1.2** Perbarui `src/app/globals.css` dengan utility class tipografi modern, kartu bergradasi halus (*subtle tech glow*), dan efek visual *hotspot pin*.

### Fase 2: Ekstraksi Data & Arsitektur Komponen Modular
- [x] **2.1** Buat berkas data terpusat `src/data/landingData.ts` (memindahkan data SMART values, layanan, portofolio, timeline, faq, spek teknis).
- [x] **2.2** Buat `src/components/Navbar.tsx` & `src/components/Footer.tsx`.
- [x] **2.3** Buat `src/components/Hero.tsx` (headline tajam, CTA, preview badge).
- [x] **2.4** Buat `src/components/SmartValues.tsx` & `src/components/ServicesSection.tsx`.
- [x] **2.5** Buat `src/components/WorkflowSection.tsx`, `src/components/ComplianceSection.tsx`, `src/components/FaqSection.tsx`, `src/components/ContactSection.tsx`, dan `src/components/CompanyProfileModal.tsx`.

### Fase 3: Perombakan Interaktif HYDRA Hardware Showcase
- [x] **3.1** Buat `src/components/HydraShowcase.tsx` dengan fitur **Interactive Hotspot Pins**:
  - Titik pin pulsasi berdenyut pada foto fisik controller HYDRA (LCD Telemetri, Keypad 4x4, Casing IP67, Edge Engine ESP32).
  - Kartu popover/tooltip interaktif saat pin dipilih/di-hover.
  - Tab spesifikasi teknis cepat (Edge Computing, Daya Rendah, Ketahanan Lapangan).

### Fase 4: Perombakan Portofolio Interaktif (Kategori Filter)
- [x] **4.1** Buat `src/components/PortfolioSection.tsx` dengan fitur **Interactive Category Filter**:
  - Filter tombol: *Semua*, *Smart Farming & IoT*, *AI & NLP*, *Software Enterprise*, *Sektor Publik*.
  - Desain kartu portofolio berkelas dengan badge metrik dampak nyata (*Measurable Impact*) dan tag teknologi ber-font mono.

### Fase 5: Integrasi di `page.tsx` & Verifikasi Sistem
- [x] **5.1** Rangkai seluruh komponen modular di `src/app/page.tsx` sehingga berkas menjadi bersih, ramping, dan deklaratif.
- [x] **5.2** Jalankan validasi `npm run build` untuk memverifikasi TypeScript, dependensi, dan rendering berjalan tanpa error.

