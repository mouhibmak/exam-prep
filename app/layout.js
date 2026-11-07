import './globals.css';

export const metadata = {
  title: 'ExamPrep — Free AWS Cloud Practitioner (CLF-C02) Practice Exam',
  description:
    'Free AWS Certified Cloud Practitioner (CLF-C02) practice questions with instant scoring and explanations. No sign-up. Original questions written to the official exam guide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
