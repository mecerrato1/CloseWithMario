/**
 * LeadForm: client-side capture form for mortgage leads.
 * On success: fires GA event (if gtag present) and redirects to /thank-you.
 * Uses a hidden "company" field as a honeypot (must remain empty).
 */

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type LeadFormProps = {
  /** When true, the form renders with a rounded card border/padding.
   *  Set to false when the parent already provides the card shell. */
  framed?: boolean;
};

export default function LeadForm({ framed = true }: LeadFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      loan_purpose: String(fd.get("loan_purpose") || "preapproval"),
      price: String(fd.get("price") || ""),
      down_payment: String(fd.get("down_payment") || ""),
      credit_score: String(fd.get("credit_score") || ""),
      message: String(fd.get("message") || ""),
      page_path:
        typeof window !== "undefined" ? window.location.pathname : "/mortgage",
      honeypot: String(fd.get("company") || ""), // must be empty (spam trap)
    };

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    setLoading(false);

    if (!res.ok || !json.ok) {
      setErrorMsg("Please check your info and try again.");
      return;
    }

    form.reset();
    router.push("/thank-you");
  }

  const wrapperClasses =
    "space-y-6 " +
    (framed ? "rounded-2xl border p-6 dark:border-white/10" : "");

  return (
    <form onSubmit={onSubmit} className={wrapperClasses}>
      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Full name *</label>
          <input
            name="name"
            required
            className="w-full rounded-lg border p-3 dark:bg-neutral-900 dark:border-white/10"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border p-3 dark:bg-neutral-900 dark:border-white/10"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Phone</label>
          <input
            name="phone"
            className="w-full rounded-lg border p-3 dark:bg-neutral-900 dark:border-white/10"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Loan purpose *</label>
          <select
            name="loan_purpose"
            defaultValue="preapproval"
            required
            className="w-full rounded-lg border p-3 dark:bg-neutral-900 dark:border-white/10"
          >
            <option value="preapproval">Pre-Approval</option>
            <option value="purchase">Purchase</option>
            <option value="refi">Refinance</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Home price (optional)
          </label>
          <input
            name="price"
            inputMode="decimal"
            placeholder="e.g. 550000"
            className="w-full rounded-lg border p-3 dark:bg-neutral-900 dark:border-white/10"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Down payment (optional)
          </label>
          <input
            name="down_payment"
            inputMode="decimal"
            placeholder="e.g. 110000"
            className="w-full rounded-lg border p-3 dark:bg-neutral-900 dark:border-white/10"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Credit score</label>
          <select
            name="credit_score"
            defaultValue=""
            className="w-full rounded-lg border p-3 dark:bg-neutral-900 dark:border-white/10"
          >
            <option value="">Prefer not to say</option>
            <option>720+</option>
            <option>680-719</option>
            <option>640-679</option>
            <option>&lt;640</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Anything else?</label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-lg border p-3 dark:bg-neutral-900 dark:border-white/10"
        />
      </div>

      {errorMsg && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-200">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
