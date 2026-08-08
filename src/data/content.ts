import brassHarmony from "../assets/projects/brass-harmony.png";
import ironAddicts from "../assets/projects/iron-addicts.png";

export const profile = {
  brand: "ROBYTECH",
  name: "Philip Mbeta",
  title: "Full Stack Developer",
  tagline: "Building modern digital experiences.",
  location: "Nairobi, Kenya",

  email: "admin.robytech@gmail.com",

  github: "https://github.com/Thee-pathera",
  githubHandle: "Thee-pathera",

  linkedin: "https://www.linkedin.com/in/p-mbeta-b040292b1",

  availability: "Available for Freelance",
};

export type Project = {
  id: string;
  title: string;
  role: string;
  year: string;
  category: string;
  featured: boolean;

  problem: string;
  outcome: string;

  stack: string[];

  image?: string;

  github?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "01",

    title: "Brass Harmony",

    role: "Full Stack Developer",

    year: "2026",

    category: "Music",

    featured: true,

    problem:
      "The client lacked a professional platform where students could book lessons, explore events, and contact the instructor.",

    outcome:
      "Designed and developed a responsive platform with lesson booking, event management, and a polished user experience.",

    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Framer Motion",
    ],

    github: "https://github.com/Thee-pathera",

    image: brassHarmony,

    link: "https://brass-harmony-trombonist-site.vercel.app/",
  },

  {
    id: "02",

    title: "Iron Addicts Gym",

    role: "Frontend Developer",

    year: "2026",

    category: "Fitness",

    featured: true,

    problem:
      "The gym had no online presence, making it difficult for potential members to discover programs or membership options.",

    outcome:
      "Created a modern website showcasing coaches, training programs, pricing, and contact information to establish a professional online identity.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],

    github: "https://github.com/Thee-pathera",

    image: ironAddicts,

    link: "https://iron-addicts-gym.vercel.app/",
  },
];