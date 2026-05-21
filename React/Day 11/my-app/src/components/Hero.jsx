import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full bg-amber-400 h-screen flex items-center justify-center text-center">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/hero.jpg" // put your image in public folder
                    alt="Restaurant"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl px-5 text-white">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    स्वाद जो दिल में बस जाए 🍽️
                </h1>

                <p className="mt-4 text-lg md:text-xl text-gray-200">
                    Experience the best food in town with fresh ingredients,
                    authentic taste, and fast service.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/menu"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Explore Menu
                    </Link>

                    <Link
                        href="/reserve"
                        className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
                    >
                        Reserve Table
                    </Link>
                </div>
            </div>
        </section>
    );
}