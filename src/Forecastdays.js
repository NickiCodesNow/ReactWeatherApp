import React, { useState, useEffect } from "react";
import "./index.css";
import "./Forecastdays.css";
import Day from "./Day";

import axios from "axios";

export default function Forecastdays(props) {
  let [hasResponse, setHasResponse] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setHasResponse(false);
  }, [props.coords]);

  function handleResponse(response) {
    setHasResponse(true);
    setForecastData(response.data.daily);
  }

  if (hasResponse) {
    return (
      <div className="card-body">
        <h3>Next Days</h3>
        <div className="row prediction-week" id="forecast-daily">
          {forecastData.map(function (dailyForecast, index) {
            if (index > 0 && index < 7) {
              return (
                <div className="col-2" key={index}>
                  <Day forecastData={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    const apiKey = "62231151ce343c4d68652e1617efc22f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
