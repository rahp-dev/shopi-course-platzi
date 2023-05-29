import React from "react";
import ReactDOM from "react-dom/client";

import App from "./routes/App.jsx";
import Layout from "./components/Layout/index.jsx";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
