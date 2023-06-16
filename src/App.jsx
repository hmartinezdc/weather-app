import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import WeatherCard from './components/WeatherCard/WeatherCard';
import { getCoordinate } from './services/getCoordinates';
import { getCurrentWeather } from './services/getCurrentWeather';
import { getCurrentWeatherByCity } from './services/getCurrentWeatherByCity';
import SwitchButton from './components/SwitchButton/SwitchButton';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState('');
  const [isActiveDarck, setIsActiveDarck] = useState(false);

  const loadWeather = async () => {
    const coordinates = await getCoordinate();

    const weatherData = await getCurrentWeather(
      coordinates.latitude,
      coordinates.longitude,
    );
    setWeather(weatherData);
    setIcon(weatherData.weather[0].icon);
    console.log(weatherData);
  };

  const loadWeatherByCity = async (cityName) => {
    const weatherByCityData = await getCurrentWeatherByCity(cityName);
    if (weatherByCityData.cod >= 400) setWeather(null);

    setWeather(weatherByCityData);
    setIcon(weatherByCityData.weather[0].icon);
    console.log(weatherByCityData);
  };

  const handleSendSubmit = (city) => {
    if (city) {
      loadWeatherByCity(city);
    } else {
      loadWeather();
    }
  };
  useEffect(() => {
    loadWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!weather ? (
        <Loader />
      ) : (
        <>
          <h1 className="app__title">Weather app</h1>
          <SwitchButton
            isActiveDarck={isActiveDarck}
            setIsActiveDarck={setIsActiveDarck}
          />
          <WeatherCard
            onSubmit={handleSendSubmit}
            icon={icon}
            weather={weather}
            isActiveDarck={isActiveDarck}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
