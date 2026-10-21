# /review — Code Review Command

Perform a thorough code review of changed or specified files.

## Review Checklist

### Correctness

- [ ] Logic is correct and handles edge cases
- [ ] No off-by-one errors or null/undefined issues
- [ ] Async/await used correctly (no floating promises)

### TypeScript

- [ ] No `any` types without justification
- [ ] Props and return types are explicit
- [ ] Generics used where appropriate

### React / Next.js

- [ ] Components follow single responsibility principle
- [ ] No unnecessary re-renders (memoization where needed)
- [ ] Server vs Client components used correctly (`'use client'` only when necessary)
- [ ] No direct DOM manipulation

### MobX

- [ ] State mutations managed via store actions/methods (using `makeAutoObservable`)
- [ ] Observers wrapped with `observer()` HOC
- [ ] No accidental state mutations outside store

### MUI / Styling

- [ ] Uses MUI theme tokens (`theme.palette`, `theme.spacing`) — no hardcoded colors/px
- [ ] Responsive design via MUI `sx` prop or `useMediaQuery`

### Security

- [ ] No secrets or API keys in code
- [ ] User input is sanitized before use

### Performance

- [ ] No expensive computations in render without `useMemo`
- [ ] Images use Next.js `<Image>` component

## Usage

```
/review [file or PR description]
```
