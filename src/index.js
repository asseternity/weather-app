import "./styles.css";
import UIForm from "./ui_form";
let uiform = new UIForm();
uiform.CitySearch();

// // testing
// import APIRequester from "./api_requester";
// import APIProcessor from "./api_processor";
// import UIDisplay from "./ui_displayer";

// let apirequester = new APIRequester();
// let apiprocessor = new APIProcessor();
// let uidisplay = new UIDisplay();

// async function Test() {
//   const city = "almaty";
//   const fetch = await apirequester.requestWeatherForecast(city);
//   const data = await apiprocessor.processWeatherForecast(fetch);
//   uidisplay.display(data);
//   return data;
// }

// Test();

// To do:
// 7) error catching
// 4) pick colors and set vars
// 5) style
// 6) responsive
