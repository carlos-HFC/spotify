import { Play } from "lucide-react";
import Image from "next/image";

interface RecentProps {
  image: string;
  name: string;
}

export function Recent(props: RecentProps) {
  return (
    <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-3 hover:bg-white/10 transition-colors">
      <Image
        src={props.image}
        alt={`Capa do álbum ${props.name}`}
        width={72}
        height={72}
      />

      <strong className="font-medium">{props.name}</strong>
      <button className="size-12 pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-4 flex items-center justify-center shadow-lg shadow-black/50 invisible group-hover:visible hover:scale-105">
        <Play className="fill-black" />
      </button>
    </a>
  );
}