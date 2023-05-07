import React from 'react';
import './Button.css';

const Button = ({ changebutton, setChangeTem }) => {
  return (
    <>
      <button className="button" onClick={() => setChangeTem(!changebutton)}>
        Cambiar a {!changebutton ? 'F°' : 'C°'}
      </button>
    </>
  );
};

export default Button;
