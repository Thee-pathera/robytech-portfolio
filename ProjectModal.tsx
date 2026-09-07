import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, GitBranch, X } from "lucide-react";

type Props = {
  project: any;
  open: boolean;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && project && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,.75)",
              backdropFilter: "blur(14px)",
              zIndex: 999,
            }}
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: .9,
              y: 80,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .95,
            }}
            transition={{
              type: "spring",
              damping: 18,
            }}
            style={{
              position: "fixed",
              inset: "5%",
              overflow: "auto",
              zIndex: 1000,
            }}
          >
            <div
              className="glass"
              style={{
                padding: 40,
                borderRadius: 30,
              }}
            >
              <button
                onClick={onClose}
                className="btn btn-secondary"
                style={{
                  float: "right",
                }}
              >
                <X />
              </button>

              <img
                src={project.image}
                style={{
                  width: "100%",
                  borderRadius: 20,
                  marginBottom: 30,
                }}
              />

              <h1>{project.title}</h1>

              <p
                style={{
                  marginTop: 20,
                  fontSize: "1.1rem",
                }}
              >
                {project.problem}
              </p>

              <p
                style={{
                  marginTop: 20,
                }}
              >
                {project.outcome}
              </p>

              <div
                className="tech"
                style={{
                  marginTop: 35,
                }}
              >
                {project.stack.map((tech: string) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="project-buttons"
                style={{
                  marginTop: 40,
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  className="btn btn-primary"
                >
                  <ExternalLink />
                  &nbsp;Live Site
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="btn btn-secondary"
                >
                  <GitBranch />
                  &nbsp;GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}