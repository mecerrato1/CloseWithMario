// app/apply/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Mortgage | Close With Mario",
  description: "Start your mortgage application with Mario at loanDepot.",
};

export default function ApplyPage() {
  const SRC = "https://www.loandepot.com/loan-officers/mcerrato";

  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold">Apply for Mortgage</h1>

      <div className="overflow-hidden rounded-2xl border dark:border-white/10">
        {/* Full viewport height minus header/footer */}
        <iframe
          src={SRC}
          title="loanDepot Application"
          className="h-[calc(100vh-180px)] w-full"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="mt-3 text-sm opacity-70">
        If the application doesn’t load here,{" "}
        <a
          href={SRC}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          open it in a new tab
        </a>
        .
      </p>
    </main>
  );
}
