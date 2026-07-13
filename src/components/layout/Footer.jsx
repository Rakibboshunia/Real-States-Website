const Footer = () => (
  <footer className="relative mt-12 overflow-hidden" style={{ background: 'rgba(6,11,20,0.95)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
    {/* Glow orb */}
    <div className="orb w-96 h-96 -bottom-48 left-1/2 -translate-x-1/2" style={{ background: 'rgba(99,102,241,0.15)' }} />

    <div className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-display font-extrabold text-2xl mb-2 text-white">
          Luxe<span className="gradient-text">Estates</span>
        </h3>
        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
          Discover the world's most exclusive properties with our curated luxury portfolio.
        </p>
        <div className="flex gap-3 mt-5">
          {['Twitter', 'Instagram', 'LinkedIn'].map(s => (
            <button key={s} className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 transition-all text-xs font-bold border border-white/10">
              {s[0]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Quick Links</h4>
        <ul className="space-y-3">
          {[['/', 'Home'], ['/properties', 'Properties'], ['/search', 'Search'], ['/favorites', 'Favorites']].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-white hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Contact</h4>
        <div className="space-y-3 text-white/80 text-sm">
          <p>📍 123 Luxury Ave, NY 10001</p>
          <p>✉️ contact@luxeestates.com</p>
          <p>📞 +1 (555) 123-4567</p>
        </div>
        <button className="mt-5 btn-glow text-white text-sm font-semibold px-5 py-2.5 rounded-xl shine w-full">
          Schedule a Viewing
        </button>
      </div>
    </div>

    {/* Newsletter */}
    <div className="relative max-w-7xl mx-auto px-6 pb-6">
      <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(99,102,241,0.08))',
          border: '1px solid rgba(59,130,246,0.2)',
        }}>
        <div>
          <h4 className="font-display font-bold text-white text-xl mb-1">Stay in the Loop</h4>
          <p className="text-white/70 text-sm">Get the latest luxury listings delivered to your inbox.</p>
        </div>
        <form
          className="flex gap-2 w-full md:w-auto"
          onSubmit={e => { e.preventDefault(); e.target.reset(); alert('Subscribed! Thank you.'); }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-2.5 rounded-xl text-white placeholder-slate-500 outline-none text-sm flex-1 md:w-64"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
          />
          <button type="submit" className="btn-glow text-white font-semibold px-5 py-2.5 rounded-xl text-sm shine whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="border-t border-white/10 py-5 text-center text-white/50 text-xs">
      &copy; {new Date().getFullYear()} LuxeEstates. All rights reserved. Crafted with premium quality.
    </div>
  </footer>
);

export default Footer;
