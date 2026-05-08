# Security Rules

## Secrets & Environment Variables

- NEVER hardcode API keys, tokens, or passwords in source code.
- All secrets go in `.env.local` (gitignored). Reference via `process.env.VAR_NAME`.
- Only `NEXT_PUBLIC_` prefixed vars are exposed to the browser — be intentional.
- Audit `.env` files before committing.

## Input Sanitization

- Sanitize all user inputs before rendering or processing.
- Never use `dangerouslySetInnerHTML` with unsanitized user content.
- Use libraries like `dompurify` if HTML rendering is needed.

## Authentication & Authorization

- Never store auth tokens in `localStorage` for sensitive apps — prefer `httpOnly` cookies.
- Always validate auth state server-side in route handlers and Server Components.
- Use Next.js middleware (`middleware.ts`) for route-level protection.

## API Security

- Rate limit API routes to prevent abuse.
- Validate request body shape before processing (use `zod` or similar).
- Return generic error messages to clients — never expose stack traces.

## Dependencies

- Keep dependencies up to date — run `yarn audit` regularly.
- Review new packages before adding (check weekly downloads, maintenance status).
- Avoid packages with known CVEs.

## Content Security Policy

- Configure CSP headers in `next.config.ts` for production.
- Restrict `script-src` and `connect-src` to known origins.

## XSS Prevention

- React escapes JSX content by default — never bypass this.
- Avoid `eval()` and dynamic `Function()` calls.
- Validate URLs before using them in `href` or `src` (watch for `javascript:` URIs).
