
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-gray-50">
      
      {/* 404 Text */}
      <h1 className="text-6xl md:text-8xl font-bold text-orange-500">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found 😔
      </h2>

      <p className="text-gray-600 mt-3 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
}