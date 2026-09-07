import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#2563eb 0%,rgba(37,99,235,0) 70%)",
          filter: "blur(120px)",
          opacity: .25,
          top: -200,
          right: -150,
          zIndex: -2,
        }}
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#06b6d4 0%,rgba(6,182,212,0) 70%)",
          filter: "blur(120px)",
          opacity: .18,
          bottom: -180,
          left: -150,
          zIndex: -2,
        }}
      />
    </>
  );
}