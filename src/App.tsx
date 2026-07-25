import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";

function BackgroundShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 1600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="1220" cy="140" r="260" fill="#FF5A1F" opacity="0.10" />
        <circle cx="120" cy="520" r="170" fill="none" stroke="#1B7A43" strokeWidth="2" opacity="0.35" />
        <rect x="980" y="520" width="220" height="220" fill="#1B7A43" opacity="0.08" transform="rotate(18 1090 630)" />
        <polygon points="60,900 260,900 160,1090" fill="#FF5A1F" opacity="0.12" />
        <circle cx="1300" cy="980" r="90" fill="none" stroke="#FF5A1F" strokeWidth="2" opacity="0.35" />
        <rect x="140" y="1180" width="160" height="160" fill="none" stroke="#141414" strokeWidth="1.5" opacity="0.15" transform="rotate(12 220 1260)" />
        <circle cx="760" cy="1420" r="210" fill="#1B7A43" opacity="0.07" />
        <circle cx="1360" cy="1500" r="16" fill="#FF5A1F" opacity="0.5" />
        <circle cx="60" cy="80" r="10" fill="#1B7A43" opacity="0.5" />
      </svg>
    </div>
  );
}

function App() {
  return (
    <div className="relative font-body bg-paper min-h-screen text-ink overflow-hidden">
      <BackgroundShapes />
      <Hero />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
