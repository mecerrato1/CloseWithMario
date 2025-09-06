import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DTI Calculator',
  description:
    'Estimate max housing payment and loan amount from income, debts, rate, and term.',
};

export default function DTILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
