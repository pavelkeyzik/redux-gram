import React, { Component } from "react";
import Posts from "./Posts";
import { Container, Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <Grid columns="equal">
          <Grid.Column>
            <Posts />
          </Grid.Column>
          <Grid.Column width={5}>
            <p>History</p>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
