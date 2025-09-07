'use client';
import { useState } from "react";

type Listing = {
  id: string; address: string; price: number; propertyType: string;
  beds?: number; baths?: number; remarks?: string;
};

export default function BuyPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const params = new URLSearchParams(fd as unknown as Record<string, string>).toString();
    const res = await fetch(`/api/listings?${params}`);
    const data = await res.json();
    setListings(data);
    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Search Listings</h1>
      <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-5">
        <input name="county" placeholder="County (e.g., Miami)" className="rounded-xl border px-4 py-3 md:col-span-2" />
        <input name="minPrice" type="number" placeholder="Min Price" className="rounded-xl border px-4 py-3" />
        <input name="maxPrice" type="number" placeholder="Max Price" className="rounded-xl border px-4 py-3" />
        <select name="propertyType" className="rounded-xl border px-4 py-3">
          <option value="">Any Type</option>
          <option value="SFH">Single Family</option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhouse</option>
        </select>
        <button className="rounded-xl bg-black text-white px-4 py-3">Search</button>
      </form>

      {loading && <div className="opacity-70 text-sm">Loading…</div>}

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {listings.map(x => (
          <li key={x.id} className="rounded-2xl border p-4">
            <div className="font-medium">{x.address}</div>
            <div className="text-sm opacity-70">
              ${x.price.toLocaleString()} • {x.propertyType} • {x.beds ?? '-'}bd/{x.baths ?? '-'}ba
            </div>
            {x.remarks && <p className="mt-2 text-sm">{x.remarks}</p>}
          </li>
        ))}
        {!loading && listings.length === 0 && (
          <li className="text-sm opacity-70">No results yet — submit a search above.</li>
        )}
      </ul>
    </main>
  );
}
