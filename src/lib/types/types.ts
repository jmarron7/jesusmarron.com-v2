export type Experience = {
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  startDate: string;
  endDate: string;
  tech: string[];
}

export type Project = {
  title: string;
  imagePath: string;
  description: string;
  tech: string[];
  repoLink?: string;
  demoLink?: string;
}

export type BlogPost = {
	title: string;
	date: string;
	slug: string;
  tldr: string;
	tags: string[];
};

export type MarkdownModule = {
  metadata: {
    title: string;
    date: string;
    slug: string;
    tldr: string;
    tags: string[];
  };
  default: any;
};