import Image from "next/image";
import { MouseEvent } from "react";

import { cn } from "@/utils";

interface MusicProps {
  isPlaying?: boolean;
  liked?: boolean;
  artist: string;
  image: string;
  index: number;
  album: string;
  song: string;
  time: string;
  onContextMenu(event: MouseEvent<HTMLDivElement | HTMLButtonElement>): void;
}

export function Music(props: MusicProps) {
  return (
    <div
      className="grid grid-cols-3 flex-1 items-center justify-between rounded-md px-5 py-2 hover:bg-white/10 group"
      onContextMenu={props.onContextMenu}
    >
      <div className="grid grid-flow-col items-center justify-start gap-4">
        <div className="min-w-[28px] text-center text-grayscale-300 text-2xl">
          <span className={cn(props.isPlaying ? "hidden" : "group-hover:hidden")}>{props.index}</span>

          <Image
            src={props.isPlaying ? "/assets/bars-1.svg" : "/assets/play.svg"}
            alt="Play"
            width={28}
            height={28}
            className={cn(props.isPlaying ? "" : "group-hover:block hidden")}
          />
        </div>
        <div className="flex items-center gap-5">
          <Image
            src={props.image}
            alt={props.album}
            width={52}
            height={52}
          />

          <div>
            <div className={cn("text-xl", props.isPlaying ? "text-spotify-100" : "text-white")}>{props.song}</div>
            <div className="text-grayscale-300 text-lg">{props.artist}</div>
          </div>
        </div>
      </div>

      <div className="text-grayscale-300 text-lg">{props.album}</div>

      <div className="grid grid-flow-col items-center justify-end gap-4">
        <Image
          src={props.liked ? "/assets/heart-fill.svg" : "/assets/heart.svg"}
          alt="Coração"
          width={28}
          height={28}
          className={cn("mr-5", props.liked ? "" : "group-hover:visible invisible")}
        />

        <span className="text-white text-xl text-center w-12">{props.time}</span>

        <button
          className="group-hover:visible invisible"
          aria-label="Abrir opções"
          onClick={props.onContextMenu}
        >
          <Image
            src="/assets/options.svg"
            alt="Opções"
            width={28}
            height={28}
          />
        </button>
      </div>
    </div>
  );
}