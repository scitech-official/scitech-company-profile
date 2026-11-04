"use client";

import Image from "next/image";

interface NavbarProps {
  headerScrolled: boolean;
  activeNav: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onOpenCompanyProfile: () => void;
}

export default function Navbar({
  headerScrolled,
  activeNav,
  mobileMenuOpen,
  setMobileMenuOpen,
  onOpenCompanyProfile,
}: NavbarProps) {
  const navItems = [
    { label: "Layanan", href: "#layanan", id: "layanan" },
    { label: "Produk", href: "#produk", id: "produk" },
    { label: "Portofolio", href: "#portofolio", id: "portofolio" },
    { label: "Alur Kerja", href: "#alur-kerja", id: "alur-kerja" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "Kontak", href: "#kontak", id: "kontak" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
        headerScrolled ? "border-slate-200/90 shadow-xs" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Brand Logo */}
          <a aria-label="Beranda SCI Tech" className="flex items-center gap-3 group" href="#">
            <div className="relative flex items-center gap-2">
              <div className="relative h-9 w-9 shrink-0">
                <Image
                  src="/Group 6.png"
                  alt="SCI Tech Emblem"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="relative h-6 w-32 shrink-0">
                <Image src="/Group 14.png" alt="SCI Tech Logo" fill className="object-contain" priority />
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.label}
                  className={`text-[13px] font-medium tracking-wide transition-all relative py-1 ${
                    isActive ? "text-[#fe7a00] font-semibold" : "text-slate-600 hover:text-[#fe7a00]"
                  }`}
                  href={item.href}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fe7a00] rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenCompanyProfile}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-all hover:bg-slate-50 cursor-pointer"
            >
              <span>📄 Company Profile</span>
            </button>
            <a
              className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#fe7a00] hover:bg-[#e56e00] shadow-sm hover:shadow-glow-orange transition-all duration-300"
              href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20konsultasikan%20proyek%20teknologi."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Konsultasi Proyek</span>
              <span className="text-sm">↗</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenCompanyProfile}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-semibold cursor-pointer"
              title="Unduh Company Profile"
            >
              📄 PDF
            </button>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 animate-fade-in-up">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeNav === item.id
                      ? "bg-orange-50 text-[#fe7a00] font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCompanyProfile();
                }}
                className="w-full text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
              >
                📄 Unduh Company Profile (PDF)
              </button>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-[#fe7a00] hover:bg-[#e56e00] text-white text-xs font-bold shadow-md transition-colors"
                href="https://wa.me/6289513259281?text=Halo%20SCI%20Tech,%20saya%20ingin%20konsultasikan%20proyek%20teknologi."
                rel="noopener noreferrer"
                target="_blank"
              >
                Konsultasikan Proyek Anda ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

