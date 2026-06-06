import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/cherry-bomb-one";
import ScrolltoTop from "./Components/hooks/ScrolltoTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrolltoTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
