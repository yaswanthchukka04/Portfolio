import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  isDarkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'interview' | 'career'>('all');

  const filteredProjects = resumeData.projects.filter((p) => {
    if (filter === 'interview') return p.id === 'interviewgpt';
    if (filter === 'career') return p.id === 'careerpilot-ai';
    return true;
  });

  return (
    <section
      id="projects"
      className={`py-16 md:py-24 border-t transition-colors ${
        isDarkMode ? 'border-slate-900 bg-slate-950' : 'border-slate-200 bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 block">
              Featured Work
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Technical Projects
            </h2>
            <p
              className={`text-base leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Real-world software systems and AI platforms built with modern architectures, FastAPI, React, and PostgreSQL.
            </p>
          </div>

          {/* Interactive filter tabs (Zero-Pill exception: functional button segmented controls) */}
          <div
            className={`inline-flex items-center p-1 rounded-xl border shrink-0 ${
              isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects ({resumeData.projects.length})
            </button>

            <button
              onClick={() => setFilter('interview')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'interview'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              InterviewGPT
            </button>

            <button
              onClick={() => setFilter('career')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'career'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              CareerPilot AI
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-cyan-500/50 ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 shadow-lg shadow-black/40'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              {/* Media image container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 right-3">
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-white/10 text-cyan-300 font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="mb-3">
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-cyan-400">
                    {project.subtitle}
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                {/* Key features from resume */}
                <div className="mb-5 space-y-2">
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Key Capabilities
                  </span>
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mt-auto pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action footer */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                      isDarkMode
                        ? 'border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-700'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-black hover:border-slate-300'
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional related project footnote from resume: PrepBuddy */}
        <div
          className={`p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            isDarkMode ? 'bg-slate-900/40 border-slate-800/80 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
          }`}
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Related Project Mention
            </div>
            <div className="text-sm font-bold mt-0.5">PrepBuddy · AI Aptitude & Interview Companion</div>
            <div className="text-xs text-slate-400 mt-0.5">
              Extending automated career prep and mock interviews for technical undergraduates.
            </div>
          </div>

          <a
            href={resumeData.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Check yaswanthchukka on GitHub</span>
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};
