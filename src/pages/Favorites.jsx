import { useFavorites } from '../context/FavoritesContext';
import { properties } from '../data/mockData';
import PropertyCard from '../components/PropertyCard';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const { favorites } = useFavorites();
  const favoriteProperties = properties.filter(p => favorites.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 float"
          style={{
            background: 'linear-gradient(135deg, rgba(239,68,68,0.3), rgba(239,68,68,0.1))',
            border: '1px solid rgba(239,68,68,0.4)',
            boxShadow: '0 0 40px rgba(239,68,68,0.3)',
          }}
        >
          <Heart size={36} fill="#ef4444" className="text-red-500" />
        </div>
        <p className="text-red-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">✦ Your Collection</p>
        <h1 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Saved <span className="gradient-text">Properties</span>
        </h1>
        <p className="text-slate-400 text-lg">
          {favoriteProperties.length > 0
            ? `You have ${favoriteProperties.length} saved ${favoriteProperties.length === 1 ? 'property' : 'properties'}.`
            : 'Your favorites list is empty.'}
        </p>
      </div>

      {favoriteProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {favoriteProperties.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      ) : (
        <div
          className="max-w-lg mx-auto rounded-2xl p-16 text-center"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          <Heart size={52} className="text-slate-700 mx-auto mb-5" />
          <h3 className="font-display font-bold text-2xl text-white mb-3">No favorites yet</h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Browse our premium listings and tap the ♥ to save your dream homes here.
          </p>
          <a href="/properties" className="btn-glow inline-block text-white font-bold px-10 py-4 rounded-2xl shine">
            Browse Properties
          </a>
        </div>
      )}
    </div>
  );
};

export default Favorites;
