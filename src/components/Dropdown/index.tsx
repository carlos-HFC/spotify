"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { CONTEXT_MENU_HEADER, LOGGED_USER } from "@/constants";
import { cn } from "@/utils";

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') return setIsOpen(false);
    };

    const closeDrop = (event: MouseEvent) => {
      if ((event?.target as HTMLButtonElement)?.hasAttribute('aria-controls')) return;

      setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.addEventListener("click", closeDrop);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.removeEventListener("click", closeDrop);
    };
  }, []);

  return (
    <div className="relative">
      <button
        aria-controls="dropdown"
        id="dropdown-list"
        aria-label="Abrir e fechar menu"
        aria-expanded={isOpen}
        className="flex items-center p-1 pr-3 gap-3 bg-black/80 text-white rounded-full *:pointer-events-none outline-black focus-visible:outline"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <Image
          src={LOGGED_USER.image}
          alt={LOGGED_USER.name}
          loading="lazy"
          width={32}
          height={32}
          className="rounded-full"
        />
        <p className="font-bold text-lg">{LOGGED_USER.name}</p>
        <Image
          src="/assets/arrow-down.svg"
          alt="Seta para baixo"
          width={16}
          height={16}
          className={cn("transition-transform", isOpen ? 'rotate-180' : '')}
        />
      </button>

      <nav
        id="dropdown"
        aria-labelledby="dropdown-list"
        className={cn("bg-grayscale-800 z-10 rounded w-64 absolute mt-2 top-full right-0 overflow-hidden transition-[max-height]", isOpen ? 'max-h-96' : 'max-h-0')}
      >
        <ul className="*:p-4 *:flex *:items-center *:justify-between *:text-lg *:rounded *:cursor-default *:select-none p-1.5 [&_*:last-of-type]:border-t [&_*:last-of-type]:border-grayscale-700 hover:*:bg-grayscale-700">
          {CONTEXT_MENU_HEADER.map(item => (
            <li key={item.label}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}