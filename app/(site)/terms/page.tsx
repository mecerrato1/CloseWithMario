import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The rules and conditions for using this website.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold">Terms of Service</h1>
      <p className="mb-8 text-sm opacity-70">Last updated: {new Date().toLocaleDateString("en-US")}</p>

      <section className="space-y-4">
        <p>
          By using this website, you agree to these Terms. If you do not agree, please do not use the site.
        </p>

        <h2 className="text-xl font-semibold">Use of the Site</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the site for lawful purposes and do not attempt to disrupt its operation.</li>
          <li>Do not submit information you aren’t authorized to share.</li>
        </ul>

        <h2 className="text-xl font-semibold">No Financial or Legal Advice</h2>
        <p>
          Content is for informational purposes only and does not constitute financial, legal, or tax advice.
          Mortgage scenarios and rates are estimates and subject to change and qualification.
        </p>

        <h2 className="text-xl font-semibold">Third-Party Services</h2>
        <p>
          We may link to or embed third-party services (e.g., listings search, application portals). Their terms and
          privacy policies apply to your use of those services.
        </p>

        <h2 className="text-xl font-semibold">Disclaimers & Liability</h2>
        <p>
          The site is provided “as is” without warranties of any kind. To the maximum extent permitted by law, we
          disclaim liability for any indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-xl font-semibold">Changes</h2>
        <p>We may update these Terms from time to time. Updates become effective when posted here.</p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Questions? Email <a className="underline" href="mailto:mario@closewithmario.com">mario@closewithmario.com</a>.
        </p>

        <p className="mt-6 text-sm opacity-70">
          This page is provided for general informational purposes and does not constitute legal advice.
        </p>
      </section>
    </main>
  );
}
