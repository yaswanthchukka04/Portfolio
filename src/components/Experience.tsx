import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ExperienceProps {
  isDarkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const exp = resumeData.experience[0];

  return (
    <section
      id="experience"
      className={`py-16 md:py-24 border-t transition-colors ${
        isDarkMode ? 'border-slate-900 bg-slate-950/60' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 block">
            Work Experience
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Professional Experience
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Practical industry exposure working on Generative AI systems, prompt-based architectures, and machine learning models.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl">
          <div
            className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/40 ${
              isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800/60">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {exp.role}
                  </h3>
                  <span className="text-cyan-400 font-medium text-sm">@ {exp.company}</span>
                </div>
                
                {/* Unboxed Metadata with Typographic Separator */}
                <div className={`flex flex-wrap items-center gap-2 text-xs sm:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Pixel Wind Technologies</span>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>2026 – 2026</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <span>Duration: {exp.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 font-medium">
                  Generative AI & ML
                </span>
              </div>
            </div>

            {/* Description from resume */}
            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {exp.description}
            </p>

            {/* Key Deliverables & Learnings */}
            <div className="mb-6 space-y-3">
              <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Key Contributions & Technical Exposure
              </h4>
              
              <div className="space-y-2.5">
                {exp.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies used during the tenure */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Technologies & Environment
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-md border text-xs font-mono ${
                      isDarkMode
                        ? 'bg-slate-950/70 border-slate-800 text-slate-300'
                        : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
