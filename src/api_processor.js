export default class APIProcessor {
  async processWeatherForecast(promise) {
    try {
      const data = await promise.json();
      const dataObject = {
        city: data.location.name,
        country: data.location.country,
        time: data.forecast.forecastday[0].date,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
        humidity: data.current.humidity,
        temperature: data.current.temp_c,
        wind: data.current.wind_kph,
        tomorrow: {
          temperature: data.forecast.forecastday[1].day.maxtemp_c,
          humidity: data.forecast.forecastday[1].day.avghumidity,
          conditionText: data.forecast.forecastday[1].day.condition.text,
          icon: data.forecast.forecastday[1].day.condition.icon,
          date: data.forecast.forecastday[1].date,
          wind: data.forecast.forecastday[1].day.maxwind_kph,
        },
        dayAfterTomorrow: {
          temperature: data.forecast.forecastday[2].day.maxtemp_c,
          humidity: data.forecast.forecastday[2].day.avghumidity,
          conditionText: data.forecast.forecastday[2].day.condition.text,
          icon: data.forecast.forecastday[2].day.condition.icon,
          date: data.forecast.forecastday[2].date,
          wind: data.forecast.forecastday[2].day.maxwind_kph,
        },
      };
      return dataObject;
    } catch (error) {
      alert(
        "Error processing weather forecast. Please reload the page and try again.",
      );
    }
  }
}
