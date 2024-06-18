// src/App.jsx

import { useState } from 'react';
import './App.css';
import CatList from './components/CatList';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClickOnDarkButton = () => {
    setIsDarkMode(true);
  };

  const handleClickOnLightButton = () => {
    setIsDarkMode(false);
  };

  const [themeMode, setThemeMode] = useState('light');

  const handleClick = (event) => {
    const {
      target: { innerText },
    } = event;
    setThemeMode(innerText);
  };

  const setThemeOnClickHandler = (theme) => {
    setThemeMode(theme);
  };

  return (
    // <div className={isDarkMode ? 'dark' : 'light'}>
    <div className={themeMode}>
      <h1>Hello world!</h1>
      <menu>
        {/* <button onClick={handleClickOnDarkButton}> */}
        {/* <button onClick={handleClick}> */}
        <button onClick={() => setThemeOnClickHandler('dark')}>
          {/* <span role="img">🌕</span> */}
          dark
        </button>
        {/* <button onClick={handleClickOnLightButton}> */}
        <button onClick={() => setThemeOnClickHandler('light')}>
          {/* <span role="img">☀️</span> */}
          light
        </button>
      </menu>
      <CatList />
    </div>
  );
};

export default App;
