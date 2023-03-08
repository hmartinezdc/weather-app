import React, { useEffect, useState } from 'react';
import backGround from '../../utils/backGround';
import Button from '../Button/Button';

import icons from '/src/utils/icons';

function CountryCard({ icon, country }) {
  const [changeTem, getChangeTem] = useState(true);
  const [degreeText, setDegreeText] = useState(false);

  useEffect(() => {
    getChangeTem(!changeTem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [degreeText]);
  return (
    <>
      <h1 className="app__title">Weather app</h1>
      <div className="app__background">
        <img src={backGround(icon)} alt="" />
      </div>
      <div className="container">
        {/* <img src="/public/card.svg" alt="card" className="card__img" /> */}
        {!changeTem ? (
          <h1 className="container__celcius">{parseInt(country?.main.temp)}°</h1>
        ) : (
          <h1 className="container__celcius">
            {parseInt(country.main.temp * 1.8 + 32)}&deg;
          </h1>
        )}

        <ul className="container__parameters">
          <li>Viento: {country.wind.speed}m/s</li>
          <li>Nubosidad: {country.clouds.all}%</li>
          <li>Presion: {country.main.pressure}hPa</li>
        </ul>
        <div className="container__country">
          <h1>
            {country.name}, {country.sys.country}
          </h1>
          <h2>{country.weather[0].description}</h2>
        </div>
        <div className="container__img">
          {/* <img
              src={`http://openweathermap.org/img/wn/${country.weather[0].icon}@2x.png`}
              alt=""
            /> */}
          <img src={icons(icon)} alt="icon Weather" />
        </div>
        <Button button={degreeText} changeTem={() => setDegreeText(!degreeText)} />
      </div>
    </>
  );
}

export default CountryCard;
