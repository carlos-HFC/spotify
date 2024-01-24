import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import { MouseEvent } from "react";

import { cn } from "@/utils";

interface MusicProps extends Track {
  isPlaying?: boolean;
  index: number;
  onContextMenu(event: MouseEvent<HTMLDivElement | HTMLButtonElement>): void;
}

export function Music(props: MusicProps) {
  return (
    <tr
      className="w-full hover:bg-white/10 group border-spacing-y-2"
      onContextMenu={props.onContextMenu}
    >
      <td className="pl-5 py-3 rounded-l-md">
        <div className="flex items-center gap-4">
          <div className="min-w-[28px] text-center text-grayscale-300 text-2xl">
            <span className={cn(props.isPlaying ? "hidden" : "group-hover:hidden")}>{props.index}</span>

            <Image
              src={props.isPlaying ? "/assets/bars-1.svg" : "/assets/play.svg"}
              alt="Play"
              width={28}
              height={28}
              className={cn(props.isPlaying ? "group-hover:hidden" : "group-hover:block hidden")}
            />

            <Image
              src="/assets/pause.svg"
              alt="Play"
              width={28}
              height={28}
              className={cn("hidden", props.isPlaying && "group-hover:block")}
            />
          </div>
          <div className="flex items-center gap-5 truncate">
            <Image
              src={props.image}
              alt={props.album}
              width={52}
              height={52}
              loading="lazy"
            />

            <div>
              <div className={cn("text-xl truncate", props.isPlaying ? "text-spotify-100" : "text-white")}>{props.song}</div>
              <div className="text-grayscale-300 text-lg truncate">{props.artist}</div>
            </div>
          </div>
        </div>
      </td>

      <td className="text-grayscale-300 text-lg">{props.album}</td>

      <td className="text-grayscale-300 text-lg">{format(parseISO(props.date), "d 'de' MMM 'de' yyyy", { locale: ptBR })}</td>

      <td className="pr-5 rounded-r-md">
        <div className="flex items-center gap-4 justify-end">
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
      </td>
    </tr>
  );
}