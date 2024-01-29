import { Metadata } from "next";

export const sharedMetadata: Metadata = {
  title: {
    template: "Spotify - %s",
    default: "Spotify - Web player: música para todas as pessoas"
  },
  description: "Listen to music.",
  twitter: {
    card: "summary_large_image",
    title: {
      template: "Spotify - %s",
      default: "Spotify - Web player: música para todas as pessoas"
    },
    description: 'Listen to music.',
    images: {
      url: "/favicon/favicon-512x512.png",
      alt: 'Spotify Logo'
    },
  },
  openGraph: {
    type: "website",
    url: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
    title: {
      template: "Spotify - %s",
      default: "Spotify - Web player: música para todas as pessoas"
    },
    locale: 'pt_BR',
    siteName: 'Spotify',
    description: 'Listen to music.',
    images: {
      url: "/favicon/favicon-512x512.png",
      alt: 'Spotify Logo'
    },
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    shortcut: '/shortcut-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg'
    }
  },
  creator: "Carlos Faustino",
  keywords: ["Spotify", "React", "Typescript", "Next.js", "TailwindCSS"],
  authors: [
    {
      name: "Carlos Faustino",
      url: "https://github.com/carlos-hfc"
    }
  ],
  category: 'technology',
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
  alternates: {
    canonical: String(process.env.NEXT_PUBLIC_BASE_URL)
  }
};