export type Project = {
  slug: string;
  title: string;
  description: string;
  category: "Web app" | "Website" | "API" | "Mobile app";
  year: string;
  role: string;
  tools: string[];
  image: string; // path in /public, e.g. "/projects/hostel-ballot.png"
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hostel-ballot-system",
    title: "Hostel Ballot System",
    description:
      "A balloting and accommodation management system that makes hostel allocation fair and transparent for students.",
    category: "Web app",
    year: "2026",
    role: "Front-end developer",
    tools: ["Next.js", "Tailwind CSS"],
    image: "/projects/hostel-ballot.png",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    slug: "academic-article-appraisal-system",
    title: "Academic Article & Appraisal System",
    description:
      "A platform for submitting academic articles and managing their review and appraisal.",
    category: "Web app",
    year: "2026",
    role: "[YOUR ROLE]",
    tools: ["[STACK USED]"],
    image: "/projects/article-appraisal.png",
    codeUrl: "#",
    featured: true,
  },
  {
    slug: "sports-app",
    title: "Sports App",
    description: "[One line on what it does and who it's for.]",
    category: "Mobile app",
    year: "2026",
    role: "[YOUR ROLE]",
    tools: ["[STACK USED]"],
    image: "/projects/sports-app.png",
    codeUrl: "#",
    featured: true,
  },
  {
    slug: "project-four",
    title: "[Project name]",
    description: "[One line on what it does and the stack behind it.]",
    category: "Website",
    year: "[YEAR]",
    role: "[YOUR ROLE]",
    tools: ["[STACK USED]"],
    image: "/projects/placeholder.png",
  },
];
