import { MouseEvent, useEffect, useState } from "react";

type Coords = {
  x: number;
  y: number;
};

const INITIAL_STATE_COORDS = {
  x: 0,
  y: 0
};

export function useContextMenu() {
  const [clicked, setClicked] = useState(false);
  const [coords, setCoords] = useState<Coords>(INITIAL_STATE_COORDS);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => (event.key === 'Escape') && closeContextMenu();

    const closeContextMenu = () => setClicked(false);

    window.addEventListener("keydown", onKeyDown);
    document.body.addEventListener("click", closeContextMenu);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.removeEventListener("click", closeContextMenu);
    };
  }, []);

  function handleContextMenu(event: MouseEvent<HTMLDivElement | HTMLButtonElement>) {
    event.preventDefault();
    setClicked(true);

    let coordX = event.pageX,
      coordY = event.pageY;

    const clientWidth = event.currentTarget.offsetWidth;
    const clientHeight = document.documentElement.offsetHeight;

    if (event.pageX - 20 > clientWidth) coordX -= 286;
    if ((event.screenY + 115) + 430 > clientHeight) coordY -= 430;

    setCoords({
      x: coordX,
      y: coordY
    });
  }

  return {
    clicked,
    setClicked,
    coords,
    setCoords,
    handleContextMenu
  };
}