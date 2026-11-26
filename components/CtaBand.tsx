import Image from "next/image";
import { img } from "@/lib/images";
import { altFor } from "@/lib/altText";

export default function CtaBand() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden py-32 text-center text-white">
      <Image
        src={img("pexels-pnw-prod-8377213.jpg")}
        alt={altFor("pexels-pnw-prod-8377213.jpg")}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-terracotta-dark/45" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="text-sm font-light tracking-[0.3em] uppercase">
          Ready to Xtend Yourself?
        </p>
        <h2 className="mt-4 font-body text-3xl font-light tracking-wide whitespace-nowrap uppercase sm:text-6xl lg:text-7xl">
          Let&rsquo;s Create Your
        </h2>
        <p className="font-script text-5xl sm:text-6xl lg:text-7xl">Next Chapter.</p>
        <a
          href="tel:+14802079996"
          data-event="call_click"
          className="mt-10 inline-block rounded-full bg-teal px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase hover:bg-teal-dark"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}
