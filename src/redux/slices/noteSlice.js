// node modules
import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
  name: 'note',
  initialState: {
    noteList: []
  },
  reducers: {
    /**
     * reducers are funtions that takes current state and update it
     * action.payload takes the data passed to action function when called
     */
    onGetNotes: (state, action) => {
      state.noteList = [...action.payload.notes];
    },
    onAddNote: (state, action) => {
      state.noteList = [action.payload.note, ...state.noteList];
    },
    onDeleteNote: (state, action) => {
      state.noteList = state.noteList.filter((note) => note.id !== action.payload.id);
    }
  }
});

/**
 * actions generated based on your reducers
 * use dispatch to call this functions
 * dispatch works only under Provider
 */
export const { onGetNotes, onAddNote, onDeleteNote } = noteSlice.actions;

/**
 * selector function
 * state => entire redux store
 * state.note => access to your named slice
 */
export const selectNote = (state) => state.note;

export default noteSlice.reducer;
