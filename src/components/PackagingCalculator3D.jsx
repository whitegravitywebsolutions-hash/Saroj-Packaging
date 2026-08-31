import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/contentData';
import { Box, Layers, Scale, MessageSquare, ArrowRight } from 'lucide-react';

export default function PackagingCalculator3D({ onOpenQuote }) {
  const [productType, setProductType] = useState('box');
  const [length, setLength] = useState(14); // inches
  const [width, setWidth] = useState(10);  // inches
  const [height, setHeight] = useState(8);  // inches
  const [ply, setPly] = useState(5);
  const [gsm, setGsm] = useState(150);
  const [quantity, setQuantity] = useState(1000);

  // Conversions & Calculations
  const l_cm = (length * 2.54).toFixed(1);
  const w_cm = (width * 2.54).toFixed(1);
  const h_cm = (height * 2.54).toFixed(1);

  // Surface Area Calculation (sq inches) for Box (2 * (L*W + W*H + L*H))
  const surfaceAreaSqIn = 2 * (length * width + width * height + length * height);
  const surfaceAreaSqM = (surfaceAreaSqIn * 0.00064516).toFixed(3);

  // Estimated single box weight in grams = GSM * ply * Area(sqm) * corrugation factor (approx 1.35)
  const corrugationTakeUp = ply === 3 ? 1.25 : ply === 5 ? 1.45 : 1.65;
  const singleWeightGrams = Math.round(gsm * ply * surfaceAreaSqM * corrugationTakeUp);
  const totalWeightKg = ((singleWeightGrams * quantity) / 1000).toFixed(1);

  // 3D Isometric View Parameters
  const scale = 2.4;
  const isoL = Math.min(Math.max(length * scale, 30), 100);
  const isoW = Math.min(Math.max(width * scale, 30), 100);
  const isoH = Math.min(Math.max(height * scale, 25), 90);

  const centerX = 160;
  const centerY = 120;

  const pFrontBottom = [centerX - isoL * 0.866 + isoW * 0.866, centerY + isoL * 0.5 + isoW * 0.5];
  const pLeftBottom = [centerX - isoL * 0.866, centerY + isoL * 0.5];
  const pRightBottom = [centerX + isoW * 0.866, centerY + isoW * 0.5];
  const pBackBottom = [centerX, centerY];

  const pFrontTop = [pFrontBottom[0], pFrontBottom[1] - isoH];
  const pLeftTop = [pLeftBottom[0], pLeftBottom[1] - isoH];
  const pRightTop = [pRightBottom[0], pRightBottom[1] - isoH];
  const pBackTop = [pBackBottom[0], pBackBottom[1] - isoH];

  const handleWhatsAppQuote = () => {
    const waText = `Hello Saroj Packaging,\nI calculated my packaging specs on your website:\n- Item: ${productType === 'box' ? 'Corrugated Boxes' : 'Corrugated Rolls'}\n- Dimensions: ${length}" L x ${width}" W x ${height}" H (${l_cm} x ${w_cm} x ${h_cm} cm)\n- Ply & GSM: ${ply}-Ply, ${gsm} GSM\n- Quantity: ${quantity} units (~${totalWeightKg} kg total batch)\nPlease share wholesale pricing for Greater Noida.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(waText)}`, '_blank');
  };

  // Slider Fill Percentages
  const lengthPct = (((length - 4) / (36 - 4)) * 100).toFixed(1);
  const widthPct = (((width - 4) / (30 - 4)) * 100).toFixed(1);
  const heightPct = (((height - 3) / (28 - 3)) * 100).toFixed(1);
  const qtyPct = (((quantity - 100) / (5000 - 100)) * 100).toFixed(1);

  return (
    <div className="calculator-box-clean" id="3dPackagingCalculator">
      <div className="calc-grid-clean">
        {/* Controls */}
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
            Interactive Customizer
          </div>
          <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-heading)' }}>
            Packaging Spec & Price Estimator
          </h3>
          <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Adjust carton dimensions, ply strength, and GSM to view live 3D isometric scale and batch calculations.
          </p>

          {/* Type Selector */}
          <div className="form-group">
            <label>Packaging Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              <button
                type="button"
                className={`btn btn-sm ${productType === 'box' ? 'btn-yellow' : 'btn-pill-outline'}`}
                onClick={() => setProductType('box')}
              >
                Corrugated Boxes
              </button>
              <button
                type="button"
                className={`btn btn-sm ${productType === 'rolls' ? 'btn-yellow' : 'btn-pill-outline'}`}
                onClick={() => setProductType('rolls')}
              >
                Corrugated Rolls
              </button>
            </div>
          </div>

          {/* Dimension Sliders */}
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Length</label>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#D97706' }}>{length} inches ({l_cm} cm)</span>
            </div>
            <input
              type="range"
              min="4"
              max="36"
              step="1"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="custom-range-slider"
              style={{
                background: `linear-gradient(to right, #F59E0B 0%, #F59E0B ${lengthPct}%, #E5E7EB ${lengthPct}%, #E5E7EB 100%)`
              }}
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Width</label>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#D97706' }}>{width} inches ({w_cm} cm)</span>
            </div>
            <input
              type="range"
              min="4"
              max="30"
              step="1"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="custom-range-slider"
              style={{
                background: `linear-gradient(to right, #F59E0B 0%, #F59E0B ${widthPct}%, #E5E7EB ${widthPct}%, #E5E7EB 100%)`
              }}
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Height / Depth</label>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#D97706' }}>{height} inches ({h_cm} cm)</span>
            </div>
            <input
              type="range"
              min="3"
              max="28"
              step="1"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="custom-range-slider"
              style={{
                background: `linear-gradient(to right, #F59E0B 0%, #F59E0B ${heightPct}%, #E5E7EB ${heightPct}%, #E5E7EB 100%)`
              }}
            />
          </div>

          {/* Ply & GSM */}
          <div className="calc-row-2col" style={{ display: 'grid', gap: '1rem' }}>
            <div className="form-group">
              <label>Ply Strength</label>
              <select
                className="form-control"
                value={ply}
                onChange={(e) => setPly(Number(e.target.value))}
              >
                <option value={3}>3-Ply (Light/Standard)</option>
                <option value={5}>5-Ply (Heavy Industrial)</option>
                <option value={7}>7-Ply (Export/Machinery)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Paper GSM</label>
              <select
                className="form-control"
                value={gsm}
                onChange={(e) => setGsm(Number(e.target.value))}
              >
                <option value={120}>120 GSM Economy</option>
                <option value={150}>150 GSM Standard Kraft</option>
                <option value={180}>180 GSM High BF</option>
                <option value={230}>230 GSM Heavy Liner</option>
                <option value={300}>300+ GSM Coated Duplex</option>
              </select>
            </div>
          </div>

          {/* Quantity */}
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Batch Quantity</label>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#D97706' }}>{quantity} units</span>
            </div>
            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="custom-range-slider"
              style={{
                background: `linear-gradient(to right, #F59E0B 0%, #F59E0B ${qtyPct}%, #E5E7EB ${qtyPct}%, #E5E7EB 100%)`
              }}
            />
          </div>
        </div>

        {/* 3D Visualizer and Results Panel */}
        <div className="calc-result-panel-clean">
          {/* Dynamic 3D Box SVG */}
          <div className="visualizer-wrapper-clean">
            <svg width="320" height="220" viewBox="0 0 320 220" style={{ overflow: 'visible' }}>
              {/* Top Face */}
              <polygon
                points={`${pBackTop[0]},${pBackTop[1]} ${pRightTop[0]},${pRightTop[1]} ${pFrontTop[0]},${pFrontTop[1]} ${pLeftTop[0]},${pLeftTop[1]}`}
                fill="#FEF3C7"
                stroke="#D97706"
                strokeWidth="1.5"
              />
              {/* Left Face */}
              <polygon
                points={`${pLeftTop[0]},${pLeftTop[1]} ${pFrontTop[0]},${pFrontTop[1]} ${pFrontBottom[0]},${pFrontBottom[1]} ${pLeftBottom[0]},${pLeftBottom[1]}`}
                fill="#FDE68A"
                stroke="#D97706"
                strokeWidth="1.5"
              />
              {/* Right Face */}
              <polygon
                points={`${pFrontTop[0]},${pFrontTop[1]} ${pRightTop[0]},${pRightTop[1]} ${pRightBottom[0]},${pRightBottom[1]} ${pFrontBottom[0]},${pFrontBottom[1]}`}
                fill="#FCD34D"
                stroke="#D97706"
                strokeWidth="1.5"
              />
              {/* Dimensions Labels */}
              <text x={pLeftBottom[0] - 10} y={pLeftBottom[1] + 15} fill="#374151" fontSize="12" fontWeight="700">
                L: {length}"
              </text>
              <text x={pRightBottom[0] + 5} y={pRightBottom[1] + 15} fill="#374151" fontSize="12" fontWeight="700">
                W: {width}"
              </text>
              <text x={pFrontTop[0] - 25} y={(pFrontTop[1] + pFrontBottom[1]) / 2} fill="#B45309" fontSize="12" fontWeight="800">
                H: {height}"
              </text>
            </svg>
          </div>

          <div>
            <div className="calc-summary-row-clean">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-body)' }}>
                <Layers size={16} color="#D97706" />
                Total Board Material:
              </span>
              <span className="calc-summary-val-clean">{surfaceAreaSqM} sq.m</span>
            </div>

            <div className="calc-summary-row-clean">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-body)' }}>
                <Box size={16} color="#D97706" />
                Single Box Volume:
              </span>
              <span className="calc-summary-val-clean">{((length * 2.54) * (width * 2.54) * (height * 2.54) / 1000).toFixed(1)} Litres</span>
            </div>

            <div className="calc-summary-row-clean">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-body)' }}>
                <Scale size={16} color="#D97706" />
                Estimated Batch Weight:
              </span>
              <span className="calc-summary-val-clean">~{totalWeightKg} kg</span>
            </div>

            <div className="calc-summary-row-clean">
              <span style={{ color: 'var(--text-body)' }}>Standard Quality:</span>
              <span className="calc-summary-val-clean">{ply}-Ply • {gsm} GSM</span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={handleWhatsAppQuote}
              className="btn btn-yellow"
              style={{ width: '100%', gap: '0.6rem' }}
            >
              <MessageSquare size={18} />
              <span>Get WhatsApp Quote with these Specs</span>
            </button>

            <button
              onClick={() => onOpenQuote(`${ply}-Ply Corrugated Box (${length}x${width}x${height} inch, ${gsm} GSM)`)}
              className="btn btn-pill-outline"
              style={{ width: '100%' }}
            >
              Request Custom Sample / Prototyping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
