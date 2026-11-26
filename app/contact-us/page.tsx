import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/images";
import { altFor } from "@/lib/altText";
import ContactForm from "@/components/ContactForm";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const title = "Contact Us | Xtend Yourself, Cave Creek AZ";
const description =
  "Ready to book? Call or text to reserve your private appointment at Xtend Yourself in Cave Creek, Arizona.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact-us" },
  openGraph: { title, description, url: "/contact-us", type: "website", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate grid h-[60vh] grid-cols-2 overflow-hidden lg:h-screen">
        <div className="relative h-full">
          <Image
            src={img("img_5637_1.jpg")}
            alt={altFor("img_5637_1.jpg")}
            fill
            sizes="50vw"
            className="object-cover"
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="relative h-full">
          <Image
            src={img("480412655_1131560885535193_5213467224412261619_n.jpg")}
            alt={altFor("480412655_1131560885535193_5213467224412261619_n.jpg")}
            fill
            sizes="50vw"
            className="object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-black/25" />
        <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-semibold tracking-wide text-white uppercase sm:text-6xl lg:text-7xl">
          Contact Us
        </h1>
      </section>

      <section className="bg-terracotta-dark py-24 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-4xl font-semibold tracking-wide uppercase sm:text-5xl">
            Find Us in Cave Creek
          </h2>
          <p className="mt-6 text-white">
            Ready to book? Call or text to reserve your private appointment. Once
            confirmed, the location will be sent to you. Have a quick question? Send it
            below and we&rsquo;ll get back to you.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            <a
              href="sms:+15168166452"
              data-event="sms_click"
              className="font-semibold hover:text-cream-light"
            >
              <span className="font-semibold">TEXT:</span> 516-816-6452
            </a>
            <a
              href="tel:+14802079996"
              data-event="call_click"
              className="font-semibold hover:text-cream-light"
            >
              <span className="font-semibold">CALL:</span> 480-207-9996
            </a>
          </div>

          <h2 className="mt-16 font-script text-5xl sm:text-6xl">Send a Message</h2>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <ReviewsCarousel />
    </>
  );
}
