import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CountryCard from './components/CountryCard/CountryCard';
import Loader from './components/Loader/Loader';

const App = () => {
  const [country, setCountry] = useState(null);
  const [icon, setIcon] = useState('');

  const loadCountryData = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const keyApi = 'e356fc8d5161ab16bc0a376d73093d61';
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keyApi}&units=metric&lang=es`;

      try {
        const res = await axios.get(weatherUrl);
        setCountry(res.data);
        console.log(res.data);
        setIcon(res.data.weather[0].main);
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    loadCountryData();
  }, []);

  return <>{!country ? <Loader /> : <CountryCard icon={icon} country={country} />}</>;
};

export default App;
