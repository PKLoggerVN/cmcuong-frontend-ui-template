# CLAUDE.md — Project Context

## Project Overview

**nextjs-using-mui-react-template** is a Next.js 16 application using Material UI (MUI) v9, React 19, MobX 7 for state management, and TanStack React Query v5 for data fetching. Built with TypeScript and the App Router.

## Tech Stack

| Layer         | Technology                              |
| ------------- | --------------------------------------- |
| Framework     | Next.js 16.4.2 (App Router, Turbopack)  |
| Language      | TypeScript 6, React 19.3.1              |
| UI            | MUI v9.5.0 (@mui/material) + Emotion    |
| State         | MobX 7 + mobx-react-lite + mobx-persist |
| Data Fetching | TanStack React Query v5                 |
| Linting       | ESLint 10 (Flat Config)                 |
| Formatting    | Prettier                                |
| Git Hooks     | Husky + lint-staged                     |

## Project Structure

```
src/
├── app/            # Next.js App Router pages & layouts
├── components/     # Reusable UI components
├── contains/       # Enums and constants
├── providers/      # Global providers (AppProviders, RootStoreProvider)
├── stores/         # MobX stores (RootStore, GlobalStore, etc.)
└── theme/          # MUI theme definitions
```

## Key Architecture Decisions

- **Emotion Cache**: Custom cache in `src/providers/AppProviders.tsx` manages LTR (`css`) and RTL (`muirtl`) cache instances using `stylis-plugin-rtl`. Caches are created via `useMemo` inside components to prevent Next.js SSR cache leak.
- **RTL Support**: Managed dynamically via `DirectionContext` which toggles `document.dir`, MUI Theme direction, and the injected Emotion Cache.
- **Layout Approach**: Leveraging MUI `Stack` for 1-dimensional layouts instead of `Box` to align with newer MUI zero-runtime and performance optimizations. System props are encapsulated within the `sx` prop.
- **MobX 7 State Management**: Store reactivity is managed with `makeAutoObservable` without needing legacy decorators. Components access stores via `useRootStore()` / `useGlobalStore()` React Context hooks and are wrapped with `observer()`.
- **Provider Order**: DirectionContext → QueryClientProvider → AppRouterCacheProvider → CacheProvider → ThemeProvider → CssBaseline → RootStoreProvider.
- **MUI Color Scheme Toggle**: Integrated for light/dark mode switching via `useColorScheme`.

## Development Commands

```bash
yarn dev          # Start dev server (Turbopack)
yarn build        # Production build
yarn lint         # ESLint check
yarn format       # Prettier format
yarn type-check   # TypeScript check (no emit)
```

## Rules

All project rules are in `.claude/rules/`. Always apply:

- `code-style.md` — TypeScript/React patterns
- `project-structure.md` — Where files go
- `git-workflow.md` — Commit and branch conventions

## Important Notes

- Use `yarn`, not `npm` or `pnpm`.
- Pre-commit hook runs `lint` + `format` via lint-staged.
- Pre-push hook runs `type-check`.
- Never bypass Husky hooks with `--no-verify` unless explicitly requested.
