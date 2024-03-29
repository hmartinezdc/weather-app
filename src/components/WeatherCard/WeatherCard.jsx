import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Seeker from '../SeeKer/Seeker';
import { getBackground } from '../../utils/getBackground';
import { getIcons } from '../../utils/getIcons';
import { getHourByCity } from '../../utils/getHourCity';

function WeatherCard({ icon, weather, isActiveDarck, onSubmit }) {
  const [changeTem, setChangeTem] = useState(false);

  const [currentTime, setCurrentTime] = useState(
    getHourByCity(weather.dt, weather.timezone),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getHourByCity(weather.dt, weather.timezone));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather.timezone]);

  return (
    <>
      <div
        className={isActiveDarck ? 'app__background  active' : 'app__background'}
        style={{
          backgroundImage: `url(${getBackground(icon)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transition: 'all .6s ',
        }}
      ></div>
      <main className={isActiveDarck ? 'container  active' : 'container'}>
        <Seeker onSubmit={onSubmit} changeLangInput={changeTem} />
        {!changeTem ? (
          <p className="container__celcius">
            {weather.main.temp.toFixed(0)}° <span>C</span>
          </p>
        ) : (
          <p className="container__celcius">
            {weather.main.temp_f.toFixed(0)}&deg; <span>F</span>
          </p>
        )}
        {!changeTem ? (
          <ul className="container__parameters">
            <li>Viento: {weather.wind.speed}m/s</li>
            <li>Nubosidad: {weather.clouds.all}%</li>
            <li>Presión: {weather.main.pressure}hPa</li>
          </ul>
        ) : (
          <ul className="container__parameters">
            <li>Wind: {weather.wind.speed}m/s</li>
            <li>Clouds: {weather.clouds.all}%</li>
            <li>Pressure: {weather.main.pressure}hPa</li>
          </ul>
        )}

        <div className="container__country">
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          <h1 className="container__country--city container__country--flex">
            {weather.name}, {weather.sys.country}
          </h1>
          {!changeTem ? (
            <h2 className="container__country--description">
              {weather.weather[0].description}
            </h2>
          ) : (
            <h2 className="container__country--description">
              {weather.weather[0].descriptionLang}
            </h2>
          )}
        </div>
        <div className="container__icon">
          <img src={getIcons(icon)} alt="icon Weather" />
        </div>
        <p className="hour">
          {/* {weather.hour}  */}
          {currentTime}
        </p>
        <Button changebutton={changeTem} setChangeTem={setChangeTem} />
      </main>
    </>
  );
}

export default WeatherCard;
