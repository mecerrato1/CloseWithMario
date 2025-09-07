'use client';

import Image from "next/image";
import Link from "next/link";
import RateTicker from "@/components/RateTicker";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-white">
      {/* rate ticker at very top */}
      <RateTicker />

      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Close With Mario — Real Estate & Mortgage, Together
            </h1>
            <p className="mt-3 text-lg opacity-80">
              One trusted guide for buying, selling, and financing across South Florida.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Column 1 — Buying or Selling */}
            <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Buying or Selling</h2>
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Real Estate</span>
              </div>

              <div className="mb-5 overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600">
                  <Image src="/buy.jpg" alt="South Florida homes" fill className="object-cover" priority />
                </div>
              </div>

              <p className="mb-5 opacity-80">
                Search homes, schedule tours, list your property, and negotiate with confidence.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/buy"
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Search Homes
                </Link>
                <Link
                  href="/mortgage"
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-blue-600 px-4 py-3 font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30"
                >
                  List / Sell
                </Link>
              </div>
            </div>

            {/* Column 2 — Mario + Video */}
            <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="mb-4 text-center">
                <h2 className="text-2xl font-semibold">Mario Cerrato</h2>
                <p className="text-sm opacity-70">Realtor & Mortgage Advisor • South Florida</p>
              </div>

              {/* WHITE background portrait */}
              <div className="mx-auto mb-5 w-full max-w-xs overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/5] rounded-2xl bg-white ring-1 ring-black/10 dark:ring-white/10">
                  <Image src="/mario.png" alt="Mario Cerrato" fill className="object-contain p-3" priority />
                </div>
              </div>

              <div className="mb-5 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
                <div className="relative aspect-video bg-[url('/video-thumb.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      ▶ Watch Intro
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-center text-sm opacity-80">
                I can handle both sides of your transaction — agent & financing — for a smoother close.
              </p>
            </div>

            {/* Column 3 — Need Financing */}
            <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Need Financing</h2>
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">Mortgage</span>
              </div>

              <div className="mb-5 overflow-hidden rounded-2xl">
                <div className="relative aspect-[9/16] rounded-2xl bg-white flex items-center justify-center p-4">
                  <Image src="/finance.png" alt="Mortgage financing" fill className="object-contain" />
                </div>
              </div>

              <p className="mb-5 opacity-80">
                Get pre-approved, check rates, and compare programs (Conventional, FHA, VA).
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Route to embedded application page (/apply) */}
                <Link
                  href="/apply"
                  prefetch={false}
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  Get Pre-Approved
                </Link>

                <Link
                  href="/calculators/dti"
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-emerald-600 px-4 py-3 font-semibold text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
                >
                  Try DTI Calc
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 text-sm opacity-80 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 p-4 text-center dark:border-white/10">South Florida specialist</div>
            <div className="rounded-2xl border border-black/10 p-4 text-center dark:border-white/10">Transparent rates & fees</div>
            <div className="rounded-2xl border border-black/10 p-4 text-center dark:border-white/10">Close smoothly — one point of contact</div>
          </div>
        </div>
      </section>
    </div>
  );
}
