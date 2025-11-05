import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password) return;
    const success = await login(email, password);
    if (success) onLogin();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg transform rotate-12 shadow-xl flex items-center justify-center relative">
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full"></div>
                  <div className="absolute -top-3 right-2 w-3 h-3 bg-yellow-200 rounded-full"></div>
                  <div className="grid grid-cols-2 gap-1 p-2">
                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Headphone sides */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-l-full -translate-x-4"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-l from-pink-400 to-purple-400 rounded-r-full translate-x-4"></div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-white text-center mb-2">ChatSpark</h1>
        
        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h2 className="text-2xl text-white font-semibold">
            Welcome To <span className="text-yellow-400">ChatSpark</span>
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-2"></div>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="text-yellow-400 text-sm mt-2 hover:text-yellow-300 transition-colors"
            >
              Forget Password
            </button>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading || !email || !password}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <span>→</span>
                <span>Login IN</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;