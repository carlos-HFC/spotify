import Image from "next/image";

import { Cover } from "@/components/Cover";

export default function MusicasCurtidas() {
  return (
    <div className="flex flex-col bg-liked-page pt-24 min-h-screen">
      <header className="mb-8 px-10">
        <Cover
          author="Carlos Faustino"
          authorImage="/metallica.webp"
          image="/assets/liked-song.svg"
          qty={1517}
          title="Músicas Curtidas"
        />
      </header>

      <section className="bg-grayscale-1000/30 px-10 pt-8 h-screen">
        <div className="flex justify-between items-center *:flex *:items-center">
          <div className="gap-5">
            <Image
              src="/assets/play-green.svg"
              alt="Tocar"
              width={94}
              height={94}
            />
            <Image
              src="/assets/heart.svg"
              alt="Coração"
              width={52}
              height={52}
            />
            <Image
              src="/assets/download.svg"
              alt="Download"
              width={52}
              height={52}
            />
            <Image
              src="/assets/options.svg"
              alt="Opções"
              width={52}
              height={52}
            />
          </div>

          <div className="*:flex *:items-center gap-8">
            <Image
              src="/assets/search.svg"
              alt="Buscar"
              width={24}
              height={24}
            />

            <div className="gap-4">
              <span className="text-lg">Ordem aleatória</span>
              <Image
                src="/assets/arrow-down.svg"
                alt="Abrir"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}