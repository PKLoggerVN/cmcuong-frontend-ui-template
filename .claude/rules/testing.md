# Testing Rules

> This project does not yet have a test setup. These rules apply when tests are added.

## Recommended Stack

- **Unit/Component tests**: Vitest + React Testing Library
- **E2E tests**: Playwright
- **MobX store tests**: Vitest (plain unit tests — no React needed)

## Test File Placement

- Unit/component tests: co-locate with source → `ComponentName.test.tsx`
- E2E tests: `tests/e2e/<feature>.spec.ts`
- Test utilities/fixtures: `tests/helpers/`

## Component Testing Principles

- Test behavior, not implementation details.
- Query by role/label, not class names or test IDs (prefer `getByRole`, `getByLabelText`).
- Do not snapshot-test Chakra UI components — they change with version upgrades.

```tsx
// Good
const button = screen.getByRole('button', { name: /submit/i });
await userEvent.click(button);
expect(screen.getByText('Success')).toBeInTheDocument();
```

## MobX Store Tests

- Test stores in isolation — no React needed.
- Use `makeAutoObservable` or manually call actions.

```ts
it('should toggle theme', () => {
  const store = new GlobalStore();
  store.toggleTheme();
  expect(store.theme).toBe('dark');
});
```

## What NOT to Test

- Do not test Chakra UI library internals.
- Do not test Next.js routing behavior.
- Do not mock MobX reactivity system — test real observables.

## Coverage

- Aim for 80%+ on business logic (stores, hooks, utilities).
- UI coverage is secondary to behavior coverage.
