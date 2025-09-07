import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function MortgagePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Mortgage Hub</h1>
        <p className="opacity-80">
          Get pre-approved, compare scenarios, and explore calculators.
        </p>
      </header>

      {/* Two columns: Left = Lead Form, Right = Calculators + Programs */}
      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Left card: heading + form */}
        <section className="rounded-2xl border p-6 dark:border-white/10">
          <h2 className="mb-3 text-xl font-semibold">Get Pre-Approved</h2>
          <LeadForm framed={false} />
        </section>

        {/* Right card: calculators + program tiles */}
        <section className="rounded-2xl border p-6 space-y-6 dark:border-white/10">
          <div>
            <h2 className="mb-3 text-xl font-semibold">Calculators</h2>
            <div className="grid gap-3">
              <Link
                href="/calculators/dti"
                className="rounded-lg border p-3 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5"
              >
                DTI Calculator
              </Link>
              <Link
                href="/calculators"
                className="rounded-lg border p-3 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5"
              >
                More Calculators (Payment, Affordability) — coming soon
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-4 dark:border-white/10">
              <h3 className="mb-1 font-semibold">Conventional</h3>
              <p className="text-sm opacity-80">
                Fixed/ARM options with as little as 3% down for qualified buyers.
              </p>
            </div>
            <div className="rounded-2xl border p-4 dark:border-white/10">
              <h3 className="mb-1 font-semibold">FHA</h3>
              <p className="text-sm opacity-80">
                Flexible credit and 3.5% down with mortgage insurance.
              </p>
            </div>
            <div className="rounded-2xl border p-4 dark:border-white/10">
              <h3 className="mb-1 font-semibold">VA</h3>
              <p className="text-sm opacity-80">
                No-down-payment options for eligible veterans and service members.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
