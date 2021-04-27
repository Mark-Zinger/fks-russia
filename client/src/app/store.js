import { configureStore } from '@reduxjs/toolkit';
// import { routerMiddleware, connectRouter } from 'connected-react-router';
// import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/userSlice'
import authReducer from '../features/authSlice'
// import {
//   adminReducer,
//   adminSaga,
//   USER_LOGOUT,
// } from 'react-admin';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer,
    auth: authReducer,
    // admin: adminReducer,
  },
});
