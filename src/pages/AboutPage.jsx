import React from 'react';
import { COMPANY_INFO } from '../data/contentData';
import { Target, Compass, Award, CheckCircle2, ShieldCheck, HeartHandshake, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function AboutPage({ setActivePage, onOpenQuote }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-page">
      {/* Header Banner */}
      <section className="section-clean" style={{ background: 'var(--bg-page)', padding: '3.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            25-Year Industrial Heritage
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            About Saroj Packaging
          </h1>
          <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
            Built on quality materials, dependable service, and a clear understanding of our customers' packaging requirements.
          </p>
        </div>
      </section>

      {/* Corporate Story */}
      <section className="section-clean" style={{ background: '#FFFFFF' }} id="companyStory">
        <div className="container">
          <div className="hero-grid-reference" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Corporate Profile
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                Packaging Solutions You Can Rely On
              </h2>
              <p style={{ color: 'var(--text-body)', marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
                <strong>Saroj Packaging</strong>, based in <strong>Greater Noida</strong>, is a trusted name in the packaging material industry, founded by <strong>Mr. Sanjeev Kumar Jain</strong>. With <strong>25 years of experience</strong> in the field, we have built our business around quality products, dependable service, and a clear understanding of our customers' packaging requirements.
              </p>
              <p style={{ color: 'var(--text-body)', marginBottom: '1.25rem', fontSize: '1.025rem', lineHeight: '1.8' }}>
                We deal primarily in a wide range of <strong>corrugated rolls, paper, duplex paper, corrugated boxes</strong>, and other packaging materials. Our focus is to provide practical and reliable packaging solutions suitable for different business and industrial requirements.
              </p>
              <p style={{ color: 'var(--text-body)', marginBottom: '2rem', fontSize: '1.025rem', lineHeight: '1.8' }}>
                Over the years, Saroj Packaging has developed strong knowledge of packaging materials and their applications. We work closely with our customers to understand their requirements and provide the right material with a focus on <strong>quality, consistency, and timely service</strong>.
              </p>

              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <button className="btn btn-yellow" onClick={() => handleNav('products')}>
                  <span>View Product Catalog</span>
                  <ArrowRight size={18} />
                </button>
                <button className="btn btn-pill-outline" onClick={() => handleNav('contact')}>
                  Contact Greater Noida Office
                </button>
              </div>
            </div>

            <div>
              <div className="founder-img-box-clean">
                <img src="/images/corrugated_boxes.jpg" alt="Saroj Packaging Corrugated Boxes" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="section-clean" style={{ background: 'var(--bg-page)' }} id="founderSection">
        <div className="container">
          <div className="founder-card-clean">
            <div className="founder-grid-clean">
              <div className="founder-img-box-clean">
                <img src="/images/sanjeev_kumar_jain.jpg" alt="Mr. Sanjeev Kumar Jain, Founder of Saroj Packaging" />
              </div>

              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                  Founder & Visionary
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                  About Sanjeev Jain
                </h2>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#4B5563', marginBottom: '1.25rem' }}>
                  Founder – Sanjeev Kumar Jain | 25 Years of Packaging Excellence
                </div>

                <p style={{ color: 'var(--text-body)', marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <strong>Mr. Sanjeev Kumar Jain</strong>, the founder of Saroj Packaging, has built the business with a strong focus on quality, reliability, and long-term customer relationships. Based in Greater Noida, his journey in the packaging industry reflects a deep understanding of packaging materials and the evolving needs of businesses.
                </p>
                <p style={{ color: 'var(--text-body)', marginBottom: '1.25rem', fontSize: '1.025rem', lineHeight: '1.8' }}>
                  With <strong>25 years of experience</strong> in the packaging industry, Mr. Jain has focused on creating a business that customers can depend on for consistent-quality packaging materials and timely service.
                </p>

                {/* Yellow Quote Box */}
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

                <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: '1.75' }}>
                  Mr. Sanjeev Kumar Jain believes that understanding the customer's requirement is just as important as providing quality products. His approach is centered on maintaining strong relationships, delivering dependable solutions, and continuously improving with changing industry requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-clean" style={{ background: '#FFFFFF' }} id="visionMission">
        <div className="container">
          <div className="section-header-clean">
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Direction & Purpose
            </div>
            <h2>Our Vision & Mission</h2>
            <p>
              The strategic values guiding our operations and client partnerships.
            </p>
          </div>

          <div className="vision-mission-grid" style={{ marginBottom: '4rem' }}>
            <div className="feature-box-clean" style={{ padding: '2.75rem 2.25rem' }}>
              <div className="feature-icon-circle">🎯</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                {COMPANY_INFO.vision}
              </p>
            </div>

            <div className="feature-box-clean" style={{ padding: '2.75rem 2.25rem' }}>
              <div className="feature-icon-circle">🚀</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                {COMPANY_INFO.mission}
              </p>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--primary-red)' }}>
                We are committed to:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-body)' }}>
                {COMPANY_INFO.missionPoints.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#D97706" style={{ flexShrink: 0 }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="section-header-clean" style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Core Philosophy
            </div>
            <h2>Our Philosophy</h2>
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

      {/* Our Commitment Banner */}
      <section className="section-clean" style={{ background: '#FEF3C7' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            Our Commitment
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '1.25rem', color: '#111827' }}>
            Good Packaging Starts with the Right Material
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', maxWidth: '850px', margin: '0 auto 2rem auto' }}>
            {COMPANY_INFO.commitment}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button className="btn btn-red btn-lg" onClick={() => handleNav('products')}>
              Explore Products & Specs →
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Sanjeev Ji, I would like to discuss our packaging needs.")}`}
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
