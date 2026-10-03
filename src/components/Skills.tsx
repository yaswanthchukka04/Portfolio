import React, { useState } from 'react';
import { Search, Code2, Brain, Database, Wrench, Users, Check } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface SkillsProps {
  isDarkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Code2 className="w-4 h-4 text-cyan-400" />,
    ai_data: <Brain className="w-4 h-4 text-cyan-400" />,
    web_backend: <Database className="w-4 h-4 text-cyan-400" />,
    tools: <Wrench className="w-4 h-4 text-cyan-400" />,
    soft_skills: <Users className="w-4 h-4 text-cyan-400" />,
  };

  const filteredCategories = resumeData.skillCategories
    .filter((cat) => selectedCategory === 'all' || cat.categoryKey === selectedCategory)
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.context && skill.context.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      return {
        ...cat,
        skills: filteredSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section
      id="skills"
      className={`py-16 md:py-24 border-t transition-colors ${
        isDarkMode ? 'border-slate-900 bg-slate-950/70' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 block">
            Technical Capabilities
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Technical & Professional Skills
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Verified skills and proficiencies listed in Chukka Yaswanth's resume, organized by domain and application context.
          </p>
        </div>

        {/* Search and Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div
            className={`flex flex-wrap items-center p-1 rounded-xl border gap-1 overflow-x-auto ${
              isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Domains
            </button>

            {resumeData.skillCategories.map((cat) => (
              <button
                key={cat.categoryKey}
                onClick={() => setSelectedCategory(cat.categoryKey)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.categoryKey
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                    : isDarkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Python, SQL)..."
              className={`w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-100 placeholder-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.categoryKey}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-800/60">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40">
                    {categoryIcons[cat.categoryKey] || <Code2 className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {cat.title}
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      {cat.skills.length} skills listed
                    </span>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-3">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border transition-colors ${
                        isDarkMode
                          ? 'bg-slate-950/70 border-slate-800/80 hover:border-cyan-500/30'
                          : 'bg-white border-slate-200 hover:border-cyan-500/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className={`text-xs sm:text-sm font-semibold ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                          {skill.name}
                        </span>
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      </div>
                      
                      {skill.context && (
                        <p className={`text-[11px] leading-tight ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {skill.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/40 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Verified in resume</span>
                <span className="font-mono text-cyan-400">100% Truth</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-sm">
              No skills found matching "{searchQuery}". Try searching for Python, React, SQL, or AI.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
