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