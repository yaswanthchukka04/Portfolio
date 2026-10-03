import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Database, Layout } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDarkMode }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto no-print"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden z-10 my-8 transition-all ${
          isDarkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Project Case Study
            </span>
            <h3 id="modal-title" className="text-xl font-bold">
              {project.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className={`p-2 rounded-lg border transition-colors ${
              isDarkMode
                ? 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white'
                : 'border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Project Preview Image */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-xs text-white">
              <span className="font-semibold">{project.subtitle}</span>
            </div>
          </div>

          {/* Full description */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Overview & Problem Statement
            </h4>
            <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {project.description}
            </p>
          </div>

          {/* Key Features from Resume */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              Key Architecture & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border flex items-start gap-2.5 text-xs sm:text-sm ${
                    isDarkMode
                      ? 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-xs font-mono rounded-md border ${
                    isDarkMode
                      ? 'bg-slate-950 border-slate-800 text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t ${
            isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="text-xs text-slate-400">
            Source repository on Chukka Yaswanth's GitHub
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
