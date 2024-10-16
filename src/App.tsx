import React, { Suspense } from 'react'; // Single import for React and Suspense
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { Home } from './views/Home';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  );
};

const Dashboard = React.lazy(() => import('./views/Dashboard'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <ThemeToggler />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
