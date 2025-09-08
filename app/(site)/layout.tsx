// app/(site)/layout.tsx
import type { Metadata } from "next";
import Schema from "./Schema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  title: {
    default: "Close With Mario",
    template: "%s | Close With Mario",
  },
  description: "Real estate & mortgage together — serving South Florida.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured data */}
      <Schema />
      <LocalBusinessSchema />
      {children}
    </>
  );
}
