export const metadata = {
  title: "Terms & Conditions | Xtend Yourself",
};

const sections = [
  {
    heading: "Website Use",
    body: "This website is provided for general information about Xtend Yourself Salon, our services, and how to contact Niki regarding consultations and appointments. Information on this website is intended for general informational purposes and should not be considered medical advice, diagnosis, or treatment. Hair and scalp concerns can vary significantly from person to person, and service recommendations are made individually following consultation.",
  },
  {
    heading: "Appointments & Availability",
    body: "Xtend Yourself Salon is a private, appointment-only salon located in Cave Creek, Arizona. There are no walk-in appointments. Submitting an inquiry or contacting the salon does not guarantee an appointment. All appointments are personally confirmed based on Niki's availability. The salon's exact location is provided privately to confirmed clients.",
  },
  {
    heading: "Consultations & Services",
    body: "Every client's hair, scalp, history, and goals are different. Recommendations, service methods, timing, maintenance requirements, and pricing may vary based on the individual. Information or examples presented on this website are not a guarantee that a particular service or result will be appropriate for every client. Final recommendations are determined through consultation.",
  },
  {
    heading: "Pricing",
    body: "Service pricing may vary depending on the service selected, the client's individual needs, hair length or density, products or materials required, and the scope of the appointment. When consultation is required to determine pricing, the final price will be discussed with the client before the applicable service is performed.",
  },
  {
    heading: "Cancellation Policy",
    body: "Xtend Yourself Salon requires at least 48 hours' notice when canceling or rescheduling larger appointments and at least 24 hours' notice for individual services such as haircuts or color appointments. Appointments canceled or rescheduled without the required notice may be subject to a fee equal to 30% of the scheduled service.",
  },
  {
    heading: "Discounts",
    body: "Xtend Yourself Salon currently offers a 20% discount to military personnel and first responders with appropriate proof, a 5% student discount with proof, and a 10% discount for cash purchases. Discount availability and eligibility are determined by Xtend Yourself Salon and may be changed or discontinued at any time. Unless otherwise stated, discounts may not be combined.",
  },
  {
    heading: "Payments",
    body: "Accepted payment methods currently include credit cards, Venmo, Zelle, and cash. Any payment services provided by a third party are also subject to that provider's individual terms, conditions, and privacy practices.",
  },
  {
    heading: "Results & Hair Services",
    body: "Xtend Yourself Salon provides personalized recommendations based on professional experience, consultation, and the condition of the client's hair at the time of service. Individual results vary. Hair color, extensions, augmentation, restoration, and other salon services may require ongoing maintenance and proper at-home care. Xtend Yourself Salon cannot guarantee identical results between clients or guarantee that results shown in photographs, examples, or educational materials can be reproduced for every individual.",
  },
  {
    heading: "Medical & Hair Loss Information",
    body: "Xtend Yourself Salon works with clients experiencing a variety of hair and density concerns, including clients navigating illness or chemotherapy-related hair changes. Salon services are cosmetic and beauty services and are not a substitute for medical care. Xtend Yourself Salon does not diagnose or treat medical conditions. Clients with medical concerns regarding hair loss, scalp health, or treatment-related changes should consult an appropriate healthcare professional.",
  },
  {
    heading: "Website Content",
    body: "All text, branding, graphics, photographs, logos, designs, and other original content appearing on this website are owned by or licensed to Xtend Yourself Salon unless otherwise stated. Website content may not be copied, reproduced, distributed, or used for commercial purposes without prior written permission.",
  },
  {
    heading: "Third-Party Links & Services",
    body: "This website may include links to third-party websites, payment platforms, social media platforms, or other services for convenience. Xtend Yourself Salon does not control and is not responsible for the content, availability, security, terms, or privacy practices of third-party services.",
  },
  {
    heading: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Xtend Yourself Salon is not responsible for losses or damages arising solely from the use of, or inability to use, this website or reliance on general information presented on the website. Nothing in these Terms & Conditions is intended to waive or limit rights or responsibilities that cannot legally be waived under applicable law.",
  },
  {
    heading: "Privacy",
    body: "Personal information submitted through this website is handled according to the Xtend Yourself Salon Privacy Policy.",
  },
  {
    heading: "Changes to These Terms",
    body: 'Xtend Yourself Salon may update these Terms & Conditions as services, policies, or website features change. Updates will be reflected on this page with a revised "Last Updated" date.',
  },
  {
    heading: "Contact",
    body: "Questions regarding these Terms & Conditions may be submitted through the contact information provided on this website. Xtend Yourself Salon — Cave Creek, Arizona — By Appointment Only.",
  },
];

export default function TermsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h1 className="text-4xl font-semibold sm:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-ink/50">Last Updated: September 15, 2026</p>
        <p className="mt-6 text-ink/70">
          Welcome to the Xtend Yourself Salon website. By accessing or using this website,
          you agree to the following Terms &amp; Conditions. These terms apply to your use
          of the website and any inquiries submitted through it.
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
