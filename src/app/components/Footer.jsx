'use client'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-extrabold tracking-tight text-primary mb-2 block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500">RoomEase</span>
            <span className="text-sm text-secondary">Find your perfect stay, effortlessly.</span>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 md:gap-6 text-sm font-medium">
            <a href="/" className="text-secondary hover:text-primary transition-colors">Home</a>
            <a href="/browse-listing" className="text-secondary hover:text-primary transition-colors">Properties</a>
            <a href="/reviews" className="text-secondary hover:text-primary transition-colors">Reviews</a>
            <a href="/" className="text-secondary hover:text-primary transition-colors">FAQ</a>
            <a href="/login" className="text-secondary hover:text-primary transition-colors">Login</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="https://facebook.com/shihab.dev" aria-label="Facebook" className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
              <FaFacebookF className="w-4 h-4 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/shihab-dev/" aria-label="LinkedIn" className="p-2 rounded-full bg-blue-800 hover:bg-blue-900 transition-colors">
              <FaLinkedin className="w-4 h-4 text-white" />
            </a>
            <a href="https://twitter.com/shihab_dev" aria-label="Twitter" className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors">
              <FaTwitter className="w-4 h-4 text-white" />
            </a>
            <a href="https://www.instagram.com/shihab_dev/" aria-label="Instagram" className="p-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors">
              <FaInstagram className="w-4 h-4 text-white" />
            </a>
            <a href="https://github.com/shihabuddin-dev" aria-label="GitHub" className="p-2 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors">
              <FaGithub className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 text-center py-4 text-xs text-secondary bg-background">
        &copy; {year} <span className="font-bold text-primary">RoomEase</span>. All rights reserved.
      </div>
    </footer>
  );
}