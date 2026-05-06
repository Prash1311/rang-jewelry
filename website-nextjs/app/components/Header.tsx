'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-rang-dark">
              💎
            </div>
            <div>
              <div className="text-xl font-bold text-rang-dark font-playfair">RANG</div>
              <div className="text-xs text-gold font-lora">The Colours of Tradition</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-rang-dark hover:text-gold transition">Home</Link>
            <Link href="/products" className="text-rang-dark hover:text-gold transition">Collections</Link>
            <Link href="/about" className="text-rang-dark hover:text-gold transition">About</Link>
            <Link href="/contact" className="btn-primary text-sm">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-rang-dark text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <Link href="/" className="block py-2 text-rang-dark hover:text-gold">Home</Link>
            <Link href="/products" className="block py-2 text-rang-dark hover:text-gold">Collections</Link>
            <Link href="/about" className="block py-2 text-rang-dark hover:text-gold">About</Link>
            <Link href="/contact" className="block py-2 btn-primary inline-block mt-2">Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
