"use client";

import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { ContextMenu } from "@/components/ContextMenu";
import { Cover } from "@/components/Cover";
import { Music } from "@/components/Music";

import { SONGS } from "@/constants";
import { useContextMenu } from "@/hooks/useContextMenu";
import { orderArray } from "@/utils";

type FilterSongs = {
  key?: string;
  asc?: boolean;
};

export default function MusicasCurtidas() {
  const contextMenu = useContextMenu();

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function sortSongs({ key, asc }: FilterSongs) {
    const params = new URLSearchParams(searchParams.toString());

    if (key) params.set('sort', key);
    else params.delete('sort');

    if (asc) params.set('order', String(asc));
    else params.delete('order');

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col bg-liked-page pt-24 min-h-screen">
      <header className="mb-8 px-10">
        <Cover
          author="Carlos Faustino"
          authorImage="/metallica.webp"
          image="/assets/liked-song.svg"
          qty={SONGS.length}
          title="Músicas Curtidas"
        />
      </header>

      <section className="bg-grayscale-1000/30 px-10 pt-8 h-screen space-y-8">
        <div className="flex justify-between items-center *:flex *:items-center">
          <div className="gap-5 *:opacity-75 hover:*:opacity-100 hover:*:scale-105">
            <Image
              src="/assets/play-green.svg"
              alt="Tocar playlist"
              width={72}
              height={72}
              className="drop-shadow-play-green"
            />
            <Image
              src="/assets/shuffle.svg"
              alt="Ordem aleatória"
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

          <div className="*:flex *:items-center *:opacity-75 hover:*:opacity-100 gap-8">
            <Image
              src="/assets/search.svg"
              alt="Buscar"
              width={24}
              height={24}
            />

            <div className="gap-4">
              <span className="text-lg cursor-default">Ordem aleatória</span>
              <Image
                src="/assets/arrow-down.svg"
                alt="Abrir"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        <table className="w-full" align="left">
          <colgroup>
            <col width="40%" />
            <col width="auto" />
            <col width="auto" />
            <col width="15%" />
          </colgroup>
          <thead className="text-grayscale-200 text-base border-b border-grayscale-300">
            <tr className="*:select-none hover:*:text-white">
              <th
                className="py-3 pl-5 font-normal"
                onClick={() => sortSongs({ key: 'song' })}
              >
                <div className="flex items-center gap-4 justify-start">
                  <span className="min-w-[28px] text-center">#</span>
                  <span>Título</span>
                </div>
              </th>
              <th
                className="text-left font-normal"
                onClick={() => sortSongs({ key: 'album' })}
              >
                Álbum
              </th>
              <th
                className="text-left font-normal"
                onClick={() => sortSongs({ key: 'date' })}
              >
                Adicionada em
              </th>
              <th className="pr-5 font-normal">
                <div className="flex justify-end mr-11">
                  <Image
                    src="/assets/clock.svg"
                    alt="Tempo"
                    width={28}
                    height={28}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="before:text-transparent before:h-5 before:block">
            {orderArray(SONGS, searchParams.get("sort") as keyof Omit<Track, 'description'>).map((item, i) => (
              <Music
                key={item.song}
                {...item}
                index={i + 1}
                onContextMenu={contextMenu.handleContextMenu}
              />
            ))}
          </tbody>
        </table>
      </section>

      <ContextMenu
        open={contextMenu.clicked}
        left={contextMenu.coords.x}
        top={contextMenu.coords.y}
      />
    </div>
  );
}