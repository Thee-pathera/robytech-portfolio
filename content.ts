const brassHarmony = "/projects/brass-harmony.png";
const ironAddicts = "/projects/iron-addicts-gym.png";

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

    title: "W Collections",

    role: "Full Stack Developer",

    year: "2026",

    category: "E-commerce / Local Business",

    featured: true,

    problem:
      "W Collections needed a modern mobile-first storefront that could showcase changing thrift inventory, guide shoppers through categories, and turn online interest into real store visits and enquiries.",

    outcome:
      "Designed and developed a responsive fashion shopping experience with inventory-based category browsing, limited-time offers, WhatsApp enquiries, local SEO, structured data, analytics, and a polished mobile-first interface.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "SEO",
      "Google Analytics",
      "Vercel",
    ],

    github: "https://github.com/Thee-pathera",

    image: "/projects/w-collections.png",

    link: "https://w-collections.vercel.app/",
  },

  {
    id: "02",

    title: "Brass Harmony",

    role: "Full Stack Developer",

    year: "2026",

    category: "Music",

    featured: false,

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
    id: "03",

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