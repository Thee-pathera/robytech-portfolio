import { profile } from "../data/content";

export default function Hero() {
  return (
    <header className="border-b-4 border-ink px-6 md:px-16 py-10 flex items-center justify-between flex-wrap gap-4">
      <div>
        <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
          {profile.brand}
          <span className="text-orange">.</span>
        </h1>
        <p className="font-mono text-xs text-muted mt-1 tracking-widest uppercase">
          {profile.name} — {profile.location}
        </p>
      </div>

      <div className="flex items-center gap-5">
        
          <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 group"
          title={profile.githubHandle}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-ink group-hover:text-orange transition-colors">
            <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.12.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.64-4.04-1.64-.55-1.44-1.34-1.82-1.34-1.82-1.09-.77.08-.75.08-.75 1.21.09 1.85 1.28 1.85 1.28 1.07 1.87 2.81 1.33 3.5 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.15 0-1.36.47-2.47 1.24-3.34-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.28a11.2 11.2 0 0 1 6 0c2.29-1.61 3.3-1.28 3.3-1.28.66 1.71.24 2.97.12 3.28.77.87 1.24 1.98 1.24 3.34 0 4.78-2.81 5.84-5.49 6.14.43.38.81 1.13.81 2.29 0 1.65-.02 2.98-.02 3.39 0 .33.22.72.83.6C20.57 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z"/>
          </svg>
        </a>
        
          <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs uppercase tracking-widest border-2 border-ink px-4 py-2 hover:bg-orange hover:border-orange hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
