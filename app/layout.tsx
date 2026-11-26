import type { Metadata } from "next";
import { Raleway, Playfair_Display, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { BUSINESS, SITE_URL } from "@/lib/site";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const wildLove = localFont({
  src: "../public/fonts/wild-love-script.woff",
  variable: "--font-wild-love",
  display: "swap",
});

const title = "Xtend Yourself | Hair Restoration & Extensions, Cave Creek AZ";
const description =
  "Personalized, private one-on-one hair care in Cave Creek, Arizona. Hair restoration, extensions, color, and complete hair transformations with Niki.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: BUSINESS.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: BUSINESS.telephone,
  image: `${SITE_URL}/images/header.jpg`,
  areaServed: `${BUSINESS.addressLocality}, ${BUSINESS.addressRegion}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.addressCountry,
  },
  sameAs: [BUSINESS.instagram, BUSINESS.facebook],
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${playfair.variable} ${poppins.variable} ${wildLove.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white font-body text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
