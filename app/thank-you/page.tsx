import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Close With Mario",
  description: "We received your request. Mario will follow up shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="mb-3 text-3xl font-bold">Thanks — we got it!</h1>
      <p className="mx-auto mb-8 max-w-prose opacity-80">
        Your information was submitted successfully. I’ll reach out soon to help
        with your pre-approval or any questions you have.
      </p>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/mortgage"
          className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Back to Mortgage Hub
        </Link>
        <Link
          href="/"
          className="rounded-lg border px-5 py-3 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5"
        >
          Go Home
        </Link>
      </div>

      <p className="mt-10 text-sm opacity-70">
        If you need anything right away, email{" "}
        <a className="underline" href="mailto:mario@closewithmario.com">
          mario@closewithmario.com
        </a>.
      </p>
    </main>
  );
}
