"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem("cookie_consent");
    if (!v) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-4 text-sm shadow-lg backdrop-blur dark:border-white/10 dark:bg-neutral-900/95">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <p className="opacity-80">
          We use essential cookies to make this site work. If we enable analytics in the future, we’ll only do so with your consent.
          See our <a className="underline" href="/privacy">Privacy Policy</a>.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => { localStorage.setItem("cookie_consent", "denied"); setVisible(false); }}
            className="rounded-lg border px-3 py-2 dark:border-white/10"
          >
            Decline
          </button>
          <button
            onClick={() => { localStorage.setItem("cookie_consent", "granted"); setVisible(false); }}
            className="rounded-lg bg-blue-600 px-3 py-2 text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
