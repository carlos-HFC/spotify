type Genre = 'pop' | 'afro' | 'hip-hop' | 'podcasts' | 'made-for-you' | 'music' | 'live-event' | 'release' | 'brazil' | 'pagode' | 'mpb' | 'rock' | 'alternative' | 'blues' | 'punk' | 'classic' | 'instrumental' | 'jazz' | 'reggae' | 'tv' | 'games' | 'rb' | 'kpop' | 'latina' | 'soul' | 'folk' | 'country' | 'sertanejo';

type Track = {
  artist: string;
  song: string;
  album: string;
  image: string;
  time: string;
  liked: boolean;
  date: string;
  description?: string;
};

type Playlist = {
  title: string;
  image: string;
  description: string;
};