import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";

export default function CtaBand() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden py-32 text-center text-white">
      <Image
        src={img("pexels-pnw-prod-8377213.jpg")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-terracotta-dark/40" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold tracking-[0.3em] uppercase">
          Ready to Xtend Yourself?
        </p>
        <h2 className="mt-4 text-5xl font-semibold tracking-wide uppercase sm:text-6xl lg:text-7xl">
          Let&rsquo;s Create Your
        </h2>
        <p className="font-script text-5xl sm:text-6xl lg:text-7xl">Next Chapter.</p>
        <Link
          href="/contact-us"
          className="mt-10 inline-block rounded-full bg-teal px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase hover:bg-teal-dark"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  );
}
