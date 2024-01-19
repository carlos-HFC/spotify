import Image from "next/image";
import { createPortal } from "react-dom";

import { CONTEXT_MENU_SONG } from "@/constants";

interface ContextMenuProps {
  open: boolean;
  top: number;
  left: number;
}

export function ContextMenu(props: ContextMenuProps) {
  return props.open && createPortal(
    <div
      className="fixed z-20 min-w-64 overflow-hidden bg-grayscale-800 rounded-md shadow-black/35 shadow-lg"
      style={{ top: props.top, left: props.left }}
    >
      <ul className="*:p-4 *:flex *:items-center *:justify-between *:text-lg *:rounded *:cursor-default *:select-none p-1.5 [&_*:last-of-type]:border-t [&_*:last-of-type]:border-grayscale-700 [&_*:nth-last-child(-2n+3)]:border-t [&_*:nth-last-child(-2n+3)]:border-grayscale-700 hover:*:bg-grayscale-700">
        {CONTEXT_MENU_SONG.map(item => (
          <li key={item.label}>
            {item.label}
            {item.icon && (
              <Image
                src="/assets/arrow-down.svg"
                alt="Seta para direita"
                width={16}
                height={16}
                className="-rotate-90"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
    , document.body
  );
}