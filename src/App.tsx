/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Keep html root styled appropriately
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-200';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-cyan-600/20 selection:text-cyan-900';
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Header / Navbar adhering to Top Bar Contract */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          isDarkMode={isDarkMode}
        />

        {/* 2. About Me Section */}
        <About isDarkMode={isDarkMode} />

        {/* 3. Work Experience Section */}
        <Experience isDarkMode={isDarkMode} />

        {/* 4. Technical Projects Section */}
        <Projects isDarkMode={isDarkMode} />

        {/* 5. Technical Skills Section */}
        <Skills isDarkMode={isDarkMode} />

        {/* 6. Education & Academic Honors Section */}
        <Education isDarkMode={isDarkMode} />

        {/* 7. Contact Section */}
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        isDarkMode={isDarkMode}
      />

      {/* Printable & ATS Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
