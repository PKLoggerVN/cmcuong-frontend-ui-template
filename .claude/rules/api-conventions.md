# API Conventions

## Next.js Route Handlers

- Route handlers go in `src/app/api/<resource>/route.ts`.
- Use named exports: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
- Always return a `NextResponse` with appropriate status codes.

```ts
// Good
export async function GET(request: Request) {
  return NextResponse.json({ data }, { status: 200 })
}
```

## TanStack React Query

- All API calls go through React Query hooks, not raw `fetch` in components.
- Query keys must be descriptive arrays: `['users', userId]`.
- Keep query functions in `src/hooks/` or co-located with feature.

```ts
const { data, isLoading } = useQuery({
  queryKey: ['user', id],
  queryFn: () => fetchUser(id),
})
```

## Error Handling

- Always handle `isError` state in query consumers.
- Use `onError` callbacks or React Query's `throwOnError` for critical failures.

## HTTP Status Codes

| Situation           | Code |
| ------------------- | ---- |
| Success (with data) | 200  |
| Created             | 201  |
| No content          | 204  |
| Bad request         | 400  |
| Unauthorized        | 401  |
| Forbidden           | 403  |
| Not found           | 404  |
| Server error        | 500  |
