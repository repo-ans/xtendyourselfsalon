"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqData";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-cream-light py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-teal uppercase">
            Questions
          </p>
          <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">We Hear Most</h2>
        </div>

        <div className="mt-14 divide-y divide-ink/10">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={f.q} className="py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-display text-lg font-medium">{f.q}</span>
                  <span aria-hidden className="shrink-0 text-2xl text-terracotta">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p id={`faq-answer-${idx}`} className="mt-3 text-ink/70">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
