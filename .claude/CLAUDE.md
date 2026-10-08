# CLAUDE.md — Project Context

## Project Overview

**nextjs-using-chakra-ui-template** is a Next.js 16 application using Chakra UI v3, React 19, MobX 6 for state management, and TanStack React Query v5 for data fetching. Built with TypeScript and the App Router.

## Tech Stack

| Layer         | Technology                                    |
| ------------- | --------------------------------------------- |
| Framework     | Next.js 16.2.5 (App Router, Turbopack)        |
| Language      | TypeScript 5, React 19.2.6                    |
| UI            | Chakra UI v3 (@chakra-ui/react) + next-themes |
| State         | MobX 6 + mobx-react-lite + mobx-persist       |
| Data Fetching | TanStack React Query v5                       |
| Linting       | ESLint 9 (Flat Config)                        |
| Formatting    | Prettier                                      |
| Git Hooks     | Husky + lint-staged                           |

## Project Structure

```
src/
├── app/            # Next.js App Router pages & layouts
├── components/     # Reusable UI components
├── contains/       # Enums and constants
├── providers/      # Global providers (AppProviders, RootStoreProvider, ColorModeProvider)
├── stores/         # MobX stores (RootStore, GlobalStore, etc.)
└── components/ui/  # Chakra UI custom snippets and components
```

## Key Architecture Decisions

- **RTL Support**: Chakra UI supports RTL natively using logical CSS properties.
- **Layout Approach**: Leveraging Chakra UI `Stack`, `Box`, and `Container` for layout composition.
- **MobX Decorators**: `experimentalDecorators: true` enabled in `tsconfig.json`.
- **Provider Order**: QueryClientProvider → ChakraProvider → ColorModeProvider → RootStoreProvider.
- **Color Mode Toggle**: Integrated for light/dark mode switching via `useColorMode` and `next-themes`.

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
