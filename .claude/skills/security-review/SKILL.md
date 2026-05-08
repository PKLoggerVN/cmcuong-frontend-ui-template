# Skill: Security Review

Triggered when the user asks for a security audit, security check, or before a major release.

## Trigger Phrases

- "do a security review"
- "security audit"
- "check for vulnerabilities"
- "is this code secure?"

## Workflow

```
1. Scan for hardcoded secrets
   → Grep for: API_KEY, SECRET, PASSWORD, TOKEN (in non-.env files)

2. Check dependency vulnerabilities
   → yarn audit

3. Review API routes (src/app/api/)
   → Check input validation
   → Check auth guards
   → Check error messages don't leak internals

4. Review environment variable usage
   → NEXT_PUBLIC_ vars exposed to client — are they safe?
   → No secrets in client-side code

5. Check for XSS vectors
   → dangerouslySetInnerHTML usage
   → Unsanitized user content in rendering

6. Check CSP headers in next.config.ts

7. Report findings with severity: CRITICAL / HIGH / MEDIUM / LOW
```

## Output Format

```
## Security Review Report

### CRITICAL
- [item] — [file:line] — [recommendation]

### HIGH
- ...

### MEDIUM
- ...

### LOW / INFO
- ...

### Passed Checks
- ...
```

## Notes

- This is a static analysis review — it does not run dynamic scanners.
- For deep penetration testing, use dedicated tools (OWASP ZAP, Burp Suite).
