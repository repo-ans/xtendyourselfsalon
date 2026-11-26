import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import ServicesPreview from "@/components/ServicesPreview";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Hair Restoration & Extension Portfolio | Cave Creek AZ",
  description:
    "Real transformations, beautiful results. See the real work, real results, and happy clients who trust Xtend Yourself with their hair.",
};

const gallery = [
  "img_5637_1.jpg",
  "pexels-oleksandra-23349908.jpg",
  "chatgpt_image_sep_18_2026_11_07_35_am.png",
  "chatgpt_image_sep_18_2026_11_01_13_am.png",
  "chatgpt_image_sep_18_2026_11_17_04_am.png",
  "chatgpt_image_sep_18_2026_11_06_26_am.png",
  "img_5643.jpg",
  "img_5651.jpg",
  "img_5642_1.jpg",
  "img_5636_1.jpg",
  "img_5648.jpg",
  "img_5658.jpg",
  "img_5505_1.jpg",
  "img_5508_1.jpg",
  "avcalla-liz-5-400x516.jpg",
  "avcalla-amber-8-400x516.jpg",
  "57774884_2365778490306783_503910263523639296_n.jpg",
  "avcalla-liz-3-400x516.jpg",
  "75220750_2505337006350930_1117430227039944704_n.jpg",
  "73352236_2505337293017568_3238439619317989376_n.jpg",
  "83194785_2583839731833990_2324653802034036736_n.jpg",
  "480143923_1130191849005430_3151350967952352516_n.jpg",
  "473450013_3923546547863295_1366655854016137054_n.jpg",
  "497514532_4024117131139569_6997829202646189028_n.jpg",
  "img_5656.jpg",
  "494294539_4014090592142223_5718186802554414692_n.jpg",
  "98313565_2670622169822412_905561487488057344_n.jpg",
  "480412655_1131560885535193_5213467224412261619_n.jpg",
  "37201592_2192489114302389_8588173247386746880_n.jpg",
  "img_5623.jpg",
  "img_5628.jpg",
  "490220355_3992989800918969_7160486609251216914_n.jpg",
  "img_5629.jpg",
  "img_5631.jpg",
  "img_5633.jpg",
  "img_5639.jpg",
  "img_5635.jpg",
  "img_5562_1.jpg",
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-teal-dark py-28 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl italic sm:text-5xl">
            Real Transformations. Beautiful Results.
          </h1>
          <p className="mt-6 text-white/80">
            From color corrections to extensions, blonding to balayage &mdash; see the
            real work, real results, and happy clients who trust us with their hair.
          </p>
        </div>
      </section>

      <Link
        href="/contact-us"
        aria-label="Book Now"
        className="block overflow-hidden border-y border-white/10 bg-teal-dark py-4"
      >
        <div className="flex w-max animate-[marquee_18s_linear_infinite] items-center hover:[animation-play-state:paused]">
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex shrink-0 items-center" aria-hidden={groupIndex === 1}>
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="px-6 font-display text-4xl text-white/70 uppercase italic"
                >
                  Book Now <span className="not-italic text-white/30">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </Link>

      <section className="py-16">
        <div className="mx-auto max-w-7xl columns-2 gap-4 px-6 sm:columns-3 lg:columns-4 lg:px-10">
          {gallery.map((file) => (
            <div key={file} className="mb-4 break-inside-avoid overflow-hidden rounded-xl">
              <Image
                src={img(file)}
                alt=""
                width={500}
                height={650}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <ServicesPreview />
      <CtaBand />
    </>
  );
}
