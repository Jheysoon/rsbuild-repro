import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-tabs/style/react-tabs.css";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
