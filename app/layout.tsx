import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import clinicData from '../data.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: clinicData.clinic.name + ' | Physical Therapy Clinic',
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
        <Header clinicName={clinicData.clinic.name} />
        <main className="min-h-screen">{children}</main>
        <Footer data={clinicData.footer} />
      </body>
    </html>
  );
}