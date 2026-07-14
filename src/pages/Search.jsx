import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react';
import { properties } from '../data/mockData';
import PropertyCard from '../components/PropertyCard';

const inputCls = `w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none text-sm transition-all`;
const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
};

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('q') || '';
  const initialType = searchParams.get('type') || 'All Types';
  const initialStatus = searchParams.get('status') || 'Any';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [type, setType] = useState(initialType);
  const [price, setPrice] = useState('Any Price');
  const [beds, setBeds] = useState('Any');
  const [baths, setBaths] = useState('Any');
  const [minSqft, setMinSqft] = useState('Any');
  const [status, setStatus] = useState(initialStatus);

  const [results, setResults] = useState(properties);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, type, price, beds, baths, minSqft, status]);

  const applyFilters = () => {
    let filtered = properties;

    // Keyword / Location
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.location.toLowerCase().includes(term)
      );
    }

    // Type
    if (type !== 'All Types') {
      filtered = filtered.filter(p => p.type === type);
    }

    // Status
    if (status !== 'Any') {
      filtered = filtered.filter(p => p.status === status);
    }

    // Price
    if (price !== 'Any Price') {
      filtered = filtered.filter(p => {
        if (price === 'Under $1M') return p.numericPrice < 1000000;
        if (price === '$1M–$3M') return p.numericPrice >= 1000000 && p.numericPrice <= 3000000;
        if (price === '$3M–$5M') return p.numericPrice > 3000000 && p.numericPrice <= 5000000;
        if (price === '$5M+') return p.numericPrice > 5000000;
        return true;
      });
    }

    // Beds
    if (beds !== 'Any') {
      const minBeds = parseInt(beds.replace('+', ''));
      filtered = filtered.filter(p => p.beds >= minBeds);
    }

    // Baths
    if (baths !== 'Any') {
      const minBaths = parseInt(baths.replace('+', ''));
      filtered = filtered.filter(p => p.baths >= minBaths);
    }

    // SqFt
    if (minSqft !== 'Any') {
      const minVal = parseInt(minSqft.replace('+', ''));
      filtered = filtered.filter(p => p.sqft >= minVal);
    }

    setResults(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header */}
      <div className="mb-7">
        <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Find your home</p>
        <h1 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Advanced <span className="gradient-text">Search</span>
        </h1>
        <p className="text-slate-400 text-lg">Use powerful filters to find your perfect property.</p>
      </div>

      {/* Search panel */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background: 'linear-gradient(145deg, rgba(59,130,246,0.08), rgba(99,102,241,0.04))',
          border: '1px solid rgba(59,130,246,0.2)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide">Location or Keyword</label>
            <div className="relative">
              <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="e.g. Beverly Hills"
                className={`${inputCls} pl-10`}
                style={inputStyle}
                onFocus={e => { e.target.style.border = '1px solid rgba(59,130,246,0.6)'; e.target.style.boxShadow = '0 0 15px rgba(59,130,246,0.2)'; }}
                onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide">Property Type</label>
            <select className={inputCls} style={inputStyle} value={type} onChange={e => setType(e.target.value)}>
              {['All Types', 'House', 'Apartment', 'Villa', 'Penthouse'].map(t => <option key={t} className="bg-slate-900 text-white">{t}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide">Price Range</label>
            <select className={inputCls} style={inputStyle} value={price} onChange={e => setPrice(e.target.value)}>
              {['Any Price', 'Under $1M', '$1M–$3M', '$3M–$5M', '$5M+'].map(p => <option key={p} className="bg-slate-900 text-white">{p}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide">Bedrooms</label>
            <select className={inputCls} style={inputStyle} value={beds} onChange={e => setBeds(e.target.value)}>
              {['Any', '1+', '2+', '3+', '4+'].map(o => <option key={o} className="bg-slate-900 text-white">{o}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide">Bathrooms</label>
            <select className={inputCls} style={inputStyle} value={baths} onChange={e => setBaths(e.target.value)}>
              {['Any', '1+', '2+', '3+'].map(o => <option key={o} className="bg-slate-900 text-white">{o}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide">Min SqFt</label>
            <select className={inputCls} style={inputStyle} value={minSqft} onChange={e => setMinSqft(e.target.value)}>
              {['Any', '1000+', '2000+', '3000+'].map(o => <option key={o} className="bg-slate-900 text-white">{o}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide">Status</label>
            <select className={inputCls} style={inputStyle} value={status} onChange={e => setStatus(e.target.value)}>
              {['Any', 'For Sale', 'For Rent'].map(o => <option key={o} className="bg-slate-900 text-white">{o}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-display font-bold text-2xl text-white">
            <span className="gradient-text">{results.length}</span> {results.length === 1 ? 'Result' : 'Results'} Found
          </h3>
        </div>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
            {results.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        ) : (
          <div className="rounded-2xl p-12 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="text-5xl mb-4 opacity-50">🔍</div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">No properties found</h3>
            <p className="text-slate-500 text-lg mb-6">We couldn't find any properties matching your current criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setType('All Types');
                setPrice('Any Price');
                setBeds('Any');
                setBaths('Any');
                setMinSqft('Any');
                setStatus('Any');
              }}
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all bg-white/5 hover:bg-white/10 border border-white/10"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
