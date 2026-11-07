import './globals.css';

export const metadata = {
  title: 'Free AWS CLF-C02 & AZ-900 Practice Exams | ExamPrep',
  description:
    'Free AWS Certified Cloud Practitioner (CLF-C02) and Microsoft Azure Fundamentals (AZ-900) practice exams: original questions, instant scoring and explanations. No sign-up.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
