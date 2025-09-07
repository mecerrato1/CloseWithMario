// app/legacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy Site | Close With Mario",
  description: "Embedded legacy website displayed under the main header.",
};

export default function LegacyEmbedPage() {
  // If you want to embed another URL, change SRC below.
  const SRC = "https://closewithmario.com";

  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold">Dream Home Search</h1>

      <div className="overflow-hidden rounded-2xl border dark:border-white/10">
        {/* Full viewport height minus some space for header/footer */}
        <iframe
          src={SRC}
          title="Embedded Site"
          className="h-[calc(100vh-180px)] w-full"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="mt-3 text-sm opacity-70">
        If the site doesn’t load here,{" "}
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
