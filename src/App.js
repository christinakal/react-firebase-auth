import React from "react";

// --- components
import Login from "./components/Login";

// --- styles
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="main-image">
        <img alt="main-svg" src={require("./images/join.svg")} />
      </div>
      <div className="login-page">
        <Login />
      </div>
    </div>
  );
}

export default App;
