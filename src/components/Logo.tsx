import React from 'react';

export function Logo({ size = 120 }: { size?: number }) {
  const s = size;

  const SvgLogo = (
    <svg width={s} height={s} viewBox="0 0 200 200" aria-label="Voyager Logo" role="img" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="74" fill="none" stroke="url(#grad)" strokeWidth="6" opacity="0.9"/>
      <circle cx="100" cy="100" r="58" fill="none" stroke="url(#grad)" strokeWidth="4" opacity="0.7"/>
      <circle cx="100" cy="100" r="46" fill="none" stroke="url(#grad)" strokeWidth="2.5" opacity="0.5"/>
      <path d="M100 62 L132 110 L102 128 L82 110 Z" fill="url(#grad)" stroke="#fff" strokeWidth="2"/>
      <path d="M98 110 L86 150 L114 150 Z" fill="#fff" opacity="0.9"/>
      <polygon points="100,48 98,60 88,60 97,64 95,76 100,70 105,76 103,64 112,60 102,60" fill="#fff" opacity="0.9"/>
    </svg>
  );

  // Always render the inline SVG for reliability and add a subtle stroke wrapper for visibility
  return (
    <div style={{ width: s, height: s, border: '2px solid rgba(255,255,255,0.7)', borderRadius: 6, padding: 4, background: 'transparent', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {SvgLogo}
    </div>
  );
}


