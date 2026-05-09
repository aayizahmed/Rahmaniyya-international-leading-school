import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Prevent FOIT — swap immediately to system font
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rahmaniyya International Leading School (RILS)",
    template: "%s | RILS",
  },
  description:
    "Where Knowledge Meets Character. CBSE · Moral Studies · Leadership · Excellence. Serving students from Grade 8 to Higher Secondary in Kozhikode, Kerala.",
  keywords: [
    "RILS",
    "Rahmaniyya International Leading School",
    "CBSE school Kerala",
    "Islamic school Kozhikode",
    "Vatakara school",
    "boarding school Kerala",
  ],
  authors: [{ name: "RILS", url: "https://rahmaniyyaschool.com" }],
  openGraph: {
    title: "Rahmaniyya International Leading School (RILS)",
    description:
      "Where Knowledge Meets Character. CBSE · Moral Studies · Leadership · Excellence.",
    siteName: "RILS",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Prevents a common vulnerability where browsers parse content as a different MIME type
  other: {
    "X-Content-Type-Options": "nosniff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg-light text-foreground">
        {/* Accessibility: skip-to-main-content link (hidden until focused) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <div id="main-content">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
