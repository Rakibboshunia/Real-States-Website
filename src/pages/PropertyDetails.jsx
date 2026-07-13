import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties, agents } from '../data/mockData';
import PropertyCard from '../components/PropertyCard';
import { MapPin, Bed, Bath, Square, Heart, Share2, Phone, Mail, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

// Extra gallery images per property
const galleryImages = [
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
];

const PropertyDetails = () => {
  const { id } = useParams();
  const { isFavorite, toggleFavorite } = useFavorites();
  const property = properties.find(p => p.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [contactName, setContactName] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [sent, setSent] = useState(false);

  if (!property) return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h2 className="font-display text-3xl text-white">Property not found</h2>
    </div>
  );

  const agent = agents.find(a => a.id === property.agentId);
  const isFav = isFavorite(property.id);
  const allImages = [property.image, ...galleryImages];

  const openLightbox = (idx) => { setLightboxIdx(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImg = () => setLightboxIdx(i => (i - 1 + allImages.length) % allImages.length);
  const nextImg = () => setLightboxIdx(i => (i + 1) % allImages.length);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={property.image} alt={property.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,11,20,1) 0%, rgba(6,11,20,0.3) 60%, transparent 100%)' }} />
        
        {/* Action buttons */}
        <div className="absolute top-6 right-6 flex gap-3">
          <button className="glass flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:bg-white/20"
            style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
            <Share2 size={15} /> Share
          </button>
          <button onClick={() => toggleFavorite(property.id)}
            className="glass flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-white/20"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: isFav ? '#f87171' : 'white' }}>
            <Heart size={15} fill={isFav ? '#ef4444' : 'none'} />
            {isFav ? 'Saved' : 'Save'}
          </button>
        </div>

        {/* Price + title */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display font-black text-white mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{property.title}</h1>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={16} className="text-blue-400" /> {property.location}
              </div>
            </div>
            <div className="font-display font-black text-4xl gradient-text">{property.price}</div>
          </div>
        </div>
      </div>

      {/* ─── PHOTO GALLERY ─── */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-4 gap-3 h-56 rounded-2xl overflow-hidden">
          <div className="col-span-2 row-span-2 cursor-pointer relative group overflow-hidden rounded-xl" onClick={() => openLightbox(0)}>
            <img src={allImages[0]} alt="main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
          </div>
          {allImages.slice(1, 4).map((img, i) => (
            <div key={i} className="cursor-pointer relative group overflow-hidden rounded-xl" onClick={() => openLightbox(i + 1)}>
              <img src={img} alt={`gallery-${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
              {i === 2 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center" onClick={() => openLightbox(3)}>
                  <span className="text-white font-bold text-lg">+{allImages.length - 4} Photos</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}>
          <button className="absolute top-4 right-4 text-white glass p-2 rounded-full hover:bg-white/20" onClick={closeLightbox}>
            <X size={24} />
          </button>
          <button className="absolute left-4 text-white glass p-3 rounded-full hover:bg-white/20" onClick={(e) => { e.stopPropagation(); prevImg(); }}>
            <ChevronLeft size={28} />
          </button>
          <img src={allImages[lightboxIdx]} alt="lightbox" className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 text-white glass p-3 rounded-full hover:bg-white/20" onClick={(e) => { e.stopPropagation(); nextImg(); }}>
            <ChevronRight size={28} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">{lightboxIdx + 1} / {allImages.length}</div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left */}
        <div className="lg:col-span-2">
          {/* Feature bar */}
          <div className="rounded-2xl flex justify-around py-6 px-4 mb-6"
            style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.1), rgba(99,102,241,0.05))', border: '1px solid rgba(59,130,246,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
            {[
              { icon: <Bed size={22} />, value: property.beds, label: 'Bedrooms', color: 'text-blue-400' },
              { icon: <Bath size={22} />, value: property.baths, label: 'Bathrooms', color: 'text-violet-400' },
              { icon: <Square size={22} />, value: property.sqft, label: 'Square Feet', color: 'text-emerald-400' },
            ].map(({ icon, value, label, color }) => (
              <div key={label} className="flex items-center gap-3">
                <div className={color}>{icon}</div>
                <div>
                  <div className="font-display font-bold text-2xl text-white">{value}</div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <h3 className="font-display font-bold text-2xl text-white mb-4">About this home</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Experience unparalleled luxury in this stunning property located in {property.location}. Featuring state-of-the-art amenities, expansive living spaces, and breathtaking views, this home is designed for those who appreciate the finer things in life.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            The open floor plan seamlessly connects the gourmet kitchen to the living and dining areas, perfect for entertaining. Enjoy the meticulously landscaped grounds, complete with a private pool and outdoor kitchen.
          </p>

          {/* Amenities */}
          <h3 className="font-display font-bold text-2xl text-white mb-5">Key Amenities</h3>
          <div className="grid grid-cols-2 gap-3 mb-7">
            {['Private Pool', 'Home Theater', 'Smart Home System', "Chef's Kitchen", 'Wine Cellar', '3-Car Garage', 'Spa & Sauna', 'Rooftop Terrace'].map(a => (
              <div key={a} className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle size={15} className="text-emerald-400 shrink-0" /> {a}
              </div>
            ))}
          </div>

          {/* ─── MAP SECTION ─── */}
          <h3 className="font-display font-bold text-2xl text-white mb-5">Location</h3>
          <div className="rounded-2xl overflow-hidden mb-4" style={{ height: 280, border: '1px solid rgba(255,255,255,0.1)' }}>
            <iframe
              title="Property Location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
            />
          </div>
          <p className="text-slate-500 text-sm flex items-center gap-2"><MapPin size={14} className="text-blue-400" /> {property.location}</p>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Agent card */}
          <div className="rounded-2xl p-7"
            style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <h3 className="font-display font-bold text-xl text-white mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Contact Agent</h3>
            {agent ? (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <img src={agent.image} alt={agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                    style={{ border: '2px solid rgba(59,130,246,0.5)', boxShadow: '0 0 20px rgba(59,130,246,0.3)' }} />
                  <div>
                    <h4 className="font-bold text-white">
                      <Link to={`/agent/${agent.id}`} className="hover:text-blue-400 transition-colors">{agent.name}</Link>
                    </h4>
                    <p className="text-slate-500 text-sm">{agent.title}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center justify-center gap-2 font-semibold py-3 rounded-xl text-sm text-white transition-all"
                    style={{ border: '1px solid rgba(99,102,241,0.5)', background: 'rgba(99,102,241,0.1)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; }}>
                    <Phone size={16} /> {agent.phone}
                  </button>
                </div>
              </>
            ) : <p className="text-slate-500">No agent assigned.</p>}
          </div>

          {/* ─── CONTACT FORM ─── */}
          <div className="rounded-2xl p-7"
            style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.08), rgba(99,102,241,0.04))', border: '1px solid rgba(59,130,246,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
            <h3 className="font-display font-bold text-xl text-white mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              Send a Message
            </h3>
            {!sent ? (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                <input type="text" value={contactName} onChange={e => setContactName(e.target.value)} required placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none text-sm transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(59,130,246,0.6)'; }}
                  onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; }} />
                <textarea value={contactMsg} onChange={e => setContactMsg(e.target.value)} required rows={4}
                  placeholder={`I'm interested in ${property.title}...`}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none text-sm resize-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(59,130,246,0.6)'; }}
                  onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; }} />
                <button type="submit" className="btn-glow flex items-center justify-center gap-2 font-semibold py-3 rounded-xl text-sm text-white shine w-full">
                  <Mail size={16} /> Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-4 animate-fade-in">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-emerald-400 font-semibold">Message sent! We'll get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── SIMILAR PROPERTIES ─── */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="font-display font-black text-white text-3xl mb-6">
          Similar <span className="gradient-text">Properties</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
          {properties.filter(p => p.id !== id).slice(0, 3).map(p => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
