This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

cat > README.md <<'EOF'
# Close With Mario

Real estate + mortgage in one Next.js app (App Router, TypeScript, Tailwind). Auth via Supabase. Deployed on Vercel.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Supabase (Auth + DB, RLS)
- Vercel (hosting + SSL)
- FRED API (rate ticker: OBMMIC30YF + FHA/VA series)

## Quick start
```bash
npm i
cp .env.example .env.local   # then edit .env.local with real values
npm run dev

app/
  (site)/
    layout.tsx           # SEO head, JSON-LD, (optional) GA loader
    page.tsx             # Landing
    sitemap.ts           # App Router sitemap
  api/
    rates/route.ts       # FRED proxy (OBMMIC30YF + FHA/VA)
    leads/route.ts       # Lead intake → Supabase
  legacy/page.tsx        # Embeds NEXT_PUBLIC_LEGACY_URL
  login/page.tsx         # Supabase login
  account/page.tsx       # Account area
  apply/page.tsx         # Mortgage app iframe
  calculators/…          # Calculators (DTI, etc.)
components/
  Header.tsx, Footer.tsx, RateTicker.tsx, LeadForm.tsx, ThemeToggle.tsx, LocalBusinessSchema.tsx
lib/
  config.ts              # Centralized public runtime config

Project structure (high-level)
app/(site)/layout.tsx – SEO, GA loader, JSON-LD
app/(site)/page.tsx – landing
app/mortgage/page.tsx – lead form + calculators
app/legacy/page.tsx – embedded listings (env-driven)
app/api/rates/route.ts – FRED proxy
app/api/leads/route.ts – lead intake (Supabase)
components/RateTicker.tsx, components/LeadForm.tsx
lib/config.ts – central public runtime config
docs/adr/ – decision records

Deploy
Connected to GitHub; Vercel builds on main.
Set env vars in Vercel (Production + Preview).
Domain on Vercel issues SSL automatically.
OAuth notes
Google OAuth Authorized JS origins include production + localhost.
Redirect URI stays the Supabase callback.

SEO
Canonical/OG in layout
app/robots.ts + app/(site)/sitemap.ts
LocalBusiness JSON-LD

Contact
Mario Cerrato — mc@closewithmario.com
 — 305.219.2799
NMLS ID: 93260 · Realtor ID: 3245079