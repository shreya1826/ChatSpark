import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import MetricCard from '../components/MetricCard';
import TrendingVibes from '../components/TrendingVibes';
import DemandSupplyChart from '../components/DemandSupplyChart';

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState('trend');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-slate-900 border-b border-slate-800 p-6 sticky top-0 z-30">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold text-white">
              Welcome Back <span className="text-yellow-400">User</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Total Creators" value="1,250" subtitle="+4.3% from last month" trend="+54" />
            <StatCard title="Active Creator" value="892" subtitle="+32.1% total creators" trend="+72" />
            <StatCard title="Total Calls Today" value="3,487" subtitle="+6.8% vs yesterday" trend="+224" />
            <StatCard title="Mood Matches" value="1,284" subtitle="+87% success rate" trend="+98" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Row 1 - Three columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MetricCard title="Expert Consultations" highlight>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Sessions Today</div>
                  <div className="text-3xl font-bold text-white">247</div>
                  <div className="text-green-400 text-sm">+24% vs yesterday</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Avg. Duration</div>
                  <div className="text-3xl font-bold text-white">18.5m</div>
                  <div className="text-slate-400 text-sm">Minutes per session</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Revenue Today</div>
                  <div className="text-2xl font-bold text-white">$4,940</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Satisfaction Rate</div>
                  <div className="text-2xl font-bold text-white flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span> 4.8
                  </div>
                </div>
              </div>
            </MetricCard>

            <MetricCard title="Gaming & Challenges" highlight>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Games Played</div>
                  <div className="text-3xl font-bold text-white">1,847</div>
                  <div className="text-green-400 text-sm">+15% vs yesterday</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Avg. Duration</div>
                  <div className="text-3xl font-bold text-white">634</div>
                  <div className="text-slate-400 text-sm">Aaverage playing</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Challenges Won</div>
                  <div className="text-2xl font-bold text-white">892</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Avg. Game Time</div>
                  <div className="text-2xl font-bold text-white">12.3m</div>
                </div>
              </div>
            </MetricCard>

            <MetricCard title="Call Connection Analytics" highlight>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Connection Success Rate</div>
                  <div className="text-3xl font-bold text-white">94.2%</div>
                  <div className="text-green-400 text-sm">+2.3% vs last week</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Avg. Wait Time</div>
                  <div className="text-3xl font-bold text-white">1.8m</div>
                  <div className="text-slate-400 text-sm">Before connection</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Peak Hours</div>
                  <div className="text-2xl font-bold text-white">8-11 PM</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Repeat Calls</div>
                  <div className="text-2xl font-bold text-white">67%</div>
                </div>
              </div>
            </MetricCard>
          </div>

          {/* Row 2 - Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetricCard title="Trending Vibes Analytics" highlight>
              <TrendingVibes />
            </MetricCard>

            <MetricCard title="Hourly Demand & Supply Trend" highlight>
              {/* <div className="text-slate-400 text-sm mb-4">Users & Creator</div> */}
              <DemandSupplyChart />
            </MetricCard>
          </div>

          {/* Row 3 - Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetricCard title="Pending Applications" highlight>
              <div className="text-center py-8">
                <div className="text-6xl font-bold text-white mb-2">45</div>
                <div className="text-green-400 flex items-center justify-center gap-1">
                  <span>↗</span>
                  <span>+8 vs yesterday</span>
                </div>
              </div>
            </MetricCard>

            <MetricCard title="Creators Under Review" highlight>
              <div className="text-center py-8">
                <div className="text-6xl font-bold text-white mb-2">12</div>
                <div className="text-slate-400">Avg. review time: ~2.3 days</div>
              </div>
            </MetricCard>
          </div>

          {/* Row 4 - Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetricCard title="Platform Engagement" highlight>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Total Sessions Today</div>
                  <div className="text-3xl font-bold text-white">2,847</div>
                  <div className="text-green-400 text-sm">+18.2% vs yesterday</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Avg. Session Duration</div>
                  <div className="text-3xl font-bold text-white">12.4m</div>
                  <div className="text-slate-400 text-sm">Minutes per session</div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-slate-400 text-sm mb-1">User Retention Rate</div>
                  <div className="text-2xl font-bold text-white">78.5%</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Avg. Rating</div>
                  <div className="text-2xl font-bold text-white flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span> 4.7
                  </div>
                </div>
              </div>
            </MetricCard>

            <MetricCard title="Mood Matching Performance" highlight>
              <div className="grid grid-cols-2 gap-4 mb-6"> 
                <div>
                  <div className="text-slate-400 text-sm mb-1">Successful Matches</div>
                  <div className="text-3xl font-bold text-white">1,284</div>
                  <div className="text-green-400 text-sm">+87% success rate</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Avg. Match Time</div>
                  <div className="text-3xl font-bold text-white">2.3m</div>
                  <div className="text-slate-400 text-sm">Time to find match</div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Repeat Matches</div>
                  <div className="text-2xl font-bold text-white">73%</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Avg. Rating</div>
                  <div className="text-2xl font-bold text-white flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span> 4.6
                  </div>
                </div>
              </div>
            </MetricCard>
          </div>
        </div>
      </div>
    </div>
  );
};