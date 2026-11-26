import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/images";
import { altFor } from "@/lib/altText";
import { BUSINESS, SITE_URL } from "@/lib/site";
import CtaBand from "@/components/CtaBand";

const trainings = [
  "Great Lengths",
  "Shrink Link",
  "Dream Catchers",
  "Skinny Weft",
  "Chemo Girls Extensions",
  "Micro-Bead Extensions",
];

const title = "About Niki | Hair Restoration Specialist Cave Creek AZ";
const description =
  "Nearly four decades behind the chair — meet Niki Z., hair artisan and owner of Xtend Yourself in Cave Creek, Arizona.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "profile", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Niki Z.",
  jobTitle: "Hair Artisan & Owner",
  worksFor: { "@type": "HairSalon", name: BUSINESS.name },
  url: `${SITE_URL}/about`,
  hasCredential: trainings.map((t) => ({
    "@type": "EducationalOccupationalCredential",
    name: t,
  })),
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <section className="relative isolate flex h-screen items-center overflow-hidden border-x-[14px] border-b-[14px] border-solid border-terracotta text-white">
        <Image
          src={img("chatgpt_image_sep_21_2026_04_06_20_pm.png")}
          alt={altFor("chatgpt_image_sep_21_2026_04_06_20_pm.png")}
          fill
          sizes="100vw"
          className="object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-terracotta/30" />
        <div className="relative w-full max-w-4xl px-6 text-left md:ml-[34%] lg:ml-[46%]">
          <h1 className="font-heading-alt text-5xl font-light tracking-wide whitespace-nowrap uppercase sm:text-[150px]">
            Meet Niki
          </h1>
          <p className="mt-6 max-w-md text-sm tracking-wide text-white/90 sm:text-base">
            Nearly four decades behind the chair&mdash;and a career built on knowing
            there&rsquo;s never just one way to care for someone&rsquo;s hair.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-teal uppercase">
              Owner
            </p>
            <h2 className="mt-3 font-script text-7xl text-ink">Meet Niki</h2>
            <p className="mt-6 leading-snug text-ink/70">
              Experience changes the way you see hair.
            </p>
            <p className="mt-4 leading-snug text-ink/70">
              Niki Z. has been a hair artisan since 1988, building a career that has
              taken her from the West Coast to New York City, Europe, and the Middle
              East.
            </p>
            <p className="mt-4 leading-snug text-ink/70">
              Her experience spans hair color, extensions, styling, and makeup, but her
              work has never stopped behind the chair. Niki has trained salon
              professionals, presented on stages and in salons across the country, and
              served as an educator and platform artist for leading beauty brands
              including DevaCurl, Goldwell, Schwarzkopf International, Chromastics, and
              Microchet.
            </p>
            <p className="mt-4 leading-snug text-ink/70">
              Today, that depth of experience shapes every client experience at Xtend
              Yourself.
            </p>
            <p className="mt-4 leading-snug text-ink/70">
              Niki believes you deserve to understand your hair, your options, and what
              will actually work for you. Her approach is straightforward and
              refreshingly honest&mdash;tell it like it is, educate first, and create a
              solution around the person sitting in her chair.
            </p>
            <p className="mt-4 leading-snug text-ink/70">
              Because the goal has never been to simply give you great hair.
              It&rsquo;s helping you find the look that feels completely like you.
            </p>
            <a
              href="https://www.instagram.com/xtendyourself/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-2xl font-semibold text-teal hover:text-teal-dark"
            >
              <svg
                viewBox="0 0 512 512"
                className="h-7 w-7"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M338,54.63H174c-62.72,0-114,51.32-114,114V343.33c0,62.72,51.32,114,114,114H338c62.72,0,114-51.32,114-114V168.67C452,105.94,400.68,54.63,338,54.63Zm83.91,288.71A84.24,84.24,0,0,1,338,427.24H174a84.24,84.24,0,0,1-83.91-83.91V168.67A84.24,84.24,0,0,1,174,84.76H338a84.24,84.24,0,0,1,83.91,83.91Z" />
                <path d="M255.77,148.18A107.94,107.94,0,1,0,363.71,256.13,107.94,107.94,0,0,0,255.77,148.18Zm-.52,178.71a70.68,70.68,0,1,1,70.68-70.68A70.68,70.68,0,0,1,255.25,326.9Z" />
                <circle cx="365.44" cy="146.5" r="25.56" />
              </svg>
              @xtendyourself
            </a>
          </div>
          <div className="relative h-[700px] overflow-hidden">
            <Image
              src={img("chatgpt_image_sep_21_2026_08_59_59_am.png")}
              alt={altFor("chatgpt_image_sep_21_2026_08_59_59_am.png")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-teal-dark py-24 text-center text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="font-script text-4xl sm:text-7xl">Certified in What Matters</h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/80 text-xl">
            I&rsquo;m proud to be certified in multiple industry-leading extension
            methods, allowing me to customize the best solution for your hair goals,
            lifestyle and individual needs.
          </p>

          <div className="mt-14 flex flex-wrap items-start justify-center gap-x-16 gap-y-10 sm:gap-x-0">
            {trainings.map((t, i) => (
              <div
                key={t}
                className={`flex w-32 flex-col items-center px-6 ${
                  i > 0 ? "sm:border-l sm:border-white/20" : ""
                }`}
              >
                <Image
                  src={img("chatgpt_image_sep_15_2026_11_01_15_am.png")}
                  alt=""
                  width={76}
                  height={76}
                  className="rounded-full"
                />
                <h3 className="mt-4 font-display text-xl font-semibold">{t}</h3>
                <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-white/70 uppercase">
                  Certified
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
