'use client';

import { useEffect, useState } from 'react';

type Rate = { apr: number; noteRate: number };
type Rates = {
  updatedAt: string;
  conventional30: Rate;
  fha30: Rate;
  va30: Rate;
};

export default function RateTicker() {
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    fetch('/api/rates')
      .then(r => r.json())
      .then(setRates)
      .catch(() => {});
  }, []);

  if (!rates) return null;

  const Item = ({ label, r }: { label: string; r: Rate }) => (
    <div className="flex items-center gap-2 px-4 py-2 text-sm shrink-0">
      <span className="font-medium">{label}</span>
      <span>Note {r.noteRate.toFixed(2)}%</span>
      <span className="opacity-70">APR {r.apr.toFixed(2)}%</span>
    </div>
  );

  return (
    <div id="rates" className="w-full border-b">
      <div className="mx-auto max-w-7xl flex overflow-x-auto no-scrollbar">
        <Item label="Conventional 30" r={rates.conventional30} />
        <Item label="FHA 30" r={rates.fha30} />
        <Item label="VA 30" r={rates.va30} />
        <div className="ml-auto px-4 py-2 text-xs opacity-60 shrink-0">
          Updated {new Date(rates.updatedAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
