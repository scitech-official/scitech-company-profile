import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SCI Tech — Mitra Rekayasa Teknologi & Transformasi Digital Terdepan",
  description:
    "Solusi Cerdas Infrastructure Technology (SCI Tech) - Startup konsultan IT dan rekayasa data dari Jember, Jawa Timur. Menghadirkan solusi software enterprise, AI, IoT, dan data analytics hulu-ke-hilir.",
  keywords: [
    "SCI Tech",
    "Solusi Cerdas Infrastructure Technology",
    "Konsultan IT Jember",
    "Smart Farming",
    "HYDRA Edge Controller",
    "IoT Indonesia",
    "Artificial Intelligence",
    "Data Analytics",
    "Software Enterprise",
  ],
  authors: [{ name: "Gilang Maulana Bilhaq, S.Kom." }],
  openGraph: {
    title: "SCI Tech — Mitra Rekayasa Teknologi & Transformasi Digital Terdepan",
    description:
      "Mitra Rekayasa Teknologi Hulu-ke-Hilir: Software Enterprise, Kecerdasan Buatan (AI), Telemetri IoT Edge, & Analitik Data.",
    url: "https://scitech.id",
    siteName: "SCI Tech",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/Group 6.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/Group 6.png",
    apple: "/Group 6.png",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://scitech.id/#organization",
      "name": "PT Solusi Cerdas Infrastructure Technology",
      "alternateName": "SCI Tech",
      "url": "https://scitech.id",
      "logo": "https://scitech.id/Group%206.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+6289513259281",
        "contactType": "technical support & consulting",
        "email": "solusicerdasinfratech@gmail.com",
        "areaServed": "ID",
        "availableLanguage": ["id", "en"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Raden Patah VI No. 90",
        "addressLocality": "Jember",
        "addressRegion": "Jawa Timur",
        "addressCountry": "ID"
      }
    },
    {
      "@type": "Product",
      "@id": "https://scitech.id/#hydra-controller",
      "name": "HYDRA Edge Industrial Controller",
      "image": "https://scitech.id/Tampilan%20Produk%20Hydra%20Ori.jpeg",
      "description": "Perangkat keras kendali industri dan telemetri IoT edge computing dengan RTOS deterministik dan casing weatherproof IP67 untuk otomatisasi irigasi pertanian modern dan sensor industri.",
      "brand": {
        "@type": "Brand",
        "name": "SCI Tech"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://scitech.id/#organization"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://scitech.id/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Bagaimana mekanisme awal konsultasi dan perumusan proyek di SCI Tech?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kami memulai dengan sesi technical discovery gratis selama 1-2 hari untuk mengaudit kebutuhan teknis, merumuskan Project Charter, dan menyusun BoQ (Bill of Quantities) serta arsitektur solusi."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah SCI Tech melayani proyek kustom di luar wilayah Jember atau Jawa Timur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tentu. Pengembangan software enterprise, AI model, dan cloud data lakehouse dapat diakses dari seluruh Indonesia. Untuk hardware IoT seperti HYDRA, teknisi kami siap melakukan deployment fisik on-site."
          }
        },
        {
          "@type": "Question",
          "name": "Bagaimana jaminan keamanan data perusahaan dan klausul kerahasiaan (NDA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kerahasiaan data mitra dijamin oleh Non-Disclosure Agreement (NDA) berkekuatan hukum sebelum repositori atau data operasional dibuka. Seluruh kode sumber dan kekayaan intelektual (IP) menjadi milik penuh klien."
          }
        },
        {
          "@type": "Question",
          "name": "Bisakah unit HYDRA diintegrasikan dengan infrastruktur sensor yang sudah kami miliki?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sangat bisa. HYDRA mendukung protokol industri standar seperti Modbus RTU/TCP, MQTT, LoRaWAN, dan sinyal analog 4-20mA untuk disambungkan ke sensor dan SCADA eksisting."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/Group 6.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/Group 6.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-white text-slate-800 antialiased selection:bg-[#fe7a00] selection:text-white">
        {children}
      </body>
    </html>
  );
}
