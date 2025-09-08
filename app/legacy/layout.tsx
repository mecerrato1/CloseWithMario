import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy",
  robots: { index: false, follow: false },
};

export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
