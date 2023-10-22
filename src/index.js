import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import WeatherSearch from "./WeatherSearch";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <WeatherSearch />
        <Weather />
        <br />
        <p>
          <a href="https://github.com/Raonga/react-weather">
            {" "}
            open-sourced code{" "}
          </a>{" "}
          by Raonga Uanivi
        </p>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
