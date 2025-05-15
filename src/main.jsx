import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./component/Navbar.jsx";
import Flexbox from "./component/Flexbox.jsx";
import Grid from "./component/Grid.jsx";
import Newsletter from "./component/Newsletter.jsx";
import Object_fit from "./component/Object_fit.jsx";
import Position from "./component/Position.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Navbar/> */}
    {/* <Flexbox/> */}
    {/* <Grid/>
    <Newsletter/> */}
    {/* <Object_fit/> */}
    <Position />
  </StrictMode>
);
