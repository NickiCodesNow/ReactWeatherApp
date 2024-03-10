import React from "react";

export default function Day(props) {
  return (
    <div className="col-2">
      <img className="forecast-img" src="../images/Cloud.png" alt="" />
      <br />
      <span className="forecast-temp">{props.temp}°C</span>
      <br />
      <span className="daytime">{props.day}</span>
    </div>
  );
}
