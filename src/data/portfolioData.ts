import { permanentProfilePhoto } from '../assets/profileImage';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  thumbnailUrl?: string;
  featured: boolean;
  highlights: string[];
  mockupType: 'academic' | 'ansible' | 'portfolio' | 'dsa' | 'todo';
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  location: string;
  technologies: string[];
  responsibilities: string[];
  keyLearning: string;
  type: 'internship' | 'job_simulation';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'Linux & Systems' | 'Programming & DSA' | 'AI & Prompt Eng' | 'Professional';
  date: string;
  credentialUrl?: string;
  skills: string[];
  summary: string;
}

export interface CodingStats {
  leetcodeUsername: string;
  leetcodeUrl: string;
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  activeStreakDays: number;
  acceptanceRate: string;
  ranking: string;
  githubUsername: string;
  githubUrl: string;
  publicRepos: number;
  totalContributions: number;
}

export const portfolioData = {
  personal: {
    name: "Ankit Srivastava",
    role: "Computer Science and Engineering Undergraduate & Aspiring Software Developer",
    college: "Noida Institute of Engineering and Technology (NIET)",
    location: "Greater Noida, Uttar Pradesh, India",
    phone: "+91 9336366701",
    email: "ankitsri2911@gmail.com",
    cgpa: "9.2",
    cgpaNote: "1st Year CGPA: 9.2 / 10",
    expectedGraduation: "2029",
    education: "B.Tech in Computer Science and Engineering, NIET Greater Noida (Expected Graduation: 2029)",
    availability: "Seeking SDE Intern / Software Engineer Trainee Roles (Summer 2026 & Beyond)",
    summary:
      "Computer Science and Engineering undergraduate (B.Tech, expected 2029) seeking an SDE Intern / Software Engineer Trainee role. Strong foundation in Python, Java, and C, with hands-on experience in Linux automation using Red Hat Ansible, responsive web development, and algorithm design. Experienced with Git-based workflows, data analysis, and hands-on industry job simulations. Focused on writing clean, efficient, well-documented code and applying sound time and space complexity analysis.",
    heroShortBio:
      "Computer Science Engineering undergraduate at NIET Greater Noida (1st Year CGPA: 9.2). Passionate about DSA, Python, Java, C, Linux automation using Red Hat Ansible, AI, and scalable software solutions.",
    customPhotoUrl: permanentProfilePhoto,
  },

  interests: [
    "Software Development & SDE",
    "Data Structures & Algorithms (DSA)",
    "Linux Systems & Ansible Automation",
    "Web Engineering & Responsive Design",
    "Artificial Intelligence & Prompt Engineering",
    "Data Analysis & Algorithmic Problem Solving",
  ],

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ankit-srivastava-a65a23389?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/ankit8567",
    leetcode: "https://leetcode.com/u/Ankit2904/",
    instagram: "https://www.instagram.com/ankit2911_/",
    instagramHandle: "ankit2911_",
    email: "mailto:ankitsri2911@gmail.com",
  },

  skills: {
    languages: [
      { name: "Python", level: "Proficient", note: "DSA, data processing, automation scripting & algorithmic logic" },
      { name: "Java", level: "Intermediate", note: "Object-oriented programming, classes, collections & core design" },
      { name: "C", level: "Proficient", note: "Procedural programming, memory pointers & hardware-level fundamentals" },
      { name: "JavaScript", level: "Intermediate", note: "Modern ES6+, DOM manipulation & dynamic web interfaces" },
    ],
    webTech: [
      { name: "HTML5", note: "Semantic structure, accessibility & responsive tags" },
      { name: "CSS3", note: "Flexbox, CSS Grid, mobile-first styling & animations" },
      { name: "Responsive Design", note: "Fluid layouts for desktop, tablet & mobile viewports" },
      { name: "DOM Manipulation", note: "Event-driven scripting & client-side interaction" },
      { name: "Web Design", note: "Modern UI/UX principles, typography & component structure" },
    ],
    systemsDevops: [
      { name: "Linux (RHEL)", note: "Red Hat Enterprise Linux system management & CLI" },
      { name: "Red Hat Ansible", note: "Automated configuration, idempotent playbooks & node provisioning" },
      { name: "Bash/Shell Scripting", note: "System administration scripts & pipeline workflows" },
    ],
    coreCS: [
      { name: "Data Structures & Algorithms (DSA)", note: "Sorting, searching, trees, graph traversals, dynamic programming" },
      { name: "Object-Oriented Programming (OOP)", note: "Encapsulation, inheritance, polymorphism & design abstractions" },
      { name: "Database Management Systems (DBMS)", note: "Relational data structures, SQL queries & normalization" },
      { name: "Time & Space Complexity Analysis", note: "Big-O asymptotic bounds, performance optimization & algorithmic efficiency" },
      { name: "Computer Networks", note: "Network protocols, client-server models & packet flow" },
      { name: "Operating Systems", note: "Processes, threads, CPU scheduling & memory management" },
    ],
    toolsAI: [
      { name: "Git", note: "Branching workflows, commits, merging & version control" },
      { name: "GitHub", note: "Repository management, pull requests & code collaboration" },
      { name: "VS Code", note: "Debugging, extensions & production workflow configuration" },
      { name: "Prompt Engineering", note: "Context structuring, few-shot prompting & LLM agent pipelines" },
      { name: "Claude & Generative AI", note: "Prompt optimization, Claude Academy certified & AI tooling" },
      { name: "AutoCAD", note: "Technical drafting & engineering modeling foundations" },
    ],
  },

  projects: [
    {
      id: "smart-academic-recommendation",
      title: "Smart Academic Recommendation System",
      category: "AI & Decision Systems",
      year: "2026",
      tagline: "A personalized learning platform providing tailored subject recommendations, career roadmaps, and progress tracking for college students.",
      description:
        "A full-featured recommendation platform built by Ankit Srivastava. Deployed live on Vercel and open-source on GitHub, it provides intelligent curriculum pathways, personalized course roadmaps, prerequisite dependency resolution, and real-time student study planners.",
      technologies: ["TypeScript", "React", "Gemini API", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/ankit8567/Smart-Academic-Recommendation-System",
      liveUrl: "https://smart-academic-recommendation-syste-phi.vercel.app",
      thumbnailUrl: "/thumbnails/smart-academic-recommendation.png",
      featured: true,
      highlights: [
        "Personalized subject recommendations & automated career roadmaps",
        "Prerequisite dependency mapping and study plan export",
        "Deployed live on Vercel with responsive mobile-first UI",
      ],
      mockupType: "academic",
    },
    {
      id: "student-portfolio",
      title: "Student Developer Portfolio Platform",
      category: "Frontend & Web Architecture",
      year: "2026",
      tagline: "High-performance responsive personal portfolio engineered with semantic HTML5, CSS3, modern JavaScript and component modularity.",
      description:
        "Architected an editorial, high-performance personal developer portfolio deployed on Vercel and GitHub. Features verified credentials, 9.2 CGPA academic standing, interactive project previews, and clean typography.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Vercel", "Git"],
      githubUrl: "https://github.com/ankit8567/Student-Portfolio",
      liveUrl: "https://github.com/ankit8567/Student-Portfolio",
      thumbnailUrl: "/thumbnails/student-portfolio.png",
      featured: true,
      highlights: [
        "Architected mobile-first fluid layout with zero layout shifts",
        "Interactive project modals and resume PDF export",
        "Integrated LeetCode stats, 8 certifications, and social channels",
      ],
      mockupType: "portfolio",
    },
    {
      id: "to-do-list",
      title: "Modern Interactive To-Do Task Manager",
      category: "Web Application & Productivity",
      year: "2026",
      tagline: "Interactive task scheduling and productivity dashboard with state persistence, category filtering, and responsive mobile-first UI.",
      description:
        "Modern web application deployed on Vercel for managing daily tasks, deadlines, and project milestones. Includes responsive task boards, dynamic state management, and real-time progress indicators.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Vercel", "Git"],
      githubUrl: "https://github.com/ankit8567/to-do-list",
      liveUrl: "https://to-do-list-roan-phi.vercel.app",
      thumbnailUrl: "/thumbnails/to-do-list.png",
      featured: true,
      highlights: [
        "Live web app deployed on Vercel: to-do-list-roan-phi.vercel.app",
        "Responsive UI with dynamic task status transitions",
        "Streamlined client-side state handling and intuitive task management",
      ],
      mockupType: "todo",
    },
    {
      id: "linux-ansible-engine",
      title: "Linux Automation & System Configuration Engine",
      category: "DevOps & Systems Engineering",
      year: "2026",
      tagline: "Automated Linux system configuration, user provisioning, and package deployment using Red Hat Ansible and Python.",
      description:
        "Automated system configuration, user management, and package deployment across Linux environments by writing reusable, idempotent Ansible playbooks. Implemented robust Python scripts with structured error handling and logging to extend playbook workflows and improve automation reliability.",
      technologies: ["Red Hat Ansible", "Python", "Linux (RHEL)", "Bash Scripting"],
      githubUrl: "https://github.com/ankit8567",
      liveUrl: "https://github.com/ankit8567",
      featured: true,
      highlights: [
        "Wrote reusable, idempotent Ansible playbooks for system configuration and user management",
        "Created Python scripts with comprehensive logging and error handling to extend workflows",
        "Configured secure SSH-based automation pipelines across multiple Linux nodes",
      ],
      mockupType: "ansible",
    },
  ] as Project[],

  experience: [
    {
      id: "exp-skill-nexis",
      organization: "Skill Nexis",
      role: "Web Development Intern",
      duration: "September 2026",
      location: "Remote, India",
      type: "internship",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Scripting", "Git"],
      responsibilities: [
        "Engineered responsive, mobile-first interface components using HTML5, CSS3, and JavaScript, ensuring consistent layouts across screen sizes and browsers through modular component design and DOM scripting.",
        "Implemented Git-based version control workflows including branching, commits, and pull requests to keep code organized, maintainable, and easy to review.",
      ],
      keyLearning:
        "Mastered production-grade DOM manipulation, cross-browser responsive layouts, and multi-branch Git collaboration standards.",
    },
    {
      id: "exp-deloitte-forage",
      organization: "Deloitte Australia (Forage)",
      role: "Data Analytics Job Simulation",
      duration: "September 2026",
      location: "Virtual / Remote Simulation",
      type: "job_simulation",
      technologies: ["Data Analytics", "Data Cleaning", "Data Manipulation", "Dashboard Visualization"],
      responsibilities: [
        "Analyzed structured datasets and produced dashboard-based insights by cleaning, manipulating, and visualizing data.",
        "Synthesized actionable business recommendations from raw metrics and formatted stakeholder presentations.",
      ],
      keyLearning:
        "Developed end-to-end data auditing rigor, identifying anomalies and communicating data-driven patterns clearly.",
    },
    {
      id: "exp-internal-audit-forage",
      organization: "Forage",
      role: "Internal Audit Job Simulation",
      duration: "September 2026",
      location: "Virtual / Remote Simulation",
      type: "job_simulation",
      technologies: ["Risk Assessment", "Process Review", "Compliance Validation", "Technical Reporting"],
      responsibilities: [
        "Conducted structured process reviews and risk assessments, validating compliance against defined industry standards.",
        "Documented findings, identified control gaps, and formulated practical remediation recommendations.",
      ],
      keyLearning:
        "Strengthened structured technical documentation, risk assessment frameworks, and methodical system auditing.",
    },
  ] as Experience[],

  certifications: [
    {
      id: "cert-rh294",
      title: "Red Hat Enterprise Linux Automation with Ansible (RH294)",
      issuer: "Red Hat",
      category: "Linux & Systems",
      date: "2026",
      credentialUrl: "https://www.linkedin.com/in/ankit-srivastava-a65a23389",
      skills: ["Red Hat Ansible", "Linux (RHEL)", "Automation Playbooks", "Configuration Management", "YAML"],
      summary:
        "Advanced enterprise-level automation credential validating proficiency in writing idempotent Ansible playbooks, managing enterprise RHEL systems, task orchestration, and automating cloud/system deployments.",
    },
    {
      id: "cert-linux-fundamentals",
      title: "Getting Started with Linux Fundamentals",
      issuer: "Red Hat",
      category: "Linux & Systems",
      date: "2026",
      credentialUrl: "https://www.linkedin.com/in/ankit-srivastava-a65a23389",
      skills: ["Linux CLI", "File Systems", "User Management", "Permissions", "Bash Scripting"],
      summary:
        "Core foundational certification in Red Hat Enterprise Linux commands, system navigation, file permissions, process monitoring, and shell operations.",
    },
    {
      id: "cert-dsa-infosys",
      title: "Data Structures and Algorithms using Python – Part 2",
      issuer: "Infosys Springboard",
      category: "Programming & DSA",
      date: "2026",
      credentialUrl: "https://www.linkedin.com/in/ankit-srivastava-a65a23389",
      skills: ["Data Structures", "Algorithms", "Python", "Trees", "Graphs", "Dynamic Programming"],
      summary:
        "Advanced algorithmic problem solving in Python covering non-linear data structures (trees, binary search trees, graphs), greedy strategies, and dynamic programming with complexity analysis.",
    },
    {
      id: "cert-oop-infosys",
      title: "Object Oriented Programming using Python",
      issuer: "Infosys Springboard",
      category: "Programming & DSA",
      date: "2026",
      credentialUrl: "https://www.linkedin.com/in/ankit-srivastava-a65a23389",
      skills: ["Python", "OOP", "Classes & Objects", "Inheritance", "Polymorphism", "Encapsulation"],
      summary:
        "Comprehensive certification in OOP paradigms using Python, covering class hierarchies, abstract base classes, encapsulation, operator overloading, and robust exception handling.",
    },
    {
      id: "cert-aws-prompt-eng",
      title: "Foundations of Prompt Engineering",
      issuer: "AWS (Amazon Web Services)",
      category: "AI & Prompt Eng",
      date: "2026",
      credentialUrl: "https://www.linkedin.com/in/ankit-srivastava-a65a23389",
      skills: ["Prompt Engineering", "Generative AI", "AWS AI", "Few-shot Prompting", "Model Tuning"],
      summary:
        "Specialized credential in generative AI and prompt optimization methodologies on AWS, covering prompt architectures, contextual grounding, model hallucination mitigation, and LLM orchestration.",
    },
    {
      id: "cert-claude-101",
      title: "Claude 101",
      issuer: "Claude Academy",
      category: "AI & Prompt Eng",
      date: "2026",
      credentialUrl: "https://www.linkedin.com/in/ankit-srivastava-a65a23389",
      skills: ["Claude AI", "Prompt Architecture", "Agent Workflows", "AI System Evaluation"],
      summary:
        "Official certification validating expertise in Anthropic Claude model capabilities, system prompts, structured XML tags, context window optimization, and agentic workflows.",
    },
    {
      id: "cert-adobe-genai",
      title: "Adobe Creativity & GenAI",
      issuer: "NASSCOM",
      category: "AI & Prompt Eng",
      date: "2026",
      credentialUrl: "https://www.linkedin.com/in/ankit-srivastava-a65a23389",
      skills: ["Generative AI", "Digital Creative Tools", "NASSCOM FutureSkills", "Visual AI"],
      summary:
        "Industry-recognized credential under NASSCOM FutureSkills evaluating modern generative AI integration into digital workflows, media synthesis, and creative engineering.",
    },
    {
      id: "cert-niet-comm",
      title: "Professional Communication",
      issuer: "Noida Institute of Engineering and Technology (NIET)",
      category: "Professional",
      date: "2025",
      credentialUrl: "https://www.linkedin.com/in/ankit-srivastava-a65a23389",
      skills: ["Technical Documentation", "Professional Communication", "Stakeholder Presentation"],
      summary:
        "Institutional credential evaluating business writing, technical documentation rigor, cross-functional collaboration, and professional presentation standards.",
    },
  ] as Certificate[],

  codingStats: {
    leetcodeUsername: "Ankit2904",
    leetcodeUrl: "https://leetcode.com/u/Ankit2904/",
    totalSolved: 168,
    easy: 85,
    medium: 71,
    hard: 12,
    activeStreakDays: 35,
    acceptanceRate: "66.2%",
    ranking: "Top 17%",
    githubUsername: "ankit8567",
    githubUrl: "https://github.com/ankit8567",
    publicRepos: 12,
    totalContributions: 380,
  } as CodingStats,
};
