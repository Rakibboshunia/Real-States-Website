import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const inputCls = `w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none text-sm transition-all pl-10`;
const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
};

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy registration
    console.log('Signing up with:', name, email, password);
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 animate-fade-in relative py-12">
      <div className="orb w-96 h-96 top-0 right-1/4" style={{ background: 'rgba(16,185,129,0.15)' }} />
      <div className="orb w-80 h-80 bottom-0 left-1/4" style={{ background: 'rgba(59,130,246,0.1)' }} />

      <div
        className="w-full max-w-md rounded-3xl p-8 sm:p-10 relative z-10"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <div className="text-center mb-6">
          <h1 className="font-display font-black text-white text-3xl mb-2">
            Create an <span className="gradient-text">Account</span>
          </h1>
          <p className="text-slate-400 text-sm">Join LuxeEstates to save and manage properties.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide ml-1">Full Name</label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="John Doe"
                required
                className={inputCls}
                style={inputStyle}
                onFocus={e => { e.target.style.border = '1px solid rgba(16,185,129,0.6)'; e.target.style.boxShadow = '0 0 15px rgba(16,185,129,0.2)'; }}
                onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide ml-1">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className={inputCls}
                style={inputStyle}
                onFocus={e => { e.target.style.border = '1px solid rgba(16,185,129,0.6)'; e.target.style.boxShadow = '0 0 15px rgba(16,185,129,0.2)'; }}
                onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wide ml-1">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className={inputCls}
                style={inputStyle}
                onFocus={e => { e.target.style.border = '1px solid rgba(16,185,129,0.6)'; e.target.style.boxShadow = '0 0 15px rgba(16,185,129,0.2)'; }}
                onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          <button type="submit" className="flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl text-sm shine w-full mt-2 transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 8px 25px rgba(16,185,129,0.4)' }}>
            Sign Up <ArrowRight size={16} />
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-8">
          Already have an account?{' '}
          <Link to="/signin" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
