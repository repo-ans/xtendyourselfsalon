import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import CtaBand from "@/components/CtaBand";
import ServiceCardsSection, { type ServiceCardData } from "@/components/ServiceCardsSection";
import TransformationsSlider from "@/components/TransformationsSlider";
import HowItWorksSteps from "@/components/HowItWorksSteps";

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

const coreServicesRowOne: ServiceCardData[] = [
  {
    title: "Cut & Style",
    image: "480412655_1131560885535193_5213467224412261619_n.jpg",
    text: "Precision cutting shaped around your texture, lifestyle, and how you actually wear your hair.",
    modal: {
      title: "Cut & Style",
      image: "/images/services-modal-cut-style.jpg",
      intro: "A cut designed around the way you actually wear your hair.",
      paragraphs: [
        "From a fresh shape to a polished finish, every service is tailored to your hair, texture, and personal style. Niki combines decades of experience with an individual approach to create hair that feels effortless, wearable, and completely your own.",
      ],
      bullets: [
        "Customized Cut & Style - $200",
        "First Time Curly Cut - $200",
        "Curly Cut (Return Client) - $150",
        "Curly Cut Dry - $85",
        "Curly Lesson - (1.5 hr) - $75",
      ],
    },
  },
  {
    title: "Hair Restoration",
    image: "istockphoto-1334561894-612x612.jpg",
    text: "Restore fullness and coverage with solutions designed for thinning, fragile, or compromised hair.",
    modal: {
      title: "Hair Restoration",
      image: "/images/services-modal-hair-restoration.jpg",
      intro: "Density restored. Confidence extended.",
      paragraphs: [
        "Hair restoration and augmentation are about more than adding hair. Niki creates customized solutions for thinning, fragile hair, loss of density, or areas that need additional fullness and coverage. Every service begins by understanding your natural hair, your history, and what you want to achieve before determining the right method for you.",
      ],
      bullets: [
        "Customized Hair Restoration",
        "Hair Augmentation",
        "Density & Fullness Enhancement",
        "Hair Pieces & Integration",
        "Solutions for Thinning & Fragile Hair",
        "Customized Coverage & Blending",
      ],
      pricingNote: "Pricing Upon Consultation",
    },
  },
];

const coreServicesRowTwo: ServiceCardData[] = [
  {
    title: "Hair Extensions",
    image: "avcalla-liz-3-400x516.jpg",
    text: "From hand-tied wefts to micro-beads and fusion methods, extensions are customized for a seamless, natural finish.",
    modal: {
      title: "Extensions",
      image: "/images/services-modal-extensions.jpg",
      paragraphs: [
        "Extensions should work with your natural hair—not against it. Niki selects the method, placement, and amount of hair based on your density, lifestyle, and desired result for a seamless, comfortable finish.",
      ],
      bullets: [
        "Hand-Tied / Weft Extensions",
        "Custom Length & Fullness",
        "Extension Maintenance & Removal",
      ],
      pricingNote: "Pricing Upon Consultation",
      extra: [
        "We use Hand-tied and custom wefts, and curated and hand-blended K-tips (using the finest hair available), installed with precision based on your hair and scalp needs. We use scalp mapping and density matching to create a bespoke design that works with your lifestyle and needs to give you the most appropriate and healthy end result for your look.",
        "Membership and prepaid package options available",
      ],
    },
  },
  {
    title: "Hair Color",
    image: "75576385_2517619481789349_1972079975360102400_n.jpg",
    text: "Dimensional color, highlights, corrections, and bold transformations created with the health of your hair in mind.",
    modal: {
      title: "Hair Color",
      image: "/images/services-modal-hair-color.jpg",
      paragraphs: [
        "From subtle maintenance to a full transformation, Niki customizes your color around your natural hair, skin tone, and the result you want to achieve—always with the health and integrity of your hair in mind.",
      ],
      bullets: [
        "Global color - Starting at $150",
        "Dimensional Color - Starting at $200 (Including Haircut & Style)",
        "Blonding Services",
        "Double Process Color",
        "Color Correction & Fantasy & Creative Color",
        "Full Color Transformation",
      ],
      pricingNote: "Full Prices Upon Consultation",
    },
  },
  {
    title: "Chemo & Hairloss Support",
    image: "pexels-deni-priyo-3550015-10028673.jpg",
    text: "Private, compassionate hair and scalp support for those navigating chemotherapy or illness-related hair loss.",
    modal: {
      title: "Hair Loss Support",
      image: "/images/services-modal-hair-loss.jpg",
      paragraphs: [
        "Hair loss can be deeply personal. Niki provides a private, one-on-one space where you can explore supportive options, care for your hair and scalp, and find solutions that help you feel more like yourself throughout treatment and regrowth.",
      ],
      bullets: [
        "Chemotherapy Hairloss Support",
        "Hair & Scalp Support",
        "Hair Restore Enhancement System",
        "Hair Pieces & Integration",
        "Wig Trimming, Cutting & Styling",
        "Wig Care & Cleaning Guidance",
        "Post-Chemotherapy Hair & Regrowth Support",
      ],
      pricingNote: "Pricing Upon Consultation",
      extra: [
        "We know what it is to move through diagnosis and treatment, and how important support is during and after this time. We offer complementary services to anyone in treatment. These services include stripping the scalp for anyone who wants to take hold of their hair loss on their own terms, scalp massage and detox treatments, wig cleaning, styling, and fitting, along with small wig repair, pre-chemo cut if you aren't ready yet to remove it all. We also provide, free of charge, your first post chemo haircut and color bath as a celebration of the otherside!",
      ],
    },
  },
];

const transformations = [
  "73352236_2505337293017568_3238439619317989376_n.jpg",
  "75220750_2505337006350930_1117430227039944704_n.jpg",
  "83194785_2583839731833990_2324653802034036736_n.jpg",
  "img_5651.jpg",
  "img_5658.jpg",
  "img_5643.jpg",
  "img_5648.jpg",
  "480143923_1130191849005430_3151350967952352516_n.jpg",
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
      <section className="relative isolate flex h-screen items-center overflow-hidden text-ink">
        <Image
          src={img("header.png")}
          alt="Niki brushing her hair"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-md">
            <h1 className="flex flex-col">
              <span className="text-xs font-semibold tracking-[0.3em] text-ink/60 uppercase">
                More Than a Service.
              </span>
              <span className="mt-4 font-body text-4xl font-light tracking-wide uppercase sm:text-5xl">
                A Solution Made
              </span>
              <span className="font-script text-5xl text-terracotta sm:text-6xl">
                For You
              </span>
            </h1>
            <p className="mt-6 max-w-sm text-ink/70">
              Personalized hair restoration, augmentation, and transformation in Cave
              Creek with a private space created entirely around you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-terracotta py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="text-3xl font-light tracking-wide uppercase sm:text-4xl">
            Don&rsquo;t Know Where to Start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Every transformation is different. A consultation gives Niki the opportunity
            to understand your hair, your history, and what you want to achieve before
            deciding what comes next.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {consultations.map((c) => (
              <div
                key={c.name}
                className="flex flex-col border border-white/50 p-8 text-center"
              >
                <h3 className="font-display text-xl font-semibold">{c.name}</h3>
                <p className="mt-4 flex-1 text-sm text-white/85">{c.text}</p>
                <p className="mt-6 font-semibold text-white uppercase">{c.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ServiceCardsSection rowOne={coreServicesRowOne} rowTwo={coreServicesRowTwo} />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
          <h2 className="text-4xl sm:text-5xl">
            <span className="font-display italic">Real</span>{" "}
            <span className="font-body font-light tracking-wide uppercase">
              Transformations.
            </span>
          </h2>
          <p className="mt-2 font-script text-4xl text-terracotta sm:text-5xl">
            Beautiful Results
          </p>

          <TransformationsSlider images={transformations} />

          <Link
            href="/portfolio"
            className="mt-10 inline-block text-sm font-semibold tracking-widest text-ink/60 uppercase hover:text-terracotta"
          >
            View More Transformations
          </Link>
        </div>
      </section>

      <section className="bg-terracotta py-24 text-center text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <h2 className="text-4xl sm:text-5xl">
            <span className="font-body font-light tracking-wide uppercase">How It</span>{" "}
            <span className="font-display italic">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-semibold tracking-widest text-white/85 uppercase">
            Thoughtful from the first conversation to the final result.
          </p>

          <HowItWorksSteps steps={steps} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
