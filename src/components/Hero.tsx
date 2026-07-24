import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 border-b border-line overflow-hidden">
      {/* faint blueprint grid, signature texture for the whole site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#E7E5DE 1px, transparent 1px), linear-gradient(90deg, #E7E5DE 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <p className="font-mono text-xs tracking-widest text-amber uppercase mb-6">
        {profile.location} — available for work
      </p>

      <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
        {profile.tagline}
      </h1>

      <div className="mt-10 flex items-center gap-6 font-mono text-sm text-muted">
        <a href={`mailto:${profile.email}`} className="hover:text-paper transition-colors">
          {profile.email}
        </a>
        <span className="text-line">/</span>
        <a href={profile.github} className="hover:text-paper transition-colors">
          github
        </a>
        <span className="text-line">/</span>
        <a href={profile.linkedin} className="hover:text-paper transition-colors">
          linkedin
        </a>
      </div>
    </section>
  );
}
