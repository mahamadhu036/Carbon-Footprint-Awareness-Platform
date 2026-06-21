import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Activity, Car, Leaf, Zap, RefreshCw } from 'lucide-react';

export default function Dashboard() {
  const { userData, resetData } = useContext(AppContext);

  if (!userData || !userData.footprint) return null;

  const { total, breakdown } = userData.footprint;
  
  // Calculate percentages
  const totalRaw = breakdown.transport + breakdown.diet + breakdown.energy + 2000;
  const getPercent = (val) => Math.round((val / totalRaw) * 100);

  let statusColor = "var(--primary-color)";
  let statusText = "Excellent";
  
  if (total > 15) {
    statusColor = "var(--danger-color)";
    statusText = "Needs Improvement";
  } else if (total > 10) {
    statusColor = "var(--warning-color)";
    statusText = "Average";
  }

  return (
    <div className="glass-card animate-fade-in delay-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Activity size={24} className="text-accent" />
          Your Footprint Overview
        </h2>
        <button onClick={resetData} className="btn btn-ghost" title="Retake Assessment">
          <RefreshCw size={18} />
        </button>
      </div>

      <div className="text-center mb-4 p-4 rounded-lg" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <p className="text-secondary mb-1">Annual Carbon Footprint</p>
        <div className="text-4xl font-bold" style={{ color: statusColor }}>
          {total} <span className="text-xl text-secondary">tons CO₂e</span>
        </div>
        <p className="text-sm mt-1 font-medium" style={{ color: statusColor }}>{statusText}</p>
      </div>

      <h3 className="text-xl font-bold mb-2">Breakdown</h3>
      <div className="flex" style={{ flexDirection: 'column', gap: '1rem' }}>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="flex items-center gap-1"><Car size={16}/> Transport</span>
            <span>{getPercent(breakdown.transport)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${getPercent(breakdown.transport)}%`, background: '#3b82f6' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="flex items-center gap-1"><Leaf size={16}/> Diet</span>
            <span>{getPercent(breakdown.diet)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${getPercent(breakdown.diet)}%`, background: '#10b981' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="flex items-center gap-1"><Zap size={16}/> Home Energy</span>
            <span>{getPercent(breakdown.energy)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${getPercent(breakdown.energy)}%`, background: '#f59e0b' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
