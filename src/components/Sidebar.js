import React from 'react';
import { TrendingUp, Users, FileText, ClipboardCheck, BarChart3, DollarSign, FileOutput, Settings, X } from 'lucide-react';

const Sidebar = ({ activeMenu, setActiveMenu, isMobileOpen, setIsMobileOpen }) => {
  const menuItems = [
    { id: 'trend', icon: TrendingUp, label: 'Recent Trend' },
    { id: 'creators', icon: Users, label: 'Creators' },
    { id: 'application', icon: FileText, label: 'Application' },
    { id: 'kyc', icon: ClipboardCheck, label: 'KYC Reviews' },
    { id: 'analytics', icon: BarChart3, label: 'User Analytics' },
    { id: 'payouts', icon: DollarSign, label: 'Payouts' },
    { id: 'payout-request', icon: FileOutput, label: 'Payout Request' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed lg:sticky top-0 left-0 h-screen bg-slate-900 border-r border-slate-800 w-64 flex flex-col z-50 transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
            </div>
            <span className="text-yellow-400 font-bold text-lg">ChatSpark</span>
          </div>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  setIsMobileOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${
                  isActive
                    ? 'bg-yellow-400/10 border-r-4 border-yellow-400 text-yellow-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-yellow-400' : ''} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;