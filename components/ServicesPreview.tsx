import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";

const categories = [
  { label: "Hair Restoration", image: "avcalla-amber-7-400x516.jpg" },
  { label: "Hair Extensions", image: "istockphoto-1334561894-612x612.jpg" },
  { label: "Color & Blonding", image: "img_5639.jpg" },
  { label: "Cut & Style", image: "480412655_1131560885535193_5213467224412261619_n.jpg" },
  { label: "Chemo & Hair Loss Support", image: "pexels-oleksandra-23349908.jpg" },
];

export default function ServicesPreview() {
  return (
    <section className="bg-cream-light py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-display text-base text-terracotta italic">Beauty Always</p>
        <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-ink/60 uppercase">
          Services
        </p>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-36">
          <h2 className="text-4xl leading-tight font-semibold sm:text-5xl lg:max-w-lg">
            Where Science and{" "}
            <br className="hidden lg:block" />
            <span className="font-script text-terracotta">Gentleness</span> Meet
          </h2>
          <div className="hidden h-24 w-px shrink-0 bg-ink/15 lg:block" />
          <div className="lg:max-w-sm">
            <p className="text-ink/70 text-lg">
              Every service begins with understanding your hair, your history, and
              what&rsquo;s possible &mdash; then creating a solution that&rsquo;s entirely
              your own.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-block text-sm font-semibold tracking-widest text-teal uppercase hover:text-teal-dark"
            >
              Explore Services &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <Link key={c.label} href="/services" className="group block">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img(c.image)}
                  alt={c.label}
                  fill
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-lg font-semibold tracking-wide uppercase">
                {c.label}
              </p>
              <div className="mt-2 h-px w-8 bg-terracotta/60" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
