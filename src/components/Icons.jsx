const Icons = (icon) => {
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
      icon =
        'https://drive.google.com/uc?export=view&id=1hFOLZW9_6zgX-NBEoE_O0tx-5bYJULrz';
      break;

    default:
      icon = '/public/icons/mist.svg';
      break;
  }
  return icon;
};

export default Icons;
