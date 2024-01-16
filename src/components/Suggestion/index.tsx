import { Play } from "lucide-react";
import Image from "next/image";

interface SuggestionProps {
  image: string;
  title: string;
  description: string;
}

export function Suggestion(props: SuggestionProps) {
  return (
    <a href="#" className="bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-1 group">
      <div className="relative">
        <Image
          src={props.image}
          alt={`Sugestão de ${props.title}`}
          width={120}
          height={120}
          className="w-full rounded-md"
        />

        <button className="absolute bottom-2 right-2 size-12 pl-0.5 rounded-full bg-green-500 text-black flex items-center justify-center shadow-lg shadow-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105">
          <Play className="fill-black" />
        </button>
      </div>

      <strong className="font-medium pt-2 truncate">{props.title}</strong>
      <span className="text-sm text-zinc-400 line-clamp-2">{props.description}</span>
    </a>
  );
}