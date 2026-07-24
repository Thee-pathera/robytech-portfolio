import { profile } from "../data/content";

export default function Contact() {
  return (
    <section className="px-6 md:px-16 py-24">
      <p className="font-mono text-xs tracking-widest text-amber uppercase mb-6">
        Contact
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="font-display text-3xl md:text-5xl hover:text-amber transition-colors inline-block"
      >
        {profile.email} →
      </a>
      <p className="font-mono text-xs text-muted mt-8">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
