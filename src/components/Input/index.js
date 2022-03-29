// local files
import './index.css';

function Input({ name, value, onInputChange }) {
  const onChangeHandler = (e) => {
    const value = e.target.value;
    onInputChange({ [name]: value });
  };

  return <input onChange={onChangeHandler} name="text" type="text" value={value} />;
}

export default Input;
