import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils";

interface NavItemProps {
  icon: string;
  link: string;
  label: string;
  active?: boolean;
}

export function NavItem(props: NavItemProps) {
  return (
    <Link
      href={props.link}
      className={cn("flex items-center group text-lg gap-5 hover:text-inherit transition-colors font-bold [&:nth-child(4)]:!mt-10", props.active ? "text-inherit" : "text-white/70")}
    >
      <Image
        src={props.icon}
        alt={props.label}
        width={32}
        height={32}
        className={cn('group-last-of-type:opacity-100 group-hover:opacity-100', !props.active ? 'opacity-70' : 'opacity-100')}
      />

      {props.label}
    </Link>
  );
}