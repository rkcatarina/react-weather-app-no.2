import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather defaultCity="Rome" />
      <footer>
        This project was coded by Catarina Redshaw Kranich and is
        <a
          href="https://github.com/rkcatarina/react-weather-app-no.2"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/rkcatarina/react-weather-app-no.2"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
