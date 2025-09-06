import { NextRequest, NextResponse } from "next/server";
import { mockProvider } from "@/lib/listings/mockProvider";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const county = url.searchParams.get("county") ?? undefined;
  const minPrice = url.searchParams.get("minPrice") ? Number(url.searchParams.get("minPrice")) : undefined;
  const maxPrice = url.searchParams.get("maxPrice") ? Number(url.searchParams.get("maxPrice")) : undefined;
  const propertyType = url.searchParams.get("propertyType") ?? undefined;

  const results = await mockProvider.search({ county, minPrice, maxPrice, propertyType });
  return NextResponse.json(results);
}
