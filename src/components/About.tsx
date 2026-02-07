import { motion } from "framer-motion";

const stats = [
  { label: "RHCSA / RHCSC / RHCE", value: "Red Hat Certified" },
  { label: "Cloud & Container", value: "Kubernetes, Docker" },
  { label: "Monitoring", value: "Prometheus, Grafana" }
];

export default function About() {
  return (
    <section id="about" className="space-y-8">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">
        About
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[var(--muted)] max-w-3xl">
        IT enthusiast dengan fokus Linux SysAdmin dan DevOps sejak SMK; pengalaman menjaga server sekolah, mengotomasi CI/CD,
        serta memonitor infrastruktur dengan Prometheus dan Grafana. Bersertifikasi RHCSA, RHCSC, dan RHCE. (rafly.my.id)
      </motion.p>
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card rounded-xl p-4"
          >
            <p className="text-sm text-[var(--muted)]">{s.label}</p>
            <p className="text-lg font-semibold">{s.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
