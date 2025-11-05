import React from 'react';

const TrendingVibes = () => {
  const vibes = [
    { name: 'Romantic', emoji: '💗', value: 85 },
    { name: 'Friendship', emoji: '💛', value: 78 },
    { name: 'Chill', emoji: '😎', value: 72 },
    { name: 'Feeling Lonely', emoji: '😢', value: 68 },
    { name: 'Sad', emoji: '😔', value: 65 }
  ];

  return (
    <div className="space-y-4">
      {vibes.map((vibe, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="flex items-center gap-2 w-40">
            <span className="text-yellow-400 font-medium">{vibe.name}</span>
            <span>{vibe.emoji}</span>
          </div>
          <div className="flex-1 bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-1000"
              style={{ width: `${vibe.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingVibes;