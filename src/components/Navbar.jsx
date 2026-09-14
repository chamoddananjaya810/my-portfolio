import { useState } from 'react';

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
    <nav className="fixed top-0 left-0 right-0 z-50 w-full mx-auto text-white border-b border-gray-800 bg-gray-950/80 backdrop-blur-md max-w-7xl">
      {/* Navbar එකටත් max-w-7xl සහ mx-auto දී යට කොටස් සමඟ සමාන කළෙමු */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="text-indigo-400">Chamod</span>.dev
          </a>

          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="relative text-sm font-medium text-gray-300 transition hover:text-white group">
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 transition md:hidden hover:text-white"
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
          <div className="flex flex-col pt-4 pb-4 space-y-3 border-t border-gray-800 md:hidden">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-medium text-center text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}