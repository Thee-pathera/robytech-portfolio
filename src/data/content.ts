// Edit everything in this file — it's the only place you should need to touch
// for content changes. Components just render this data.

export const profile = {
  name: "Your Name",
  tagline: "I build [what] for [who].", // e.g. "I build booking systems for small service businesses"
  location: "Nairobi, Kenya",
  email: "you@example.com",
  github: "https://github.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourhandle",
};

export type Project = {
  id: string;
  title: string;
  role: string;
  problem: string;
  outcome: string;
  stack: string[];
  link?: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Project Name",
    role: "Primary developer",
    problem: "One sentence: what broke or was missing before this existed.",
    outcome: "One sentence: what changed as a result, ideally with a number.",
    stack: ["React", "TypeScript", "Supabase"],
    link: "",
    year: "2026",
  },
  {
    id: "02",
    title: "Project Name",
    role: "Primary developer",
    problem: "",
    outcome: "",
    stack: [],
    link: "",
    year: "2026",
  },
];

export const skills = [
  "TypeScript", "React", "Node.js", "PostgreSQL", "Python", "Vite",
];

export const about =
  "One or two paragraphs: background, how you got into building software, " +
  "what kind of problems you gravitate toward. The engineering/applied-math " +
  "background is a real differentiator — use it plainly, not as a badge.";
