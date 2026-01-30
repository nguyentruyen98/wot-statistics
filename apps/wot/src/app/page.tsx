import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { DotPattern } from "@workspace/ui/components/dot-pattern";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { cn } from "@workspace/ui/lib/utils";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/components/locale-switchers";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import TechTree from "@/components/tech-tree";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center pt-20">
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542887800-faca0261c1e1?q=80&amp;w=2938&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0"></div>
        <div className="scanlines pointer-events-none absolute inset-0 opacity-20"></div>
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-30"></div>
      </div>

      <div className="relative z-10 ml-auto mr-auto flex h-full w-full max-w-7xl flex-col items-center justify-center pl-4 pr-4 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in-up border-primary/70 bg-primary/10 text-primary mb-8 inline-flex items-center gap-2 border font-bold font-rajdhani px-3 py-1 text-xs border-dashed uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
          </span>
          Live Database: v4.2.0
        </div>

        <h1 className="font-display font-rajdhani mb-6 text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
          Battlefield <br className="md:hidden" />
          <span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>

        <p className="font-font-rajdhani mb-10 max-w-2xl text-base font-light leading-relaxed tracking-wide text-zinc-400 md:text-lg">
          Access the ultimate classified archive. Analyze armor profiles,
          compare firepower ballistics, and master battlefield tactics for over
          600 vehicles.
        </p>

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <button className="font-display clip-path-slant bg-primary hover:bg-primary/80 group relative w-full overflow-hidden px-8 py-4 text-sm font-bold uppercase tracking-widest text-zinc-950 transition-all duration-300 sm:w-auto">
            <div className="absolute inset-0 h-full w-full translate-y-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
            <span className="font-rajdhani relative flex items-center justify-center gap-2">
              Initialize System
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                data-icon="lucide:arrow-right"
                data-width="18"
                data-stroke-width="2"
                className="iconify iconify--lucide"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7l-7 7"
                ></path>
              </svg>
            </span>
          </button>

          <button className="font-display font-rajdhani w-full border border-white/10 bg-zinc-900/50 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-zinc-800 sm:w-auto">
            Browse Statistics
          </button>
        </div>

        <div className="font-rajdhani mt-16 flex w-full max-w-4xl gap-32 border-t border-white/5 pt-8 justify-center">
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              600+
            </span>
            <span className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
              Vehicles
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              12
            </span>
            <span className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
              Nations
            </span>
          </div>
        </div>
      </div>

      <div className="font-font-rajdhani absolute bottom-10 right-10 hidden text-right opacity-40 lg:block">
        <div className="text-[10px] uppercase tracking-widest text-zinc-500">
          Coordinates
        </div>
        <div className="font-mono text-xs text-zinc-400">
          42.91° N, 12.44° E
        </div>
      </div>
    </main>
  );
}
