import { projects } from "../data/content";

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-16 py-24 border-b border-line">
      <p className="font-mono text-xs tracking-widest text-amber uppercase mb-12">
        Selected work
      </p>

      <div className="space-y-px">
        {projects.map((p) => (
          <div
            key={p.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-line first:border-t-0 group"
          >
            <div className="md:col-span-1 font-mono text-sm text-muted">
              {p.id}
            </div>

            <div className="md:col-span-3">
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="font-mono text-xs text-muted mt-1">
                {p.role} — {p.year}
              </p>
            </div>

            <div className="md:col-span-5 space-y-2">
              <p className="text-sm text-paper/90">
                <span className="text-muted">Problem — </span>
                {p.problem}
              </p>
              <p className="text-sm text-paper/90">
                <span className="text-muted">Outcome — </span>
                {p.outcome}
              </p>
            </div>

            <div className="md:col-span-3 flex flex-wrap content-start gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2 py-1 border border-line text-muted"
                >
                  {s}
                </span>
              ))}
              {p.link && (
                <a
                  href={p.link}
                  className="font-mono text-xs text-teal hover:underline block mt-2"
                >
                  view →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
