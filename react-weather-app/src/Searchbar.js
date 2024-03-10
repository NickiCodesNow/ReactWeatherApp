import React from "react";
import "./styles.css";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <form id="search-bar">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your city"
          id="enter-city"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="submit-button"
          >
            🔍
          </button>
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="current-Location-button"
          >
            Current Location
          </button>
        </div>
      </div>
    </form>
  );
}
