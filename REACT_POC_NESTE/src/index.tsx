import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "../src/style/globals";
import { Provider as Redux } from "react-redux";
import { store } from "./redux/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Redux store={store}>
      <GlobalStyles />
      <App />
    </Redux>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
