import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Foodies 🍴
          </h2>
          <p className="text-sm">
            Serving delicious food with love. Experience the taste of
            quality and freshness in every bite.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/menu" className="hover:text-orange-500">Menu</Link></li>
            <li><Link href="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-white font-semibold mb-3">Opening Hours</h3>
          <ul className="text-sm space-y-2">
            <li>Mon - Fri: 10:00 AM - 10:00 PM</li>
            <li>Sat - Sun: 12:00 PM - 11:00 PM</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Hingona, Rajasthan</li>
            <li>📞 +91 9876543210</li>
            <li>✉️ foodies@gmail.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Foodies. All rights reserved.
      </div>
    </footer>
  );
}