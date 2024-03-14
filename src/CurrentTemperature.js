import React, { useContext } from "react";

import { TemperatureUnitContext } from "./TemperatureUnitContext";

export default function CurrentTemperature(props) {
  const { unit, setUnit } = useContext(TemperatureUnitContext);

  function showCelcius(event) {
    event.preventDefault();
    setUnit("C");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("F");
  }

  function calculateFahrenheit() {
    return Math.round((props.tempdata * 9) / 5 + 32);
  }

  if (unit === "C") {
    return (
      <div className="Currenttemperature">
        <span id="current-temp">{props.tempdata} </span>
        <span className="units">
          <a href="/" className="active" id="celsius-link">
            °C{" "}
          </a>{" "}
          |{" "}
          <a href="/" id="fahrenheit-link" onClick={showFahrenheit}>
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Currenttemperature">
        <span id="current-temp">{calculateFahrenheit()} </span>
        <span className="units">
          <a href="/" id="celsius-link" onClick={showCelcius}>
            °C{" "}
          </a>{" "}
          |{" "}
          <a href="/" className="active" id="fahrenheit-link">
            °F{" "}
          </a>
        </span>
      </div>
    );
  }
}
