import { useState, useEffect } from "react";
import { HomePage } from "./HomePage";
import { SupportPage } from "./SupportPage";
import "./index.css";

export function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Apply dark theme
    document.documentElement.classList.add('dark');
    
    // Handle initial hash
    const hash = window.location.hash.slice(1);
    if (hash === 'support') {
      setCurrentPage('support');
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      setCurrentPage(newHash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = page === 'home' ? '' : page;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {currentPage === 'support' ? (
        <SupportPage onNavigate={navigate} />
      ) : (
        <HomePage onNavigate={navigate} />
      )}
    </div>
  );
}

export default App;
