import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { leadSchema } from "@/lib/leadSchema";

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, reason: "invalid_json" },
        { status: 400 }
      );
    }

    // Spam trap: if the hidden field is filled, pretend success
    if ((body as any)?.honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Validate
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, reason: "validation", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const d = parsed.data;

    // Use the already processed numbers from schema
    const price = d.price ?? null;
    const down_payment = d.down_payment ?? null;

    // IMPORTANT: await the server client
    const supabase = await supabaseServer();

    const { error } = await supabase.from("leads").insert({
      name: d.name,
      email: d.email,
      phone: d.phone,
      loan_purpose: d.loan_purpose, // 'purchase' | 'refi' | 'preapproval'
      price,
      down_payment,
      credit_score: d.credit_score,
      message: d.message,
      source: d.source ?? "website",
      page_path: d.page_path,
      user_id: d.user_id ?? null,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, reason: "db", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown";
    return NextResponse.json(
      { ok: false, reason: "exception", error: msg },
      { status: 500 }
    );
  }
}
