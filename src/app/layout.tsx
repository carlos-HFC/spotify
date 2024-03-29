import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { sharedMetadata } from "./shared-metadata";

import { Layout } from "@/components/Layout";

import { circular } from '@/fonts';
import { cn } from "@/utils";

import './globals.css';

const rubik = Rubik({
  display: "swap",
  subsets: ["latin"],
  variable: '--rubik'
});

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={cn("font-circular bg-grayscale-1000 text-white flex h-screen overflow-hidden", circular.variable, rubik.variable)}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
