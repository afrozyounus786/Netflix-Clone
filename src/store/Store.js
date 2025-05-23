import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice.js';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
