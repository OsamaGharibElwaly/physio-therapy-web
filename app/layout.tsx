// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import clinicData from '../data.json'; // المسار ده صحيح لو data.json في root

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${clinicData.clinic.name}`,
    default: `${clinicData.clinic.name} | Physical Therapy Clinic`,
  },
  description: clinicData.clinic.shortBioText,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* تمرير اسم العيادة من data.json */}
        <Header clinicName={clinicData.clinic.name} />

        {/* المحتوى الرئيسي مع padding عشان الـ fixed header */}
        <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>

        <Footer data={clinicData.footer} />
      </body>
    </html>
  );
}