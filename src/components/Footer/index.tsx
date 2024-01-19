import Image from "next/image";

import { cn } from "@/utils";

interface FooterProps {
  expanded: boolean;
  onClick(expanded: boolean): void;
}

export function Footer(props: FooterProps) {
  return (
    <footer className="fixed bottom-0 w-full bg-grayscale-1000 p-5 flex justify-between pr-6 *:flex *:items-center">
      <div className="absolute bottom-[116px] left-0">
        <button
          aria-label="Retrair"
          onClick={() => props.onClick(!props.expanded)}
        >
          <Image
            src="/assets/forward.svg"
            alt="Retrair"
            width={30}
            height={30}
            className="absolute z-10 right-2 top-2 rotate-90"
          />
        </button>

        <Image
          src="/metallica.webp"
          alt="Capa do álbum 72 Seasons do Metallica"
          width={320}
          height={320}
          className={props.expanded ? '' : 'hidden'}
        />
      </div>

      <div className="gap-5">
        <div className={cn('group relative', props.expanded ? 'hidden' : '')}>
          <button
            aria-label="Expandir"
            className="invisible group-hover:visible absolute z-10 right-1 top-1"
            onClick={() => props.onClick(!props.expanded)}
          >
            <Image
              src="/assets/forward.svg"
              alt="Expandir"
              width={30}
              height={30}
              className="-rotate-90"
            />
          </button>

          <Image
            src="/metallica.webp"
            alt="Capa do álbum 72 Seasons do Metallica"
            width={72}
            height={72}
          />
        </div>

        <div className="block">
          <p className="text-lg">Crown of Barbed Wire</p>
          <span className="text-grayscale-200">Metallica</span>
        </div>

        <Image
          src="/assets/heart-fill.svg"
          alt="Música curtida"
          width={28}
          height={28}
        />
      </div>

      <div className="flex-col gap-1 *:flex *:items-center">
        <div className="gap-5">
          <Image
            src="/assets/shuffle.svg"
            alt="Ordem aleatória"
            width={32}
            height={32}
            className="opacity-80 hover:opacity-100"
          />
          <Image
            src="/assets/prev.svg"
            alt="Voltar"
            width={32}
            height={32}
            className="opacity-80 hover:opacity-100"
          />
          <Image
            src="/assets/play-white.svg"
            alt="Tocar música"
            width={48}
            height={48}
            className="hover:scale-105"
          />
          <Image
            src="/assets/next.svg"
            alt="Próxima"
            width={32}
            height={32}
            className="opacity-80 hover:opacity-100"
          />
          <Image
            src="/assets/repeat.svg"
            alt="Repetir"
            width={32}
            height={32}
            className="opacity-80 hover:opacity-100"
          />
        </div>

        <div className="gap-2 group">
          <span className="text-grayscale-300">0:31</span>

          <div className="h-1 rounded-full w-[clamp(100px,30vw,550px)] bg-white/50 relative">
            <div className="bg-white w-1/2 h-1 rounded-full group-hover:bg-green-500" />
            <span className="size-3 top-1/2 -translate-y-1/2 left-1/2 bg-white absolute rounded-full invisible group-hover:visible" />
          </div>

          <span className="text-grayscale-300">2:14</span>
        </div>
      </div>

      <div className="gap-2">
        <Image
          src="/assets/queue.svg"
          alt="Fila"
          width={32}
          height={32}
        />
        <Image
          src="/assets/device.svg"
          alt="Dispositivo"
          width={32}
          height={32}
        />
        <div className="flex items-center gap-1 group">
          <Image
            src="/assets/volume.svg"
            alt="Volume"
            width={32}
            height={32}
          />

          <div className="h-1 relative rounded-full w-24 bg-white/50">
            <div className="bg-white w-2/3 h-1 rounded-full group-hover:bg-green-500" />
            <span className="size-3 top-1/2 -translate-y-1/2 left-2/3 bg-white absolute rounded-full invisible group-hover:visible" />
          </div>
        </div>
        <Image
          src="/assets/maximize.svg"
          alt="Tela cheia"
          width={32}
          height={32}
        />
      </div>
    </footer>
  );
}