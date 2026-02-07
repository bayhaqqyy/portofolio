import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Project" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[var(--glass)] border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.span initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="font-semibold text-lg tracking-tight">
          Rafli.dev
        </motion.span>
        <div className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cyan-300 transition-colors">
              {l.label}
            </a>
          ))}
          <button onClick={onToggle} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
