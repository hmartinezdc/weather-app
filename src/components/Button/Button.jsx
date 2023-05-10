import React from 'react';
import './Button.css';

const Button = ({ changebutton, setChangeTem }) => {
  return (
    <>
      <button className="button" onClick={() => setChangeTem(!changebutton)}>
        {!changebutton ? 'Cambiar a F°' : 'Change to C°'}
      </button>
    </>
  );
};

export default Button;
