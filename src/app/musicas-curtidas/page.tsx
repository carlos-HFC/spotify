"use client";

import Image from "next/image";

import { ContextMenu } from "@/components/ContextMenu";
import { Cover } from "@/components/Cover";
import { Music } from "@/components/Music";

import { SONGS } from "@/constants";
import { useContextMenu } from "@/hooks/useContextMenu";

export default function MusicasCurtidas() {
  const contextMenu = useContextMenu();

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

      <section className="bg-grayscale-1000/30 px-10 pt-8 h-screen">
        <div className="flex justify-between items-center *:flex *:items-center">
          <div className="gap-5 *:opacity-75 hover:*:opacity-100 hover:*:scale-105">
            <Image
              src="/assets/play-green.svg"
              alt="Tocar playlist"
              width={94}
              height={94}
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
            <tr>
              <th className="py-3 pl-5 font-normal">
                <div className="flex items-center gap-4 justify-start">
                  <span className="min-w-[28px] text-center">#</span>
                  <span>Título</span>
                </div>
              </th>
              <th className="text-left font-normal">Álbum</th>
              <th className="text-left font-normal">Adicionada em</th>
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
            {SONGS.map((item, i) => (
              <Music
                key={item.song}
                {...item}
                index={i + 1}
                onContextMenu={contextMenu.handleContextMenu}
                isPlaying={i === 0}
                image="/metallica.webp"
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