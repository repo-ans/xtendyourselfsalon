"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-white/10 p-8 text-center">
        <h3 className="font-display text-2xl">Submitted!</h3>
        <p className="mt-2 text-white/80">
          Thanks for reaching out &mdash; Niki will personally get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-5">
      <input
        name="name"
        required
        placeholder="Name Here"
        className="border-b border-white/40 bg-transparent py-3 text-left font-display text-xl text-white placeholder:text-white placeholder:text-xl focus:border-white focus:outline-none"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email Here"
        className="border-b border-white/40 bg-transparent py-3 text-left text-xl text-white placeholder:text-white placeholder:text-xl focus:border-white focus:outline-none"
      />
      <input
        name="subject"
        placeholder="Subject"
        className="border-b border-white/40 bg-transparent py-3 text-left text-xl text-white placeholder:text-white placeholder:text-xl focus:border-white focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={3}
        className="resize-none bg-transparent py-3 text-left text-xl text-white placeholder:text-white placeholder:text-xl focus:outline-none"
      />
      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-teal px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase hover:bg-teal-dark disabled:opacity-60 cursor-pointer"
        >
          {status === "sending" ? "Sending…" : "Send It In"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-cream-light">
          Something went wrong &mdash; please call or text instead.
        </p>
      )}
    </form>
  );
}
