"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40} // Set width for the logo
            height={40} // Set height for the logo
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-800">Furniro</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-900">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-gray-900">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Icon Buttons */}
        <div className="flex space-x-4 text-gray-600">
          <FaUser className="w-6 h-6 hover:text-gray-900 cursor-pointer" /> {/* Set width and height for icons */}
          <FaSearch className="w-6 h-6 hover:text-gray-900 cursor-pointer" />
          <FaHeart className="w-6 h-6 hover:text-gray-900 cursor-pointer" />
          <Link href="/cart">
            <FaShoppingCart className="w-6 h-6 hover:text-gray-900 cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-xl text-gray-600 hover:text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md space-y-2 px-6 py-4">
          <Link href="/" className="block text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/shop" className="block text-gray-600 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/blog" className="block text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/contact" className="block text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
