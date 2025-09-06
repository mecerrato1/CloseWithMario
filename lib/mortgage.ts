/** Monthly P&I payment for a fixed-rate loan */
export function monthlyPI(loanAmount: number, annualRatePct: number, termYears: number) {
  const r = annualRatePct / 100 / 12;              // monthly rate
  const n = termYears * 12;                         // months
  if (r === 0) return loanAmount / n;
  return (loanAmount * r) / (1 - Math.pow(1 + r, -n));
}

/** Invert the mortgage formula: max loan given a monthly P&I budget */
export function loanFromPI(monthlyPIBudget: number, annualRatePct: number, termYears: number) {
  const r = annualRatePct / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return monthlyPIBudget * n;
  return monthlyPIBudget * (1 - Math.pow(1 + r, -n)) / r;
}

export function currency(n: number) {
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}
