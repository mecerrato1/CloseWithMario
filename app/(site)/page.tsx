import Link from "next/link";
import RateTicker from "@/components/RateTicker";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <RateTicker />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Dream Home Awaits
            </h1>
            <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
              Expert mortgage guidance and personalized service to help you buy
              your home with confidence. Let&apos;s make homeownership a reality.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/buy"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                I&apos;m Buying a Home
              </Link>
              <Link
                href="/mortgage"
                className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                I Need a Mortgage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose CloseWithMario?
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Professional expertise, personalized service, and a commitment to
              your success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Expert Guidance</h3>
              <p className="text-gray-600">Years of experience helping clients navigate the mortgage process with confidence.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Fast Processing</h3>
              <p className="text-gray-600">Streamlined application process to get you pre-approved and ready to buy quickly.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Personal Service</h3>
              <p className="text-gray-600">Dedicated support throughout your home buying journey, from start to close.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
