import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Start in dark mode by default
  const [dark, setDark] = useState(true);

  // On mount, clear any pre-existing class on <html>
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  // Toggle the dark class and persist preference
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}