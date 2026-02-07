import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">
        Contact
      </motion.h2>
      <div className="card rounded-2xl p-6 grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-[var(--muted)]">Siap membantu meningkatkan keandalan infrastruktur Anda.</p>
          <p className="mt-2 font-semibold">elhaqi921@gmail.com</p>
          <p className="text-sm text-[var(--muted)]">LinkedIn & Instagram tersedia di hero.</p>
        </div>
        <form className="grid gap-3">
          <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Nama" />
          <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Email" />
          <textarea className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 h-24" placeholder="Pesan" />
          <button className="bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-lg py-2 font-semibold text-slate-900">Kirim</button>
        </form>
      </div>
    </section>
  );
}
