import React, { useState } from 'react';
import Button from '../Button/Button';
import Seeker from '../SeeKer/Seeker';
import Footer from '../Footer/Footer';
import { getBackground } from '../../utils/getBackground';
import { getIcons } from '../../utils/getIcons';
import { celsiusToFahrenheit } from '../../utils/celsiusToFahrenheit';

function WeatherCard({ icon, weather, setCityName }) {
  const [changeTem, setChangeTem] = useState(false);
  return (
    <>
      <h1 className="app__title">Weather app</h1>
      <div
        className="app__background"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 43, 65, 0.5), rgba(3, 31, 56, 0.5)), url(${getBackground(
            icon,
          )})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <img src={backGround(icon)} alt="" /> */}
      </div>
      <main className="container">
        <Seeker setSeeker={setCityName} />
        {!changeTem ? (
          <h1 className="container__celcius">{weather.main.temp.toFixed(0)}°</h1>
        ) : (
          <h1 className="container__celcius">
            {celsiusToFahrenheit(weather.main.temp).toFixed(0)}&deg;
          </h1>
        )}
        {!changeTem ? (
          <ul className="container__parameters">
            <li>Viento: {weather.wind.speed}m/s</li>
            <li>Nubosidad: {weather.clouds.all}%</li>
            <li>Presion: {weather.main.pressure}hPa</li>
          </ul>
        ) : (
          <ul className="container__parameters">
            <li>Wind: {weather.wind.speed}m/s</li>
            <li>Clouds: {weather.clouds.all}%</li>
            <li>Pressure: {weather.main.pressure}hPa</li>
          </ul>
        )}

        <div className="container__country">
          <h1>
            {weather.name}, {weather.sys.country}
          </h1>
          {!changeTem ? (
            <h2>{weather.weather[0].description}</h2>
          ) : (
            <h2>{weather.weather[0].descriptionLang}</h2>
          )}
        </div>
        <div className="container__icon">
          <img src={getIcons(icon)} alt="icon Weather" />
        </div>
        <Button changebutton={changeTem} setChangeTem={setChangeTem} />
      </main>
      <Footer />
    </>
  );
}

export default WeatherCard;
