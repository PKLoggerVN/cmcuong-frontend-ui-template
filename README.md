# Next.js + MUI + MobX Template

A production-ready Next.js 16 starter template with Material UI v9, MobX 7, and TanStack React Query v5. Built with TypeScript, App Router, and a complete DX toolchain.

## Tech Stack

| Layer            | Technology                            | Version |
| ---------------- | ------------------------------------- | ------- |
| Framework        | Next.js (App Router, Turbopack)       | 16.4.2  |
| Language         | TypeScript                            | 6       |
| UI Library       | Material UI                           | v9      |
| State Management | MobX + mobx-react-lite                | 7 / 5   |
| Data Fetching    | TanStack React Query                  | v5      |
| Font             | Outfit (Google Fonts via `next/font`) | —       |
| Linting          | ESLint 10 (Flat Config)               | 10      |
| Formatting       | Prettier                              | 3       |
| Git Hooks        | Husky + lint-staged                   | —       |
| SEO              | next-sitemap                          | 4       |

## Features

- **Light / Dark / System theme** — MUI `colorSchemes` with `InitColorSchemeScript` (no flash on reload)
- **CSS Variables** — MUI theme tokens exposed as CSS vars, `colorSchemeSelector: 'class'`
- **No vendor prefixing** — `AppRouterCacheProvider` configured with `stylisPlugins: []` and `enableCssLayer: true`
- **MobX 7 State Management** — Modern, clean store reactivity using `makeAutoObservable` and React Context
- **SSR-safe hydration** — MobX store hydration + React Query client initialized per-request
- **Custom layout tokens** — `theme.layout` with responsive `screenPadding` and `gridGap` via CSS variables
- **Responsive typography** — All type variants scale between mobile and desktop breakpoints

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Outfit font, metadata, AppProviders)
│   ├── page.tsx            # Home page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── ModeToggle.tsx      # Light / Dark / System theme switcher
│   ├── Link.tsx            # MUI + Next.js Link wrapper
│   ├── Copyright.tsx       # Footer copyright
│   └── ProTip.tsx          # Example component
├── contains/
│   └── enums.ts            # Shared enums (STATE, etc.)
├── providers/
│   ├── AppProviders.tsx    # Root provider tree
│   └── RootStoreProvider.tsx
├── stores/
│   ├── RootStore.ts        # MobX store entry point
│   └── global.store.ts     # GlobalStore (banners, state)
└── theme/
    └── theme.ts            # MUI theme (palettes, typography, breakpoints, layout)
```

## Provider Tree

```
QueryClientProvider
└── InitColorSchemeScript         ← prevents dark/light flash
└── AppRouterCacheProvider        ← MUI SSR cache (no vendor prefixes)
    └── ThemeProvider
        └── CssBaseline
            └── RootStoreProvider ← MobX
```

## Theme

Custom breakpoints (matches common device widths):

| Token | Value  |
| ----- | ------ |
| `xs`  | 0px    |
| `sm`  | 576px  |
| `md`  | 768px  |
| `lg`  | 992px  |
| `xl`  | 1200px |

Custom layout tokens (responsive via CSS vars):

| Token                | Mobile | Desktop (≥768px) |
| -------------------- | ------ | ---------------- |
| `--screen-padding`   | 16px   | 160px            |
| `--grid-gap-tight`   | 8px    | 20px             |
| `--grid-gap-default` | 16px   | 40px             |
| `--grid-gap-loose`   | 24px   | 80px             |

## Getting Started

```bash
# Install dependencies
yarn install

# Run development server (Turbopack)
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
yarn dev          # Dev server with Turbopack
yarn build        # Production build (+ next-sitemap postbuild)
yarn start        # Serve production build
yarn lint         # ESLint check
yarn format       # Prettier format
yarn type-check   # TypeScript check (no emit)
```

## Git Hooks (Husky)

| Hook         | Action                                                             |
| ------------ | ------------------------------------------------------------------ |
| `pre-commit` | `lint-staged` → `yarn lint` + `yarn format` on staged `*.ts/*.tsx` |
| `pre-push`   | `yarn type-check`                                                  |

## Adding a New MobX Store

1. Create `src/stores/your.store.ts`:

```ts
import { makeAutoObservable } from 'mobx'
import RootStore from './RootStore'

export default class YourStore {
  data: string[] = []
  root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this, {
      root: false,
    })
  }

  setData(data: string[]) {
    this.data = data
  }
}
```

2. Register it in `src/stores/RootStore.ts`.
3. Access via `useRootStore()` hook from `RootStoreProvider`.

## Using the Theme Color Scheme Toggle

```tsx
import { useColorScheme } from '@mui/material/styles'

const { mode, setMode } = useColorScheme()
// mode: 'light' | 'dark' | 'system'
setMode('dark')
```

See `src/components/ModeToggle.tsx` for a full implementation example.
