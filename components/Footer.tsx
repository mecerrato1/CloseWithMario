export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 text-center text-sm text-gray-600 md:flex-row md:space-y-0">
          <div>
            © {currentYear} CloseWithMario. All rights reserved.
          </div>
          <div>
            NMLS ID: [License Number Pending]
          </div>
        </div>
      </div>
    </footer>
  );
}
