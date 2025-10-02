import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/ui";
import PerformanceTracker from '@/components/PerformanceTracker';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "AL HADI EXPORTS - Premium Garments Manufacturer & Exporter",
  description: "Leading garments manufacturer and exporter based in Karachi, Pakistan. Specializing in high-quality knit fashion and retail garments for global markets.",
  keywords: "garments manufacturer, textile exporter, knit fashion, Pakistan garments, clothing manufacturer",
  authors: [{ name: "AL HADI EXPORTS" }],
  openGraph: {
    title: "AL HADI EXPORTS - Premium Garments Manufacturer",
    description: "Leading garments manufacturer and exporter based in Karachi, Pakistan",
    type: "website",
    locale: "en_US",
    siteName: "AL HADI EXPORTS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AL HADI EXPORTS - Premium Garments Manufacturer",
    description: "Leading garments manufacturer and exporter based in Karachi, Pakistan",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://alhadiexports.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AL HADI EXPORTS",
              "description": "Leading garments manufacturer and exporter based in Karachi, Pakistan",
              "url": "https://alhadiexports.com",
              "logo": "https://alhadiexports.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-21-1234567",
                "contactType": "sales",
                "areaServed": ["US", "EU", "UK", "CA", "AU"],
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://linkedin.com/company/alhadiexports",
                "https://facebook.com/alhadiexports"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Garment Factory Area",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "postalCode": "74000",
                "addressCountry": "PK"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen pt-[120px] lg:pt-[140px]">{children}</main>
        <Footer />
        {/* PerformanceTracker temporarily removed */}
      </body>
    </html>
  );
}
