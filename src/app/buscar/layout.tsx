import { sharedMetadata } from "../shared-metadata";

export const metadata = {
  ...sharedMetadata,
  title: "Buscar",
  twitter: {
    ...sharedMetadata.twitter,
    title: "Buscar",
  },
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Buscar",
  }
};

export default function BuscarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}