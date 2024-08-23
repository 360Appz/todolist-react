// src/app/services/apiRoutes.js

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1';

//Security Routes
export const AUTH_API = {
  LOGIN: `${API_BASE_URL}/security/authenticate`,
  REGISTER: `${API_BASE_URL}/security/register`,

};

//Task CRUD API Routes
export const TASK_API = {
  GET_ALL_TASK: `${API_BASE_URL}/CRUD/getAllTasks`,
  GET_ALL_TASK_BY_ID:`${API_BASE_URL}/CRUD/getTaskById`,
  ADD_TASK: `${API_BASE_URL}/CRUD/addTask`,
  EDIT_TASK: `${API_BASE_URL}/CRUD/editTask`,
  DELETE_TASK: `${API_BASE_URL}/CRUD/deleteTask`,
 
};
