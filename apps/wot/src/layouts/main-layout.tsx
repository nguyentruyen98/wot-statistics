import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";
import React from "react";

import MainLayoutFooter from "./components/main-layout-footer";
import MainLayoutHeader from "./components/main-layout-header";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ScrollArea className="relative h-svh" scrollHideDelay={3000} type="scroll">
      <MainLayoutHeader />
      <main className="relative min-h-screen pt-16">{children}</main>
      <MainLayoutFooter />
      <ScrollBar orientation="vertical" className="z-100" />
    </ScrollArea>
  );
};

export default MainLayout;
