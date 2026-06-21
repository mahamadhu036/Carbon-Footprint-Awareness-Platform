import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Leaf, LogIn } from 'lucide-react';

export default function Login() {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (email && password.length >= 6) {
      login(email);
    } else {
      setError('Please enter a valid email and a password of at least 6 characters.');
    }
  };

  return (
    <div className="glass-card animate-fade-in" style={{ maxWidth: '400px', margin: '4rem auto', textAlign: 'center' }}>
      <div className="flex justify-center mb-4">
        <Leaf size={48} className="text-primary" style={{ color: 'var(--primary-color)' }} />
      </div>
      <h2 className="text-3xl font-bold mb-2">Welcome to Eco<span className="text-gradient">Compass</span></h2>
      <p className="text-secondary mb-4">Log in to track your carbon footprint.</p>

      {error && <div className="mb-4 text-sm" style={{ color: 'var(--danger-color)', background: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem', borderRadius: '4px' }}>{error}</div>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="form-group" style={{ marginBottom: 0, textAlign: 'left' }}>
          <label className="form-label">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-primary)', outline: 'none' }}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="form-group" style={{ marginBottom: 0, textAlign: 'left' }}>
          <label className="form-label">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-primary)', outline: 'none' }}
            placeholder="••••••••"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-full mt-2 justify-center">
          <LogIn size={18} />
          Log In
        </button>
      </form>
    </div>
  );
}
