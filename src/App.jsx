import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import WeatherCard from './components/WeatherCard/WeatherCard';
import { getCoordinate } from './services/getCoordinates';
import { getCurrentWeather } from './services/getCurrentWeather';
import { getCurrentWeatherByCity } from './services/getCurrentWeatherByCity';
import './App.css';
import SwitchButton from './components/SwitchButton/SwitchButton';
import Footer from './components/Footer/Footer';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState('');
  const [cityName, setCityName] = useState('');
  const [isActiveDarck, setIsActiveDarck] = useState(false);

  useEffect(() => {
    if (!cityName) {
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
      loadWeather();
    } else {
      // loadCityData();
      const loadWeatherByCity = async () => {
        const weatherByCityData = await getCurrentWeatherByCity(cityName);
        if (weatherByCityData.cod >= 400) setWeather(null);

        setWeather(weatherByCityData);
        setIcon(weatherByCityData.weather[0].icon);
        console.log(weatherByCityData);
      };
      loadWeatherByCity();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  return (
    <>
      <h1 className="app__title">Weather app</h1>
      <SwitchButton isActiveDarck={isActiveDarck} setIsActiveDarck={setIsActiveDarck} />
      {!weather ? (
        <Loader />
      ) : (
        <WeatherCard
          icon={icon}
          weather={weather}
          setCityName={setCityName}
          isActiveDarck={isActiveDarck}
        />
      )}
      <Footer />
    </>
  );
};

export default App;
