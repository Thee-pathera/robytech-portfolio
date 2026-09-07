import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/content";
import ProjectModal from "./ProjectModal";

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="work"
      style={{
        padding: "120px 8%",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span
          style={{
            color: "#60A5FA",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontSize: ".8rem",
          }}
        >
          Portfolio
        </span>

        <h2
          style={{
            fontSize: "3rem",
            marginTop: "12px",
            marginBottom: "18px",
          }}
        >
          Selected <span className="gradient-text">Projects</span>
        </h2>

        <p
          style={{
            maxWidth: "650px",
            marginBottom: "70px",
            color: "#94A3B8",
          }}
        >
          Projects focused on performance, clean architecture and modern user
          experiences.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
          gap: "35px",
        }}
      >
        {projects.map((project, index) => (
          <Tilt
            key={project.id}
            glareEnable
            glareMaxOpacity={0.25}
            scale={1.03}
            perspective={2000}
          >
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass hover-card"
              onClick={() => setSelected(project)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);

                e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
              }}
              style={{
                padding: "30px",
                position: "relative",
                overflow: "hidden",
              }}
            >
            {project.featured && (
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "#2563eb",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                Featured
              </div>
            )}

            {/* Glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top right, rgba(59,130,246,.25), transparent 60%)",
                pointerEvents: "none",
              }}
            />

            <div className="image-wrapper">
              <img
              src={project.image || `/projects/${project.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "")}.png`}
              className="project-image"
              alt={`${project.title} project preview`}
            />
            </div>

            {/* Browser bar */}
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 25,
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: "#ef4444",
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: "#f59e0b",
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: "#22c55e",
                }}
              />
            </div>

            <h3
              style={{
                fontSize: "2rem",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "#60A5FA",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              {project.role}
            </p>

            <p style={{ marginBottom: "16px" }}>{project.problem}</p>

            <p
              style={{
                marginBottom: "30px",
                color: "#CBD5E1",
              }}
            >
              {project.outcome}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "35px",
              }}
            >
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="glass"
                  style={{
                    padding: "8px 14px",
                    fontSize: ".8rem",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: "18px",
                alignItems: "center",
              }}
            >
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={18} />
                  &nbsp;Live Demo
                </a>
              )}

              <button className="btn btn-secondary">
                <GitBranch size={18} />
              </button>

              <ArrowUpRight
                size={28}
                style={{
                  marginLeft: "auto",
                  color: "#60A5FA",
                }}
              />
            </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      <ProjectModal
        project={selected}
        open={selected !== null}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}