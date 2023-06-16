export const getHourByCity = (timeStamp, timeZone) => {
  const toMlSeconds = 1000;
  const minToSecond = 60;
  const timeZoneUTC = new Date().getTimezoneOffset();
  //   const time = new Date(
  //     timeStamp * toMlSeconds +
  //       timeZone * toMlSeconds +
  //       timeZoneUTC * minToSecond * toMlSeconds,
  //   );
  const myTimestampCurrent = new Date().getTime();
  const currentTime = new Date(
    myTimestampCurrent + timeZoneUTC * minToSecond * toMlSeconds + timeZone * toMlSeconds,
  );
  const options = { hour: '2-digit', minute: 'numeric', hour12: true };
  const formattedTime = currentTime.toLocaleTimeString('en-US', options);
  return formattedTime;
};
