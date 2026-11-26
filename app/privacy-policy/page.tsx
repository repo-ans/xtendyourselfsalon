import type { Metadata } from "next";

const title = "Privacy Policy | Xtend Yourself";
const description =
  "How Xtend Yourself Salon collects, uses, and protects information submitted through this website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title, description, url: "/privacy-policy", type: "website", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description },
};

const sections = [
  {
    heading: "Information We Collect",
    body: "Xtend Yourself Salon only collects personal information that you voluntarily provide through our website contact form. This may include your name, email address, phone number, and information or questions included in your message. Please do not submit sensitive medical, financial, or other confidential information through the website contact form.",
  },
  {
    heading: "How We Use Your Information",
    body: "Information submitted through the contact form is used only to respond to your inquiry, discuss your service needs, coordinate a consultation or appointment, and communicate with you regarding your request. We do not sell or rent your personal information to third parties.",
  },
  {
    heading: "Appointment & Location Information",
    body: "Xtend Yourself Salon is a private, appointment-only salon in Cave Creek, Arizona. The salon's exact location is provided directly to confirmed clients and is not publicly displayed on this website.",
  },
  {
    heading: "Sharing Your Information",
    body: "Your information may be shared with service providers only when reasonably necessary to operate the website or communicate with you. We do not share your contact information with unrelated third parties for their own marketing purposes.",
  },
  {
    heading: "Third-Party Services",
    body: "This website may contain links to third-party websites or services. If you choose to communicate, make a payment, or use another service through a third-party provider, that provider's own privacy policy and terms will apply. Xtend Yourself Salon is not responsible for the privacy practices of third-party websites or services.",
  },
  {
    heading: "Data Security",
    body: "Reasonable measures are taken to protect the personal information submitted through this website. However, no website, email, or online transmission can be guaranteed to be completely secure.",
  },
  {
    heading: "Your Choices",
    body: "You may contact Xtend Yourself Salon at any time to ask about personal information you have submitted through the website or request that it be corrected or deleted, subject to any information we may need to retain for legitimate business or legal purposes.",
  },
  {
    heading: "Changes to This Policy",
    body: 'This Privacy Policy may be updated as the website, services, or business practices change. Any updates will be reflected on this page with a revised "Last Updated" date.',
  },
  {
    heading: "Contact",
    body: "If you have questions about this Privacy Policy or how your information is handled, please contact Xtend Yourself Salon through the contact information provided on this website. Xtend Yourself Salon — Cave Creek, Arizona — By Appointment Only.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h1 className="text-4xl font-semibold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink/70">Last Updated: September 15, 2026</p>
        <p className="mt-6 text-ink/70">
          Xtend Yourself Salon respects your privacy and is committed to protecting the
          personal information you choose to share with us. This Privacy Policy explains
          what information we collect through this website and how it may be used.
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold">{s.heading}</h2>
              <p className="mt-2 text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
