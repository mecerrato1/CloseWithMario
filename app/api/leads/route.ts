import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { leadSchema } from "@/lib/leadSchema";

// type-safe honeypot check (no "any")
function hasNonEmptyHoneypot(v: unknown): boolean {
  if (typeof v !== "object" || v === null) return false;
  const hp = (v as Record<string, unknown>).honeypot;
  return typeof hp === "string" && hp.trim().length > 0;
}

export async function POST(req: NextRequest) {
  // Parse JSON safely
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, reason: "invalid_json" },
      { status: 400 }
    );
  }

  // Spam trap: if filled, pretend success
  if (hasNonEmptyHoneypot(body)) {
    return NextResponse.json({ ok: true });
  }

  // Validate payload
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, reason: "validation", errors: parsed.error.flatten() },
      { status: 400 }
    );
  }
  const d = parsed.data;

  // Insert into Supabase
  const supabase = supabaseServer();
  const { error } = await supabase.from("leads").insert({
    name: d.name,
    email: d.email,
    phone: d.phone ?? null,
    loan_purpose: d.loan_purpose, // 'purchase' | 'refi' | 'preapproval'
    price: d.price ?? null,
    down_payment: d.down_payment ?? null,
    credit_score: d.credit_score ?? null,
    message: d.message ?? null,
    source: d.source ?? "website",
    page_path: d.page_path ?? null,
    user_id: d.user_id ?? null,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, reason: "db", error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
