import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" onClick={(e)=>handleNavClick(e,'#top')} className="relative inline-flex items-center gap-2">
            <span className="relative text-xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]">AnimeDev</span>
            </span>
            <span className="hidden sm:block text-xs text-pink-200/80 font-semibold uppercase tracking-[0.2em]">Portfolio</span>
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e)=>handleNavClick(e,l.href)}
                  className="text-sm text-slate-200/90 hover:text-white transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-pink-400/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform"/>
                </a>
              ))}
            </div>
            <button className="md:hidden text-slate-100" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 bg-slate-900/70">
            {links.map((l)=>(
              <a
                key={l.href}
                href={l.href}
                onClick={(e)=>handleNavClick(e,l.href)}
                className="block text-slate-200/90 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
