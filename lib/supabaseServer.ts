// lib/supabaseServer.ts
import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

/**
 * Server-side Supabase client (for server components, actions, and route handlers).
 * Uses Next.js cookies to persist the auth session.
 * Updated for Next.js 15 compatibility.
 */
export async function supabaseServer() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            // Next's cookies() API sets the cookie on the response
            cookieStore.set({ name, value, ...options });
          } catch {
            // Ignore cookie setting errors in production
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch {
            // Ignore cookie removal errors in production
          }
        },
      },
    }
  );
}
