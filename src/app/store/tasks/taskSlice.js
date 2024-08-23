// src/app/features/taskSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '@/app/services/httpService';
import { login } from '@/app/store/login/loginSlice'; // Import the login action from loginSlice
import { TASK_API } from '../../services/apiRoutes';


//Fetch All Tasks (Pagination)
export const fetchTasks = createAsyncThunk(
  '/CRUD/getAllTasks',
  async ({ page = 0, size = 10 }, { rejectWithValue }) => {
    try {
      // Use the configured HTTP service with JWT token already included
      const response = await http.get(TASK_API.GET_ALL_TASK, 
      {
        params: { page, size }, // Add query parameters for pagination
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch tasks.');
    }
  }
);


//Fetch Task By ID
export const fetchTasksByID = createAsyncThunk('/CRUD/getTaskById', async (_, { rejectWithValue, getState }) => {
    const { token } = getState().login; // Get the token from the login state
    if (!token) {
      return rejectWithValue('No token available');
    }
    
    try 
    {
      const response = await http.get(TASK_API.GET_ALL_TASK_BY_ID);
      return response.data;
    } 
    catch (error) 
    {
      return rejectWithValue('Failed to fetch tasks.');
    }
});


//Add Task
export const addTask = createAsyncThunk('/CRUD/addTask', async (_, { rejectWithValue, getState }) => {
    const { token } = getState().login; // Get the token from the login state
    if (!token) {
      return rejectWithValue('No token available');
    }
    
    try 
    {
      const response = await http.get(TASK_API.ADD_TASK);
      return response.data;
    } 
    catch (error) 
    {
      return rejectWithValue('Failed to fetch tasks.');
    }
});



//Edit Task
export const editTask = createAsyncThunk('/CRUD/editTask', async (_, { rejectWithValue, getState }) => {
    const { token } = getState().login; // Get the token from the login state
    if (!token) {
      return rejectWithValue('No token available');
    }
    
    try 
    {
      const response = await http.get(TASK_API.EDIT_TASK);
      return response.data;
    } 
    catch (error) 
    {
      return rejectWithValue('Failed to fetch tasks.');
    }
});



//Delete Task
export const deleteTask = createAsyncThunk('/CRUD/deleteTask', async (_, { rejectWithValue, getState }) => {
    const { token } = getState().login; // Get the token from the login state
    if (!token) {
      return rejectWithValue('No token available');
    }
    
    try 
    {
      const response = await http.get(TASK_API.DELETE_TASK);
      return response.data;
    } 
    catch (error) 
    {
      return rejectWithValue('Failed to fetch tasks.');
    }
});


const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
    taskError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.taskList = action.payload._embedded.taskDTOList;
        console.log("state.tasks", state.taskList)
        state.taskError = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.taskError = action.payload;
      });
  },
});

export default taskSlice.reducer;
