// src/app/features/taskSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '@/app/services/httpService';
import { SEARCH_TASK_API } from '../../services/apiRoutes';


//Fetch All Tasks (Pagination)
export const searchTask = createAsyncThunk(
  '/tasks/search',
  async ({keyword:keyword, page = 0, size = 10 }, { rejectWithValue }) => {
    try {
      // Use the configured HTTP service with JWT token already included
      const response = await http.get(SEARCH_TASK_API.SEARCH_TASK, 
      {
        params: { keyword, page, size }, // Add query parameters for pagination
      });
      return response.data;
    } 
    catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch tasks.');
    }
  }
);


const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    taskError: null

  },
  extraReducers: (builder) => {
    builder
      .addCase(searchTask.fulfilled, (state, action) => {
        state.searchResults = action.payload._embedded?.taskDTOList || [];
        console.log("state.searchResults", state.searchResults)
        state.taskError = null;
      })
      .addCase(searchTask.rejected, (state, action) => {
        state.taskError = action.payload;
        console.log("Task Error",state.taskError)
      });
  },
});

export default searchSlice.reducer;
