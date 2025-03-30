import React from 'react';
import { FlowDiagram } from './components/FlowDiagram';

function App() {
  return (
    <div className="min-h-screen bg-[#031a14] w-full">
      <FlowDiagram>
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#031a14', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0a4b3a', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#14b882', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#14b882', stopOpacity: 0 }} />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="tokenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="flowGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="tokenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#14b882', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#086048', stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#14b882', stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: '#14b882', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#14b882', stopOpacity: 0.1 }} />
          </linearGradient>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14b882" strokeWidth="0.1" />
          </pattern>
        </defs>

        {/* Background with subtle grid */}
        <rect width="1400" height="650" fill="url(#bgGradient)" rx="8" ry="8" />
        <rect width="1400" height="650" fill="url(#gridPattern)" opacity="0.1" />

        {/* Vertical Separator Line */}
        <line x1="700" y1="80" x2="700" y2="570" stroke="#14b882" strokeWidth="1" strokeDasharray="8 4" opacity="0.5" />

        {/* Organization Names with enhanced styling */}
        <g transform="translate(0, 40)">
          <text x="300" y="0" fontFamily="Arial, sans-serif" fontSize="28" textAnchor="middle" fill="#14b882" filter="url(#softGlow)">
            Earth Exchange
          </text>
          <text x="1100" y="0" fontFamily="Arial, sans-serif" fontSize="28" textAnchor="middle" fill="#14b882" filter="url(#softGlow)">
            Mother Earth Council
          </text>
        </g>

        {/* Earth Exchange Section */}
        <g transform="translate(120, 100)">
          {/* EEX NFT */}
          <rect x="0" y="0" width="180" height="80" fill="url(#tokenGradient)" stroke="#14b882" strokeWidth="1" rx="12" ry="12" filter="url(#tokenGlow)" />
          <text x="90" y="35" fontFamily="Arial, sans-serif" fontSize="24" textAnchor="middle" fill="#14b882" filter="url(#softGlow)">EEX NFT</text>
          <text x="90" y="55" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#a0d2c3">Your journey begins here</text>
          
          {/* Path to EEX Token */}
          <g className="flow-indicator">
            <rect x="180" y="35" width="115" height="10" rx="5" fill="url(#flowGradient)" filter="url(#flowGlow)" />
            <text x="237.5" y="30" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#14b882">
              Earn Rewards
            </text>
          </g>

          {/* EEX Token */}
          <g transform="translate(340, 40)">
            <circle cx="0" cy="0" r="45" fill="url(#tokenGradient)" stroke="#14b882" strokeWidth="1" filter="url(#tokenGlow)" />
            <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="#14b882">EEX</text>
            <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#a0d2c3">1kg CO₂</text>
          </g>

          {/* First Aggregation */}
          <g transform="translate(90, 240)">
            <circle cx="0" cy="0" r="70" fill="none" stroke="#14b882" strokeWidth="1" strokeDasharray="4 4" filter="url(#softGlow)" />
            <text x="0" y="-100" fontFamily="Arial, sans-serif" fontSize="18" textAnchor="middle" fill="#14b882">Aggregate</text>
            <text x="0" y="-80" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#a0d2c3">333 EEX = 1 LCD</text>
            
            {/* EEX Token cluster */}
            <g>
              {[...Array(5)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 72}) translate(0, -30)`}>
                  <circle r="15" fill="url(#tokenGradient)" stroke="#14b882" strokeWidth="0.5" />
                  <text y="4" fontSize="10" textAnchor="middle" fill="#14b882">EEX</text>
                </g>
              ))}
            </g>
          </g>

          {/* LCD Token */}
          <g className="flow-indicator">
            <rect x="160" y="225" width="80" height="10" rx="5" fill="url(#flowGradient)" filter="url(#flowGlow)" />
          </g>
          <g transform="translate(290, 220)">
            <circle cx="0" cy="0" r="50" fill="url(#tokenGradient)" stroke="#14b882" strokeWidth="1" filter="url(#tokenGlow)" />
            <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="18" textAnchor="middle" fill="#14b882">LCD</text>
            <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#a0d2c3">333kg CO₂</text>
          </g>
          <g className="flow-indicator">
            <path d="M290,270 C 290,310 470,310 455,360" 
                  stroke="url(#flowGradient)" 
                  strokeWidth="10" 
                  fill="none" 
                  strokeLinecap="round"
                  filter="url(#flowGlow)" />
          </g>

          {/* Second Aggregation */}
          <g transform="translate(490, 420)">
            <circle cx="0" cy="0" r="70" fill="none" stroke="#14b882" strokeWidth="1" strokeDasharray="4 4" filter="url(#softGlow)" />
            <text x="0" y="-110" fontFamily="Arial, sans-serif" fontSize="18" textAnchor="middle" fill="#14b882">Aggregate</text>
            <text x="0" y="-90" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#a0d2c3">3 LCD = 1 CO2O</text>
            
            {/* LCD Token cluster */}
            <g>
              {[...Array(3)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 120}) translate(0, -30)`}>
                  <circle r="20" fill="url(#tokenGradient)" stroke="#14b882" strokeWidth="0.5" />
                  <text y="4" fontSize="12" textAnchor="middle" fill="#14b882">LCD</text>
                </g>
              ))}
            </g>
          </g>
        </g>

        {/* Connection from LCD Aggregation to CO2O */}
        <g className="flow-indicator">
          <path d="M680,520 Q 800,400 840,270" 
                stroke="url(#flowGradient)" 
                strokeWidth="10" 
                fill="none" 
                strokeLinecap="round"
                filter="url(#flowGlow)" />
        </g>

        {/* Mother Earth Council Section */}
        <g transform="translate(750, 120)">
          {/* CO2O NFT */}
          <g transform="translate(150, 150)">
            <circle cx="0" cy="0" r="55" fill="url(#tokenGradient)" stroke="#14b882" strokeWidth="1" filter="url(#tokenGlow)" />
            <text x="0" y="-10" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle" fill="#14b882">CO2O</text>
            <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#a0d2c3">1 Tonne CO₂</text>
            <text x="0" y="85" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#8bc3b1">Minted & linked to a unique</text>
            <text x="0" y="100" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#8bc3b1">credit serial number</text>
          </g>

          {/* Path to Certificate */}
          <g className="flow-indicator">
            <rect x="205" y="145" width="165" height="10" rx="5" fill="url(#flowGradient)" filter="url(#flowGlow)" />
            <text x="287.5" y="140" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#14b882">Redeem</text>
          </g>

          {/* Certificate */}
          <g transform="translate(370, 50)">
            <rect x="0" y="0" width="160" height="200" fill="url(#tokenGradient)" stroke="#14b882" strokeWidth="1" rx="8" ry="8" filter="url(#softGlow)" />
            <text x="80" y="40" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="#14b882">Carbon Credit</text>
            <text x="80" y="60" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="#14b882">Certificate</text>
            <line x1="20" y1="80" x2="140" y2="80" stroke="#14b882" strokeWidth="0.5" strokeDasharray="4 2" />
            <text x="80" y="110" fontFamily="Arial, sans-serif" fontSize="13" textAnchor="middle" fill="#a0d2c3">Official Proof:</text>
            <text x="80" y="130" fontFamily="Arial, sans-serif" fontSize="13" textAnchor="middle" fill="#a0d2c3">1 Tonne CO₂ Offset</text>
            <text x="80" y="160" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#8bc3b1">Unique Serial Number</text>
            <text x="80" y="180" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#8bc3b1">Issuance Date</text>
          </g>

          {/* Connection from Certificate to Verification */}
          <g className="flow-indicator">
            <rect x="445" y="250" width="10" height="100" rx="5" fill="url(#flowGradient)" filter="url(#flowGlow)" />
          </g>

          {/* Verification Box */}
          <g transform="translate(370, 350)">
            <rect x="0" y="0" width="220" height="60" rx="10" ry="10" fill="url(#tokenGradient)" stroke="#14b882" strokeWidth="1" filter="url(#softGlow)" />
            <text x="110" y="25" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#14b882">Verification & Registration</text>
            <text x="110" y="45" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#a0d2c3">Credits recorded in Master Ledger</text>
          </g>
        </g>
      </FlowDiagram>
    </div>
  );
}

export default App;