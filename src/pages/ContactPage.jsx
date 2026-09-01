import React, { useState } from 'react';
import { COMPANY_INFO, CUSTOMER_REVIEWS, FAQS_DATA } from '../data/contentData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Star, 
  ChevronDown, 
  CheckCircle2, 
  Search, 
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage({ setActivePage, onShowToast }) {
  const [activeFaq, setActiveFaq] = useState(1);
  const [faqSearch, setFaqSearch] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    material: 'Corrugated Rolls',
    quantity: '',
    message: ''
  });

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const filteredFaqs = FAQS_DATA.filter(faq =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const waText = `Hello Saroj Packaging,\nNew Inquiry from Website Contact Form:\n- Name/Company: ${contactForm.name}\n- Mobile: ${contactForm.phone}\n- Email: ${contactForm.email || 'N/A'}\n- Required Material: ${contactForm.material}\n- Estimated Qty: ${contactForm.quantity || 'Wholesale Batch'}\n- Message: ${contactForm.message}`;

    onShowToast('Inquiry submitted! Opening WhatsApp for instant coordination...');

    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(waText)}`, '_blank');
      setContactForm({
        name: '',
        phone: '',
        email: '',
        material: 'Corrugated Rolls',
        quantity: '',
        message: ''
      });
    }, 800);
  };

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <section className="section-clean" style={{ background: 'var(--bg-page)', padding: '3.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            Customer Desk & Greater Noida Hub
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            Reviews, FAQs & Contact
          </h1>
          <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
            Explore verified customer reviews, clear answers to common packaging questions, and direct contact with our Greater Noida team.
          </p>
        </div>
      </section>

      {/* Customer Reviews Wall */}
      <section className="section-clean" style={{ background: '#FFFFFF' }} id="customerReviews">
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Customer Reviews
            </div>
            <h2>What Our Customers Say</h2>
            <p>
              Authentic feedback from manufacturing plants, warehouse logistics managers, and packaging buyers.
            </p>
          </div>

          <div className="reviews-grid-clean">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div key={rev.id} className="review-card-clean">
                <div>
                  <div className="review-stars-clean">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-heading)' }}>
                    “{rev.title}”
                  </h4>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    “{rev.review}”
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#FBBF24', color: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem' }}>
                    {rev.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-heading)' }}>{rev.author}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.company} • {rev.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-clean" style={{ background: 'var(--bg-page)' }} id="faqs">
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Help & Clarity
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>
              Have questions about our packaging materials, minimum order quantities, or customized corrugated box sizes?
            </p>
          </div>

          {/* Search FAQ Bar */}
          <div style={{ maxWidth: '560px', margin: '0 auto 3rem auto', position: 'relative' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search FAQs (e.g. corrugated rolls, boxes, duplex, paper)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              style={{ paddingLeft: '3rem', borderRadius: 'var(--radius-pill)', background: '#FFFFFF' }}
            />
            <Search size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>

          {/* FAQ Accordion */}
          <div className="faq-wrap-clean">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item-clean ${activeFaq === faq.id ? 'active' : ''}`}
                >
                  <button
                    className="faq-question-clean"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={activeFaq === faq.id}
                  >
                    <span>{faq.id}. {faq.question}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: activeFaq === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: activeFaq === faq.id ? '#F59E0B' : '#6B7280'
                      }}
                    />
                  </button>
                  <div className="faq-answer-clean">
                    {faq.answer}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', color: 'var(--text-body)', padding: '2rem' }}>
                No matching questions found for "{faqSearch}". Please contact our desk directly below!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form & Coordinates Section */}
      <section className="section-clean" style={{ background: '#FFFFFF' }} id="contactFormSection">
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Get in Touch
            </div>
            <h2>Connect with Saroj Packaging</h2>
            <p>
              Based in Greater Noida, we serve corporate and industrial enterprises across India.
            </p>
          </div>

          <div className="contact-grid-clean">
            {/* Contact Coordinates */}
            <div className="contact-info-card-clean">
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                  Direct Reach
                </div>
                <h3 style={{ fontSize: '1.85rem', marginBottom: '0.75rem' }}>
                  Greater Noida Hub
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.75' }}>
                  Our technical sales and production facility is equipped to handle customized packaging requests with high turnaround speed.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div className="feature-icon-circle" style={{ width: '46px', height: '46px', fontSize: '1.2rem', marginBottom: 0, flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Office & Operations Hub</h4>
                  <p style={{ color: 'var(--text-body)' }}>{COMPANY_INFO.location}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div className="feature-icon-circle" style={{ width: '46px', height: '46px', fontSize: '1.2rem', marginBottom: 0, flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Phone / Inquiries</h4>
                  <p style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'var(--text-body)', fontWeight: 600 }}>{COMPANY_INFO.phone}</a>
                    <a href={`tel:${COMPANY_INFO.phoneSecondary}`} style={{ color: 'var(--text-body)', fontWeight: 600 }}>{COMPANY_INFO.phoneSecondary}</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div className="feature-icon-circle" style={{ width: '46px', height: '46px', fontSize: '1.2rem', marginBottom: 0, flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email Support</h4>
                  <p>
                    <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--text-body)' }}>{COMPANY_INFO.email}</a>
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Saroj Packaging, I want to discuss a bulk packaging requirement.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', gap: '0.7rem' }}
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Now: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick RFQ Form */}
            <div className="contact-form-card-clean">
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                Instant RFQ Desk
              </div>
              <h3 style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>Send Us Your Requirement</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                Provide your estimated sizes, volume, or raw material needs to get an accurate commercial quotation.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name / Company Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Vikas Agarwal (National Logistics)"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>

                <div className="form-grid-2col">
                  <div className="form-group">
                    <label>Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      className="form-control"
                      placeholder="e.g. +91 97111 30881"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="purchase@company.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="form-group">
                    <label>Product Material *</label>
                    <select
                      className="form-control"
                      value={contactForm.material}
                      onChange={(e) => setContactForm({ ...contactForm, material: e.target.value })}
                    >
                      <option value="Corrugated Rolls">Corrugated Rolls (2-Ply Fluted)</option>
                      <option value="Corrugated Boxes">Corrugated Boxes (3/5/7-Ply)</option>
                      <option value="Duplex Paper">Duplex Paper (Grey/White Back)</option>
                      <option value="Industrial Paper & Kraft">Industrial Paper & Kraft Reels</option>
                      <option value="Other Packaging Materials">Other Allied Materials</option>
                      <option value="Custom Size / Spec">Custom Sizing / Die-Cut Spec</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Estimated Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. 2000 Cartons / 100 Rolls"
                      value={contactForm.quantity}
                      onChange={(e) => setContactForm({ ...contactForm, quantity: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message / Dimensions / Special Specifications *</label>
                  <textarea
                    required
                    className="form-control"
                    rows={4}
                    placeholder="Tell us about your required dimensions, GSM weight, delivery location, or printing details..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-yellow" style={{ width: '100%', gap: '0.75rem' }}>
                  <Send size={18} />
                  <span>Send Requirement & Connect on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
