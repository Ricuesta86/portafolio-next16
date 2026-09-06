export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
}

export type ProjectCategory = 'frontend' | 'fullstack' | 'backend' | 'mobile';

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'database' | 'soft';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: ExperienceType;
}

export type ExperienceType = 'work' | 'education';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
