import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store/configureStore";
import Root from "./containers/Root";
import "semantic-ui-css/semantic.min.css";

const store = configureStore();

ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById("root")
);
