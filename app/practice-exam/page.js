'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { QUESTIONS, QUESTIONS_SET_B, QUESTIONS_AZ900, EXAM_FACTS, AZ900_FACTS } from '../questions';
import { FAQ_ITEMS, AZ900_FAQ_ITEMS, FaqJsonLd, FaqSection } from '../faq';

const EXAMS = {
  clf: {
    id: 'clf',
    label: 'AWS Cloud Practitioner (CLF-C02)',
    facts: EXAM_FACTS,
    sets: [
      { id: 'A', label: 'Set A', questions: QUESTIONS },
      { id: 'B', label: 'Set B', questions: QUESTIONS_SET_B },
    ],
    faq: FAQ_ITEMS,
    footer: 'Original questions written to the official CLF-C02 exam guide — not copied from AWS. Not affiliated with or endorsed by Amazon Web Services.',
  },
  az900: {
    id: 'az900',
    label: 'Microsoft Azure Fundamentals (AZ-900)',
    facts: AZ900_FACTS,
    sets: [{ id: 'A', label: 'Set A', questions: QUESTIONS_AZ900 }],
    faq: AZ900_FAQ_ITEMS,
    footer: 'Original questions written to the official AZ-900 study guide on Microsoft Learn — not copied from Microsoft. Not affiliated with or endorsed by Microsoft.',
  },
};

export default function PracticeExam() {
  const [examId, setExamId] = useState('clf');
  const [setId, setSetId] = useState('A');
  const [answers, setAnswers] = useState({}); // { questionId: optionIndex }
  const [submitted, setSubmitted] = useState(false);

  // Read ?exam=az900 from the URL on mount (client-side only, build-safe).
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('exam') === 'az900') setExamId('az900');
    } catch {
      // No query string available: keep the default exam.
    }
  }, []);

  const exam = EXAMS[examId];
  const activeSet = exam.sets.find((s) => s.id === setId) || exam.sets[0];
  const questions = activeSet.questions;
  const answeredCount = Object.keys(answers).length;
  const score = questions.filter((q) => answers[q.id] === q.answer).length;
  const allAnswered = answeredCount === questions.length;

  function choose(qid, idx) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qid]: idx }));
  }

  function switchExam(id) {
    setExamId(id);
    setSetId('A');
    setAnswers({});
    setSubmitted(false);
    try {
      const url = new URL(window.location.href);
      if (id === 'az900') url.searchParams.set('exam', 'az900');
      else url.searchParams.delete('exam');
      window.history.replaceState(null, '', url.toString());
    } catch {
      // History update is cosmetic; the exam switch already happened.
    }
  }

  function switchSet(id) {
    setSetId(id);
    setAnswers({});
    setSubmitted(false);
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main style={styles.main}>
      <FaqJsonLd items={exam.faq} />
      <Link href="/" style={styles.back}>← ExamPrep</Link>
      <h1 style={styles.h1}>{exam.label} — Free Practice Exam</h1>
      <p style={styles.tag}>
        {examId === 'clf'
          ? `Two sets of 10 original questions in official exam style, covering all four domains. Answer all 10, then check your score — every answer comes with an explanation. The real exam is ${EXAM_FACTS.questions} questions in ${EXAM_FACTS.timeMinutes} minutes, passing score ${EXAM_FACTS.passingScore}.`
          : `10 original questions in official exam style, covering all three domains. Answer all 10, then check your score — every answer comes with an explanation. The real exam is ${AZ900_FACTS.timeMinutes} minutes, passing score ${AZ900_FACTS.passingScore}.`}
      </p>

      <div style={styles.setRow}>
        {Object.values(EXAMS).map((e) => (
          <button
            key={e.id}
            onClick={() => switchExam(e.id)}
            style={{
              ...styles.setButton,
              background: examId === e.id ? '#111827' : '#fff',
              color: examId === e.id ? '#fff' : '#111827',
            }}
          >
            {e.id === 'clf' ? 'CLF-C02' : 'AZ-900'}
          </button>
        ))}
      </div>

      {exam.sets.length > 1 && (
        <div style={styles.setRow}>
          {exam.sets.map((s) => (
            <button
              key={s.id}
              onClick={() => switchSet(s.id)}
              style={{
                ...styles.setButton,
                background: setId === s.id ? '#111827' : '#fff',
                color: setId === s.id ? '#fff' : '#111827',
              }}
            >
              {s.label} — 10 questions
            </button>
          ))}
        </div>
      )}
      <p style={styles.setNote}>
        {exam.label} · {activeSet.label}
        {examId === 'clf' && (setId === 'A' ? ' · first mock set' : ' · second mock set — new questions on different topics')}
      </p>

      {submitted && (
        <div style={styles.result}>
          <h2 style={{ margin: '0 0 8px' }}>
            Your score: {score} / {questions.length}
          </h2>
          <p style={{ margin: 0 }}>
            {score === questions.length
              ? 'Perfect score. Nice work — try the other set or the other exam next.'
              : score >= 7
                ? 'Solid. Review the explanations below, especially the ones you missed.'
                : 'Keep studying — review every explanation below, then retake the set.'}
          </p>
          <p style={{ margin: '12px 0 0', fontSize: 13, color: '#6b7280' }}>
            This is a 10-question practice set, not the real exam, and the score
            here is not a pass/fail prediction.
          </p>
          <button onClick={reset} style={styles.button}>Retake this set</button>
        </div>
      )}

      {questions.map((q, qi) => {
        const picked = answers[q.id];
        const isCorrect = submitted && picked === q.answer;
        const isWrong = submitted && picked !== undefined && picked !== q.answer;
        return (
          <section key={q.id} style={styles.qcard}>
            <div style={styles.qmeta}>
              Question {qi + 1} of {questions.length} · {q.domain}
            </div>
            <p style={styles.qtext}>{q.question}</p>
            <div style={styles.options}>
              {q.options.map((opt, oi) => {
                let bg = '#fff';
                let border = '#d1d5db';
                if (submitted) {
                  if (oi === q.answer) { bg = '#dcfce7'; border = '#16a34a'; }
                  else if (oi === picked) { bg = '#fee2e2'; border = '#dc2626'; }
                } else if (picked === oi) {
                  bg = '#eff6ff'; border = '#2563eb';
                }
                return (
                  <button
                    key={oi}
                    onClick={() => choose(q.id, oi)}
                    style={{ ...styles.option, background: bg, border: `1px solid ${border}` }}
                  >
                    <strong>{String.fromCharCode(65 + oi)}.</strong> {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div style={styles.explain}>
                <strong>{isCorrect ? 'Correct.' : isWrong ? 'Not quite.' : 'You skipped this one.'}</strong>{' '}
                {q.explanation}
              </div>
            )}
          </section>
        );
      })}

      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          style={{ ...styles.button, opacity: allAnswered ? 1 : 0.5, cursor: allAnswered ? 'pointer' : 'not-allowed' }}
        >
          {allAnswered
            ? 'Check my score'
            : `Answer all 10 questions to check your score (${answeredCount}/10 answered)`}
        </button>
      )}

      <FaqSection items={exam.faq} />

      <footer style={styles.footer}>{exam.footer}</footer>
    </main>
  );
}

const styles = {
  main: { maxWidth: 760, margin: '0 auto', padding: '48px 20px', fontFamily: 'sans-serif', color: '#111827' },
  back: { fontSize: 14, color: '#2563eb', textDecoration: 'none' },
  h1: { fontSize: 32, margin: '12px 0 8px', lineHeight: 1.2 },
  tag: { fontSize: 16, color: '#4b5563', margin: '0 0 24px', lineHeight: 1.6 },
  setRow: { display: 'flex', gap: 10, marginBottom: 8 },
  setButton: { padding: '10px 16px', borderRadius: 999, border: '1px solid #111827', cursor: 'pointer', fontSize: 14, fontWeight: 700 },
  setNote: { fontSize: 13, color: '#6b7280', margin: '0 0 24px' },
  result: { border: '1px solid #e5e7eb', borderRadius: 12, padding: 24, marginBottom: 32, background: '#f9fafb' },
  qcard: { border: '1px solid #e5e7eb', borderRadius: 12, padding: 24, marginBottom: 20 },
  qmeta: { fontSize: 13, color: '#6b7280', marginBottom: 8 },
  qtext: { fontSize: 17, lineHeight: 1.55, margin: '0 0 16px' },
  options: { display: 'flex', flexDirection: 'column', gap: 10 },
  option: { textAlign: 'left', fontSize: 15, lineHeight: 1.5, padding: '12px 14px', borderRadius: 8, cursor: 'pointer' },
  explain: { fontSize: 14, lineHeight: 1.6, background: '#f3f4f6', borderRadius: 8, padding: '12px 14px', marginTop: 14 },
  button: { display: 'inline-block', background: '#111827', color: '#fff', padding: '14px 18px', borderRadius: 10, border: 'none', fontWeight: 700, fontSize: 15, marginTop: 8 },
  footer: { marginTop: 40, fontSize: 13, color: '#9ca3af' },
};
