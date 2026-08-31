import React from 'react';
import { COMPANY_INFO } from '../data/contentData';
import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageSquare } from 'lucide-react';

export default function Footer({ setActivePage, onOpenQuote }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-clean">
      <div className="container">
        <div className="footer-grid-clean">
          {/* Brand Info */}
          <div>
            <div className="brand-logo footer-brand-logo" style={{ marginBottom: '1.25rem' }}>
              <img src="/images/logo.png" alt="Saroj Packaging Logo" />
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: '1.7' }}>
              Saroj Packaging is Greater Noida's trusted manufacturer and supplier of corrugated rolls, master cartons, kraft reels, and industrial protective materials with 25+ years of proven craftsmanship.
            </p>
            <div style={{ fontSize: '0.875rem', color: '#FBBF24', marginTop: '1rem', fontWeight: 700 }}>
              Founder: {COMPANY_INFO.founder}
            </div>
          </div>

          {/* Clean Quick Navigation - Only Actual Pages */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('home')}>Home</button></li>
              <li><button onClick={() => handleNav('products')}>Product</button></li>
              <li><button onClick={() => handleNav('about')}>About</button></li>
              <li><button onClick={() => handleNav('contact')}>Contact us</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4>Greater Noida Hub</h4>
            <ul className="footer-links" style={{ gap: '0.9rem' }}>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#D1D5DB' }}>
                <MapPin size={18} style={{ color: '#FBBF24', flexShrink: 0, marginTop: '3px' }} />
                <span>{COMPANY_INFO.location}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#D1D5DB' }}>
                <Phone size={18} style={{ color: '#FBBF24', flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#FBBF24', fontWeight: 700 }}>
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#D1D5DB' }}>
                <MessageSquare size={18} style={{ color: '#34D399', flexShrink: 0 }} />
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Saroj Packaging, I want to inquire about packaging materials.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#34D399', fontWeight: 700 }}
                >
                  WhatsApp: {COMPANY_INFO.phone}
                </a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#D1D5DB' }}>
                <Mail size={18} style={{ color: '#FBBF24', flexShrink: 0 }} />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#D1D5DB' }}>
                <Clock size={18} style={{ color: '#FBBF24', flexShrink: 0 }} />
                <span>{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-clean">
          <div>
            © 2026 {COMPANY_INFO.name}. All rights reserved. 25 Years of Packaging Mastery.
          </div>
          <div style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>
            Designed by{' '}
            <a 
              href="https://whitegravity.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#FBBF24', fontWeight: 700, textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              White Gravity Web Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
