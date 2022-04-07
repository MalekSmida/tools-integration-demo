// node modules
import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

// local files
import noteReducer from '../slices/noteSlice';
import userReducer from '../slices/userSlice';

export default configureStore({
  reducer: {
    note: noteReducer,
    user: userReducer,
    loadingBar: loadingBarReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});
