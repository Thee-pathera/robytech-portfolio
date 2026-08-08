import { useEffect, useState } from "react";

export default function Navbar() {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const scroll = () => setBlur(window.scrollY > 40);

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(1100px,92%)",
        zIndex: 1000,
      }}
    >
      <div
        className="glass"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 28px",
          backdropFilter: blur ? "blur(24px)" : "blur(12px)",
        }}
      >
        <h2 style={{ fontSize: "1.2rem" }}>
          <span className="gradient-text">ROBYTECH</span>
        </h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <a href="#home">Home</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}