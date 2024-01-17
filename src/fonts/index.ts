import localFont from 'next/font/local';

export const circular = localFont({
  src: [
    {
      path: './CircularStd-Black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: './CircularStd-BlackItalic.woff2',
      weight: '900',
      style: 'italic'
    },
    {
      path: './CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './CircularStd-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: './CircularStd-Book.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './CircularStd-BookItalic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './CircularStd-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './CircularStd-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
  ],
  display: 'swap',
  variable: '--circular',
  fallback: ['Rubik', 'sans-serif']
});