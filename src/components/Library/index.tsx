import { cn } from "@/utils";

interface LibraryProps {
  title: string;
  description: string;
  active?: boolean;
}

export function Library(props: LibraryProps) {
  return (
    <a href="#" className={cn("text-sm text-white/50 block truncate group py-2 px-6 hover:bg-grayscale-1000/20")}>
      <span className={cn("text-lg", props.active ? 'text-spotify-100' : 'text-grayscale-200')}>{props.title}</span> &bull; {props.description}
    </a>
  );
}