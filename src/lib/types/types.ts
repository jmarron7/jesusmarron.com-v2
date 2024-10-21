export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  startDate: string;
  endDate: string;
  tech: string[];
}

export interface Project {
  title: string;
  imagePath: string;
  description: string;
  tech: string[];
  repoLink?: string;
  demoLink?: string;
}
