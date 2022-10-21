import "./App.css";
import logo from "./logo.svg"

import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";

function send_request(on_off) {
  const Http = new XMLHttpRequest();
  let url = "http://192.168.101.143:80";

  if (on_off) {
    url = url + "/ledon"
  } else {
    url = url + "/ledoff"
  }

  console.log(url)

  Http.open("GET", url);
  Http.send();

  // Http.onreadystatechange = (e) => {
  //   console.log(Http.responseText);
  // };
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Home automata
        </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="btn-wrap">
          Control your light from a far.
        </div>
        <DayNightToggle
          onChange={() => {
            setIsDarkMode(!isDarkMode);
            send_request(!isDarkMode);
          }}
          checked={isDarkMode}
        />
      </header>
    </div>
  );
}

export default App;
