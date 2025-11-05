// API service file for future backend integration
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};

// Dashboard APIs
export const dashboardAPI = {
  getStats: async () => {
    const response = await api.get('/dashboard/stats');
    return response.data;
  },
  getAnalytics: async () => {
    const response = await api.get('/dashboard/analytics');
    return response.data;
  },
};

// Mock data for development
export const mockData = {
  stats: {
    totalCreators: 1250,
    activeCreators: 892,
    totalCalls: 3487,
    moodMatches: 1284,
  },
  analytics: {
    expertConsultations: {
      sessionsToday: 247,
      avgDuration: 18.5,
      revenueToday: 4940,
      satisfactionRate: 4.8,
    },
    gamingChallenges: {
      gamesPlayed: 1847,
      avgDuration: 634,
      challengesWon: 892,
      avgGameTime: 12.3,
    },
  },
};

export default api;