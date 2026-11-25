"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What happens during a consultation?",
    a: "Your consultation is all about understanding you, your hair, and your goals. Niki will assess where your hair is now, discuss your options, and recommend a personalized approach. You don’t need to know what service or method you need before reaching out.",
  },
  {
    q: "Do you work with thinning hair or hair loss?",
    a: "Yes. Hair restoration and augmentation are specialties at Xtend Yourself. Niki works with clients experiencing thinning, fragile hair, loss of density, and hair changes related to illness or chemotherapy.",
  },
  {
    q: "Will hair extensions damage my natural hair?",
    a: "Protecting your natural hair is always part of the plan. Niki works with multiple extension and augmentation methods so she can choose an approach based on your hair, density, lifestyle, and desired result rather than using one method for everyone.",
  },
  {
    q: "Do I have to know which extension method I want?",
    a: "Not at all. That’s what your consultation is for. Niki will look at your natural hair, density, lifestyle, and the result you want to achieve, then recommend the extension method that makes the most sense for you.",
  },
  {
    q: "What discounts and payment options do you offer?",
    a: "Xtend Yourself offers a 20% discount to military personnel and first responders with proof, a 5% student discount with proof, and a 10% discount for cash purchases. Credit cards, Venmo, and Zelle are also accepted.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Please provide at least 48 hours’ notice for larger appointments and 24 hours for individual services such as cuts or color. Late cancellations are subject to a 30% cancellation fee.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-cream-light py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-terracotta uppercase">
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
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-display text-lg font-medium">{f.q}</span>
                  <span className="shrink-0 text-2xl text-terracotta">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <p className="mt-3 text-ink/70">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
