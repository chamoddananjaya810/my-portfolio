import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-950/80 backdrop-blur-md text-white fixed w-full max-w-7xl mx-auto left-0 right-0 top-0 z-50 border-b border-gray-800">
      {/* Navbar එකටත් max-w-7xl සහ mx-auto දී යට කොටස් සමඟ සමාන කළෙමු */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="text-indigo-400">Chamod</span>.dev
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="relative text-sm font-medium text-gray-300 hover:text-white transition group">
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col space-y-3 border-t border-gray-800 pt-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition text-sm font-medium">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition text-center">
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}