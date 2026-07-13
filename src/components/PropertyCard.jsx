import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

const PropertyCard = ({ property }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(property.id);
  const cardRef = useRef(null);

  /* ─── 3D tilt on mousemove ─── */
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -10;
      const rotY = ((x - cx) / cx) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
    };

    const handleLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="glow-border shine rounded-2xl overflow-hidden flex flex-col cursor-pointer"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset',
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
          style={{ transition: 'transform 0.6s ease' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,11,20,0.7) 0%, transparent 50%)' }} />

        {/* Favorite button */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleFavorite(property.id); }}
          aria-label="Toggle favorite"
          className="absolute top-3 right-3 w-10 h-10 rounded-full glass flex items-center justify-center transition-all duration-300"
          style={{
            border: '1px solid rgba(255,255,255,0.2)',
            transform: isFav ? 'scale(1.15)' : 'scale(1)',
          }}
        >
          <Heart size={17} fill={isFav ? '#ef4444' : 'none'} color={isFav ? '#ef4444' : 'white'} />
        </button>

        {/* Price badge */}
        <div
          className="absolute bottom-3 left-3 font-display font-bold text-white text-lg px-4 py-1.5 rounded-xl"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 4px 15px rgba(99,102,241,0.5)' }}
        >
          {property.price}
        </div>

        {/* Featured badge */}
        {property.featured && (
          <div className="absolute top-3 left-3 text-xs font-bold text-white px-2.5 py-1 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 2px 10px rgba(16,185,129,0.4)' }}>
            ✦ FEATURED
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-white mb-1.5 leading-snug">
          <Link to={`/property/${property.id}`} className="hover:text-blue-400 transition-colors">{property.title}</Link>
        </h3>
        <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-4">
          <MapPin size={13} className="text-blue-400" />
          <span>{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex justify-between py-3 mb-4 text-sm font-medium text-slate-300"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <span className="flex items-center gap-1.5"><Bed size={14} className="text-blue-400" /> {property.beds} Beds</span>
          <span className="flex items-center gap-1.5"><Bath size={14} className="text-violet-400" /> {property.baths} Baths</span>
          <span className="flex items-center gap-1.5"><Square size={14} className="text-emerald-400" /> {property.sqft} sqft</span>
        </div>

        <Link
          to={`/property/${property.id}`}
          className="mt-auto text-center font-semibold py-2.5 rounded-xl text-sm text-white transition-all duration-300 shine"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2))',
            border: '1px solid rgba(99,102,241,0.4)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2))';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
