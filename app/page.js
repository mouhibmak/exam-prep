import Link from 'next/link';
import { EXAM_FACTS } from './questions';
import { FAQ_ITEMS, FaqJsonLd, FaqSection } from './faq';

export default function Home() {
  return (
    <main style={styles.main}>
      <FaqJsonLd items={FAQ_ITEMS} />
      <h1 style={styles.h1}>ExamPrep</h1>
      <p style={styles.tag}>
        Free practice exams for cloud certifications. Start with the AWS Certified
        Cloud Practitioner (CLF-C02) — no sign-up.
      </p>

      <div style={styles.card}>
        <h2 style={styles.h2}>
          {EXAM_FACTS.name} ({EXAM_FACTS.code})
        </h2>
        <ul style={styles.facts}>
          <li>{EXAM_FACTS.questions} questions ({EXAM_FACTS.scoredQuestions} scored) in {EXAM_FACTS.timeMinutes} minutes</li>
          <li>Passing score: {EXAM_FACTS.passingScore}</li>
          <li>Exam fee: {EXAM_FACTS.cost} · Valid for {EXAM_FACTS.validity}</li>
          <li>
            Domains:{' '}
            {EXAM_FACTS.domains.map((d) => `${d.name} ${d.weight}%`).join(' · ')}
          </li>
        </ul>
        <Link href="/practice-exam" style={styles.button}>
          Take the free practice exam — 2 sets of 10 questions →
        </Link>
        <p style={styles.note}>
          Original questions written to the official exam guide — not copied from
          AWS. Exam facts verified against the official CLF-C02 exam guide and
          the AWS certification page on 7 Nov 2026.
        </p>
      </div>

      <FaqSection items={FAQ_ITEMS} />

      <footer style={styles.footer}>
        ExamPrep — free practice first. Full 65-question timed mocks coming soon.
        Not affiliated with or endorsed by Amazon Web Services.
      </footer>
    </main>
  );
}

const styles = {
  main: { maxWidth: 760, margin: '0 auto', padding: '48px 20px', fontFamily: 'sans-serif', color: '#111827' },
  h1: { fontSize: 48, margin: '0 0 8px' },
  tag: { fontSize: 19, color: '#4b5563', margin: '0 0 32px' },
  card: { border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 },
  h2: { fontSize: 22, margin: '0 0 12px' },
  facts: { fontSize: 15, lineHeight: 1.7, color: '#374151', margin: '0 0 20px', paddingLeft: 20 },
  button: { display: 'inline-block', background: '#111827', color: '#fff', padding: '14px 18px', borderRadius: 10, textDecoration: 'none', fontWeight: 700 },
  note: { fontSize: 13, color: '#6b7280', margin: '16px 0 0' },
  footer: { marginTop: 40, fontSize: 13, color: '#9ca3af' },
};
