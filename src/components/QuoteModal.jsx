import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/contentData';
import { X, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose, defaultProduct, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: defaultProduct || 'Corrugated Packaging Materials',
    quantity: '500 Units / Batch',
    notes: ''
  });

  useEffect(() => {
    if (defaultProduct) {
      setFormData(prev => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Confetti effect
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    const waText = `Hello Saroj Packaging,\nQuote Request for ${formData.product}:\n- Name/Company: ${formData.name}\n- Contact: ${formData.phone}\n- Email: ${formData.email || 'N/A'}\n- Quantity: ${formData.quantity}\n- Specific Requirements: ${formData.notes || 'Standard specifications'}`;

    onShowToast(`Preparing quotation request for ${formData.product}...`);
    
    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(waText)}`, '_blank');
      onClose();
    }, 800);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="section-tag" style={{ marginBottom: '0.5rem' }}>Direct B2B Inquiry</div>
        <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-red)', marginBottom: '0.4rem' }}>
          Request Instant Quotation
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Connect directly with Saroj Packaging’s technical sales desk in Greater Noida.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name / Company Name *</label>
            <input
              type="text"
              required
              className="form-control"
              placeholder="e.g. Rajesh Sharma (ABC Manufacturing)"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="modal-grid-2col" style={{ display: 'grid', gap: '1rem' }}>
            <div className="form-group">
              <label>Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                className="form-control"
                placeholder="e.g. +91 97111 30881"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="procurement@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="modal-grid-2col" style={{ display: 'grid', gap: '1rem' }}>
            <div className="form-group">
              <label>Product Material *</label>
              <select
                className="form-control"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              >
                <option value="Corrugated Rolls">Corrugated Rolls (2-Ply)</option>
                <option value="Corrugated Boxes">Corrugated Boxes (3/5/7-Ply)</option>
                <option value="Duplex Paper & Board">Duplex Paper & Board</option>
                <option value="Industrial Paper & Kraft">Industrial Paper & Kraft Reels</option>
                <option value="Other Packaging Materials">Other Allied Supplies</option>
                <option value="Custom Packaging Spec">Custom Sizing / Die-Cut</option>
              </select>
            </div>

            <div className="form-group">
              <label>Estimated Quantity *</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="e.g. 1000 Boxes / 50 Rolls"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Dimensions / GSM / Custom Specifications</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="e.g. 14x10x8 inches, 5-Ply 150 GSM, 2-color brand printing required"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '0.75rem' }}>
            <Send size={18} />
            <span>Submit Quotation & Send on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
