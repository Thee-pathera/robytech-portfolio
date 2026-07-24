import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-body bg-ink min-h-screen">
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
