import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Wrench,
} from "lucide-react";
import "../styles/skills.css";

const groups = [
  {
    icon: <Globe size={28} />,
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },
  {
    icon: <Database size={28} />,
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    icon: <Wrench size={28} />,
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Docker",
    ],
  },
  {
    icon: <Code2 size={28} />,
    title: "Other",
    skills: [
      "Responsive Design",
      "REST APIs",
      "SEO",
      "Performance",
      "UI/UX",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>MY TOOLKIT</p>

        <h2>
          Technologies I <span>Work With</span>
        </h2>
      </motion.div>

      <div className="skills-grid">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            className="skill-card glass"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">
              {group.icon}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}