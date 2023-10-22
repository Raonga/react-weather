import React from "react";

export default function Weather() {
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
