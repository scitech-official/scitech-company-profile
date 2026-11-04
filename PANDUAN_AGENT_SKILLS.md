# 📚 Panduan Lengkap Agent Skills (Addy Osmani)

Dokumen ini berisi panduan referensi cepat untuk **25 Agent Skills** yang telah terpasang secara global. Anda dapat membuka file ini kapan saja sebagai cheatsheet ketika membutuhkan panduan, audit kode, optimasi, atau perancangan arsitektur.

---

## 🧭 Navigasi Kategori Skills

1. [Perencanaan & Penajaman Kebutuhan (Planning & Specs)](#1-perencanaan--penajaman-kebutuhan)
2. [Arsitektur & Pengembangan Kode (Development & Architecture)](#2-arsitektur--pengembangan-kode)
3. [Pengujian & Kualitas Kode (Testing & Code Quality)](#3-pengujian--kualitas-kode)
4. [Performa, Keamanan & Observabilitas (Performance & Security)](#4-performa-keamanan--observabilitas)
5. [Git, Rilis & Pemeliharaan (Git, Release & Migration)](#5-git-rilis--pemeliharaan)

---

## 1. Perencanaan & Penajaman Kebutuhan

### 💡 `interview-me`
* **Kegunaan**: Menggali kebutuhan dan maksud sebenarnya dari Anda melalui wawancara satu per satu pertanyaan secara mendalam sebelum mulai membuat rencana atau menulis kode.
* **Kapan Digunakan**: Ketika requirement proyek masih samar, Anda punya ide tapi belum detail, atau ingin menguji asumsi sebelum coding.
* **Contoh Perintah**:
  > *"Gunakan skill `interview-me` untuk mewawancarai saya tentang fitur registrasi multi-role yang ingin kita buat."*

---

### 💡 `idea-refine`
* **Kegunaan**: Mematangkan ide mentah melalui proses berpikir divergen (eksplorasi berbagai sudut pandang) dan konvergen (penyempitan ke solusi paling optimal).
* **Kapan Digunakan**: Saat brainstorming konsep produk baru atau saat membandingkan beberapa pendekatan teknis.
* **Contoh Perintah**:
  > *"Saya punya ide membuat sistem bookmarking untuk landing page ini. Gunakan `idea-refine` untuk menguji kelayakan dan opsinya."*

---

### 📋 `spec-driven-development`
* **Kegunaan**: Menulis spesifikasi teknis (PRD/Design Doc/Spec) yang jelas dan terstruktur sebelum menulis satu baris kode pun.
* **Kapan Digunakan**: Saat memulai fitur kompleks yang menyentuh banyak modul atau melibatkan banyak komponen independen.
* **Contoh Perintah**:
  > *"Tolong buatkan spesifikasi teknis lengkap dengan `spec-driven-development` untuk fitur integrasi payment gateway."*

---

### 📋 `planning-and-task-breakdown`
* **Kegunaan**: Memecah spesifikasi atau proyek besar menjadi urutan tugas-tugas kecil (actionable tasks) yang terstruktur dan siap dieksekusi secara bertahap.
* **Kapan Digunakan**: Setelah spesifikasi selesai dan siap diimplementasikan, atau saat proyek terasa terlalu besar untuk dimulai sekaligus.
* **Contoh Perintah**:
  > *"Pecah PRD ini menjadi daftar tahapan pengerjaan (task breakdown) menggunakan skill `planning-and-task-breakdown`."*

---

### ⚖️ `doubt-driven-development`
* **Kegunaan**: Melakukan tinjauan kritis (adversarial review) terhadap asumsi dan keputusan arsitektur penting untuk menemukan celah atau *hidden failure modes*.
* **Kapan Digunakan**: Sebelum mengeksekusi keputusan berisiko tinggi (misal: skema database sensitif, sistem auth, migrasi data besar).
* **Contoh Perintah**:
  > *"Gunakan `doubt-driven-development` untuk menguji apakah arsitektur autentikasi kita ini memiliki celah atau kelemahan tersembunyi."*

---

### 📏 `constraint-driven-development`
* **Kegunaan**: Menetapkan standar dan batasan kualitas baku proyek (misal: batas toleransi bundle size, standar aksesibilitas, strict linting) agar asisten coding tidak menurunkan standar secara diam-diam.
* **Kapan Digunakan**: Di awal proyek untuk membuat berkas `CONSTRAINTS.md` yang mengunci standar kualitas tim.
* **Contoh Perintah**:
  > *"Gunakan `constraint-driven-development` untuk menetapkan batasan kualitas performa dan accessibility pada landing page ini."*

---

## 2. Arsitektur & Pengembangan Kode

### 🎨 `frontend-ui-engineering`
* **Kegunaan**: Membangun antarmuka (UI) berkualitas produksi, responsif, aksesibel (WCAG), dengan arsitektur komponen dan state management yang bersih.
* **Kapan Digunakan**: Saat mendesain atau mempercantik halaman web, membuat komponen reusable (Tailwind, React/Next.js), atau memperbaiki layout.
* **Contoh Perintah**:
  > *"Dengan skill `frontend-ui-engineering`, buat komponen Hero Section yang modern, responsif mobile, dan memenuhi standar WCAG AA."*

---

### 🔌 `api-and-interface-design`
* **Kegunaan**: Merancang antarmuka publik, REST API, GraphQL, atau interface TypeScript yang konsisten, mudah dipahami, dan tahan lama (stabil).
* **Kapan Digunakan**: Saat merancang kontrak data antara frontend dan backend, atau interface antar modul library.
* **Contoh Perintah**:
  > *"Rancang interface TypeScript dan endpoint response untuk modul kontak form menggunakan `api-and-interface-design`."*

---

### 🧩 `incremental-implementation`
* **Kegunaan**: Memandu penulisan kode dalam irisan-irisan tipis (*thin verifiable slices*) yang bisa langsung diverifikasi tiap tahapnya, tanpa membuat PR raksasa yang rentan error.
* **Kapan Digunakan**: Saat mengimplementasikan fitur besar yang menyentuh lebih dari 2–3 file sekaligus.
* **Contoh Perintah**:
  > *"Gunakan pendekatan `incremental-implementation` untuk menambahkan fitur dark mode ke landing page ini tahap demi tahap."*

---

### 📖 `source-driven-development`
* **Kegunaan**: Memastikan setiap implementasi kode berakar langsung pada dokumentasi resmi library/framework terbaru, bukan sekadar tebakan atau pola lama yang sudah deprecated.
* **Kapan Digunakan**: Saat menggunakan library baru, Next.js App Router terbaru, Tailwind v4, atau API yang sering berubah.
* **Contoh Perintah**:
  > *"Gunakan `source-driven-development` untuk mengimplementasikan optimasi gambar Next.js sesuai dokumentasi resmi versi terbaru."*

---

### 🧠 `context-engineering`
* **Kegunaan**: Mengoptimalkan struktur file aturan (`AGENTS.md`, `.agent/rules`) dan tata kelola konteks agar agen AI bekerja dengan efisien dan tepat sasaran.
* **Kapan Digunakan**: Jika agen AI mulai sering melupakan instruksi penting atau ketika ingin menata aturan panduan proyek.
* **Contoh Perintah**:
  > *"Gunakan `context-engineering` untuk menyusun panduan konteks kerja yang ringkas di repositori ini."*

---

## 3. Pengujian & Kualitas Kode

### 🧪 `test-driven-development` (TDD)
* **Kegunaan**: Menjalankan siklus Red-Green-Refactor yang disiplin (tulis tes yang gagal terlebih dahulu, buat kodenya hingga lolos, lalu rapikan).
* **Kapan Digunakan**: Saat membuat fungsi utilitas, algoritma bisnis penting, parser, atau memperbaiki bug (menulis regression test dulu).
* **Contoh Perintah**:
  > *"Gunakan `test-driven-development` untuk membuat fungsi validasi nomor telepon dan email."*

---

### 🔍 `code-review-and-quality`
* **Kegunaan**: Melakukan review kode multi-dimensi (5 aspek: *Correctness*, *Readability*, *Architecture*, *Security*, *Performance*) dengan standar kualitas tinggi sebelum digabungkan (*merge*).
* **Kapan Digunakan**: Sebelum commit/merge fitur baru, atau saat ingin mengevaluasi kode yang baru dibuat.
* **Contoh Perintah**:
  > *"Review kode pada file `src/app/page.tsx` menggunakan panduan 5-axis dari skill `code-review-and-quality`."*

---

### ✂️ `code-simplification`
* **Kegunaan**: Menyederhanakan kode yang terlalu rumit, mengurangi nesting bertingkat, menghapus dead-code, dan meningkatkan keterbacaan tanpa mengubah fungsionalitas aslinya.
* **Kapan Digunakan**: Saat sebuah fungsi atau file terasa berantakan, sulit dipahami, atau memiliki banyak baris redundan.
* **Contoh Perintah**:
  > *"Sederhanakan komponen navbar ini menggunakan skill `code-simplification` agar lebih ringkas dan mudah dibaca."*

---

### 🐛 `debugging-and-error-recovery`
* **Kegunaan**: Pelacakan akar masalah (*root-cause analysis*) secara sistematis ketika terjadi error atau crash, alih-alih sekadar menebak-nebak perbaikan.
* **Kapan Digunakan**: Saat build gagal, runtime error muncul di konsol, atau logika program berjalan di luar harapan.
* **Contoh Perintah**:
  > *"Bantu saya mendiagnosis dan memperbaiki error build ini dengan pendekatan `debugging-and-error-recovery`."*

---

### 🌐 `browser-testing-with-devtools`
* **Kegunaan**: Melakukan pengujian langsung di lingkungan browser nyata menggunakan Chrome DevTools (inspeksi DOM, console log, network requests, screenshot visual).
* **Kapan Digunakan**: Saat ingin memverifikasi tampilan visual responsive, mencari layout shift (CLS), atau memeriksa error network API.
* **Contoh Perintah**:
  > *"Jalankan inspeksi pada halaman kontak menggunakan `browser-testing-with-devtools` untuk mengecek apakah ada error di console."*

---

## 4. Performa, Keamanan & Observabilitas

### ⚡ `performance-optimization`
* **Kegunaan**: Optimasi performa menyeluruh: frontend (Core Web Vitals: LCP, INP, CLS), ukuran bundle JavaScript, optimasi gambar/font, caching, hingga query backend.
* **Kapan Digunakan**: Saat landing page terasa lambat dibuka, skor Lighthouse rendah, atau aset web terlalu berat.
* **Contoh Perintah**:
  > *"Gunakan skill `performance-optimization` untuk menganalisis dan mempercepat waktu loading landing page ini."*

---

### 🛡️ `security-and-hardening`
* **Kegunaan**: Memperkuat keamanan aplikasi dari kerentanan OWASP Top 10, sanitasi input user, pengamanan header HTTP, proteksi XSS/CSRF, dan mitigasi risiko supply-chain package.
* **Kapan Digunakan**: Sebelum aplikasi live, saat menangani formulir input publik, atau saat mengaudit dependensi npm.
* **Contoh Perintah**:
  > *"Audit keamanan formulir pesan kontak ini dengan `security-and-hardening` untuk mencegah XSS dan spam injection."*

---

### 📊 `observability-and-instrumentation`
* **Kegunaan**: Menambahkan instrumentasi logging terstruktur, metrik performa, dan error tracking agar kondisi aplikasi di production mudah dipantau dan dilacak.
* **Kapan Digunakan**: Saat menyiapkan aplikasi untuk production atau saat perlu memonitor event penting pengguna (misal: klik CTA, form submit).
* **Contoh Perintah**:
  > *"Terapkan logging terstruktur dan pelacakan event CTA menggunakan `observability-and-instrumentation`."*

---

## 5. Git, Rilis & Pemeliharaan

### 🌿 `git-workflow-and-versioning`
* **Kegunaan**: Memandu penataan commit atomik (*Conventional Commits*), strategi branching, pembuatan pull request rapi, dan penentuan versi (Semantic Versioning).
* **Kapan Digunakan**: Saat merapikan riwayat commit git, menyiapkan changelog, atau membuat release tag.
* **Contoh Perintah**:
  > *"Bantu saya merapikan perubahan hari ini menjadi commit-commit atomik yang bersih dengan `git-workflow-and-versioning`."*

---

### 🚀 `shipping-and-launch`
* **Kegunaan**: Checklist komprehensif pra-peluncuran (*pre-flight check*), memastikan SEO, metadata sosial (Open Graph), favicon, SSL, fallback error page, dan konfigurasi hosting siap live.
* **Kapan Digunakan**: Ketika proyek sudah selesai dikembangkan dan siap dideploy ke server/domain publik.
* **Contoh Perintah**:
  > *"Gunakan checklist `shipping-and-launch` untuk memastikan landing page ini siap dipublikasikan ke publik."*

---

### 🔄 `ci-cd-and-automation`
* **Kegunaan**: Menyiapkan pipeline CI/CD otomatis (misal: GitHub Actions) untuk menjalankan linter, typecheck, testing, dan deploy otomatis saat merge ke main branch.
* **Kapan Digunakan**: Saat ingin mengotomatiskan pengecekan kualitas kode sebelum kode di-push.
* **Contoh Perintah**:
  > *"Buatkan file workflow GitHub Actions menggunakan `ci-cd-and-automation` untuk otomatis menjalankan lint dan build Next.js."*

---

### 📦 `deprecation-and-migration`
* **Kegunaan**: Memandu proses pembaruan dependensi besar atau migrasi kode lawas ke pola modern tanpa menimbulkan downtime atau kerusakan fungsi.
* **Kapan Digunakan**: Saat mengupgrade Next.js ke versi terbaru, mengganti library styling, atau merestrukturisasi folder proyek.
* **Contoh Perintah**:
  > *"Gunakan `deprecation-and-migration` untuk memandu migrasi komponen dari pola lama ke arsitektur modern."*

---

### 📝 `documentation-and-adrs`
* **Kegunaan**: Mendokumentasikan keputusan arsitektur penting (*Architecture Decision Records* / ADR) dan panduan teknis agar pengembang di masa depan memahami alasan di balik suatu keputusan.
* **Kapan Digunakan**: Setelah menyepakati keputusan desain penting (misal: pemilihan library form, CMS headless, dll.).
* **Contoh Perintah**:
  > *"Tuliskan berkas ADR untuk keputusan pemilihan Tailwind CSS dan Lucide Icons menggunakan `documentation-and-adrs`."*

---

### 🧰 `using-agent-skills`
* **Kegunaan**: Meta-panduan yang menentukan skill mana yang paling tepat untuk situasi tertentu, atau cara mengombinasikan beberapa skill untuk menyelesaikan alur kerja yang panjang.
* **Kapan Digunakan**: Saat Anda ragu skill apa yang harus dipakai untuk suatu masalah.
* **Contoh Perintah**:
  > *"Saya ingin merombak seluruh halaman beranda, tolong gunakan `using-agent-skills` untuk memetakan alur skill apa saja yang harus kita lewati."*

---

> [!TIP]
> **Cara Paling Mudah Memanggil Skill:**
> Anda tidak harus menghafal perintah kaku. Cukup sebutkan nama skillnya di pesan obrolan, misalnya:
> *"Tolong optimalkan Hero Section pakai skill `frontend-ui-engineering` dan pastikan kecepatannya dengan `performance-optimization`."*

