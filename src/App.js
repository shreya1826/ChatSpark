import { useState, useEffect } from 'react';
import './App.css';

// Auth Context
import { AuthProvider, useAuth } from './context/AuthContext';
// Pages
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setCurrentPage('dashboard');
    }
  }, [user]);

  return (
    <div className="font-sans antialiased">
      {currentPage === 'login' ? (
        <LoginPage onLogin={() => setCurrentPage('dashboard')} />
      ) : (
        <DashboardPage />
      )}
    </div>
  );
};

// Root component with provider
export default function ChatSparkApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
