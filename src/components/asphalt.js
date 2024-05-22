export function AsphaltTemperature(airTemp, hours, humidity, cloud_cover) {
  let asphaltTemp = airTemp + 20 - 30 * 1.8;

  if (hours < 11 || hours > 15) {
    asphaltTemp -= 5;
  }
  if (cloud_cover > 30) {
    asphaltTemp -= 5;
  }
  if (humidity > 70) {
    asphaltTemp += 3;
  }
  console.log(asphaltTemp);
  return asphaltTemp;
}
