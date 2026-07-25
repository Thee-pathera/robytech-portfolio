import { projects } from "../data/content";

const accents = ["orange", "green"];

export default function Work() {
  return (
    <section className="px-6 md:px-16 py-16 md:py-24">
      <p className="font-mono text-xs tracking-widest text-muted uppercase mb-10">
        Selected work
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => {
          const accent = accents[i % accents.length];
          return (
            <div
              key={p.id}
              className={`border-2 border-ink p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform ${
                accent === "orange" ? "hover:border-orange" : "hover:border-green"
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display font-bold text-2xl md:text-3xl">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs text-muted">{p.id}</span>
                </div>

                <p className="font-mono text-xs text-muted uppercase tracking-wide mb-4">
                  {p.role}
                </p>

                <p className="text-sm text-ink/80 mb-3">{p.problem}</p>
                <p className="text-sm text-ink/80 mb-6">{p.outcome}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-2 py-1 border border-line text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {p.link && (
                
                  <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`font-mono text-xs uppercase tracking-widest font-bold ${
                    accent === "orange" ? "text-orange" : "text-green"
                  } hover:underline`}
                >
                  View live →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
