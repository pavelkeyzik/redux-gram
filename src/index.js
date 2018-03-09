import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import configureStore from "./store/configureStore";
import Root from "./containers/Root";
import "semantic-ui-css/semantic.min.css";
import "./styles/app.css";
import history from "./history";

const store = configureStore();

ReactDOM.render(
  <Router history={history}>
    <Root store={store} />
  </Router>,
  document.getElementById("root")
);
