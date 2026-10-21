# Code Style

## TypeScript

- Prefer `interface` for object shapes, `type` for unions/intersections.
- Never use `any` — use `unknown` and narrow, or explicit generics.
- Always type component props explicitly (no implicit prop drilling).
- Use `const` by default; `let` only when reassignment is needed.

## React Components

- Functional components only — no class components.
- File name matches component name (PascalCase): `UserCard.tsx`.
- One component per file (small helpers can be co-located).
- `'use client'` directive only when the component uses browser APIs, hooks with state, or event handlers.

```tsx
// Good
import Stack from '@mui/material/Stack'

interface UserCardProps {
  name: string
  avatarUrl?: string
}

export function UserCard({ name, avatarUrl }: UserCardProps) {
  return (
    <Stack direction="row" spacing={2} sx={{ p: 2, alignItems: 'center' }}>
      {name}
    </Stack>
  )
}
```

## Material UI (v9) Best Practices

- **Layouts**: Use `Stack` for 1-dimensional layouts (rows/columns) instead of `Box`.
- **System Props**: Never pass system props (e.g. `justifyContent`, `alignItems`, `p`, `m`) directly to components like `Stack` or `Box`. Always place them inside the `sx={{ ... }}` prop to avoid type errors and runtime warnings.
- **Directional Support**: Avoid hardcoding `marginLeft` or `paddingRight` if they affect Layout Direction. Use logical properties (`marginBlock`, `marginInline`, `ml`, `mr`) supported by RTL translation.

## Imports Order

1. React / Next.js
2. External libraries (MUI, MobX, etc.)
3. Internal aliases (`@/components/...`)
4. Relative imports (`./`)
5. Types (`type` imports last)

Prettier and ESLint handle enforcement automatically.

## Naming Conventions

| Entity    | Convention               | Example                           |
| --------- | ------------------------ | --------------------------------- |
| Component | PascalCase               | `UserProfile`                     |
| Hook      | camelCase + `use` prefix | `useThemeToggle`                  |
| Store     | PascalCase + `Store`     | `GlobalStore`                     |
| Constant  | SCREAMING_SNAKE_CASE     | `MAX_RETRY_COUNT`                 |
| File      | kebab-case or PascalCase | `user-card.tsx` or `UserCard.tsx` |

## Formatting

- Prettier handles all formatting — do not manually adjust spacing/quotes.
- Run `yarn format` before committing.
- Tabs: 2 spaces. Quotes: single. Trailing commas: all.
