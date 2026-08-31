import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import { MessageSquare, CheckCircle } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('saroj_theme') || 'dark');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');
  const [toast, setToast] = useState({ show: false, message: '' });

  // Sync Theme to Root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('saroj_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 4000);
  };

  const handleOpenQuote = (productName = 'General Packaging Solution') => {
    setQuoteProduct(productName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="app-root">
      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Page Routing */}
      <main>
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'about' && (
          <AboutPage
            setActivePage={setActivePage}
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'products' && (
          <ProductsPage
            setActivePage={setActivePage}
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage
            setActivePage={setActivePage}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenQuote={handleOpenQuote}
      />

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href={`https://wa.me/919711130881?text=${encodeURIComponent("Hello Saroj Packaging, I have an urgent packaging requirement.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Connect on WhatsApp"
        id="reactFloatingWhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#FFFFFF" aria-hidden="true">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778 1-.954 1.2-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.783-1.676-2.083-.175-.3-.019-.462.132-.612.135-.135.301-.35.451-.525.15-.175.201-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.633-.927-2.235-.244-.587-.492-.507-.677-.516-.175-.009-.376-.01-.577-.01-.2 0-.526.075-.802.375-.276.3-1.053 1.028-1.053 2.508 0 1.48 1.078 2.91 1.228 3.11.15.2 2.122 3.24 5.141 4.542.718.31 1.278.495 1.714.634.722.23 1.38.197 1.9.12.58-.087 1.78-.727 2.031-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zm-5.419 7.618h-.008C10.363 22 8.7 21.54 7.247 20.675l-.52-.309-3.87 1.015 1.033-3.773-.339-.54A9.957 9.957 0 012.052 12c0-5.514 4.486-10 10-10s10 4.486 10 10c0 5.514-4.486 10-10 10zm0-18.5c-4.687 0-8.5 3.813-8.5 8.5 0 1.638.468 3.17 1.282 4.482l.199.32-.613 2.241 2.296-.602.311.185a8.47 8.47 0 004.325 1.186h.004c4.686 0 8.5-3.813 8.5-8.5s-3.814-8.5-8.5-8.5z"/>
        </svg>
      </a>

      {/* Global Quotation Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={quoteProduct}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <div className={`toast-notification ${toast.show ? 'show' : ''}`} id="reactToast">
        <CheckCircle size={18} color="var(--primary-red)" />
        <span>{toast.message}</span>
      </div>
    </div>
  );
}

export default App;
