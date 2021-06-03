import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FavoritesContextProvider } from "./store/FavoritesContextProvider";

ReactDOM.render(
  <FavoritesContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FavoritesContextProvider>,
  document.getElementById("root")
);

reportWebVitals();
