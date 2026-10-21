# Database Rules

> This project is currently a frontend-focused template. Database rules apply when a backend/ORM is added.

## If Using Prisma (recommended for Next.js)

- Schema file at `prisma/schema.prisma`.
- Always run `prisma generate` after schema changes.
- Use `prisma migrate dev` for local development migrations.
- Never run `prisma migrate reset` in production.

## Data Fetching Patterns

- Fetch data in Server Components where possible (avoids client-side waterfall).
- Use React Query for client-side data that needs caching, pagination, or mutation.
- Never expose raw database errors to the client — map to user-friendly messages.

## Environment Variables

- Database connection strings go in `.env.local` (gitignored).
- Access via `process.env.DATABASE_URL` — never hardcode.

## Query Safety

- Parameterize all queries — no string interpolation in SQL.
- Validate and sanitize all inputs before querying.
- Use transactions for multi-step writes.
