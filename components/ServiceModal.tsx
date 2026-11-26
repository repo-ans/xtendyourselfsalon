"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X } from "lucide-react";

export type ServiceModalContent = {
  title: string;
  image: string;
  intro?: string;
  paragraphs: string[];
  bullets?: string[];
  pricingNote?: string;
  extra?: string[];
};

export default function ServiceModal({
  content,
  onClose,
}: {
  content: ServiceModalContent;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/60 px-6 py-16 sm:items-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-teal-dark text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-5 right-5 text-white/80 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid gap-8 p-8 sm:grid-cols-2 sm:p-10">
          <div className="relative h-72 w-full overflow-hidden sm:h-full">
            <Image src={content.image} alt={content.title} fill sizes="(min-width: 640px) 40vw, 100vw" className="object-cover" />
          </div>

          <div>
            <h3 className="font-display text-3xl uppercase">{content.title}</h3>
            {content.intro && <p className="mt-4 text-white/90">{content.intro}</p>}
            {content.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-white/90">
                {p}
              </p>
            ))}
            {content.bullets && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-white/90">
                {content.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {content.pricingNote && (
              <p className="mt-6 font-semibold text-white">{content.pricingNote}</p>
            )}
            {content.extra?.map((p, i) => (
              <p key={i} className="mt-4 text-white/90">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
