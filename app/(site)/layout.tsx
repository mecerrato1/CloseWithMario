import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Schema from './Schema';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Schema />
    </>
  );
}
