import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
const Footer = () => (
  <footer className="relative mt-16 bg-[#030712] border-t border-white/5 pt-10">
    {/* Background Glows */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

    {/* Floating Newsletter Card */}
    <div className="max-w-7xl mx-auto px-6 -mt-20 mb-16 relative z-10">
      <div className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,27,75,0.95))' }}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="relative z-10 max-w-lg text-center md:text-left">
          <h4 className="font-display font-black text-white text-3xl mb-3">Join our <span className="gradient-text">Private List</span></h4>
          <p className="text-slate-400 text-base leading-relaxed">Be the first to know about off-market luxury listings, exclusive events, and the latest real estate market insights.</p>
        </div>
        
        <form
          className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto"
          onSubmit={e => { e.preventDefault(); e.target.reset(); import('react-hot-toast').then(m => m.default.success('Subscribed successfully!')); }}
        >
          <div className="relative flex-1 sm:w-80">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 whitespace-nowrap group">
            Subscribe <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="relative max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 z-10">
      
      {/* Brand & Socials */}
      <div className="md:col-span-4 flex flex-col gap-6">
        <h3 className="font-display font-black text-3xl text-white tracking-tight">
          Luxe<span className="gradient-text">Estates</span>
        </h3>
        <p className="text-slate-400 leading-relaxed max-w-sm">
          Redefining luxury real estate. Discover the world's most exclusive properties with our premier portfolio and unparalleled service.
        </p>
        <div className="flex gap-4 mt-2">
          {[
            { icon: <FaFacebook size={18} />, bg: 'hover:bg-blue-600' },
            { icon: <FaTwitter size={18} />, bg: 'hover:bg-sky-500' },
            { icon: <FaInstagram size={18} />, bg: 'hover:bg-pink-600' },
            { icon: <FaLinkedin size={18} />, bg: 'hover:bg-blue-700' }
          ].map((social, i) => (
            <button key={i} className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.bg} hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-lg`}>
              {social.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="md:col-span-2">
        <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Navigation</h4>
        <ul className="flex flex-col gap-4">
          {[['/', 'Home'], ['/properties', 'Properties'], ['/search', 'Advanced Search'], ['/favorites', 'Saved Homes']].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2">
        <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Company</h4>
        <ul className="flex flex-col gap-4">
          {[['/about', 'About Us'], ['/contact', 'Contact Us'], ['/terms', 'Terms of Service'], ['/privacy', 'Privacy Policy']].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="md:col-span-4">
        <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Contact Office</h4>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3 text-slate-400">
            <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">456 Luxury Avenue, Suite 900<br />Beverly Hills, CA 90210</p>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <Mail size={18} className="text-emerald-400 shrink-0" />
            <p className="text-sm">concierge@luxeestates.com</p>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <Phone size={18} className="text-purple-400 shrink-0" />
            <p className="text-sm">+1 (800) 123-4567</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="text-slate-500 text-xs font-medium">
          &copy; {new Date().getFullYear()} LuxeEstates. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs font-medium">
          Designed with uncompromising quality.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
