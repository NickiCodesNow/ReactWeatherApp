import React from "react";

export default function Formatteddate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = days[props.date.getDay()];

  let day = props.date.getDate();

  let month = props.date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let year = props.date.getFullYear();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  const options = { timeZone: props.timezone, timeZoneName: "short" };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const timezone = formatter.resolvedOptions().timeZone;

  return (
    <div className="formattedDate">
      {dayName}, {day}.{month}.{year}
      <br />
      {hours}:{minutes} ({timezone})
    </div>
  );
}
