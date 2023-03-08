import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="background">
      <h1 className="loader__title">Weather app</h1>
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
