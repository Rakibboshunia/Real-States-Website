import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';

const inputCls = `w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none text-sm transition-all pl-10`;
const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
};

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy action to simulate sending a reset email
    console.log('Sending password reset link to:', email);
    setIsSubmitted(true);
    // After 3 seconds, simulate clicking the reset link from email
    setTimeout(() => {
      navigate('/reset-password');
    }, 3000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 animate-fade-in relative">
      <div className="orb w-96 h-96 top-0 right-1/4" style={{ background: 'rgba(239,68,68,0.15)' }} />
      <div className="orb w-80 h-80 bottom-0 left-1/4" style={{ background: 'rgba(59,130,246,0.1)' }} />

      <div
        className="w-full max-w-md rounded-3xl p-8 sm:p-10 relative z-10"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <Link to="/signin" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Sign In
        </Link>

        <div className="text-center mb-6">
          <h1 className="font-display font-black text-white text-3xl mb-2">
            Reset <span className="gradient-text">Password</span>
          </h1>
          <p className="text-slate-400 text-sm">
            {isSubmitted 
              ? "Check your email! We've sent a recovery link." 
              : "Enter your email and we'll send you a link to reset your password."}
          </p>
        </div>

        {!isSubmitted ? (
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

            <button type="submit" className="btn-glow flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl text-sm shine w-full mt-2">
              Send Reset Link <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className="text-center animate-fade-in-down">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-6 border border-emerald-500/30"
              style={{ boxShadow: '0 0 20px rgba(16,185,129,0.2)' }}>
              <Mail size={28} className="text-emerald-400" />
            </div>
            <p className="text-slate-300 text-sm mb-6">
              If an account exists for <strong className="text-white">{email}</strong>, you will receive a password reset link shortly. (Redirecting to reset page for demo purposes...)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
