import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, CheckCircle } from 'lucide-react';

const inputCls = `w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none text-sm transition-all pl-10`;
const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
};

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Dummy action to simulate password reset
    console.log('Password reset successful');
    setIsSuccess(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 animate-fade-in relative">
      <div className="orb w-96 h-96 top-0 left-1/4" style={{ background: 'rgba(16,185,129,0.15)' }} />
      <div className="orb w-80 h-80 bottom-0 right-1/4" style={{ background: 'rgba(59,130,246,0.1)' }} />

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
            Create New <span className="gradient-text">Password</span>
          </h1>
          <p className="text-slate-400 text-sm">
            {isSuccess ? "Password changed successfully." : "Your new password must be different from previously used passwords."}
          </p>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 tracking-wide ml-1">New Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={8}
                  className={inputCls}
                  style={inputStyle}
                  onFocus={e => { e.target.style.border = '1px solid rgba(16,185,129,0.6)'; e.target.style.boxShadow = '0 0 15px rgba(16,185,129,0.2)'; }}
                  onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 tracking-wide ml-1">Confirm New Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={8}
                  className={inputCls}
                  style={inputStyle}
                  onFocus={e => { e.target.style.border = '1px solid rgba(16,185,129,0.6)'; e.target.style.boxShadow = '0 0 15px rgba(16,185,129,0.2)'; }}
                  onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
            </div>

            <button type="submit" className="flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl text-sm shine w-full mt-2 transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 8px 25px rgba(16,185,129,0.4)' }}>
              Change Password <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className="text-center animate-fade-in-down">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 mb-6 border border-emerald-500/30"
              style={{ boxShadow: '0 0 20px rgba(16,185,129,0.2)' }}>
              <CheckCircle size={36} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">All Done!</h3>
            <p className="text-slate-300 text-sm mb-6">
              Your password has been successfully reset. You can now use your new password to sign in to your account.
            </p>
            <button 
              onClick={() => navigate('/signin')}
              className="btn-glow flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl text-sm shine w-full"
            >
              Go to Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
