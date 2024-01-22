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

      <main
        ref={contentRef}
        id="content"
        className="w-full flex flex-1 overflow-y-auto h-[calc(100%-116px)]"
      >
        <Header scroll={scrolled} />

        <div className="w-full">
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