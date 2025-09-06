import Link from "next/link";

export default function MortgagePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Mortgage Hub</h1>
      <p className="opacity-80">
        Get pre-approved, compare scenarios, and explore calculators.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <Link href="/calculators" className="rounded-2xl border p-4 hover:bg-gray-50">
          Calculators (DTI, Payment, Income) — coming soon
        </Link>
        <Link href="/login" className="rounded-2xl border p-4 hover:bg-gray-50">
          Start Pre-Approval / Sign In
        </Link>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border p-4">
          <h3 className="font-semibold mb-1">Conventional</h3>
          <p className="text-sm opacity-80">Fixed/ARM options with as little as 3% down for qualified buyers.</p>
        </div>
        <div className="rounded-2xl border p-4">
          <h3 className="font-semibold mb-1">FHA</h3>
          <p className="text-sm opacity-80">Flexible credit and 3.5% down with mortgage insurance.</p>
        </div>
        <div className="rounded-2xl border p-4">
          <h3 className="font-semibold mb-1">VA</h3>
          <p className="text-sm opacity-80">No-down-payment options for eligible veterans and service members.</p>
        </div>
      </section>
    </main>
  );
}
