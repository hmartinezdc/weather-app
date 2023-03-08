import React from 'react';
import './Button.css';

const Button = ({ changeTem, button }) => {
  return (
    <>
      <button className="button" onClick={changeTem}>
        Cambiar a {!button ? 'F°' : 'C°'}
      </button>
    </>
  );
};

export default Button;
