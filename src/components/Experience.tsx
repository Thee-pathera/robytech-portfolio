import { motion } from "framer-motion";
import "../styles/experience.css";

const timeline = [
  {
    year: "2024",
    title: "Started Web Development",
    text: "Began learning HTML, CSS and JavaScript while exploring modern web development.",
  },
  {
    year: "2025",
    title: "Engineering Studies",
    text: "Expanded my problem-solving skills through engineering while continuing to build projects.",
  },
  {
    year: "2026",
    title: "Freelance Development",
    text: "Started designing and developing websites for businesses with a focus on performance and user experience.",
  },
  {
    year: "Now",
    title: "Building Better Products",
    text: "Focused on creating polished, modern web applications using React, TypeScript and modern tooling.",
  },
];

export default function Experience() {
  return (
    <section className="timeline-section" id="experience">
      <div className="timeline-header">
        <p>JOURNEY</p>
        <h2>Experience Timeline</h2>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot" />

            <div className="glass timeline-card">
              <span className="year">{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}