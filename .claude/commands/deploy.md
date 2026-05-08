# /deploy — Deploy Command

Run a full production deployment pipeline for this Next.js app.

## Steps

1. **Type check**: `yarn type-check`
2. **Lint**: `yarn lint`
3. **Format check**: `yarn format --check`
4. **Build**: `yarn build`
5. **Report** any errors and stop if any step fails.

## Usage

```
/deploy
```

## Notes

- Always run type-check before build.
- Fix all ESLint errors before deploying — do not use `--no-verify`.
- The `postbuild` script automatically runs `next-sitemap` after build.
