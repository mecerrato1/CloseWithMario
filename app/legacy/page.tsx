import type { Metadata } from "next";
import { LEGACY_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Find Your Dream Home | Close With Mario",
  description: "Embedded home search displayed under the main header.",
  robots: { index: false, follow: false },
};

export default function LegacyEmbedPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold">Find Your Dream Home</h1>

      <div className="overflow-hidden rounded-2xl border dark:border-white/10">
        <iframe
          src={LEGACY_URL}
          title="Embedded Home Search"
          className="h-[calc(100vh-180px)] w-full"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="mt-3 text-sm opacity-70">
        If the site doesn’t load here,{" "}
        <a
          href={LEGACY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          open it in a new tab
        </a>
        .
      </p>
    </main>
  );
}
