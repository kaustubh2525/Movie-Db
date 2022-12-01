import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./services/Store";
import "./style/index.css";
import ContextWrapper from "./context/ContextWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <ContextWrapper>
          <App />
        </ContextWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
