import React from "react";

export default function Tank() {
  return (
    <main className="relative flex w-full flex-grow flex-col pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599368380582-747249c6692b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-[center_top_30%] bg-no-repeat"></div>
        <div className="absolute inset-0 bg-zinc-950/30"></div>
        <div className="vignette absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/90 lg:to-zinc-950"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-30"></div>
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-grow flex-col px-6 lg:px-8">
        <div className="mt-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-zinc-500">
          <a href="#" className="transition-colors hover:text-white">
            Home
          </a>
          <span>/</span>
          <a href="#" className="transition-colors hover:text-white">
            Tankopedia
          </a>
          <span>/</span>
          <a href="#" className="transition-colors hover:text-white">
            U.S.S.R.
          </a>
          <span>/</span>
          <a href="#" className="transition-colors hover:text-white">
            Medium Tanks
          </a>
          <span>/</span>
          <span className="text-zinc-300">X</span>
        </div>

        <div className="mb-8 mt-4 flex flex-col gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="font-display text-6xl font-semibold uppercase leading-none tracking-tight text-white drop-shadow-2xl md:text-7xl">
              Object 430U
            </h1>
          </div>

          <div className="flex items-center gap-4 pb-2">
            <div className="relative flex h-6 w-10 items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-red-800 shadow-lg">
              <div className="text-amber-400">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            </div>

            <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12h8"></path>
                <path d="M12 8v8"></path>
              </svg>
              Add to Comparison
            </button>
          </div>
        </div>

        <div className="grid flex-grow grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="lg:min-h-auto group relative min-h-[40vh] lg:col-span-7">
            <div className="absolute left-[50%] top-[40%] flex h-6 w-6 cursor-help items-center justify-center rounded-full border border-white/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="h-1 w-1 rounded-full bg-white"></div>
              <div className="pointer-events-none absolute top-full mt-2 w-32 rounded border border-white/10 bg-black/80 p-2 text-center text-[10px] text-zinc-300 backdrop-blur">
                160mm Turret Armor
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center pb-12 lg:col-span-5 lg:pb-32">
            <div className="space-y-8">
              <div>
                <h2 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <span className="bg-primary h-4 w-1"></span>
                  Historical Reference
                </h2>
                <p className="border-l border-white/10 pl-4 text-sm leading-relaxed text-zinc-300">
                  The Object 430U is a version of the Object 430 medium tank
                  with a rear placement of the engine-transmission compartment.
                  This version was to feature a transverse placement of the
                  engine and two planetary transmissions. This technical
                  solution allowed for extending the interior space and
                  decreasing the vehicle's weight. Developed from 1953 through
                  1957 to replace the T-54, but work was discontinued in favor
                  of the Object 432 in 1961.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-8 border-t border-white/5 pt-8">
                <div className="group">
                  <div className="mb-1 flex items-center gap-2 text-zinc-400 transition-colors group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Nation
                    </span>
                  </div>
                  <div className="font-display text-lg font-medium text-white">
                    U.S.S.R.
                  </div>
                </div>

                <div className="group">
                  <div className="mb-1 flex items-center gap-2 text-zinc-400 transition-colors group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z"></path>
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Tier
                    </span>
                  </div>
                  <div className="font-display text-lg font-medium text-white">
                    X{" "}
                    <span className="ml-1 font-sans text-sm text-zinc-500">
                      (Elite)
                    </span>
                  </div>
                </div>

                <div className="group">
                  <div className="mb-1 flex items-center gap-2 text-zinc-400 transition-colors group-hover:text-white">
                    <div className="h-3 w-3 rotate-45 border border-current"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Type
                    </span>
                  </div>
                  <div className="font-display text-lg font-medium text-white">
                    Medium Tank
                  </div>
                </div>

                <div className="group">
                  <div className="mb-1 flex items-center gap-2 text-zinc-400 transition-colors group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="8" cy="8" r="6"></circle>
                      <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                      <path d="M7 6h1v4"></path>
                      <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Cost
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-display flex items-center gap-1 text-sm font-medium text-zinc-300">
                      <span className="text-zinc-400">Credits:</span> 6,100,000
                    </div>
                    <div className="font-display flex items-center gap-1 text-sm font-medium text-zinc-300">
                      <span className="text-zinc-400">XP:</span> 287,000
                    </div>
                  </div>
                </div>

                <div className="col-span-2 mt-2 border-t border-white/5 pt-6">
                  <div className="mb-2 flex items-center gap-2 text-zinc-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Combat Role
                    </span>
                  </div>
                  <div className="font-display flex items-center gap-2 text-lg font-medium text-white">
                    Assault Medium Tank
                    <span className="rounded border border-white/10 bg-zinc-800 px-1.5 py-0.5 font-sans text-[10px] tracking-tight text-zinc-400">
                      BRAWLER
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    Excels in close-quarters combat with high durability.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/5 pt-8">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Featured In
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded border border-white/5 bg-zinc-900/50 px-3 py-2 transition-colors hover:border-amber-500/30 hover:bg-zinc-800"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 transition-colors group-hover:bg-amber-500"></span>
                  <span className="text-xs font-medium text-zinc-300 group-hover:text-white">
                    Fun Tanks (Tier VIII-X)
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-auto text-zinc-600 group-hover:text-white"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-30 w-full border-t border-white/5 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="no-scrollbar flex items-center gap-8 overflow-x-auto">
              <div className="flex-shrink-0">
                <h3 className="font-display mb-0.5 text-sm font-bold uppercase tracking-wider text-white">
                  Crew
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Proficiency 100%
                </span>
              </div>

              <div className="mx-2 h-8 w-px bg-white/10"></div>

              <div className="flex items-center gap-6">
                <div className="group flex cursor-pointer items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded border border-white/10 bg-zinc-800 transition-colors group-hover:border-amber-500/50">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Commander"
                      className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-0 right-0 flex h-3 w-3 items-center justify-center border border-zinc-700 bg-zinc-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-500"
                      >
                        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                        <path d="M4 6v12a2 2 0 0 0 2 2h14v-4"></path>
                        <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-amber-500">
                      Commander
                    </span>
                    <span className="text-xs font-medium text-white">
                      Sgt. Volkov
                    </span>
                  </div>
                </div>

                <div className="group flex cursor-pointer items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded border border-white/10 bg-zinc-800 transition-colors group-hover:border-amber-500/50">
                    <img
                      src="https://randomuser.me/api/portraits/men/22.jpg"
                      alt="Gunner"
                      className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-0 right-0 flex h-3 w-3 items-center justify-center border border-zinc-700 bg-zinc-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-500"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="22" y1="12" x2="18" y2="12"></line>
                        <line x1="6" y1="12" x2="2" y2="12"></line>
                        <line x1="12" y1="6" x2="12" y2="2"></line>
                        <line x1="12" y1="22" x2="12" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-amber-500">
                      Gunner
                    </span>
                    <span className="text-xs font-medium text-white">
                      Cpl. Ivanov
                    </span>
                  </div>
                </div>

                <div className="group flex cursor-pointer items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded border border-white/10 bg-zinc-800 transition-colors group-hover:border-amber-500/50">
                    <img
                      src="https://randomuser.me/api/portraits/men/86.jpg"
                      alt="Driver"
                      className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-0 right-0 flex h-3 w-3 items-center justify-center border border-zinc-700 bg-zinc-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-500"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m10 8 4 4-4 4"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-amber-500">
                      Driver
                    </span>
                    <span className="text-xs font-medium text-white">
                      Pvt. Petrov
                    </span>
                  </div>
                </div>

                <div className="group flex cursor-pointer items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded border border-white/10 bg-zinc-800 transition-colors group-hover:border-amber-500/50">
                    <img
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      alt="Loader"
                      className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-0 right-0 flex h-3 w-3 items-center justify-center border border-zinc-700 bg-zinc-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-500"
                      >
                        <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"></path>
                        <path d="m5 2 5 5"></path>
                        <path d="M2 13h15"></path>
                        <path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-amber-500">
                      Loader
                    </span>
                    <span className="text-xs font-medium text-white">
                      Pvt. Sokolov
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-primary flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all">
                Manage Crew
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
