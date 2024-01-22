import Image from "next/image";

import { VARIANT } from "@/constants";
import { cn } from "@/utils";

interface GenreProps {
  top?: boolean;
  variant: Genre;
  image: string;
  genre: string;
}

export function Genre(props: GenreProps) {
  return (
    <a
      href="#"
      className={cn("overflow-hidden rounded-xl flex bg-blue-200 relative p-5", props.top ? "flex-1 h-64" : 'size-60', VARIANT[props.variant].background)}
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
    </a >
  );
}