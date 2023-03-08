const icons = (icon) => {
  switch (icon) {
    case 'Thunderstorm':
      icon = '/public/icons/thunderstorms-rain.svg';
      break;
    case 'Drizzle':
      icon = '/public/icons/drizzle.svg';
      break;
    case 'Rain':
      icon = '/public/icons/rain.svg';
      break;
    case 'Snow':
      icon = '/public/icons/snow.svg';
      break;
    case 'snow':
      icon = '/public/icons/snow.svg';
      break;
    case 'Mist':
      icon = '/public/icons/mist.svg';
      break;
    case 'Clear':
      icon = '/public/icons/clear-day.svg';
      break;
    case 'Clouds':
      icon = '/public/icons/clouds.svg';
      break;

    default:
      icon = '/public/icons/mist.svg';
      break;
  }
  return icon;
};

export default icons;
