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
        💬
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
