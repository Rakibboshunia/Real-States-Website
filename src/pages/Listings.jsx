import { useState } from 'react';
import { properties } from '../data/mockData';
import PropertyCard from '../components/PropertyCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

const FILTERS = ['All', 'CA', 'NY', 'TX'];
const LABELS = { All: 'All', CA: 'California', NY: 'New York', TX: 'Texas' };

const Listings = () => {
  const [filter, setFilter] = useState('All');
  const displayed = filter === 'All' ? properties : properties.filter(p => p.location.includes(filter));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Explore</p>
        <h1 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Available <span className="gradient-text">Properties</span>
        </h1>
        <p className="text-slate-400 text-lg">Browse our complete selection of premium real estate.</p>
      </div>

      {/* Filter bar */}
      <div
        className="rounded-2xl p-4 mb-8 flex flex-wrap gap-3 items-center"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
      >
        <SlidersHorizontal size={16} className="text-blue-400 mr-1" />
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300"
            style={
              filter === f
                ? { background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: 'white', boxShadow: '0 4px 15px rgba(99,102,241,0.4)' }
                : { background: 'rgba(255,255,255,0.05)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.08)' }
            }
            onMouseEnter={e => { if (filter !== f) e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { if (filter !== f) e.currentTarget.style.color = '#94a3b8'; }}
          >
            {LABELS[f]}
          </button>
        ))}
        <span className="ml-auto text-sm text-slate-500 font-medium">{displayed.length} properties found</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
        {displayed.map(p => <PropertyCard key={p.id} property={p} />)}
      </div>
    </div>
  );
};

export default Listings;
