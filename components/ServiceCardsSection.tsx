"use client";

import Image from "next/image";
import { useState } from "react";
import { img } from "@/lib/images";
import ServiceModal, { type ServiceModalContent } from "./ServiceModal";

export type ServiceCardData = {
  title: string;
  image: string;
  text: string;
  modal: ServiceModalContent;
};

function Card({ data, onLearnMore }: { data: ServiceCardData; onLearnMore: () => void }) {
  return (
    <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-lg bg-teal-dark">
      <div className="relative h-48 w-full">
        <Image
          src={img(data.image)}
          alt={data.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 text-center text-white">
        <h3 className="font-display text-xl font-semibold">{data.title}</h3>
        <p className="mt-2 flex-1 text-sm text-white/80">{data.text}</p>
        <button
          type="button"
          onClick={onLearnMore}
          className="mt-6 block rounded-full bg-terracotta px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase hover:bg-terracotta-dark"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default function ServiceCardsSection({
  rowOne,
  rowTwo,
}: {
  rowOne: ServiceCardData[];
  rowTwo: ServiceCardData[];
}) {
  const [active, setActive] = useState<ServiceModalContent | null>(null);

  return (
    <>
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
        {rowOne.map((s) => (
          <Card key={s.title} data={s} onLearnMore={() => setActive(s.modal)} />
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
        {rowTwo.map((s) => (
          <Card key={s.title} data={s} onLearnMore={() => setActive(s.modal)} />
        ))}
      </div>

      {active && <ServiceModal content={active} onClose={() => setActive(null)} />}
    </>
  );
}
