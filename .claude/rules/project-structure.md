# Project Structure

## Directory Layout

```
.
├── .claude/                  # AI agent configuration (this directory)
├── .husky/                   # Git hooks
├── public/                   # Static assets
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── error.tsx         # Error boundary
│   │   ├── not-found.tsx     # 404 page
│   │   └── api/              # API Route Handlers
│   ├── components/           # Reusable UI components
│   │   └── <Feature>/        # Group by feature or domain
│   ├── contains/             # Enums and constants
│   ├── hooks/                # Custom React hooks
│   ├── providers/            # Global providers
│   │   ├── AppProviders.tsx  # Root provider tree
│   │   └── RootStoreProvider.tsx
│   ├── stores/               # MobX stores
│   │   ├── RootStore.ts      # Store entry point
│   │   └── GlobalStore.ts
│   ├── components/ui/        # Chakra UI generated snippets
│   │   └── color-mode.tsx
│   └── types/                # Shared TypeScript types
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

## Where to Put New Files

| What | Where |
|---|---|
| New page | `src/app/<route>/page.tsx` |
| New API endpoint | `src/app/api/<resource>/route.ts` |
| Reusable component | `src/components/<FeatureName>/` |
| Page-specific component | Co-locate in `src/app/<route>/` |
| Custom hook | `src/hooks/use<Name>.ts` |
| New MobX store | `src/stores/<Name>Store.ts` + register in `RootStore.ts` |
| Shared types | `src/types/<domain>.ts` |
| Constants/enums | `src/contains/<name>.ts` |
| Theme/Snippet | `src/components/ui/` |

## Component File Structure

```tsx
// ComponentName.tsx
'use client'; // only if needed

import { ... } from 'react';
import { ... } from '@chakra-ui/react';
import { ... } from '@/stores/...';

interface ComponentNameProps {
  // ...
}

export function ComponentName({ ... }: ComponentNameProps) {
  // ...
}
```

## Rules

- Do NOT put business logic in `page.tsx` — extract to components or hooks.
- Do NOT import from `src/app/` in `src/components/` (one-way dependency).
- Keep `providers/` thin — they only wrap, they do not contain logic.
