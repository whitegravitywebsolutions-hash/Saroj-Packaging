import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCTS_DATA, CUSTOMER_REVIEWS, FAQS_DATA } from '../data/contentData';
import PackagingCalculator3D from '../components/PackagingCalculator3D';
import { 
  ShieldCheck, 
  Truck, 
  Award, 
  ArrowRight, 
  Star, 
  MessageSquare,
  Package,
  Layers,
  ChevronRight,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Phone
} from 'lucide-react';

export default function HomePage({ setActivePage, onOpenQuote }) {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-warm" id="heroSection">
        <div className="container">
          <div className="hero-grid-reference">
            {/* Left Content */}
            <div className="hero-content">
              {/* Top Trust Badge */}
              <div className="hero-badge-pill">
                <Sparkles size={16} className="hero-badge-icon" />
                <span>25+ Years of Packaging Mastery in Greater Noida</span>
              </div>

              <h1 className="hero-title-bold">
                PACKAGING PRODUCTS,<br />
                <span className="hero-title-subtitle">POCKET FRIENDLY </span>
                <span className="highlight">PRICE.</span>
              </h1>

              <p className="hero-subtitle-text">
                Direct factory supply of premium corrugated rolls, heavy-duty 3/5/7-ply boxes, duplex boards, and high-strength kraft paper reels. Precision engineered for maximum cargo protection with pocket-friendly wholesale rates.
              </p>

              {/* Action Buttons Group */}
              <div className="hero-cta-group">
                <button
                  className="btn btn-yellow"
                  onClick={() => handleNav('products')}
                  id="heroShopNowBtn"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Saroj Packaging, I want to inquire about packaging materials.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  id="heroWhatsAppBtn"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp: {COMPANY_INFO.phone}</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="btn btn-pill-outline"
                  id="heroCallBtn"
                >
                  <Phone size={17} />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Hero Quick Highlights Row */}
              <div className="hero-highlights-row">
                <div className="hero-highlight-item">
                  <CheckCircle2 size={16} color="#16A34A" />
                  <span>Wholesale Factory Rates</span>
                </div>
                <div className="hero-highlight-item">
                  <CheckCircle2 size={16} color="#16A34A" />
                  <span>Custom Sizing &amp; Slitting</span>
                </div>
                <div className="hero-highlight-item">
                  <CheckCircle2 size={16} color="#16A34A" />
                  <span>Fast Dispatch in NCR</span>
                </div>
              </div>
            </div>

            {/* Right Visual Showcase */}
            <div className="hero-visual">
              <div className="hero-showcase-card">
                <div className="hero-card-image-wrap">
                  <img 
                    src="/images/corrugated_rolls.jpg" 
                    alt="Saroj Packaging Corrugated Materials in Greater Noida" 
                    className="hero-main-img"
                  />
                  <div className="hero-img-overlay-tag">
                    <span>✨ High BF Corrugated Rolls &amp; Boxes</span>
                  </div>
                </div>

                {/* Floating Micro Cards */}
                <div className="hero-float-badge badge-top-right">
                  <Award size={20} className="float-badge-icon gold" />
                  <div>
                    <div className="float-badge-title">25+ Years</div>
                    <div className="float-badge-sub">Trusted Excellence</div>
                  </div>
                </div>

                <div className="hero-float-badge badge-bottom-left">
                  <ShieldCheck size={20} className="float-badge-icon green" />
                  <div>
                    <div className="float-badge-title">100% Tested</div>
                    <div className="float-badge-sub">GSM &amp; Bursting Strength</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED HIGH-IMPACT STATS BAR */}
      <section className="stats-bar-section" id="statsBar">
        <div className="container">
          <div className="stats-bar-grid">
            <div className="stat-card">
              <div className="stat-icon-wrap">
                <Award size={28} />
              </div>
              <div className="stat-info">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years of Industry Excellence</div>
                <div className="stat-sub">Serving Greater Noida &amp; NCR since 2001</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap">
                <Package size={28} />
              </div>
              <div className="stat-info">
                <div className="stat-number">500+</div>
                <div className="stat-label">B2B &amp; Industrial Clients</div>
                <div className="stat-sub">FMCG, automotive, pharma &amp; e-commerce</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap">
                <ShieldCheck size={28} />
              </div>
              <div className="stat-info">
                <div className="stat-number">100%</div>
                <div className="stat-label">Quality Assured Materials</div>
                <div className="stat-sub">Strict GSM, BF &amp; compression standards</div>
              </div>
            </div>

            <div className="stat-card stat-card-cta">
              <div className="stat-icon-wrap cta-pulse">
                <Phone size={28} />
              </div>
              <div className="stat-info">
                <div className="stat-number-phone">{COMPANY_INFO.phone}</div>
                <div className="stat-label">Direct Call &amp; WhatsApp Desk</div>
                <div className="stat-sub">
                  <a href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Saroj Packaging, I want to discuss packaging requirements.")}`} target="_blank" rel="noopener noreferrer" className="stat-wa-link">
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature / Benefits Section */}
      <section className="section-clean" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Why Choose Saroj Packaging
            </div>
            <h2>Packaging Solutions You Can Rely On</h2>
            <p>
              We combine strict quality control, flexible production sizing, and dependable Greater Noida supply chain logistics.
            </p>
          </div>

          <div className="features-grid-clean">
            <div className="feature-box-clean">
              <div className="feature-icon-circle">✨</div>
              <h3>Consistent Quality</h3>
              <p>Every roll, sheet, and carton meets verified GSM and bursting strength criteria for long-lasting protection.</p>
            </div>

            <div className="feature-box-clean">
              <div className="feature-icon-circle">🚚</div>
              <h3>Timely Delivery</h3>
              <p>Strategically based in Greater Noida to ensure fast dispatch and keep your factory assembly lines uninterrupted.</p>
            </div>

            <div className="feature-box-clean">
              <div className="feature-icon-circle">🤝</div>
              <h3>Customer Understanding</h3>
              <p>25 years of field experience tailoring flute types, ply strengths, and calipers to your specific cargo requirements.</p>
            </div>

            <div className="feature-box-clean">
              <div className="feature-icon-circle">💰</div>
              <h3>Pocket-Friendly Rates</h3>
              <p>Direct wholesale pricing and bulk supply advantages that optimize your operational packaging expenditures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Products Showcase */}
      <section className="section-clean" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Our Key Products
            </div>
            <h2>Primary Packaging Materials</h2>
            <p>
              Explore our core product offerings suited for diverse industrial, logistics, and retail packaging needs.
            </p>
          </div>

          <div className="product-grid-clean">
            {PRODUCTS_DATA.slice(0, 3).map((prod) => (
              <div key={prod.id} className="product-card-clean">
                <div className="product-img-clean">
                  <img src={prod.image} alt={prod.name} />
                  <span className="product-badge-yellow">{prod.badge}</span>
                </div>
                <div className="product-body-clean">
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary-red)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {prod.tagline}
                  </div>
                  <h3>{prod.name}</h3>
                  <p>{prod.description}</p>

                  <ul className="product-specs-clean">
                    {prod.specs.slice(0, 3).map((sp, idx) => (
                      <li key={idx}>
                        <span style={{ width: '6px', height: '6px', backgroundColor: '#F59E0B', borderRadius: '50%', flexShrink: 0 }}></span>
                        <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{sp.label}:</span>
                        <span>{sp.value}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="product-footer-clean">
                    <button
                      className="btn btn-yellow btn-sm"
                      onClick={() => onOpenQuote(prod.name)}
                    >
                      Enquire Now
                    </button>
                    <button
                      className="btn btn-pill-outline btn-sm"
                      onClick={() => handleNav('products')}
                    >
                      View Specs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button className="btn btn-yellow btn-lg" onClick={() => handleNav('products')}>
              <span>View All 5 Product Lines & Specs</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Founder Spotlight (Clean Minimalist Design) */}
      <section className="section-clean" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="founder-card-clean">
            <div className="founder-grid-clean">
              <div className="founder-img-box-clean">
                <img src="/images/sanjeev_kumar_jain.jpg" alt="Mr. Sanjeev Kumar Jain, Founder of Saroj Packaging" />
              </div>

              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Leadership Profile
                </div>
                <h2 style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>
                  Founder – Sanjeev Kumar Jain
                </h2>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#4B5563', marginBottom: '1.25rem' }}>
                  25 Years of Packaging Excellence in Greater Noida
                </div>

                <p style={{ color: 'var(--text-body)', fontSize: '1.025rem', lineHeight: '1.75', marginBottom: '1rem' }}>
                  Mr. Sanjeev Kumar Jain, the founder of Saroj Packaging, has built the business with a strong focus on quality, reliability, and long-term customer relationships. Based in Greater Noida, his journey reflects a deep understanding of packaging materials and the evolving needs of businesses.
                </p>

                {/* Yellow Highlight Quote Box */}
                <div className="founder-quote-box-clean">
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    His Thoughts
                  </div>
                  <p className="founder-quote-text-clean">
                    {COMPANY_INFO.founderThoughts}
                  </p>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', fontWeight: 700, color: '#111827' }}>
                    — Sanjeev Kumar Jain, Founder
                  </div>
                </div>

                <p style={{ color: 'var(--text-body)', fontSize: '0.975rem', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                  Mr. Sanjeev Kumar Jain believes that understanding the customer's requirement is just as important as providing quality products. His approach is centered on maintaining strong relationships and delivering dependable solutions.
                </p>

                <button className="btn btn-pill-outline" onClick={() => handleNav('about')}>
                  Read Full Story & Mission →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Interactive Calculator Canvas */}
      <section className="section-clean" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <PackagingCalculator3D onOpenQuote={onOpenQuote} />
        </div>
      </section>

      {/* 3-Pillar Philosophy */}
      <section className="section-clean" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Our Guiding Philosophy
            </div>
            <h2>The Three Pillars of Saroj Packaging</h2>
            <p>
              This philosophy continues to guide Saroj Packaging as we grow and serve businesses with dependable packaging solutions.
            </p>
          </div>

          <div className="philosophy-grid-clean">
            {COMPANY_INFO.philosophy.map((item, idx) => (
              <div key={idx} className="philosophy-box-clean">
                <div className="philosophy-num-clean">0{idx + 1}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>{item.pillar}</h3>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-red)', marginBottom: '0.75rem' }}>{item.tagline}</h4>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-clean" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Customer Reviews
            </div>
            <h2>What Our Customers Say</h2>
            <p>
              Feedback from procurement heads and manufacturing partners across Greater Noida and NCR.
            </p>
          </div>

          <div className="reviews-grid-clean">
            {CUSTOMER_REVIEWS.slice(0, 3).map((rev) => (
              <div key={rev.id} className="review-card-clean">
                <div>
                  <div className="review-stars-clean">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-heading)' }}>
                    “{rev.title}”
                  </h4>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.65', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    “{rev.review}”
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#FBBF24', color: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.95rem' }}>
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

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-pill-outline" onClick={() => handleNav('contact')}>
              View All Reviews & FAQs →
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Preview */}
      <section className="section-clean" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Frequently Asked Questions
            </div>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>
              Clear answers to help you choose the right packaging materials for your business.
            </p>
          </div>

          <div className="faq-wrap-clean">
            {FAQS_DATA.slice(0, 4).map((faq) => (
              <div key={faq.id} className={`faq-item-clean ${activeFaq === faq.id ? 'active' : ''}`}>
                <button className="faq-question-clean" onClick={() => toggleFaq(faq.id)}>
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
            ))}
          </div>
        </div>
      </section>

      {/* Warm Clean Action CTA Banner */}
      <section className="section-clean" style={{ background: '#FEF3C7', borderTop: '1px solid #FDE68A', borderBottom: '1px solid #FDE68A' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>
            Ready for Dependable, Pocket-Friendly Packaging?
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto 2rem auto' }}>
            Contact Saroj Packaging today in Greater Noida for custom roll widths, box sizing, and instant wholesale quotes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button className="btn btn-red btn-lg" onClick={() => onOpenQuote('Wholesale Inquiry')}>
              Request Free Quote
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Saroj Packaging, I would like to discuss our packaging needs.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={18} />
              <span>WhatsApp: {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn btn-pill-outline btn-lg"
            >
              <Phone size={18} />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
