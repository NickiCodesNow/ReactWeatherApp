import React, { useState, useEffect, useContext } from "react";
import "./index.css";
import "./Forecastdays.css";
import Day from "./Day";

import axios from "axios";

import { TemperatureUnitContext } from "./TemperatureUnitContext";

export default function Forecastdays(props) {
  let [hasResponse, setHasResponse] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  const { unit } = useContext(TemperatureUnitContext);

  useEffect(() => {
    if (props.coords && unit) {
      const lat = props.coords.lat;
      const lon = props.coords.lon;
      const units = unit === "C" ? "metric" : "imperial";

      const apiKey = "62231151ce343c4d68652e1617efc22f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=${units}&appid=${apiKey}`;

      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch((error) => {
          console.error("Error fetching weather data: ", error);
          setHasResponse(false);
        });
    }
  }, [props.coords, unit]);

  function handleResponse(response) {
    setHasResponse(true);
    setForecastData(response.data.daily);
  }

  if (hasResponse) {
    return (
      <div className="card-body">
        <h3>Next Days</h3>
        <div className="row prediction-week" id="forecast-daily">
          {forecastData.slice(1, 7).map((dailyForecast, index) => (
            <div className="col-2" key={index}>
              <Day forecastData={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
