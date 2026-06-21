import React, { useContext } from 'react';
import { AppProvider, AppContext } from './context/AppContext';
import Assessment from './components/Assessment';
import Dashboard from './components/Dashboard';
import Insights from './components/Insights';
import ActionTracker from './components/ActionTracker';
import Login from './components/Login';
import { Leaf, LogOut } from 'lucide-react';
import './index.css';

function MainApp() {
  const { userData, userAuth, logout } = useContext(AppContext);

  if (!userAuth) {
    return <Login />;
  }

  return (
    <div className="container animate-fade-in">
      <header className="flex items-center justify-between mb-4 mt-2">
        <div className="flex items-center gap-2">
          <Leaf size={32} className="text-primary" style={{ color: 'var(--primary-color)' }} />
          <h1 className="text-3xl font-bold">Eco<span className="text-gradient">Compass</span></h1>
        </div>
        <button onClick={logout} className="btn btn-ghost" title="Log Out">
          <LogOut size={18} />
          <span className="text-sm">Log Out</span>
        </button>
      </header>

      {!userData ? (
        <Assessment />
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Dashboard />
            <Insights />
          </div>
          <div>
            <ActionTracker />
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

export default App;
