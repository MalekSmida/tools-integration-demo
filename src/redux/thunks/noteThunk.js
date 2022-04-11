/**
 * redux-thunk is already included in redux-toolkit
 * redux-thunk allows you to make async actions (fetching data)
 * thunk = function that returns function
 */
// node modules
import { showLoading, hideLoading } from 'react-redux-loading-bar';

// local files
import { getNotes, addNote } from '../../services/noteServices';
import { onGetNotes, onAddNote } from '../slices/noteSlice';

const getNotesThunk = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const notesList = await getNotes();
    if (notesList) {
      // get only first 5 elements of notesList
      const payloadData = { notes: notesList.slice(0, 5) };
      dispatch(onGetNotes(payloadData));
    }
    dispatch(hideLoading());
  } catch {}
};

const addNoteThunk = (data) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const payloadData = {
      note: {
        ...data, // title: "fakeTitle"
        id: Date.now() // unique id
      }
    };
    await addNote(data);
    dispatch(onAddNote(payloadData));
    dispatch(hideLoading());
  } catch {}
};

export { getNotesThunk, addNoteThunk };

// TODO: custom hook => generate id
