import React from "react";
import axios from "axios";

export default function Weather() {
  function search() {
    let apikey = "0f9184c6bbbd99ef0f03atcoa48342a8";
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiurl).then(showTemperature);
  }

  return (
    <div class="row">
      <div class="col">
        <h1 id="city"> Windhoek </h1>
        <ul>
          <li>
            <span id="description"> Clear </span>
          </li>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            id="icon"
          />
        </ul>
      </div>
      <div class="row">
        <div class="col">
          <ul>
            <li>
              {" "}
              <strong id="temperature"> </strong> <span class="unit"> °C </span>
            </li>
            <li>
              speed:<span id="wind"></span> km/h
            </li>
            <li>
              humidity: <span id="humidity"></span>%
            </li>
            <li id="date"> </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
