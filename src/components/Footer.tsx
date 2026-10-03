import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface FooterProps {
  onOpenResume: () => void;
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors no-print ${
        isDarkMode ? 'border-slate-900 bg-slate-950 text-slate-400' : 'border-slate-200 bg-white text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#"
              className={`text-xl font-bold tracking-tight inline-block ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {resumeData.name}
            </a>
            
            <p className="text-xs sm:text-sm max-w-md leading-relaxed">
              {resumeData.title} · Satya Institute of Technology and Management, Vizianagaram.
              Specializing in Generative AI, data analytics, and modern full-stack web applications.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isDarkMode
                    ? 'border-slate-800 hover:bg-slate-900 text-slate-300 hover:text-white'
                    : 'border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-900'
                }`}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isDarkMode
                    ? 'border-slate-800 hover:bg-slate-900 text-slate-300 hover:text-white'
                    : 'border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-900'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>

              <a
                href={`mailto:${resumeData.email}`}
                className={`p-2 rounded-lg border transition-colors ${
                  isDarkMode
                    ? 'border-slate-800 hover:bg-slate-900 text-slate-300 hover:text-white'
                    : 'border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-900'
                }`}
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs sm:text-sm">
            <div className={`font-semibold uppercase tracking-wider text-[11px] mb-3 ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Work Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">Education & Honors</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Actions & Scroll to top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View & Print Resume</span>
            </button>

            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                isDarkMode
                  ? 'border-slate-800 hover:bg-slate-900 text-slate-300'
                  : 'border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Chukka Yaswanth. All rights reserved.
          </div>
          <div className="text-slate-500">
            Strictly built with verified resume credentials.
          </div>
        </div>
      </div>
    </footer>
  );
};
