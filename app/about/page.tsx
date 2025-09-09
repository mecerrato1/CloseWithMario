// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Close With Mario",
  description:
    "Learn about Mario Cerrato and Close With Mario — a single, trusted guide for both real estate and mortgage across South Florida.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* Hero */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About Mario Cerrato & Close With Mario
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg opacity-80">
          One trusted guide for buying, selling, and financing across South
          Florida. Real estate and mortgage, together — so you can close
          confidently.
        </p>
      </header>

      {/* Intro grid */}
      <section className="mb-12 grid gap-8 md:grid-cols-[360px,1fr]">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
          <div className="relative aspect-[4/5] bg-white">
            <Image
              src="/mario.png"
              alt="Mario Cerrato"
              fill
              priority
              className="object-contain p-4"
            />
          </div>
        </div>

        <div className="space-y-5">
          <p className="leading-relaxed opacity-90">
            Hi, I’m <strong>Mario Cerrato</strong> — a South Florida based{" "}
            <strong>Realtor® & Mortgage Advisor</strong>. I help homebuyers and
            sellers streamline the entire transaction by handling both the real
            estate and the financing under one, coordinated plan. Fewer
            hand-offs, clearer communication, and a smoother close.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border p-4 dark:border-white/10">
              <h3 className="mb-1 font-semibold">Credentials</h3>
              <ul className="space-y-1 text-sm opacity-90">
                <li>Mortgage Loan Originator — NMLS ID <strong>93260</strong></li>
                <li>Realtor® — ID <strong>3245079</strong></li>
                <li>Serving South Florida</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4 dark:border-white/10">
              <h3 className="mb-1 font-semibold">What I Value</h3>
              <ul className="space-y-1 text-sm opacity-90">
                <li>One point of contact from offer to closing</li>
                <li>Transparent rates & fees</li>
                <li>Clear, proactive communication</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border p-4 dark:border-white/10">
            <h3 className="mb-1 font-semibold">How I can help</h3>
            <ul className="list-disc pl-5 text-sm opacity-90">
              <li>Home buying & listing strategy, touring, and negotiations</li>
              <li>Mortgage pre-approvals and program selection (Conventional, FHA, VA)</li>
              <li>
                Tools & calculators like the{" "}
                <Link href="/calculators/dti" className="text-blue-600 hover:underline">
                  DTI Calculator
                </Link>{" "}
                to plan budget with confidence
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-5 text-center dark:border-white/10">
          <h4 className="mb-2 font-semibold">Call or Text</h4>
          <a href="tel:13052192799" className="text-lg font-medium text-blue-600 hover:underline">
            (305) 219-2799
          </a>
        </div>
        <div className="rounded-2xl border p-5 text-center dark:border-white/10">
          <h4 className="mb-2 font-semibold">Email</h4>
          <a
            href="mailto:mc@closewithmario.com"
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            mc@closewithmario.com
          </a>
        </div>
        <div className="rounded-2xl border p-5 text-center dark:border-white/10">
          <h4 className="mb-2 font-semibold">Fastest Next Step</h4>
          <div className="flex flex-col gap-2">
            <Link
              href="/mortgage"
              className="rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Get Pre-Approved
            </Link>
            <Link
              href="/buy"
              className="rounded-xl border px-4 py-3 font-semibold hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5"
            >
              Search Homes
            </Link>
          </div>
        </div>
      </section>

      {/* Tech transparency */}
      <section className="rounded-2xl border p-5 text-sm opacity-80 dark:border-white/10">
        <h3 className="mb-2 font-semibold">About this website</h3>
        <p>
          Built with Next.js, hosted on Vercel, and secured with Supabase
          Authentication. Rate data is sourced via FRED/OBMMI where noted; tools
          include a DTI calculator and a simple pre-approval form to help you
          plan your purchase.
        </p>
      </section>
    </main>
  );
}
