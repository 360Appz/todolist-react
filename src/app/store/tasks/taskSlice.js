// src/app/features/taskSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {httpGet, httpPost, httpPut, httpDelete} from '@/app/services/httpService';
import { login } from '@/app/store/login/loginSlice'; // Import the login action from loginSlice
import { TASK_API } from '../../services/apiRoutes';


//Fetch All Tasks (Pagination)
export const fetchTasks = createAsyncThunk(
  '/CRUD/getAllTasks',
  async ({ page = 0, size = 10 }, { rejectWithValue }) => {
    try {
      // Use the configured HTTP service with JWT token already included
      const response = await httpGet(TASK_API.GET_ALL_TASK, 
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
export const fetchTasksByID = createAsyncThunk('/CRUD/getTaskById', async (id, { rejectWithValue, getState }) => {
    const { token } = getState().login; // Get the token from the login state
    if (!token) {
      return rejectWithValue('No token available');
    }
    
    try 
    {
      const response = await httpGet(TASK_API.GET_ALL_TASK_BY_ID(id));
      return response.data;
    } 
    catch (error) 
    {
      return rejectWithValue('Failed to fetch tasks.');
    }
});


//Add Task
export const addTask = createAsyncThunk('/CRUD/addTask', async ( taskData, { rejectWithValue, getState }) => {
    const { token } = getState().login; // Get the token from the login state
    console.log("addTASK", taskData)
    if (!token) {
      return rejectWithValue('No token available');
    }
    
    try 
    {
   
      const response = await httpPost(TASK_API.ADD_TASK, taskData);
      return response.data;
    } 
    catch (error) 
    {
      return rejectWithValue('Failed to fetch tasks.');
    }
});



//Edit Task
export const editTask = createAsyncThunk('/CRUD/editTask', async ({id, taskData}, { rejectWithValue, getState }) => {
    const { token } = getState().login; // Get the token from the login state
    if (!token) {
      return rejectWithValue('No token available');
    }
    
    try 
    {
      const response = await httpPut(TASK_API.EDIT_TASK(id), taskData);
      return response.data;
    } 
    catch (error) 
    {
      return rejectWithValue('Failed to fetch tasks.');
    }
});



//Delete Task
export const deleteTask = createAsyncThunk('/CRUD/deleteTask', async ({id}, { rejectWithValue, getState }) => {
    const { token } = getState().login; // Get the token from the login state
    if (!token) {
      return rejectWithValue('No token available');
    }
    
    try 
    {
      const response = await httpDelete(`${TASK_API.DELETE_TASK}/${id}`);
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
    taskListById:[],
    taskError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.taskList = action.payload._embedded?.taskDTOList || [];
        console.log("state.tasks", state.taskList)
        state.taskError = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.taskError = action.payload;
      })
      .addCase(fetchTasksByID.fulfilled, (state, action) => {
        state.taskListById = action.payload;
      });
      // .addCase(addTask.fulfilled, (state, action) => {
      //   state.taskList.push(action.payload); // Add the new task to the list
      // })
      // .addCase(editTask.fulfilled, (state, action) => {
      //   const index = state.taskList.findIndex(task => task.id === action.payload.id);
      //   if (index !== -1) {
      //     state.taskList[index] = action.payload; // Update the edited task
      //   }
      // })
      // .addCase(deleteTask.fulfilled, (state, action) => {
      //   state.taskList = state.taskList.filter(task => task.id !== action.payload.id); // Remove the deleted task
      // })
  },
});

export default taskSlice.reducer;
