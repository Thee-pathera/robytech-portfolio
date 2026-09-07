import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import hero from "../assets/hero.png";
import { profile } from "../data/content";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-badge">
          <span className="hero-dot"></span>
          {profile.availability}
        </div>

        <h1 className="hero-title">
          Building
          <br />
          <span className="gradient-text">digital experiences</span>
          <br />
          people remember.
        </h1>

        <p className="hero-description">
          I design and build high-performance websites and web applications
          focused on speed, usability and premium user experiences.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="btn btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-card"
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <img src={hero} className="hero-image" alt={profile.name} />

        <div className="hero-card-footer">
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.title}</p>
          </div>

          <ArrowDownRight size={34} />
        </div>
      </motion.div>
    </section>
  );
}