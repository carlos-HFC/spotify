import Image from "next/image";

import { cn } from "@/utils";

interface GenreProps {
  top?: boolean;
  variant: Genre;
  image: string;
  genre: string;
}

export function Genre(props: GenreProps) {
  const VARIANT = {
    pop: 'bg-genre-pop',
    afro: 'bg-genre-afro',
    'hip-hop': 'bg-genre-hip-hop',
    podcasts: 'bg-genre-podcasts',
    'made-for-you': 'bg-genre-made-for-you',
    music: 'bg-genre-music',
    'live-event': 'bg-genre-live-event',
    release: 'bg-genre-release',
    brazil: 'bg-genre-brazil',
    pagode: 'bg-genre-pagode',
    mpb: 'bg-genre-mpb',
    rock: 'bg-genre-rock',
    alternative: 'bg-genre-alternative',
    blues: 'bg-genre-blues',
    punk: 'bg-genre-punk',
    classic: 'bg-genre-classic',
    instrumental: 'bg-genre-instrumental',
    jazz: 'bg-genre-jazz',
    reggae: 'bg-genre-reggae',
    tv: 'bg-genre-tv',
    games: 'bg-genre-games',
    rb: 'bg-genre-rb',
    kpop: 'bg-genre-kpop',
    latina: 'bg-genre-latina',
    soul: 'bg-genre-soul',
    folk: 'bg-genre-folk',
    country: 'bg-genre-country',
    sertanejo: 'bg-genre-sertanejo',
  };

  return (
    <a
      href="#"
      className={cn("overflow-hidden rounded-xl flex flex-1 min-w-60 min-h-60 relative max-w-[480px] p-5", props.top && "h-64", VARIANT[props.variant])}
    >
      <div className={cn("font-bold", props.top ? "text-5xl tracking-[-2.6px]" : "text-3xl tracking-[-.9px]")}>
        {props.genre}
      </div>

      <Image
        src={props.image}
        alt={props.genre}
        width={props.top ? 164 : 128}
        height={props.top ? 164 : 128}
        loading="lazy"
        className="rotate-[25deg] shadow-black/15 shadow-[-2px_2px_6px_0] absolute -right-6 -bottom-2"
      />
    </a>
  );
}