import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  return (
    <div className="animate-fade-in min-h-screen pb-20">
      {/* Header */}
      <div className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="orb w-96 h-96 top-0 left-1/2 -translate-x-1/2 bg-blue-500/10 blur-[100px] absolute rounded-full mix-blend-screen" />
        <p className="text-blue-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4 relative z-10">✦ Get In Touch</p>
        <h1 className="font-display font-black text-white text-4xl md:text-6xl mb-6 relative z-10">
          Contact <span className="gradient-text">Our Team</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto relative z-10">
          Whether you're looking to buy, sell, or simply explore the market, our luxury real estate experts are here to assist you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="flex flex-col gap-8">
          {[
            { icon: <MapPin className="text-blue-400" size={24} />, title: 'Our Office', desc: '456 Luxury Avenue, Beverly Hills, CA 90210' },
            { icon: <Phone className="text-emerald-400" size={24} />, title: 'Phone', desc: '+1 (800) 123-4567\nMon-Fri from 9am to 6pm.' },
            { icon: <Mail className="text-purple-400" size={24} />, title: 'Email', desc: 'concierge@luxeestates.com\nWe reply within 24 hours.' }
          ].map((item, i) => (
            <div key={i} className="glass rounded-2xl p-8 flex items-start gap-6 border border-white/5 hover:border-white/20 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 shadow-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 whitespace-pre-line leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full mix-blend-screen" />
          
          <h2 className="font-display font-bold text-2xl text-white mb-6 relative z-10">Send a Message</h2>
          <form className="relative z-10 flex flex-col gap-5" onSubmit={e => { e.preventDefault(); toast.success('Message sent! We will reply soon.'); e.target.reset(); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">First Name</label>
                <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">Last Name</label>
                <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="Doe" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">Email Address</label>
              <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="john@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea rows="4" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className="btn-glow mt-4 text-white font-bold px-8 py-4 rounded-xl text-base shine flex items-center justify-center gap-2 group">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
