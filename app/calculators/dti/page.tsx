'use client';

import { useEffect, useMemo, useState } from 'react';
import { monthlyPI, loanFromPI, currency } from '@/lib/mortgage';


type Inputs = {
  monthlyIncome: number;   // gross
  monthlyDebts: number;    // min payments (cards, auto, etc.)
  maxDTI: number;          // 0.45 = 45%
  rate: number;            // APR %
  term: number;            // years
  taxes: number;           // monthly
  insurance: number;       // monthly
  hoa: number;             // monthly
};

function readNum(qs: URLSearchParams, key: keyof Inputs, def: number) {
  const v = qs.get(String(key));
  return v ? Number(v) : def;
}

export default function DTICalculator() {
  // --- defaults suitable for South FL sample
  const [inp, setInp] = useState<Inputs>(() => {
    const qs = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    return {
      monthlyIncome: readNum(qs, 'monthlyIncome', 9000),
      monthlyDebts:  readNum(qs, 'monthlyDebts', 600),
      maxDTI:        readNum(qs, 'maxDTI', 0.45),
      rate:          readNum(qs, 'rate', 6.75),
      term:          readNum(qs, 'term', 30),
      taxes:         readNum(qs, 'taxes', 500),
      insurance:     readNum(qs, 'insurance', 200),
      hoa:           readNum(qs, 'hoa', 0),
    };
  });

  // keep URL in sync (shareable)
  useEffect(() => {
    const qs = new URLSearchParams();
    Object.entries(inp).forEach(([k, v]) => qs.set(k, String(v)));
    const url = `${location.pathname}?${qs.toString()}`;
    window.history.replaceState({}, '', url);
  }, [inp]);

  // calculations
  const result = useMemo(() => {
    const allowableTotalDebt = inp.monthlyIncome * inp.maxDTI;     // total debts incl housing
    const allowableHousing = Math.max(0, allowableTotalDebt - inp.monthlyDebts);
    const nonPI = inp.taxes + inp.insurance + inp.hoa;
    const allowablePI = Math.max(0, allowableHousing - nonPI);
    const maxLoan = allowablePI > 0 ? loanFromPI(allowablePI, inp.rate, inp.term) : 0;

    // also compute sample PI from that loan (round-trip)
    const piFromLoan = maxLoan > 0 ? monthlyPI(maxLoan, inp.rate, inp.term) : 0;
    const backEndDTI = (inp.monthlyDebts + nonPI + piFromLoan) / Math.max(inp.monthlyIncome, 1);

    return { allowableTotalDebt, allowableHousing, nonPI, allowablePI, maxLoan, piFromLoan, backEndDTI };
  }, [inp]);

  const setNum = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setInp(prev => ({ ...prev, [key]: Number(e.target.value) }));

  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold">DTI Calculator</h1>
      <p className="opacity-75 text-sm">
        Estimates only. Not a commitment to lend. DTI = (housing + monthly debts) / gross monthly income.
      </p>

      <form className="grid gap-3 md:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-70">Gross monthly income</span>
          <input type="number" value={inp.monthlyIncome} onChange={setNum('monthlyIncome')} className="rounded-xl border px-4 py-3" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-70">Monthly debts (min payments)</span>
          <input type="number" value={inp.monthlyDebts} onChange={setNum('monthlyDebts')} className="rounded-xl border px-4 py-3" />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-70">Max DTI</span>
          <select value={inp.maxDTI} onChange={setNum('maxDTI')} className="rounded-xl border px-4 py-3">
            <option value={0.43}>43%</option>
            <option value={0.45}>45%</option>
            <option value={0.5}>50%</option>
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-70">Rate (APR %)</span>
          <input type="number" step="0.01" value={inp.rate} onChange={setNum('rate')} className="rounded-xl border px-4 py-3" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-70">Term (years)</span>
          <select value={inp.term} onChange={setNum('term')} className="rounded-xl border px-4 py-3">
            <option value={30}>30</option>
            <option value={20}>20</option>
            <option value={15}>15</option>
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-70">Taxes (monthly)</span>
          <input type="number" value={inp.taxes} onChange={setNum('taxes')} className="rounded-xl border px-4 py-3" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-70">Insurance (monthly)</span>
          <input type="number" value={inp.insurance} onChange={setNum('insurance')} className="rounded-xl border px-4 py-3" />
        </label>
        <label className="flex flex-col gap-1 md:col-span-2">
          <span className="text-sm opacity-70">HOA (monthly)</span>
          <input type="number" value={inp.hoa} onChange={setNum('hoa')} className="rounded-xl border px-4 py-3" />
        </label>
      </form>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-4">
          <h3 className="font-semibold mb-2">Allowed by DTI</h3>
          <div className="space-y-1 text-sm">
            <div>Total debt allowed (DTI×income): <b>{currency(result.allowableTotalDebt)}</b></div>
            <div>Max housing budget (incl PITI/HOA): <b>{currency(result.allowableHousing)}</b></div>
            <div>Taxes+Ins+HOA (non-PI): <b>{currency(result.nonPI)}</b></div>
            <div>P&I budget: <b>{currency(result.allowablePI)}</b></div>
          </div>
        </div>

        <div className="rounded-2xl border p-4">
          <h3 className="font-semibold mb-2">Estimated Max Loan</h3>
          <div className="space-y-1 text-sm">
            <div>Max loan amount: <b>{currency(result.maxLoan)}</b></div>
            <div>Estimated P&I from that loan: <b>{currency(result.piFromLoan)}</b></div>
            <div>Back-end DTI with these inputs: <b>{(result.backEndDTI*100).toFixed(1)}%</b></div>
          </div>
        </div>
      </section>

      <p className="text-xs opacity-60">
        Share this scenario: copy the URL — all inputs are encoded in the query string.
      </p>
    </main>
  );
}
