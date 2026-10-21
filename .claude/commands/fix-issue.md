# /fix-issue — Fix Issue Command

Systematically diagnose and fix a bug or issue in the codebase.

## Steps

1. **Understand** the issue: read the error message or description carefully.
2. **Locate** the source: use Grep/Glob to find relevant files.
3. **Read** the affected files before making any changes.
4. **Diagnose** root cause — do not guess; trace the actual code path.
5. **Fix** the minimal change needed. Do not refactor unrelated code.
6. **Verify**: run `yarn lint` and `yarn type-check` after the fix.
7. **Report** what was changed and why.

## Usage

```
/fix-issue <description of the issue>
```

## Rules

- Never add unrelated improvements while fixing a bug.
- Never bypass TypeScript errors with `as any` unless justified.
- If the fix requires a breaking change, flag it to the user first.
