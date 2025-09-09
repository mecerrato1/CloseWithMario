"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabaseClient";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const supabase = supabaseBrowser();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserEmail(session?.user?.email ?? null);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      setUserEmail(session?.user?.email ?? null);
    });
    return () => subscription.unsubscribe();
  }, [supabase]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUserEmail(null);
    window.location.href = "/";
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-neutral-950/80 dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Brand (logo) */}
          <div className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Close With Mario — Home"
            >
              {/* The pill only shows in dark mode */}
              <div className="inline-flex items-center dark:rounded-md dark:bg-white/90 dark:px-2 dark:py-1">
                <Image
                  src="/closewithmariologo.png"
                  alt="Close With Mario"
                  width={331}
                  height={75}
                  className="h-10 w-auto object-contain md:h-12"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              href="/buy"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Buy
            </Link>
            <Link
              href="/mortgage"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Mortgage
            </Link>
            <Link
              href="/rates"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Rates
            </Link>
            <Link
              href="/about"
              className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href="/legacy"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Find your Dream Home
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/apply"
                className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
              >
                Apply for Mortgage
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Auth status */}
            {userEmail ? (
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  {userEmail}
                </span>
                <Link
                  href="/account"
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-blue-400"
                >
                  Account
                </Link>
                <button
                  onClick={handleSignOut}
                  className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Right side (mobile): Legacy pill + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/legacy"
              className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:border-white/10 dark:hover:bg-white/5"
            >
              Find your Dream Home
            </Link>

            <button
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (dropdown) */}
        {isMenuOpen && (
          <nav className="border-t border-gray-100 py-4 md:hidden dark:border-white/10">
            <div className="flex flex-col space-y-3">
              <Link
                href="/buy"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Buy
              </Link>
              <Link
                href="/mortgage"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Mortgage
              </Link>
              <Link
                href="/rates"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Rates
              </Link>
              <Link
                href="/about"
                className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                About
              </Link>
              <Link
                href="/legacy"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Find your Dream Home
              </Link>
              <Link
                href="/apply"
                className="inline-block rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-700"
              >
                Apply for Mortgage
              </Link>

              {/* Theme Toggle (mobile) */}
              <div className="px-4">
                <ThemeToggle />
              </div>

              {/* Auth status (mobile) */}
              {userEmail ? (
                <>
                  <Link
                    href="/account"
                    className="rounded-lg border border-gray-200 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-blue-400"
                  >
                    Account
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
