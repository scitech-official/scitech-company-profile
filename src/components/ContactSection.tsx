"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

export default function ContactSection() {
  const kontakAnim = useInView(0.15);

  const [formMode, setFormMode] = useState<"wa" | "email">("wa");
  const [formNama, setFormNama] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formWa, setFormWa] = useState("");
  const [formLayanan, setFormLayanan] = useState("Pengembangan Software (Enterprise ERP & Cloud)");
  const [formTimeline, setFormTimeline] = useState("Segera (< 1 Bulan)");
  const [formCatatan, setFormCatatan] = useState("");
  const [formSubmittedEmail, setFormSubmittedEmail] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formMode === "wa") {
      const pesan = `Halo SCI Tech, saya ${formNama} (${formEmail}) dari perusahaan/instansi.
Saya ingin konsultasi proyek:
- Layanan: ${formLayanan}
- Target Timeline: ${formTimeline}
- Catatan: ${formCatatan ? formCatatan : "Mohon dihubungi untuk pembahasan teknis awal."}
Nomor kontak: ${formWa}`;

      window.open(`https://wa.me/6289513259281?text=${encodeURIComponent(pesan)}`, "_blank");
    } else {
      setFormSubmittedEmail(true);
      const subject = encodeURIComponent(`[RFP Proyek B2B] Permintaan Konsultasi Teknis - ${formNama}`);
      const body = encodeURIComponent(`Yth. Tim Rekayasa PT Solusi Cerdas Infrastructure Technology (SCI Tech),

Saya bermaksud mengajukan permintaan konsultasi teknis / Request for Proposal (RFP) dengan rincian sebagai berikut:

Nama & Instansi : ${formNama}
Email Resmi     : ${formEmail}
Nomor WhatsApp  : ${formWa}
Pilar Layanan   : ${formLayanan}
Target Timeline : ${formTimeline}

Kebutuhan Singkat:
${formCatatan || "Mohon dikirimkan proposal teknis awal, Project Charter, serta estimasi alokasi waktu."}

Atas perhatian dan kerja samanya, saya ucapkan terima kasih.`);

      window.location.href = `mailto:solusicerdasinfratech@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section ref={kontakAnim.ref} className="py-24 bg-white" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Direct Info */}
          <div className={`space-y-8 ${kontakAnim.inView ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="space-y-4">
              <span className="text-xs font-bold font-mono text-[#fe7a00] uppercase tracking-[0.2em]">
                Mulai Kolaborasi Strategis
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Diskusikan Kebutuhan Rekayasa Sistem Anda Bersama Kami
              </h2>
              <div className="section-divider" />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Apakah Anda merencanakan otomatisasi pertanian dengan kontroler IoT, pembangunan portal software
                enterprise, maupun pipeline AI analitik—tim rekayasa SCI Tech siap membantu memetakan solusi optimalnya.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <a
                href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20konsultasi%20proyek."
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border border-slate-200/90 bg-[#f8f9fb] hover:bg-white hover:border-[#fe7a00] hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#fe7a00] flex items-center justify-center font-bold text-xl group-hover:bg-[#fe7a00] group-hover:text-white transition-colors">
                  💬
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    WhatsApp Hotline (Respon Cepat)
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 font-mono">
                    +62 895-1325-9281
                  </div>
                  <div className="text-[11px] text-slate-500">Tersedia Senin – Sabtu, 08.00 – 17.00 WIB</div>
                </div>
              </a>

              <a
                href="mailto:solusicerdasinfratech@gmail.com?subject=Inquiry%20Proyek%20SCI%20Tech"
                className="p-5 rounded-2xl border border-slate-200/90 bg-[#f8f9fb] hover:bg-white hover:border-[#0086c9] hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0086c9] flex items-center justify-center font-bold text-xl group-hover:bg-[#0086c9] group-hover:text-white transition-colors">
                  ✉️
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Email Resmi Perusahaan
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 font-mono">
                    solusicerdasinfratech@gmail.com
                  </div>
                  <div className="text-[11px] text-slate-500">Untuk pengiriman TOR, RFP, dan dokumen kerja sama resmi</div>
                </div>
              </a>

              <div className="p-5 rounded-2xl border border-slate-200/90 bg-[#f8f9fb] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xl">
                  📍
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Kantor Pusat Rekayasa
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Jember, Jawa Timur, Indonesia</div>
                  <div className="text-[11px] text-slate-500">
                    Siap pengiriman &amp; instalasi on-site ke seluruh nusantara
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className={`${kontakAnim.inView ? "animate-fade-in-right delay-200" : "opacity-0"}`}>
            <div className="p-7 sm:p-9 rounded-3xl border border-slate-200/90 bg-[#f8f9fb] shadow-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Formulir Permintaan Konsultasi</h3>
                  <p className="text-xs text-slate-500 mt-1">Estimasi respon teknis dalam 1x24 jam kerja</p>
                </div>
                {/* Switcher Mode WA vs Email */}
                <div className="inline-flex p-1 rounded-xl bg-slate-200/80">
                  <button
                    type="button"
                    onClick={() => setFormMode("wa")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      formMode === "wa" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormMode("email")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      formMode === "email" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Email RFP
                  </button>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                    Nama Lengkap &amp; Instansi / Perusahaan *
                  </label>
                  <input
                    type="text"
                    required
                    value={formNama}
                    onChange={(e) => setFormNama(e.target.value)}
                    placeholder="Contoh: Bpk. Hendra - PT Agro Makmur Nusantara"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:border-[#fe7a00] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                      Email Kantor / Pribadi *
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:border-[#fe7a00] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formWa}
                      onChange={(e) => setFormWa(e.target.value)}
                      placeholder="0812-XXXX-XXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:border-[#fe7a00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                    Pilar Layanan yang Diminati
                  </label>
                  <select
                    value={formLayanan}
                    onChange={(e) => setFormLayanan(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:border-[#fe7a00] transition-colors"
                  >
                    <option>Pengembangan Software (Enterprise ERP &amp; Cloud)</option>
                    <option>Kecerdasan Buatan (AI Vision, NLP, &amp; Model Prediktif)</option>
                    <option>Internet of Things (IoT SCADA &amp; HYDRA Controller)</option>
                    <option>Rekayasa Data &amp; Business Intelligence Lakehouse</option>
                    <option>Konsultasi End-to-End Multidisiplin</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                    Target Timeline Pengerjaan
                  </label>
                  <select
                    value={formTimeline}
                    onChange={(e) => setFormTimeline(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:border-[#fe7a00] transition-colors"
                  >
                    <option>Segera (&lt; 1 Bulan)</option>
                    <option>Kuartal Ini (1 – 3 Bulan)</option>
                    <option>Perencanaan Strategis (&gt; 3 Bulan)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">
                    Ringkasan Kebutuhan Proyek (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    value={formCatatan}
                    onChange={(e) => setFormCatatan(e.target.value)}
                    placeholder="Jelaskan secara ringkas tantangan teknis atau tujuan sistem yang ingin dicapai..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:border-[#fe7a00] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#fe7a00] hover:bg-[#e56e00] text-white font-bold text-sm shadow-md hover:shadow-glow-orange transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>
                    {formMode === "wa" ? "Kirim Pesan via WhatsApp Resmi" : "Kirimkan Permintaan RFP via Email"}
                  </span>
                  <span>↗</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 font-mono">
                  🔒 Data Anda dilindungi klausul kerahasiaan &amp; tidak disebarluaskan.
                </p>

                {formSubmittedEmail && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center">
                    Aplikasi email Anda telah dibuka. Silakan tekan tombol kirim pada pesan draf resmi tersebut.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

