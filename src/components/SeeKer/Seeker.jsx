import React from 'react';

const Seeker = ({ setSeeker }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputCity = form.cityName;

    setSeeker(inputCity.value);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="app__form">
        <input
          className="app__form__input"
          type="text"
          placeholder="Type country name"
          id="cityName"
        />
        <input className="app__form__submit" type="submit" value="Search" />
      </form>
    </>
  );
};

export default Seeker;
