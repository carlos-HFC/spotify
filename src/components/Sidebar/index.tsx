"use client";

import { usePathname } from "next/navigation";

import { Library } from "../Library";
import { NavItem } from "../NavItem";

import { LIBRARY, MENU } from "@/constants";
import { cn } from "@/utils";

interface SidebarProps {
  expanded?: boolean;
}

export function Sidebar(props: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={cn("w-80 bg-black pt-16 overflow-hidden flex flex-col", props.expanded ? 'h-[calc(100%-116px)]' : 'h-[calc(100%-436px)]')}>
      <nav className="space-y-5 px-6">
        {MENU.map(item => (
          <NavItem
            {...item}
            key={item.label}
            active={pathname === item.link}
            icon={pathname === item.link ? item.iconFilled : item.icon}
          />
        ))}
      </nav>

      <hr className="border-grayscale-800 mx-6 mt-5 mb-3" />

      <nav className="overflow-y-scroll h-full playlist">
        {LIBRARY.map(item => (
          <Library
            {...item}
            key={item.title}
          />
        ))}
      </nav>
    </aside>
  );
}