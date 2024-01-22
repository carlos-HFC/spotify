import { Children, PropsWithChildren } from "react";

import { cn } from "@/utils";

interface SectionHomeProps extends PropsWithChildren {
  title: string;
}

export function SectionHome(props: SectionHomeProps) {
  const count = Children.count(props.children);

  return (
    <section>
      <h2 className="font-bold flex items-end justify-between text-3xl">
        {props.title}

        <a href="#" className="font-bold text-grayscale-300 text-base hover:underline">
          Mostrar tudo
        </a>
      </h2>

      <div className={cn("flex gap-6", count === 6 ? "justify-between" : "*:flex-none")}>
        {props.children}
      </div>
    </section>
  );
}