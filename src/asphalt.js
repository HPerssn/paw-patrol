export function AsphaltTemperature(airTemp, windspeed, constant) {
  return (airTemp + constant * Math.sqrt(windspeed) - 32) / 1.8;
}
