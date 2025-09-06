import { redirect } from 'next/navigation';
import { supabaseServer } from '@/lib/supabaseServer';
import AccountClient from './AccountClient';

export default async function AccountPage() {
  const supabase = supabaseServer();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return <AccountClient />;
}
