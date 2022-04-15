// node modules
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// local files
import { Main } from './layouts';
import { Notes, Login } from './pages';
import { loadUserThunk } from './redux/thunks/userThunk';
import { selectUser } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(selectUser);

  useEffect(() => {
    dispatch(loadUserThunk());
    return () => {};
  }, [dispatch]);

  return <Main>{isAuthenticated ? <Notes /> : <Login />}</Main>;
}

export default App;
