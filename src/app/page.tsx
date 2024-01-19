"use client";

import { MouseEvent } from "react";

import { ContextMenu } from "@/components/ContextMenu";
import { Music } from "@/components/Music";

import { SONGS } from "@/constants";
import { useContextMenu } from "@/hooks/useContextMenu";

export default function Home() {
  const contextMenu = useContextMenu();

  function handleContextMenu(event: MouseEvent<HTMLDivElement | HTMLButtonElement>) {
    event.preventDefault();
    contextMenu.setClicked(true);

    let coordX = event.pageX,
      coordY = event.pageY;

    const clientWidth = event.currentTarget.offsetWidth;
    const clientHeight = document.documentElement.offsetHeight;

    if (event.pageX - 20 > clientWidth) coordX -= 286;
    if ((event.screenY + 115) + 430 > clientHeight) coordY -= 430;

    contextMenu.setCoords({
      x: coordX,
      y: coordY
    });
  }

  return (
    <div className="flex pb-28">
      <div className="flex flex-col flex-1">
        {SONGS.map((item, index) => (
          <Music
            {...item}
            key={item.song + index}
            index={index + 1}
            isPlaying={index === 1}
            image="/metallica.webp"
            onContextMenu={handleContextMenu}
          />
        ))}

        <ContextMenu
          open={contextMenu.clicked}
          top={contextMenu.coords.y}
          left={contextMenu.coords.x}
        />
      </div>
    </div>
  );
}
