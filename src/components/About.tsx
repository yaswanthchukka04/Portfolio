import React from 'react';
import { GraduationCap, Briefcase, Code, Brain, Target, Compass, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface AboutProps {
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`py-16 md:py-24 border-t transition-colors ${
        isDarkMode ? 'border-slate-900 bg-slate-950' : 'border-slate-200 bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 block">
            Candidate Profile
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            About Chukka Yaswanth
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Dedicated AI & Data Science undergraduate combining foundational computer science with practical implementation in Generative AI, web frameworks, and machine learning pipelines.
          </p>
        </div>

        {/* 2-Column Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Professional Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Professional Summary & Background
              </h3>
              
              <p className={`text-sm sm:text-base leading-relaxed mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {resumeData.summary}
              </p>

              <p className={`text-sm sm:text-base leading-relaxed mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Currently pursuing my <strong className="text-cyan-400 font-semibold">B.Tech in Artificial Intelligence & Data Science</strong> at <span className="font-medium text-slate-200">Satya Institute of Technology and Management, Vizianagaram</span> (2023–2027). My academic journey is grounded in strong quantitative thinking, demonstrated by scoring <strong className="text-cyan-400 font-semibold">589/600 (98.17%)</strong> in 10th grade and <strong className="text-cyan-400 font-semibold">818/1000</strong> in Intermediate.
              </p>

              <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                During my 2-month tenure working on <strong className="text-cyan-400 font-semibold">Generative AI at Pixel Wind Technologies</strong>, I gained practical hands-on experience exploring prompt-based solutions, model behaviors, and machine learning workflows in Python and Jupyter Notebook. I have applied these skills to build full-stack AI platforms including <em>InterviewGPT</em> and <em>CareerPilot AI</em>.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className={`p-5 rounded-xl border ${
                  isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    AI & Machine Learning
                  </h4>
                </div>
                <p className={`text-xs sm:text-sm leading-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Practical exposure to Generative AI tools, prompt-based architectures, and ML algorithms using Python, Pandas, and NumPy.
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${
                  isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Web & Database Stack
                  </h4>
                </div>
                <p className={`text-xs sm:text-sm leading-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Building responsive web applications using React, modern JavaScript, HTML/CSS, FastAPI backend, and PostgreSQL/SQL schemas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Metrics & Career Goals Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Metrics Card */}
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className={`text-base font-semibold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                Academic & Practical Milestones
              </h3>

              <div className="space-y-4">
                <div className="flex items-start justify-between py-2 border-b border-slate-800/50">
                  <div>
                    <div className="text-xs text-slate-400">Degree CGPA (Till 1st Year)</div>
                    <div className="text-xl font-bold font-mono tabular-nums text-cyan-400">70.01</div>
                  </div>
                  <span className="text-xs text-slate-500 mt-1">Satya Inst. of Tech & Mgmt</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/50">
                  <div>
                    <div className="text-xs text-slate-400">10th Class (SSC)</div>
                    <div className="text-xl font-bold font-mono tabular-nums text-cyan-400">589 / 600</div>
                  </div>
                  <span className="text-xs text-slate-500 mt-1">98.17% Aggregate</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/50">
                  <div>
                    <div className="text-xs text-slate-400">12th Intermediate</div>
                    <div className="text-xl font-bold font-mono tabular-nums text-cyan-400">818 / 1000</div>
                  </div>
                  <span className="text-xs text-slate-500 mt-1">Narayana Jr College</span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <div>
                    <div className="text-xs text-slate-400">Industry Exposure</div>
                    <div className="text-sm font-semibold text-slate-200">Pixel Wind Technologies</div>
                  </div>
                  <span className="text-xs text-slate-400 mt-1">Generative AI (2 Months)</span>
                </div>
              </div>
            </div>

            {/* Career Goals & Focus Card */}
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-gradient-to-br from-slate-900 to-cyan-950/20 border-cyan-900/40' : 'bg-gradient-to-br from-cyan-50/50 to-white border-cyan-100 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-3 text-cyan-400">
                <Target className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-wider">Career Objectives</h4>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Seeking internships, engineering projects, and entry-level positions in Artificial Intelligence, Data Science, and Full-Stack development where I can:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>Contribute to real-world AI applications and enterprise solutions</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>Continuously learn emerging technologies, architectures, and data frameworks</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>Collaborate effectively in growth-oriented engineering teams</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
