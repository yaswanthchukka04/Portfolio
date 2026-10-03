export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreDetail?: string;
  highlights?: string[];
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  duration: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  category: 'AI & Data Science' | 'Web & Full Stack';
  githubUrl: string;
  liveDemoNote?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  skills: {
    name: string;
    level?: string;
    context?: string;
  }[];
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  education: EducationItem[];
  experience: WorkExperienceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
}
