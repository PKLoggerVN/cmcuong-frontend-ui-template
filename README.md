# Next.js + Chakra UI + MobX Template

A production-ready Next.js 16 starter template with **Chakra UI v3**, **MobX 6**, and **TanStack React Query v5**. Built with TypeScript, App Router, `next-themes` color mode, and a complete developer experience (DX) toolchain.

## Tech Stack

| Layer            | Technology                              | Version |
| ---------------- | --------------------------------------- | ------- |
| Framework        | Next.js (App Router, Turbopack)         | 16.4.0  |
| Core Library     | React & React DOM                       | 19.3.0  |
| Language         | TypeScript                              | 5       |
| UI Library       | Chakra UI v3 (`@chakra-ui/react`)       | 3.37.0  |
| Styling Engine   | Emotion (`@emotion/react`)              | 11.14.0 |
| Icons            | React Icons (`react-icons`)             | 5.7.0   |
| Color Mode       | `next-themes`                           | 0.4.6   |
| State Management | MobX + `mobx-react` + `mobx-react-lite` | 6.15.0  |
| Data Fetching    | TanStack React Query                    | 5.104.1 |
| Font             | Outfit (Google Fonts via `next/font`)   | —       |
| Linting          | ESLint 9 (Flat Config)                  | 9       |
| Formatting       | Prettier                                | 3.8.0   |
| Git Hooks        | Husky + lint-staged                     | 9 / 16  |
| SEO              | next-sitemap                            | 4.2.3   |

## Features

- **Chakra UI v3** — Next-generation accessible UI components powered by `@chakra-ui/react` and `@emotion/react`, with package imports optimized in `next.config.ts`.
- **Light / Dark Mode** — SSR-safe color mode switching via `next-themes` with zero hydration flash and customizable `ColorModeButton`.
- **MobX 6 State Management** — SSR-safe store hydration, singleton management on the client, and per-request store instantiation on SSR/SSG. Supports decorators (`@observable`, `@action`).
- **TanStack React Query v5** — Powerful server state caching and data fetching with React Query Devtools integration.
- **Next.js 16 App Router** — Clean folder structure, root layout, and route handling.
- **SEO & OpenGraph Ready** — Preconfigured metadata tags, Google Fonts (`Outfit`), and automatic sitemap generation via `next-sitemap` with GMT+7 timestamps.
- **Strict DX Toolchain** — ESLint 9 Flat Config, Prettier code formatting, TypeScript type checking, and Husky pre-commit hooks.

## Project Structure

```
src/
├── app/
│   ├── demo/
│   │   └── page.tsx            # Demo page (Chakra UI components, color mode, MobX, RTL toggle)
│   ├── favicon.ico
│   ├── globals.css             # Global CSS
│   ├── layout.tsx              # Root layout (Outfit font, SEO metadata, AppProviders)
│   └── page.tsx                # Home page
├── components/
│   ├── ui/
│   │   └── color-mode.tsx      # ColorModeProvider, useColorMode, ColorModeButton
│   ├── Copyright.tsx           # Footer copyright component
│   ├── Link.tsx                # Next.js Link wrapper
│   └── ProTip.tsx              # Tip component with Chakra UI Link & React Icons
├── contains/
│   └── enums.ts                # Shared enums (STATE, etc.)
├── providers/
│   ├── AppProviders.tsx        # Composed root provider tree
│   └── RootStoreProvider.tsx   # MobX store provider with SSR hydration support
└── stores/
    ├── RootStore.ts            # MobX RootStore entry point
    └── global.store.ts         # GlobalStore (banners, app states)
```

## Provider Architecture

Providers are cleanly composed in `src/providers/AppProviders.tsx` to ensure proper context nesting and SSR hydration:

```
QueryClientProvider (TanStack React Query)
└── ColorModeProvider (next-themes ThemeProvider)
    └── ChakraProvider (Chakra UI v3 defaultSystem)
        └── RootStoreProvider (MobX)
            └── {children}
```

> **Note on Hydration:** Placing `ColorModeProvider` outside `ChakraProvider` ensures that Emotion's server-rendered CSS tags and `next-themes`'s anti-flicker script tags hydrate cleanly without React 19 hydration mismatches.

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- Yarn (v1.22+)

### Installation

```bash
# Clone the repository
git clone https://github.com/PKLoggerVN/nextjs-using-chakra-ui-template.git

# Navigate to project directory
cd nextjs-using-chakra-ui-template

# Install dependencies
yarn install
```

### Running Locally

```bash
# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. Navigate to `/demo` to see Chakra UI and MobX in action.

## Available Scripts

| Script            | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `yarn dev`        | Starts the Next.js development server                 |
| `yarn build`      | Creates an optimized production build + sitemaps      |
| `yarn start`      | Starts the production server                          |
| `yarn lint`       | Runs ESLint to check for code quality issues          |
| `yarn format`     | Formats code with Prettier                            |
| `yarn type-check` | Runs TypeScript compiler to verify types without emit |

## Git Hooks (Husky)

Automated checks are configured with Husky and `lint-staged`:

| Hook         | Action                                                             |
| ------------ | ------------------------------------------------------------------ |
| `pre-commit` | `lint-staged` → `yarn lint` + `yarn format` on staged `*.ts/*.tsx` |
| `pre-push`   | `yarn type-check`                                                  |

## Working with MobX

### 1. Adding a New Store

Create `src/stores/myFeature.store.ts`:

```ts
import { action, observable, makeObservable } from 'mobx'
import RootStore from './RootStore'

export default class MyFeatureStore {
  @observable items: string[] = []
  @observable root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeObservable(this)
  }

  @action addItem(item: string) {
    this.items.push(item)
  }
}
```

### 2. Registering in `RootStore`

Update `src/stores/RootStore.ts`:

```ts
import MyFeatureStore from './myFeature.store'

export default class RootStore {
  myFeatureStore: MyFeatureStore

  constructor() {
    this.myFeatureStore = new MyFeatureStore(this)
    // ...
  }
}
```

### 3. Consuming in Components

You can consume the store via React hook or MobX `inject`/`observer`:

```tsx
'use client'

import { useRootStore } from '@/providers/RootStoreProvider'
import { observer } from 'mobx-react-lite'

const MyComponent = observer(() => {
  const { globalStore } = useRootStore()

  return <div>State: {globalStore.state}</div>
})

export default MyComponent
```

Or using `inject`:

```tsx
import { inject, observer } from 'mobx-react'
import RootStore from '@/stores/RootStore'

const MyComponent = inject(({ store }: { store: RootStore }) => ({
  globalStore: store.globalStore,
}))(
  observer(({ globalStore }) => {
    return <div>State: {globalStore?.state}</div>
  })
)
```

## Using Chakra UI Color Mode

Toggle color mode in any component:

```tsx
import { ColorModeButton, useColorMode } from '@/components/ui/color-mode'

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <ColorModeButton />
      <button onClick={toggleColorMode}>Current: {colorMode}</button>
    </div>
  )
}
```

## License

This project is licensed under the MIT License.
