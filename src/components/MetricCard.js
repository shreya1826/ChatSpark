import React from 'react';

const MetricCard = ({ title, children, highlight }) => (
  <div className={`bg-slate-800 border ${highlight ? 'border-yellow-400/30' : 'border-slate-700'} rounded-xl p-6 hover:border-slate-600 transition-all`}>
    <h3 className="text-xl font-bold text-white mb-6">
      {title.split(' ').map((word, i) => (
        <span key={i} className={word.includes('Consultation') || word.includes('Challenges') || word.includes('Analytics') || word.includes('Applications') || word.includes('Review') || word.includes('Engagement') || word.includes('Performance') || word.includes('Trend') || word.includes('Supply') ? 'text-yellow-400' : ''}>
          {word}{' '}
        </span>
      ))}
    </h3>
    {children}
  </div>
);

export default MetricCard;