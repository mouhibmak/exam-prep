import './globals.css';

export const metadata = {
  title: 'Free AWS CLF-C02 Practice Exam | ExamPrep',
  description:
    'Free AWS Certified Cloud Practitioner (CLF-C02) practice exam: 20 original questions in two sets, instant scoring and explanations. No sign-up.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
