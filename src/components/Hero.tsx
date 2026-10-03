import React, { useState } from 'react';
import { ArrowDown, Mail, MapPin, Phone, Github, Linkedin, FileDown, Terminal, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, isDarkMode }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'profile' | 'stack' | 'experience'>('profile');

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, Actions, Metadata */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status indicator with unboxed text */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Internships & Entry-Level Opportunities</span>
            </div>

            {/* Name & Title */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 text-balance ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {resumeData.name}
            </h1>

            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-5">
              <span>{resumeData.title}</span>
            </div>

            {/* Short professional summary from resume */}
            <p
              className={`text-base sm:text-lg leading-relaxed mb-6 max-w-2xl ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {resumeData.summary}
            </p>

            {/* Clean Unboxed Metadata with Typographic Separators (Zero-Pill Rule) */}
            <div
              className={`flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm mb-8 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Vizianagaram, Andhra Pradesh</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${resumeData.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {resumeData.email}
                </a>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+91 {resumeData.phone}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-600/25 transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className={`px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold rounded-lg border transition-all duration-200 active:scale-95 whitespace-nowrap ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white hover:border-slate-600'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:border-slate-400 shadow-sm'
                }`}
              >
                Contact Me
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-cyan-400 hover:text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/20 hover:bg-cyan-950/40 rounded-lg transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social / Profile Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-lg border transition-colors ${
                  isDarkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:text-black hover:border-slate-300'
                }`}
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-lg border transition-colors ${
                  isDarkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:text-black hover:border-slate-300'
                }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </a>

              <div
                className={`text-xs pl-2 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                <span>Satya Institute of Technology and Management (2023–2027)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Code-Inspired Technology & Monogram Visual (No Photograph) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-lg">
              
              {/* Subtle background gradient accent */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-indigo-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              <div
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isDarkMode
                    ? 'bg-slate-900/95 border-slate-800 shadow-2xl'
                    : 'bg-white border-slate-200 shadow-xl'
                }`}
              >
                
                {/* Header Banner: Stylish Monogram Circle & Identity Badge */}
                <div
                  className={`p-5 sm:p-6 border-b flex items-center justify-between gap-4 ${
                    isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Stylish Initials Monogram Circle */}
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-lg shadow-md shadow-cyan-500/20 ring-2 ring-cyan-400/30">
                      <span>CY</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
                    </div>

                    <div>
                      <div className={`font-bold text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Chukka Yaswanth
                      </div>
                      <div className="text-xs text-cyan-400 font-mono">
                        AI & Data Science Candidate
                      </div>
                    </div>
                  </div>

                  {/* Minimal tech badge */}
                  <div className="hidden sm:flex flex-col items-end text-right">
                    <span className="text-[11px] font-mono text-slate-400">Class of 2027</span>
                    <span className="text-xs font-semibold text-emerald-400">Verified Profile</span>
                  </div>
                </div>

                {/* Interactive IDE / Developer Code Terminal */}
                <div className="p-5 sm:p-6">
                  {/* IDE Window Controls & Tabs */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/60">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono">
                      <button
                        onClick={() => setActiveCodeTab('profile')}
                        className={`px-2 py-0.5 rounded transition-colors ${
                          activeCodeTab === 'profile'
                            ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        candidate.py
                      </button>
                      <button
                        onClick={() => setActiveCodeTab('stack')}
                        className={`px-2 py-0.5 rounded transition-colors ${
                          activeCodeTab === 'stack'
                            ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        stack.json
                      </button>
                      <button
                        onClick={() => setActiveCodeTab('experience')}
                        className={`px-2 py-0.5 rounded transition-colors ${
                          activeCodeTab === 'experience'
                            ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        work.py
                      </button>
                    </div>
                  </div>

                  {/* Code Display Area */}
                  <div className="rounded-xl bg-slate-950/90 border border-slate-800/80 p-4 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 selection:bg-cyan-500/30">
                    {activeCodeTab === 'profile' && (
                      <pre className="text-[11px] sm:text-xs">
                        <code>
                          <span className="text-purple-400">class</span> <span className="text-yellow-300">CandidateProfile</span>:<br />
                          {"    "}name = <span className="text-emerald-300">"Chukka Yaswanth"</span><br />
                          {"    "}degree = <span className="text-emerald-300">"B.Tech AI & Data Science"</span><br />
                          {"    "}university = <span className="text-emerald-300">"Satya Inst. of Tech & Mgmt"</span><br />
                          {"    "}academic_year = <span className="text-cyan-300">"2023 - 2027"</span><br />
                          {"    "}cgpa = <span className="text-cyan-300">70.01</span> <span className="text-slate-500"># Till 1st Year</span><br />
                          {"    "}ssc_distinction = <span className="text-cyan-300">"589/600 (98.17%)"</span><br />
                          {"    "}status = <span className="text-emerald-300">"Seeking AI / Web Internships"</span>
                        </code>
                      </pre>
                    )}

                    {activeCodeTab === 'stack' && (
                      <pre className="text-[11px] sm:text-xs">
                        <code>
                          &#123;<br />
                          {"  "}<span className="text-cyan-300">"languages"</span>: [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Java (Basics)"</span>, <span className="text-emerald-300">"JavaScript"</span>],<br />
                          {"  "}<span className="text-cyan-300">"ai_ml"</span>: [<span className="text-emerald-300">"Generative AI"</span>, <span className="text-emerald-300">"Pandas"</span>, <span className="text-emerald-300">"NumPy"</span>, <span className="text-emerald-300">"ML Basics"</span>],<br />
                          {"  "}<span className="text-cyan-300">"backend_db"</span>: [<span className="text-emerald-300">"FastAPI"</span>, <span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"SQL"</span>],<br />
                          {"  "}<span className="text-cyan-300">"frontend"</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"HTML"</span>, <span className="text-emerald-300">"CSS"</span>],<br />
                          {"  "}<span className="text-cyan-300">"tooling"</span>: [<span className="text-emerald-300">"Git"</span>, <span className="text-emerald-300">"Jupyter Notebook"</span>]<br />
                          &#125;
                        </code>
                      </pre>
                    )}

                    {activeCodeTab === 'experience' && (
                      <pre className="text-[11px] sm:text-xs">
                        <code>
                          <span className="text-purple-400">async def</span> <span className="text-yellow-300">get_industry_exposure</span>():<br />
                          {"    "}role = <span className="text-emerald-300">"Generative AI"</span><br />
                          {"    "}company = <span className="text-emerald-300">"Pixel Wind Technologies"</span><br />
                          {"    "}duration = <span className="text-cyan-300">"2 months (2026)"</span><br />
                          {"    "}focus = [<br />
                          {"        "}<span className="text-emerald-300">"Generative AI & LLM tooling"</span>,<br />
                          {"        "}<span className="text-emerald-300">"Prompt-based engineering solutions"</span>,<br />
                          {"        "}<span className="text-emerald-300">"Hands-on ML with Python & Jupyter"</span><br />
                          {"    "}]<br />
                          {"    "}<span className="text-purple-400">return</span> &#123;<span className="text-cyan-300">"ready_for_impact"</span>: <span className="text-cyan-400">True</span>&#125;
                        </code>
                      </pre>
                    )}
                  </div>

                  {/* Verified resume highlights footer */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/60 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">FastAPI & React Stack</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">Generative AI & MCP</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
