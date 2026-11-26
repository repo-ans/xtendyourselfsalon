import type { Metadata } from "next";
import Link from "next/link";

const title = "What Are You Looking For? | Xtend Yourself";
const description =
  "Call or text to book a consultation for salon services, extensions, or hair restoration at Xtend Yourself in Cave Creek, Arizona.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
  openGraph: { title, description, url: "/experience", type: "website", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description },
};

const paths = [
  {
    label: "Cuts, Colors & Salon Services",
    href: "tel:+14802079996",
    event: "call_click",
  },
  {
    label: "Extensions & Hair Restoration",
    href: "/contact-us",
    event: undefined,
  },
];

export default function ExperiencePage() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream-light py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">
          What are you looking for today?
        </h1>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {paths.map((p) => (
            <Link
              key={p.label}
              href={p.href}
              data-event={p.event}
              className="rounded-2xl border border-terracotta/30 bg-white px-8 py-10 text-lg font-semibold text-ink shadow-sm transition hover:border-terracotta hover:shadow-md"
            >
              {p.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
