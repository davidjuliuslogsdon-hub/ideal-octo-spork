import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b-2 border-purple-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-purple-500">🛡️ Brotherhood of Shadows</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-purple-400 transition">Home</Link>
            <Link to="/about" className="hover:text-purple-400 transition">About</Link>
            <Link to="/members" className="hover:text-purple-400 transition">Members</Link>
            <Link to="/gallery" className="hover:text-purple-400 transition">Gallery</Link>
            <Link to="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block hover:text-purple-400">Home</Link>
            <Link to="/about" className="block hover:text-purple-400">About</Link>
            <Link to="/members" className="block hover:text-purple-400">Members</Link>
            <Link to="/gallery" className="block hover:text-purple-400">Gallery</Link>
            <Link to="/blog" className="block hover:text-purple-400">Blog</Link>
            <Link to="/contact" className="block hover:text-purple-400">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
