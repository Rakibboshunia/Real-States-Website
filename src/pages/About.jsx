import React from 'react';
import { Target, Users, Award, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Luxury Properties', value: '2k+' },
    { label: 'Happy Clients', value: '10k+' },
    { label: 'Awards Won', value: '50+' },
  ];

  return (
    <div className="animate-fade-in min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b14]/90 via-[#060b14]/70 to-[#060b14]"></div>
        
        {/* Animated orbs */}
        <div className="orb w-96 h-96 top-0 left-0 bg-blue-500/20 blur-[100px] absolute rounded-full mix-blend-screen" />
        <div className="orb w-96 h-96 bottom-0 right-0 bg-purple-500/20 blur-[100px] absolute rounded-full mix-blend-screen" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">✦ Our Story</p>
          <h1 className="font-display font-black text-white text-5xl md:text-7xl mb-6">
            Redefining <span className="gradient-text">Luxury Real Estate</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            At LuxeEstates, we don't just sell properties; we curate lifestyles. With a legacy of excellence and a portfolio of the world's most exclusive homes, we are the premier destination for discerning buyers and sellers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-6 mb-24">
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-black text-4xl md:text-5xl gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-white text-3xl md:text-5xl mb-4">
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We operate on a strict set of principles that ensure every client receives unparalleled service. These values are the foundation of our success and the reason clients trust us with their most valuable assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Target className="w-8 h-8 text-blue-400" />, title: 'Excellence', desc: 'We strive for perfection in every transaction.' },
            { icon: <Users className="w-8 h-8 text-purple-400" />, title: 'Client First', desc: 'Your needs and desires are our top priority.' },
            { icon: <Shield className="w-8 h-8 text-emerald-400" />, title: 'Integrity', desc: 'Transparency and honesty in all we do.' },
            { icon: <Award className="w-8 h-8 text-amber-400" />, title: 'Innovation', desc: 'Pioneering new ways to market luxury homes.' }
          ].map((val, i) => (
            <div key={i} className="glow-border shine rounded-2xl p-8 bg-white/[0.02] border border-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-lg border border-white/10">
                {val.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{val.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 mb-16">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-white text-3xl md:text-5xl mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to know about buying or selling luxury properties with LuxeEstates.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { q: 'How do I schedule a private viewing?', a: 'You can schedule a private viewing by contacting our concierge team directly or using the "Contact Agent" form on any specific property page. Our team will arrange a time that suits your schedule.' },
            { q: 'Do you handle international transactions?', a: 'Yes. We have a dedicated global team experienced in handling complex cross-border transactions, ensuring all legal and tax implications are expertly managed.' },
            { q: 'Are all your properties publicly listed?', a: 'No. Approximately 40% of our ultra-luxury portfolio is held off-market for privacy reasons. We recommend joining our Private List to gain access to these exclusive listings.' },
            { q: 'What is the standard commission rate?', a: 'Commission rates vary depending on the location and the specific nature of the transaction. Please speak with one of our expert agents for a tailored consultation.' }
          ].map((faq, i) => (
            <div key={i} className="glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all">
              <h4 className="font-bold text-lg text-white mb-3 flex items-start gap-3">
                <span className="text-blue-500 font-black">Q.</span> {faq.q}
              </h4>
              <p className="text-slate-400 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
