import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/siteConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
metadataBase: new URL("https://svetsedset-ventures.com.ng"),

  title: {
    default: "Svetsedset Ventures | Lagos, Nigeria",
    template: "%s | Svetsedset Ventures",
  },

  description:
    "Svetsedset Ventures provides security systems, food supply, logistics and transportation, sales and branding, interior finishing, furnishing, and ground contracting services across Lagos and Nigeria.",

  keywords: [
    "Svetsedset Ventures",
    "CCTV installation Lagos",
    "security systems Lagos",
    "food wholesale Lagos",
    "food supply Nigeria",
    "logistics Lagos",
    "transportation Nigeria",
    "branding Lagos",
    "interior finishing Lagos",
    "tiling Lagos",
    "furniture supply Lagos",
    "ground contracting Lagos",
    "general contracting Nigeria",
  ],

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  applicationName: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://svetsedset-ventures.com.ng",
    siteName: siteConfig.name,
    title: "Svetsedset Ventures | Lagos, Nigeria",
    description:
      "Security, food supply, logistics, branding, interior finishing, furnishing and ground contracting — one trusted name in Lagos, Nigeria.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Svetsedset Ventures",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Svetsedset Ventures | Lagos, Nigeria",
    description:
      "Security, food supply, logistics, branding, interior finishing, furnishing and ground contracting.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://svetsedset-ventures.com.ng/#business",

              name: siteConfig.name,

              url: "https://svetsedset-ventures.com.ng",

              logo: {
                "@type": "ImageObject",
                url: "https://svetsedset-ventures.com.ng/logo-icon.png",
              },

              image:
                "https://svetsedset-ventures.com.ng/og-image.png",

              description:
                "Svetsedset Ventures provides security systems, food supply, logistics and transportation, sales and branding, interior finishing, furnishing, and ground contracting services.",

              telephone: siteConfig.phoneDisplay,
              email: siteConfig.email,

              foundingDate: siteConfig.founded,

              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address,
                addressLocality: "Lagos",
                addressRegion: "Lagos",
                addressCountry: "NG",
              },

              areaServed: {
                "@type": "Country",
                name: "Nigeria",
              },

              serviceType: [
                "Security Systems",
                "CCTV Installation",
                "Food Supply",
                "Logistics and Transportation",
                "Sales and Branding",
                "Interior Finishing",
                "Tiling",
                "Furnishing",
                "Ground Contracting",
              ],

              priceRange: "$$",
            }),
          }}
        />
      </head>

      <body
        className={`${playfair.variable} ${manrope.variable} antialiased`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}