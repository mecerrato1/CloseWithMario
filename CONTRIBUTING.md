cat > CONTRIBUTING.md <<'EOF'
# Contributing

## Workflow
- Branch from `main`; small scoped PRs.
- Commit style: `feat: …`, `fix: …`, `docs: …`, `seo: …`, `chore: …`.

## Local
```bash
npm i
cp .env.example .env.local   # fill values
npm run dev
npm run build

Formatting/Linting
npm run lint

Releases

Merge to main → Vercel deploys.

Update .env in Vercel when adding new public vars.

Keep docs/adr/ updated for notable decisions.

Security

Do not commit secrets. .env.local stays local.
