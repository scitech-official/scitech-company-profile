# PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Project Name:** Pengembangan Landing Page B2B SCI Tech
**Document Status:** Draft
**Date:** Oktober 2026
**Author:** Gilang Maulana Bilhaq, S.Kom. (Principal Consultant & Lead Engineer)

## 1. Tujuan Produk (Objective)
Membangun *landing page* interaktif berstandar industri untuk Solusi Cerdas Infrastructure Technology (SCI Tech). Platform ini berfungsi sebagai representasi digital utama (digital storefront) untuk menarik klien B2B, memamerkan keahlian rekayasa teknologi hulu-ke-hilir, dan meningkatkan konversi permintaan konsultasi layanan (leads generation).

## 2. Target Audiens (Target Audience)
*   Pemilik bisnis dan manajemen perusahaan (B2B) di skala regional (Jawa Timur) maupun nasional yang membutuhkan transformasi digital.
*   Pemangku kepentingan di sektor agrikultur yang mencari solusi IoT seperti *smart farming* dan irigasi otomatis.
*   Instansi pemerintah atau lembaga pendidikan (seperti studi kasus Kecamatan Pasirian).

## 3. Spesifikasi Fungsional (Functional Requirements - FR)

*   **FR1: Navigasi Global (Header)**
    *   Harus memiliki *sticky navbar* yang menampilkan Logo SCI.
    *   Tautan navigasi (Anchor links) ke bagian: Layanan, Produk, Portofolio, dan Kontak.
    *   Satu tombol *Call to Action* (CTA) statis di pojok kanan atas.
*   **FR2: Hero Section**
    *   Menampilkan *Headline* utama dan deskripsi singkat sebagai startup konsultan IT dan rekayasa data dari Jember.
    *   Menampilkan tombol CTA utama "Konsultasikan Proyek Anda" yang mengarah langsung ke WhatsApp atau Email perusahaan.
*   **FR3: Section Tentang Kami & Nilai SMART**
    *   Menampilkan grid 5 kartu untuk mempresentasikan nilai SMART (Smart & Scalable, Measurable Impact, Agility & Adaptability, Reliability & Integrity, Transformative Collaboration).
*   **FR4: Pilar Layanan (Services)**
    *   Sistem *tabbing* atau 4 kolom untuk menampilkan: Pengembangan Software, Artificial Intelligence, Internet of Things, dan Analisis Data.
    *   Masing-masing menampilkan deksripsi layanan spesifik (misal: integrasi model LLM untuk AI, atau pembuatan dashboard BI untuk data).
*   **FR5: Showcase Produk Utama**
    *   Menampilkan spesifikasi HYDRA Main Device (Processor ESP32, Dual-Control System, dll).
    *   Menyertakan status produk ("Ready & Implemented").
*   **FR6: Etalase Portofolio (Case Studies)**
    *   Menampilkan *carousel* atau *grid* studi kasus proyek: Ramadhan Camp, HYDRA Greenhouse, SPK Pasirian, AI Radar Jember, dan Filter Spam Judi Online.
    *   Fokus menampilkan matriks "Measurable Impact" (contoh: Efisiensi Waktu 85%, Akurasi Presisi 96%).
*   **FR7: Alur Kerja (Timeline)**
    *   Implementasi komponen *timeline* visual untuk 5 tahap proses kerja: Konsultasi, Perancangan, Pengembangan, Deployment, hingga Handover.
*   **FR8: Footer & Penutup**
    *   Menampilkan alamat operasional lengkap di Jl. Raden Patah VI No. 90, Jember.
    *   Tautan ke surel (solusicerdasinfratech@gmail.com) dan kontak telepon/WhatsApp.

## 4. Spesifikasi Non-Fungsional (Non-Functional Requirements - NFR)
*   **Performa:** Waktu muat (*First Contentful Paint*) harus di bawah 2.5 detik pada jaringan 4G.
*   **Responsivitas:** Wajib menggunakan pendekatan *Mobile-First Design* mengingat mayoritas klien mengakses informasi melalui *smartphone*.
*   **SEO:** Implementasi *meta tags*, *alt-text* pada gambar, dan struktur *heading* yang optimal (H1, H2, H3).
*   **Keamanan:** Wajib menggunakan sertifikat SSL/TLS untuk enkripsi data pengunjung (HTTPS).

## 5. UI/UX & Design Guidelines
*   **Identitas Visual Utama:** *Corporate-Tech* yang bersih dan modern.
*   **Sistem Warna:**
    *   *Primary Color:* Biru (`#0086c9`) untuk *header*, *background footer*, dan teks judul.
    *   *Action Color:* Oranye (`#fe7a00`) dikhususkan untuk tombol CTA, *hover states*, dan indikator aktif agar mendorong konversi klik.
*   **Tipografi:** *Poppins* (Heading) dan *Inter* (Body).
*   **Aturan Animasi Interaktif:**
    *   Tombol oranye memancarkan bayangan halus (glow) saat di-*hover*.
    *   Komponen portofolio memunculkan matriks keberhasilan dari bawah saat disentuh/kursor diarahkan.
    *   Garis proses kerja terisi secara dinamis dengan warna oranye saat *scroll* ke bawah.

## 6. Rekomendasi Tech Stack
Berdasarkan standar teknologi SCI Tech yang terbukti tangguh, *landing page* ini direkomendasikan untuk dibangun menggunakan:
*   **Front-End Framework:** Next.js (React.js) untuk performa SEO (*Server-Side Rendering*) yang optimal.
*   **Styling:** Tailwind CSS agar penyesuaian kustomisasi warna (`#0086c9` dan `#fe7a00`) lebih cepat.
*   **Hosting/Deployment:** VPS atau Google Cloud Platform (GCP).

## 7. Metrik Kesuksesan (Success Metrics)
*   **Conversion Rate:** Persentase pengunjung yang menekan tombol CTA menuju WhatsApp atau Email.
*   **Bounce Rate:** Menjaga rasio pentalan di bawah 45% (diukur melalui Google Analytics).
*   **Average Session Duration:** Pengguna menghabiskan rata-rata >1.5 menit membaca studi kasus portofolio.