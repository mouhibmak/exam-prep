import Link from 'next/link';
import { EXAM_FACTS, AZ900_FACTS, SAA_FACTS } from './questions';
import { FAQ_ITEMS, AZ900_FAQ_ITEMS, SAA_FAQ_ITEMS, FaqJsonLd, FaqSection } from './faq';

export default function Home() {
  return (
    <main style={styles.main}>
      <FaqJsonLd items={[...FAQ_ITEMS, ...AZ900_FAQ_ITEMS, ...SAA_FAQ_ITEMS]} />
      <h1 style={styles.h1}>ExamPrep</h1>
      <p style={styles.tag}>
        Free practice exams for cloud certifications. Pick an exam below — no
        sign-up.
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

      <div style={{ ...styles.card, marginTop: 24 }}>
        <h2 style={styles.h2}>
          {AZ900_FACTS.name} ({AZ900_FACTS.code}) — NEW
        </h2>
        <ul style={styles.facts}>
          <li>{AZ900_FACTS.timeMinutes} minutes · Passing score: {AZ900_FACTS.passingScore}</li>
          <li>Exam fee: {AZ900_FACTS.cost}</li>
          <li>
            Domains:{' '}
            {AZ900_FACTS.domains.map((d) => `${d.name} ${d.weight}`).join(' · ')}
          </li>
        </ul>
        <Link href="/practice-exam?exam=az900" style={styles.button}>
          Take the free AZ-900 practice exam — 10 questions →
        </Link>
        <p style={styles.note}>
          Original questions written to the official AZ-900 study guide on
          Microsoft Learn (skills measured as of 20 July 2026) — not copied
          from Microsoft. Not affiliated with or endorsed by Microsoft.
        </p>
      </div>

      <div style={{ ...styles.card, marginTop: 24 }}>
        <h2 style={styles.h2}>
          {SAA_FACTS.name} ({SAA_FACTS.code}) — NEW
        </h2>
        <ul style={styles.facts}>
          <li>{SAA_FACTS.questions} questions ({SAA_FACTS.scoredQuestions} scored) in {SAA_FACTS.timeMinutes} minutes</li>
          <li>Passing score: {SAA_FACTS.passingScore}</li>
          <li>Exam fee: {SAA_FACTS.cost} · Valid for {SAA_FACTS.validity}</li>
          <li>
            Domains:{' '}
            {SAA_FACTS.domains.map((d) => `${d.name} ${d.weight}%`).join(' · ')}
          </li>
        </ul>
        <Link href="/practice-exam?exam=saa" style={styles.button}>
          Take the free SAA-C03 practice exam — 10 questions →
        </Link>
        <p style={styles.note}>
          Original questions written to the official SAA-C03 exam guide
          (version 1.1) and AWS documentation — not copied from AWS. Not
          affiliated with or endorsed by Amazon Web Services.
        </p>
      </div>

      <FaqSection items={FAQ_ITEMS} />
      <FaqSection items={AZ900_FAQ_ITEMS} />
      <FaqSection items={SAA_FAQ_ITEMS} />

      <footer style={styles.footer}>
        ExamPrep — free practice first. Full 65-question timed mocks coming soon.
        Not affiliated with or endorsed by Amazon Web Services or Microsoft.
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
