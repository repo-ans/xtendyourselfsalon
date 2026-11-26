"use client";

import { useEffect, useState } from "react";

type Step = { n: string; title: string; text: string };

export default function HowItWorksSteps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % steps.length);
    }, 2000);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <div className="mt-16 flex flex-wrap justify-center gap-10">
      {steps.map((s, i) => (
        <div
          key={s.n}
          className={`flex h-44 w-44 flex-col items-center justify-center rounded-full border border-white/50 p-6 text-center transition-colors duration-700 sm:h-48 sm:w-48 ${
            i === active ? "bg-white/15" : ""
          }`}
        >
          <span className="text-xs font-semibold tracking-widest">{s.n}</span>
          <h3 className="mt-2 text-xs font-semibold tracking-wide uppercase">{s.title}</h3>
          <p className="mt-2 text-[0.65rem] leading-tight text-white/80">{s.text}</p>
        </div>
      ))}
    </div>
  );
}
