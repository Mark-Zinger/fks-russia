import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/userSlice'
import authReducer from '../features/authSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer,
    auth: authReducer
  },
});
