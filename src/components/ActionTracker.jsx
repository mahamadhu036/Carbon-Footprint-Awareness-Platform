import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CheckSquare, Check } from 'lucide-react';

const availableActions = [
  { id: 'action_1', title: 'Use a reusable water bottle today', co2Saved: '0.1 kg' },
  { id: 'action_2', title: 'Have a meatless meal', co2Saved: '1.5 kg' },
  { id: 'action_3', title: 'Walk or bike instead of driving', co2Saved: '2.0 kg' },
  { id: 'action_4', title: 'Turn off lights in empty rooms', co2Saved: '0.5 kg' },
  { id: 'action_5', title: 'Unplug unused electronics', co2Saved: '0.2 kg' },
];

export default function ActionTracker() {
  const { completedActions, toggleAction } = useContext(AppContext);

  return (
    <div className="glass-card animate-fade-in delay-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <CheckSquare size={24} className="text-primary" />
          Daily Actions
        </h2>
        <span className="text-sm font-medium bg-primary text-black px-2 py-1 rounded-full" style={{ background: 'var(--primary-color)', color: '#000' }}>
          {completedActions.length}/{availableActions.length} Done
        </span>
      </div>

      <div className="flex" style={{ flexDirection: 'column' }}>
        {availableActions.map(action => {
          const isCompleted = completedActions.includes(action.id);
          return (
            <div 
              key={action.id} 
              className={`action-item ${isCompleted ? 'completed' : ''}`}
              onClick={() => toggleAction(action.id)}
            >
              <div className="checkbox-custom">
                {isCompleted && <Check size={16} color="#000" strokeWidth={3} />}
              </div>
              <div className="flex-1">
                <h4 className="action-title font-medium">{action.title}</h4>
                <p className="text-xs text-secondary mt-1">Saves ~{action.co2Saved} CO₂</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
