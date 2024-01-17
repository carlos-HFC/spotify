import Image from "next/image";

interface SuggestionProps {
  image: string;
  title: string;
  description: string;
  isSearch?: boolean;
}

export function Suggestion(props: SuggestionProps) {
  return (
    <a href="#" className="bg-white/5 p-5 rounded-lg hover:bg-white/10 h-max w-[224px] min-h-[324px] flex flex-col gap-2 group text-inherit relative">
      <div className="absolute top-3 right-3 rounded-full bg-black/20">
        <Image
          src="/assets/close.svg"
          alt="Play"
          width={32}
          height={32}
        />
      </div>

      <div className="relative shadow-md">
        <Image
          src={props.image}
          alt={`Sugestão de ${props.title}`}
          width={182}
          height={182}
          className={`${props.isSearch ? "rounded-full" : "rounded"} w-full"`}
        />

        <Image
          src="/assets/play-green.svg"
          alt="Play"
          width={94}
          height={94}
          className="absolute invisible group-hover:visible -bottom-2 -right-2"
        />
      </div>

      <strong className="font-bold text-xl pt-4 truncate">{props.title}</strong>
      <span className="text-lg text-zinc-400 line-clamp-2">{props.description}</span>
    </a>
  );
}