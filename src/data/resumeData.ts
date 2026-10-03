import interviewGptImg from '../assets/images/interviewgpt_preview_1791013263618.jpg';
import careerPilotImg from '../assets/images/careerpilot_preview_1791013278105.jpg';
import { ResumeData } from '../types/portfolio';

export const resumeData: ResumeData = {
  name: "Chukka Yaswanth",
  title: "AI & Data Science Undergraduate",
  tagline: "Building real-world AI applications, machine learning workflows, and interactive platforms.",
  summary:
    "Motivated and dedicated AI & Data Science undergraduate with a strong foundation in programming, web technologies, databases, and AI concepts. Eager to apply my skills in real-world projects, continuously learn new technologies, and contribute to innovative solutions in a growth-oriented organization.",
  email: "yaswanthchukka2@gmail.com",
  phone: "9154177106",
  location: "Ramabhadrapuram, Vizianagaram, Andhra Pradesh, India",
  github: "https://github.com/yaswanthchukka",
  linkedin: "https://www.linkedin.com/in/yaswanth-chukka",
  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Satya Institute of Technology and Management",
      location: "Vizianagaram, Andhra Pradesh",
      period: "2023 – 2027",
      score: "CGPA: 70.01",
      scoreDetail: "Till 1st Year",
      highlights: [
        "Core curriculum focusing on Artificial Intelligence, Data Structures, and Data Science fundamentals",
        "Hands-on coursework in Python programming, relational databases, and algorithm design"
      ]
    },
    {
      degree: "Intermediate (12th Class)",
      institution: "Narayana Junior College",
      location: "Vizianagaram, Andhra Pradesh",
      period: "2023",
      score: "818 / 1000",
      scoreDetail: "81.8% Marks",
      highlights: [
        "Major subjects: Mathematics, Physics, and Chemistry",
        "Strong foundation in analytical reasoning and quantitative problem-solving"
      ]
    },
    {
      degree: "Secondary School Certificate (10th Class)",
      institution: "Surya Teja School",
      location: "Vizianagaram, Andhra Pradesh",
      period: "2021",
      score: "589 / 600",
      scoreDetail: "98.17% Marks",
      highlights: [
        "High academic distinction with 589/600 aggregate marks",
        "Strong academic track record in mathematics, science, and languages"
      ]
    }
  ],
  experience: [
    {
      role: "Generative AI",
      company: "Pixel Wind Technologies",
      duration: "2 months",
      period: "2026 – 2026",
      description:
        "Worked on Generative AI concepts and applications, gaining practical exposure to AI tools, models, and prompt-based solutions. Explored how Generative AI can be used to create and improve real-world applications. Also gained basic hands-on experience with Machine Learning concepts and algorithms using Python and Jupyter Notebook.",
      highlights: [
        "Worked on Generative AI concepts and applications with practical exposure to state-of-the-art AI tools",
        "Explored and implemented prompt-based solutions for real-world enterprise applications",
        "Gained hands-on experience with Machine Learning algorithms and concepts using Python and Jupyter Notebook"
      ],
      technologies: ["Generative AI", "Python", "Jupyter Notebook", "AI Tools & Models", "Prompt Engineering", "Machine Learning"]
    }
  ],
  projects: [
    {
      id: "interviewgpt",
      title: "InterviewGPT",
      subtitle: "AI-Powered Comprehensive Interview Preparation Platform",
      description:
        "Built an AI-based platform to support interview preparation through HR interview practice, resume analysis, communication improvement, and coding & aptitude preparation. Integrated Generative AI and MCP-based systems with a FastAPI, React, and PostgreSQL stack to develop interactive and practical interview-focused features.",
      image: interviewGptImg,
      technologies: ["Generative AI", "MCP (Model Context Protocol)", "FastAPI", "React", "PostgreSQL", "Python"],
      features: [
        "Interactive HR interview simulation with dynamic conversational roleplay",
        "Automated resume analysis providing structured critique and keyword matching",
        "Communication feedback engine evaluating fluency, clarity, and tone",
        "Coding challenges and aptitude testing modules with immediate scoring",
        "Full-stack architecture with FastAPI backend and PostgreSQL database"
      ],
      category: "AI & Data Science",
      githubUrl: "https://github.com/yaswanthchukka",
      liveDemoNote: "Architecture and MCP-based pipeline demonstrated in portfolio"
    },
    {
      id: "careerpilot-ai",
      title: "CareerPilot AI",
      subtitle: "Smart Career Analysis & Placement Readiness Platform",
      description:
        "Developed an AI-driven career analysis platform featuring technical aptitude tests, domain evaluation, AI-based career recommendations, placement eligibility analysis, and real-time performance tracking. Built responsive dashboards with interactive charts, score history tracking, and skill classification.",
      image: careerPilotImg,
      technologies: ["AI Analytics", "Python", "React", "Data Analysis", "Interactive Charts", "Skill Classification"],
      features: [
        "Technical aptitude testing engine across diverse engineering concepts",
        "Automated domain evaluation assessing student strengths and knowledge gaps",
        "AI-driven career path recommendations tailored to individual skill profiles",
        "Campus placement eligibility analysis based on academic and test milestones",
        "Responsive real-time performance dashboard with score history and skill mapping"
      ],
      category: "AI & Data Science",
      githubUrl: "https://github.com/yaswanthchukka",
      liveDemoNote: "Interactive career metrics and chart dashboards featured in portfolio"
    }
  ],
  skillCategories: [
    {
      title: "Programming Languages",
      categoryKey: "languages",
      skills: [
        { name: "Python", context: "Primary language for AI, data analysis, and backend development" },
        { name: "Java (Basics)", context: "Object-oriented programming fundamentals and problem solving" },
        { name: "JavaScript", context: "Modern ES6+ syntax for dynamic web applications and UI logic" }
      ]
    },
    {
      title: "AI, ML & Data Science",
      categoryKey: "ai_data",
      skills: [
        { name: "Generative AI", context: "Prompt engineering, LLM integration, and AI application design" },
        { name: "Machine Learning (Basics)", context: "Core concepts, evaluation metrics, and algorithms" },
        { name: "Data Analysis", context: "Exploratory data analysis, insights extraction, and reporting" },
        { name: "Pandas", context: "Data manipulation, transformation, and structured dataset cleaning" },
        { name: "NumPy", context: "Numerical computing, matrix operations, and vectorized math" },
        { name: "Jupyter Notebook", context: "Interactive computing, model experimentation, and visualization" }
      ]
    },
    {
      title: "Web & Backend Technologies",
      categoryKey: "web_backend",
      skills: [
        { name: "HTML", context: "Semantic web structuring, clean markup, and accessibility" },
        { name: "CSS", context: "Modern layouts, responsive design, styling, and transitions" },
        { name: "React", context: "Component-based user interfaces and state management" },
        { name: "FastAPI", context: "High-performance Python REST APIs and asynchronous services" },
        { name: "SQL (Basics)", context: "Relational database queries, schemas, and table operations" },
        { name: "PostgreSQL", context: "Relational database management, data modeling, and indexing" }
      ]
    },
    {
      title: "Tools & Platforms",
      categoryKey: "tools",
      skills: [
        { name: "Git", context: "Version control, branching, repository management, and collaboration" },
        { name: "Microsoft Office", context: "Professional documentation, data tables, and presentations" },
        { name: "Internet Usage", context: "Efficient technical research, documentation navigation, and web resources" }
      ]
    },
    {
      title: "Professional & Soft Skills",
      categoryKey: "soft_skills",
      skills: [
        { name: "Problem Solving", context: "Analytical reasoning and algorithmic approach to challenges" },
        { name: "Communication", context: "Clear articulation of ideas, technical updates, and teamwork" },
        { name: "Time Management", context: "Prioritization of milestones and structured task execution" },
        { name: "Teamwork", context: "Cross-functional collaboration and constructive group problem-solving" },
        { name: "Adaptability", context: "Fast learner eager to master new technologies and frameworks" }
      ]
    }
  ]
};
