import { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean
}

export function NavItem(props: NavItemProps) {
  return (
    <a href="#" className={`flex items-center text-sm gap-4 ${props.active ? "font-bold text-zinc-50" : "font-semibold text-zinc-400"} hover:text-zinc-50 transition-colors`}>
      {props.icon}
      {props.label}
    </a>
  );
}