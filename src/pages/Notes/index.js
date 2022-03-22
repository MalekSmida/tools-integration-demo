// node modules
import React from 'react';

// local files
import { Input, Note, Button } from '../../components';
import './index.css';

function index() {
  return (
    <div className="notes">
      <h1>Note list</h1>
      <div className="notes__form">
        <Input />
        <Button />
      </div>
      {Array.from({ length: 3 }, (_, idx) => idx).map((_, idx) => (
        <React.Fragment key={idx}>
          <Note />
        </React.Fragment>
      ))}
    </div>
  );
}

export default index;
