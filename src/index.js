import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TaskListProvider from "./store/TaskListProvider";
import IndexStyled from "./styled/Global.styled.js";
ReactDOM.render(
  <React.StrictMode>
    <TaskListProvider>
      <App />
      <IndexStyled />
    </TaskListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
