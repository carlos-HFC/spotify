import Image from "next/image";

import { SONGS } from "@/constants";

export function LikedSongs() {
  return (
    <a href="#" className="min-h-[324px] h-full flex flex-1 flex-col justify-end gap-9 p-6 bg-liked-songs rounded-lg relative group">
      <div className="inline [&_*:nth-child(1)]:ml-0">
        {SONGS.slice(0, 6).map(item => (
          <div
            className="text-xl ml-1 inline"
            key={item.song}
          >
            {item.artist} <span className="text-white/60">{item.song} &bull;</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col relative">
        <span className="font-bold text-4xl">Músicas Curtidas</span>
        <p className="text-xl">{SONGS.length.toLocaleString('pt-BR')} músicas</p>
      </div>

      <Image
        src="/assets/play-green.svg"
        alt="Play"
        width={62}
        height={62}
        className="absolute right-5 bottom-5 invisible group-hover:visible drop-shadow-play-green"
      />
    </a>
  );
}