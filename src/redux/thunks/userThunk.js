/**
 * redux-thunk is already included in redux-toolkit
 * redux-thunk allows you to make async actions (fetching data)
 * thunk = function that returns function
 */
// node modules
import { showLoading, hideLoading } from 'react-redux-loading-bar';

// local files
import { loginService, loadUserService } from '../../services/userServices';
import { onLogin, onLoadUser } from '../slices/userSlice';
import { setJwtInLocalStorage, getJwtFromLocalStorage } from '../../utils/jwt';

// fake jwt should be got from api
const jwtToken = 'fakeToken';

const loginThunk = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const res = await loginService();

    // set Jwt token in local storage
    // so that whenuser will be still authenticated
    setJwtInLocalStorage(jwtToken);

    dispatch(onLogin({ ...res, jwtToken }));

    dispatch(hideLoading());
  } catch {}
};

// call a private api to get logged user data
const loadUserThunk = () => async (dispatch) => {
  try {
    dispatch(showLoading());

    // get token from local storage
    const tokenFromStorage = getJwtFromLocalStorage();
    if (!tokenFromStorage) {
      dispatch(hideLoading());
      return;
    }
    // in order to set user as authenticated first
    dispatch(onLoadUser({ tokenFromStorage }));

    const res = await loadUserService(tokenFromStorage);

    // finish load user data from api and add it to store
    dispatch(onLoadUser({ ...res, tokenFromStorage }));

    dispatch(hideLoading());
  } catch {}
};

export { loginThunk, loadUserThunk };
