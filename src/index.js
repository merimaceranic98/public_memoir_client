import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import initilizeHttpClient from "./config/axios-config";

import { BrowserRouter } from "react-router-dom";

import { memoirs } from "./features/memoirs/reducers/memoirs-reducers";

const store = configureStore({
  reducer: {
    memoirs,
  },
});

initilizeHttpClient();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
