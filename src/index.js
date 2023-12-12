import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);