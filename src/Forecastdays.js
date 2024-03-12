import React from "react";
import "./index.css";
import "./Forecastdays.css";
import Day from "./Day";

import axios from "axios";

export default function Forcastdays(props) {
  let lat = props.coords.lat;
  let lon = props.coords.lon;
  const apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response);
  }

  return (
    <div className="card-body">
      <h3>Next Days</h3>
      <div className="row prediction-week" id="forecast-daily">
        <Day temp={20} day="Thu" />
        <Day temp={17} day="Fri" />
        <Day temp={18} day="Sat" />
        <Day temp={19} day="Sun" />
        <Day temp={21} day="Mon" />
        <Day temp={22} day="Tue" />
      </div>
    </div>
  );
}
