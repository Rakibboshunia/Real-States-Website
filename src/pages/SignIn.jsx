import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const inputCls = `w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none text-sm transition-all pl-10`;
const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication
    console.log('Signing in with:', email, password);
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 animate-fade-in relative">
      <div className="orb w-96 h-96 top-0 left-1/4" style={{ background: 'rgba(59,130,246,0.15)' }} />
      <div className="orb w-80 h-80 bottom-0 right-1/4" style={{ background: 'rgba(139,92,246,0.1)' }} />

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
            Welcome <span className="gradient-text">Back</span>
          </h1>
          <p className="text-slate-400 text-sm">Sign in to access your saved luxury properties.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                onFocus={e => { e.target.style.border = '1px solid rgba(59,130,246,0.6)'; e.target.style.boxShadow = '0 0 15px rgba(59,130,246,0.2)'; }}
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
                onFocus={e => { e.target.style.border = '1px solid rgba(59,130,246,0.6)'; e.target.style.boxShadow = '0 0 15px rgba(59,130,246,0.2)'; }}
                onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-1 mb-2">
            <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Forgot Password?</Link>
          </div>

          <button type="submit" className="btn-glow flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl text-sm shine w-full">
            Sign In <ArrowRight size={16} />
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-8">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
