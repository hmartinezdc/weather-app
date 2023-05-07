export const getIcons = (idIcon) => {
  const icons = {
    '01d': '/icons/01d.svg',
    '01n': '/icons/01n.svg',
    '02d': '/icons/02d.svg',
    '02n': '/icons/02n.svg',
    '03d': '/icons/03d.svg',
    '03n': '/icons/03n.svg',
    '04d': '/icons/04d.svg',
    '04n': '/icons/04n.svg',
    '09d': '/icons/09d.svg',
    '09n': '/icons/09n.svg',
    '10d': '/icons/10d.svg',
    '10n': '/icons/10n.svg',
    '11d': '/icons/11d.svg',
    '11n': '/icons/11n.svg',
    '13d': '/icons/13d.svg',
    '13n': '/icons/13n.svg',
    '50d': '/icons/50d.svg',
    '50n': '/icons/50n.svg',
  };
  const iconDefault = '/icons/50d.svg';
  const chosenIcon = icons[idIcon] || iconDefault;
  return chosenIcon;
};
