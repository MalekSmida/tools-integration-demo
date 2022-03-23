// node modules
import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
  name: 'note',
  initialState: {
    notes: []
  },
  reducers: {
    onGetNotes: (state, action) => {
      state.notes = [...action.payload.open];
    }
  }
});

export const { onGetNotes } = noteSlice.actions;

export const selectApp = (state) => state.app;

export default noteSlice.reducer;
