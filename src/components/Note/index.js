// node modules
import { useDispatch } from 'react-redux';

// local files
import './index.css';
import { onDeleteNote } from '../../redux/slices/noteSlice';

function Note({ data }) {
  // redux hooks
  const dispatch = useDispatch();

  // event handlers
  const onClickHandler = () => {
    if (data?.id) {
      const payload = { id: data?.id };
      dispatch(onDeleteNote(payload));
    }
  };

  return (
    <div className="note">
      <p>{data?.title}</p>
      <button className="note__button" onClick={onClickHandler}>
        Remove
      </button>
    </div>
  );
}

export default Note;
