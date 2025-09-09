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
  // Note: These are mock rates with client padding applied
  const data: Payload = {
    updatedAt: new Date().toISOString(),
    conventional30: { apr: 6.95, noteRate: 6.78 }, // Mock rate with padding
    fha30:          { apr: 6.40, noteRate: 6.25 }, // Mock rate with padding  
    va30:           { apr: 6.20, noteRate: 6.05 }  // Mock rate with padding
  };
  return NextResponse.json(data);
}
