export const MENU = [
  {
    label: 'Início',
    icon: '/assets/home.svg',
    iconFilled: '/assets/home-fill.svg',
    link: '/'
  },
  {
    label: 'Buscar',
    icon: '/assets/search.svg',
    iconFilled: '/assets/search-fill.svg',
    link: '/buscar'
  },
  {
    label: 'Sua Biblioteca',
    icon: '/assets/library.svg',
    iconFilled: '/assets/library-fill.svg',
    link: '/biblioteca'
  },
  {
    label: 'Criar Playlist',
    icon: '/assets/plus.svg',
    iconFilled: '/assets/plus.svg',
    link: '/playlist'
  },
  {
    label: 'Músicas Curtidas',
    icon: '/assets/liked-song.svg',
    iconFilled: '/assets/liked-song.svg',
    link: '/musicas-curtidas'
  },
];

export const LIBRARY = [
  {
    title: 'Músicas Curtidas',
    description: 'Playlist',
    active: true
  },
  {
    title: 'BEST METALLICA',
    description: 'Playlist',
    active: false
  },
  {
    title: 'Heavy Metal',
    description: 'PLaylist',
    active: false
  },
  {
    title: '72 Seasons',
    description: 'Álbum',
    active: false
  },
  {
    title: 'Semana NFL',
    description: 'Podcast',
    active: false
  },
  {
    title: 'Ashes of the Wake',
    description: 'Álbum',
    active: false
  },
  {
    title: 'Legendary Guitar Solos',
    description: 'Playlist',
    active: false
  },
  {
    title: 'One Hot Minute',
    description: 'Álbum',
    active: false
  },
  {
    title: 'Metallica (Remastered 2021)',
    description: 'Álbum',
    active: false
  },
  {
    title: 'Unlimited Love',
    description: 'Álbum',
    active: false
  },
  {
    title: 'Correspondes Premier',
    description: 'Podcast',
    active: false
  },
  {
    title: 'Ride The Lightning',
    description: 'Álbum',
    active: false
  },
  {
    title: 'BEST IRON MAIDEN',
    description: 'Playlist',
    active: false
  },
  {
    title: 'BEST RHCP',
    description: 'Playlist',
    active: false
  },
  {
    title: 'By the Way (Deluxe Edition)',
    description: 'Álbum',
    active: false
  },
  {
    title: 'BEST PEARL JAM',
    description: 'Playlist',
    active: false
  },
  {
    title: 'Futebol no Mundo',
    description: 'Podcast',
    active: false
  },
  {
    title: 'Californication (Deluxe Edition)',
    description: 'Álbum',
    active: false
  },
  {
    title: 'System Of A Down',
    description: 'Álbum',
    active: false
  },
  {
    title: 'Punk Rock',
    description: 'Playlist',
    active: false
  },
  {
    title: 'Thrash Metal',
    description: 'Playlist',
    active: false
  },
  {
    title: 'The Final Frontier (2015 Remaster)',
    description: 'Álbum',
    active: false
  },
  {
    title: 'Piece of Mind (2015 Remaster)',
    description: 'Álbum',
    active: false
  },
  {
    title: 'Americana',
    description: 'Álbum',
    active: false
  },
];

export const SONGS = [
  {
    artist: 'Santana',
    song: 'Smooth',
    album: 'Supernatural (Legacy Edition)',
    image: '',
    time: '4:55',
    liked: true
  },
  {
    artist: 'Stevie Ray Vaughan',
    song: 'Lenny',
    album: 'Texas Flood (Legacy Edition)',
    image: '',
    time: '4:57',
    liked: true
  },
  {
    artist: 'Prince',
    song: 'Purple Rain',
    album: 'Purple Rain',
    image: '',
    time: '8:41',
    liked: true
  },
  {
    artist: 'Pink Floyd',
    song: 'Comfortably Numb',
    album: 'The Wall',
    image: '',
    time: '6:22',
    liked: true
  },
  {
    artist: 'The White Stripes',
    song: 'We\'re Going to Be Friends',
    album: 'White Blood Cells',
    image: '',
    time: '2:20',
    liked: true
  },
  {
    artist: 'Dire Straits',
    song: 'Walk Of Life',
    album: 'Brothers In Arms (Remastered)',
    image: '',
    time: '4:10',
    liked: true
  },
];

export const CONTEXT_MENU_HEADER = [
  {
    label: 'Conta',
  },
  {
    label: 'Perfil',
  },
  {
    label: 'Sessão particular',
  },
  {
    label: 'Configurações',
  },
  {
    label: 'Sair',
  },
];

export const CONTEXT_MENU_SONG = [
  {
    label: "Adicionar à fila",
    icon: false
  },
  {
    label: "Ir para a rádio da música",
    icon: false
  },
  {
    label: "Ir para o artista",
    icon: true
  },
  {
    label: "Ir para o álbum",
    icon: false
  },
  {
    label: "Remover das Músicas Curtidas",
    icon: false
  },
  {
    label: "Adicionar à playlist",
    icon: true
  },
  {
    label: "Compartilhar",
    icon: true
  }
];

export const VARIANT = {
  pop: {
    background: 'bg-genre-pop',
    border: 'border-genre-pop',
  },
  afro: {
    background: 'bg-genre-afro',
    border: 'border-genre-afro',
  },
  'hip-hop': {
    background: 'bg-genre-hip-hop',
    border: 'border-genre-hip-hop',
  },
  podcasts: {
    background: 'bg-genre-podcasts',
    border: 'border-genre-podcasts',
  },
  'made-for-you': {
    background: 'bg-genre-made-for-you',
    border: 'border-genre-made-for-you',
  },
  music: {
    background: 'bg-genre-music',
    border: 'border-genre-music',
  },
  'live-event': {
    background: 'bg-genre-live-event',
    border: 'border-genre-live-event',
  },
  release: {
    background: 'bg-genre-release',
    border: 'border-genre-release',
  },
  brazil: {
    background: 'bg-genre-brazil',
    border: 'border-genre-brazil',
  },
  pagode: {
    background: 'bg-genre-pagode',
    border: 'border-genre-pagode',
  },
  mpb: {
    background: 'bg-genre-mpb',
    border: 'border-genre-mpb',
  },
  rock: {
    background: 'bg-genre-rock',
    border: 'border-genre-rock',
  },
  alternative: {
    background: 'bg-genre-alternative',
    border: 'border-genre-alternative',
  },
  blues: {
    background: 'bg-genre-blues',
    border: 'border-genre-blues',
  },
  punk: {
    background: 'bg-genre-punk',
    border: 'border-genre-punk',
  },
  classic: {
    background: 'bg-genre-classic',
    border: 'border-genre-classic',
  },
  instrumental: {
    background: 'bg-genre-instrumental',
    border: 'border-genre-instrumental',
  },
  jazz: {
    background: 'bg-genre-jazz',
    border: 'border-genre-jazz',
  },
  reggae: {
    background: 'bg-genre-reggae',
    border: 'border-genre-reggae',
  },
  tv: {
    background: 'bg-genre-tv',
    border: 'border-genre-tv',
  },
  games: {
    background: 'bg-genre-games',
    border: 'border-genre-games',
  },
  rb: {
    background: 'bg-genre-rb',
    border: 'border-genre-rb',
  },
  kpop: {
    background: 'bg-genre-kpop',
    border: 'border-genre-kpop',
  },
  latina: {
    background: 'bg-genre-latina',
    border: 'border-genre-latina',
  },
  soul: {
    background: 'bg-genre-soul',
    border: 'border-genre-soul',
  },
  folk: {
    background: 'bg-genre-folk',
    border: 'border-genre-folk',
  },
  country: {
    background: 'bg-genre-country',
    border: 'border-genre-country',
  },
  sertanejo: {
    background: 'bg-genre-sertanejo',
    border: 'border-genre-sertanejo',
  },
};

export const EPISODES = [
  {
    image: "/semana-nfl.webp",
    title: "Semana NFL #104 - Dallas e Philadelphia ELIMINADOS: Recap Wild Card",
    description: "16 de jan. \u2022 62min"
  },
  {
    image: "/futebol-no-mundo.webp",
    title: "Futebol no Mundo #303: Show de Vini Jr e título do Real Madrid; De Bruyne brilha em virada do City",
    description: "15 de jan. \u2022 61min"
  },
  {
    image: "/correspondentes-premier.webp",
    title: "CORRESPONDENTES PREMIER #302 - LÍDERPOOL!",
    description: "3 de jan. \u2022 97min"
  },
];

export const RECENTLY_PLAYED = [
  {
    image: "/assets/liked-song.svg",
    title: "Músicas Curtidas",
    description: "1.517 músicas"
  },
  {
    image: "/metallica.webp",
    title: "BEST METALLICA",
    description: "De Carlos Faustino"
  },
  {
    image: "/the-number-of-the-beast.webp",
    title: "Heavy Metal",
    description: "De Carlos Faustino"
  },
  {
    image: "/rhcp.webp",
    title: "BEST RHCP",
    description: "De Carlos Faustino"
  },
  {
    image: "/72-seasons.webp",
    title: "72 Seasons",
    description: "Metallica"
  },
  {
    image: "/pearl-jam.webp",
    title: "Pearl Jam",
    description: "Artista",
    rounded: true
  },
];

export const MADE_FOR_YOU = [
  {
    image: "/iron-maiden.webp",
    title: "Descobertas da Semana",
    description: "Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só para você. Atualiza toda segunda."
  },
  {
    image: "/rhcp.webp",
    title: "Daily Mix 1",
    description: "Red Hot Chili Peppers, Pearl Jam, Metallica e mais"
  },
  {
    image: "/offspring.webp",
    title: "Daily Mix 2",
    description: "The Offspring, Foo Fighters, Green Day e mais"
  },
  {
    image: "/soad.webp",
    title: "Daily Mix 3",
    description: "System Of A Down, Disturbed, Rage Against The Machine e mais"
  },
  {
    image: "/metallica.webp",
    title: "Daily Mix 4",
    description: "Metallica, Pantera, Slayer e mais"
  },
  {
    image: "/pearl-jam.webp",
    title: "Daily Mix 5",
    description: "Pearl Jam, Nirvana, Alice in Chains e mais"
  },
];

export const YOUR_PLAYLISTS = [
  {
    image: "/rhcp.webp",
    title: "BEST RHCP",
    description: "De Carlos Faustino"
  },
  {
    image: "/ten.webp",
    title: "Grunge",
    description: "De Carlos Faustino"
  },
  {
    image: "/pearl-jam.webp",
    title: "BEST PEARL JAM",
    description: "De Carlos Faustino"
  },
  {
    image: "/offspring.webp",
    title: "BEST OFFSPRING",
    description: "De Carlos Faustino"
  },
  {
    image: "/iron-maiden.webp",
    title: "BEST IRON MAIDEN",
    description: "De Carlos Faustino"
  },
  {
    image: "/72-seasons.webp",
    title: "Thrash Metal",
    description: "De Carlos Faustino"
  },
];