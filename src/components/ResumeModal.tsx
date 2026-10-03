import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, isDarkMode }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generatePlainTextResume = () => {
    return `CHUKKA YASWANTH
Email: ${resumeData.email} | Phone: +91 ${resumeData.phone}
Location: ${resumeData.location}
GitHub: ${resumeData.github} | LinkedIn: ${resumeData.linkedin}

========================================================================
PROFESSIONAL SUMMARY
========================================================================
${resumeData.summary}

========================================================================
SKILLS
========================================================================
- Technical: Python, Java (Basics), SQL (Basics), HTML, CSS, JavaScript, Pandas, NumPy, Machine Learning (Basics), Data Analysis, Git, Microsoft Office, Internet Usage
- Frameworks & Systems: Generative AI, MCP (Model Context Protocol), FastAPI, React, PostgreSQL, Jupyter Notebook
- Professional Strengths: Problem Solving, Communication, Time Management, Teamwork, Adaptability

========================================================================
WORK EXPERIENCE
========================================================================
Generative AI | Pixel Wind Technologies (2 months) | 2026 - 2026
- Worked on Generative AI concepts and applications, gaining practical exposure to AI tools, models, and prompt-based solutions.
- Explored how Generative AI can be used to create and improve real-world applications.
- Gained basic hands-on experience with Machine Learning concepts and algorithms using Python and Jupyter Notebook.

========================================================================
PROJECTS
========================================================================
1. InterviewGPT
Built an AI-based platform to support interview preparation through HR interview practice, resume analysis, communication improvement, and coding & aptitude preparation. Integrated Generative AI and MCP-based systems with a FastAPI, React, and PostgreSQL stack to develop interactive and practical interview-focused features.

2. CareerPilot AI – Smart Career Analysis Platform
Developed an AI-driven career analysis platform featuring technical aptitude tests, domain evaluation, AI-based career recommendations, placement eligibility analysis, and real-time performance tracking. Built responsive dashboards with interactive charts, score history tracking, and skill classification.

3. PrepBuddy
Interview and aptitude evaluation companion.

========================================================================
EDUCATION
========================================================================
- B.Tech in Artificial Intelligence & Data Science (2023 - 2027)
  Satya Institute of Technology and Management, Vizianagaram
  Score: CGPA 70.01 (Till 1st Year)

- Intermediate (12th Class) (2023)
  Narayana Junior College, Vizianagaram
  Score: 818 / 1000

- Secondary School Certificate (10th Class) (2021)
  Surya Teja School, Vizianagaram
  Score: 589 / 600
`;
  };

  const handleDownloadTxt = () => {
    const text = generatePlainTextResume();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Chukka_Yaswanth_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const text = generatePlainTextResume();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity no-print"
      />

      {/* Modal Dialog Card */}
      <div
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl z-10 my-6 flex flex-col max-h-[92vh] overflow-hidden ${
          isDarkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b no-print shrink-0 ${
            isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 id="resume-dialog-title" className="text-base font-bold">
              Chukka Yaswanth — Official Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                isDarkMode
                  ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200'
                  : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
              }`}
              title="Download ATS Plain Text"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download .txt</span>
            </button>

            <button
              onClick={handleCopyText}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                isDarkMode
                  ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200'
                  : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
              }`}
              title="Copy Resume Content"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume view"
              className={`p-1.5 rounded-lg border ml-2 transition-colors ${
                isDarkMode
                  ? 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 selection:bg-cyan-100 selection:text-cyan-900 text-left">
          
          {/* Resume Header */}
          <div className="text-center pb-5 mb-5 border-b border-slate-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2 font-serif">
              Chukka Yaswanth
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <a href={`mailto:${resumeData.email}`} className="text-slate-800 hover:underline">
                  {resumeData.email}
                </a>
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>+91 {resumeData.phone}</span>
              </span>
              <span>|</span>
              <span>Ramabhadrapuram, Vizianagaram, Andhra Pradesh, India</span>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-600 mt-2">
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:underline flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/yaswanthchukka</span>
              </a>
              <span>|</span>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:underline flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/yaswanth-chukka</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {resumeData.summary}
            </p>
          </section>

          {/* Skills */}
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              Skills
            </h2>
            <div className="text-xs sm:text-sm text-slate-800 space-y-1">
              <div>
                <strong>Technical: </strong>
                <span>Python, Java (Basics), SQL (Basics), HTML, CSS, JavaScript, Pandas, NumPy, Machine Learning (Basics), Data Analysis, Git, Microsoft Office, Internet Usage</span>
              </div>
              <div>
                <strong>Frameworks & Tools: </strong>
                <span>Generative AI, MCP (Model Context Protocol), FastAPI, React, PostgreSQL, Jupyter Notebook</span>
              </div>
              <div>
                <strong>Core Strengths: </strong>
                <span>Problem Solving, Communication, Time Management, Teamwork, Adaptability</span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                  <span>B.Tech in Artificial Intelligence & Data Science</span>
                  <span className="font-normal text-slate-600">2023 – 2027</span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-700">
                  <span>Satya Institute of Technology and Management, Vizianagaram</span>
                  <span className="font-semibold text-slate-900">CGPA: 70.01 (Till 1st Year)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                  <span>Intermediate (12th Class)</span>
                  <span className="font-normal text-slate-600">2023</span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-700">
                  <span>Narayana Junior College, Vizianagaram</span>
                  <span className="font-semibold text-slate-900">818 / 1000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                  <span>Secondary School Certificate (10th Class)</span>
                  <span className="font-normal text-slate-600">2021</span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-700">
                  <span>Surya Teja School, Vizianagaram</span>
                  <span className="font-semibold text-slate-900">589 / 600</span>
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              Work Experience
            </h2>
            <div>
              <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                <span>Generative AI</span>
                <span className="font-normal text-slate-600">2026 – 2026</span>
              </div>
              <div className="text-xs text-slate-700 italic mb-1.5">
                Pixel Wind Technologies (2 months)
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-1">
                Worked on Generative AI concepts and applications, gaining practical exposure to AI tools, models, and prompt-based solutions. Explored how Generative AI can be used to create and improve real-world applications. Also gained basic hands-on experience with Machine Learning concepts and algorithms using Python and Jupyter Notebook.
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              Projects
            </h2>
            
            <div className="space-y-3">
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  InterviewGPT
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Built an AI-based platform to support interview preparation through HR interview practice, resume analysis, communication improvement, and coding & aptitude preparation. Integrated Generative AI and MCP-based systems with a FastAPI, React, and PostgreSQL stack to develop interactive and practical interview-focused features.
                </p>
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  CareerPilot AI – Smart Career Analysis Platform
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Developed an AI-driven career analysis platform featuring technical aptitude tests, domain evaluation, AI-based career recommendations, placement eligibility analysis, and real-time performance tracking. Built responsive dashboards with interactive charts, score history tracking, and skill classification.
                </p>
              </div>

              <div className="text-xs text-slate-600 italic">
                PrepBuddy (AI Interview & Prep System)
              </div>
            </div>
          </section>

        </div>

        {/* Modal Bottom Action Bar (no-print) */}
        <div
          className={`flex items-center justify-between px-6 py-3 border-t no-print shrink-0 text-xs ${
            isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}
        >
          <span>Recruiter-ready ATS format · Strictly sourced from Chukka Yaswanth's resume</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-medium rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
