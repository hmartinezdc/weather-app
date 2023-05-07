import axios from 'axios';
import { celsiusToFahrenheit } from '../utils/celsiusToFahrenheit';

export const getCurrentWeather = async (lat, lon) => {
  try {
    const params = {
      lat,
      lon: lon,
      appid: 'e356fc8d5161ab16bc0a376d73093d61',
      units: 'metric',
      lang: 'es',
    };
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params,
    });
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e356fc8d5161ab16bc0a376d73093d61`,
    );

    // return res.data;
    const weatherInfo = {
      name: res.data.name,
      clouds: {
        all: res.data.clouds.all,
      },
      sys: {
        country: res.data.sys.country,
      },
      wind: {
        speed: res.data.wind.speed,
      },
      main: {
        pressure: res.data.main.pressure,
        humidity: res.data.main.humidity,
        temp: res.data.main.temp,
        temp_f: celsiusToFahrenheit(res.data.main.temp),
      },
      weather: [
        {
          main: res.data.weather[0].main,
          descriptionLang: response.data.weather[0].description,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
        },
      ],
    };
    return weatherInfo;
  } catch (error) {
    console.log(error);
  }
};
