import Link from "next/link";

export const metadata = {
  title: "What Are You Looking For? | Xtend Yourself",
};

const paths = [
  {
    label: "Cuts, Colors & Salon Services",
    href: "https://xtendyourself.glossgenius.com/services",
  },
  {
    label: "Extensions & Hair Restoration",
    href: "/contact-us",
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
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
