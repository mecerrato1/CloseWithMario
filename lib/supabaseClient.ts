import { createBrowserClient } from '@supabase/ssr';

/**
 * Browser-side Supabase client (for use in client components/pages).
 * Reads public URL + anon key from NEXT_PUBLIC_* env vars.
 */
export const supabaseBrowser = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
