import { motion } from 'framer-motion'
import { Code, Palette, Cpu, Zap, MonitorSmartphone, Database } from 'lucide-react'

const skills = [
  { icon: Code, title: 'Frontend', items: ['React', 'Tailwind', 'Framer Motion', 'Shadcn/Radix'] },
  { icon: Cpu, title: 'Backend', items: ['Node/Express', 'FastAPI', 'REST', 'Auth'] },
  { icon: Database, title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Prisma/Mongoose'] },
  { icon: Palette, title: 'Design', items: ['Figma', 'Systems', 'Micro‑interactions'] },
  { icon: Zap, title: 'Performance', items: ['Accessibility', 'Web Vitals', 'Caching'] },
  { icon: MonitorSmartphone, title: 'Responsive', items: ['Mobile‑first', 'Animations', '3D/Canvas'] },
]

function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Core Abilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 hover:border-pink-400/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-300"><s.icon size={20} /></div>
                <div>
                  <p className="font-semibold text-white mb-1">{s.title}</p>
                  <p className="text-sm text-slate-300/80">{s.items.join(' • ')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
