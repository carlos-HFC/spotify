"use client";

import { PropsWithChildren, useState } from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export function Layout(props: PropsWithChildren) {
  const [footerIsExpanded, setFooterIsExpanded] = useState(false);

  return (
    <main className="h-screen flex">
      <Sidebar expanded={!footerIsExpanded} />

      <Header />

      <div className="pl-80 pt-20 w-full">
        {props.children}
      </div>

      <Footer
        expanded={footerIsExpanded}
        onClick={setFooterIsExpanded}
      />
    </main>
  );
}