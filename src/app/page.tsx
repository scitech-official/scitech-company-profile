"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SmartValues from "@/components/SmartValues";
import ServicesSection from "@/components/ServicesSection";
import HydraShowcase from "@/components/HydraShowcase";
import PortfolioSection from "@/components/PortfolioSection";
import WorkflowSection from "@/components/WorkflowSection";
import ComplianceSection from "@/components/ComplianceSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CompanyProfileModal from "@/components/CompanyProfileModal";
import DatasheetModal from "@/components/DatasheetModal";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("beranda");

  // Modals
  const [showCompanyProfileModal, setShowCompanyProfileModal] = useState(false);
  const [showDatasheetModal, setShowDatasheetModal] = useState(false);

  // Header shadow on scroll & Active Nav ScrollSpy
  useEffect(() => {
    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 20);

      // ScrollSpy Detection
      const sectionIds = ["kontak", "faq", "alur-kerja", "portofolio", "produk", "layanan", "tentang"];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNav(id);
          return;
        }
      }
      setActiveNav("beranda");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <Navbar
        headerScrolled={headerScrolled}
        activeNav={activeNav}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenCompanyProfile={() => setShowCompanyProfileModal(true)}
      />

      <main>
        <Hero onOpenCompanyProfile={() => setShowCompanyProfileModal(true)} />
        <SmartValues />
        <ServicesSection />
        <HydraShowcase onOpenDatasheet={() => setShowDatasheetModal(true)} />
        <PortfolioSection />
        <WorkflowSection />
        <ComplianceSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />

      <CompanyProfileModal
        isOpen={showCompanyProfileModal}
        onClose={() => setShowCompanyProfileModal(false)}
      />

      <DatasheetModal
        isOpen={showDatasheetModal}
        onClose={() => setShowDatasheetModal(false)}
      />
    </>
  );
}
