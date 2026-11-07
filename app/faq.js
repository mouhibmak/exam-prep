// Shared FAQ content for ExamPrep. Rendered visibly on the page and as
// JSON-LD FAQPage schema for search engines. No pass-rate or endorsement
// claims anywhere — see the answers themselves.
export const FAQ_ITEMS = [
  {
    q: 'Is this AWS Cloud Practitioner practice exam really free?',
    a: 'Yes. Both 10-question practice sets are free, with instant scoring and explanations. No sign-up, no account, and no payment details are asked for.',
  },
  {
    q: 'Are these the official AWS exam questions?',
    a: 'No. These are original questions written in official exam style, based on the topics in the official CLF-C02 exam guide. Official AWS questions are copyrighted and are not used here. ExamPrep is not affiliated with or endorsed by Amazon Web Services.',
  },
  {
    q: 'How many questions are on the real CLF-C02 exam?',
    a: 'The real exam has 65 questions (50 scored, 15 unscored), lasts 90 minutes, and the passing score is 700 out of 1,000 on a scaled basis. The exam fee is $100 USD and the certification is valid for 3 years, per the official exam guide.',
  },
  {
    q: 'What topics does the CLF-C02 exam cover?',
    a: 'Four domains: Cloud Concepts (24%), Security and Compliance (30%), Cloud Technology and Services (34%), and Billing, Pricing, and Support (12%). Both practice sets cover all four domains.',
  },
  {
    q: 'Does my practice score predict whether I will pass the real exam?',
    a: 'No. A 10-question practice set is a study aid, not a pass/fail prediction. Use it to find weak topics, read the explanations, and then study the official AWS exam guide and documentation.',
  },
];

export function FaqJsonLd({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqSection({ items }) {
  return (
    <section style={{ marginTop: 40 }}>
      <h2 style={{ fontSize: 22, margin: '0 0 16px' }}>Frequently asked questions</h2>
      {items.map((i) => (
        <div key={i.q} style={{ marginBottom: 16 }}>
          <h3 style={{ fontSize: 16, margin: '0 0 4px' }}>{i.q}</h3>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: '#374151', margin: 0 }}>{i.a}</p>
        </div>
      ))}
    </section>
  );
}

// FAQ for the AZ-900 (Microsoft Azure Fundamentals) pages. Same pattern as
// the CLF-C02 FAQ: visible on the page and as JSON-LD FAQPage schema.
// No pass-rate or endorsement claims.
export const AZ900_FAQ_ITEMS = [
  {
    q: 'Is this AZ-900 practice exam really free?',
    a: 'Yes. All 10 AZ-900 practice questions are free, with instant scoring and explanations. No sign-up, no account, and no payment details are asked for.',
  },
  {
    q: 'Are these the official Microsoft exam questions?',
    a: 'No. These are original questions written in official exam style, based on the topics in the official AZ-900 study guide on Microsoft Learn (skills measured as of July 20, 2026). Official Microsoft questions are copyrighted and are not used here. ExamPrep is not affiliated with or endorsed by Microsoft.',
  },
  {
    q: 'What does the real AZ-900 exam cover?',
    a: 'Three domains: Describe cloud concepts (25–30%), Describe Azure architecture and services (35–40%), and Describe Azure management and governance (30–35%), per the official AZ-900 study guide. The exam lasts 45 minutes, the passing score is 700 out of 1,000 on a scaled basis, and the exam fee is $99 USD, per the Microsoft Learn certification page.',
  },
  {
    q: 'How is AZ-900 different from the AWS Cloud Practitioner exam?',
    a: 'Both are entry-level cloud fundamentals exams, but AZ-900 covers Microsoft Azure services — regions and availability zones, Azure compute, networking and storage, Microsoft Entra ID, and Azure governance tools — while CLF-C02 covers the equivalent AWS concepts and services. This site offers free practice sets for both.',
  },
  {
    q: 'Does my practice score predict whether I will pass the real AZ-900 exam?',
    a: 'No. A 10-question practice set is a study aid, not a pass/fail prediction. Use it to find weak topics, read the explanations, and then study the official AZ-900 study guide and Microsoft Learn training.',
  },
];
