import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="WeatherForecastDay">{day()}</div>
      <img
        src={props.data.condition.icon}
        alt={props.data.condition.description}
        className="WeatherForecastIcon"
      />
      <div>
        <span className="WeatherForecastMax">{maxTemp()}</span>
        <span className="WeatherForecastMin">{minTemp()}</span>
      </div>
    </div>
  );
}
