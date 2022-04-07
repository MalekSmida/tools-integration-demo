// local files
import './index.css';

function Button({ title, onSubmit }) {
  return (
    <button className="customButton" onClick={onSubmit}>
      {title}
    </button>
  );
}

export default Button;
