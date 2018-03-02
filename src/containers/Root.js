import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
    </div>
  </Provider>
);

export default Root;
