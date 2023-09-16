import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContactUs from "./components/ContactUs/ContactUs";

const contact_us = ReactDOM.createRoot(document.getElementById("concact_us"));
contact_us.render(
  <React.StrictMode>
    <ContactUs />
  </React.StrictMode>
);
