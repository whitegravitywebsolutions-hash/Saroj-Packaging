import React, { useState } from 'react';
import { PRODUCTS_DATA, COMPANY_INFO } from '../data/contentData';
import PackagingCalculator3D from '../components/PackagingCalculator3D';
import { Check, Send, FileText, ArrowRight, MessageSquare, Sliders, Sparkles } from 'lucide-react';

export default function ProductsPage({ setActivePage, onOpenQuote }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Products (5)' },
    { id: 'rolls', label: 'Corrugated Rolls' },
    { id: 'boxes', label: 'Corrugated Boxes' },
    { id: 'duplex', label: 'Duplex Paper' },
    { id: 'paper', label: 'Paper & Kraft Reels' },
    { id: 'other', label: 'Other Materials' }
  ];

  const filteredProducts = selectedFilter === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === selectedFilter);

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="section-clean" style={{ background: 'var(--bg-page)', padding: '3.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            Wholesale & Industrial Grade
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            Products & Solutions
          </h1>
          <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            We deal primarily in a wide range of corrugated rolls, paper, duplex paper, corrugated boxes, and other packaging materials designed for practical, reliable performance.
          </p>
        </div>
      </section>

      {/* Catalog & Filter */}
      <section className="section-clean" style={{ background: '#FFFFFF' }} id="productsCatalog">
        <div className="container">
          {/* Clean Pill Filter Tabs */}
          <div className="filter-tabs-clean">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`filter-btn-clean ${selectedFilter === tab.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Cards */}
          <div className="product-grid-clean">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="product-card-clean" id={`productCard-${prod.id}`}>
                <div className="product-img-clean">
                  <img src={prod.image} alt={prod.name} />
                  <span className="product-badge-yellow">{prod.badge}</span>
                </div>
                <div className="product-body-clean">
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary-red)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {prod.tagline}
                  </div>
                  <h3>{prod.name}</h3>
                  <p>{prod.description}</p>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-heading)' }}>
                      Technical Specifications:
                    </div>
                    <ul className="product-specs-clean">
                      {prod.specs.map((sp, idx) => (
                        <li key={idx}>
                          <span style={{ width: '6px', height: '6px', backgroundColor: '#F59E0B', borderRadius: '50%', flexShrink: 0 }}></span>
                          <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{sp.label}:</span>
                          <span>{sp.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-heading)' }}>
                      Key Features & Applications:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                      {prod.features.map((feat, fidx) => (
                        <li key={fidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                          <Check size={14} color="#D97706" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-footer-clean">
                    <button
                      className="btn btn-yellow btn-sm"
                      onClick={() => onOpenQuote(prod.name)}
                    >
                      Enquire Now
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello Saroj Packaging, I want to inquire about specifications and wholesale pricing for ${prod.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-pill-outline btn-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Interactive Calculator Section */}
      <section className="section-clean" style={{ background: 'var(--bg-page)' }} id="calculatorSection">
        <div className="container">
          <PackagingCalculator3D onOpenQuote={onOpenQuote} />
        </div>
      </section>

      {/* Specifications Comparison Matrix */}
      <section className="section-clean" style={{ background: '#FFFFFF' }} id="specsMatrix">
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Quality Standards
            </div>
            <h2>Technical Specifications Matrix</h2>
            <p>
              Detailed technical grade comparisons for Corrugated Rolls, Boxes, Duplex Paper, and Kraft Paper reels.
            </p>
          </div>

          <div style={{ overflowX: 'auto', background: '#FAF8F3', border: '1px solid var(--border-card)', borderRadius: '18px', padding: '1.75rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #111827', color: '#111827' }}>
                  <th style={{ padding: '1rem' }}>Product Line</th>
                  <th style={{ padding: '1rem' }}>GSM / Caliper Range</th>
                  <th style={{ padding: '1rem' }}>Burst Factor (BF) / ECT</th>
                  <th style={{ padding: '1rem' }}>Standard Formats</th>
                  <th style={{ padding: '1rem' }}>Target Applications</th>
                </tr>
              </thead>
              <tbody style={{ color: '#4B5563' }}>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem', fontWeight: 800, color: '#111827' }}>Corrugated Rolls</td>
                  <td style={{ padding: '1rem' }}>80 – 250 GSM (B & E Flute)</td>
                  <td style={{ padding: '1rem' }}>16 BF – 24 BF</td>
                  <td style={{ padding: '1rem' }}>Widths 24" to 52" (Custom Slit Sizes)</td>
                  <td style={{ padding: '1rem' }}>Wrapping, furniture cushioning & surface protection</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem', fontWeight: 800, color: '#111827' }}>Corrugated Boxes (3-Ply)</td>
                  <td style={{ padding: '1rem' }}>100 – 180 GSM Kraft</td>
                  <td style={{ padding: '1rem' }}>18 BF – 24 BF</td>
                  <td style={{ padding: '1rem' }}>Custom RSC & Die-cut cartons</td>
                  <td style={{ padding: '1rem' }}>Lightweight consumer goods, eCommerce & apparel</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem', fontWeight: 800, color: '#111827' }}>Corrugated Boxes (5-Ply / 7-Ply)</td>
                  <td style={{ padding: '1rem' }}>140 – 250 GSM Heavy</td>
                  <td style={{ padding: '1rem' }}>22 BF – 32 BF (High ECT)</td>
                  <td style={{ padding: '1rem' }}>Master export shipping cartons</td>
                  <td style={{ padding: '1rem' }}>Export goods, automotive parts & machinery</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem', fontWeight: 800, color: '#111827' }}>Duplex Paper (Grey/White Back)</td>
                  <td style={{ padding: '1rem' }}>180 – 450 GSM</td>
                  <td style={{ padding: '1rem' }}>Coated LWC / HWC</td>
                  <td style={{ padding: '1rem' }}>Custom flat sheets & reels</td>
                  <td style={{ padding: '1rem' }}>Mono-cartons, pharma boxes & retail packaging</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', fontWeight: 800, color: '#111827' }}>Industrial Kraft Paper</td>
                  <td style={{ padding: '1rem' }}>90 – 350 GSM</td>
                  <td style={{ padding: '1rem' }}>16 BF – 32 BF Virgin & Test</td>
                  <td style={{ padding: '1rem' }}>Jumbo converting reels</td>
                  <td style={{ padding: '1rem' }}>Corrugation, fluting medium, paper bags & core tubes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-clean" style={{ background: '#FEF3C7' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', color: '#111827' }}>
            Need Custom Packaging Sizing or Lab-Tested Samples?
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto 2rem auto' }}>
            Send your required product, quantity, size, or custom specifications to our technical packaging team in Greater Noida.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button
              className="btn btn-red btn-lg"
              onClick={() => onOpenQuote('Custom Size & Sample Request')}
            >
              Request Custom Prototype
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Saroj Packaging, I want to discuss custom sizing and sample requests.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={18} />
              <span>WhatsApp: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
