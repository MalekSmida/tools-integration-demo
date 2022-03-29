// local files
import './index.css';

function Button({ onSubmit }) {
  return (
    <button className="customButton" onClick={onSubmit}>
      Submit
    </button>
  );
}

export default Button;
