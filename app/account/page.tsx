'use client';

import { useEffect, useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseClient';

type Profile = { full_name: string | null; roles: string[] };

export default function AccountPage() {
  const supabase = supabaseBrowser();
  const [loading, setLoading] = useState(true);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [buyer, setBuyer] = useState(true);
  const [borrower, setBorrower] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSessionEmail(session?.user?.email ?? null);

      if (!session) { setLoading(false); return; }

      const { data } = await supabase
        .from('profiles')
        .select('full_name, roles')
        .eq('id', session.user.id)
        .single();

      if (data) {
        setProfile(data);
        setBuyer(data.roles?.includes('buyer'));
        setBorrower(data.roles?.includes('borrower'));
      }
      setLoading(false);
    })();
  }, []);

  const save = async () => {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { setLoading(false); return; }
    const roles: string[] = [];
    if (buyer) roles.push('buyer');
    if (borrower) roles.push('borrower');

    await supabase
      .from('profiles')
      .upsert({ id: session.user.id, roles, full_name: profile?.full_name ?? null });

    setLoading(false);
    alert('Saved.');
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    location.href = '/';
  };

  if (loading) return <main className="mx-auto max-w-md px-6 py-12">Loading…</main>;

  if (!sessionEmail) {
    return (
      <main className="mx-auto max-w-md px-6 py-12 space-y-4">
        <h1 className="text-2xl font-bold">Account</h1>
        <p className="opacity-80">You’re not logged in.</p>
        <a className="rounded-xl border px-4 py-2 inline-block" href="/login">Go to Login</a>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-md px-6 py-12 space-y-6">
      <h1 className="text-2xl font-bold">Account</h1>
      <div className="text-sm opacity-80">Signed in as <b>{sessionEmail}</b></div>

      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={buyer} onChange={e => setBuyer(e.target.checked)} />
          Buyer
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={borrower} onChange={e => setBorrower(e.target.checked)} />
          Borrower
        </label>
        <button onClick={save} className="rounded-xl bg-black text-white px-4 py-2">Save roles</button>
      </div>

      <button onClick={signOut} className="rounded-xl border px-4 py-2">Sign out</button>
    </main>
  );
}
