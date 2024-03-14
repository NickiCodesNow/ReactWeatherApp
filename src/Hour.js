import React from "react";

import "./index.css";

export default function Hour(props) {
  function convertTime() {
    let date = new Date(props.forecastData.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  function showTemperature() {
    let temperature = Math.round(props.forecastData.temp);
    return `${temperature}`;
  }

  return (
    <div class="prediction-hour">
      <img
        className="forecast-img"
        src={`https://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`}
        alt=""
      />
      <br />
      <span className="forecast-temp">{showTemperature()}°C</span>
      <br />
      <span className="daytime">{convertTime()}</span>
    </div>
  );
}
