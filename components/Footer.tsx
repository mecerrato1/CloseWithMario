export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 text-center text-sm text-gray-600 md:flex-row md:space-y-0">
          <div>© {currentYear} CloseWithMario. All rights reserved.</div>

          <div className="flex items-center gap-3">
            <a href="/privacy" className="hover:underline">Privacy</a>
            <span aria-hidden>•</span>
            <a href="/terms" className="hover:underline">Terms</a>
          </div>

          <div className="text-gray-600">
            NMLS ID: 93260 &nbsp;·&nbsp; Realtor ID: 3245079
          </div>
        </div>
      </div>
    </footer>
  );
}
