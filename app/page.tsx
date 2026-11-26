import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import ServicesPreview from "@/components/ServicesPreview";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";

const salonDetails = [
  {
    n: "01",
    title: "Location",
    text: "The location of your salon is given after an appointment is booked.",
  },
  {
    n: "02",
    title: "Availability",
    text: "Appointment availability is limited and offered by appointment only. Request a time that works for you and Niki will personally confirm your appointment.",
  },
  {
    n: "03",
    title: "Payments",
    text: "Cash is always preferred at Xtend Yourself and comes with a 10% discount as a thank-you for keeping things simple. Credit cards, Venmo, and Zelle are also accepted for your convenience.",
  },
];

const badges = [
  { label: "38 Years Experience", image: "chatgpt_image_sep_15_2026_10_42_54_am.png" },
  { label: "Specialized Solutions", image: "chatgpt_image_sep_15_2026_10_41_43_am.png" },
  { label: "A Safe & Supported Space", image: "chatgpt_image_sep_15_2026_10_40_11_am.png" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream lg:flex lg:h-[calc(100vh-84px)] lg:items-center">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-0">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-ink/60 uppercase">
              More Than Hair.
            </p>
            <h1 className="mt-4 text-6xl font-semibold sm:text-7xl">It&rsquo;s You</h1>
            <p className="font-script text-7xl text-terracotta sm:text-8xl">Amplified</p>
            <p className="mt-6 max-w-lg text-lg text-ink/70 sm:text-xl">
              Personalized private, one-on-one care in Cave Creek with solutions for
              thinning hair, added density, extensions, color, and complete hair
              transformations.
            </p>
            <a
              href="tel:4802079996"
              className="mt-8 inline-block rounded-full bg-teal px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase hover:bg-teal-dark"
            >
              Book Your Appointment
            </a>
          </div>
        </div>

        <div className="relative h-80 w-full sm:h-[28rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-3/5">
          <Image
            src={img("chatgpt_image_sep_17_2026_12_57_06_pm.png")}
            alt="Xtend Yourself client"
            fill
            // sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-cream to-transparent lg:block" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-terracotta lg:flex lg:h-[calc(100vh-84px)] lg:min-h-[640px] lg:items-center">
        <div className="relative h-80 w-full sm:h-[28rem] lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[58%]">
          <Image
            src={img("pexels-cottonbro-3993311.jpg")}
            alt=""
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-terracotta to-transparent lg:block" />
        </div>
        <div className="relative z-10 ml-auto flex w-full items-center lg:w-[42%]">
          <div className="px-6 py-16 text-white sm:px-10 lg:px-16">
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Function First{" "}
              <span className="font-script text-cream-light">Beauty Always</span>
            </h2>
            <p className="mt-6 text-white/90 text-lg">
              Every service begins with your hair and your history &mdash; never with a
              catalogue. We look at where your hair is now, what you want to achieve, and
              what will work best before creating a plan specifically for you.
            </p>
            <p className="mt-4 text-white/90 text-lg">
              Whether that means restoring lost density, adding length and fullness, or
              creating something entirely new, Niki builds the solution around you.
            </p>
            <p className="mt-4 text-white/90 text-lg">
              No crowded salon. Just experienced, one-on-one care designed for your hair.
            </p>
          </div>
        </div>
      </section>

      <ServicesPreview />

      <section className="bg-cream-light py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image src={img("img_5643.jpg")} alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative mt-8 h-64 overflow-hidden rounded-2xl">
              <Image src={img("img_5656.jpg")} alt="" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-terracotta uppercase">
              Customized Solutions
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">For Your Hair Journey</h2>
            <p className="mt-4 text-xl font-display text-ink/80">
              Chemo &amp; Hair Loss Support
            </p>
            <p className="mt-6 text-ink/70">
              Private, compassionate hair and scalp support for those navigating
              chemotherapy or illness-related hair loss &mdash; because every hair journey
              deserves understanding and care.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-block text-sm font-semibold tracking-widest text-teal uppercase hover:text-teal-dark"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="text-center text-4xl font-semibold sm:text-5xl">
            Salon <span className="font-script text-terracotta">Details</span>
          </h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="relative h-[460px] overflow-hidden rounded-2xl sm:h-[560px]">
              <Image
                src={img("494220950_4014090412142241_8598158627694081_n.jpg")}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-6">
              {salonDetails.map((d) => (
                <div key={d.n} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
                  <span className="font-display text-2xl text-terracotta">{d.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{d.title}</h3>
                    <p className="mt-1 text-ink/70">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {badges.map((b) => (
              <div key={b.label} className="flex flex-col items-center text-center">
                <Image
                  src={img(b.image)}
                  alt=""
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <p className="mt-4 text-sm font-semibold tracking-wide">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <CtaBand />
    </>
  );
}
