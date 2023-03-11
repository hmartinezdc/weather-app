import React, { useState } from 'react';
import backGround from '../../utils/backGround';
import Button from '../Button/Button';
import Icons from '../Icons';
import Seeker from '../SeeKer/Seeker';

function WeatherCard({ icon, weather, setCityName }) {
  const [changeTem, setChangeTem] = useState(false);

  return (
    <>
      <h1 className="app__title">Weather app</h1>

      <div className="app__background">
        <img src={backGround(icon)} alt="" />
      </div>
      <div className="container">
        <Seeker setSeeker={setCityName} />
        {!changeTem ? (
          <h1 className="container__celcius">{parseInt(weather.main.temp)}°</h1>
        ) : (
          <h1 className="container__celcius">
            {parseInt(weather.main.temp * 1.8 + 32)}&deg;
          </h1>
        )}

        <ul className="container__parameters">
          <li>Viento: {weather.wind.speed}m/s</li>
          <li>Nubosidad: {weather.clouds.all}%</li>
          <li>Presion: {weather.main.pressure}hPa</li>
        </ul>

        <div className="container__country">
          <h1>
            {weather.name}, {weather.sys.country}
          </h1>
          <h2>{weather.weather[0].description}</h2>
        </div>

        <div className="container__img">
          <img src={Icons(icon)} alt="icon Weather" />
        </div>

        <Button changebutton={changeTem} changeTem={() => setChangeTem(!changeTem)} />
      </div>
    </>
  );
}

export default WeatherCard;
