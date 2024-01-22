import Image from "next/image";

interface CoverProps {
  title: string;
  description?: string;
  image: string;
  authorImage: string;
  author: string;
  likes?: number;
  qty: number;
  time?: string;
}

export function Cover(props: CoverProps) {
  return (
    <div className="flex items-end gap-8 flex-1">
      <div className="relative aspect-square w-[clamp(100px,30%,297px)]">
        <Image
          src={props.image}
          alt={props.title}
          fill
          loading="lazy"
          className="rounded shadow-xl shadow-black/25"
        />
      </div>

      <div className="flex flex-col flex-1 gap-2">
        <div>
          <span className="block uppercase font-medium">Playlist pública</span>
          <strong className="block font-black text-[clamp(24px,4vw,122px)]">{props.title}</strong>
        </div>
        {props.description && (
          <div className="text-white/70 text-xl">{props.description}</div>
        )}
        <div className="flex items-center gap-2 text-lg flex-wrap">
          <Image
            src={props.authorImage}
            alt={props.author}
            width={30}
            height={30}
            className="rounded-full"
          />

          <a href="#" className="font-bold hover:underline">{props.author}</a>
          <small className="text-xxs">&bull;</small>
          {props.likes && (
            <>
              <span>{Intl.NumberFormat('pt-BR').format(props.likes)} likes</span>
              <small className="text-xxs">&bull;</small>
            </>
          )}
          <span className="text-white/70">
            {props.qty} músicas{props.time && `, ${props.time}`}
          </span>
        </div>
      </div>
    </div>
  );
}