// node modules
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  jwt: null,
  user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * reducers are funtions that takes current state and update it
     * action.payload takes the data passed to action function when called
     */
    onLogin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.jwt = action.payload.jwtToken;
    },
    onLoadUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.jwt = action.payload.jwtToken;
    }
  }
});

/**
 * actions generated based on your reducers
 * use dispatch to call this functions
 * dispatch works only under Provider
 */
export const { onLogin, onLoadUser } = userSlice.actions;

/**
 * selector function
 * state => entire redux store
 * state.note => access to your named slice
 */
export const selectUser = (state) => state.user;

export default userSlice.reducer;
