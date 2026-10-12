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
      </head>
      <body className="bg-white text-slate-800 antialiased selection:bg-[#fe7a00] selection:text-white">
        {children}
      </body>
    </html>
  );
}
