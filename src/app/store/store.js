import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '@/app/store/login/loginSlice';
import taskReducer from '@/app/store/tasks/taskSlice';
import registerReducer from '@/app/store/register/registerSlice';
import searchReducer from '@/app/store/search/searchSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    tasks: taskReducer,
    search: searchReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
