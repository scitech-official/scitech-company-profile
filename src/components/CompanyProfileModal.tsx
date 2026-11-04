"use client";

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyProfileModal({ isOpen, onClose }: CompanyProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in-up">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-[#0a1120] text-white flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-bold font-mono text-[#fe7a00] uppercase tracking-widest">
              Dokumen Resmi B2B
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">Profil Perusahaan SCI Tech</h3>
            <p className="text-xs text-slate-300">
              PT Solusi Cerdas Infrastructure Technology • Jember, Jawa Timur
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-5 text-xs text-slate-600 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1 font-display">Tentang Organisasi</h4>
            <p className="leading-relaxed">
              SCI Tech adalah startup konsultan teknologi dan rekayasa data independen yang beroperasi dari Jember,
              Jawa Timur. Menghadirkan solusi arsitektur hulu-ke-hilir mulai dari perancangan sirkuit perangkat keras
              IoT, otomasi smart farming, audit algoritma AI, hingga pembangunan software skala enterprise.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div>
              <span className="text-[10px] font-bold font-mono text-slate-400 uppercase">Kantor &amp; Lab</span>
              <div className="font-semibold text-slate-800 text-[11px] mt-0.5">
                Jl. Raden Patah VI No. 90, Jember
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold font-mono text-slate-400 uppercase">Lead Consultant</span>
              <div className="font-semibold text-slate-800 text-[11px] mt-0.5">
                Gilang Maulana Bilhaq, S.Kom.
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold font-mono text-slate-400 uppercase">Fokus Pasar</span>
              <div className="font-semibold text-slate-800 text-[11px] mt-0.5">
                B2B, Sektor Publik &amp; Agrikultur
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold font-mono text-slate-400 uppercase">Kerahasiaan</span>
              <div className="font-semibold text-emerald-600 text-[11px] mt-0.5">
                Perjanjian Kerahasiaan (NDA) Tersedia
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2 font-display">Pilar Rekayasa Utama</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <li className="flex items-center gap-2">
                <span className="text-[#fe7a00] font-bold">✓</span> Pengembangan Software Cloud &amp; ERP
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0086c9] font-bold">✓</span> Unit Perangkat Keras HYDRA IoT Controller
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fe7a00] font-bold">✓</span> Computer Vision &amp; Model NLP Terapan
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0086c9] font-bold">✓</span> Pipeline Analisis Data &amp; Dasbor BI
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-slate-500 font-mono">
            Format: PDF Ringkasan Portofolio &amp; Legalitas Teknis
          </span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              Tutup
            </button>
            <a
              href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20mohon%20kirimkan%20dokumen%20PDF%20Company%20Profile%20dan%20Portofolio%20Lengkap."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-5 py-2.5 rounded-full bg-[#fe7a00] hover:bg-[#e56e00] text-xs font-bold text-white shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span>Minta Berkas PDF via WA</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

