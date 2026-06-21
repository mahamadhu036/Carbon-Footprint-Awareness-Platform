import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Lightbulb, TrendingDown } from 'lucide-react';

export default function Insights() {
  const { userData } = useContext(AppContext);

  if (!userData) return null;

  const generateInsights = () => {
    const insights = [];
    
    if (userData.transport === 'car') {
      insights.push("Your transportation footprint is high. Consider carpooling twice a week or switching one short drive to walking/biking to save up to 0.5 tons of CO₂ annually.");
    }
    
    if (userData.diet === 'meat_heavy') {
      insights.push("A meat-heavy diet significantly impacts emissions. Participating in 'Meatless Mondays' can lower your dietary footprint by 15%.");
    }

    if (userData.energy === 'high' || userData.energy === 'average') {
      insights.push("Home energy is a major contributor. Switching to LED bulbs and a smart thermostat can reduce your energy usage by 10-20%.");
    }

    if (insights.length === 0) {
      insights.push("You're doing great! Keep maintaining your eco-friendly lifestyle. Consider supporting local green initiatives.");
    }

    return insights;
  };

  const insights = generateInsights();

  return (
    <div className="glass-card animate-fade-in delay-200">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <Lightbulb size={24} className="text-warning" style={{ color: 'var(--warning-color)' }} />
        Smart Insights
      </h2>
      
      <div className="flex" style={{ flexDirection: 'column', gap: '1rem' }}>
        {insights.map((insight, idx) => (
          <div key={idx} className="flex gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid var(--accent-color)' }}>
            <TrendingDown size={20} className="text-accent flex-shrink-0 mt-1" />
            <p className="text-sm">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
