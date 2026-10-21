# Error Handling

## General Principles

- Handle errors at the appropriate boundary — not every function needs try/catch.
- Never swallow errors silently (`catch (e) {}`).
- Log errors with context, not just the message.

## React Error Boundaries

- Wrap page-level content with an Error Boundary for graceful UI fallback.
- Use Next.js `error.tsx` for route-level error handling.

```tsx
// src/app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <Box>
      <Typography>Something went wrong: {error.message}</Typography>
      <Button onClick={reset}>Try again</Button>
    </Box>
  )
}
```

## Async / Promise Errors

- Always `await` promises inside try/catch or handle with `.catch()`.
- No floating promises — every `Promise` must be handled.

```ts
// Bad
fetchData() // floating promise

// Good
try {
  await fetchData()
} catch (error) {
  console.error('fetchData failed:', error)
}
```

## React Query Errors

- Check `isError` and render fallback UI.
- Use `error.message` for display — never expose stack traces to users.

```tsx
if (isError) return <Alert severity="error">{error.message}</Alert>
```

## MobX Store Errors

- Store async actions should set an `error` observable and `isLoading` state.
- Reset `error` before each new request.

```ts
class DataStore {
  error: string | null = null
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  async fetchData() {
    this.isLoading = true
    this.error = null
    try {
      // ...
    } catch (e) {
      this.error = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      this.isLoading = false
    }
  }
}
```

## TypeScript Error Narrowing

```ts
// Good
catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
```
