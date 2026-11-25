import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import ServicesPreview from "@/components/ServicesPreview";
import CtaBand from "@/components/CtaBand";

const consultations = [
  {
    name: "General Consultation",
    price: "Complementary",
    text: "Available in person or by phone for questions, recommendations, and determining the right next step.",
  },
  {
    name: "Transformation Consultation",
    price: "$150",
    text: "Up to one hour for dramatic transformations or more complex hair needs that require additional planning. Your consultation fee is applied toward your first transformation appointment when you move forward.",
  },
];

const coreServices = [
  {
    title: "Cut & Style",
    image: "480412655_1131560885535193_5213467224412261619_n.jpg",
    text: "Precision cutting shaped around your texture, lifestyle, and how you actually wear your hair.",
  },
  {
    title: "Hair Restoration",
    image: "istockphoto-1334561894-612x612.jpg",
    text: "Restore fullness and coverage with solutions designed for thinning, fragile, or compromised hair.",
  },
  {
    title: "Hair Extensions",
    image: "avcalla-liz-3-400x516.jpg",
    text: "From hand-tied wefts to micro-beads and fusion methods, extensions are customized for a seamless, natural finish.",
  },
  {
    title: "Hair Color",
    image: "75576385_2517619481789349_1972079975360102400_n.jpg",
    text: "Dimensional color, highlights, corrections, and bold transformations created with the health of your hair in mind.",
  },
  {
    title: "Chemo & Hairloss Support",
    image: "pexels-deni-priyo-3550015-10028673.jpg",
    text: "Private, compassionate hair and scalp support for those navigating chemotherapy or illness-related hair loss.",
  },
];

const steps = [
  {
    n: "01",
    title: "Book an Appointment",
    text: "Reach out by call or text and Niki will personally coordinate a time that works for you.",
  },
  {
    n: "02",
    title: "Map What’s Possible",
    text: "Meet privately with Niki to talk through your hair history, density, lifestyle, and goals. You’ll leave knowing your options.",
  },
  {
    n: "03",
    title: "Transform",
    text: "From placement and structural build to the final blend, every detail is customized around your natural hair and desired result.",
  },
  {
    n: "04",
    title: "Maintenance",
    text: "Leave with personalized aftercare instructions and your next appointment pre-booked to keep your hair looking its best.",
  },
];

export const metadata = {
  title: "Services | Hair Restoration, Extensions & Color, Cave Creek AZ",
  description:
    "Personalized hair restoration, augmentation, and transformation in Cave Creek with a private space created entirely around you.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink py-28 text-center text-white">
        <Image
          src={img("header.png")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            More Than a Service. A Solution Made For You
          </h1>
          <p className="mt-6 text-white/80">
            Personalized hair restoration, augmentation, and transformation in Cave Creek
            with a private space created entirely around you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Don&rsquo;t Know Where to Start?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">
            Every transformation is different. A consultation gives Niki the opportunity
            to understand your hair, your history, and what you want to achieve before
            deciding what comes next.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {consultations.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-terracotta/20 bg-cream-light p-8 text-left"
              >
                <h3 className="text-xl font-semibold">{c.name}</h3>
                <p className="mt-1 font-display text-2xl text-terracotta">{c.price}</p>
                <p className="mt-4 text-sm text-ink/70">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="text-center text-4xl font-semibold sm:text-5xl">
            Core Services
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((s) => (
              <div key={s.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={img(s.image)}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-ink/60">
            Complementary consultations are also available for chemo-diagnosed clients.
          </p>
          <div className="mt-6 text-center">
            <a
              href="https://xtendyourself.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-teal px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase hover:bg-teal-dark"
            >
              View Pricing &amp; Book Online
            </a>
          </div>
        </div>
      </section>

      <ServicesPreview />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <h2 className="text-4xl font-semibold sm:text-5xl">How It Works</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Thoughtful from the first conversation to the final result.
          </p>
          <div className="mt-14 grid gap-10 text-left sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <span className="font-display text-2xl text-terracotta">{s.n}</span>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="mt-14 inline-block text-sm font-semibold tracking-widest text-teal uppercase hover:text-teal-dark"
          >
            View More Transformations &rarr;
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
