import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import history from "../../history";

export default class NavigationMenu extends Component {
  state = {
    activeItem: history.location.pathname
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    history.push(`${name}`);
  };

  render() {
    return (
      <Menu stackable borderless>
        <Menu.Item
          name="/"
          active={this.state.activeItem === "/"}
          onClick={this.handleItemClick}
        >
          HOME
        </Menu.Item>
        <Menu.Item
          name="/profile"
          active={this.state.activeItem === "/profile"}
          onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>
      </Menu>
    );
  }
}
