import Link from "next/link";

export default function Calculators() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Calculators</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li><Link href="/calculators/dti" className="underline">DTI (Debt-to-Income) Calculator</Link></li>
        <li>Monthly Payment / PITI — coming soon</li>
        <li>Income Qualifier — coming soon</li>
      </ul>
      <p className="opacity-70 text-sm">Estimates only; not a commitment to lend.</p>
    </main>
  );
}
