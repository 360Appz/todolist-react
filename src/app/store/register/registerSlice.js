// src/app/features/loginSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { login as loginApi } from '@/app/services/authService';
import { AUTH_API } from '../../services/apiRoutes';

export const register = createAsyncThunk('security/register', async ({ username, password, email }, { rejectWithValue }) => {
  try 
  {
    const response = await axios.post(AUTH_API.REGISTER, { username, password, email});
    return response.data.token; // Assuming the token is returned in response.data.token
  } 
  catch (error) {
    return rejectWithValue('Register failed. Please check your registration details');
  }
});

const loginSlice = createSlice({
  name: 'register',
  initialState: {
    token: null,
    loginError: null,
  },
  reducers: {
    // logout: (state) => {
    //   state.token = null;
    //   localStorage.removeItem('jwtToken');
    // },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(login.fulfilled, (state, action) => {
    //     state.token = action.payload;
    //     state.loginError = null;
    //     localStorage.setItem('jwtToken', action.payload);
    //   })
    //   .addCase(login.rejected, (state, action) => {
    //     state.token = null;
    //     state.loginError = action.payload;
    //   });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
