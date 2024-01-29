import { sharedMetadata } from "../shared-metadata";

export const metadata = {
  ...sharedMetadata,
  title: "Sua Biblioteca",
  twitter: {
    ...sharedMetadata.twitter,
    title: "Sua Biblioteca",
  },
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Sua Biblioteca",
  }
};

export default function BibliotecaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}