'use client';

import { useState } from 'react';
import Link from 'next/link';
import { QUESTIONS, EXAM_FACTS } from '../questions';

export default function PracticeExam() {
  const [answers, setAnswers] = useState({}); // { questionId: optionIndex }
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const score = QUESTIONS.filter((q) => answers[q.id] === q.answer).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  function choose(qid, idx) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qid]: idx }));
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main style={styles.main}>
      <Link href="/" style={styles.back}>← ExamPrep</Link>
      <h1 style={styles.h1}>AWS Cloud Practitioner (CLF-C02) — Free Practice Exam</h1>
      <p style={styles.tag}>
        10 original questions in official exam style, covering all four domains.
        Answer all 10, then check your score — every answer comes with an
        explanation. The real exam is {EXAM_FACTS.questions} questions in{' '}
        {EXAM_FACTS.timeMinutes} minutes, passing score {EXAM_FACTS.passingScore}.
      </p>

      {submitted && (
        <div style={styles.result}>
          <h2 style={{ margin: '0 0 8px' }}>
            Your score: {score} / {QUESTIONS.length}
          </h2>
          <p style={{ margin: 0 }}>
            {score === QUESTIONS.length
              ? 'Perfect score. Nice work — keep going with a full timed mock next.'
              : score >= 7
                ? 'Solid. Review the explanations below, especially the ones you missed.'
                : 'Keep studying — review every explanation below, then retake the set.'}
          </p>
          <p style={{ margin: '12px 0 0', fontSize: 13, color: '#6b7280' }}>
            This is a 10-question practice set, not the real exam, and the score
            here is not a pass/fail prediction.
          </p>
          <button onClick={reset} style={styles.button}>Retake the practice exam</button>
        </div>
      )}

      {QUESTIONS.map((q, qi) => {
        const picked = answers[q.id];
        const isCorrect = submitted && picked === q.answer;
        const isWrong = submitted && picked !== undefined && picked !== q.answer;
        return (
          <section key={q.id} style={styles.qcard}>
            <div style={styles.qmeta}>
              Question {qi + 1} of {QUESTIONS.length} · {q.domain}
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

      <footer style={styles.footer}>
        Original questions written to the official CLF-C02 exam guide — not copied
        from AWS. Not affiliated with or endorsed by Amazon Web Services.
      </footer>
    </main>
  );
}

const styles = {
  main: { maxWidth: 760, margin: '0 auto', padding: '48px 20px', fontFamily: 'sans-serif', color: '#111827' },
  back: { fontSize: 14, color: '#2563eb', textDecoration: 'none' },
  h1: { fontSize: 32, margin: '12px 0 8px', lineHeight: 1.2 },
  tag: { fontSize: 16, color: '#4b5563', margin: '0 0 32px', lineHeight: 1.6 },
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
