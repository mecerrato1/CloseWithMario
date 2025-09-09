# 0001 – Use Supabase for Auth + Profiles
- **Date:** 2025-09-08
- **Decision:** Supabase for Google/email auth; profiles table with RLS; SSR/CSR helpers.
- **Why:** Fast setup, secure session cookies in Next.js, less boilerplate than rolling custom auth.
- **Alternatives:** NextAuth + custom DB; Firebase Auth.
- **Impact:** Store anon key in NEXT_PUBLIC_ vars; configure Google OAuth origins and keep Supabase callback URI.