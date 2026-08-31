import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/contentData';
import { Search, Phone, MessageSquare, Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Product' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact us' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notice Bar */}
      <div className="top-notice-bar">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span>📍 {COMPANY_INFO.location}</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>★ 25+ Years of Proven Packaging Mastery</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#FBBF24', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={14} />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Saroj Packaging, I want to inquire about packaging materials.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#34D399', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <MessageSquare size={14} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="navbar-inner">
            {/* Logo without box */}
            <button onClick={() => handleNavClick('home')} className="brand-logo" id="cleanBrandLogo" aria-label="Saroj Packaging Home">
              <img src="/images/logo.png" alt="Saroj Packaging Logo" />
            </button>

            {/* Nav Menu */}
            <ul className={`nav-menu ${mobileOpen ? 'open' : ''}`} id="cleanNavMenu">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                    id={`cleanNavItem-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Nav Actions */}
            <div className="nav-actions">
              {/* Call Direct Link */}
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="nav-action-call-btn"
                title={`Call ${COMPANY_INFO.phone}`}
              >
                <Phone size={17} />
                <span className="hide-mobile-sm">{COMPANY_INFO.phone}</span>
              </a>

              {/* WhatsApp Link */}
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Saroj Packaging, I would like to inquire about packaging materials.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-action-wa-btn"
                title="WhatsApp Direct (97111 30881)"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare size={18} />
                <span className="hide-mobile-md">WhatsApp</span>
              </a>

              {/* Request Quote Button */}
              <button
                className="btn-pill-cart"
                onClick={() => onOpenQuote('Wholesale Requirement')}
                id="cleanHeaderQuoteBtn"
              >
                <ShoppingBag size={17} />
                <span>Get Quote</span>
              </button>

              <button
                className="mobile-menu-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
