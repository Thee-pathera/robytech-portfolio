// ============================================
// EDIT EVERYTHING BELOW to change site content.
// Components just render this data.
// ============================================

export const profile = {
  brand: "ROBY TECH",
  name: "Philip Mbeta",
  location: "Nairobi, Kenya",
  email: "admin.robytech@gmail.com",
  github: "https://github.com/Thee-pathera",
  githubHandle: "Thee-pathera",
  linkedin: "https://www.linkedin.com/in/p-mbeta-b040292b1",
};

export type Project = {
  id: string;
  title: string;
  role: string;
  problem: string;
  outcome: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Brass Harmony",
    role: "Sole developer",
    problem: "Client had an online presence but no official, structured way to interact with clients and students.",
    outcome: "Built booking, lessons, events, and messaging — interactions moved from ad hoc contact to a real system.",
    stack: ["React", "TypeScript", "Vite", "Supabase"],
    link: "https://brass-harmony-trombonist-site.vercel.app/",
  },
  {
    id: "02",
    title: "Iron Addicts Gym",
    role: "Sole developer",
    problem: "Client (a strength/powerlifting gym in Embakasi, Nairobi) had no site at all.",
    outcome: "Shipped a full site covering programs, coaches, membership tiers, and location — a professional presence where there was none.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    link: "https://iron-addicts-gym.vercel.app/",
  },
];
