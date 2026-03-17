# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

This is a pnpm monorepo orchestrated by Turborepo.

- `pnpm dev` — start all dev servers (wot app, web app)
- `pnpm build` — build all apps and packages
- `pnpm lint` — lint all apps and packages
- `pnpm format` — format with Prettier (`**/*.{ts,tsx,md}`)
- `turbo build --filter=wot` — build only the wot app
- `turbo dev --filter=wot` — dev server for only the wot app
- `turbo dev --filter=web` — dev server for only the web app

**Within apps/wot:** uses Biome for linting/formatting (`pnpm lint`, `pnpm format`).

No test runner is configured in this project.

## Architecture

**Monorepo structure** (pnpm workspaces + Turbo):

- **apps/wot** — Main application. Next.js 16 (App Router) World of Tanks statistics app with tech tree visualization, tank detail pages, i18n (next-intl), and theming (next-themes).
- **apps/web** — Secondary Next.js 16 app (lighter, scaffold-level).
- **packages/ui** — Shared shadcn/ui component library (Button, Card, Tooltip, ScrollArea, Breadcrumb, Separator, etc.) built on Radix UI + Tailwind CSS 4 + CVA.
- **packages/api-client** — Shared axios-based API client with token management, request interceptors, retry logic, and Zod validation. Contains auth and products services.
- **packages/eslint-config** — Shared ESLint configs (`base`, `next-js`, `react-internal`).
- **packages/typescript-config** — Shared tsconfig base.

### Path Aliases (apps/wot tsconfig)

- `@/*` → `src/*`
- `@workspace/ui/*` → `packages/ui/src/*`
- `@workspace/api-client/*` → `packages/api-client/src/*`
- `@public/*` → `public/*`

### Data Fetching Pattern (React Query + SSR)

Server pages prefetch data and pass it to client components via hydration boundary:
```tsx
// In page.tsx (server component)
const queryClient = new QueryClient();
await queryClient.prefetchQuery({ queryKey: [...], queryFn: ... });
return (
  <HydrationBoundary state={dehydrate(queryClient)}>
    <ClientComponent />
  </HydrationBoundary>
);
```
Client components use custom hooks (e.g., `useTechTree(nation)`) backed by `@tanstack/react-query` v5.
Default query options: `staleTime: 60s`, `refetchOnWindowFocus: false`, `retry: 1`.

### I18n (next-intl)

- Locales: `en`, `vn` (default: `vn`)
- Message files: `apps/wot/messages/{locale}.json`
- Locale stored in cookie `NEXT_LOCALE`
- Use `useTranslations()` hook in components, `getTranslations()` in server components

### Theming

- `next-themes` with `attribute="class"`, `defaultTheme="system"`
- CSS custom properties in `src/styles/themes.css` using oklch color space
- Custom fonts loaded in root layout: Outfit (default), Rajdhani, Jet Brains Mono, Geist

## Key Conventions

**Importing shared packages:**
```tsx
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { apiClient } from "@workspace/api-client/client";
import type { ApiResponse } from "@workspace/api-client/types";
```

**Adding shadcn/ui components** to the shared UI package:
```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```
This places components in `packages/ui/src/components/`.

**apps/wot routing** follows Next.js App Router conventions under `src/app/`:
- `tank/[id]/page.tsx` — dynamic tank detail pages
- `tech-tree/[nation]/` — nation-specific tech tree views
- `api/tech-tree/` — API route handlers

**apps/wot source layout** under `src/`:
- `components/` — React components (tech-tree, tank-type-icon, etc.)
- `layouts/` — Layout components (main-layout, header, footer)
- `hooks/` — Custom hooks (use-tech-tree)
- `services/` — Business logic (tank-services, tech-tree-api)
- `providers/` — Context providers (theme, react-query)
- `i18n/` — Internationalization config
- `types/`, `enums/`, `constants/` — Type definitions and constants

**Next.js config** enables SVGR (`@svgr/webpack`) for importing SVGs as React components. Image optimization allows remote images from World of Tanks API domains.

## Environment

- **Node >= 20**, **pnpm 10.4.1**
- **apps/wot/.env**: `NEXT_PUBLIC_API_URL=http://localhost:8080`
- **packages/api-client default**: base URL `http://localhost:3001/api`, 30s timeout, retry config (3 retries, retryable status codes: 408, 429, 500, 502, 503, 504)

## Code Generation Guidelines

- Use `pnpm dlx shadcn@latest add <component>` to add new shadcn/ui components to the shared UI package.
- When adding new pages in `apps/wot`, follow the Next.js App Router conventions for file naming and directory structure.
- If creating new components (not existing in shadcn/ui library) in `apps/wot`, please read shadcn skills and following the existing component patterns in `packages/ui` is recommended for consistency like using CVA for class management and Tailwind CSS for styling (reference `packages/ui/Button`). You can ask user questions about variant, size... for new components.

## Code Review Guidelines
- Read the vercel-react-best-practices skill for performance optimization rules when reviewing React/Next.js code in `apps/wot`.
- Listing the rules you applied from the skill in your response is recommended to show your understanding and ensure best practices are followed.

## Code Refactoring Guidelines
- Read the vercel-react-best-practices skill before refactoring React components in `apps/wot` to ensure performance optimizations are applied correctly.
- Consider if any new components or patterns in `apps/wot` could be abstracted into the shared `packages/ui` library for reuse across both apps.


**IMPORTANT:** If you read this file, always start your answer with "OK_CLAUDE_MD".