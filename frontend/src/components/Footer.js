import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-purple-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Brotherhood</h3>
            <p className="text-gray-400">
              A community united in purpose and values, dedicated to growth and mutual support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
              <li><Link to="/members" className="hover:text-purple-400">Members</Link></li>
              <li><Link to="/blog" className="hover:text-purple-400">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/gallery" className="hover:text-purple-400">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400">Contact Us</Link></li>
              <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <span className="text-2xl">f</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <span className="text-2xl">𝕏</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <span className="text-2xl">📷</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Brotherhood of Shadows. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
