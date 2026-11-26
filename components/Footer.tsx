import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/images";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact-us", label: "Contact" },
];

const galleryShots = [
  "480143923_1130191849005430_3151350967952352516_n.jpg",
  "75220750_2505337006350930_1117430227039944704_n.jpg",
  "73352236_2505337293017568_3238439619317989376_n.jpg",
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:px-10">
          <div className="flex flex-col justify-center gap-6">
            <div className="flex gap-4 text-ink">
              <a
                href="https://www.instagram.com/xtendyourself/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-terracotta"
              >
                <svg viewBox="0 0 512 512" className="h-6 w-6" fill="currentColor">
                  <path d="M338,54.63H174c-62.72,0-114,51.32-114,114V343.33c0,62.72,51.32,114,114,114H338c62.72,0,114-51.32,114-114V168.67C452,105.94,400.68,54.63,338,54.63Zm83.91,288.71A84.24,84.24,0,0,1,338,427.24H174a84.24,84.24,0,0,1-83.91-83.91V168.67A84.24,84.24,0,0,1,174,84.76H338a84.24,84.24,0,0,1,83.91,83.91Z" />
                  <path d="M255.77,148.18A107.94,107.94,0,1,0,363.71,256.13,107.94,107.94,0,0,0,255.77,148.18Zm-.52,178.71a70.68,70.68,0,1,1,70.68-70.68A70.68,70.68,0,0,1,255.25,326.9Z" />
                  <circle cx="365.44" cy="146.5" r="25.56" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/xtendyourselfsalon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-terracotta"
              >
                <svg viewBox="0 0 512 512" className="h-6 w-6" fill="currentColor">
                  <path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z" />
                </svg>
              </a>
            </div>

            <div className="border-l-2 border-terracotta/50 pl-4">
              <p className="text-sm font-semibold tracking-widest text-ink/60 uppercase">
                Follow Along
              </p>
              <a
                href="https://www.instagram.com/xtendyourself/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold tracking-wide uppercase hover:text-terracotta"
              >
                @xtendyourself
              </a>
            </div>

            <div className="border-l-2 border-terracotta/50 pl-4">
              <p className="text-lg text-ink/70">
                Your appointment. Your space.
                <br />
                Your privacy
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {galleryShots.map((f) => (
              <div key={f} className="relative aspect-[3/4] overflow-hidden">
                <Image src={img(f)} alt="" fill sizes="(min-width: 1024px) 24vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#2c6c69] text-cream-light">
        <div className="mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between gap-6 px-6 py-8 lg:flex-row lg:px-10">
          <Image
            src={img("chatgpt_image_sep_15_2026_10_35_10_am.png")}
            alt="Xtend Yourself"
            width={170}
            height={62}
            className="h-12 w-auto"
          />

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-10">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-base font-medium tracking-wide uppercase hover:text-white/70"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="border-l border-white/20 pl-6 text-sm tracking-wide uppercase">
            <p>Cave Creek, AZ</p>
            <p>By Appointment Only</p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-cream-light/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>&copy; {new Date().getFullYear()} Xtend Yourself Salon. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-and-consitions" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
