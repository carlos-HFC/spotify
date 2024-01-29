import Image from "next/image";

import { cn } from "@/utils";

interface SuggestionProps extends Playlist {
  isSearch?: boolean;
  rounded?: boolean;
}

export function Suggestion(props: SuggestionProps) {
  return (
    <a
      href="#"
      className="bg-white/5 p-5 rounded-lg hover:bg-white/10 h-max w-[224px] min-h-[324px] flex flex-col gap-2 group text-inherit relative"
    >
      <div className={cn("absolute top-3 right-3 rounded-full bg-black/20", props.isSearch ? "block" : "hidden")}>
        <Image
          src="/assets/close.svg"
          alt="Remover"
          width={32}
          height={32}
        />
      </div>

      <div className="relative">
        <Image
          src={props.image}
          alt={props.title}
          width={182}
          height={182}
          loading="lazy"
          className={cn("w-full shadow-lg shadow-black/50", props.isSearch || props.rounded ? "rounded-full" : "rounded")}
        />

        <Image
          src="/assets/play-green.svg"
          alt="Play"
          width={62}
          height={62}
          className="absolute invisible group-hover:visible bottom-2 right-2 drop-shadow-play-green"
        />
      </div>

      <strong className="font-bold text-xl pt-4 truncate">{props.title}</strong>
      <span className="text-lg text-zinc-400 line-clamp-2">{props.description}</span>
    </a>
  );
}