// node modules
import { useDispatch } from 'react-redux';

// local files
import './index.css';
import { Button } from '../../components';
import { loginThunk } from '../../redux/thunks/userThunk';

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginThunk());
  };
  return (
    <div className="login">
      <Button title="Login" onSubmit={handleLogin} />
    </div>
  );
}

export default Login;
