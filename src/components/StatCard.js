import React from 'react';

const StatCard = ({ title, value, subtitle, trend }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all">
    <div className="text-slate-400 text-sm mb-2">{title}</div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className={`text-sm flex items-center gap-1 ${trend?.startsWith('+') ? 'text-green-400' : 'text-slate-400'}`}>
      {trend && <span>{trend}</span>}
      <span>{subtitle}</span>
    </div>
  </div>
);

export default StatCard;