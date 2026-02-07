import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="card rounded-2xl p-5"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-[var(--muted)]">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
              {p.stack.map((s) => (
                <span key={s} className="px-2 py-1 rounded bg-white/5 border border-white/10">
                  {s}
                </span>
              ))}
            </div>
            <a href={p.link} className="inline-block mt-4 text-sm text-cyan-300 hover:text-cyan-200">
              Detail →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
