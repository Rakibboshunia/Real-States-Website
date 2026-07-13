import { useParams, Link } from 'react-router-dom';
import { agents, properties } from '../data/mockData';
import PropertyCard from '../components/PropertyCard';
import { Phone, Mail, Award, CheckCircle, Star, TrendingUp } from 'lucide-react';

const AgentProfile = () => {
  const { id } = useParams();
  const agent = agents.find(a => a.id === id);

  if (!agent) return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h2 className="font-display text-3xl text-white">Agent not found</h2>
    </div>
  );

  const agentProperties = properties.filter(p => p.agentId === id);

  const stats = [
    { icon: <Award size={24} className="text-blue-400" />, value: '15+', label: 'Years Exp.', glow: 'rgba(59,130,246,0.2)' },
    { icon: <TrendingUp size={24} className="text-emerald-400" />, value: '$200M+', label: 'Sales Volume', glow: 'rgba(16,185,129,0.2)' },
    { icon: <Star size={24} className="text-amber-400" />, value: '4.9 ★', label: 'Rating', glow: 'rgba(251,191,36,0.2)' },
    { icon: <CheckCircle size={24} className="text-violet-400" />, value: '250+', label: 'Deals Closed', glow: 'rgba(139,92,246,0.2)' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      {/* Profile header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
        {/* Agent card */}
        <div
          className="glow-border rounded-2xl p-8 flex flex-col items-center text-center shine"
          style={{
            background: 'linear-gradient(145deg, rgba(59,130,246,0.12), rgba(99,102,241,0.06))',
            border: '1px solid rgba(59,130,246,0.25)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.1)',
          }}
        >
          <div className="relative mb-6">
            <img src={agent.image} alt={agent.name}
              className="w-36 h-36 rounded-full object-cover float"
              style={{ border: '3px solid rgba(59,130,246,0.5)', boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
            />
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center"
              style={{ boxShadow: '0 0 15px rgba(16,185,129,0.6)' }}>
              <CheckCircle size={14} className="text-white" />
            </div>
          </div>
          <h1 className="font-display font-black text-white text-2xl mb-1">{agent.name}</h1>
          <p className="text-blue-400 font-semibold text-sm mb-6">{agent.title}</p>
          <div className="flex flex-col gap-3 w-full">
            <button className="btn-glow flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl text-sm shine">
              <Phone size={16} /> {agent.phone}
            </button>
            <button className="flex items-center justify-center gap-2 font-semibold py-3 rounded-xl text-sm text-white transition-all"
              style={{ border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; }}>
              <Mail size={16} /> Contact via Email
            </button>
          </div>
        </div>

        {/* Bio + stats */}
        <div className="lg:col-span-2">
          <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ About</p>
          <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Meet <span className="gradient-text">{agent.name.split(' ')[0]}</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">{agent.bio}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger">
            {stats.map(({ icon, value, label, glow }) => (
              <div
                key={label}
                className="glow-border shine rounded-2xl p-5 flex flex-col items-center text-center animate-fade-in cursor-default"
                style={{
                  background: `linear-gradient(145deg, ${glow}, rgba(255,255,255,0.02))`,
                  border: `1px solid ${glow}`,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) rotateX(5deg)';
                  e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${glow}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                }}
              >
                <div className="mb-2">{icon}</div>
                <div className="font-display font-black text-2xl text-white">{value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Listings */}
      <div>
        <div className="flex items-center justify-between mb-6 pb-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="font-display font-black text-white text-3xl">
            <span className="gradient-text">{agent.name.split(' ')[0]}'s</span> Listings
          </h2>
          <span className="glass rounded-xl px-3 py-1.5 text-slate-400 text-sm"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            {agentProperties.length} active
          </span>
        </div>
        {agentProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
            {agentProperties.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        ) : (
          <p className="text-slate-500">No active listings at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default AgentProfile;
