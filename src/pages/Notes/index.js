// node modules
import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// local files
import './index.css';
import { Input, Note, Button } from '../../components';
import { selectNote } from '../../redux/slices/noteSlice';
import { addNoteThunk } from '../../redux/thunks/noteThunk';

function Notes() {
  // redux hooks
  /**
   * redux store = { note: {noteList: []} }
   */
  const { noteList } = useSelector(selectNote);
  const dispatch = useDispatch();

  // state
  const [inputData, setInputData] = useState({
    text: ''
  });

  // event handler
  const onInputChange = (data) => {
    setInputData((state) => ({ ...state, ...data }));
  };

  const onSubmit = () => {
    if (inputData.text === '') return;
    // building note object
    const noteObj = {
      title: inputData.text
    };
    dispatch(addNoteThunk(noteObj));
    setInputData((state) => ({ ...state, text: '' }));
  };

  return (
    <div className="notes">
      <h1>Note list</h1>
      <div className="notes__form">
        <Input name="text" value={inputData.text} onInputChange={onInputChange} />
        <Button onSubmit={onSubmit} />
      </div>
      {noteList?.map((note) => (
        <Fragment key={note.id}>
          <Note data={note} />
        </Fragment>
      ))}
    </div>
  );
}

export default Notes;
