import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  display: "swap",
  subsets: ["latin"]
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
      <body className={`${rubik.className} bg-zinc-900 text-zinc-50`}>{children}</body>
    </html>
  );
}
