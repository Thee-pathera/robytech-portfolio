import { motion } from "framer-motion";

const tech = [
  "React",
  "TypeScript",
  "Vite",
  "JavaScript",
  "Node.js",
  "Express",
  "Supabase",
  "PostgreSQL",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "Figma",
  "Docker",
];

export default function TechStack() {
  const items = [...tech, ...tech];

  return (
    <section
      style={{
        overflow: "hidden",
        padding: "70px 0",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          display: "flex",
          gap: "20px",
          width: "max-content",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="glass"
            style={{
              padding: "18px 30px",
              borderRadius: "999px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              fontSize: "1rem",
            }}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  );
}