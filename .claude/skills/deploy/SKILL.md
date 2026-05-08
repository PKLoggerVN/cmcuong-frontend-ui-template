# Skill: Deploy

Triggered when the user asks to deploy, build for production, or ship the app.

## Trigger Phrases

- "deploy the app"
- "build for production"
- "ship this"
- "prepare a production build"

## Workflow

```
1. yarn type-check          → Ensure no TypeScript errors
2. yarn lint                → Ensure no ESLint violations
3. yarn format --check      → Ensure formatting is clean
4. yarn build               → Next.js production build
   └── postbuild: next-sitemap runs automatically
5. Report build output size and any warnings
```

## On Failure

- If `type-check` fails → list type errors and fix them before proceeding.
- If `lint` fails → fix lint errors; do not skip with `--no-verify`.
- If `build` fails → read the error output and diagnose root cause.

## Success Criteria

- All steps exit with code `0`.
- No TypeScript errors (`tsc --noEmit` clean).
- Build output in `.next/` is generated.

## Notes

- This skill runs locally. Actual deployment to Vercel/server requires separate CI/CD config.
- Turbopack is used in dev (`next dev`) — production build always uses webpack.
