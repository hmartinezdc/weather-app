import React from 'react';

const Seeker = ({ onSubmit, changeLangInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputCity = form.cityName;
    onSubmit(inputCity.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="app__form">
      <input
        className="app__form__input"
        type="text"
        name="cityName"
        placeholder={changeLangInput ? 'Write a city' : 'Escribe una ciudad'}
      />
      <button type="submit" className="app__form__button">
        {changeLangInput ? 'Go' : 'Ir'}
      </button>
    </form>
  );
};

export default Seeker;
