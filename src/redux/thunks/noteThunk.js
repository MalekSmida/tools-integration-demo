/**
 * redux-thunk is already included in redux-toolkit
 * redux-thunk allows you to make async actions (fetching data)
 * thunk = function that returns function
 */

// local files
import { getNotes, addNote } from '../../services/noteServices';
import { onGetNotes, onAddNote } from '../slices/noteSlice';

const getNotesAsync = () => async (dispatch) => {
  try {
    const notesList = await getNotes();
    if (notesList) {
      // get only first 5 elements of notesList
      const payload = { notes: notesList.slice(0, 5) };
      dispatch(onGetNotes(payload));
    }
  } catch {}
};

const addNoteAsync = (data) => async (dispatch) => {
  try {
    await addNote(data);
    const payload = {
      note: {
        ...data,
        id: Date.now() // unique id
      }
    };
    dispatch(onAddNote(payload));
  } catch {}
};

export { getNotesAsync, addNoteAsync };
