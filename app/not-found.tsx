import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Xtend Yourself",
  description: "The page you're looking for couldn't be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-cream-light py-24 text-center">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-4xl font-semibold sm:text-5xl">Page Not Found</h1>
        <p className="mt-4 text-ink/70">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-teal px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase hover:bg-teal-dark"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
