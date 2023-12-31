import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureUnit from "./TemperatureUnit";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-3"> {props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-sm-8">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="mb-4"
          ></img>
          <TemperatureUnit celcius={props.data.temperature} />
        </div>
        <div className="col-sm-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}kph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
