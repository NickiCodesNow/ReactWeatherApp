import React from "react";

export default function Day(props) {
  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function showTemperature() {
    let temperature = Math.round(props.forecastData.temp.day);
    return `${temperature}`;
  }

  return (
    <div className="prediction-day">
      <img
        className="forecast-img"
        src={`https://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`}
        alt=""
      />
      <br />
      <span className="forecast-temp">{showTemperature()}°C</span>
      <br />
      <span className="daytime">{day()}</span>
    </div>
  );
}
