import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const scroll = () => setBlur(window.scrollY > 40);
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <nav className="navbar">
      <div className={`navbar-inner glass ${blur ? "blurred" : ""}`}>
        <h2 className="navbar-logo">ROBYTECH</h2>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}