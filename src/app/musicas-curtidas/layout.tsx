import { sharedMetadata } from "../shared-metadata";

export const metadata = {
  ...sharedMetadata,
  title: "Músicas Curtidas",
  twitter: {
    ...sharedMetadata.twitter,
    title: "Músicas Curtidas",
  },
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Músicas Curtidas",
  }
};

export default function MusicasCurtidasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}