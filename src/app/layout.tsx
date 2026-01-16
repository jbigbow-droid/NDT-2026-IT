"use client";

import React from 'react';
import { Logo } from '@/components/Logo';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', position: 'sticky', top: 0, zIndex: 40, background: 'rgba(255,255,255,0.9)', backdropFilter: 'saturate(1.2) blur(6px)' }} >
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 18 }}>Voyager</div>
            <div style={{ fontSize: 12, opacity: 0.8, color: '#93c5fd' }}>Virtual Reality Ventures</div>
          </div>
          <div className="logo-shell" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 6, border: '2px solid #ff0000', borderRadius: 8, background: 'rgba(255,255,255,0.6)', marginLeft: 'auto' }}>
            <Logo size={72} />
            <span style={{ fontSize: 12, color: '#ef4444', fontWeight: 700, marginLeft: 6 }}>Logo</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
