import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'liked-songs': 'linear-gradient(135deg, #3822EA 3.13%, #A3A6E5 100%)',
        bloom: 'url("/assets/search.svg")',
        home: 'linear-gradient(180deg, #3333A3 86px, #121212 567px)',
        'liked-page': 'linear-gradient(180deg, #604EC1 86px, #121212 740px)'
      },
      colors: {
        spotify: {
          100: '#65d36e',
          200: '#63cf6c',
        },
        grayscale: {
          100: '#bababa',
          200: '#b3b3b3',
          300: '#a6a6a6',
          400: '#999999',
          500: '#666666',
          600: '#434349',
          700: '#3e3e3e',
          800: '#282828',
          900: '#1f1f1f',
          1000: '#181818',
        },
        genre: {
          pop: '#876aa7',
          afro: '#af2896',
          'hip-hop': '#ba5d07',
          podcasts: '#27856a',
          'made-for-you': '#1e3264',
          music: '#dc148c',
          'live-event': '#8400e7',
          release: '#e8115b',
          brazil: '#ffc864',
          pagode: '#006450',
          mpb: '#a0c3d2',
          rock: '#e91429',
          alternative: '#e13300',
          blues: '#b06239',
          punk: '#1e3264',
          classic: '#7d4b32',
          instrumental: '#537aa1',
          jazz: '#777777',
          reggae: '#006450',
          tv: '#af2896',
          games: '#38115b',
          rb: '#ba5d07',
          kpop: '#148a08',
          latina: '#e1118c',
          soul: '#dc148c',
          folk: '#bc5900',
          country: '#d84000',
          sertanejo: '#537aa1'
        }
      },
      fontFamily: {
        rubik: ['var(--rubik)'],
        circular: ['var(--circular)', 'var(--rubik)', 'sans-serif'],
      },
      fontSize: {
        xxs: '.625rem'
      }
    },
  },
  plugins: [],
};
export default config;
