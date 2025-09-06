import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const base = process.env.NEXT_PUBLIC_SITE_URL || `${url.protocol}//${url.host}`;
  return NextResponse.redirect(new URL('/', base));
}
