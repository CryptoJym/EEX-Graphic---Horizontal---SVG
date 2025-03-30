import React, { useEffect, useRef, useState } from 'react';

interface DiagramProps {
  baseWidth?: number;
  baseHeight?: number;
  minScale?: number;
  maxScale?: number;
  children?: React.ReactNode;
}

export const FlowDiagram: React.FC<DiagramProps> = ({ 
  baseWidth = 1400,
  baseHeight = 650,
  minScale = 0.5,
  maxScale = 1.2,
  children
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const updateViewBox = () => {
      if (!svgRef.current) return;
      
      const container = svgRef.current.parentElement;
      if (!container) return;

      const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
      const containerAspectRatio = containerWidth / containerHeight;
      const diagramAspectRatio = baseWidth / baseHeight;
      
      let newScale;
      if (containerAspectRatio > diagramAspectRatio) {
        // Container is wider than diagram
        newScale = containerHeight / baseHeight;
      } else {
        // Container is taller than diagram
        newScale = containerWidth / baseWidth;
      }
      
      // Clamp scale between min and max
      newScale = Math.max(minScale, Math.min(maxScale, newScale));
      setScale(newScale);
    };

    updateViewBox();
    window.addEventListener('resize', updateViewBox);
    return () => window.removeEventListener('resize', updateViewBox);
  }, [baseWidth, baseHeight, minScale, maxScale]);

  const transformOrigin = `${baseWidth / 2}px ${baseHeight / 2}px`;

  return (
    <div 
      ref={svgRef} 
      className="w-full h-full overflow-hidden flex items-center justify-center"
      style={{
        minHeight: '100vh',
        perspective: '1000px'
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <svg 
          width={baseWidth}
          height={baseHeight}
          viewBox={`0 0 ${baseWidth} ${baseHeight}`}
          className="print:w-[1400px] print:h-[650px]"
        >
          {children}
        </svg>
      </div>
    </div>
  );
};