import React from 'react';

const DemandSupplyChart = () => {
  return (
    <div className="relative w-full h-[180px]">
      <div className="absolute -bottom-6 left-0 right-0 text-center">
        <span className="text-slate-400 text-xs">Users & Creator</span>
      </div>

      <div className="absolute -left-8 top-0 h-full flex items-center">
        <span className="text-slate-400 text-xs transform -rotate-90">Time</span>
      </div>

      <div className="relative h-full w-full pl-4 pb-6">
        <svg 
          className="absolute inset-0 w-full h-full" 
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100"
            className="stroke-slate-700"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="100"
            className="stroke-slate-700"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />

          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 20}
              x2="100"
              y2={i * 20}
              className="stroke-slate-800/50"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          <path
            d="M0,20 L15,35 L30,15 L45,40 L60,20 L75,35 L90,15 L100,30"
            className="stroke-yellow-400"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />

          <path
            d="M0,50 L15,65 L30,45 L45,70 L60,50 L75,65 L90,45 L100,60"
            className="stroke-yellow-500"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
};

export default DemandSupplyChart;