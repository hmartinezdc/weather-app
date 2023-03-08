const icons = (icon) => {
  switch (icon) {
    case 'Thunderstorm':
      icon = '/public/thunderstorms-rain.svg';
      break;
    case 'Drizzle':
      icon = '/public/drizzle.svg';
      break;
    case 'Rain':
      icon = '/public/rain.svg';
      break;
    case 'Snow':
      icon = '/public/snow.svg';
      break;
    case 'snow':
      icon = '/public/snow.svg';
      break;
    case 'Mist':
      icon = '/public/mist.svg';
      break;
    case 'Clear':
      icon = '/public/clear-day.svg';
      break;
    case 'Clouds':
      icon = '/public/clouds.svg';
      break;

    default:
      icon = '/public/mist.svg';
      break;
  }
  return icon;
};

export default icons;
