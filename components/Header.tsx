"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              CloseWithMario
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/buy"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Buy
            </Link>
            <Link
              href="/mortgage"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Mortgage
            </Link>
            <Link
              href="/rates"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Rates
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/buy"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                Buy
              </Link>
              <Link
                href="/mortgage"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                Mortgage
              </Link>
              <Link
                href="/rates"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                Rates
              </Link>
              <Link
                href="/login"
                className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-center text-white transition-colors hover:bg-blue-700"
              >
                Login
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
