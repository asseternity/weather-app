import APIRequester from "./api_requester";
import APIProcessor from "./api_processor";
import UIDisplay from "./ui_displayer";

let apirequester = new APIRequester();
let apiprocessor = new APIProcessor();
let uidisplay = new UIDisplay();

export default class UIForm {
  async CitySearch() {
    const form = document.querySelector("#search");
    const submit = document.querySelector("#submit");

    submit.addEventListener("click", async (event) => {
      event.preventDefault();

      // form validation
      let regex = /^[a-zA-Z\s]+$/;
      if (!regex.test(form.value)) {
        alert("Please enter only letters and spaces.");
      } else {
        const city = form.value;
        const fetch = await apirequester
          .requestWeatherForecast(city)
          .catch("ERROR FETCHING DATA. PLEASE TRY AGAIN.");
        const data = await apiprocessor
          .processWeatherForecast(fetch)
          .catch("ERROR PROCESSING DATA. PLEASE TRY AGAIN.");
        uidisplay.display(data);
        return data;
      }
    });
  }
}
