const backGround = (icon) => {
  switch (icon) {
    case 'Thunderstorm':
      icon = 'https://cdn.pixabay.com/photo/2015/09/23/08/16/thunder-953118_1280.jpg';
      break;
    case 'Drizzle':
      icon = 'https://cdn.pixabay.com/photo/2019/10/30/21/49/path-4590633_1280.jpg';
      break;
    case 'Rain':
      icon = 'https://cdn.pixabay.com/photo/2019/11/05/01/00/couple-4602505_1280.jpg';
      break;
    case 'Snow':
      icon = 'https://cdn.pixabay.com/photo/2012/12/13/06/39/snow-69661_1280.jpg';
      break;
    case 'snow':
      icon = 'https://cdn.pixabay.com/photo/2012/12/13/06/39/snow-69661_1280.jpg';
      break;
    case 'Mist':
      icon = 'https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg';
      break;
    case 'Clear':
      icon = 'https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_1280.jpg';
      break;
    case 'Clouds':
      icon = 'https://cdn.pixabay.com/photo/2017/02/21/09/02/clouds-2085112_1280.jpg';
      break;

    default:
      icon = 'https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg';
      break;
  }
  return icon;
};

export default backGround;
