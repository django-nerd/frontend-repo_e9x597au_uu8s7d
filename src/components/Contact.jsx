import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise(r=>setTimeout(r,900))
    setStatus('Thanks! Your message has been sent.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let’s Collaborate</h2>
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400/40" />
            <input required type="email" name="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400/40" />
          </div>
          <input name="subject" placeholder="Subject" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400/40" />
          <textarea required name="message" rows="5" placeholder="Tell me about your idea..." className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400/40" />
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold">Send</button>
            <span className="text-sm text-slate-300/80">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
