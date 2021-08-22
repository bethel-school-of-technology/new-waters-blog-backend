import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import Users from "./dataPull/Users";

const getData = () => {
  fetch("http://localhost:5000/")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
getData();

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      {/* <Users /> */}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
