import { skills } from "../data/content";

export default function Skills() {
  return (
    <section className="px-6 md:px-16 py-16 border-b border-line">
      <p className="font-mono text-xs tracking-widest text-amber uppercase mb-6">
        Stack
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {skills.map((s) => (
          <span key={s} className="font-display text-xl text-paper/80">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
