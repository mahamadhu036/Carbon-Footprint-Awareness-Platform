import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ArrowRight, Leaf, Car, Zap } from 'lucide-react';

const questions = [
  {
    id: 'transport',
    icon: <Car size={24} />,
    title: 'How do you usually get around?',
    options: [
      { id: 'car', label: 'Gas Car (Daily)' },
      { id: 'public', label: 'Public Transit' },
      { id: 'bike_walk', label: 'Bike / Walk / EV' }
    ]
  },
  {
    id: 'diet',
    icon: <Leaf size={24} />,
    title: 'What best describes your diet?',
    options: [
      { id: 'meat_heavy', label: 'Meat Heavy' },
      { id: 'average', label: 'Average (Mixed)' },
      { id: 'vegetarian', label: 'Vegetarian' },
      { id: 'vegan', label: 'Vegan' }
    ]
  },
  {
    id: 'energy',
    icon: <Zap size={24} />,
    title: 'How is your home powered?',
    options: [
      { id: 'high', label: 'High Usage (No efficiency)' },
      { id: 'average', label: 'Average Usage' },
      { id: 'low', label: 'Energy Efficient' },
      { id: 'renewable', label: '100% Renewable' }
    ]
  }
];

export default function Assessment() {
  const { completeAssessment } = useContext(AppContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (optionId) => {
    setAnswers(prev => ({ ...prev, [questions[currentStep].id]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeAssessment(answers);
    }
  };

  const q = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="glass-card animate-fade-in" style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <div className="text-center mb-4">
        <h2 className="text-3xl text-gradient mb-2">Calculate Your Footprint</h2>
        <p className="text-secondary">Let's start by understanding your daily habits.</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="form-group mt-4 animate-fade-in" key={currentStep}>
        <div className="flex items-center gap-2 mb-4">
          <div className="text-primary">{q.icon}</div>
          <h3 className="text-xl font-bold">{q.title}</h3>
        </div>
        
        <div className="radio-group">
          {q.options.map(opt => (
            <label 
              key={opt.id} 
              className={`radio-label ${answers[q.id] === opt.id ? 'selected' : ''}`}
            >
              <input
                type="radio"
                className="radio-input"
                name={q.id}
                value={opt.id}
                checked={answers[q.id] === opt.id}
                onChange={() => handleSelect(opt.id)}
              />
              <span className="font-medium">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button 
          className="btn btn-ghost"
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          style={{ opacity: currentStep === 0 ? 0.5 : 1 }}
        >
          Back
        </button>
        <button 
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!answers[q.id]}
        >
          {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
