import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface EducationProps {
  isDarkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  return (
    <section
      id="education"
      className={`py-16 md:py-24 border-t transition-colors ${
        isDarkMode ? 'border-slate-900 bg-slate-950' : 'border-slate-200 bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 block">
            Academic Background
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Education & Academic Honors
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Formal degree coursework and foundational schooling with a strong analytical and quantitative track record.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10 mb-16">
          {resumeData.education.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 group-hover:scale-125 transition-transform" />

              <div
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.degree}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400">
                      {item.institution}
                    </div>
                  </div>

                  {/* Clean unboxed score presentation */}
                  <div className="flex flex-col items-start sm:items-end">
                    <span className="text-base sm:text-lg font-bold font-mono text-cyan-400 tabular-nums">
                      {item.score}
                    </span>
                    {item.scoreDetail && (
                      <span className="text-xs text-slate-400">
                        {item.scoreDetail}
                      </span>
                    )}
                  </div>
                </div>

                {/* Unboxed Metadata with Typographic Separator */}
                <div className={`flex flex-wrap items-center gap-2 text-xs mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/40">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements & Milestones (Section 7 as per resume data) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-cyan-400" />
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Academic Achievements & Key Highlights
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 mb-1 tabular-nums">
                589 / 600
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                10th Class Distinction (98.17%)
              </div>
              <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Achieved top percentile at Surya Teja School, demonstrating foundational excellence in mathematics and general sciences.
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 mb-1 tabular-nums">
                818 / 1000
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Intermediate Board (81.8%)
              </div>
              <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Strong performance at Narayana Junior College in MPC (Maths, Physics, Chemistry), reinforcing algorithmic and analytical capability.
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 mb-1 tabular-nums">
                70.01 CGPA
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                B.Tech 1st Year Performance
              </div>
              <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Solid progress in Artificial Intelligence & Data Science curriculum at Satya Institute of Technology and Management.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
