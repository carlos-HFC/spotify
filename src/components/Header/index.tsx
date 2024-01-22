"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Dropdown } from "../Dropdown";
import { SearchInput } from "../SearchInput";
import { SortLibrary } from "../SortLibrary";

import { cn } from "@/utils";

interface HeaderProps {
  scroll: boolean;
}

export function Header(props: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className={cn("fixed w-[calc(100%-20rem)] transition-colors z-10 right-0", pathname === "/buscar" || pathname === "/biblioteca" || props.scroll ? "bg-black" : "bg-transparent")}>
      <div className="pl-10 pr-[50px] h-20 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button
            aria-label="Voltar"
            disabled
            className="disabled:opacity-70"
          >
            <Image
              src="/assets/back.svg"
              alt="Voltar"
              width={40}
              height={40}
            />
          </button>
          <button
            aria-label="Avançar"
            disabled
            className="disabled:opacity-70"
          >
            <Image
              src="/assets/forward.svg"
              alt="Avançar"
              width={40}
              height={40}
            />
          </button>

          {pathname === "/biblioteca" && <SortLibrary />}
          {pathname === "/buscar" && <SearchInput />}
        </div>

        <div>
          <Dropdown />
        </div>
      </div>
    </header>
  );
}