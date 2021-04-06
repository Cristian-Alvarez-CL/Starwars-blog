//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.min.css";

//include your index.scss file into the bundle
import "./styles/index.css";

//import your own components
import Layout from "./js/layout";

import 'jquery';
import 'popper.js';
import 'bootstrap';

//render your react application
ReactDOM.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);