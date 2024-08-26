import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '@/app/store/login/loginSlice';
import taskReducer from '@/app/store/tasks/taskSlice';
import registerReducer from '@/app/store/register/registerSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
