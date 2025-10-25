import React, { useState, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import FallbackContent from './components/FallbackContent';
import WelcomeScreen from './Pages/WelcomeScreen';
import Home from './Pages/Home';
import About from './Pages/About';
import Portofolio from './Pages/Portofolio';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/Background';
import ChatBot from './components/ChatBot';
import "./index.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleWelcomeComplete = () => {
    try {
      setShowWelcome(false);
      localStorage.setItem('hasVisited', 'true');
    } catch (error) {
      console.error('Error during welcome transition:', error);
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-gray-400 mb-6">We're working to fix this issue.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg hover:opacity-80 transition-opacity"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={<FallbackContent />}>
      <div className="min-h-screen bg-[#030014]">
        <AnimatedBackground />
        
        {showWelcome ? (
          <WelcomeScreen onLoadingComplete={handleWelcomeComplete} />
        ) : (
          <>
            <Navbar />
            <Home />
            <About />
            <Portofolio />
            <Contact />
            <ChatBot />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;