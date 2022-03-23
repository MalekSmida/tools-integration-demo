// local files
import { onGetNotes } from '../slices/noteSlice';
import { getNotes } from '../../services/noteServices';

const getNotesAsync = () => async (dispatch) => {
  try {
    const res = await getNotes();
    dispatch(onGetNotes(res.data));
  } catch {}
};

export { getNotesAsync };
