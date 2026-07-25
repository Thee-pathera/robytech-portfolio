import { profile } from "../data/content";

export default function Contact() {
  return (
    <section className="px-6 md:px-16 py-16 md:py-24 bg-ink text-white">
      <p className="font-mono text-xs tracking-widest text-orange uppercase mb-6">
        Get in touch
      </p>
      
        <a
        href={`mailto:${profile.email}`}
        className="font-display font-bold text-2xl md:text-4xl hover:text-orange transition-colors inline-block break-all"
      >
        {profile.email} →
      </a>

      <div className="flex items-center gap-6 mt-8 font-mono text-xs uppercase tracking-widest text-white/60">
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">
          GitHub
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        )}
      </div>

      <p className="font-mono text-xs text-white/40 mt-12">
        © {new Date().getFullYear()} {profile.brand} — {profile.name}
      </p>
    </section>
  );
}
