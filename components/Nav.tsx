"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { img } from "@/lib/images";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[84px] bg-cream">
      <div className="flex h-full w-full items-center justify-between px-5 lg:px-12">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={img("xtend-yourself-logo-black-on-white-bg.png")}
            alt="Xtend Yourself"
            width={260}
            height={96}
            className="h-16 w-auto lg:h-20"
            fetchPriority="high"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-ink/80 uppercase hover:text-terracotta"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+14802079996"
            data-event="call_click"
            className="rounded-full bg-teal px-5 py-2.5 text-xs font-semibold tracking-wide text-white uppercase hover:bg-teal-dark"
          >
            Book Your Appointment
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            {open ? (
              <path strokeWidth={2} strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeWidth={2} strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-cream px-6 pb-6 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium tracking-wide text-ink uppercase"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+14802079996"
            data-event="call_click"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-teal px-6 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase"
          >
            Book Your Appointment
          </a>
        </nav>
      )}
    </header>
  );
}
