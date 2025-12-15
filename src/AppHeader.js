import React from 'react';

const AppHeader = ({ onFontSizeChange }) => {
  return (
    <header className="app-header">
      <div className="author-info">
        <h1>Autor: Kamil Surlas</h1>
      </div>
      
      <div className="font-controls">
        <button 
          className="font-btn size-small" 
          onClick={() => onFontSizeChange('12px')}
          title="Ustaw małą czcionkę"
        >
          A
        </button>

        <button 
          className="font-btn size-medium" 
          onClick={() => onFontSizeChange('16px')}
          title="Ustaw średnią czcionkę"
        >
          A
        </button>

        <button 
          className="font-btn size-large" 
          onClick={() => onFontSizeChange('20px')}
          title="Ustaw dużą czcionkę"
        >
          A
        </button>
      </div>
    </header>
  );
};

export default AppHeader;