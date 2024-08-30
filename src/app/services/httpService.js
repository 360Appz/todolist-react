// src/app/services/httpService.js

import axios from 'axios';

// Create an Axios instance with common configuration
const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token in headers
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle global errors
http.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors (e.g., unauthorized access, etc.)
    if (error.response && error.response.status === 401) {
      // You might want to redirect the user to login page or logout
      localStorage.removeItem('jwtToken');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Export functions for different HTTP methods
export const httpGet = (url, config = {}) => http.get(url, config);
export const httpPost = (url, config, data = {}) => http.post(url, config, data);
export const httpPut = (url, config , data= {}) => http.put(url, config, data);
export const httpDelete = (url, config = {}) => http.delete(url, config);


export default http;
