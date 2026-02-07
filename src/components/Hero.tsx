import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-12 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">System Engineer · DevOps</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">Rafli Abdul Bay Haqqy</h1>
        <p className="mt-4 text-[var(--muted)]">
          Mengautomasi infrastruktur, menjaga reliabilitas, dan menghadirkan delivery pipeline yang aman & cepat.
        </p>
        <div className="mt-6 flex gap-3">
          {[
            { icon: <Github />, href: "https://github.com/" },
            { icon: <Linkedin />, href: "https://www.linkedin.com" },
            { icon: <Mail />, href: "mailto:elhaqi921@gmail.com" }
          ].map((b) => (
            <a key={b.href} href={b.href} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              {b.icon}
            </a>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
        <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-cyan-400/30 to-indigo-500/25" />
        <div className="card relative rounded-2xl p-8">
          <p className="text-sm text-[var(--muted)]">Key Stack</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {["Linux", "Docker", "GitLab CI", "Ansible", "Grafana", "Kubernetes"].map((s) => (
              <span key={s} className="rounded-lg px-3 py-2 bg-white/5 border border-white/10">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
