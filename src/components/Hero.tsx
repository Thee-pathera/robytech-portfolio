import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import { profile } from "../data/content";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1.1fr .9fr",
        alignItems: "center",
        maxWidth: "1300px",
        margin: "auto",
        padding: "120px 8%",
        gap: "80px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .9 }}
      >
        <div className="glass"
          style={{
            display: "inline-flex",
            padding: "10px 18px",
            marginBottom: 30,
            borderRadius: 999,
          }}
        >
          🟢 {profile.availability}
        </div>

        <h1>
          Building
          <br />
          <span className="gradient-text">
            digital experiences
          </span>
          <br />
          people remember.
        </h1>

        <p
          style={{
            marginTop: 30,
            fontSize: "1.1rem",
            maxWidth: 620,
          }}
        >
          I design and build high-performance websites and web
          applications with a strong focus on speed, user experience,
          and modern design.
        </p>

        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 40,
          }}
        >
          <a href="#work" className="btn btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <div
          className="glass"
          style={{
            padding: 20,
            borderRadius: 35,
          }}
        >
          <img
            src={hero}
            style={{
              width: "100%",
              borderRadius: 25,
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <div>
              <h3>{profile.name}</h3>
              <p>{profile.title}</p>
            </div>

            <ArrowDownRight size={36}/>
          </div>
        </div>
      </motion.div>
    </section>
  );
}