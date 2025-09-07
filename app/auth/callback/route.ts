// app/auth/callback/route.ts
import { NextResponse, type NextRequest } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/";

  if (code) {
    const supabase = supabaseServer();
    // This sets the Supabase auth cookie on your domain
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL(next, url.origin));
}
