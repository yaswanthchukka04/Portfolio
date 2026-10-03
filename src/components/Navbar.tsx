import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface NavbarProps {
  onOpenResume: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, isDarkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 150) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        isScrolled
          ? isDarkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Single wordmark), Zone 2 (4-6 nav links), Zone 3 (1-2 actions) */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
              isDarkMode ? 'text-white hover:text-cyan-400' : 'text-slate-900 hover:text-cyan-600'
            }`}
          >
            {resumeData.name}
          </a>

          {/* Zone 2: 4-6 text navigation links with subtle underline/highlight */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  activeSection === link.id
                    ? isDarkMode
                      ? 'text-cyan-400 font-semibold'
                      : 'text-cyan-600 font-semibold'
                    : isDarkMode
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle color theme"
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? 'border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900'
                  : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-sm shadow-cyan-500/20 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? 'border-slate-800 text-slate-300 hover:bg-slate-900'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? 'border-slate-800 text-slate-200 hover:bg-slate-900'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-5 py-4 space-y-3 transition-colors ${
            isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? isDarkMode
                      ? 'text-cyan-400 font-semibold'
                      : 'text-cyan-600 font-semibold'
                    : isDarkMode
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
