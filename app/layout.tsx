import type { Metadata } from "next";
import { Raleway, Playfair_Display, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Xtend Yourself | Hair Restoration & Extensions, Cave Creek AZ",
  description:
    "Personalized, private one-on-one hair care in Cave Creek, Arizona. Hair restoration, extensions, color, and complete hair transformations with Niki.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${playfair.variable} ${poppins.variable} ${wildLove.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white font-body text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
