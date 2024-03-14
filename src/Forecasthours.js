import React, { useState, useEffect, useContext } from "react";
import "./index.css";
import "./Forecasthours.css";
import Hour from "./Hour";

import axios from "axios";

import { TemperatureUnitContext } from "./TemperatureUnitContext";

export default function Forcasthours(props) {
  let [hasResponse, setHasResponse] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  const { unit } = useContext(TemperatureUnitContext);

  useEffect(() => {
    if (props.coords && unit) {
      const lat = props.coords.lat;
      const lon = props.coords.lon;
      const units = unit === "C" ? "metric" : "imperial";

      const apiKey = "62231151ce343c4d68652e1617efc22f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&units=${units}&appid=${apiKey}`;

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
    setForecastData(response.data.hourly);
    console.log(response.data.hourly);
  }

  if (hasResponse) {
    return (
      <div className="card-body">
        <h3>Next Hours</h3>
        <div className="row prediction-hourly">
          {forecastData
            .filter((_, index) => [3, 6, 9, 12].includes(index))
            .map((hourlyForecast, index) => (
              <div className="col-3" key={index}>
                <Hour forecastData={hourlyForecast} />
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
