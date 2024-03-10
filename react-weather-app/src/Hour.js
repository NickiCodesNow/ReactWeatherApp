import React from "react";

export default function Hour(props) {
  return (
    <div class="col-3">
      <img className="forecast-img" src="../images/Cloud.png" alt="" />
      <br />
      <span className="forecast-temp">{props.temp}°C</span>
      <br />
      <span className="daytime">{props.time}</span>
    </div>
  );
}
