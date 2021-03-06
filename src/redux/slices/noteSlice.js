// node modules
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  noteList: []
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    /**
     * reducers are funtions that takes current state and update it
     * action.payload takes the data passed to action function when called
     * if we called onGetNotes([1,2]) => action.payload === [1,2]
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
export const selectNote = (store) => store.note;

export default noteSlice.reducer;
