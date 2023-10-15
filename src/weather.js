import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setLoading(true);
    setTemperature({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3bddcf4o5cba4b6ddt08f37131006903";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loading) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature: {Math.round(temperature.temperature)}C</li>
          <li> Wind: {temperature.wind}km/h</li>
          <li> Humidity: {temperature.humidity}%</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
