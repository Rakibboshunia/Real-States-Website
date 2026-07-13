import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Home, Heart, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const linkCls = ({ isActive }) =>
    `relative font-medium text-sm transition-colors duration-200 ${
      isActive
        ? 'text-blue-400'
        : 'text-white hover:text-blue-300'
    }`;

  return (
    <header className="sticky top-0 z-50 glass animate-fade-in-down" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[4.5rem]">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl btn-glow flex items-center justify-center">
            <Home size={18} className="text-white" />
          </div>
          <span className="font-display font-extrabold text-xl text-white tracking-tight">
            Luxe<span className="gradient-text">Estates</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <NavLink to="/" end className={linkCls}>Home</NavLink>
          <NavLink to="/properties" className={linkCls}>Properties</NavLink>
          <NavLink to="/search" className={linkCls}>Search</NavLink>
          <NavLink to="/agent/1" className={linkCls}>Agents</NavLink>
          <NavLink to="/favorites" className={({ isActive }) =>
            `flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-blue-400' : 'text-white hover:text-blue-300'}`
          }>
            <Heart size={16} /> Favorites
          </NavLink>
          <button 
            onClick={() => navigate('/signin')}
            className="btn-glow text-white font-semibold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 shine">
            <Sparkles size={15} /> Sign In
          </button>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {[['/', 'Home', true], ['/properties', 'Properties'], ['/search', 'Search'], ['/agent/1', 'Agents'], ['/favorites', 'Favorites']].map(([to, label, end]) => (
            <NavLink key={to} to={to} end={!!end}
              className={({ isActive }) => `font-medium text-sm ${isActive ? 'text-blue-400' : 'text-white'}`}
              onClick={() => setOpen(false)}
            >{label}</NavLink>
          ))}
          <button 
            onClick={() => { setOpen(false); navigate('/signin'); }}
            className="btn-glow text-white font-semibold py-3 rounded-xl text-sm">Sign In</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
