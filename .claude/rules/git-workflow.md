# Git Workflow

## Branch Naming

```
feature/<short-description>    # New features
fix/<short-description>        # Bug fixes
chore/<short-description>      # Tooling, config, deps
refactor/<short-description>   # Code restructuring (no behavior change)
docs/<short-description>       # Documentation only
```

## Commit Message Format (Conventional Commits)

```
<type>(<scope>): <short summary>

[optional body]
[optional footer]
```

### Types

| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `chore` | Build, tooling, deps |
| `refactor` | Code change without behavior change |
| `style` | Formatting only |
| `test` | Adding or fixing tests |
| `docs` | Documentation |
| `perf` | Performance improvement |

### Examples

```
feat(auth): add Chakra UI color mode toggle
fix(store): reset error state before new fetch
chore(deps): upgrade Chakra UI to v3
refactor(providers): extract Emotion cache to separate file
```

## Hooks (Husky)

- **pre-commit**: runs `lint-staged` → `yarn lint` + `yarn format` on staged `*.ts/*.tsx` files.
- **pre-push**: runs `yarn type-check`.
- Never bypass with `--no-verify` unless explicitly asked by the user.

## Pull Requests

- Keep PRs focused — one concern per PR.
- Write a clear description of what changed and why.
- Reference issues: `Closes #123`.
- Squash merge to keep main branch history clean.

## Main Branch Protection

- Never force-push to `main`.
- All changes go through PRs (even solo projects — good habit).
