import React from "react";
import App from "./App";
import Profile from "./Profile";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <NavigationMenu key="navigation-menu" />
      <Route path="/" exact component={App} />
      <Route path="/profile" component={Profile} />
    </div>
  </Provider>
);

export default Root;
