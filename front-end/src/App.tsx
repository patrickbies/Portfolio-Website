import { useState, useEffect } from 'react';
import AppRoutes from "./routes/AppRoutes.tsx"

function App() {
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [theme, setTheme] = useState(initialTheme);

  // Set the theme class on the root element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <AppRoutes />
}

export default App
