// src/components/DarkModeToggle.js
import React, { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <button id="darkToggle" onClick={toggleDarkMode} title="Toggle dark mode">
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default DarkModeToggle;
