// node modules
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// local files
import { Main } from './layouts';
import { Notes } from './pages';
import { getNotesThunk } from './redux/thunks/noteThunk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesThunk());
    return () => {};
  }, [dispatch]);

  return (
    <Main>
      <Notes />
    </Main>
  );
}

export default App;
