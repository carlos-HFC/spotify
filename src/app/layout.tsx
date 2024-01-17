import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { Layout } from "@/components/Layout";

import { circular } from '@/fonts';
import { cn } from "@/utils";

import './globals.css';

const rubik = Rubik({
  display: "swap",
  subsets: ["latin"],
  variable: '--rubik'
});

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Listen to music.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={cn("font-circular bg-grayscale-1000 text-white", circular.variable, rubik.variable)}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
