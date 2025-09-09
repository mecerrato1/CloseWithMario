import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-8 text-sm opacity-70">Last updated: {new Date().toLocaleDateString("en-US")}</p>

      <section className="space-y-4">
        <p>
          This Privacy Policy explains how Close With Mario (“we”, “us”, “our”) collects, uses, and shares information
          when you visit our website or use our services.
        </p>

        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact details you provide (name, email, phone).</li>
          <li>Mortgage-related details you submit in forms (price, down payment, loan purpose, credit range).</li>
          <li>Authentication data if you sign in (via Google or email magic link) managed by Supabase.</li>
          <li>Technical data: IP address, device/browser info, pages visited (if/when analytics is enabled).</li>
        </ul>

        <h2 className="text-xl font-semibold">How We Use Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to inquiries and provide mortgage/real estate services.</li>
          <li>Pre-qualification and lead follow-up when you submit forms.</li>
          <li>Improve our website and user experience.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold">Sharing & Service Providers</h2>
        <p>
          We don’t sell your personal information. We rely on trusted processors to operate this site and services,
          including hosting and authentication. Examples:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Vercel (website hosting)</li>
          <li>Supabase (authentication, database)</li>
          <li>Google (OAuth sign-in)</li>
          <li>Data sources for rates (e.g., FRED) for display only</li>
        </ul>

        <h2 className="text-xl font-semibold">Cookies & Analytics</h2>
        <p>
          We may use cookies for essential functionality (e.g., login). If we enable analytics or marketing cookies,
          we’ll ask for your consent where required and provide an option to change your preference.
        </p>

        <h2 className="text-xl font-semibold">Your Choices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You may request access, correction, or deletion of your information.</li>
          <li>You can opt out of non-essential cookies if/when they’re used.</li>
        </ul>

        <h2 className="text-xl font-semibold">Data Security & Retention</h2>
        <p>We use reasonable measures to protect your data and retain it only as long as needed for the purposes above.</p>

        <h2 className="text-xl font-semibold">Children’s Privacy</h2>
        <p>Our services are not directed to children under 13.</p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Questions? Email <a className="underline" href="mailto:mario@closewithmario.com">mario@closewithmario.com</a>.
          NMLS ID: 93260 · Realtor ID: 3245079.
        </p>

        <p className="mt-6 text-sm opacity-70">
          This page is provided for transparency and does not constitute legal advice. Consider consulting counsel for
          your specific compliance needs.
        </p>
      </section>
    </main>
  );
}
