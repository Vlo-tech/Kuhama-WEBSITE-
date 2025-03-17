import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ✅ Ensures App.jsx is used
import "./index.css"; // If you have global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
