export type Locale = "en" | "my";
export type Theme = "light" | "dark";

export type TechCategoryKey =
  | "mobile"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "ai"
  | "design";

export interface EducationDocument {
  label: string;
  url: string;
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  verified?: boolean;
  grade?: string;
  awardBody?: string;
  issuedDate?: string;
  documents?: EducationDocument[];
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiency: number;
}

export interface ProjectImage {
  url: string;
  caption: string;
}

export interface AppLink {
  name: string;
  url: string;
  description?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  highlights: string[];
  images?: ProjectImage[];
  apps?: AppLink[];
}

export interface AiMilestone {
  period: string;
  title: string;
  description: string;
  tools: string[];
}

export interface AiToolItem {
  name: string;
  description: string;
}

export interface Translations {
  ui: {
    availableForOpportunities: string;
    downloadCv: string;
    profile: string;
    profileSubtitle: string;
    education: string;
    educationSubtitle: string;
    skills: string;
    skillsSubtitle: string;
    languages: string;
    languagesSubtitle: string;
    experience: string;
    experienceSubtitle: string;
    aiTools: string;
    aiToolsSubtitle: string;
    aiJourney: string;
    aiToolkit: string;
    techStack: string;
    technologies: string;
    verified: string;
    viewDocument: string;
    issued: string;
    allRightsReserved: string;
    open: string;
    close: string;
    closeViewer: string;
    projectGallery: string;
    viewImage: string;
    previousImage: string;
    nextImage: string;
    publishedApps: string;
    viewOnPlayStore: string;
    viewGitHub: string;
    githubRepos: string;
    lightTheme: string;
    darkTheme: string;
    switchToEnglish: string;
    switchToMyanmar: string;
    techCategories: Record<TechCategoryKey, string>;
  };
  cv: {
    name: string;
    title: string;
    contact: {
      address: string;
      phone: string;
      email: string;
      github: string;
      githubUsername: string;
    };
    profile: string[];
    education: EducationItem[];
    skills: string[];
    languages: LanguageItem[];
    experience: ExperienceItem[];
    aiWorkflow: {
      summary: string;
      milestones: AiMilestone[];
      tools: AiToolItem[];
    };
  };
}
