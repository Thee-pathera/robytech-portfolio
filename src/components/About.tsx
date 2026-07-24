import { about } from "../data/content";

export default function About() {
  return (
    <section className="px-6 md:px-16 py-24 border-b border-line max-w-3xl">
      <p className="font-mono text-xs tracking-widest text-amber uppercase mb-6">
        About
      </p>
      <p className="font-body text-lg leading-relaxed text-paper/90 whitespace-pre-line">
        {about}
      </p>
    </section>
  );
}
