import Image from "next/image";
import { usePathname } from "next/navigation";

import { Dropdown } from "../Dropdown";
import { SearchInput } from "../SearchInput";
import { SortLibrary } from "../SortLibrary";

import { cn } from "@/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={cn("fixed w-[calc(100%-20rem)] right-0", pathname === "/buscar" || pathname === "/biblioteca" ? "bg-black" : "bg-grayscale-1000")}>
      <div className="px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button aria-label="Voltar">
            <Image
              src="/assets/back.svg"
              alt="Voltar"
              width={40}
              height={40}
            />
          </button>
          <button aria-label="Avançar">
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