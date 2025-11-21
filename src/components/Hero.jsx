import { motion } from 'framer-motion'

function FloatingOrbs() {
  const orbs = [
    { size: 280, x: '-10%', y: '-10%', from: '#f472b6', to: '#60a5fa' },
    { size: 220, x: '70%', y: '10%', from: '#c084fc', to: '#22d3ee' },
    { size: 300, x: '20%', y: '60%', from: '#f472b6', to: '#a78bfa' },
  ]
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, delay: i * 0.15 }}
          className="absolute blur-3xl"
          style={{ left: o.x, top: o.y }}
        >
          <div
            className="rounded-full opacity-60"
            style={{
              width: o.size,
              height: o.size,
              background: `radial-gradient(circle at 30% 30%, ${o.from}, ${o.to})`,
              filter: 'blur(30px)'
            }}
          />
        </motion.div>
      ))}

      {/* Scanline + vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:100%_2px] mix-blend-overlay opacity-40" />
      <div className="absolute inset-0 ring-1 ring-white/5 rounded-[2rem]" />
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center justify-center">
      <FloatingOrbs />

      <div className="relative px-6 md:px-10 py-24 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-200 mb-5">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide uppercase">Anime themed • Ultra smooth</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
              Frontend Enthusiast turned Full‑Stack Explorer
            </h1>
            <p className="mt-5 text-slate-200/90 text-lg max-w-prose">
              I craft interfaces with cinematic motion and build systems that feel alive. Dive into a portfolio that blends anime aesthetics with production‑ready engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.55)] transition-all">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition-all">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ rotate: -8, scale: 0.96, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 80, damping: 14 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1600&auto=format&fit=crop"
                alt="Anime inspired city night skyline"
                className="w-full h-[360px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-fuchsia-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950/80 to-transparent">
                <p className="text-sm text-pink-200/90">Design • Motion • DX</p>
                <p className="text-white font-semibold">A portfolio with studio‑quality vibes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
