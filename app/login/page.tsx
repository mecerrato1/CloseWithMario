'use client';

import { supabaseBrowser } from '@/lib/supabaseClient';
import { useState } from 'react';

export default function LoginPage() {
  const supabase = supabaseBrowser();
  const [loading, setLoading] = useState(false);

  const signInWith = async (provider: 'google' | 'azure') => {
    setLoading(true);
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${location.origin}/auth/callback` }
    });
    setLoading(false);
  };

  const signInEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const email = new FormData(e.currentTarget).get('email') as string;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    });
    setLoading(false);
    alert(error ? `Error: ${error.message}` : 'Check your email for a login link.');
  };

  return (
    <main className="mx-auto max-w-md px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Login</h1>

      <button
        onClick={() => signInWith('google')}
        className="w-full rounded-xl border px-4 py-3"
        disabled={loading}
      >
        Continue with Google
      </button>

      <button
        onClick={() => signInWith('azure')}
        className="w-full rounded-xl border px-4 py-3"
        disabled={loading}
      >
        Continue with Microsoft
      </button>

      <form onSubmit={signInEmail} className="space-y-3">
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border px-4 py-3"
        />
        <button className="w-full rounded-xl bg-black text-white px-4 py-3" disabled={loading}>
          Send magic link
        </button>
      </form>
    </main>
  );
}
