import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Loader from './components/Loader/Loader';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState('');
  const [cityName, setCityName] = useState('');

  const loadWeatherData = async (latitude, longitude) => {
    const apiKey = 'e356fc8d5161ab16bc0a376d73093d61';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
      const res = await axios.get(weatherUrl);

      setWeather(res.data);
      setIcon(res.data.weather[0].main);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCityData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e356fc8d5161ab16bc0a376d73093d61&units=metric`;
    try {
      const res = await axios.get(url);
      setWeather(res.data);
      setIcon(res.data.weather[0].main);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!cityName) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          loadWeatherData(latitude, longitude);
        },
        (error) => {
          throw error;
        },
      );
    } else loadCityData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  return (
    <>
      {!weather ? (
        <Loader />
      ) : (
        <WeatherCard icon={icon} weather={weather} setCityName={setCityName} />
      )}
    </>
  );
};

export default App;
