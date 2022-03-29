// node modules
import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
  name: 'note',
  initialState: {
    noteList: []
  },
  reducers: {
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

export const { onGetNotes, onAddNote, onDeleteNote } = noteSlice.actions;

export const selectNote = (state) => state.note;

export default noteSlice.reducer;
