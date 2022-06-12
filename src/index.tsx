import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouterApp from "./routes/RouterApp";
import { BrowserRouter } from "react-router-dom";
import {AuthProvider} from './components/providers/AuthProvider'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
