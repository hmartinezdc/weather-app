import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader/Loader';
import WeatherCard from './components/WeatherCard/WeatherCard';
import { getCoordinate } from './services/getCoordinates';
import { getCurrentWeather } from './services/getCurrentWeather';
import { getCurrentWeatherByCity } from './services/getCurrentWeatherByCity';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState('');
  const [cityName, setCityName] = useState('');

  // const loadWeatherData = async (latitude, longitude) => {
  //   const apiKey = 'e356fc8d5161ab16bc0a376d73093d61';
  //   const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  //   try {
  //     const res = await axios.get(weatherUrl);

  //     setWeather(res.data);
  //     // setIcon(res.data.weather[0].main);
  //     setIcon(res.data.weather[0].icon);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const loadCityData = async () => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e356fc8d5161ab16bc0a376d73093d61&units=metric`;
  //   try {
  //     const res = await axios.get(url);
  //     setWeather(res.data);
  //     setIcon(res.data.weather[0].icon);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // if (!cityName) {
    //   navigator.geolocation.getCurrentPosition(
    //     async (position) => {
    //       const latitude = position.coords.latitude;
    //       const longitude = position.coords.longitude;
    //       loadWeatherData(latitude, longitude);
    //     },
    //     (error) => {
    //       throw error;
    //     },
    //   );
    // } else loadCityData();

    //Lo nuevo que se ha añadido

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
        if (weatherByCityData.code >= 400) setWeather(null);
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
      {!weather ? (
        <Loader />
      ) : (
        <WeatherCard icon={icon} weather={weather} setCityName={setCityName} />
      )}
    </>
  );
};

export default App;
