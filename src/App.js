import { Container } from "./components/Container/Container";
import TaskListProvider from "./store/TaskListProvider";
import styled from "styled-components";
import React, {Component} from "react";
import TaskListContext from "./store/taskList-context";



const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
class App extends Component {
  static contextType = TaskListContext
  componentDidMount(){
    this.context.clearStorage()
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
