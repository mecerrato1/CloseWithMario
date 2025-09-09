/**
 * RateTicker: shows daily rates sourced from /api/rates.
 * Conventional = OBMMIC30YF (FRED OBMMI). FHA/VA series also pulled via FRED.
 * Revalidated periodically on the server; renders last known value if offline.
 */

// components/RateTicker.tsx
// Server component: fetches daily OBMMI series from FRED and renders a slim ticker

type FredObs = { date: string; value: string };
type FredResponse = { observations?: FredObs[] };

const SERIES = [
  { key: "conv", label: "Conventional 30", fred: "OBMMIC30YF" },   // OBMMI Conventional
  { key: "fha",  label: "FHA 30",          fred: "OBMMIFHA30YF" }, // OBMMI FHA
  { key: "va",   label: "VA 30",           fred: "OBMMIVA30YF" },  // OBMMI VA
];

async function getLast(seriesId: string) {
  const params = new URLSearchParams({
    series_id: seriesId,
    file_type: "json",
    sort_order: "desc",
    limit: "10", // get a few and skip any "." (missing) values
  });

  const apiKey = process.env.FRED_API_KEY;
  if (apiKey) params.set("api_key", apiKey);

  const url = `https://api.stlouisfed.org/fred/series/observations?${params.toString()}`;
  const res = await fetch(url, {
    next: { revalidate: 60 * 60 }, // revalidate hourly on the server (Vercel cache)
  });
  if (!res.ok) throw new Error(`FRED error for ${seriesId}`);
  const json = (await res.json()) as FredResponse;

  const obs = (json.observations || []).find((o) => o.value !== ".");
  const value = obs ? Number.parseFloat(obs.value) : undefined;
  return { date: obs?.date, value };
}

export default async function RateTicker() {
  let data: { label: string; value?: number; date?: string }[] = [];
  try {
    const results = await Promise.all(SERIES.map((s) => getLast(s.fred)));
    data = SERIES.map((s, i) => ({ label: s.label, value: results[i].value, date: results[i].date }));
  } catch {
    // fail quietly so layout doesn't jump
    return null;
  }

  const lastUpdated =
    data.map((d) => d.date).filter(Boolean).sort().at(-1) ?? undefined;

  return (
    <div className="w-full border-b border-black/10 bg-white/70 text-sm dark:border-white/10 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {data.map((d) => (
            <div key={d.label} className="flex items-center gap-2">
              <span className="font-semibold">{d.label}</span>
              {typeof d.value === "number" ? (
                <span className="opacity-80">Note {d.value.toFixed(2)}%</span>
              ) : (
                <span className="opacity-60">Note —</span>
              )}
            </div>
          ))}
        </div>

        {lastUpdated && (
          <div className="shrink-0 opacity-60">
            Updated {new Date(lastUpdated).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
}
