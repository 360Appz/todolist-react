// src/app/services/authService.js

import axios from 'axios';
import { AUTH_API } from './apiRoutes'; // Import the AUTH_API routes



// Login function using axios
export const login = async (credentials) => {
  try {
    const { data } = await axios.post(AUTH_API.LOGIN, credentials);


    // Assuming the JWT token is returned in the response
    const { jwt } = data; 

    // Store the JWT token in local storage
    localStorage.setItem('jwtToken', jwt);

    return jwt;

  } catch (error) {
        // Log the exact error for debugging
        // console.log("error.response.data", error.response?.data);

        // Throw the actual error message returned by the API
        throw error.response?.data || 'Login failed';
  }
};


// Logout function to clear the token and redirect to the home page
export const logout = () => {
  localStorage.removeItem('jwtToken');
  window.location.href = '/';
};


// Function to get the current user token
export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token) return null;

    // Decode token or return it directly
    return token;
  } catch (error) {
    return null;
  }
};

// Registration function using axios
export const registration = async (userDetails) => {
  try {
    const { data } = await axios.post(AUTH_API.REGISTER, userDetails);

        // Automatically log in the user after successful registration
        const jwtToken = await login({
          username: userDetails.username,
          password: userDetails.password,
        });
    
        // Return the JWT token
        return jwtToken;
    // return data;

  } catch (error) 
  {
    // Log the exact error for debugging
    console.log("error.response.data", error.response?.data);

    // Throw the actual error message returned by the API
    throw error.response?.data || 'Registration failed';
  }
};

export default { login, logout, getCurrentUser, registration };