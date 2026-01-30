import { Button } from "@workspace/ui/components/button";
import { Crosshair } from "lucide-react";
import Link from "next/link";
import React from "react";
// import { FiCrosshair, FiMenu, FiSearch } from "react-icons/fi";

const MainLayoutHeader = () => {
  return (
    <header className="backdrop-blur-xs fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="mr-10 flex items-center gap-3">
            <div className="bg-primary rounded-xs relative flex h-8 w-8 items-center justify-center text-white shadow-[0_0_15px_rgba(31,63,173,0.4)]">
              <Crosshair size={20} strokeWidth={2} />
              <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-white/20"></div>
            </div>
            <div className="hidden flex-col leading-none md:flex">
              <span className="font-rajdhani text-lg font-bold tracking-tight text-white">
                TANKOPEDIA
              </span>
              <span className="text-primary font-jet-brains-mono text-[10px] uppercase tracking-[0.2em]">
                Database
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="font-sans text-sm font-medium tracking-wide text-zinc-400 transition-colors hover:text-white"
            >
              TECH TREE
            </a>
            <a
              href="#"
              className="font-sans text-sm font-medium tracking-wide text-zinc-400 transition-colors hover:text-white"
            >
              FACTIONS
            </a>
            <a
              href="#"
              className="font-sans text-sm font-medium tracking-wide text-zinc-400 transition-colors hover:text-white"
            >
              WARMAPS
            </a>
            <a
              href="#"
              className="font-sans text-sm font-medium tracking-wide text-zinc-400 transition-colors hover:text-white"
            >
              LEADERBOARD
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="lg">
              Login
            </Button>
            <button className="p-2 text-zinc-400 hover:text-white md:hidden">
              <span
                className="iconify"
                data-icon="lucide:menu"
                data-width="24"
                data-stroke-width="1.5"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainLayoutHeader;
