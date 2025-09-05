import { NextResponse } from 'next/server';

// Revalidate once per day (24h)
export const revalidate = 86400;

type Rate = { apr: number; noteRate: number };
type Payload = {
  updatedAt: string;
  conventional30: Rate;
  fha30: Rate;
  va30: Rate;
};

export async function GET() {
  // TODO: replace with live PMMS fetch later
  const data: Payload = {
    updatedAt: new Date().toISOString(),
    conventional30: { apr: 6.95, noteRate: 6.78 },
    fha30:          { apr: 6.40, noteRate: 6.25 },
    va30:           { apr: 6.20, noteRate: 6.05 }
  };
  return NextResponse.json(data);
}
