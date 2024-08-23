// src/app/features/loginSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginService } from '@/app/services/authService';

export const login = createAsyncThunk('security/login', async (credentials, { rejectWithValue }) => {
    try {
      const token = await loginService(credentials);
      return token; // Return the token as the fulfilled value
    } 
    catch (error) {
      return rejectWithValue(error); // Pass the error message from authService to the slice
    }
  });

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    loginError: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('jwtToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loginError = null;
        localStorage.setItem('jwtToken', action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.token = null;
        state.loginError = action.payload; // This should be the error message string
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
