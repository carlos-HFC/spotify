import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Maximize2, Volume1, PlaySquare, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/metallica.webp"
          alt="Capa do álbum 72 Seasons do Metallica"
          width={52}
          height={52}
          className="rounded-md"
        />

        <div className="flex flex-col">
          <strong className="font-medium text-sm">Crown of Barbed Wire</strong>
          <span className="text-xs text-zinc-400">Metallica</span>
        </div>

        <CheckCircle2 className="text-zinc-800 fill-green-500 size-5" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-6">
          <Shuffle className="text-green-500 size-5 cursor-pointer" />
          <SkipBack className="text-zinc-400 fill-zinc-400 size-5 hover:text-zinc-100 hover:fill-zinc-100" />
          <button className="size-8 pl-0.5 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 cursor-default">
            <Play className="size-4 fill-black" />
          </button>
          <SkipForward className="text-zinc-400 fill-zinc-400 size-5 hover:text-zinc-100 hover:fill-zinc-100" />
          <Repeat className="text-zinc-400 size-5 hover:text-zinc-100" />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xxs font-light text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-[600px] bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xxs font-light text-zinc-400">2:14</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <PlaySquare className="size-5 cursor-pointer text-zinc-400 hover:text-zinc-100" />
        <Mic2 className="size-5 cursor-pointer text-zinc-400 hover:text-zinc-100" />
        <LayoutList className="size-5 cursor-pointer text-zinc-400 hover:text-zinc-100" />
        <Laptop2 className="size-5 cursor-pointer text-zinc-400 hover:text-zinc-100" />
        <div className="flex items-center gap-2 group">
          <Volume1 className="size-5 cursor-pointer text-zinc-400 hover:text-zinc-100" />

          <div className="h-1 relative rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-12 h-1 rounded-full group-hover:bg-green-500" />
            <span className="size-3 top-1/2 -translate-y-1/2 left-10 bg-white absolute rounded-full invisible group-hover:visible" />
          </div>
        </div>
        <Maximize2 className="size-5 cursor-pointer text-zinc-400 hover:text-zinc-100" />
      </div>
    </footer>
  );
}