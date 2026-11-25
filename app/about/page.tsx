import Image from "next/image";
import { img } from "@/lib/images";
import CtaBand from "@/components/CtaBand";

const trainings = [
  "Shrink Link",
  "Dream Catchers",
  "Skinny Weft",
  "Chemo Girls Extensions",
  "Micro-Bead Extensions",
];

export const metadata = {
  title: "About Niki | Hair Restoration Specialist Cave Creek AZ",
  description:
    "Nearly four decades behind the chair — meet Niki Z., hair artisan and owner of Xtend Yourself in Cave Creek, Arizona.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate flex h-screen items-center overflow-hidden text-white">
        <Image
          src={img("chatgpt_image_sep_21_2026_04_06_20_pm.png")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-terracotta/30" />
        <div className="relative ml-auto w-full max-w-2xl px-6 text-left lg:pr-16">
          <h1 className="font-heading-alt text-5xl font-semibold tracking-wide uppercase sm:text-6xl">
            Meet Niki
          </h1>
          <p className="mt-6 font-display text-xl italic">
            Nearly four decades behind the chair&mdash;and a career built on knowing
            there&rsquo;s never just one way to care for someone&rsquo;s hair.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative h-[480px] overflow-hidden rounded-2xl">
            <Image
              src={img("chatgpt_image_sep_21_2026_08_59_59_am.png")}
              alt="Niki Z."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-terracotta uppercase">
              Meet Niki
            </p>
            <p className="mt-6 text-ink/70">
              Experience changes the way you see hair. Niki Z. has been a hair artisan
              since 1988, building a career that has taken her from the West Coast to New
              York City, Europe, and the Middle East. Her experience spans hair color,
              extensions, styling, and makeup, but her work has never stopped behind the
              chair. Niki has trained salon professionals, presented on stages and in
              salons across the country, and served as an educator and platform artist for
              leading beauty brands including DevaCurl, Goldwell, Schwarzkopf
              International, Chromastics, and Microchet.
            </p>
            <p className="mt-4 text-ink/70">
              Today, that depth of experience shapes every client experience at Xtend
              Yourself. Niki believes you deserve to understand your hair, your options,
              and what will actually work for you. Her approach is straightforward and
              refreshingly honest&mdash;tell it like it is, educate first, and create a
              solution around the person sitting in her chair. Because the goal has never
              been to simply give you great hair. It&rsquo;s helping you find the look
              that feels completely like you.
            </p>
            <a
              href="https://www.instagram.com/xtendyourself/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-teal hover:text-teal-dark"
            >
              @xtendyourself
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-terracotta uppercase">
            Owner
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm font-semibold tracking-wide text-ink/60 uppercase">
            <span>Certified</span>
            <span className="h-1 w-1 rounded-full bg-ink/30" />
            <span>Great Lengths</span>
          </div>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Certified in What Matters
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-ink/70">
            I&rsquo;m proud to be certified in multiple industry-leading extension
            methods, allowing me to customize the best solution for your hair goals,
            lifestyle and individual needs.
          </p>

          <div className="mt-14 flex flex-col items-center">
            <Image
              src={img("chatgpt_image_sep_15_2026_11_01_15_am.png")}
              alt=""
              width={88}
              height={88}
              className="rounded-full"
            />
            <h3 className="mt-6 text-xl font-semibold">Industry-Leading Training</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {trainings.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-terracotta/30 px-5 py-2 text-sm font-medium text-terracotta-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
