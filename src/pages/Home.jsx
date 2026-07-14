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
  const [searchType, setSearchType] = useState('Buy');
  const [propertyType, setPropertyType] = useState('All Types');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const featured = properties.filter(p => p.featured).slice(0, 3);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append('q', searchQuery);
    if (searchType === 'Rent') params.append('status', 'For Rent');
    if (searchType === 'Buy') params.append('status', 'For Sale');
    if (propertyType !== 'All Types') params.append('type', propertyType);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="animate-fade-in">

      {/* ─── ULTRA PREMIUM HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Deep immersive background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Home" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        {/* Lighting effects */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-[#060b14]/50" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-slate-300 text-sm font-medium tracking-wide uppercase">Global Portfolio Available</span>
          </div>

          <h1 className="font-display font-black text-white mb-6 leading-[1.1] animate-fade-in-up" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', animationDelay: '0.1s' }}>
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-300 to-blue-500" style={{ textShadow: '0 0 40px rgba(59,130,246,0.3)' }}>
              Standard of Living
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover an exclusive collection of the world's most extraordinary properties. Curated for the exceptional.
          </p>

          {/* Minimalist Floating Search */}
          <div className="w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center gap-8 mb-4">
              {['Buy', 'Rent', 'Sold'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setSearchType(tab)}
                  className={`text-sm font-bold tracking-widest uppercase pb-2 transition-all ${
                    searchType === tab
                      ? 'text-white border-b-2 border-blue-500'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch} 
              className="relative flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-3xl md:rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex-1 flex items-center px-6 py-4 md:py-2 w-full md:border-r border-white/10">
                <span className="text-white/50 mr-3 text-xl">📍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Where do you want to live?"
                  className="w-full bg-transparent outline-none text-white placeholder-white/50 text-lg font-light"
                />
              </div>

              <div className="w-full md:w-64 flex items-center px-6 py-4 md:py-2 md:border-r border-white/10">
                <span className="text-white/50 mr-3 text-xl">🏛️</span>
                <select 
                  value={propertyType} 
                  onChange={e => setPropertyType(e.target.value)}
                  className="w-full bg-transparent outline-none text-white text-lg font-light appearance-none cursor-pointer"
                >
                  {['All Types', 'House', 'Apartment', 'Villa', 'Penthouse'].map(t => (
                    <option key={t} value={t} className="bg-slate-900">{t}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold text-lg px-10 py-4 md:py-3 rounded-2xl md:rounded-full flex items-center justify-center gap-2 m-1">
                Search
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Mouse Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-white/50">
          <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ─── GLOBAL PARTNERS / AS FEATURED IN ─────────────────────── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 text-sm font-semibold tracking-widest uppercase mb-8">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['FORBES', 'VOGUE', 'WALL STREET JOURNAL', 'ARCHITECTURAL DIGEST', 'BLOOMBERG'].map((brand, i) => (
              <div key={i} className="font-display font-black text-xl md:text-2xl text-white tracking-tighter">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROPERTIES ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Handpicked For You</p>
          <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Featured <span className="gradient-text">Properties</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Not sure where to start? Browse our carefully curated selection of top-tier homes. These properties represent the absolute pinnacle of luxury, handpicked by our expert agents for their unique design, premium locations, and outstanding value.
          </p>
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
          <h2 className="font-display font-black text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Why Choose <span className="gradient-text">LuxeEstates</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Buying or selling a luxury home is a significant life event. We ensure your experience is nothing short of exceptional by providing unmatched market expertise, absolute discretion, and a seamless end-to-end service.
          </p>

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
          <div className="text-center mb-12">
            <p className="text-violet-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Your Journey</p>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We have simplified the complex process of luxury real estate transactions. From your very first search to the moment you receive your new keys, here is how we guide you every step of the way.
            </p>
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Expert Team</p>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Meet Our <span className="gradient-text">Top Agents</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Real estate is about relationships. Our award-winning agents are ready to offer you personalized guidance, deep local insights, and strong negotiation skills. Reach out to an expert today to start your journey.
            </p>
          </div>
          <Link to="/agent/1" className="text-white hover:text-blue-400 transition-colors font-medium text-sm flex items-center gap-2 pb-2">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Locations</p>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Explore <span className="gradient-text">Neighborhoods</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Location is everything. Click on any of our highly sought-after neighborhoods below to instantly view all available luxury properties in that specific area.
            </p>
          </div>
          <button onClick={() => navigate('/search')} className="text-white hover:text-blue-400 transition-colors font-medium text-sm flex items-center gap-2 pb-2">
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
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Client <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Don't just take our word for it. Read honest reviews from clients who have successfully found, bought, or sold their dream homes through LuxeEstates. Their satisfaction is our greatest achievement.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}>
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {[
                  { name: 'James Carter', role: 'Tech Executive', text: 'The level of service is unmatched. They understood exactly what I was looking for and found me an incredible penthouse off-market. Highly recommended.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
                  { name: 'Elena Rodriguez', role: 'Architect', text: 'As an architect, I have very specific tastes. The LuxeEstates team was patient, knowledgeable, and guided me to a property that exceeded my highest expectations.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
                  { name: 'Michael Chen', role: 'Investment Banker', text: 'Professional, discreet, and incredibly efficient. The entire process from viewing to closing was handled flawlessly. A truly premium experience.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
                  { name: 'Sarah Sterling', role: 'Fashion Designer', text: 'I needed a home that matched my aesthetic vision. LuxeEstates delivered a masterpiece. Their eye for detail and luxury is simply unparalleled.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
                  { name: 'David Thompson', role: 'CEO', text: 'Relocating my family was a daunting task, but this team made it seamless. We found our dream estate in record time. Five stars.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' }
                ].map((review, i) => (
                  <div key={i} className="min-w-full p-10 md:p-16 text-center">
                    <div className="flex justify-center gap-1 mb-8">
                      {[1,2,3,4,5].map(s => <Star key={s} size={24} fill="#facc15" className="text-yellow-400" />)}
                    </div>
                    <p className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-10 italic font-light">"{review.text}"</p>
                    <div className="flex flex-col items-center gap-3">
                      <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover shadow-[0_0_15px_rgba(59,130,246,0.5)] border-2 border-blue-500/50" />
                      <div>
                        <h4 className="font-bold text-white text-lg">{review.name}</h4>
                        <p className="text-blue-400 text-sm">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slider Controls */}
            <div className="flex justify-center gap-4 mt-8">
              {[0, 1, 2, 3, 4].map(idx => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-8 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LATEST NEWS ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-emerald-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Market Insights</p>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Latest <span className="gradient-text">News & Trends</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Stay informed before making a big decision. Browse our latest articles to learn about real estate market trends, investment tips, and modern architectural design styles.
            </p>
          </div>
          <button className="text-white hover:text-emerald-400 transition-colors font-medium text-sm flex items-center gap-2 pb-2">
            Read All Articles →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
          {[
            { img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', date: 'Oct 15, 2023', category: 'Market Trends', title: 'The Rise of Smart Luxury Homes in 2024' },
            { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', date: 'Oct 10, 2023', category: 'Investment', title: 'Top 5 Neighborhoods for Real Estate Investment' },
            { img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', date: 'Oct 05, 2023', category: 'Architecture', title: 'Minimalist Design Trends Taking Over Luxury Villas' }
          ].map((news, i) => (
            <div key={i} className="group cursor-pointer rounded-2xl overflow-hidden glass border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                  {news.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-blue-400 text-xs font-medium mb-3">{news.date}</p>
                <h3 className="font-display font-bold text-lg text-white mb-4 group-hover:text-blue-300 transition-colors">{news.title}</h3>
                <div className="text-white hover:text-blue-400 transition-colors font-medium text-sm flex items-center gap-2">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
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
