"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error); // log error (can send to Sentry later)
    }, [error]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-gray-50">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-red-500">
                Something went wrong 😢
            </h1>

            {/* Message */}
            <p className="text-gray-600 mt-3 max-w-md">
                We’re having trouble loading this page. Please try again or go back home.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
                <button
                    onClick={() => reset()}
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                >
                    Try Again
                </button>

                <Link
                    href="/"
                    className="border px-6 py-3 rounded-lg hover:bg-gray-200 transition"
                >
                    Go Home
                </Link>
            </div>
        </section>
    );
}