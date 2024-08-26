import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@/app/services/authService';

export const registerProfile = createAsyncThunk(
  'security/register',
  async (userDetails, { rejectWithValue }) => {
    try {
      const jwtToken = await authService.registration(userDetails);
      return jwtToken; // Returning the JWT token after registration
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    token: null,
    registrationError: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('jwtToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerProfile.fulfilled, (state, action) => {
        state.token = action.payload; // Store the JWT token in the state
        localStorage.setItem('jwtToken', action.payload); // Store the JWT token in localStorage
        state.registrationError = null; // Clear any previous errors
      })
      .addCase(registerProfile.rejected, (state, action) => {
        state.token = null;
        state.registrationError = action.payload || 'Registration failed';
      });
  },
});

export const { logout } = registerSlice.actions;

export default registerSlice.reducer;
