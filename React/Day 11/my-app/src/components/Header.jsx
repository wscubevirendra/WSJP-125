"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md sticky top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-orange-600">
                    Foodies 🍴
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 items-center">
                    <Link href="/" className="hover:text-orange-500">Home</Link>
                    <Link href="/recipe" className="hover:text-orange-500">Menu</Link>
                    <Link href="/about" className="hover:text-orange-500">About</Link>
                    <Link href="/contact" className="hover:text-orange-500">Contact</Link>

                    {/* CTA */}
                    <Link
                        href="/reserve"
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                        Reserve Table
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-5 pb-5 flex flex-col gap-4">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/recipe" onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

                    <Link
                        href="/reserve"
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Reserve Table
                    </Link>
                </div>
            )}
        </header>
    );
}