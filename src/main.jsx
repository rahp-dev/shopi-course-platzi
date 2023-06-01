import React from "react";
import ReactDOM from "react-dom/client";

import App from "./routes/App.jsx";
import Layout from "./components/Layout/index.jsx";

import { ToastContainer } from "react-toastify";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <App />
      <ToastContainer
        position="top-center"
        closeOnClick
        hideProgressBar
        autoClose={1300}
        pauseOnHover={false}
        limit={5}
        style={{ width: "350px" }}
      />
    </Layout>
  </React.StrictMode>
);
