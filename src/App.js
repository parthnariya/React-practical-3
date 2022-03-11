import { Container } from "./containers/Container.js";
import React, { Component } from "react";
import TaskListContext from "./store/taskList-context";
import Main from "./styled/App.styled";


class App extends Component {
  static contextType = TaskListContext;
  componentDidMount() {
    this.context.clearStorage();
  }
  render() {
    return (
      <Main>
        <Container />
      </Main>
    );
  }
}

export default App;
