import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Board',
    description: 'Realtime kanban with buttery‑smooth drag and drop.',
    image: 'https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?q=80&w=1600&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'Sakura UI',
    description: 'A component system inspired by anime OS aesthetics.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'Mecha Docs',
    description: 'Docs engine with focus, speed and delightful motion.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    url: '#'
  }
]

function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <a href="#" className="text-sm text-pink-300 hover:text-pink-200">More soon</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 hover:border-indigo-400/40"
            >
              <img src={p.image} alt="" className="h-56 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold">{p.title}</p>
                <p className="text-slate-300/90 text-sm">{p.description}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-pink-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit <ExternalLink size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
