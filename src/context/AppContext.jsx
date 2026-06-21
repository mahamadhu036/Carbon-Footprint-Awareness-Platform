import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

// Simplified CO2 estimates in kg/year per choice
const CO2_ESTIMATES = {
  transport: {
    car: 4600,
    public: 1500,
    bike_walk: 0,
  },
  diet: {
    meat_heavy: 3300,
    average: 2500,
    vegetarian: 1700,
    vegan: 1500,
  },
  energy: {
    high: 5000,
    average: 3500,
    low: 2000,
    renewable: 500,
  }
};

export const AppProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(() => {
    const saved = localStorage.getItem('ecoAuth');
    return saved ? JSON.parse(saved) : null;
  });

  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('ecoUserData');
    return saved ? JSON.parse(saved) : null;
  });

  const [completedActions, setCompletedActions] = useState(() => {
    const saved = localStorage.getItem('ecoActions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (userAuth) {
      localStorage.setItem('ecoAuth', JSON.stringify(userAuth));
    } else {
      localStorage.removeItem('ecoAuth');
    }
  }, [userAuth]);

  useEffect(() => {
    if (userData) {
      localStorage.setItem('ecoUserData', JSON.stringify(userData));
    }
  }, [userData]);

  useEffect(() => {
    localStorage.setItem('ecoActions', JSON.stringify(completedActions));
  }, [completedActions]);

  const login = (email) => {
    setUserAuth({ email });
  };

  const logout = () => {
    setUserAuth(null);
  };

  const calculateFootprint = (data) => {
    const transportVal = CO2_ESTIMATES.transport[data.transport] || 0;
    const dietVal = CO2_ESTIMATES.diet[data.diet] || 0;
    const energyVal = CO2_ESTIMATES.energy[data.energy] || 0;
    
    // Base footprint + components
    const totalKg = transportVal + dietVal + energyVal + 2000; // 2000 for public services etc
    return {
      total: Math.round(totalKg / 1000 * 10) / 10, // convert to tons
      breakdown: {
        transport: transportVal,
        diet: dietVal,
        energy: energyVal
      }
    };
  };

  const completeAssessment = (data) => {
    const footprint = calculateFootprint(data);
    setUserData({ ...data, footprint });
  };

  const toggleAction = (actionId) => {
    setCompletedActions(prev => 
      prev.includes(actionId) 
        ? prev.filter(id => id !== actionId)
        : [...prev, actionId]
    );
  };

  const resetData = () => {
    localStorage.removeItem('ecoUserData');
    localStorage.removeItem('ecoActions');
    setUserData(null);
    setCompletedActions([]);
  };

  return (
    <AppContext.Provider value={{
      userAuth,
      login,
      logout,
      userData,
      completedActions,
      completeAssessment,
      toggleAction,
      resetData
    }}>
      {children}
    </AppContext.Provider>
  );
};
