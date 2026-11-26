"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { img } from "@/lib/images";
import { altFor } from "@/lib/altText";
import "swiper/css";

export default function TransformationsSlider({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={8}
      loop
      speed={4000}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 4, spaceBetween: 8 },
        1024: { slidesPerView: 6, spaceBetween: 8 },
      }}
      className="mt-12 w-full"
    >
      {images.map((f, i) => (
        <SwiperSlide key={f + i}>
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image src={img(f)} alt={altFor(f)} fill sizes="200px" className="object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
