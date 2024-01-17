import Image from "next/image";

interface RecentProps {
  image: string;
  name: string;
}

export function Recent(props: RecentProps) {
  return (
    <a href="#" className="bg-white/10 h-20 max-w-[480px] group rounded-md overflow-hidden flex-1 flex gap-5 hover:bg-white/20 text-inherit justify-between">
      <Image
        src={props.image}
        alt={`Capa do álbum ${props.name}`}
        width={80}
        height={80}
      />

      <strong className="font-bold text-xl self-center flex-1">{props.name}</strong>

      <Image
        src="/assets/play-green.svg"
        alt="Play"
        width={94}
        height={94}
        className="invisible group-hover:visible"
      />
    </a>
  );
}