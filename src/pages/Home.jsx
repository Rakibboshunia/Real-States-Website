import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { properties, agents } from '../data/mockData';
import PropertyCard from '../components/PropertyCard';
import { Star, ArrowRight } from 'lucide-react';

const featureBlocks = [
  {
    icon: '🏆',
    title: 'Premium Listings',
    desc: 'Access to off-market and exclusive luxury properties worldwide.',
    glow: 'rgba(59,130,246,0.3)',
    border: 'rgba(59,130,246,0.3)',
  },
  {
    icon: '🤝',
    title: 'Expert Agents',
    desc: 'Our top-tier agents provide personalized service and deep market insights.',
    glow: 'rgba(139,92,246,0.3)',
    border: 'rgba(139,92,246,0.3)',
  },
  {
    icon: '⚡',
    title: 'Seamless Process',
    desc: 'From viewing to closing, we handle every detail with discretion.',
    glow: 'rgba(16,185,129,0.3)',
    border: 'rgba(16,185,129,0.3)',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const featured = properties.filter(p => p.featured).slice(0, 3);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="animate-fade-in">

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image + overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,11,20,0.9) 0%, rgba(6,11,20,0.7) 50%, rgba(6,11,20,0.85) 100%)' }} />

        {/* Animated orbs */}
        <div className="orb w-[500px] h-[500px] top-0 -left-40" style={{ background: 'rgba(59,130,246,0.2)' }} />
        <div className="orb w-[400px] h-[400px] bottom-0 right-0" style={{ background: 'rgba(139,92,246,0.15)', animationDelay: '2s' }} />
        <div className="orb w-[300px] h-[300px] top-1/2 left-1/2" style={{ background: 'rgba(16,185,129,0.1)', animationDelay: '4s' }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center py-20">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-blue-300 font-medium mb-8 border border-blue-500/30"
            style={{ boxShadow: '0 0 20px rgba(59,130,246,0.2)' }}>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            500+ Luxury Properties Available
          </div>

          <h1 className="font-display font-black text-white mb-6 leading-[1.05]" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Discover Your
            <br />
            <span className="gradient-text">Dream Home</span>
          </h1>

          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            The world's most exclusive properties, curated for those who demand nothing but the finest.
          </p>

          {/* 3D Search bar */}
          <form onSubmit={handleSearch}
            className="glass rounded-2xl p-2.5 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto mb-10"
            style={{ boxShadow: '0 0 40px rgba(59,130,246,0.2), 0 20px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(59,130,246,0.3)' }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="🔍  Search by city, neighborhood..."
              className="flex-1 bg-transparent outline-none px-4 py-3 text-white placeholder-slate-500 text-base"
            />
            <button type="submit"
              className="btn-glow text-white font-bold px-8 py-3 rounded-xl text-sm shine whitespace-nowrap">
              Explore Properties
            </button>
          </form>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 stagger">
            {[['500+', 'Luxury Listings'], ['$2B+', 'Total Sales'], ['120+', 'Expert Agents'], ['98%', 'Client Satisfaction']].map(([val, label]) => (
              <div key={label} className="glass rounded-2xl px-6 py-4 text-center animate-fade-in"
                style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                <div className="font-display font-black text-3xl gradient-text">{val}</div>
                <div className="text-slate-400 text-xs mt-1 font-medium tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to bottom, transparent, #060b14)' }} />
      </section>

      {/* ─── FEATURED PROPERTIES ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Handpicked For You</p>
          <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Featured <span className="gradient-text">Properties</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">Exceptional homes chosen by our luxury real estate experts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {featured.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>

        <div className="text-center mt-14">
          <a href="/properties"
            className="inline-flex items-center gap-2 font-semibold px-10 py-4 rounded-2xl text-white transition-all duration-300 shine"
            style={{ border: '1px solid rgba(99,102,241,0.5)', background: 'rgba(99,102,241,0.1)' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.5)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View All Properties →
          </a>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────── */}
      <section className="relative py-16 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060b14 0%, #080f1e 50%, #060b14 100%)' }}>
        <div className="orb w-96 h-96 top-0 left-1/4" style={{ background: 'rgba(99,102,241,0.1)' }} />
        <div className="orb w-80 h-80 bottom-0 right-1/4" style={{ background: 'rgba(16,185,129,0.08)' }} />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="text-emerald-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Our Promise</p>
          <h2 className="font-display font-black text-white mb-10" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Why Choose <span className="gradient-text">LuxeEstates</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureBlocks.map(({ icon, title, desc, glow, border }) => (
              <div key={title}
                className="glow-border shine rounded-2xl p-8 text-left group cursor-default"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                  border: `1px solid ${border}`,
                  boxShadow: `0 10px 40px rgba(0,0,0,0.4)`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) rotateX(2deg)';
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${glow}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)';
                }}
              >
                <div className="text-4xl mb-4 float">{icon}</div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────── */}
      <section className="relative py-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #060b14 0%, #07101f 50%, #060b14 100%)' }}>
        <div className="orb w-80 h-80 top-0 left-10" style={{ background: 'rgba(59,130,246,0.1)' }} />
        <div className="orb w-80 h-80 bottom-0 right-10" style={{ background: 'rgba(16,185,129,0.08)' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-violet-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Simple Steps</p>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">Find your perfect property in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative stagger">
            {/* connector line */}
            <div className="hidden md:block absolute top-12 left-1/3 w-1/3 border-t-2 border-dashed" style={{ borderColor: 'rgba(99,102,241,0.3)' }} />
            <div className="hidden md:block absolute top-12 left-2/3 w-1/3 border-t-2 border-dashed" style={{ borderColor: 'rgba(99,102,241,0.3)' }} />

            {[
              { step: '01', icon: '🔍', title: 'Search & Explore', desc: 'Use our powerful search and filters to find properties in your preferred location and price range.' },
              { step: '02', icon: '🤝', title: 'Connect with Agent', desc: 'Our expert agents will schedule viewings and guide you through every step of the process.' },
              { step: '03', icon: '🏠', title: 'Close the Deal', desc: 'We handle all paperwork and negotiations so you can move into your dream home stress-free.' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="glow-border shine rounded-2xl p-8 text-center relative animate-fade-in"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                  border: '1px solid rgba(99,102,241,0.25)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-sm text-white mx-auto mb-5 relative z-10"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}>
                  {step}
                </div>
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEET OUR AGENTS ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Expert Team</p>
            <h2 className="font-display font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Meet Our <span className="gradient-text">Top Agents</span>
            </h2>
          </div>
          <Link to="/agent/1" className="text-white hover:text-blue-400 transition-colors font-medium text-sm flex items-center gap-2">
            View All Agents <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
          {agents.map(agent => (
            <Link to={`/agent/${agent.id}`} key={agent.id}
              className="glow-border shine rounded-2xl p-6 text-center group animate-fade-in"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)';
              }}
            >
              <img src={agent.image} alt={agent.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-5"
                style={{ border: '3px solid rgba(59,130,246,0.4)', boxShadow: '0 0 25px rgba(59,130,246,0.3)' }}
              />
              <h3 className="font-display font-bold text-xl text-white mb-1">{agent.name}</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">{agent.title}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full"
                style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', color: '#93c5fd' }}>
                View Profile <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── EXPLORE NEIGHBORHOODS ───────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Locations</p>
            <h2 className="font-display font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Explore <span className="gradient-text">Neighborhoods</span>
            </h2>
          </div>
          <button onClick={() => navigate('/search')} className="text-white hover:text-blue-400 transition-colors font-medium text-sm flex items-center gap-2">
            View All Locations →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
          {[
            { name: 'Beverly Hills', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', count: 24 },
            { name: 'Manhattan', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', count: 18 },
            { name: 'Malibu', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', count: 12 },
          ].map(city => (
            <div key={city.name} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => navigate(`/search?q=${city.name}`)}
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <img src={city.img} alt={city.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-display font-bold text-2xl text-white mb-1 transition-transform duration-300 group-hover:-translate-y-1">{city.name}</h3>
                <p className="text-blue-400 text-sm font-medium transition-transform duration-300 group-hover:-translate-y-1">{city.count} Properties</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="orb w-96 h-96 top-1/2 -right-48 -translate-y-1/2" style={{ background: 'rgba(59,130,246,0.1)' }} />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Client <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">Hear from those who have found their dream homes with LuxeEstates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger">
            {[
              { name: 'James Carter', role: 'Tech Executive', text: 'The level of service is unmatched. They understood exactly what I was looking for and found me an incredible penthouse off-market. Highly recommended.' },
              { name: 'Elena Rodriguez', role: 'Architect', text: 'As an architect, I have very specific tastes. The LuxeEstates team was patient, knowledgeable, and guided me to a property that exceeded my highest expectations.' }
            ].map((review, i) => (
              <div key={i} className="glow-border shine rounded-3xl p-10 relative"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="#facc15" className="text-yellow-400" />)}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-blue-400 text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-8">
        <div className="relative rounded-3xl overflow-hidden p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #1e3a5f 0%, #1e1b4b 50%, #0f2a1e 100%)',
            boxShadow: '0 0 80px rgba(59,130,246,0.15), 0 30px 60px rgba(0,0,0,0.5)',
            border: '1px solid rgba(59,130,246,0.2)',
          }}>
          <div className="orb w-64 h-64 -top-16 -left-16" style={{ background: 'rgba(59,130,246,0.2)' }} />
          <div className="orb w-64 h-64 -bottom-16 -right-16" style={{ background: 'rgba(139,92,246,0.2)' }} />
          <div className="relative z-10">
            <h2 className="font-display font-black text-white text-4xl md:text-5xl mb-4">
              Ready to Find Your <span className="gradient-text">Perfect Home?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">Connect with our expert agents today and take the first step toward luxury living.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/search" className="btn-glow text-white font-bold px-10 py-4 rounded-2xl shine text-lg">
                Start Searching
              </a>
              <a href="/agent/1"
                className="text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              >
                Meet Our Agents
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
