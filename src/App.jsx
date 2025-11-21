import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-pink-500/30">
      {/* Gradient backdrop */}
      <div aria-hidden className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute inset-0 opacity-[0.15] mix-blend-screen bg-[radial-gradient(60%_60%_at_50%_-10%,#f472b6_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-screen bg-[radial-gradient(60%_60%_at_60%_120%,#60a5fa_0%,transparent_60%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative py-20">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_0%,rgba(96,165,250,0.10),transparent)]" />
          <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
              <p className="text-slate-300/90 leading-relaxed">
                I’m a frontend enthusiast who loves pushing interfaces beyond typical websites. I build with an anime vibe: bold color, fluid motion, and narrative flow. On the full‑stack side, I design resilient APIs and data models so the experience scales gracefully.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-sm text-slate-300/80">
                Currently exploring WebGL, headless CMS integrations, and ways to make dev tools feel as delightful as the apps they create.
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400/80">
        <p>© {new Date().getFullYear()} AnimeDev — Crafted with passion and a hint of sakura.</p>
      </footer>
    </div>
  )
}

export default App
