import { useState, useEffect } from "react";
import { HomePage } from "./HomePage";
import { SupportPage } from "./SupportPage";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";
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
    } else if (hash === 'privacy') {
      setCurrentPage('privacy');
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
      {currentPage === 'support' ? (
        <SupportPage onNavigate={navigate} />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicyPage onNavigate={navigate} />
      ) : (
        <HomePage onNavigate={navigate} />
      )}
      <footer className="fixed bottom-0 right-0 p-4">
        <button
          onClick={() => navigate('privacy')}
          className="text-xs text-gray-400 hover:text-gray-300 underline transition-colors"
        >
          Privacy Policy
        </button>
      </footer>
    </div>
  );
}

export default App;
