export default class APIRequester {
  key = "d7d5bc3e633041a29e264636240704";
  async requestWeatherForecast(city) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${city}&days=3`;
    const response = await fetch(url, { mode: "cors" });
    return response;
  }
}
