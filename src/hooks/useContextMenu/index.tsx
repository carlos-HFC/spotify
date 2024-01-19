import { useEffect, useState } from "react";

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

  return {
    clicked,
    setClicked,
    coords,
    setCoords
  };
}