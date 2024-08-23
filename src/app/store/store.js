import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '@/app/store/login/loginSlice';
import taskReducer from '@/app/store/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
