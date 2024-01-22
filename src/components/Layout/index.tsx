"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export function Layout(props: PropsWithChildren) {
  const [footerIsExpanded, setFooterIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const contentRef = useRef({} as HTMLDivElement);

  useEffect(() => {
    const changeBg = () => {
      if (contentRef.current.scrollTop >= 100) return setScrolled(true);
      return setScrolled(false);
    };

    contentRef.current.addEventListener("scroll", changeBg);

    return () => {
      contentRef.current.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <>
      <Sidebar expanded={!footerIsExpanded} />

      <main className="h-screen flex flex-1">
        <Header scroll={scrolled} />

        <div
          ref={contentRef}
          className="w-full overflow-y-auto h-[calc(100%-116px)]"
        >
          {props.children}
        </div>

        <Footer
          expanded={footerIsExpanded}
          onClick={setFooterIsExpanded}
        />
      </main>
    </>
  );
}