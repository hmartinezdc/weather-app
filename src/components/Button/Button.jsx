import React from 'react';
import './Button.css';

const Button = ({ changeTem, changebutton }) => {
  return (
    <>
      <button className="button" onClick={changeTem}>
        Cambiar a {!changebutton ? 'F°' : 'C°'}
      </button>
    </>
  );
};

export default Button;
