export const getBackground = (idIcon) => {
  const backgrounds = {
    '01d': 'https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_1280.jpg',
    '01n': 'https://cdn.pixabay.com/photo/2019/10/04/18/36/milky-way-4526277_1280.jpg',
    '02d': 'https://cdn.pixabay.com/photo/2015/09/28/16/01/village-962300_1280.jpg',
    '02n': 'https://cdn.pixabay.com/photo/2020/04/17/14/16/lake-5055384_1280.jpg',
    '03d':
      'https://cdn.pixabay.com/photo/2015/10/28/19/07/blue-sky-and-clouds-1011155_1280.jpg',
    '03n': 'https://cdn.pixabay.com/photo/2015/10/30/20/13/boat-1014711_1280.jpg',
    '04d': 'https://cdn.pixabay.com/photo/2017/02/21/09/02/clouds-2085112_1280.jpg',
    '04n': 'https://cdn.pixabay.com/photo/2018/05/30/15/39/thunderstorm-3441687_1280.jpg',
    '09d': 'https://cdn.pixabay.com/photo/2019/10/30/21/49/path-4590633_1280.jpg',
    '09n': 'https://cdn.pixabay.com/photo/2018/01/29/19/00/park-3116883_1280.jpg',
    '10d': 'https://cdn.pixabay.com/photo/2019/11/05/01/00/couple-4602505_1280.jpg',
    '10n': 'https://cdn.pixabay.com/photo/2019/05/19/11/18/park-4213832_1280.jpg',
    '11d': 'https://cdn.pixabay.com/photo/2019/02/22/13/26/lightning-4013537_1280.jpg',
    '11n': 'https://cdn.pixabay.com/photo/2015/09/23/08/16/thunder-953118_1280.jpg',
    '13d': 'https://cdn.pixabay.com/photo/2012/12/13/06/39/snow-69661_1280.jpg',
    '13n': 'https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_1280.jpg',
    '50d': 'https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg',
    '50n': 'https://cdn.pixabay.com/photo/2014/11/26/03/52/foggy-545838_1280.jpg',
  };
  const backgroundDefault =
    'https://cdn.pixabay.com/photo/2014/11/26/03/52/foggy-545838_1280.jpg';
  const chosenImage = backgrounds[idIcon] || backgroundDefault;
  return chosenImage;
};
