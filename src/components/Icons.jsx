const Icons = (icon) => {
  switch (icon) {
    case 'Thunderstorm':
      icon = '/icons/thunderstorms-rain.svg';
      break;
    case 'Drizzle':
      icon = '/icons/drizzle.svg';
      break;
    case 'Rain':
      icon = '/icons/rain.svg';
      break;
    case 'Snow':
      icon = '/icons/snow.svg';
      break;
    case 'snow':
      icon = '/icons/snow.svg';
      break;
    case 'Mist':
      icon = '/icons/mist.svg';
      break;
    case 'Clear':
      icon = '/icons/clear-day.svg';
      break;
    case 'Clouds':
      icon = '/icons/clouds.svg';
      break;

    default:
      icon = '/icons/mist.svg';
      break;
  }
  return icon;
};

export default Icons;
