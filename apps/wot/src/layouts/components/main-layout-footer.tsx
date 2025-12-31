import React from "react";

const MainLayoutFooter = () => {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <span
            className="iconify text-zinc-600"
            data-icon="lucide:crosshair"
            data-width="16"
            data-stroke-width="1.5"
          ></span>
          <span className="font-display text-lg font-bold font-rajdhani uppercase tracking-tight text-zinc-500">
            Tankopedia
          </span>
        </div>

        <p className="text-center text-xs text-zinc-600 md:text-right">
          &copy; 2024 Tankopedia Archives. All game assets property of their
          respective owners. <br />
          <span className="text-zinc-700">Declassified for public access.</span>
        </p>
      </div>
    </footer>
  );
};

export default MainLayoutFooter;
