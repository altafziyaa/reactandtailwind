import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./component/Navbar.jsx";
import Flexbox from "./flexbox/Flexbox.jsx";
import Grid from "./Grid/Grid.jsx";
import Newsletter from "./component/Newsletter.jsx";
import Object_fit from "./component/Object_fit.jsx";
import Position from "./flexbox/Position.jsx";
import FlexDirection from "./flexbox/FlexDirection.jsx";
import AlignItems from "./component/AlignItems.jsx";
import AlignSelf from "./flexbox/AlignSelf.jsx";
import FlexProperty from "./flexbox/FlexProperty.jsx";
import FlexGrow from "./flexbox/FlexGrow.jsx";
// import TemplateCol from "./Grid/TemplateCol.jsx";
// import GridColStart from "./Grid/GridColStart.js";
// import GridFlow from "./Grid/GridFlow.jsx";
import JustifyContent from "./aligment/JustifyContent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Navbar/> */}
    {/* <Flexbox/> */}
    {/* <Grid/> */}
    {/* <Newsletter/> */}
    {/* <Object_fit/> */}
    {/* <Position /> */}
    {/* <FlexDirection/> */}
    {/* <AlignItems/> */}
    {/* <AlignSelf/> */}
    {/* <FlexProperty/> */}
    {/* <FlexGrow/> */}
    {/* <TemplateCol/> */}
    {/* <GridColStart/> */}
    {/* <GridFlow/> */}
    <JustifyContent />
  </StrictMode>
);
