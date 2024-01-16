import Image from "next/image";

interface LibraryProps {
  title: string;
  image: string;
  description: string;
  active?: boolean;
}

export function Library(props: LibraryProps) {
  return (
    <a href="#" className="hover:bg-white/5 text-sm rounded transition-colors flex gap-3 p-2">
      <Image
        src={props.image}
        alt={`Imagem da playlist ${props.title}`}
        width={48}
        height={48}
        className="rounded"
      />

      <div className="flex flex-col justify-center truncate">
        <strong className={`font-medium truncate ${props.active ? "text-green-500" : "text-zinc-200"}`}>{props.title}</strong>
        <span className="text-zinc-400 truncate">{props.description}</span>
      </div>
    </a>
  );
}