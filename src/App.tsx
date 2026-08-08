import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />

      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </>
  );
}