import React, { useContext, useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { store } from "../context/Context";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useContext(store);
    

    return (
        <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide">
                    <span className="text-blue-600">Shop</span>
                    <span className="text-gray-800">Easy</span>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                    <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link to="/shop" className="hover:text-blue-600 transition">Shop</Link>
                    <Link to="/about" className="hover:text-blue-600 transition">About</Link>
                    <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* Cart */}
                    <Link to="/cart">
                        <div className="relative cursor-pointer group">
                            <FaShoppingCart size={22} className="text-gray-700 group-hover:text-blue-600 transition" />
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                                {cart.length}
                            </span>
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden cursor-pointer">
                        {menuOpen ? (
                            <FaTimes size={22} onClick={() => setMenuOpen(false)} />
                        ) : (
                            <FaBars size={22} onClick={() => setMenuOpen(true)} />
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white border-t transition-all duration-300 ${menuOpen ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
                    }`}
            >
                <div className="flex flex-col px-4 gap-4 text-gray-700 font-medium">
                    <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="/shop" onClick={() => setMenuOpen(false)}>Shop</a>
                    <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>

                    <div className="flex items-center gap-2 pt-2 border-t">
                        <FaShoppingCart />
                        <span>Cart (2)</span>
                    </div>
                </div>
            </div>
        </header>
    );
}