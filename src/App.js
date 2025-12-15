import React, { useState } from 'react';
import AppHeader from './AppHeader';
import AppCalculator from './AppCalculator';
import './App.css';

const App = () => {
  const [fontSize, setFontSize] = useState('16px');

  return (
    <div 
      className="app-root" 
      style={{ fontSize: fontSize }}
    >
      <AppHeader onFontSizeChange={setFontSize} />
      <AppCalculator />
    </div>
  );
};

export default App;