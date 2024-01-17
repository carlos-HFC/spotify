"use client";

import { PropsWithChildren, useState } from "react";

import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";

export function Layout(props: PropsWithChildren) {
  const [footerIsExpanded, setFooterIsExpanded] = useState(false);

  return (
    <main className="h-screen flex">
      <Sidebar expanded={!footerIsExpanded} />

      {props.children}

      <Footer
        expanded={footerIsExpanded}
        onClick={setFooterIsExpanded}
      />
    </main>
  );
}