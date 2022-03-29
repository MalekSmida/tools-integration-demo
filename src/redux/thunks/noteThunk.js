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

const getNotesAsync = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const notesList = await getNotes();
    if (notesList) {
      // get only first 5 elements of notesList
      const payload = { notes: notesList.slice(0, 5) };
      dispatch(onGetNotes(payload));
    }
    dispatch(hideLoading());
  } catch {}
};

const addNoteAsync = (data) => async (dispatch) => {
  try {
    dispatch(showLoading());
    await addNote(data);
    const payload = {
      note: {
        ...data,
        id: Date.now() // unique id
      }
    };
    dispatch(onAddNote(payload));
    dispatch(hideLoading());
  } catch {}
};

export { getNotesAsync, addNoteAsync };
