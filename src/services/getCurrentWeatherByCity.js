import axios from 'axios';
import { celsiusToFahrenheit } from '../utils/celsiusToFahrenheit';
import { getHourByCity } from '../utils/getHourCity';

export const getCurrentWeatherByCity = async (cityName) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e356fc8d5161ab16bc0a376d73093d61&units=metric&lang=es`;

  try {
    const res = await axios.get(URL);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e356fc8d5161ab16bc0a376d73093d61`,
    );

    const weatherDataByCity = {
      cod: res.data.cod,
      name: res.data.name,
      hour: getHourByCity(res.data.dt, res.data.timezone),
      dt: res.data.dt,
      timezone: res.data.timezone,
      clouds: {
        all: res.data.clouds.all,
      },
      sys: {
        country: res.data.sys.country,
        sunrise: res.data.sys.sunrise,
        sunset: res.data.sys.sunset,
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
    return weatherDataByCity;
  } catch (error) {
    console.log(error);
  }
};
