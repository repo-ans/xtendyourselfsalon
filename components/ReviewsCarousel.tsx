"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { img } from "@/lib/images";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

const reviews = [
  {
    quote:
      "I started seeing Niki about 3 years ago. My hair had stopped growing; my color was awful, everything was thinning! We started out with extensions and color. It made my hair/head look amazing. We also started using a good shampoo and conditioner and got rid of the junk I was using. Now, 3 years later, my color is beautiful, my extensions are amazing, AND......my hair is growing again... She's an expert in her craft. She'll take her time with you, listen to your concerns, and go over all options.",
    name: "Stephanie Mayes",
  },
  {
    quote:
      "Niki is not only sweet, she is super knowledgeable about hair extensions! Best experience I’ve ever had! Hands down best hair artist! 5 stars!",
    name: "Sally Schmidt",
  },
  {
    quote:
      "Nikki has been an absolute godsend. I had no idea what to expect trying to regrow my hair after chemo, and she has walked my clueless-to-anything-related-to-hair/makeup/etc self through each step of the process, and has helped me have fun trying new styles/colors along the way. I drive from North Phoenix to be able to work with her, and it's worth every minute of it!",
    name: "Lisa Chandler",
  },
  {
    quote:
      "Niki is simply amazing with hair colors! She’s extremely talented! If you’re looking for someone to take your hair to that mermaid, unicorn or fantasy hair she’s definitely the best! Took my hair from boring brown to shades of purple, blues, and greenish teals",
    name: "Ashley Furlong",
  },
];

export default function ReviewsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative isolate overflow-hidden py-28 text-center text-white sm:py-32">
      <Image
        src={img("pexels-deni-priyo-3550015-10028673.jpg")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-dark/10 via-teal-dark/80 to-teal" />

      <h2 className="relative px-4 text-[clamp(3.5rem,11vw,10rem)] leading-none font-semibold tracking-widest text-white/20 uppercase">
        Reviews
      </h2>

      <div className="relative mx-auto -mt-6 max-w-2xl px-6 sm:-mt-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-white/90 uppercase hover:text-white"
        >
          View The Transformations <span aria-hidden>&rarr;</span>
        </Link>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2 px-2 sm:gap-6 sm:px-6">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => swiperRef.current?.slidePrev()}
          className="shrink-0 self-center rounded-full p-3 text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] transition hover:scale-110 hover:text-cream-light cursor-pointer"
        >
          <ChevronLeft className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={2.25} />
        </button>

        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={700}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          className="w-full max-w-2xl"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.name}>
              <p className="min-h-[9rem] text-lg leading-relaxed sm:min-h-[6rem]">
                {r.quote}
              </p>
              <p className="mt-6 font-script text-4xl">{r.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Next review"
          onClick={() => swiperRef.current?.slideNext()}
          className="shrink-0 self-center rounded-full p-3 text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] transition hover:scale-110 hover:text-cream-light cursor-pointer"
        >
          <ChevronRight className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={2.25} />
        </button>
      </div>
    </section>
  );
}
