import Image from "next/image";

interface RecentProps extends Omit<Playlist, 'description'> {}

export function Recent(props: RecentProps) {
  return (
    <a
      href="#"
      className="bg-white/10 h-20 group rounded-md overflow-hidden flex-1 flex gap-5 hover:bg-white/20 text-inherit justify-between"
    >
      <Image
        src={props.image}
        alt={props.title}
        width={80}
        height={80}
        loading="lazy"
      />

      <strong className="font-bold text-xl self-center flex-1">{props.title}</strong>

      <Image
        src="/assets/play-green.svg"
        alt="Play"
        width={62}
        height={62}
        className="invisible group-hover:visible mr-5 drop-shadow-play-green"
      />
    </a>
  );
}