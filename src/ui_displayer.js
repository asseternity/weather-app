import { parse, format } from "date-fns";

export default class UIDisplay {
  display(dataObject) {
    // find the divs
    let slot1_date = document.querySelector("#slot1_date");
    let slot1_icon = document.querySelector("#slot1_icon");
    let slot1_temp = document.querySelector("#slot1_temp");
    let bar1_wind = document.querySelector("#bar1_wind");
    let bar1_humidity = document.querySelector("#bar1_humidity");

    let slot2_date = document.querySelector("#slot2_date");
    let slot2_icon = document.querySelector("#slot2_icon");
    let slot2_temp = document.querySelector("#slot2_temp");
    let bar2_wind = document.querySelector("#bar2_wind");
    let bar2_humidity = document.querySelector("#bar2_humidity");

    let slot3_date = document.querySelector("#slot3_date");
    let slot3_icon = document.querySelector("#slot3_icon");
    let slot3_temp = document.querySelector("#slot3_temp");
    let bar3_wind = document.querySelector("#bar3_wind");
    let bar3_humidity = document.querySelector("#bar3_humidity");

    let bar2 = document.querySelector(".bar2");

    // display city name
    bar2.textContent = `${dataObject.city}, ${dataObject.country}`;

    // today
    while (slot1_icon.children.length > 0) {
      slot1_icon.removeChild(slot1_icon.firstChild);
    }
    let img1 = document.createElement("img");
    img1.src = dataObject.icon;
    slot1_icon.appendChild(img1);

    slot1_temp.textContent = `${dataObject.temperature}°`;
    bar1_wind.textContent = dataObject.wind + " km/h";
    bar1_humidity.textContent = dataObject.humidity + "%";

    const p1 = document.createElement("p");
    bar1_wind.appendChild(p1);
    p1.textContent = "wind";
    const p2 = document.createElement("p");
    bar1_humidity.appendChild(p2);
    p2.textContent = "humidity";

    const dateData1 = dataObject.time;
    const dateObject1 = parse(dateData1, "yyyy-MM-dd", new Date());
    const formattedDate1 = format(dateObject1, "EEEE, MMMM d, yyyy");
    slot1_date.textContent = formattedDate1;

    // tomorrow
    while (slot2_icon.children.length > 0) {
      slot2_icon.removeChild(slot2_icon.firstChild);
    }
    let img2 = document.createElement("img");
    img2.src = dataObject.tomorrow.icon;
    slot2_icon.appendChild(img2);

    slot2_date.textContent = dataObject.tomorrow.date;
    slot2_temp.textContent = `${dataObject.tomorrow.temperature}°`;
    bar2_wind.textContent = dataObject.tomorrow.wind + " km/h";
    bar2_humidity.textContent = dataObject.tomorrow.humidity + "%";

    const p3 = document.createElement("p");
    bar2_wind.appendChild(p3);
    p3.textContent = "wind";
    const p4 = document.createElement("p");
    bar2_humidity.appendChild(p4);
    p4.textContent = "humidity";

    const dateData2 = dataObject.tomorrow.date;
    const dateObject2 = parse(dateData2, "yyyy-MM-dd", new Date());
    const formattedDate2 = format(dateObject2, "EEEE, MMMM d, yyyy");
    slot2_date.textContent = formattedDate2;

    // day after
    while (slot3_icon.children.length > 0) {
      slot3_icon.removeChild(slot3_icon.firstChild);
    }
    let img3 = document.createElement("img");
    img3.src = dataObject.dayAfterTomorrow.icon;
    slot3_icon.appendChild(img3);

    slot3_date.textContent = dataObject.dayAfterTomorrow.date;
    slot3_temp.textContent = `${dataObject.dayAfterTomorrow.temperature}°`;
    bar3_wind.textContent = dataObject.dayAfterTomorrow.wind + " km/h";
    bar3_humidity.textContent = dataObject.dayAfterTomorrow.humidity + "%";

    const p5 = document.createElement("p");
    bar3_wind.appendChild(p5);
    p5.textContent = "wind";
    const p6 = document.createElement("p");
    bar3_humidity.appendChild(p6);
    p6.textContent = "humidity";

    const dateData3 = dataObject.dayAfterTomorrow.date;
    const dateObject3 = parse(dateData3, "yyyy-MM-dd", new Date());
    const formattedDate3 = format(dateObject3, "EEEE, MMMM d, yyyy");
    slot3_date.textContent = formattedDate3;
  }
}
